import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonDatetime, IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { MPieza } from "src/app/interfaces/prod/Pieza";
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";
import { ProdservicesService } from "src/app/api/prod/prodservices.service";
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { PopUpEquiposPage } from 'src/app/pages/mod/prod/pop-up-equipos/pop-up-equipos.page';
import { PopUpPtPage } from 'src/app/pages/mod/prod/pop-up-pt/pop-up-pt.page';

import { ProdAteServPopPersonalPage } from 'src/app/pages/mod/prod/AtencionServicios/prod-ate-serv-pop-personal/prod-ate-serv-pop-personal.page';
import { ProdAteServPopPiezaPage } from 'src/app/pages/mod/prod/AtencionServicios/prod-ate-serv-pop-pieza/prod-ate-serv-pop-pieza.page';
import { ProdAteServPopClasePage } from 'src/app/pages/mod/prod/AtencionServicios/prod-ate-serv-pop-clase/prod-ate-serv-pop-clase.page';
import { ProdAteServPopOfPage } from 'src/app/pages/mod/prod/AtencionServicios/prod-ate-serv-pop-of/prod-ate-serv-pop-of.page';
import { ProdAteServPopQrPage } from 'src/app/pages/mod/prod/AtencionServicios/prod-ate-serv-pop-qr/prod-ate-serv-pop-qr.page';
import { PopUpServiciosPage } from 'src/app/pages/mod/prod/AtencionServicios/pop-up-servicios/pop-up-servicios.page';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-addserviciostodet',
  templateUrl: './addserviciostodet.page.html',
  styleUrls: ['./addserviciostodet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class AddserviciostodetPage implements OnInit {

  subscripcion: Subscription;
  @ViewChild('idInputSearch') idInputSearch: IonInput;
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;
  id_device: string;
  actividad: string;
  flagResumenDiario: string;
  navParams: any;
  //--------
  IdFromModule: number = 0;
  flg_from_que_windows: string = '';
  i_row: number = -1;
  avatar_tv: string = "";
  idtablet_: string = "";
  index_param: number;
  ArrayItemsSelectedDesti: MPieza[] = [];
  searchTerm = '';
  search_term_equipo = '';
  selected_equipo = '';
  hide_div_equipo: boolean[] = [false];
  hide_div_pt: boolean[] = [false];
  hide_div_serv: boolean[] = [false];
  hide_div_proceso: boolean[] = [false];
  hide_div_metalizado: boolean[] = [false];
  switchButtonSegmento: string = "";
  results: any;
  items22: any;
  results_equipos: any;
  cantItemsSelected: number;
  NomUsuario: String;
  disableButton;
  ItemsSelectedServ: string = 'array_selected_det_np';
  alertSiNo: any;
  rest_maquina: any;
  rest_material: any;
  rest_proceso: any;
  rest_proceso_metalizado: any;
  rest_servicio_metalizado: any;
  rest_pieza: any;
  rest_subprocesos: any;
  dataReturned: any;

  ItemVisibleFechaHora: boolean = true;

  readonly_qr: boolean;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  ////////////////////////////////////////class noti
  CssNotiPieza: string;
  CssNotiQr: string;
  CssNotiBomba: string;
  CssNotiMaterial: string;
  CssNotiTenico: string;
  CssNotiMaquina: string;
  CssNotiServicio: string;
  CssNotiProceso: string;
  CssNotiProcesoMetalizado: string;
  CssNotiServicioMetalizado: string;
  CssNotiServicioObservados: string;
  CssNotiServicioPesoIni: string;
  CssNotiServicio500PesoInicial: string;
  CssReproceso: string;
  scanActive = false;
  hide_div_reproceso: boolean = false;
  Cancelar: string = 'Cancelar';
  ClassNotiPieza: string = '';
  fechainicio_prod: any;
  fechafin_prod: any;
  flag_agregado: string;

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public serviceProduccion: ProdservicesService,
    public ApiServices: ProdGestionServicioService,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private platform: Platform
  ) {

    document.addEventListener("backbutton", function (e) {
      console.log("disable back button")
    }, true);


    this.platform.backButton.subscribeWithPriority(10, () => {
      const alert = this.alertController.create({
        header: 'Vales de Servicios',
        cssClass: 'success',
        subHeader: '',
        mode: "ios",
        message: 'No usar esta opcion para salir.',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
    });

    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.ArrayItemsSelectedDesti[0].nombres_tecnico = localStorage.user_name;
      this.ArrayItemsSelectedDesti[0].id_personal = localStorage.user_id;

    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams:::::>', this.navParams);

    this.actividad = this.navParams.CONCOMPONENTE;

    console.log("ver actividad aquii:")
    console.log(this.actividad);

    this.flagResumenDiario = this.navParams.flagResumenDiario;
    this.avatar_tv = this.navParams.nomAvatar;

    console.log("verificar el ultimo avatar");
    console.log(this.navParams.nomAvatar);
    //


    this.agregar_item_servicio(this.actividad);

    if (this.navParams && typeof this.actividad !== undefined) {

      this.flg_from_que_windows = this.navParams.coloravatar;
      this.avatar_tv = this.navParams.avatar
      this.readonly_qr = true;
      this.ArrayItemsSelectedDesti[0].idofpterminado = this.navParams.idofpterminado;
      this.ArrayItemsSelectedDesti[0].EQUIPOID = this.navParams.EQUIPOID;
      this.ArrayItemsSelectedDesti[0].fasignado = this.navParams.fasignado;
      this.ArrayItemsSelectedDesti[0].avatar = this.navParams.avatar;
      this.ArrayItemsSelectedDesti[0].correorden = this.navParams.correorden;
      this.ArrayItemsSelectedDesti[0].descripcion_pt = this.navParams.descripcion_pt;
      this.ArrayItemsSelectedDesti[0].cantidad = this.navParams.cantidad;
      this.ArrayItemsSelectedDesti[0].idestado = this.navParams.idestado;
      this.ArrayItemsSelectedDesti[0].nomclase_pt = this.navParams.nomclase;
      this.ArrayItemsSelectedDesti[0].nomclase = this.navParams.nomclase;
      this.ArrayItemsSelectedDesti[0].idclase = this.navParams.idclase;
      this.ArrayItemsSelectedDesti[0].codigo_qr = this.navParams.codigo_qr;
      this.ArrayItemsSelectedDesti[0].codsmg = this.navParams.codsmg;
      this.ArrayItemsSelectedDesti[0].idclase_pt = this.navParams.idclase;
      this.ArrayItemsSelectedDesti[0].nomsubfam = this.navParams.nomsubfam;
      this.ArrayItemsSelectedDesti[0].idsubfamilia = this.navParams.idsubfamilia;
      this.ArrayItemsSelectedDesti[0].idmaquina = this.navParams.idmaquina;
      this.ArrayItemsSelectedDesti[0].maquina = this.navParams.maquina;
      this.ArrayItemsSelectedDesti[0].codigo_pt = this.navParams.codigo_pt;

      this.ArrayItemsSelectedDesti[0].actividad = this.actividad;
      this.ArrayItemsSelectedDesti[0].plano_diseno = this.navParams.plano_diseno;    

      //CON ESTOS DOS SE MUESTRA EL NOMBRE DEL MATERIAL Y NOMBRE DEL SERVICIO EN EL FORMULARIO DE INCIAR
      //PERO LO ESTOY COMENTANDO POR EL MOMENTO PORQUE HAY UN ERROR, ME PIDE QUE SELECCIONE ESOS CAMPOS
      //FALTA ENVIAR UN PARAMETRO
      
      this.ArrayItemsSelectedDesti[0].material = this.navParams.material;
      this.ArrayItemsSelectedDesti[0].idmaterial = this.navParams.idmaterial;
            
      this.ArrayItemsSelectedDesti[0].Y04001 = this.navParams.Y04001;
      this.ArrayItemsSelectedDesti[0].Y04002 = this.navParams.Y04002;
      this.ArrayItemsSelectedDesti[0].SEQMASERV = this.navParams.SEQMASERV;
      //SEQMASERV
       
      this.CssReproceso = (this.navParams.flag_reproceso == 1) ? 'CssReproceso' : '';
      this.hide_div_reproceso = (this.navParams.flag_reproceso == 1) ? true : false;
      this.ArrayItemsSelectedDesti[0].fecha_reproceso = this.navParams.fecha_reproceso;
      this.ArrayItemsSelectedDesti[0].cantidad_reproceso = this.navParams.cantidad_reproceso;
      this.ArrayItemsSelectedDesti[0].idrevisiondet_reproceso = this.navParams.idrevisiondet_reproceso;


      this.ArrayItemsSelectedDesti[0].fechainicio_prod = this.navParams.fechainicio_prod;
      this.ArrayItemsSelectedDesti[0].flag_agregado = this.navParams.flag_agregado;
      this.ArrayItemsSelectedDesti[0].avatar = this.navParams.avatar;

      this.ArrayItemsSelectedDesti[0].tiempo_estandar = this.navParams.tiempo_estandar;

      this.ArrayItemsSelectedDesti[0].fechafin_prod = this.navParams.fechafin_prod;

      // Llama a la función para configurar el estado inicial de ItemVisibleFechaHora después de 4 segundos
      setTimeout(() => {
        if (this.flagResumenDiario === "1") { this.ItemVisibleFechaHora = true; } else { this.ItemVisibleFechaHora = false; }
      }, 1000); // Espera 4 segundos antes de ejecutar

    }
    else {
      this.readonly_qr = false;
      console.log('this.readonly_qr:::', this.readonly_qr);

    }
    //this.IdFromModule = parseInt(this.route.snapshot.paramMap.get('idmenu'));
  }

  ngOnInit() {

    ////console.log('ib ngOnInit');


  }
  ionViewDidEnter() {

    const fechaActual = new Date();

    console.log("Fecha Actual sin restar:");
    console.log(fechaActual);
    console.log("Fecha Actual restando:");
    console.log(fechaActual.setHours(fechaActual.getHours() - 5));

    this.fechainicio_prod = fechaActual.toISOString();
    this.fechafin_prod = fechaActual.toISOString();
    

    // Restablece la propiedad locale del ion-datetime a la zona horaria local
    const ionDatetime = document.getElementById('datetime1') as HTMLIonDatetimeElement;
    ionDatetime.locale = Intl.DateTimeFormat().resolvedOptions().locale;


    this.load_cbos_pieza_material_maquina();
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });

  }

  ionViewWillLeave() {
    // alert('ngOnDestroy:::SEguro de ir atrazassss');
    this.getBackButtonClick();
  }


  ionViewDidLeave() {
    //this.getBackButtonClick();
    //alert('ionViewDidLeave:::>SEguro de ir atrazassss');
  }

  getBackButtonClick() {
    this.subscripcion = this.platform.backButton.subscribe(() => {
      //navigator['app'].exitApp();
      this.ClosingApp();
    });
  }

  async ClosingApp() {
    let alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Message to confirm!!!',
      buttons: [{
        text: "OK",
        handler: () => { this.exit() }
      }, {
        text: "Cancel",
        role: 'cancelar',
      }]
    })
    alert.present();
  }

  exit() {
    navigator["app"].exitApp();
  }



  ///////////modal piezasss
  async FOpenModalPieza(index) {
    let nompieza;
    let avatar_;
    let idactividad;
    let idsubfamilia_;
    let msgg;
    let nomsubfam_;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      console.log('::::::::::::::>>>>>>>>>>>');
      console.log(this.ArrayItemsSelectedDesti);
      //console.log(this.i_row);
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        if (this.ArrayItemsSelectedDesti[index].actividad != '4') {
          nompieza = this.ArrayItemsSelectedDesti[index].nomclase;//ma00estado_replicated;
          idactividad = this.ArrayItemsSelectedDesti[index].actividad;
          idsubfamilia_ = this.ArrayItemsSelectedDesti[index].idsubfamilia;
          console.log('idsubfamilia_', idsubfamilia_);
          nomsubfam_ = this.ArrayItemsSelectedDesti[index].nomsubfam;

        }
        else {
          nompieza = '';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].avatar;
        //        idarea_ = this.ArrayItemsSelectedDesti[index].idtablet;

        //console.log(this.ArrayItemsSelectedDesti);
        break;
      }
      index++;
    }

    if (nompieza == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopPiezaPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        nombre_pieza: nompieza,
        idtablet: this.IdDispositivo,
        titulo_modal: 'Lista de Piezas',
        id_actividad: idactividad,
        idsubfamilia: idsubfamilia_,
        nomsubfam: nomsubfam_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            this.ArrayItemsSelectedDesti[index].nomclase = dataReturned.data.nombres;
            this.ArrayItemsSelectedDesti[index].idclase = dataReturned.data.id;
            this.ArrayItemsSelectedDesti[index].idclase_pt = dataReturned.data.id;

            this.ArrayItemsSelectedDesti[index].idsubfamilia = dataReturned.data.idsubfamilia;
            this.ArrayItemsSelectedDesti[index].nomsubfam = dataReturned.data.nomsubfam;
            console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });
    return await modal.present();
  }
  ////////////////////////////pop SERVICIOS
  async FOpenModalTecnico(index) {
    let idpieza_;
    let avatar_;
    let id_personal_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      //console.log('::::::::::::::>>>>>>>>>>>');
      //console.log(this.ArrayItemsSelectedDesti[index].index);
      //console.log(this.i_row);
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        if (this.ArrayItemsSelectedDesti[index].avatar != '4') {
          idpieza_ = this.ArrayItemsSelectedDesti[index].nombres_tecnico;//ma00estado_replicated;
          id_personal_ = this.ArrayItemsSelectedDesti[index].id_personal;
        }
        else {
          idpieza_ = '0';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].avatar;
        //        idarea_ = this.ArrayItemsSelectedDesti[index].idtablet;

        //console.log(this.ArrayItemsSelectedDesti);
        break;
      }
      index++;
    }

    if (idpieza_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopPersonalPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        nombre_tecnico: idpieza_,
        idtablet: this.IdDispositivo,
        titulo_modal: 'Lista de Tecnicos',
        id_personal: id_personal_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            this.ArrayItemsSelectedDesti[index].nombres_tecnico = dataReturned.data.nombres;
            this.ArrayItemsSelectedDesti[index].id_personal = dataReturned.data.id;///idclase <> idpieza
            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });
    return await modal.present();
  }
  ///fin modal tecnico




  ////////////////////////////pop tipo de registro
  async FOpenModalTipoRegistro(index) {
    let idpieza_;
    let avatar_;
    let id_personal_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        if (this.ArrayItemsSelectedDesti[index].avatar != '4') {
          idpieza_ = this.ArrayItemsSelectedDesti[index].nombres_tecnico;//ma00estado_replicated;
          id_personal_ = this.ArrayItemsSelectedDesti[index].id_personal;
        }
        else {
          idpieza_ = '0';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].avatar;
        break;
      }
      index++;
    }

    if (idpieza_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopPersonalPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        nombre_tecnico: idpieza_,
        idtablet: this.IdDispositivo,
        titulo_modal: 'Lista de Tipo de Registro',
        id_personal: id_personal_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            this.ArrayItemsSelectedDesti[index].nombres_tecnico = dataReturned.data.nombres;
            this.ArrayItemsSelectedDesti[index].id_personal = dataReturned.data.id;///idclase <> idpieza
            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }

      }
    });
    return await modal.present();
  }
  ///fin modal tipo de registro





  select_change_material(ev, index) {
    console.log('select_change_material::', this.rest_pieza);
    for (const row of this.rest_material) {
      console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value)
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].material = row.nombre;
        this.ArrayItemsSelectedDesti[index].idmaterial = row.codigo
        console.log(this.ArrayItemsSelectedDesti[index].material);
      }
    }
  }

  select_change_servicio_metalizado(ev, index) {
    for (const row of this.rest_servicio_metalizado) {
      if (row.SEQMASERV == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].servicio_metalizado = row.Y04002;
        this.ArrayItemsSelectedDesti[index].idservicio_metalizado_ofd = row.SEQMASERV
      }
    }
  }

  select_change_proceso_metalizado(ev, index) {
    for (const row of this.rest_proceso_metalizado) {
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].proceso_metalizado = row.nombre;
        this.ArrayItemsSelectedDesti[index].idproceso_metalizado_ofd = row.codigo
      }
    }
  }
  select_change_proceso(ev, index) {
    for (const row of this.rest_subprocesos) {
      if (row.idsubprocesosxservicio == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].proceso = row.nombre_proceso;
        this.ArrayItemsSelectedDesti[index].idproceso = row.idsubprocesosxservicio
      }
    }
  }
  select_change_maquina(ev, index) {
    for (const row of this.rest_maquina) {
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].maquina = row.nombre;
        this.ArrayItemsSelectedDesti[index].idmaquina = row.codigo
      }
    }
  }

  eliminar_item_servicio(index) {

    this.alertSiNo = this.alertController.create({
      header: 'Agregar Servicios',
      subHeader: '',
      mode: "ios",
      backdropDismiss: true,
      cssClass: 'alertHeader',
      message: 'Confirmar que desea eliminar este item?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'alertButton',
          role: 'A',
          handler: () => {
            this.ArrayItemsSelectedDesti.splice(index, 1);
          }
        },
        {
          text: 'Cancelar',
          //cssClass: 'alert-button-group',
          role: 'F',
          handler: () => {

            //this.conectar_to_insert();   
            //this.events.publish('user:created',Date.now());            
            //return false;
          }
        }
      ]

    }).then((alertI) => {
      alertI.present();
      alertI.onDidDismiss().then(
        (aceptaPop) => {


        });
      /////////////////////////
    })

  }
  agregar_item_servicio(actividad) {
    ////console.log('this.idtablet_::::>');
    ////console.log(this.idtablet_);

    this.i_row++;
    let data_array: any =
    {
      index_i: 0,
      index: this.i_row,
      cantidad: 1,
      nrosolse_ot: '',// 
      fchvalesrv: '',//
      SEQMASERV: '',///codigpo de PT
      Y04002: '',///descrp servicio
      Y04001: '',///codig servicio
      codsmg: '',
      nombres: '',/// SEQMASERV id de servicio
      ////////////////
      idtablet: this.IdDispositivo,///area
      idtecnico: '',
      imei: '',
      coloravatar: '',
      avatar: '',
      nombre_avatar: '',
      /////////////tickect
      finicio_hvot_cab: '',
      ffin_hvot_cab: '',
      hora_finicio_hvot_cab: '',
      hora_ffin_hvot_cab: '',
      idhorasxvueltaotcab: '',
      nota_hvot: '',
      corre_hvot: '',
      nombres_ejecutor: '',
      ma00estado_nombre: '',
      resumen_Y04002: '',///nombre de PT
      horas_ejecutadas: '',
      ma00estado_replicated: '',///idpieza
      pieza_nombre: '',
      cntvueltas: 0,
      marca_nombre: "",
      marca: '',
      potencia_nombre: '',
      potencia: '',
      tipo_nombre: '',
      tipo: '',
      actividad: actividad,
      proceso_metalizado: '',
      idproceso_metalizado_ofd: '',
      idservicio_metalizado_ofd: '',
      servicio_metalizado: '',
      cnt_metalizado_obs: 0,
      cnt_29012_peso_ini: 0,
      cnt_50000_peso_ini: 0
    }
      ;

    this.ArrayItemsSelectedDesti.push(data_array);
    console.log('this.ArrayItemsSelectedDesti::>435', this.ArrayItemsSelectedDesti);
    let even = { detail: { value: actividad } };

    this.segmento_cambiado(even, 0, 0, actividad, this.avatar_tv);
  }
  cancelar_ejecucion() {
    this.navCtrl.navigateForward('prod-list-acti-programada');////addnoprogramado
  }

  ////////////////////////////pop clase by piezass----------------------------------------------------------
  async FOpenPopUpClaseByPieza(index) {
    let idclase_;
    let avatar_;
    let nomsubfam_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        if (this.ArrayItemsSelectedDesti[index].actividad != '4') {
          idclase_ = this.ArrayItemsSelectedDesti[index].idclase_pt;//ma00estado_replicated;
        }
        else {
          idclase_ = '0';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].actividad;
        idclase_ = this.ArrayItemsSelectedDesti[index].idclase_pt
        nomsubfam_ = this.ArrayItemsSelectedDesti[index].nomsubfam

        break;
      }
      index++;
    }

    if (idclase_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }

    /////////**************** */
    console.log('this.ArrayItemsSelectedDesti[index].actividad::', this.ArrayItemsSelectedDesti[index].actividad);

    if (flag_msg && this.ArrayItemsSelectedDesti[index].actividad != '4' && this.ArrayItemsSelectedDesti[index].actividad != '1') {
      const alert = this.alertController.create({
        header: 'Servicios No Programados',
        cssClass: 'danger',
        subHeader: '',
        mode: "ios",
        message: 'Seleccionar  ' + msgg + ', en el item: (' + (index + 1) + ')',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
      return;
    }

    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopClasePage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        idclase: idclase_,
        idtablet: this.IdDispositivo,
        avatar: avatar_

      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            this.ArrayItemsSelectedDesti[index].idsubfamilia = dataReturned.data.idsubfamilia;
            this.ArrayItemsSelectedDesti[index].nomsubfam = dataReturned.data.nomsubfam;
            console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }
      }
    });
    return await modal.present();
  }
  ////
  ////////////////////////////pop QR by piezas----------------------------------------------------------
  async FOpenPopUpQrByOf(index) {
    let idsubfamilia_;
    let codigo_qr;
    let idordenfabricab;
    let msgg;
    let idclase;
    let nomclase;
    let flag_msg: boolean = false;
    //////////////////////////
    console.log('this.ArrayItemsSelectedDesti::>', this.ArrayItemsSelectedDesti);
    for (const row of this.ArrayItemsSelectedDesti) {
      console.log('index', index);
      console.log(this.ArrayItemsSelectedDesti[index].index);

      if (this.ArrayItemsSelectedDesti[index].index == index) {
        if (this.ArrayItemsSelectedDesti[index].actividad != '4') {
          idsubfamilia_ = this.ArrayItemsSelectedDesti[index].idsubfamilia;//ma00estado_replicated;
        }
        else {
          idsubfamilia_ = '0';
        }
        codigo_qr = this.ArrayItemsSelectedDesti[index].codigo_qr;
        idordenfabricab = this.ArrayItemsSelectedDesti[index].idordenfabricab
        idclase = this.ArrayItemsSelectedDesti[index].idclase;
        nomclase = this.ArrayItemsSelectedDesti[index].nomclase;

        break;
      }
      index++;
    }

    if (idsubfamilia_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }

    /////////**************** */

    if (flag_msg && this.ArrayItemsSelectedDesti[index].actividad != '4' && this.ArrayItemsSelectedDesti[index].actividad != '1') {
      const alert = this.alertController.create({
        header: 'Servicios No Programados',
        cssClass: 'danger',
        subHeader: '',
        mode: "ios",
        message: 'Seleccionar  ' + msgg + ', en el item: (' + (index + 1) + ')',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
      return;
    }
    this.scanActive = true;
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopQrPage,
      backdropDismiss: true,
      //showBackdrop: true,
      mode: 'ios',
      cssClass: 'ion_content_qr',
      componentProps: {
        index_p: this.i_row,
        idordenfabricab: idordenfabricab,
        codigo_qr: codigo_qr,
        idclase: idclase,
        nomclase: nomclase

      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            console.log(dataReturned.data);
            console.log(dataReturned.data.row);
            this.scanActive = false;
            this.ArrayItemsSelectedDesti[index].idordenfabricab = dataReturned.data.row.idordenfabricab;
            ////*************** */
            this.ArrayItemsSelectedDesti[index].idofpterminado = dataReturned.data.row.idofpterminado;
            this.ArrayItemsSelectedDesti[index].EQUIPOID = dataReturned.data.row.EQUIPOID;
            this.ArrayItemsSelectedDesti[index].fasignado = dataReturned.data.row.fasignado;
            this.ArrayItemsSelectedDesti[index].avatar = dataReturned.data.row.avatar;
            this.ArrayItemsSelectedDesti[index].correorden = dataReturned.data.row.correorden;
            this.ArrayItemsSelectedDesti[index].descripcion_pt = dataReturned.data.row.descripcion_pt;
            this.ArrayItemsSelectedDesti[index].cantidad = dataReturned.data.row.cantidad;
            this.ArrayItemsSelectedDesti[index].idestado = dataReturned.data.row.idestado;
            this.ArrayItemsSelectedDesti[index].nomclase_pt = dataReturned.data.row.nomclase;
            this.ArrayItemsSelectedDesti[index].codigo_qr = dataReturned.data.row.codigo_qr;
            this.ArrayItemsSelectedDesti[index].codsmg = dataReturned.data.row.codsmg;
            this.ArrayItemsSelectedDesti[index].idclase_pt = dataReturned.data.row.idclase;
            this.ArrayItemsSelectedDesti[index].nomsubfam = dataReturned.data.row.nomsubfam;
            this.ArrayItemsSelectedDesti[index].idsubfamilia = dataReturned.data.row.idsubfamilia;

            this.ArrayItemsSelectedDesti[index].proceso_metalizado = dataReturned.data.row.proceso_metalizado;
            this.ArrayItemsSelectedDesti[index].servicio_metalizado = dataReturned.data.row.servicio_metalizado;
            this.ArrayItemsSelectedDesti[index].cnt_metalizado_obs = dataReturned.data.row.cnt_metalizado_obs;
            this.ArrayItemsSelectedDesti[index].cnt_29012_peso_ini = dataReturned.data.row.cnt_29012_peso_ini;
            this.ArrayItemsSelectedDesti[index].cnt_50000_peso_ini = dataReturned.data.row.cnt_50000_peso_ini;
            //console.log(this.ArrayItemsSelectedDesti);


            break;
          }
          index++;
        }
      }
    });
    return await modal.present();
  }
  ////////////////////////////pop clase by piezass----------------------------------------------------------
  async FOpenPopUpOfByClase(index) {
    let idsubfamilia_;
    let correorden, idclase_, Y04002_;
    let idordenfabricab;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        if (this.ArrayItemsSelectedDesti[index].actividad != '4') {
          idsubfamilia_ = this.ArrayItemsSelectedDesti[index].idsubfamilia;//ma00estado_replicated;
        }
        else {
          idsubfamilia_ = '0';
        }
        correorden = this.ArrayItemsSelectedDesti[index].correorden;
        idsubfamilia_ = this.ArrayItemsSelectedDesti[index].idsubfamilia
        idordenfabricab = this.ArrayItemsSelectedDesti[index].idordenfabricab
        idclase_ = this.ArrayItemsSelectedDesti[index].idclase
        Y04002_ = this.ArrayItemsSelectedDesti[index].descripcion_pt

        break;
      }
      index++;
    }

    if (idsubfamilia_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }

    /////////**************** */
    if (flag_msg) {
      // const alert = this.alertController.create({
      //   header: 'Servicios No Programados',
      //   cssClass: 'danger',
      //   subHeader: '',
      //   mode: "ios",
      //   message: 'Seleccionar  ' + msgg + ', en el item: (' + (index + 1) + ')',
      //   buttons: [
      //     {
      //       text: 'Aceptar',
      //       cssClass: 'bgcolor:danger',
      //       handler: () => {

      //       }
      //     }]
      // }).then((alertOK) => {
      //   alertOK.present();
      // });
      // return;
    }

    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopOfPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        idsubfamilia: idsubfamilia_,
        idclase: idclase_,
        idordenfabricab: idordenfabricab,
        correorden: correorden,
        Y04002: Y04002_

      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            this.ArrayItemsSelectedDesti[index].idordenfabricab = dataReturned.data.idordenfabricab;
            this.ArrayItemsSelectedDesti[index].correorden = dataReturned.data.correorden;
            this.ArrayItemsSelectedDesti[index].descripcion_pt = dataReturned.data.Y04002;
            this.ArrayItemsSelectedDesti[index].idofpterminado = dataReturned.data.idofpterminado;

            this.ArrayItemsSelectedDesti[index].idclase = dataReturned.data.idclase;
            this.ArrayItemsSelectedDesti[index].nomclase = dataReturned.data.nomclase;

            this.ArrayItemsSelectedDesti[index].nomsubfam = dataReturned.data.nomsubfam;
            this.ArrayItemsSelectedDesti[index].idsubfamilia = dataReturned.data.idsubfamilia;
            this.ArrayItemsSelectedDesti[index].codigo_pt = dataReturned.data.Y04001;

            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }
      }
    });
    return await modal.present();
  }
  ////////////////////////////pop SERVICIOS
  async open_popup_servicios(index) {
    let idpieza_;
    let avatar_;
    let Y04002_;
    let SEQMASERV_, nomclase_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      //console.log('::::::::::::::>>>>>>>>>>>');
      //console.log(this.ArrayItemsSelectedDesti[index].index);
      //console.log(this.i_row);
      if (this.ArrayItemsSelectedDesti[index].index == index) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        if (this.ArrayItemsSelectedDesti[index].actividad != '4') {
          idpieza_ = this.ArrayItemsSelectedDesti[index].idclase;//ma00estado_replicated;
        }
        else {
          idpieza_ = '0';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].actividad;
        SEQMASERV_ = this.ArrayItemsSelectedDesti[index].SEQMASERV
        Y04002_ = this.ArrayItemsSelectedDesti[index].Y04002
        nomclase_ = this.ArrayItemsSelectedDesti[index].nomclase
        //        idarea_ = this.ArrayItemsSelectedDesti[index].idtablet;

        //console.log(this.ArrayItemsSelectedDesti);
        break;
      }
      index++;
    }

    if (idpieza_ == '') {
      msgg = ' Pieza';
      flag_msg = true;
    }
    if (this.IdDispositivo == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }

    /////////**************** */
    if (flag_msg) {
      const alert = this.alertController.create({
        header: 'Servicios No Programados',
        cssClass: 'danger',
        subHeader: '',
        mode: "ios",
        message: 'Seleccionar  ' + msgg + ', en el item: (' + (index + 1) + ')',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
      return;
    }

    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: PopUpServiciosPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        idpieza: idpieza_,
        idtablet: this.IdDispositivo,
        avatar: avatar_,
        SEQMASERV: SEQMASERV_,
        Y04002: Y04002_,
        nomclase: nomclase_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //this.ArrayItemsSelectedDesti.push
        //console.log('Modal Sent Data :');        
        //console.log(dataReturned);
        //console.log(dataReturned.data);
        //console.log('this.i_row::>'+this.i_row);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          //console.log(this.ArrayItemsSelectedDesti);
          //console.log(row);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            //console.log(dataReturned.data);
            this.ArrayItemsSelectedDesti[index].Y04002 = dataReturned.data.Y04002;
            this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.SEQMASERV;
            this.ArrayItemsSelectedDesti[index].Y04001 = dataReturned.data.Y04001;///idclase <> idpieza
            this.ArrayItemsSelectedDesti[index].flag_serv_eje_ms = dataReturned.data.flag_serv_eje_ms
            console.log(dataReturned.data);
            ////////////agregar carga de subprocesos
            this.load_cbo_subprocesos(index);
            if (dataReturned.data.es_con_procesos_ms == '1') {/////si es un es con servicios metalizados
              console.log(dataReturned.data.es_con_procesos_ms);
              this.hide_div_metalizado[this.i_row] = true;
            }

            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });
    return await modal.present();
  }

  ////////////////////////////////////////pt
  async open_popup_pterminado(index) {
    let idmarca_;
    let idpotencia_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      //console.log('::::::::::::::>>>>>>>>>>>');
      //console.log(this.ArrayItemsSelectedDesti[index].index);
      //console.log(this.i_row);
      if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        // idmarca_ = this.ArrayItemsSelectedDesti[index].marca;
        // idpotencia_ = this.ArrayItemsSelectedDesti[index].potencia;
        // idtipo_ = this.ArrayItemsSelectedDesti[index].tipo;
        //console.log(this.ArrayItemsSelectedDesti);
        break;
      }
      index++;
    }
    //console.log('::xxxxxxxxxx::::::::::::>>>>>>>>>>>');
    //console.log(idmarca_);
    //console.log(idpotencia_);
    //console.log(idtipo_);



    if (idmarca_ == '') {
      msgg = ' Marca';
      flag_msg = true;
    }
    if (idpotencia_ == '') {
      msgg = ' ,Potencia';
      flag_msg = true;
    }
    if (idtipo_ == '') {
      msgg = ' y Tipo';
      flag_msg = true;
    }
    /////////**************** */
    if (flag_msg) {
      const alert = this.alertController.create({
        header: 'Servicios No Programados',
        cssClass: 'danger',
        subHeader: '',
        mode: "ios",
        message: 'Seleccionar  ' + msgg + ', en el item: (' + (index + 1) + ')',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
      return;
    }

    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: PopUpPtPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row,
        idmarca: idmarca_,
        idpotencia: idpotencia_,
        idtipo: idtipo_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //this.ArrayItemsSelectedDesti.push
        //console.log('Modal Sent Data :');        
        //console.log(dataReturned);
        //console.log(dataReturned.data);
        //console.log('this.i_row::>'+this.i_row);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          //console.log(this.ArrayItemsSelectedDesti);
          //console.log(row);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            //console.log(dataReturned.data);
            // // // // this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
            // // // // this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idmarca;
            // // // // this.ArrayItemsSelectedDesti[index].ma00estado_replicated = dataReturned.data.idtipo;///idclase <> idpieza

            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });
    return await modal.present();
  }

  async open_popup_equipos() {

    if (this.readonly_qr) {
      return false;
    }

    const modal = await this.modalCtrl.create({
      component: PopUpEquiposPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        index_p: this.i_row
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //this.ArrayItemsSelectedDesti.push
        //console.log('Modal Sent Data :');        
        //console.log(dataReturned);
        //console.log(dataReturned.data);
        //console.log('this.i_row::>'+this.i_row);

        let index = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          //console.log(this.ArrayItemsSelectedDesti);
          //console.log(row);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.ArrayItemsSelectedDesti[index].index);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index].index == this.i_row) {
            //console.log(dataReturned.data);
            this.ArrayItemsSelectedDesti[index].codsmg = dataReturned.data.idequipo;
            // // // this.ArrayItemsSelectedDesti[index].marca = dataReturned.data.idmarca,
            // // //   this.ArrayItemsSelectedDesti[index].potencia = dataReturned.data.idpotencia,
            // // //   this.ArrayItemsSelectedDesti[index].tipo = dataReturned.data.idtipo
            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });

    return await modal.present();


  }


  quitar_vale_selected(items: MPieza) {
    ///elimina
    const loading = this.loadingController.create({
      message: 'Porfavor espere...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        // this.serviceProduccion.EjServQuitarItemSelected(items).then(
        //   () => {
        //     this.loadingController.dismiss();
        //   }
        // );
      }
    )

  }
  segmento_cambiado(ev, idservicio, i_row_, fromts, idavatar) {
    console.log("ver actividad");
    console.log(fromts);
    console.log(ev);

    console.log("verificar avatar")
    console.log(idavatar);
    console.log(this.avatar_tv);

    let switch_: number;
    if (fromts == 0) {
      switch_ = parseInt(ev.detail.value);
      console.log("entro if 1");
    } else {
      switch_ = parseInt(fromts);
      console.log("entro if 2");
    }

    console.log("verificar switch");
    console.log(switch_);

    let name_avatar;
    switch (switch_) {
      case 1:///mostrar solo busqueda de equipos
        console.log('switch_', switch_);
        this.hide_div_equipo[i_row_] = true;
        this.hide_div_pt[i_row_] = false;
        this.hide_div_serv[i_row_] = true;
        name_avatar = "Servicios Taller";
        break;
      case 2:
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = true;
        this.hide_div_serv[i_row_] = true;
        name_avatar = "Fabricacion Bomba";
        break;
      case 3:
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = true;
        this.hide_div_serv[i_row_] = true;
        name_avatar = "Fabricacion Repuesto";
        break;
      case 4:
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = false;
        this.hide_div_serv[i_row_] = false;
        name_avatar = "Costos Taller";
        break;

      default:
        break;
    }
    let index = 0;
    for (const row of this.ArrayItemsSelectedDesti) {
      if (this.ArrayItemsSelectedDesti[index].index == i_row_) {
        this.ArrayItemsSelectedDesti[index].avatar = ev.detail.value;
        // // this.ArrayItemsSelectedDesti[index].nombre_avatar = name_avatar;
      }
      index++;
    }
    //this.ArrayItemsSelectedDesti.splice(index,1);
    //this.i_row--;
    //this.agregar_item_servicio()
    ////////////////////
    ///index_i: 0,
    //index: this.i_row;
    index = i_row_;
    this.ArrayItemsSelectedDesti[index].cantidad = 1;
    // // // this.ArrayItemsSelectedDesti[index].nrosolse_ot = '';// 
    // // // this.ArrayItemsSelectedDesti[index].fchvalesrv = '';//
    // // // this.ArrayItemsSelectedDesti[index].SEQMASERV = '';///codigpo de PT
    this.ArrayItemsSelectedDesti[index].Y04002 = '';///descrp servicio
    this.ArrayItemsSelectedDesti[index].Y04001 = '';///codig servicio
    this.ArrayItemsSelectedDesti[index].codsmg = '';
    // // // this.ArrayItemsSelectedDesti[index].nombres = '';/// SEQMASERV id de servicio
    ////////////////
    //this.ArrayItemsSelectedDesti[index].idtablet= this.idtablet_;///area
    // // // // this.ArrayItemsSelectedDesti[index].idtecnico = '';
    // // // // this.ArrayItemsSelectedDesti[index].imei = '';
    this.ArrayItemsSelectedDesti[index].coloravatar = '';
    //this.ArrayItemsSelectedDesti[index].avatar= '';
    //nombre_avatar= '';
    /////////////tickect


  }
  listServiciosNuevos() {
    //console.log(this.ArrayItemsSelectedDesti);
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.serviceProduccion.llamarMaestroServicios(this.searchTerm, this.switchButtonSegmento, '11', 'H', this.id_device).then((res) => {
          this.results = res;
        }).finally(() => {
          this.loadingController.dismiss();

          // setTimeout(() => {
          //   this.idInputSearch.setFocus();
          // }, 600)

        });
      });
  }

  agregar_vale(aItemvale: MPieza) {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Agregando servicio...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();

      }
    ).finally(() => {
      aItemvale.avatar = this.avatar_tv;
      aItemvale.index = this.index_param;
      this.storage.set(this.ItemsSelectedServ, aItemvale).then((data1) => {
        this.storage.get(this.ItemsSelectedServ).then((data) => {
          this.ArrayItemsSelectedDesti.push(data);
          this.loadingController.dismiss();
        });

      });;


    }).catch(() => {

    })

  }
  guardar_selected() {
    let request_insert: any;
    let resultado: any;
    let msjrequest: string = '';
    let msgg: string = '';
    ////////////////////////
    let index = 0;
    let siono = 0

    console.log('Valor de cantidad:', this.ArrayItemsSelectedDesti[0].cantidad);


    for (const row of this.ArrayItemsSelectedDesti) {
      ///actividad 
      if (this.ArrayItemsSelectedDesti[index].avatar == null || this.ArrayItemsSelectedDesti[index].avatar == '') {
        siono = 2;
        msgg = ' Fala seleccionar actividad ';
        break;
      }

      this.CssNotiPieza = 'field_required_ok';
      if (this.ArrayItemsSelectedDesti[index].avatar != '4') {
        ////Pieza
        if (this.ArrayItemsSelectedDesti[index].nomclase == null || this.ArrayItemsSelectedDesti[index].nomclase == '') {
          siono = 2;
          msgg = ' Fala seleccionar  Pieza';
          this.CssNotiPieza = 'field_required';
          break;
        }

        ////material
        this.CssNotiMaterial = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].material == null || this.ArrayItemsSelectedDesti[index].material == '') {
          siono = 2;
          msgg = ' Fala agregar material';
          this.CssNotiMaterial = 'field_required';
          break;
        }

      }
      ////servicio
      this.CssNotiServicio = 'field_required_ok';
      if (this.ArrayItemsSelectedDesti[index].Y04002 == null || this.ArrayItemsSelectedDesti[index].Y04002 == '') {
        siono = 2;
        msgg = ' Fala agregar servicio';
        this.CssNotiServicio = 'field_required';
        break;
      }

      ////nombres_tecnico
      this.CssNotiTenico = 'field_required_ok';
      if (this.ArrayItemsSelectedDesti[index].nombres_tecnico == null || this.ArrayItemsSelectedDesti[index].nombres_tecnico == '') {
        siono = 2;
        msgg = ' Fala agregar técnico';
        this.CssNotiTenico = 'field_required';
        break;
      }
      ////maquina
      this.CssNotiMaquina = 'field_required_ok';
      if (this.ArrayItemsSelectedDesti[index].maquina == null || this.ArrayItemsSelectedDesti[index].maquina == '') {
        siono = 2;
        msgg = ' Fala agregar máquina';
        this.CssNotiMaquina = 'field_required';
        break;
      }

      ////procesos      
      if (this.hide_div_proceso[index]) {
        this.CssNotiProceso = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].proceso == null || this.ArrayItemsSelectedDesti[index].proceso == '') {
          siono = 2;
          msgg = ' Falta selecccionar procesos';
          this.CssNotiProceso = 'field_required';
          break;
        }
      }

      if (this.hide_div_metalizado[index]) {
        this.CssNotiProcesoMetalizado = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].proceso_metalizado == null || this.ArrayItemsSelectedDesti[index].proceso_metalizado == '') {
          siono = 2;
          msgg = ' Falta selecccionar procesos';
          this.CssNotiProcesoMetalizado = 'field_required';
          break;
        }
      }
      if (this.hide_div_metalizado[index]) {
        this.CssNotiServicioMetalizado = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].servicio_metalizado == null || this.ArrayItemsSelectedDesti[index].servicio_metalizado == '') {
          siono = 2;
          msgg = ' Falta selecccionar servicio';
          this.CssNotiServicioMetalizado = 'field_required';
          break;
        }
        this.CssNotiServicioObservados = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].cnt_metalizado_obs == null || this.ArrayItemsSelectedDesti[index].cnt_metalizado_obs == 0) {
          siono = 2;
          msgg = ' Falta selecccionar servicio';
          this.CssNotiServicioObservados = 'field_required';
          break;
        }
        this.CssNotiServicio500PesoInicial = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].cnt_50000_peso_ini == null || this.ArrayItemsSelectedDesti[index].cnt_50000_peso_ini == 0) {
          siono = 2;
          msgg = ' Falta selecccionar servicio';
          this.CssNotiServicio500PesoInicial = 'field_required';
          break;
        }
        this.CssNotiServicioPesoIni = 'field_required_ok';
        if (this.ArrayItemsSelectedDesti[index].cnt_29012_peso_ini == null || this.ArrayItemsSelectedDesti[index].cnt_29012_peso_ini == 0) {
          siono = 2;
          msgg = ' Falta selecccionar servicio';
          this.CssNotiServicioPesoIni = 'field_required';
          break;
        }


      }
      index++;
    }

    if (siono == 1 || siono == 2) {
      //msgg = (siono == 1) ? ' si es: OT u OF' : 'el Equipo'
      const alert = this.alertController.create({
        header: 'Iniciar Servicios',
        cssClass: 'success',
        subHeader: '',
        mode: "ios",
        message: '' + msgg,//+ ', en el item: (' + (index + 1) + ')'
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
    } else {

      /////////////////
      const loading = this.loadingController.create({
        message: 'Cargando...',
        translucent: true//,
        //cssClass: 'custom-class custom-loading'
      }).then(
        loading => {
          loading.present();


          //console.log("verificar variable fechainicio_prod:")
          //console.log(this.fechainicio_prod);

          //console.log("ver aquiiiiiiiii");
          //console.log(this.ArrayItemsSelectedDesti[0]);

          this.ArrayItemsSelectedDesti[0].acc = '7';
          this.ArrayItemsSelectedDesti[0].fechainicio_prod = this.fechainicio_prod;
          this.ArrayItemsSelectedDesti[0].fechafin_prod = this.fechafin_prod;
          this.ArrayItemsSelectedDesti[0].cantidad = this.ArrayItemsSelectedDesti[0].cantidad;
          //this.ArrayItemsSelectedDesti[0].flag_agregado = this.flagResumenDiario;

          if (this.flagResumenDiario == "1") { this.ArrayItemsSelectedDesti[0].flag_agregado = '1'; } else { this.ArrayItemsSelectedDesti[0].flag_agregado = '0'; }

          console.log("verificar aqui el console log:")
          console.log(this.ArrayItemsSelectedDesti[0].cantidad);
          console.log(this.ArrayItemsSelectedDesti[0]);

          this.ApiServices.SaveInicioActividad(this.ArrayItemsSelectedDesti[0]).then((res) => {
            let rest: any;
            rest = res[0];

            //console.log(rest);
            //console.log(rest.o_nres);
            if (rest.o_nres == 0) {
              alert('Error, no se pudo guardar correctamente.');
            } else {

              this.ArrayItemsSelectedDesti[0].pk_idservicio = rest.o_nres
              this.ArrayItemsSelectedDesti[0].fecha_inicio = rest.p1
              this.ArrayItemsSelectedDesti[0].idTargetMenu = 1;
              this.ArrayItemsSelectedDesti[0].idestado = 1;
              let navigationExtras: NavigationExtras = {
                state: this.ArrayItemsSelectedDesti[0]
              };

              this.loadingController.dismiss();
              //console.log('navigationExtras', navigationExtras);

              //AQUI DEBO CONDICIONAR QUE ME REDIRECCIONE A OTRA PAGINA
              //this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

              if (this.flagResumenDiario == "1") {
                this.navCtrl.navigateForward(['prod-resumen-diario-horas'], navigationExtras);
                //aqui tiene que refrescar
                //this.ionViewDidEnter();
              }
              else {
                this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);
              }

            }


          }).finally(() => {

            console.log('finalyyyy');

          });

        });

    }///fin else si o no

    ///////////////////
  }
  ///////////////////////////

  lista_equipos() {
    //this.hide_div_equipo=true;
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.serviceProduccion.listado_equipos_service(this.search_term_equipo, this.switchButtonSegmento, '17', 'H').then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            this.idinputsearch_equipo.setFocus();
          }, 600)
        });
      });
  }

  load_cbos_pieza_material_maquina() {
    const loading = this.loadingController.create({
      message: 'Cargando listas...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiServices.load_cbos_pieza_material_maquina(this.actividad, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
          this.rest_maquina = res['maquinas'];
          this.rest_material = res['material'];
          //this.rest_proceso = res['proceso'];
          this.rest_pieza = res['pieza'];
          this.rest_servicio_metalizado = res['servicio_metalizado'];
          this.rest_proceso_metalizado = res['proceso_metalizado'];
        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  load_cbo_subprocesos(index) {
    const loading = this.loadingController.create({
      message: 'Cargando sub-procesos...',
      //translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();

        this.ApiServices.load_cbo_subprocesos(this.ArrayItemsSelectedDesti[index].idmaquina, this.ArrayItemsSelectedDesti[index].nomclase, this.ArrayItemsSelectedDesti[index].Y04002).then((res) => {
          this.rest_subprocesos = res;
          console.log(this.rest_subprocesos);
          console.log(this.rest_subprocesos.length);
          if (this.rest_subprocesos.length != '0') {
            console.log(this.rest_subprocesos);
            this.hide_div_proceso[index] = true;
          } else {
            this.hide_div_proceso[index] = false;
          }

        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  limpiar_cbo_pieza(index) {

    this.ArrayItemsSelectedDesti[index].nomclase = '';
    this.ArrayItemsSelectedDesti[index].idclase = '';
    this.ArrayItemsSelectedDesti[index].idclase_pt = '';

    this.ArrayItemsSelectedDesti[index].idsubfamilia = '';
    this.ArrayItemsSelectedDesti[index].nomsubfam = '';

  }

  onFechaChangeInicio(event: CustomEvent) {
    // El evento tiene la propiedad 'detail' que contiene el valor seleccionado
    console.log('Fecha cambiada:', event.detail.value);
    // Puedes realizar otras operaciones aquí según tus necesidades
  }

  onFechaChangeFin(event: CustomEvent) {
    // El evento tiene la propiedad 'detail' que contiene el valor seleccionado
    console.log('Fecha cambiada:', event.detail.value);
    // Puedes realizar otras operaciones aquí según tus necesidades
  }

}
