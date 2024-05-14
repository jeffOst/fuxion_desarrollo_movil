////////////////////////////////////////////
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { Storage } from "@ionic/storage";
import { InformeCab } from "src/app/interfaces/mtto/InformeTecnico"
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { ViewChild } from "@angular/core";
import { IonTabs } from '@ionic/angular'
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"
import { Network, ConnectionStatus } from "@capacitor/network";

@Component({
  selector: 'app-mtto-win-orden-trabajo',
  templateUrl: './mtto-win-orden-trabajo.page.html',
  styleUrls: ['./mtto-win-orden-trabajo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MttoWinOrdenTrabajoPage implements OnInit {

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
  ItemVisibleMotor: boolean = false;
  ItemhidMotor: boolean = false;
  rep_fab: any;
  tituloTollBar: string = 'Orden de Trabajo';
  tituloRepFab: string = '?';
  colorReqFab: string = '';
  nombre_partlist_otc: string = '';
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
    this.FormHtmlJs = {} as InformeCab;
    // console.log(this.router.getCurrentNavigation());
    // console.log('win montaje checklist::::>>>>>>>>',this.router.getCurrentNavigation().extras.state);
    // console.log(this.router.getCurrentNavigation().extras.state['Row']);

    try {
      this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
      this.tituloRepFab=this.navParamsAny.rep_fab;
      this.colorReqFab=this.navParamsAny.color_rep_fab;
      this.globalVal.fab_rep=this.navParamsAny.rep_fab;
      this.globalVal.nom_configuracion_exm=this.navParamsAny.nom_configuracion_exm;

if (this.navParamsAny.id_orden_trab_cab=='0') {
  this.tituloTollBar='Nuevo: '+this.tituloTollBar

} else {
  this.tituloTollBar='Editar: '+this.tituloTollBar
}

      // globalVal.corre_inf_cab = this.navParamsAny.corre_inf_cab;
      // globalVal.checklist_paso1_apli = this.navParamsAny.checklist_paso1_apli;
      // globalVal.checklist_paso2_apli = this.navParamsAny.checklist_paso2_apli;
      // globalVal.checklist_paso3_apli = this.navParamsAny.checklist_paso3_apli;
      // globalVal.checklist_paso4_apli = this.navParamsAny.checklist_paso4_apli;
      // globalVal.checklist_paso5_apli = this.navParamsAny.checklist_paso5_apli;
      // globalVal.checklist_paso6_apli = this.navParamsAny.checklist_paso6_apli;


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
      this.FormHtmlJs.corre_fisico = this.navParamsAny.corre_fisico

      this.FormHtmlJs.codsmg = this.navParamsAny.codsmg;
      this.FormHtmlJs.corre_inf_cab = this.navParamsAny.corre_inf_cab;
      //this.FormHtmlJs.idordentrabajocab_clc = this.navParamsAny.id_orden_trab_cab;
      this.FormHtmlJs.modelo = this.navParamsAny.modelo;
      this.FormHtmlJs.idactivos = this.navParamsAny.idactivos;
      this.FormHtmlJs.fech_de_registro = this.navParamsAny.fch_ini_montaje_clc;
      this.FormHtmlJs.id_orden_trab_fis_cab = this.navParamsAny.id_orden_trab_fis_cab;
      this.FormHtmlJs.tec_responsable = this.IdUsuarioLocal;
      console.log("requiere este numero:",this.rep_fab);
      console.log("o este:",this.tituloRepFab);
      
      if (this.tituloRepFab=="RM"){this.ItemVisibleMotor=true;}else{this.ItemVisibleMotor=false;}
      if (this.tituloRepFab=="RM"){this.ItemhidMotor=false;}else{this.ItemhidMotor=true;}
      // this.FormHtmlJs.avance1 = this.navParamsAny.avance1;
      // this.FormHtmlJs.avance2 = this.navParamsAny.avance2;
      // this.FormHtmlJs.avance3 = this.navParamsAny.avance3;
      // this.FormHtmlJs.avance4 = this.navParamsAny.avance4;
      // this.FormHtmlJs.avance5 = this.navParamsAny.avance5;
      // this.FormHtmlJs.avance6 = this.navParamsAny.avance6;
      //console.log('checkkk:::::>inserta',this.FormHtmlJs.avance6,this.navParamsAny.avance6);
      if (this.FormHtmlJs.corre_inf_cab == 0) {
        console.log('inserta');
        //this.CreaCheckListCab();
      } else {
        this.globalVal.corre_inf_cab = this.FormHtmlJs.corre_inf_cab;
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

          this.FormHtmlJs.corre_inf_cab = res[0].o_nres;
          this.FormHtmlJs.correlativo_clc = res[0].param1;
          this.globalVal.corre_inf_cab = this.FormHtmlJs.corre_inf_cab;

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
      console.log(this.FormHtmlJs.corre_inf_cab);
      this.globalVal.corre_inf_cab = this.FormHtmlJs.corre_inf_cab;
      console.log(this.globalVal.corre_inf_cab);

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


