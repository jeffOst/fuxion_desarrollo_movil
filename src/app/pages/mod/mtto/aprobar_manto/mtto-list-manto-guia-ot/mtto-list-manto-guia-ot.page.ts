import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import {
  Router,
  NavigationExtras,
  ActivatedRoute,
  ROUTES,
} from '@angular/router';

import { Storage } from '@ionic/storage';
import { InformeCab } from 'src/app/interfaces/mtto/InformeTecnico';
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Network, ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-mtto-list-manto-guia-ot',
  templateUrl: './mtto-list-manto-guia-ot.page.html',
  styleUrls: ['./mtto-list-manto-guia-ot.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MttoListMantoGuiaOtPage implements OnInit {
  navParamsAny: any;
  Cancelar: string = 'Cancelar';
  disableButton: boolean = false;
  codsmg: string;
  id_orden_trab_cab: string;
  id_orden_trab_fis_cab: string;
  estaCargando: boolean = false;
  DataSetGrid: any;
  selectedItems: string[] = [];
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public storage: Storage,
    private ApiService: MttoOrdentrabajoService
  ) {
    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
  }

  ngOnInit() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });
  }

  ionViewWillEnter() {
    this.codsmg = this.navParamsAny.codsmg;
    this.id_orden_trab_cab = this.navParamsAny.id_orden_trab_cab;
    this.id_orden_trab_fis_cab = this.navParamsAny.id_orden_trab_fis_cab;
    this.ListBlockGuiasRemiCabOtis();
  }

  //CARGA LAS GUIAS ASOCIADAS A LAS OT'S
  ListBlockGuiasRemiCabOtis() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true,
      })
      .then((loading) => {
        loading.present();
        this.ApiService.FListBlockGuiasRemiCabOtis('47', this.id_orden_trab_cab)
          .then((res) => {
            this.DataSetGrid = res;
            this.loadingController.dismiss();
            this.estaCargando = false;
          })
          .finally(() => {
            this.loadingController.dismiss();
            setTimeout(() => {}, 600);
          })
          .catch(() => {})
          .then((err) => {
            loading.dismiss();
          });
      });
  }

  async DeleteRowGuiaCab(Row: any) {
    // Crear y mostrar el mensaje de confirmación
    const confirmAlert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas eliminar el registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operación cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Procesando...',
            });
            await loading.present();
            await this.ApiService.FDeleteRowGuiaCabOtis(
              '48',
              Row.idblockguiaremicab
            )
              .then(async (res) => {
                this.loadingController.dismiss(); // Cerrar el loading

                let css_msj =
                  res[0].o_nres == '0' ? 'alerta-error' : 'alerta-ok';
                const alert = await this.alertController.create({
                  header: 'ALERTA',
                  subHeader: 'Confirmación',
                  cssClass: css_msj,
                  mode: 'ios',
                  animated: true,
                  message: res[0].o_msj, // 'La operación se completó con éxito.',
                  buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        if (res[0].o_nres == '1') {
                          this.ListBlockGuiasRemiCabOtis();
                        }
                      },
                    },
                  ],
                });
                await alert.present();
              })
              .finally(() => {})
              .catch((err) => {
                this.loadingController.dismiss(); // Cerrar el loading en caso de error
              });
          },
        },
      ],
    });

    await confirmAlert.present();
  }

  FNavigatePageDetalleGuiaOT(Row: any) {
    let navigationExtras: NavigationExtras = {state: {Row}};
    this.navCtrl.navigateForward(['/mtto-win-manto-pend'], navigationExtras);
  }

  FBtnCrearCabeceraGuia() {
    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true,
    })
    .then((loading) => {
      loading.present();
      this.ApiService.FCreaCabeceraGuiaOti('45', this.id_orden_trab_cab, this.IdUsuarioLocal)
        .then((res) => {
          this.loadingController.dismiss();
          this.estaCargando = false;
          let navigationExtras: NavigationExtras = { 
            state: { 
              Row: { 
                cod_bomba: this.codsmg,
                nro_oti: this.id_orden_trab_fis_cab,
                id_ot_vale_salida_bgc: this.id_orden_trab_cab,
                idblockguiaremicab: res[0].o_nres,
                correguia: res[0].o_msj
              },
            }, 
          };
          this.navCtrl.navigateForward(['/mtto-win-manto-pend'], navigationExtras);
        })
        .finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
          }, 600);
        })
        .catch(() => {
        })
        .then(request => {
          loading.dismiss();
        });
    });
  }
}
