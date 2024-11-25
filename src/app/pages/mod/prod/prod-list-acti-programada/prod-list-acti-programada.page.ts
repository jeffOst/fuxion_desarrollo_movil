import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, Injectable, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Storage } from "@ionic/storage";
import { SearchType, ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { IonInput, NavController, MenuController, IonList, Platform, AlertController, LoadingController, IonItemSliding, ActionSheetController, IonButton, IonIcon } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { HeaderComponent } from 'src/app/components/header/header.component';


@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-prod-list-acti-programada',
  templateUrl: './prod-list-acti-programada.page.html',
  styleUrls: ['./prod-list-acti-programada.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})

export class ProdListActiProgramadaPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;
  //@ViewChild('idIconButtonSync') idIconButtonSync: IonButton;
  MultiArrayServicios: any;
  switchButtonSegmento: string = "";
  search_term_equipo = '';
  TituloDinamico: string = "";
  idMenu: string = "";
  scanActive = false;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;

  constructor(
    private loadingController: LoadingController,
    public prodGestionServicioService: ProdGestionServicioService,
    private router: Router,
    public navCtrl: NavController,
    private changeRef: ChangeDetectorRef,
    private alertController: AlertController,
    public storage: Storage,
  ) {
try {
  let navParams = this.router.getCurrentNavigation().extras.queryParams;
    console.log('navParams 00', this.router.getCurrentNavigation());
    console.log('navParams 1', navParams);
    if (navParams) {
      console.log('navParams 2', navParams['0']);
      this.TituloDinamico = navParams['1'];
      this.idMenu = navParams['0'];
    }
} catch (error) {

}




  }

  ngOnInit() {
    //this.TituloDinamico='';
    this.changeRef.detectChanges();

/////////////////valida logeado
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      console.log('localStorage_user', localStorage);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      console.log('ngoninit', this.NombresUsuarioLocal);
      if (this.NombresUsuarioLocal == '') {
        this.navCtrl.navigateForward('login');
      }
    }).catch(err => {
      console.log('errrr', err);
    })

  }
  asigna_titulo(tit:string){

    this.TituloDinamico=tit;
    this.load_list_principal();
    console.log('asigna_titulo',this.TituloDinamico);
  }
  ionViewDidLoad(){
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewDidLoad::',checkViews);
  }
  ionViewWillLeave(){
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewWillLeave::',checkViews);
  }
  ionViewDidLeave(){
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewDidLeave::',checkViews);
  }
  ionViewWillUnload(){
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewWillUnload::',checkViews);
  }
  ionViewCanLeave(){
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewCanLeave::',checkViews);
  }
  ionViewDidEnter(){
    console.log(this.TituloDinamico);
    let checkViews = this.router.getCurrentNavigation();
    console.log('ionViewDidEnter',checkViews);


  }
  ionViewWillEnter(){
    this.changeRef.detectChanges();
    this.load_list_principal();
  }
  ionViewCanEnter (){
    let checkViews = this.router.getCurrentNavigation()
    console.log('ionViewCanEnter',checkViews);
  }
  ///////////////////////////SCAN QR
  async start_scan_qr(index) {
    //this.realPositionYScrollAux = this.realPositionYScroll;
    this.idinputsearch_equipo.getInputElement().then((input)=>{
      input.blur();
    });

    const allowed = await this.checkPermiso();
    if (allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        console.log(result);
        this.search_term_equipo = result.content;
        console.log('result.hasContent:::', result.hasContent);
        //this.content.scrollByPoint(0, this.realPositionYScrollAux, 1200);
        this.scanActive = false;
        this.idinputsearch_equipo.readonly=false;
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
  ////////////////////////////////declarion funciones clientes
  load_list_principal() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.prodGestionServicioService.ListDatos(this.search_term_equipo, this.switchButtonSegmento, '1', this.idMenu).then((res) => {
          this.MultiArrayServicios = res;
          let sContacts = this.MultiArrayServicios;//this.sortArray(this.MultiArrayServicios, 'prioridad_aof',10);
          console.log(sContacts);
          this.MultiArrayServicios = this.groupByArray(sContacts, 'estado', 'estado');
          console.log(this.MultiArrayServicios);

        }).finally(() => {
          this.loadingController.dismiss();

          // setTimeout(() => {
          //   this.idinputsearch_equipo.setFocus();
          // }, 600)

        });
      });
  }

  FIniciarActvividad(row: any, flag_mostrar_opciones: any) {
    //row.maquina=this.TituloDinamico;
    row.flag_mostrar_opciones = flag_mostrar_opciones;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
  }

  FNuevaActvividadNp(flag_mostrar_opciones: any) {
    let row:any;
    row = {} as MPieza;

    row.maquina=this.TituloDinamico;
    row.idmaquina=this.idMenu;

    row.CONCOMPONENTE=1;
    row.flag_mostrar_opciones = flag_mostrar_opciones;
    
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
  }

  FListarActvidades(){

    let navigationExtras: NavigationExtras = {
      state: {idmenu:this.idMenu,menu:this.TituloDinamico}
    };
    this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'],navigationExtras);

  }

  async FSetEstado(row: any, idrevisionofd: any) {
    row.idrevisionofd = idrevisionofd;
  
    let navigationExtras: NavigationExtras = {
      state: row
    };
  
    if (idrevisionofd != 0) {
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Este registro está en Proceso de Revisión. Termine de finalizar la actividad anterior para registrar una Nueva Actividad.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'], navigationExtras);
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.navCtrl.navigateForward(['prod-ate-serv-asigna-estado'], navigationExtras);
    }
  }
  

  groupByArray(xs, key, sortKey) {
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find(r => r && r.key === v);

      if (el) {
        el.values.push(x);
        el.values.sort(function (a, b) {
          return a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase());
        });
      } else {
        rv.push({ key: v, values: [x] });
      }

      return rv;
    }, []);
  };

  sortArray(array, property, direction:number) {
    direction = direction || 1;
    array.sort(function compare(a, b) {
      let comparison = 0;
      if (a[property] > b[property]) {
        comparison = 1 * direction;
      } else if (a[property] < b[property]) {
        comparison = -1 * direction;
      }
      return comparison;
    });
    return array;
  }

}
