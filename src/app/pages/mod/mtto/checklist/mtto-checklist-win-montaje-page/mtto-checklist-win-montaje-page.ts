import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { Storage } from "@ionic/storage";
import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { ViewChild } from "@angular/core";
import { IonTabs } from '@ionic/angular'
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"
import { Network, ConnectionStatus } from "@capacitor/network";

@Component({
  selector: 'app-mtto-checklist-win-montaje',
  templateUrl: './mtto-checklist-win-montaje-page.html',
  styleUrls: ['./mtto-checklist-win-montaje-page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoChecklistWinMontajePage implements OnInit {
  @ViewChild('myTabs') tabRef: IonTabs;
  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  Cancelar: string = 'Cancelar'
  disableButton: boolean = false;
  networkStatus: ConnectionStatus;
  tituloTollBar: string = 'CheckList de Montaje de Bomba';
  constructor(
    public navCtrl: NavController,
    public globalVal: GlovalProvider,
    private route: ActivatedRoute,//Router,
    private router: Router,//,
    public storage: Storage,
    private loadingController: LoadingController,
    private ApiService: MttoChekListMontajeService,
    //public navParams: NavParams,
  ) {
    this.FormHtmlJs = {} as CheckListCab;
    console.log(this.router.getCurrentNavigation());
    console.log('win montaje checklist::::>>>>>>>>',this.router.getCurrentNavigation().extras.state);
    console.log(this.router.getCurrentNavigation().extras.state['Row']);

    try {
      this.navParamsAny =
        this.router.getCurrentNavigation().extras.state['Row'];
      globalVal.idchecklistcab = this.navParamsAny.idchecklistcab;
      globalVal.checklist_paso1_apli = this.navParamsAny.checklist_paso1_apli;
      globalVal.checklist_paso2_apli = this.navParamsAny.checklist_paso2_apli;
      globalVal.checklist_paso3_apli = this.navParamsAny.checklist_paso3_apli;
      globalVal.checklist_paso4_apli = this.navParamsAny.checklist_paso4_apli;
      globalVal.checklist_paso5_apli = this.navParamsAny.checklist_paso5_apli;
      globalVal.checklist_paso6_apli = this.navParamsAny.checklist_paso6_apli;

    } catch (error) {
      console.log(error);

      //this.FormCheckListPaso1.controls["checklist_paso1_apli"].disable();
    }

    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    let localStorage;
    //////////////////
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.storage.create();
      this.storage.get('DEVICE_INFO').then((result1) => {
        localStorage = (result1);
        this.NombreDispositivo = localStorage.name;
        this.IdDispositivo = localStorage.uuid;
        //console.log(this.navParamsAny);
        this.FloadForms();
      });

    });


    //console.log('navParams:::>',navParams);
    //this.idpieza_=navParams.get('idpieza');




  }
  FloadForms() {

    if (this.navParamsAny) {
      this.FormHtmlJs.id_orden_trab_fis_cab = this.navParamsAny.id_orden_trab_fis_cab
      this.FormHtmlJs.codsmg = this.navParamsAny.codsmg;
      this.FormHtmlJs.idchecklistcab = this.navParamsAny.idchecklistcab;
      this.FormHtmlJs.idordentrabajocab_clc = this.navParamsAny.id_orden_trab_cab;
      this.FormHtmlJs.modelo = this.navParamsAny.modelo;
      this.FormHtmlJs.idactivos = this.navParamsAny.idactivos;
      this.FormHtmlJs.fch_ini_montaje_clc = this.navParamsAny.fch_ini_montaje_clc;
      this.FormHtmlJs.correlativo_clc = this.navParamsAny.correlativo_clc;
      this.FormHtmlJs.idtecnico_checlist_clc = this.IdUsuarioLocal;

      this.FormHtmlJs.avance1 = this.navParamsAny.avance1;
      this.FormHtmlJs.avance2 = this.navParamsAny.avance2;
      this.FormHtmlJs.avance3 = this.navParamsAny.avance3;
      this.FormHtmlJs.avance4 = this.navParamsAny.avance4;
      this.FormHtmlJs.avance5 = this.navParamsAny.avance5;
      this.FormHtmlJs.avance6 = this.navParamsAny.avance6;
      //console.log('checkkk:::::>inserta',this.FormHtmlJs.avance6,this.navParamsAny.avance6);
      if (this.FormHtmlJs.idchecklistcab == 0) {
        console.log('inserta');
        this.CreaCheckListCab();
      } else {
        this.globalVal.idchecklistcab = this.FormHtmlJs.idchecklistcab;
      }

    }

  }

  CreaCheckListCab() {
    const loading = this.loadingController.create({
      message: 'Creando correlativo...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiService.SaveCheckListCab(this.FormHtmlJs.idordentrabajocab_clc, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
          console.log(res);

          this.FormHtmlJs.idchecklistcab = res[0].o_nres;
          this.FormHtmlJs.correlativo_clc = res[0].param1;
          this.globalVal.idchecklistcab = this.FormHtmlJs.idchecklistcab;

          setTimeout(() => {
            this.loadingController.dismiss();
          }, 600)

        }).finally(() => {


        });
      });
  }

  ngOnInit() {

    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
      })
    }
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      if (this.networkStatus && this.networkStatus.connected) {
        this.tituloTollBar = 'CheckList de Montaje de Bomba';
      }
      else {
        this.tituloTollBar = 'Sin conexion a internet';
      }
    })
  }

  mySelect(id, event) {


    this.globalVal.checklist_paso_pivot=id;
    if (id == 1) {
      console.log(this.FormHtmlJs.idchecklistcab);
      this.globalVal.idchecklistcab = this.FormHtmlJs.idchecklistcab;
      console.log(this.globalVal.idchecklistcab);

      //this.router.navigate(['/page2']);
      //this.navCtrl.navigateForward(['page2'], navigationExtras);
    }

  }
  ionTabsDidChange() {

  }
  ionTabsWillChange() {

  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter::> winmontaje');

  }
}

