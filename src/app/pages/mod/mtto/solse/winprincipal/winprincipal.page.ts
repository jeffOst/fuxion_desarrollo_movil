import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams,NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { ItemsSelected } from "src/app/interfaces/prod/listservipend";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";
import { MttoSolsePopupserviciosPage } from 'src/app/pages/mod/mtto/solse/mtto-solse-popupservicios/mtto-solse-popupservicios.page';

import { PopUpEquiposPage } from 'src/app/pages/mod/prod/pop-up-equipos/pop-up-equipos.page';
import { PopUpPtPage } from 'src/app/pages/mod/prod/pop-up-pt/pop-up-pt.page';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-winprincipal',
  templateUrl: './winprincipal.page.html',
  styleUrls: ['./winprincipal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers:[NavParams]
})

export class WinprincipalPage implements OnInit {
  id_device: string;
  @ViewChild('idInputSearch') idInputSearch: IonInput;
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;

  IdFromModule: number = 0;
  flg_from_que_windows: string = '';
  i_row: number = -1;
  avatar_tv: string = "";
  idtablet_: string = "";
  idvaleservidetot_param: number;
  ArrayItemsSelectedDesti: ItemsSelected[] = [];
  searchTerm = '';
  search_term_equipo = '';
  selected_equipo = '';
  hide_div_equipo: boolean[] = [false];
  hide_div_pt: boolean[] = [false];
  switchButtonSegmento: string = "";
  results: any;
  items22: any;
  results_equipos: any;
  cantItemsSelected: number;
  NomUsuario: String;
  disableButton;
  ItemsSelectedServ: string = 'array_selected_det_np';
  alertSiNo: any;
  rest_marcas: any;
  rest_tipos: any;
  rest_potencias: any;
  rest_pieza: any;
  dataReturned: any;
  NroOtHtml: string = "";
  CodEquipoHtml: string = "";
  FchCreaOtHtml: string = "";
  IdOtHtml: string = "";
  ds_ot_servicios: any;
  scanActive = false;
  constructor(

    public navCtrl: NavController,
    private loadingController: LoadingController,
    public serviceApi: MttoOrdentrabajoService,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    console.log('::::navParams::::::::::::');
    console.log('::::navParams', navParams);
    //let navParams = this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation().extras.state);
    console.log(this.router.getCurrentNavigation().extras.state['nroot']);
    console.log('navParams', navParams);
    if (this.router.getCurrentNavigation().extras.state) {
      this.NroOtHtml=this.router.getCurrentNavigation().extras.state['nroot'];
    this.CodEquipoHtml=this.router.getCurrentNavigation().extras.state['codequipo'];
    this.FchCreaOtHtml=this.router.getCurrentNavigation().extras.state['fcreaot'];
    this.IdOtHtml=this.router.getCurrentNavigation().extras.state['idot'];
    }


    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NomUsuario = localStorage.user_name;
      this.idtablet_ = localStorage.imei;
      //////console.log(this.device.uuid);
    });


  }

  ngOnInit() {
    this.agregar_item_servicio()
    ////console.log('ib ngOnInit');
    //this.load_lista_servicios(this.IdOtHtml);
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });

  }

  ionViewDidEnter() {
    this.load_lista_servicios(this.IdOtHtml);
  }

  listado_solse(idotsolse_otd: string) {

    let navigationExtras: NavigationExtras = {
      state: {
        NroOtHtml: this.NroOtHtml,
        CodEquipoHtml: this.CodEquipoHtml,
        FchCreaOtHtml: this.FchCreaOtHtml,
        IdOtHtml: this.IdOtHtml,
        idotsolse_otd: idotsolse_otd
      }
    };
    console.log(navigationExtras);
    this.navCtrl.navigateForward(['mtto-genera-solse'], navigationExtras);
  }
  select_change_marca(ev, index) {
    for (const row of this.rest_marcas) {
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].marca_nombre = row.nombre;
      }
    }
  }
  select_change_potencia(ev, index) {
    for (const row of this.rest_potencias) {
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].potencia_nombre = row.nombre;
      }
    }
  }
  select_change_tipo(ev, index) {
    for (const row of this.rest_tipos) {
      if (row.codigo == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].tipo_nombre = row.nombre;
      }
    }
  }
  select_change_pieza(ev, index) {
    for (const row of this.rest_pieza) {
      if (row.codigo_pb == ev.detail.value) {
        this.ArrayItemsSelectedDesti[index].pieza_nombre = row.nombre_pb;
      }
    }
  }
