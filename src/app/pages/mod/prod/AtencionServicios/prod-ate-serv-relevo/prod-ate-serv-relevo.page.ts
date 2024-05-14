 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { IonicModule } from '@ionic/angular';


import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { MRelevo } from "src/app/interfaces/prod/Relevo";
import { MPieza } from "src/app/interfaces/prod/Pieza";
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { ProdAteServPopPersonalPage } from '../../../prod/AtencionServicios/prod-ate-serv-pop-personal/prod-ate-serv-pop-personal.page';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-prod-ate-serv-relevo',
  templateUrl: './prod-ate-serv-relevo.page.html',
  styleUrls: ['./prod-ate-serv-relevo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServRelevoPage implements OnInit {
  DsFormRelevo: any;
  DsFormPieza: any;
  modes: ['date', 'date.time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  rest_tipofalla: any;
  rest_maquina: any;
  dataReturned: any;
  CssNotiTipoFalla: string;
  CssNotiTenicoIng: string;
  CssNotiTenicoSal: string;

  CssNotiOrdenLimpieza: string;
  CssNotiEstadoMaq: string;
  CssNotiMedicion: string;
  CssNotiEstadoPiezas: string;
  CssNotiSeSolicita: string;
  CssNotiMaquina: string;
  CssNotiCoordinaRele: string;

  CssNotiOrdenLimpieza2: string;
  CssNotiEstadoMaq2: string;
  CssNotiMedicion2: string;
  CssNotiEstadoPiezas2: string;
  CssNotiSeSolicita2: string;
  CssNotiMaquina2: string;
  CssNotiCoordinaRele2: string;


  CssNotiObervacionFin: string;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  navParams: any;
  idMenu: string;
  menu: string;

  FlagShowObsOrdenLimpieza: boolean = false;
  FlagShowObsEstadoMaquina: boolean = false;
  FlagShowObsMedicion: boolean = false;
  FlagShowObsEstadoPiezas: boolean = false;
  FlagShowObsCoordinaRelevo: boolean = false;

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

  ) {

    //this.setToday();
    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);
    this.idMenu = this.navParams.idmenu;
    this.menu = this.navParams.menu;

    this.DsFormPieza = {} as MPieza;
    this.DsFormRelevo = {} as MRelevo;

    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.DsFormRelevo.idtecnico_ingreso_rc = this.IdUsuarioLocal;
      this.DsFormRelevo.nombres_tecnico_ingreso = this.NombresUsuarioLocal;

    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });

    this.DsFormRelevo.correlativo_rfc = "";
    if (this.idMenu=='0') {
      this.DsFormRelevo.maquina = '';
    } else {
      this.DsFormRelevo.maquina = this.menu;
      this.DsFormRelevo.idmaquina_rc = this.idMenu;
    }

    this.DsFormRelevo.nombres_tecnico_ingreso = this.NombresUsuarioLocal;
    this.DsFormRelevo.idtecnico_ingreso_rc = this.IdUsuarioLocal;
    this.DsFormRelevo.idtipofalla_rc = "";
    this.DsFormRelevo.descripcion_rc = "";
    this.DsFormRelevo.se_solicita_rc = "";
    this.DsFormRelevo.SEQMASERV = 349608;//339388;

    // //this.DsFormPieza.idofpterminado = this.navParams.idofpterminado;
    this.DsFormPieza.actividad = 4;
    this.DsFormPieza.SEQMASERV = 349608;//339388;////crear un servicio relevo
    this.DsFormPieza.cantidad = 1;
    //       this.DsFormPieza.avatar = this.navParams.avatar;
    //   this.DsFormPieza.correorden = this.navParams.correorden;
    //   this.DsFormPieza.descripcion_pt = this.navParams.descripcion_pt;
    //   this.DsFormPieza.idestado = this.navParams.idestado;
    //   this.DsFormPieza.nomclase_pt= this.navParams.nomclase;
    //   this.DsFormPieza.nomclase= this.navParams.nomclase;
    //   this.DsFormPieza.idclase= this.navParams.idclase;
    //   this.DsFormPieza.codigo_qr= this.navParams.codigo_qr;
    //   this.DsFormPieza.codsmg= this.navParams.codsmg;
    //   this.DsFormPieza.idclase_pt= this.navParams.idclase;
    //   this.DsFormPieza.nomsubfam = this.navParams.nomsubfam;
    //   this.DsFormPieza.idsubfamilia= this.navParams.idsubfamilia;

    this.DsFormPieza.idmaquina = this.idMenu;
    this.DsFormPieza.maquina = this.menu;



    console.log(this.DsFormRelevo);

  }

  ngOnInit() {
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

    this.ApiServices.FCreaCorrelativoRelevo().then((res) => {
      let rest: any;
      rest = res[0];
      console.log(rest);
      console.log(rest.o_nres);
      if (rest.o_nres == 0) {
        alert('Error, no se pudo crear correctamente el correlativo.');
      } else {

        this.DsFormRelevo.idrelevocab = rest.o_nres;
        this.DsFormRelevo.correlativo_rc = rest.param1;
        // let navigationExtras: NavigationExtras = {
        // state: this.DsFormRelevo
        // };
        this.loadingController.dismiss();
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

        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  //fin modal tecnico
  select_change_falla(ev, index) {
    console.log('select_change_material::', this.rest_tipofalla);
    for (const row of this.rest_tipofalla) {
      console.log(this.DsFormRelevo.falla);
      console.log(row.codigo, ev.detail.value)
      if (row.codigo == ev.detail.value) {
        this.DsFormRelevo.falla = row.nombre;
        this.DsFormRelevo.idtipofalla_rfc = row.codigo
        console.log(this.DsFormRelevo.falla);
      }
    }
  }

  select_change_maquina(ev, index) {
    for (const row of this.rest_maquina) {
      if (row.codigo == ev.detail.value) {
        this.DsFormRelevo.maquina = row.nombre;
        this.DsFormRelevo.idmaquina_rc = row.codigo;
      }
    }
  }


  async FOpenModalTecnicoIngreso(index) {
    let idpieza_;
    let avatar_;
    let idtecnico_rfc_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    idpieza_ = this.DsFormRelevo.nombres_tecnico_ingreso;//ma00estado_replicated;
    idtecnico_rfc_ = this.DsFormRelevo.idtecnico_ingreso_rc;
    avatar_ = this.DsFormRelevo.avatar;

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
        this.DsFormRelevo.nombres_tecnico_ingreso = dataReturned.data.nombres;
        this.DsFormRelevo.idtecnico_ingreso_rc = dataReturned.data.id;///idclase <> idpieza
        //console.log(this.ArrayItemsSelectedDesti);

      }
    });
    return await modal.present();
  }

  async FOpenModalTecnicoSalida(index) {
    let idpieza_;
    let avatar_;
    let idtecnico_rfc_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    idpieza_ = this.DsFormRelevo.nombres_tecnico_salida;//ma00estado_replicated;
    idtecnico_rfc_ = this.DsFormRelevo.idtecnico_salida_rc;
    avatar_ = this.DsFormRelevo.avatar;

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
        this.DsFormRelevo.nombres_tecnico_salida = dataReturned.data.nombres;
        this.DsFormRelevo.idtecnico_salida_rc = dataReturned.data.id;///idclase <> idpieza
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
    if (this.DsFormRelevo.maquina == null || this.DsFormRelevo.maquina == '') {
      siono = 2;
      msgg = ' Fala seleccionar maquina';
      this.CssNotiMaquina = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiTenicoIng = 'field_required_ok';
    if (this.DsFormRelevo.nombres_tecnico_ingreso == null || this.DsFormRelevo.nombres_tecnico_ingreso == '') {
      siono = 2;
      msgg = ' Fala seleccionar tecnico ingreso';
      this.CssNotiTenicoIng = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiTenicoSal = 'field_required_ok';
    if (this.DsFormRelevo.nombres_tecnico_salida == null || this.DsFormRelevo.nombres_tecnico_salida == '') {
      siono = 2;
      msgg = ' Fala seleccionar tecnico salida';
      this.CssNotiTenicoSal = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiOrdenLimpieza = 'field_required_ok';
    if (this.DsFormRelevo.idorden_limpieza_rc == null || this.DsFormRelevo.idorden_limpieza_rc == '') {
      siono = 2;
      msgg = ' Estado Orden y Limpieza del Área';
      this.CssNotiOrdenLimpieza = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiOrdenLimpieza2 = 'field_required_ok';
    if ((this.DsFormRelevo.orden_limpieza_rc == null || this.DsFormRelevo.orden_limpieza_rc == '') && this.FlagShowObsOrdenLimpieza == true) {
      siono = 2;
      msgg = ' Estado Orden y Limpieza del Área';
      this.CssNotiOrdenLimpieza2 = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiEstadoMaq = 'field_required_ok';
    if (this.DsFormRelevo.idestado_maquina_rc == null || this.DsFormRelevo.idestado_maquina_rc == '') {
      siono = 2;
      msgg = ' Estado Maquina';
      this.CssNotiEstadoMaq = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiEstadoMaq2 = 'field_required_ok';
    if ((this.DsFormRelevo.estado_maquina_rc == null || this.DsFormRelevo.estado_maquina_rc == '') && this.FlagShowObsEstadoMaquina == true) {
      siono = 2;
      msgg = ' Estado Maquina';
      this.CssNotiEstadoMaq2 = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiMedicion = 'field_required_ok';
    if (this.DsFormRelevo.idequipo_medicion_rc == null || this.DsFormRelevo.idequipo_medicion_rc == '') {
      siono = 2;
      msgg = ' Estado Equipos de Medición';
      this.CssNotiMedicion = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiMedicion2 = 'field_required_ok';
    if ((this.DsFormRelevo.equipo_medicion_rc == null || this.DsFormRelevo.equipo_medicion_rc == '') && this.FlagShowObsMedicion == true) {
      siono = 2;
      msgg = ' Estado Equipos de Medición';
      this.CssNotiMedicion2 = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiEstadoPiezas = 'field_required_ok';
    if (this.DsFormRelevo.idpieza_proceso_rc == null || this.DsFormRelevo.idpieza_proceso_rc == '') {
      siono = 2;
      msgg = ' Estado Piezas en proceso (Si aplica)';
      this.CssNotiEstadoPiezas = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiEstadoPiezas2 = 'field_required_ok';
    if ((this.DsFormRelevo.pieza_proceso_rc == null || this.DsFormRelevo.pieza_proceso_rc == '') && this.FlagShowObsEstadoPiezas == true) {
      siono = 2;
      msgg = ' Estado Piezas en proceso (Si aplica)';
      this.CssNotiEstadoPiezas2 = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiCoordinaRele = 'field_required_ok';
    if (this.DsFormRelevo.idcoordinacion_relevo_rc == null || this.DsFormRelevo.idcoordinacion_relevo_rc == '') {
      siono = 2;
      msgg = ' Estado Coordinacion Relevo';
      this.CssNotiCoordinaRele = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.CssNotiCoordinaRele2 = 'field_required_ok';
    if ((this.DsFormRelevo.coordinacion_relevo_rc == null || this.DsFormRelevo.coordinacion_relevo_rc == '') && this.FlagShowObsCoordinaRelevo == true) {
      siono = 2;
      msgg = ' Estado Coordinacion Relevo';
      this.CssNotiCoordinaRele2 = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }


    this.CssNotiObervacionFin = 'field_required_ok';
    if (this.DsFormRelevo.observacion_rc == null || this.DsFormRelevo.observacion_rc == '') {
      siono = 2;
      msgg = ' Observaiones Final (si aplica)';
      this.CssNotiObervacionFin = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }


    console.log('DsFormRelevo', this.DsFormRelevo);

    this.DsFormRelevo.acc = '19';
    this.ApiServices.SaveRelevo(this.DsFormRelevo).then((res) => {
      let rest: any;
      rest = res[0];

      console.log(rest);
      console.log(rest.o_nres);
      if (rest.o_nres == 0) {
        alert('Error, no se pudo guardar correctamente.');
      } else {

        //this.DsFormRelevo.idotsolse = rest.o_nres
        //this.DsFormPieza.fecha_inicio=rest.p1

        this.DsFormPieza.pk_idservicio = rest.o_nres;
        this.DsFormPieza.fecha_inicio = rest.p1;
        this.DsFormPieza.idTargetMenu = 1;
        this.DsFormPieza.idestado = 1;
        this.DsFormPieza.idmaquina = this.DsFormRelevo.idmaquina;
        this.DsFormPieza.maquina = this.DsFormRelevo.maquina;

        this.DsFormPieza.id_personal = this.DsFormRelevo.idtecnico_ingreso_rc;
        this.DsFormPieza.nombres_tecnico = this.DsFormRelevo.nombres_tecnico_ingreso;
        this.DsFormPieza.Y04002='RELEVO';
        this.DsFormPieza.EQUIPOID='Taller';

        let navigationExtras: NavigationExtras = {
          state: this.DsFormPieza
        };

        this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);
        //this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'], navigationExtras);

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

  select_change_orden_limpieza(ev) {
    this.FlagShowObsOrdenLimpieza = (ev.detail.value == 2) ? true : false;
  }
  select_change_estadomaquina(ev) {
    this.FlagShowObsEstadoMaquina = (ev.detail.value == 2) ? true : false;
  }
  select_change_medicion(ev) {
    this.FlagShowObsMedicion = (ev.detail.value == 2) ? true : false;
  }
  select_change_estadopieza(ev) {
    this.FlagShowObsEstadoPiezas = (ev.detail.value == 2) ? true : false;
  }

  select_change_coordina(ev) {
    this.FlagShowObsCoordinaRelevo = (ev.detail.value == 2) ? true : false;
  }


}

