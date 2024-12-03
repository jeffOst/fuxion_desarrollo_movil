import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { SearchType, ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";
import { NavController, LoadingController, ModalController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-prod-ate-serv-asigna-estado',
  templateUrl: './prod-ate-serv-asigna-estado.page.html',
  styleUrls: ['./prod-ate-serv-asigna-estado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServAsignaEstadoPage implements OnInit {
  //FormHtmlJs: {} as MPieza[]=[];
  CantEntregasCalidad: number = 0;
  CantItemsHojaRuta: number = 0;
  navParams: any;
  FormHtmlJs: any;
  ResptApi: any;
  nombres_usuario_local: string;
  id_usuario_local: string;
  id_dispositivo: string;
  nombre_dispositivo: string;
  IdCboEstadoActual: string;
  //DsGridSolicitudQc: any;
  //DsGridHojaRuta: any;
  DsGridHojaRuta: any[] = []; // Inicializamos como un array vacío
  DsGridSolicitudQc: any[] = []; // Inicializamos como un array vacío
  FlagCCalidad: boolean = false;
  hide_div_reproceso: boolean = false;
  CssReproceso: string;
  Cancelar: string = 'Cancelar';
  disableButton: boolean = true;
  scanActive: boolean = true;

  constructor(
    private router: Router,
    public prodservice: ProdGestionServicioService,
    private storage: Storage,
    public navCtrl: NavController,
    private alertController: AlertController
  ) {

    let localStorage: any;
    //
    //name,uuid
    this.FormHtmlJs = {} as MPieza;
    this.navParams = this.router.getCurrentNavigation().extras.state;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.nombres_usuario_local = localStorage.user_name;
      this.id_usuario_local = localStorage.user_id;
      //user_id
      //user_name
      console.log(localStorage);
      ///////////////

      console.log(this.navParams);
      if (this.navParams) {
        this.FormHtmlJs.maquina = this.navParams.maquina;
        this.FormHtmlJs.idofpterminado = this.navParams.idofpterminado;
        this.FormHtmlJs.EQUIPOID = this.navParams.EQUIPOID;
        this.FormHtmlJs.fasignado = this.navParams.fasignado;
        this.FormHtmlJs.avatar = this.navParams.avatar;
        this.FormHtmlJs.correorden = this.navParams.correorden;
        this.FormHtmlJs.Y04001 = this.navParams.Y04001;
        this.FormHtmlJs.Y04002 = this.navParams.Y04002;
        this.FormHtmlJs.descripcion_pt = this.navParams.descripcion_pt;
        this.FormHtmlJs.cantidad = this.navParams.cantidad;
        this.FormHtmlJs.idestado = this.navParams.idestado;
        this.IdCboEstadoActual = this.navParams.idestado;
        this.FormHtmlJs.nomclase = this.navParams.nomclase;
        this.FormHtmlJs.idasignaestacionof = this.navParams.idasignaestacionof;

        this.FormHtmlJs.cnt_29012_peso_ini = this.navParams.cnt_29012_peso_ini;
        this.FormHtmlJs.cnt_50000_peso_ini = this.navParams.cnt_50000_peso_ini;
        this.FormHtmlJs.cnt_metalizado_obs = this.navParams.cnt_metalizado_obs;
        this.FormHtmlJs.codigo_qr = this.navParams.codigo_qr;
        this.FormHtmlJs.codsmg = this.navParams.codsmg;
        this.FormHtmlJs.descrip = this.navParams.descrip;
        this.FormHtmlJs.idmaquina = this.navParams.idmaquina;
        this.FormHtmlJs.idordenfabricab = this.navParams.idordenfabricab;
        this.FormHtmlJs.idsubfamilia = this.navParams.idsubfamilia;
        this.FormHtmlJs.nomsubfam = this.navParams.nomsubfam;
        this.FormHtmlJs.proceso_metalizado = this.navParams.proceso_metalizado;
        this.FormHtmlJs.servicio_metalizado = this.navParams.servicio_metalizado;

        this.CssReproceso = (this.navParams.flag_reproceso == 1) ? 'CssReproceso' : '';
        this.hide_div_reproceso = (this.navParams.flag_reproceso == 1) ? true : false;
        this.FormHtmlJs.fecha_reproceso = this.navParams.fecha_reproceso;
        this.FormHtmlJs.cantidad_reproceso = this.navParams.cantidad_reproceso;
        this.FormHtmlJs.idrevisiondet_reproceso = this.navParams.idrevisiondet_reproceso;

        this.FormHtmlJs.codigo_pt = this.navParams.Y04001;

        this.FormHtmlJs.CONCOMPONENTE = this.navParams.CONCOMPONENTE;
        if (this.FormHtmlJs.avatar == 'O.F') {
          this.FlagCCalidad = true;
        }
      }
      this.FormHtmlJs.nombres_tecnico = this.nombres_usuario_local;
      this.FormHtmlJs.idsolicitante_scc = this.id_usuario_local;

      this.FormHtmlJs.plano_diseno = this.navParams.plano_diseno;
      this.FormHtmlJs.cantidad_total = this.navParams.cantidad;
      this.FormHtmlJs.cantidad_revisada = this.navParams.cantidad_revisada;
      this.FormHtmlJs.cantidad_pendiente = this.navParams.cantidad_pendiente;


      console.log('this.FormHtmlJs', this.FormHtmlJs);


      /////////////////////////
    });//////////FIN  STORAGE
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.nombre_dispositivo = localStorage.name;
      this.id_dispositivo = localStorage.uuid;
      console.log('localStorage Device', localStorage);
      //user_id
      //user_name
      //console.log(this.device.uuid);
    });
    //this.FormHtmlJs=mPieza[0];



  }

  async FIniciarActvividad(idsubestacion_asof: any, descripcion_proceso_ofd: any, SEQMASERV: any, flag_mostrar_opciones: any) {

    //console.log("verificar el estado actual");
    //console.log(this.navParams.idestado);
    
    if (SEQMASERV == 0 || descripcion_proceso_ofd == '' || descripcion_proceso_ofd == ' ') {

      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Este registro no tiene un Proceso Asignado, comuniquese con su Supervisor para asignar el proceso a esta Secuencia.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
 
    }
    else if (this.navParams.idestado == 2) {

      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Este registro se encuentra completado, no se puede iniciar otra actividad. (Se debe volver a asignar la Actividad.)',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
 
    }
    /*
    else if (this.navParams.idestado == 3) {

      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Este registro esta Proceso de revision, debe finalizar el registro ya creado que se encuentra en Orden De Fabricacion En Proceso. (Debe asignar la cantidad que se reviso.)',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;

    }
    */
    else {

      

      console.log("recisar este console log");
      console.log(this.FormHtmlJs); //////////

      let row: any = this.FormHtmlJs;
      //row.maquina = 'Iniciar Actividad';
      row.idsubestacion_asof = idsubestacion_asof;
      row.descripcion_proceso_hr = descripcion_proceso_ofd;
      row.SEQMASERV = SEQMASERV;
      row.flag_mostrar_opciones = flag_mostrar_opciones;
      

      console.log("revisar el SEMASERV");
      console.log(row.SEQMASERV);


      let navigationExtras: NavigationExtras = {
        state: row
      };
      this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
    }

  }

  cancelar_ejecucion() {
    this.navCtrl.navigateForward('prod-list-acti-programada');
  }
  CboEstadoChange(ev) {
    console.log('CboEstadoChange', ev)
    console.log(ev.detail)
    console.log(ev.detail.value);
    this.IdCboEstadoActual = ev.detail.value;
    this.prodservice.FUpdateEstadoServicio(this.FormHtmlJs.idofpterminado, ev.detail.value, this.id_usuario_local, this.id_dispositivo, this.FormHtmlJs.avatar, this.FormHtmlJs.idasignaestacionof).then((res) => {
      this.ResptApi = res;
      console.log(this.ResptApi);
    }).finally(() => {

      setTimeout(() => {

      }, 600)
    });


  }
  CboEstadoCancel(ev) {
    console.log('CboEstadoCancel', ev)

  }
  CboEstadoBlur(ev) {
    console.log('CboEstadoBlur', ev)

  }
  ngOnInit() {
  }
  ionViewDidEnter() {

    this.prodservice.ListFindSolicitudQcByOf('', this.FormHtmlJs.idofpterminado, this.id_usuario_local, this.id_dispositivo).then((res) => {
      console.log(res);
      this.DsGridSolicitudQc = res;
      this.CantEntregasCalidad = this.DsGridSolicitudQc.length;
    }).finally(() => {

    });
    //

    this.prodservice.ListFindHojaRuta('', this.FormHtmlJs.idofpterminado, this.id_usuario_local, this.id_dispositivo).then((res) => {
      console.log(res);
      this.DsGridHojaRuta = res; //aquio
      this.CantItemsHojaRuta = this.DsGridHojaRuta.length;
    }).finally(() => {

    });

  }


  FDejarCalidad() {
    let navigationExtras: NavigationExtras = {
      state: this.FormHtmlJs
    };
    this.navCtrl.navigateForward(['prod-ate-serv-dejar-pieza-calidad'], navigationExtras);

  }

  showDetailCalidad(row: any) {

    let navigationExtras: NavigationExtras = {
      state: row//this.DsGridSolicitudQc
    };
    this.navCtrl.navigateForward(['prod-ate-serv-view-dejar-pieza-calidad'], navigationExtras);

  }

  cboEstadoSelect() {

  }


  visualizar_pdf(plano) {

    this.navCtrl.navigateForward('pdf-viewer', {
      queryParams: {
        valor: plano,
        flaglistaprod: 1
      }
    });


  }



}
