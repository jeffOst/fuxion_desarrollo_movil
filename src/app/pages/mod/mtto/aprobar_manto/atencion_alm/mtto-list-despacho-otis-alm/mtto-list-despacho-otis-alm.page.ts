import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';

import { NavigationExtras } from '@angular/router';
//import { MttoChekListMontajeService } from "../../../../api/services/mtto/mtto-chek-list-montaje.service";
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
//import { CheckListCab } from 'src/app/interfaces/mtto/CheckListMtto';
import { Storage } from '@ionic/storage';
import { HeaderComponent } from '../../../../../../components/header/header.component';

@Component({
  selector: 'app-mtto-list-despacho-otis-alm',
  templateUrl: './mtto-list-despacho-otis-alm.page.html',
  styleUrls: ['./mtto-list-despacho-otis-alm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class MttoListDespachoOtisAlmPage implements OnInit {
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  estaCargando: boolean = false;
  DataSetGrid: any;
  scanActive: boolean = true;
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService
  ) {}

  

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
    this.FListaEquiposPendManto();
  }

  FListaEquiposPendManto() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true,
      })
      .then((loading) => {
        loading.present();
        this.ApiService.ListFindOtsManto('43', '')
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

  FNavigatePageDet(Row: any) {
    this.FBtnCrearCabeceraGuia(Row);
  }

  FBtnCrearCabeceraGuia(Row: any) {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true,
      })
      .then((loading) => {
        loading.present();
        this.ApiService.FCreaCabeceraGuiaOti(
          '45',
          Row.id_orden_trab_cab,
          this.IdUsuarioLocal
        ).then((res) => {
          let idblockguiaremicab = res[0].o_nres;
          let flag = res[0].p1;
          let corre = res[0].o_msj;
          let estaboBtnGuia = res[0].p2;
          this.ApiService.FCreaDetalleGuiaOti(
            '49',
            Row.id_orden_trab_cab,
            idblockguiaremicab,
            flag,
            '001'
          )
            .then((res) => {
              this.loadingController.dismiss();
              this.estaCargando = false;
              let navigationExtras: NavigationExtras = {
                state: {
                  Row: {
                    cod_bomba: Row.codsmg,
                    nro_oti: Row.id_orden_trab_fis_cab,
                    id_ot_vale_salida_bgc: Row.id_orden_trab_cab,
                    idblockguiaremicab: idblockguiaremicab,
                    correguia: corre,
                    estaboBtnGuia: estaboBtnGuia,
                  },
                },
              };
              this.navCtrl.navigateForward(['/mtto-win-despacho-otis1'], navigationExtras);
              console.log("otra pagina");
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
      });
  }

  getProgressBarClass(value: number) {
    
    if (value == 0) {
      return 'bg-danger';
    } else if (value < 50) {
      return 'bg-danger';
    } else if (value < 100 && value > 50) {
      return 'bg-success';
    } else if (value >= 100) {
      return 'bg-success';
    } else {
      return 'bg-danger';
    }

  }
}
