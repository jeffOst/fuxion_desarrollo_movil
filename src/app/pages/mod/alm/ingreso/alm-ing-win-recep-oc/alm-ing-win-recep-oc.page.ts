
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-alm-ing-win-recep-oc',
//   templateUrl: './alm-ing-win-recep-oc.page.html',
//   styleUrls: ['./alm-ing-win-recep-oc.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule]
// })
// export class AlmIngWinRecepOcPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { AlmIngSaliServicio } from "src/app/api/alm/alm-ing-sali-servicio.service";
import { MAlmacenIngreso } from "src/app/interfaces/alm/AlmacenIngreso";
import { Storage } from "@ionic/storage";

@Component({
    selector: 'app-alm-ing-win-recep-oc',
  templateUrl: './alm-ing-win-recep-oc.page.html',
  styleUrls: ['./alm-ing-win-recep-oc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlmIngWinRecepOcPage implements OnInit {
  navParams:any;
  FormHtmlJs:any;
  DsGridDet:any;
  nombres_usuario_local: string;
  id_usuario_local: string;
  id_dispositivo: string;
  nombre_dispositivo: string;
  CantFilas:number;
  IdOrdenCompra:string;
  CssNotiNroGuia: string;
  CssNotiFecha: string;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  Cancelar:string='Cancelar';
  public botonHabilitado: boolean = true;
  constructor(
    public toastController: ToastController,
    private router: Router,
    public ApiService: AlmIngSaliServicio,
    public navCtrl: NavController,
    public storage: Storage,
    
    private loadingController: LoadingController,
  ) {
    this.FormHtmlJs = {} as MAlmacenIngreso;
    this.navParams = this.router.getCurrentNavigation().extras.state;
    this.FormHtmlJs = this.navParams;
    console.log('this.navParams::>', this.FormHtmlJs);
    this.IdOrdenCompra=this.navParams.Y20005;
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;


    });

   }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.FormHtmlJs.FCHMOV=new Date().toISOString();
    this.ListDetalleGuia();
  }

  ListDetalleGuia(){

    console.log(this.IdOrdenCompra);

    this.ApiService.ListDetalleGuia(this.IdOrdenCompra, this.id_usuario_local, this.id_dispositivo).then((res) => {
      console.log(res);
      this.FormHtmlJs.detalle = res;
      this.CantFilas = res.length;

      console.log('this.FormHtmlJs:::>>>',this.FormHtmlJs);
      console.log('FormHtmlJs.detalle',this.FormHtmlJs.detalle);


    }).finally(() => {

    });


  }
///////////////////
onTouched(e,i,fuente){
  e.preventDefault();
  console.log('fuente',fuente);
  console.log('i',i);
  console.log('e',e);
  console.log(this.FormHtmlJs.detalle[i].cant_recepcion);
  console.log(this.FormHtmlJs.detalle[i].Y20084);
  if (this.FormHtmlJs.detalle[i].cant_recepcion>(this.FormHtmlJs.detalle[i].Y20084-this.FormHtmlJs.detalle[i].cant_atendido)) {
    this.FormHtmlJs.detalle[i].cant_recepcion=0;
    //alert('Ingrese Cantidad igual o menor a la pedida...');
    let msgg='Ingrese Cantidad igual o menor a la pedida...';
    this.presentToast(msgg, 'danger');
  } else {

  }
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
  FSaveFormulario() {

    let request_insert: any;
    let resultado: any;
    let msjrequest: string = '';
    let msgg: string = '';
    ////////////////////////
    let index = 0;
    let siono = 0

    this.CssNotiFecha = 'field_required_ok';
    if (this.FormHtmlJs.Y10077 == null || this.FormHtmlJs.Y10077 == '') {
      siono = 2;
      msgg = ' Fala ingresar número de guia';
      this.CssNotiNroGuia = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }
    this.CssNotiFecha = 'field_required_ok';
    if (this.FormHtmlJs.FCHMOV == null || this.FormHtmlJs.FCHMOV == '') {
      siono = 2;
      msgg = ' Fala seleccionar fecha de ingreso';
      this.CssNotiFecha = 'field_required';
      this.presentToast(msgg, 'danger');
      return false;
    }

    this.FormHtmlJs.acc = '3';
    this.FormHtmlJs.IdUsuarioLocal=this.IdUsuarioLocal;

    const loading = this.loadingController.create({
      message: 'Guardando Guia...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();

    this.ApiService.FSaveFormIngreso(this.FormHtmlJs).then((res) => {
      this.loadingController.dismiss();
      let rest: any;
      rest = res[0];
      if (rest.o_nres == 0) {
        alert('Error, no se pudo guardar correctamente.');
      } else {

        this.navCtrl.navigateForward(['alm-ing-list-recep-oc']);
        this.presentToast(rest.o_msj);


      }

    }).finally(() => {
      console.log('finalyyyy');
      this.botonHabilitado = false;

    });
///////////////////////
});
  }

  showDetailIngreso(row: any) {

    let navigationExtras: NavigationExtras = {
      state: row//this.DsGridSolicitudQc
    };
    this.navCtrl.navigateForward(['alm-ing-win-det-recep-oc'], navigationExtras);

  }

}
