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
import { Location } from '@angular/common';


@Component({
  selector: 'app-mtto-win-manto-pend',
  templateUrl: './mtto-win-manto-pend.page.html',
  styleUrls: ['./mtto-win-manto-pend.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MttoWinMantoPendPage implements OnInit {
  navParamsAny: any;
  Cancelar: string = 'Cancelar';
  disableButton: boolean = false;
  cod_bomba : string;
  id_ot_vale_salida_bgc: string;
  nro_oti : string;
  idblockguiaremicab: string;
  correguia: string;
  estaCargando: boolean = false;
  DataSetGrid: any;
  selectedItems: string[] = [];
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  scanActive: boolean = true;
  estaboBtnGuia: string;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public  storage: Storage,
    private ApiService: MttoOrdentrabajoService,
    private navCtrl: NavController,
    private location: Location
  ) {

    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    // this.idblockguiaremicab_new = this.router.getCurrentNavigation().extras.state['idblockguiaremicab_new'];
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
    this.id_ot_vale_salida_bgc = this.navParamsAny.id_ot_vale_salida_bgc;
    this.cod_bomba = this.navParamsAny.cod_bomba;
    this.nro_oti = this.navParamsAny.nro_oti;
    this.correguia = this.navParamsAny.correguia;
    this.idblockguiaremicab = this.navParamsAny.idblockguiaremicab
    this.estaboBtnGuia = this.navParamsAny['ma00estado#nombre'];
    this.ListBlockGuiasRemiDetOtis();
  }


  ListBlockGuiasRemiDetOtis(){ //CARGA EL DETALLE DE LAS OTIS POR ATENDER
    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true,
    })
    .then((loading) => {
      loading.present();
      this.ApiService.FlistBlockGuiasRemiDetOtis('44', this.idblockguiaremicab, '')
        .then((res) => {
          this.DataSetGrid = res;
          this.loadingController.dismiss();
          this.estaCargando = false;
        })
        .finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
          }, 600);
        })
        .catch(() => {
        })
        .then((err) => {
          loading.dismiss();
        });
    });
  }

  AprobacionItemsOt(){
    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true,
    }).then((loading) => {
      loading.present();
      this.ApiService.FAprobacionItemsOt('50', this.idblockguiaremicab)
        .then((res) => {
          this.loadingController.dismiss();
          this.estaCargando = false;
          this.location.back();
        })
        .finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
          }, 600);
        })
        .catch(() => {
        })
        .then((err) => {
          loading.dismiss();
        });
    });
  }

  async onCheckboxChange(Row: any){
    this.ApiService.SaveCheckAtencionDet('46', Row.iddetguiaremi, Row.flag_ejecuta_bgd ? '1' : '0').then((res) => {
    });
  }

  // CreaDetalleGuiaOti(){ //creamos la cabecera de ALM.block_guiaremi_cab y el detalle
  //   const loading = this.loadingController
  //   .create({
  //     message: 'Cargando lista...',
  //     translucent: true,
  //   })
  //   .then((loading) => {
  //     loading.present();
  //     this.ApiService.FCreaDetalleGuiaOti('49', this.id_ot_vale_salida_bgc, this.idblockguiaremicab, '0', '001')
  //       .then((res) => {
  //         this.loadingController.dismiss();
  //         this.estaCargando = false;
  //         this.ListBlockGuiasRemiDetOtis(); //CARGA EL DETALLE DE LAS OTIS POR ATENDER
  //       })
  //       .finally(() => {
  //         this.loadingController.dismiss();
  //         setTimeout(() => {
  //         }, 600);
  //       })
  //       .catch(() => {
  //       })
  //       .then(request => {
  //         loading.dismiss();
  //       });
  //   });
  // }
}
