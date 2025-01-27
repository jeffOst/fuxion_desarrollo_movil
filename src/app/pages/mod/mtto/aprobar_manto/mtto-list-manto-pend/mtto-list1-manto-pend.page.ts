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
import { HeaderComponent } from '../../../../../components/header/header.component';

@Component({
  selector: 'app-mtto-list1-manto-pend',
  templateUrl: './mtto-list1-manto-pend.page.html',
  styleUrls: ['./mtto-list1-manto-pend.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class MttoList1MantoPendPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  DataSetGrid: any;
  Row_: any;
  estaCargando: boolean = false;
  scanActive: boolean = true;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
    public globalVal: GlovalProvider
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

  FListaEquiposPendManto(){
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

  FNavigatePageDet(Row: any){
    let navigationExtras: NavigationExtras = {state: {Row}};
    this.navCtrl.navigateForward(['/mtto-list-manto-guia-ot'], navigationExtras);
  }

  FlistBlockGuiasRemiCabOtis(){
    
  }
}
