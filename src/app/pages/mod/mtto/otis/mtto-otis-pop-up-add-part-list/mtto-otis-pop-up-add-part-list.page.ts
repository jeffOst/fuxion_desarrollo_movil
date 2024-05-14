import { Storage } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController, IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';

import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { ActivatedRoute } from '@angular/router';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';

@Component({
  selector: 'app-mtto-otis-pop-up-add-part-list',
  templateUrl: './mtto-otis-pop-up-add-part-list.page.html',
  styleUrls: ['./mtto-otis-pop-up-add-part-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MttoOtisPopUpAddPartListPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;
  constructor(
    private loadingController: LoadingController,
    public ApiService: MttoOrdentrabajoService,
    public modalCtrl: ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams,
    private alertController: AlertController,
    private toastController: ToastController,
    public storage: Storage,
    public globalVal: GlovalProvider
  ) {
    //console.log(this.TipoEquipo);
    // this.idvaleservidetot_param=navParams.get('idvaleservidetot_p');
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });

    // this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    // console.log(this.router.getCurrentNavigation().extras.state);
    // console.log(this.router.getCurrentNavigation().extras.state['Row']);
    // console.log(this.navParamsAny);
    this.FormModel = {};
    this.FormModel.idot = this.navParams.get('row')['id_orden_trab_cab'];
    this.FormModel.ot = false;
    this.FormModel.im = true;
    this.FormModel.it = true;
    this.FormModel.o_nres = 0;
    this.tituloVentana = 'PartList';

    this.FormModel.tipo = globalVal.tipo;
    this.FormModel.modelo = globalVal.modelo;
    this.FormModel.marca = globalVal.marca;
    this.FormModel.potencia = globalVal.potencia;
  }
  results_equipos: any;
  FormModel: any;
  search_term_equipo = '';
  switchButtonSegmento: string = '';
  selectedRow: number | null = null;
  tituloVentana: string = '';
  DsTipoMotivo: any;
  NombresUsuarioLocal: any;
  IdUsuarioLocal: any;
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  ngOnInit() {}

  async cancelar_listaequipos(idequipo, id_orden_trab_fis_cab, fch_inicio_ot) {
    const onClosedData: any = {
      idequipo: idequipo,
      id_orden_trab_fis_cab: id_orden_trab_fis_cab,
      fch_inicio_ot: fch_inicio_ot,
    };
    await this.modalCtrl.dismiss(onClosedData);
  }

  lista_equipos(event, op: number) {
    event.preventDefault();
    this.searchTerm = event.target.value;
    if (this.searchTerm.trim().length >= 5 || op === 1) {
      const loading = this.loadingController
        .create({
          //spinner: null,
          //duration: 5000,
          message: 'Cargando lista...::',
          translucent: true, //,
        })
        .then((loading) => {
          loading.present();
          let acc = '31';
          this.ApiService.ListaPartList(
            this.search_term_equipo,
            this.FormModel.pd,
            this.FormModel.ot,
            this.FormModel.im,
            this.FormModel.it,
            acc,
            this.FormModel.idot
          )
            .then((res) => {
              this.results_equipos = res;
              this.loadingController.dismiss();
            })
            .finally(() => {
              this.loadingController.dismiss();
              setTimeout(() => {
                this.idinputsearch_equipo.setFocus();
              }, 700);
            });
        });
    }
  }
  async SeleccionarEquipo(item_equipo: any) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea cargar el PartList seleccionado?',
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.SaveItemAdded(item_equipo);
            //this.cancelar_listaequipos(codsmg,id_orden_trab_fis_cab,fch_inicio_ot);
          },
        },
      ],
    });

    await alert.present();
  }
  //////////////////////

  async SaveItemAdded(row: any) {
    if (this.FormModel.potencia != '') {
      ///////////////////////////////////////////////////////////////////
      const loading = this.loadingController
        .create({
          message: 'Guardando PartList...',
          translucent: true, //,
          //cssClass: 'custom-class custom-loading'
        })
        .then((loading) => {
          loading.present();
        });
      this.FormModel.Y04001 = row.Y04001;
      /*id_orden_trab_cab,filtro*/
      this.FormModel.IdUsuarioLocal = this.IdUsuarioLocal;

      await this.ApiService.GuardarPartList(row)
        .then(async (res) => {
          this.loadingController.dismiss();
          let css_msj = res[0].o_nres == '0' ? 'alerta-error' : 'alerta-ok';
          const alert = await this.alertController.create({
            header: 'ORDEN DE TRABAJO',
            subHeader: 'PartList',
            cssClass: css_msj,
            mode: 'ios',
            animated: true,
            message: res[0].o_msj, // 'La operación se completó con éxito.',
            buttons: [
              {
                text: 'Aceptar',

                handler: async () => {
                  // Realiza acciones adicionales después de aceptar la confirmación
                  console.log('Operación confirmada');
                  this.FormModel.o_nres = res[0].o_nres;
                  if (res[0].o_nres == '1') {
                    console.log(this.FormModel.window);
                    this.presentToast(res[0].o_msj);
                    if (!this.FormModel.window) {
                      const onClosedData: any = row;
                      await this.modalCtrl.dismiss(onClosedData);
                    }
                  } else {
                    //alert(res[0].o_msj);
                    this.presentToast(res[0].o_msj);
                  }
                },
              },
            ],
          });

          await alert.present();
        })
        .finally(() => {
          console.log('finally:::>>LN:394');

          //this.navCtrl.navigateForward(["mtto-list-recinado"]);
        })
        .catch((err) => {
          console.log('errror:::>>>>>>>>>', err);
        });
      //////////////////////////////////////////////////////////
    } else {
      const alert = await this.alertController.create({
        header: 'ORDEN DE TRABAJO',
        subHeader: 'MATERIALES',
        cssClass: 'alerta-error',
        mode: 'ios',
        animated: true,
        message: 'Falta asignar cantidad', // 'La operación se completó con éxito.',
        buttons: [
          {
            text: 'Aceptar',

            handler: () => {
              // Realiza acciones adicionales después de aceptar la confirmación
              console.log('Operación confirmada');
            },
          },
        ],
      });

      await alert.present();

      //////////////////
    }
  }

  FSelectChangeTipoMotivo(event) {}

  ionViewWillEnter() {
    this.FLoadForms();
  }

  ////////////////////
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        this.ApiService.FLoadMotivoAdicional('0', '1').then((rest) => {
          this.DsTipoMotivo = rest['motivo'];
          loading.dismiss();
        });
      });
  }
  ////////////////////////////////
  async presentToast(message: any) {
    console.log('ingreso toast');

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}
