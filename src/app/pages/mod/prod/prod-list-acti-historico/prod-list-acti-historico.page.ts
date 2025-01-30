import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonInput, LoadingController, NavController } from '@ionic/angular';
import { ProdGestionServicioService } from 'src/app/api/prod/prod-gestion-servicio.service';
import { Storage } from "@ionic/storage";
import { Router, NavigationExtras } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";

@Component({
  selector: 'app-prod-list-acti-historico',
  templateUrl: './prod-list-acti-historico.page.html',
  styleUrls: ['./prod-list-acti-historico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})


export class ProdListActiHistoricoPage implements OnInit, OnDestroy {

  @ViewChild('IdHtmlInputSearch') idInputSearch: IonInput;
  TituloDinamico: string = "Registro de Orden de Fabricacion";
  NgModInputSearch: string = "";
  MultiArrayServicios: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  scanActive = false;
  navParams: any;
  idMenu: string;
  menu: string;
  private autoUpdateInterval: any; // Variable para almacenar el intervalo
  constructor(
    private loadingController: LoadingController,
    public prodGestionServicioService: ProdGestionServicioService,
    public storage: Storage,
    public navCtrl: NavController,
    public router: Router,
    public globalVal: GlovalProvider
  ) {

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);

    console.log(this.idMenu);

    this.idMenu = '0';
    this.menu = '';

    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;

    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });


  }

  ngOnInit() {
    this.FFindRows();

    console.log("entra ngOnInit");
    
    
  }

  ngOnDestroy() {
    /*
    // Detiene el intervalo cuando el componente se destruye
    if (this.autoUpdateInterval) {
      clearInterval(this.autoUpdateInterval);
    }
      */
    
  }

  ionViewDidLoad() {
    console.log("entra ionViewDidLoad");

  }
  ionViewDidEnter() {
    console.log("entra ionViewDidEnter");
    // Inicia el intervalo para actualizar la información cada 5 segundos
    this.autoUpdateInterval = setInterval(() => {
      this.FFindRows();
    }, 10000);
  }
  ionViewWillLeave() {
    console.log("sale ionViewWillLeave");
    // Limpia el intervalo para evitar actualizaciones innecesarias
    if (this.autoUpdateInterval) {
      clearInterval(this.autoUpdateInterval);
      this.autoUpdateInterval = null; // Limpia la referencia
    }
  }
  /*
  ngOnDestroy() {
    // setTimeout(() => {
    //   alert('ngOnDestroy');
    // }, 600)
  }
    */
  FSelectedItem(row: any) {
    console.log(row);
    //let row1:any;
    //row1[0]=row;

    //row.maquina=this.TituloDinamico;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    //console.log(navigationExtras);
    row.flag_historico_actividad=1;
    this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

  }

  FReporteFalla() {
    console.log('row');

    let navigationExtras: NavigationExtras = {
      state: { idmenu: this.idMenu, menu: this.menu }
    };

    this.navCtrl.navigateForward(['prod-ate-serv-reporte-falla'], navigationExtras);
  }

  FRelevo() {
    
    let navigationExtras: NavigationExtras = {
      state: { idmenu: this.idMenu, menu: this.menu }
    };
    this.navCtrl.navigateForward(['prod-ate-serv-relevo'],navigationExtras);
  }

  FIniciarActvividad() {
    let row:any;
    row = {} as MPieza;
    //row.maquina=this.TituloDinamico;
    row.CONCOMPONENTE=1;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
  }

  //

  ////////////////////////////////declarion funciones clientes
  FFindRows() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.prodGestionServicioService.ListFindActividadesHistorico(this.NgModInputSearch, this.IdUsuarioLocal, this.IdDispositivo, this.globalVal.global_user_maquina).then((res) => {
          this.MultiArrayServicios = res;
          let sContacts = this.MultiArrayServicios;//this.sortArray(this.MultiArrayServicios, 'nombres_tecnico', 1);
          this.MultiArrayServicios = this.groupByArray(sContacts, 'nombres_tecnico', 'hora_ini_acti_otd');
          //console.log('this.MultiArrayServicios', this.MultiArrayServicios);

        }).finally(() => {
          this.loadingController.dismiss();
          
          // setTimeout(() => {
          //   this.idInputSearch.setFocus();
          // }, 600)

        });
      });
  }
  /////////////////////funciones de agrupacion
  groupByArray(xs, key, sortKey) {
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find(r => r && r.key === v);

      if (el) {
        el.values.push(x);
        // el.values.sort(function (a, b) {
        //   return a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase());
        // });
      } else {
        rv.push({ key: v, values: [x] });
      }

      return rv;
    }, []);
  };

  sortArray(array, property, direction) {
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

  FListarActvidades(){

    let navigationExtras: NavigationExtras = {
      state: {idmenu:this.idMenu,menu:this.TituloDinamico}
    };
    this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'],navigationExtras);

  

  }

}
