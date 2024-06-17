import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, LoadingController, NavController } from '@ionic/angular';
import { ProdGestionServicioService } from 'src/app/api/prod/prod-gestion-servicio.service';
import { Storage } from "@ionic/storage";
import { Router, NavigationExtras } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { HeaderComponent } from 'src/app/components/header/header.component';
@Component({
  selector: 'app-prod-ate-serv-list-actividades',
  templateUrl: './prod-ate-serv-list-actividades.page.html',
  styleUrls: ['./prod-ate-serv-list-actividades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})


export class ProdAteServListActividadesPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') idInputSearch: IonInput;
  TituloDinamico: string = "Tabla de Actividades";
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
  constructor(
    private loadingController: LoadingController,
    public prodGestionServicioService: ProdGestionServicioService,
    public storage: Storage,
    public navCtrl: NavController,
    public router: Router,
  ) {

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);
    this.idMenu = this.navParams.idmenu;
    this.menu = this.navParams.menu;

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
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    
  }
  ngOnDestroy() {
    // setTimeout(() => {
    //   alert('ngOnDestroy');
    // }, 600)
  }
  FSelectedItem(row: any) {
    console.log(row);
    //let row1:any;
    //row1[0]=row;

    //row.maquina=this.TituloDinamico;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    console.log(navigationExtras);

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
        this.prodGestionServicioService.ListFindActividades(this.NgModInputSearch, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
          this.MultiArrayServicios = res;
          let sContacts = this.MultiArrayServicios;//this.sortArray(this.MultiArrayServicios, 'nombres_tecnico', 1);
          this.MultiArrayServicios = this.groupByArray(sContacts, 'maquina', 'hora_ini_acti_otd');
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

}
