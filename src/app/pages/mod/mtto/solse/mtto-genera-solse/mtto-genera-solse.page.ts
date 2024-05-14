import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-mtto-genera-solse',
//   templateUrl: './mtto-genera-solse.page.html',
//   styleUrls: ['./mtto-genera-solse.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule]
// })
// export class MttoGeneraSolsePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, ViewChild } from '@angular/core';
import {ToastController, NavController, AlertController, IonInput, Platform, LoadingController, ModalController, IonContent } from '@ionic/angular';
import { model_solse } from "src/app/interfaces/mtto/mtto-ordentrabajo";
import { ItemsSelected } from "src/app/interfaces/prod/listservipend";
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";
import { Plugins } from "@capacitor/core";
import { async } from '@angular/core/testing';
//import { resolve } from 'path';
//import { rejects } from 'assert';
//const{ BarcodeScanner} = Plugins
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-mtto-genera-solse',
  templateUrl: './mtto-genera-solse.page.html',
  styleUrls: ['./mtto-genera-solse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoGeneraSolsePage implements OnInit {
  @ViewChild('idContent') content: IonContent;
  //@ViewChild('idInputSearch')  inputElement: IonInput;
  NomUsuario: String;
  idtablet_: string = "";
  id_device: string;
  ArrayItemsSelectedDesti: model_solse[] = [];
  //ArrayItemsSelectedDesti: ItemsSelected[] = [];
  NroOtHtml: string = "";
  CodEquipoHtml: string = "";
  FchCreaOtHtml: string = "";
  IdOtHtml: string = "";
  results: any;
  /////////////////qr
  result = null;
  scanActive = false;
  realPositionYScroll: number = 0;
  realPositionYScrollAux: number = 0;
  idotsolse_otd:string=''
  CssNotiTipoProceso: string;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public serviceApi: MttoOrdentrabajoService,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private platform: Platform,
    private toastController:ToastController

  ) {

    let navParams = this.router.getCurrentNavigation().extras.state;
    if (navParams) {
      console.log(navParams);
      
      this.NroOtHtml = navParams['NroOtHtml'];
      this.CodEquipoHtml = navParams['CodEquipoHtml'];
      this.FchCreaOtHtml = navParams['FchCreaOtHtml'];
      this.IdOtHtml = navParams['IdOtHtml'];
      this.idotsolse_otd=navParams['idotsolse_otd'];
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
    this.ArrayItemsSelectedDesti = [];
    //this.agregar_item_servicio()
    ////console.log('ib ngOnInit');
    this.actulizar_solse(this.IdOtHtml);
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });

  }
  ngAfterViewInit() {
    // BarcodeScanner.prepare();    
  }
  ngOnDestroy() {
    //  BarcodeScanner.stopScan();
  }
  ////////////////////////////////
  logScrollStart() {
    console.log('inicio scroool');

  }
  logScrolling(e) {
    this.realPositionYScroll = e.detail.scrollTop;
    let positionYwin = this.platform.height();
    

  }
  ionScrollEnd() {
    console.log('fin  de scroool');
  }
  async start_scan_qr(index) {
    this.realPositionYScrollAux = this.realPositionYScroll;
    console.log('this.realPositionYScrollAux::', this.realPositionYScrollAux);
    console.log('this.realPositionYScroll::', this.realPositionYScroll);

    const allowed = await this.checkPermiso();
    if (allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();

      console.log('this.realPositionYScrollAux::', this.realPositionYScrollAux);
      console.log('this.realPositionYScroll::', this.realPositionYScroll);

      if (result.hasContent) {
        console.log(result);
        this.ArrayItemsSelectedDesti[index].codigo_qr_os = result.content;
        console.log(this.ArrayItemsSelectedDesti[index]);
        console.log(this.ArrayItemsSelectedDesti);
        console.log('result.hasContent:::', result.hasContent);
        this.content.scrollByPoint(0, this.realPositionYScrollAux, 1200);
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
  load_lista_servicios(idot: string) {

    this.serviceApi.load_lista_solse(idot,this.idotsolse_otd).then((res) => {
      //this.ds_ot_servicios = res;
      console.log('DENTO SOLSE REST', res);
      //this.ArrayItemsSelectedDesti.push(res);
      this.ArrayItemsSelectedDesti = res;
      console.log('DENTO SOLSE ArrayItemsSelectedDesti', this.ArrayItemsSelectedDesti);
      console.log('finally::this.realPositionYScroll>', this.realPositionYScroll);

      this.content.scrollByPoint(0, this.realPositionYScroll, 1000);

    }).finally(() => {

    });

  }

  actulizar_solse(idsolse) {

    const loading = this.loadingController.create({
      message: 'Cargando servicios...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();

        this.serviceApi.update_solse_ot(this.ArrayItemsSelectedDesti, idsolse).then((res) => {
          console.log('res::::::>', res);
          this.results = res;
          console.log(this.results[0]);
          this.load_lista_servicios(idsolse);
          if (this.results[0]['o_nres'] != 0) {
            this.load_lista_servicios(this.IdOtHtml);
            //alert(this.results[0]['o_msj']);
            this.ArrayItemsSelectedDesti = [];
          } else {
            alert(this.results[0]['o_msj']);
          }
        }).finally(() => {
          //this.navCtrl.navigateForward(['addnoprogramado']);

          this.loadingController.dismiss();
        });

      });

  }
  actulizar_solse_qr(idsolse,i) {

let msgg;
    this.CssNotiTipoProceso = 'field_required_ok';
    console.log(this.ArrayItemsSelectedDesti[i].codigo_qr_os);
    
    if (this.ArrayItemsSelectedDesti[i].codigo_qr_os == null || this.ArrayItemsSelectedDesti[i].codigo_qr_os == '') {
      
      msgg = ' Fala ingresar el código QR ';
      this.CssNotiTipoProceso = 'field_required';
      this.presentToast(msgg,'danger');
      return false;
    }

    this.serviceApi.update_solse_ot_qr(this.ArrayItemsSelectedDesti, idsolse).then((res) => {
      console.log('res::::::>', res);
      this.results = res;
      console.log(this.results[0]);
      this.load_lista_servicios(idsolse);
      if (this.results[0]['o_nres'] != 0) {
        this.load_lista_servicios(this.IdOtHtml);
        alert(this.results[0]['o_msj']);
        this.ArrayItemsSelectedDesti = [];
      } else {
        alert(this.results[0]['o_msj']);
      }
    }).finally(() => {
      //this.navCtrl.navigateForward(['addnoprogramado']);

    });

  }

  async presentToast(msj,color:string='primary') {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position:'top',
      color:color
    });
    toast.present();
  }

  regresar_listado_servicios() {
    this.navCtrl.navigateForward('winprincipal');
  }

}
