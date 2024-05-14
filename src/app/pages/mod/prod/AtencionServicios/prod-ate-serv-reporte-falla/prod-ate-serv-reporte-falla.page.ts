// import { Component, OnInit } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { IonicModule } from '@ionic/angular';

// export class ProdAteServReporteFallaPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MReporteFallaCab } from "src/app/interfaces/prod/ReporteFalla";

import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";

import { ProdAteServPopPersonalPage } from '../../../prod/AtencionServicios/prod-ate-serv-pop-personal/prod-ate-serv-pop-personal.page';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";

// @Component({
//   selector: 'app-prod-ate-serv-reporte-falla',
//   templateUrl: './prod-ate-serv-reporte-falla.page.html',
//   styleUrls: ['./prod-ate-serv-reporte-falla.page.scss'],
// })

@Component({
  selector: 'app-prod-ate-serv-reporte-falla',
  templateUrl: './prod-ate-serv-reporte-falla.page.html',
  styleUrls: ['./prod-ate-serv-reporte-falla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServReporteFallaPage implements OnInit {
  DsFormReporteFalla: any;

  modes: ['date', 'date.time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  rest_tipofalla: any;
  rest_maquina: any;
  dataReturned: any;
  CssNotiTipoFalla: string;
  CssNotiTenico: string;
  CssNotiDescFalla: string;
  CssNotiSeSolicita: string;
  CssNotiMaquina: string;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  navParams: any;
  idMenu: string;
  menu: string;
  Cancelar: string='Cancelar';
  disableButton:boolean=false;
  constructor(
    public ApiServices: ProdGestionServicioService,
    public loadingController: LoadingController,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public storage: Storage,
    public router: Router,
    public navCtrl: NavController,
    //public NavigationExtras:navigationExtras
  ) {

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);
    this.idMenu = this.navParams.idmenu;
    this.menu = this.navParams.menu;

    this.DsFormReporteFalla = {} as MReporteFallaCab;
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.DsFormReporteFalla.idtecnico_rfc = this.IdUsuarioLocal;
      this.DsFormReporteFalla.nombres_tecnico = this.NombresUsuarioLocal;

    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });

    this.setToday();

    this.DsFormReporteFalla.correlativo_rfc = "";
    this.DsFormReporteFalla.maquina = this.menu;
    this.DsFormReporteFalla.idmaquina_rfc = this.idMenu;
    this.DsFormReporteFalla.nombres_tecnico = "";
    this.DsFormReporteFalla.idtipofalla_rfc = "";
    this.DsFormReporteFalla.descripcion_rfc = "";
    this.DsFormReporteFalla.se_solicita_rfc = "";

    console.log(this.DsFormReporteFalla);

  }

  ngOnInit() {
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm,MMM d,yyyy');
  }

  ionViewDidEnter() {
    this.load_cbos_ma00();
    this.FCreaCorrelativo();
  }

  dateChanged(value) {
    console.log(value);
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm,MMM d,yyyy');
    this.showPicker = false;
  }

  FCreaCorrelativo() {

    this.ApiServices.FCreaCorrelativo().then((res) => {
      let rest: any;
      rest = res[0];
      console.log(rest);
      console.log(rest.o_nres);
      if (rest.o_nres == 0) {
        alert('Error, no se pudo crear correctamente el correlativo.');
      } else {

        this.DsFormReporteFalla.idreportefallacab = rest.o_nres;
        this.DsFormReporteFalla.correlativo_rfc = rest.param1;
        // let navigationExtras: NavigationExtras = {
        // state: this.DsFormReporteFalla
        // };
        //this.loadingController.dismiss();
        //console.log('navigationExtras',navigationExtras);
        //this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

      }

    }).finally(() => {

      console.log('finalyyyy');


    });
    ///////////******* */

  }

  load_cbos_ma00() {
    const loading = this.loadingController.create({
      message: 'Cargando listas...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiServices.load_cbos_ma00().then((res) => {
          this.rest_tipofalla = res['tipo_falla'];
          this.rest_maquina = res['maquinas'];

          console.log('this.rest_maquina', this.rest_maquina);



        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  //fin modal tecnico
  select_change_falla(ev, index) {
    console.log('select_change_material::', this.rest_tipofalla);
    for (const row of this.rest_tipofalla) {
      console.log(this.DsFormReporteFalla.falla);
      console.log(row.codigo, ev.detail.value)
      if (row.codigo == ev.detail.value) {
        this.DsFormReporteFalla.falla = row.nombre;
        this.DsFormReporteFalla.idtipofalla_rfc = row.codigo
        console.log(this.DsFormReporteFalla.falla);
      }
    }
  }

  select_change_maquina(ev, index) {
    for (const row of this.rest_maquina) {
      if (row.codigo == ev.detail.value) {
        this.DsFormReporteFalla.maquina = row.nombre;
        this.DsFormReporteFalla.idmaquina_rfc = row.codigo;
      }
    }
  }


  async FOpenModalTecnico() {
    let idpieza_;
    let avatar_;
    let idtecnico_rfc_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    idpieza_ = this.DsFormReporteFalla.nombres_tecnico;//ma00estado_replicated;
    idtecnico_rfc_ = this.DsFormReporteFalla.idtecnico_rfc;
    avatar_ = this.DsFormReporteFalla.avatar;

    if (idpieza_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopPersonalPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: 0,
        nombre_tecnico: idpieza_,
        idtablet: '0',
        titulo_modal: 'Lista de Tecnicos',
        id_personal: idtecnico_rfc_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);
        this.DsFormReporteFalla.nombres_tecnico = dataReturned.data.nombres;
        this.DsFormReporteFalla.idtecnico_rfc = dataReturned.data.id;///idclase <> idpieza
        //console.log(this.ArrayItemsSelectedDesti);

      }
    });
    return await modal.present();
  }

  FSaveFormulario() {

    let request_insert: any;
    let resultado: any;
    let msjrequest: string = '';
    let msgg: string = '';
    ////////////////////////
    let index = 0;
    let siono = 0

    this.CssNotiMaquina = 'field_required_ok';
    if (this.DsFormReporteFalla.maquina == null || this.DsFormReporteFalla.maquina == '') {
      siono = 2;
      msgg = ' Fala seleccionar maquina';
      this.CssNotiMaquina = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiTenico = 'field_required_ok';
    if (this.DsFormReporteFalla.nombres_tecnico == null || this.DsFormReporteFalla.nombres_tecnico == '') {
      siono = 2;
      msgg = ' Fala seleccionar tecnico';
      this.CssNotiTenico = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiTipoFalla = 'field_required_ok';
    if (this.DsFormReporteFalla.falla == null || this.DsFormReporteFalla.falla == '') {
      siono = 2;
      msgg = ' Fala seleccionar tipo de falla';
      this.CssNotiTipoFalla = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiDescFalla = 'field_required_ok';
    if (this.DsFormReporteFalla.descripcion_rfc == null || this.DsFormReporteFalla.descripcion_rfc == '') {
      siono = 2;
      msgg = ' Fala tipear descrion de la falla';
      this.CssNotiDescFalla = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiSeSolicita = 'field_required_ok';
    if (this.DsFormReporteFalla.se_solicita_rfc == null || this.DsFormReporteFalla.se_solicita_rfc == '') {
      siono = 2;
      msgg = ' Fala tipear descrion de la se solicita';
      this.CssNotiSeSolicita = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }


    this.DsFormReporteFalla.acc = '17';
    this.ApiServices.SaveReporteFalla(this.DsFormReporteFalla).then((res) => {
      let rest: any;
      rest = res[0];

      console.log(rest);
      console.log(rest.o_nres);
      if (rest.o_nres == 0) {
        alert('Error, no se pudo guardar correctamente.');
      } else {

        this.DsFormReporteFalla.idotsolse = rest.o_nres
        //this.ArrayItemsSelectedDesti[0].fecha_inicio=rest.p1
        let navigationExtras: NavigationExtras = {
          state: this.DsFormReporteFalla
        };

        this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'], navigationExtras);


        this.presentToast(rest.o_msj);


      }



    }).finally(() => {
      console.log('finalyyyy');
    });

  }

  async presentToast(msj, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'top',
      color: color
    });
    toast.present();
  }



}