actualizar_lista_servicios(){
let arrayAux=this.ArrayItemsSelectedDesti;
this.ArrayItemsSelectedDesti=[];
let index=0;
  for (const row of arrayAux) {    
    console.log(row);    
    row.idvaleservidetot=index;
    this.ArrayItemsSelectedDesti.push(row);
    index++;
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
            console.log(this.ArrayItemsSelectedDesti);            
            this.ArrayItemsSelectedDesti.splice(index, 1);
            //this.i_row--;
            console.log(this.ArrayItemsSelectedDesti);
            this.actualizar_lista_servicios();
            console.log(this.ArrayItemsSelectedDesti);
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
  agregar_item_servicio() {
    ////console.log('this.idtablet_::::>');
    ////console.log(this.idtablet_);

    this.i_row++;
    let data_array: any =
    {
      idvaleservidetot_i: 0,
      idvaleservidetot: this.i_row,
      cantidad: 1,
      nrosolse_ot: '',// 
      fchvalesrv: '',//
      SEQMASERV: '',///codigpo de PT
      Y04002: '',///descrp servicio
      Y04001: '',///codig servicio
      codsmg: '',
      nombres: '',/// SEQMASERV id de servicio
      ////////////////
      idtablet: this.idtablet_,///area
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
      tipo: ''
    }
      ;

    this.ArrayItemsSelectedDesti.push(data_array);

    this.actualizar_lista_servicios();
  }
  cancelar_ejecucion() {
    this.navCtrl.navigateForward('listaprincipal');
  }
  ////////////////////////////pop SERVICIOS
  async open_popup_servicios(index) {
    let idpieza_;
    let avatar_;
    let idarea_;
    let idtipo_;
    let msgg;
    let flag_msg: boolean = false;
    //////////////////////////
    for (const row of this.ArrayItemsSelectedDesti) {
      console.log('::::::::::::::>>>>>>>>>>>');
      console.log(this.ArrayItemsSelectedDesti);
      console.log(index);
      console.log(this.i_row);
      console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
      if (this.ArrayItemsSelectedDesti[index].idvaleservidetot == index) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        if (this.ArrayItemsSelectedDesti[index].avatar != '4') {
          idpieza_ = this.ArrayItemsSelectedDesti[index].ma00estado_replicated;
        }
        else {
          idpieza_ = '0';
        }
        avatar_ = this.ArrayItemsSelectedDesti[index].avatar;
        idarea_ = this.ArrayItemsSelectedDesti[index].idtablet;

        //console.log(this.ArrayItemsSelectedDesti);
        break;
      }
      index++;
    }

    if (this.idtablet_ == '') {
      msgg = ' Tablet';
      flag_msg = true;
    }

    /////////**************** */
    if (flag_msg) {
      const alert = this.alertController.create({
        header: 'Servicios',
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
      component: MttoSolsePopupserviciosPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        idvaleservidetot_p: this.i_row,
        idpieza: idpieza_,
        idtablet: this.idtablet_,
        avatar: avatar_
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

        let index_ = 0;
        for (const row of this.ArrayItemsSelectedDesti) {
          //console.log(this.ArrayItemsSelectedDesti);
          //console.log(row);
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index_].idvaleservidetot == index) {
            //console.log(dataReturned.data);
            this.ArrayItemsSelectedDesti[index_].Y04002 = dataReturned.data.Y04002;
            this.ArrayItemsSelectedDesti[index_].nombres = dataReturned.data.SEQMASERV;
            this.ArrayItemsSelectedDesti[index_].Y04001 = dataReturned.data.Y04001;
            this.ArrayItemsSelectedDesti[index_].pieza_nombre = dataReturned.data.pieza;
            this.ArrayItemsSelectedDesti[index_].unidad = dataReturned.data.unidad;

            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index_++;
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
      //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
      //console.log(this.i_row);
      if (this.ArrayItemsSelectedDesti[index].idvaleservidetot == this.i_row) {
        ////console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
        //this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idpt;
        idmarca_ = this.ArrayItemsSelectedDesti[index].marca;
        idpotencia_ = this.ArrayItemsSelectedDesti[index].potencia;
        idtipo_ = this.ArrayItemsSelectedDesti[index].tipo;
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
        idvaleservidetot_p: this.i_row,
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
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index].idvaleservidetot == this.i_row) {
            //console.log(dataReturned.data);
            this.ArrayItemsSelectedDesti[index].resumen_Y04002 = dataReturned.data.idequipo;
            this.ArrayItemsSelectedDesti[index].SEQMASERV = dataReturned.data.idmarca;
            this.ArrayItemsSelectedDesti[index].ma00estado_replicated = dataReturned.data.idtipo;///idclase <> idpieza

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

    const modal = await this.modalCtrl.create({
      component: PopUpEquiposPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        idvaleservidetot_p: this.i_row
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
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.ArrayItemsSelectedDesti[index].idvaleservidetot);
          //console.log(this.i_row);
          if (this.ArrayItemsSelectedDesti[index].idvaleservidetot == this.i_row) {
            //console.log(dataReturned.data);
            this.ArrayItemsSelectedDesti[index].codsmg = dataReturned.data.idequipo;
            this.ArrayItemsSelectedDesti[index].marca = dataReturned.data.idmarca,
              this.ArrayItemsSelectedDesti[index].potencia = dataReturned.data.idpotencia,
              this.ArrayItemsSelectedDesti[index].tipo = dataReturned.data.idtipo
            //console.log(this.ArrayItemsSelectedDesti);
            break;
          }
          index++;
        }


      }
    });

    return await modal.present();


  }


  quitar_vale_selected(items: ItemsSelected) {
    ///elimina
    const loading = this.loadingController.create({
      message: 'Porfavor espere...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        this.serviceApi.EjServQuitarItemSelected(items).then(
          () => {
            this.loadingController.dismiss();
          }
        );
      }
    )

  }
  segmento_cambiado(ev, idservicio, i_row_) {
    //console.log('ev');
    //console.log(ev);
    //console.log('i_row_:::' + i_row_);
    let name_avatar;
    switch (ev.detail.value) {
      case '1':///mostrar solo busqueda de equipos
        this.hide_div_equipo[i_row_] = true;
        this.hide_div_pt[i_row_] = false;
        name_avatar = "Servicios Taller";
        break;
      case '2':
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = true;
        name_avatar = "Fabricacion Bomba";
        break;
      case '3':
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = true;
        name_avatar = "Fabricacion Repuesto";
        break;
      case '4':
        this.hide_div_equipo[i_row_] = false;
        this.hide_div_pt[i_row_] = false;
        name_avatar = "Costos Taller";
        break;

      default:
        break;
    }
    let index = 0;
    for (const row of this.ArrayItemsSelectedDesti) {
      if (this.ArrayItemsSelectedDesti[index].idvaleservidetot == i_row_) {
        this.ArrayItemsSelectedDesti[index].avatar = ev.detail.value;
        this.ArrayItemsSelectedDesti[index].nombre_avatar = name_avatar;
      }
      index++;
    }
    //this.ArrayItemsSelectedDesti.splice(index,1);
    //this.i_row--;
    //this.agregar_item_servicio()
    ////////////////////
    ///idvaleservidetot_i: 0,
    //idvaleservidetot: this.i_row;
    index = i_row_;
    this.ArrayItemsSelectedDesti[index].cantidad = 1;
    this.ArrayItemsSelectedDesti[index].nrosolse_ot = '';// 
    this.ArrayItemsSelectedDesti[index].fchvalesrv = '';//
    this.ArrayItemsSelectedDesti[index].SEQMASERV = '';///codigpo de PT
    this.ArrayItemsSelectedDesti[index].Y04002 = '';///descrp servicio
    this.ArrayItemsSelectedDesti[index].Y04001 = '';///codig servicio
    this.ArrayItemsSelectedDesti[index].codsmg = '';
    this.ArrayItemsSelectedDesti[index].nombres = '';/// SEQMASERV id de servicio
    ////////////////
    //this.ArrayItemsSelectedDesti[index].idtablet= this.idtablet_;///area
    this.ArrayItemsSelectedDesti[index].idtecnico = '';
    this.ArrayItemsSelectedDesti[index].imei = '';
    this.ArrayItemsSelectedDesti[index].coloravatar = '';
    //this.ArrayItemsSelectedDesti[index].avatar= '';
    //nombre_avatar= '';
    /////////////tickect
    this.ArrayItemsSelectedDesti[index].finicio_hvot_cab = '';
    this.ArrayItemsSelectedDesti[index].ffin_hvot_cab = '';
    this.ArrayItemsSelectedDesti[index].hora_finicio_hvot_cab = '';
    this.ArrayItemsSelectedDesti[index].hora_ffin_hvot_cab = '';
    this.ArrayItemsSelectedDesti[index].idhorasxvueltaotcab = '';
    this.ArrayItemsSelectedDesti[index].nota_hvot = '';
    this.ArrayItemsSelectedDesti[index].corre_hvot = '';
    this.ArrayItemsSelectedDesti[index].nombres_ejecutor = '';
    this.ArrayItemsSelectedDesti[index].ma00estado_nombre = '';
    this.ArrayItemsSelectedDesti[index].resumen_Y04002 = '';///nombre de PT
    this.ArrayItemsSelectedDesti[index].horas_ejecutadas = '';
    this.ArrayItemsSelectedDesti[index].ma00estado_replicated = '';///idpieza
    this.ArrayItemsSelectedDesti[index].pieza_nombre = '';
    this.ArrayItemsSelectedDesti[index].cntvueltas = 0;
    this.ArrayItemsSelectedDesti[index].marca_nombre = "";
    this.ArrayItemsSelectedDesti[index].marca = '';
    this.ArrayItemsSelectedDesti[index].potencia_nombre = '';
    this.ArrayItemsSelectedDesti[index].potencia = '';
    this.ArrayItemsSelectedDesti[index].tipo_nombre = '';
    this.ArrayItemsSelectedDesti[index].tipo = '';
    //////////////////////////////

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
        this.serviceApi.llamarMaestroServicios(this.searchTerm, this.switchButtonSegmento, '11', 'H', this.id_device).then((res) => {
          this.results = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            this.idInputSearch.setFocus();
          }, 600)
        });
      });
  }

  agregar_vale(aItemvale: ItemsSelected) {
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
      aItemvale.idvaleservidetot = this.idvaleservidetot_param;
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
    for (const row of this.ArrayItemsSelectedDesti) {

      ////servicio
      if (this.ArrayItemsSelectedDesti[index].Y04002 == null || this.ArrayItemsSelectedDesti[index].Y04002 == '') {
        siono = 2;
        msgg = ' Fala agregar servicio';
        break;
      }


      ///////////fin tipo actividad

      index++;
    }

    if (siono == 1 || siono == 2) {
      //msgg = (siono == 1) ? ' si es: OT u OF' : 'el Equipo'
      const alert = this.alertController.create({
        header: 'Servicios Seleccionados',
        cssClass: 'success',
        subHeader: '',
        mode: "ios",
        message: '' + msgg + ', en el item: (' + (index + 1) + ')',
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
      this.alertSiNo = this.alertController.create({
        header: 'Servicios Seleccionados',
        subHeader: '',
        mode: "ios",
        backdropDismiss: true,
        message: 'Confirmar que desea guardar?',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {
              
              const loading = this.loadingController.create({
                //spinner: null,
                //duration: 5000,
                message: 'Cargando lista...',
                translucent: true//,
                //cssClass: 'custom-class custom-loading'
              }).then(
                loading => {
                  loading.present();
                }).finally(() => {
                  
                });
              /////////////////
              this.serviceApi.guardar_servicios_selected_ot(this.ArrayItemsSelectedDesti, this.IdOtHtml).then((res) => {
                console.log('res::::::>', res);
                this.results = res;
                console.log(this.results[0]);
                if (this.results[0]['o_nres'] != 0) {
                  //this.actulizar_solse(this.IdOtHtml);
                  this.load_lista_servicios(this.IdOtHtml);
                  this.loadingController.dismiss();
                  alert(this.results[0]['o_msj']);
                  this.ArrayItemsSelectedDesti = [];
                } else {
                  alert(this.results[0]['o_msj']);
                }
              }).finally(() => {
                //this.navCtrl.navigateForward(['addnoprogramado']);

              });

            

              ////////////////ini
              /*this.storage.remove(this.ItemsSelectedServ).finally(() => {
                this.storage.set(this.ItemsSelectedServ, this.ArrayItemsSelectedDesti).finally(() => {
                  console.log('this.flg_from_que_windows::>', this.flg_from_que_windows);
                  if (this.flg_from_que_windows == '3') {
                    this.navCtrl.navigateForward(['addnoprogramado']);
                  } else if (this.flg_from_que_windows == '4') {
                    console.log('new-ticket-regularizar::>');
                    this.navCtrl.navigateForward(['new-ticket-regularizar']);
                    console.log('new-ticket-regularizar::><<<');
                  }


                })
              })*/
              /////////////

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
        this.serviceApi.listado_equipos_service(this.search_term_equipo, this.switchButtonSegmento, '17', 'H').then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            this.idinputsearch_equipo.setFocus();
          }, 600)
        });
      });
  }

  load_lista_servicios(idot: string) {
    const loading = this.loadingController.create({
      message: 'Cargando servicios...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.serviceApi.load_lista_servicios(idot).then((res) => {

          this.ds_ot_servicios = res;

        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  async start_scan_qr(index) {
    // this.realPositionYScrollAux = this.realPositionYScroll;
    // console.log('this.realPositionYScrollAux::', this.realPositionYScrollAux);
    // console.log('this.realPositionYScroll::', this.realPositionYScroll);

    const allowed = await this.checkPermiso();
    if (allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();

      // console.log('this.realPositionYScrollAux::', this.realPositionYScrollAux);
      // console.log('this.realPositionYScroll::', this.realPositionYScroll);

      if (result.hasContent) {
        console.log(result);
        this.ArrayItemsSelectedDesti[index].codigo_qr_os = result.content;
        console.log(this.ArrayItemsSelectedDesti[index]);
        console.log(this.ArrayItemsSelectedDesti);
        console.log('result.hasContent:::', result.hasContent);
        // this.content.scrollByPoint(0, this.realPositionYScrollAux, 1200);
        this.scanActive = false;
      }

    }

  }
  async checkPermiso() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: 'No Permiso',
          message: 'Por favor dar permiso al acceso de camara en configuraciones',
          buttons: [{ text: 'No', role: 'Cancelar' }, { text: 'Abrir Configuracions', handler: () => { BarcodeScanner.openAppSettings(); resolve(false) } }]
        });
        await alert.present();
      }
      else {
        resolve(false);
      }
    });
    console.log(status);
    // status.granted;
  }
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }


}
