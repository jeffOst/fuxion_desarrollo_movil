// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.scss'],
// })
// export class MenuComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
//import { LogincustomService } from "../../api/logincustom.service";
import { Storage } from "@ionic/storage";
//import { ProdListActiProgramadaPage } from "../../mod/prod/prod-list-acti-programada/prod-list-acti-programada.page";
import { NgFor } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalHorometroFinPage } from '../../components/modals/modal-horometro-fin/modal-horometro-fin.page'; // Importa tu modal
import { LogincustomService } from "src/app/api/logincustom.service";
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor],
})
export class MenuComponent implements OnInit {
  valor = 'Perú';
  array_menu: any;
  array_usu: any;
  array_device: any;
  IpLogeo: string;
  constructor(public navCtrl: NavController,
    private router: Router,
    private logincustomService: LogincustomService,
    private modalController: ModalController,
    private storage: Storage,//,
    public globalVal: GlovalProvider
    //private prodlistActiProgramada:ProdListActiProgramadaPage
  ) {


    console.log('componen modulo ts::::::::>>>>>>>>>>>>>>>>');
    console.log('menu constuuuuuuuuuuu');
    ///esta asignacion es cuando por primera vez se inicia la aplicacion
    let imei_: string = "";

    /*
    var dummy_reponse = {
      user_id: '0',
      user_name: '',
      imei: '123321',
    };

    this.array_device = dummy_reponse;
    console.log("dummy_reponse ", dummy_reponse);
    this.storage.create();
    this.storage.set("USER_INFO", dummy_reponse).then((response) => {

    });
    */

  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngOnInit() {
    //console.log('menu constuuuuuuuuuuu 3333333333333333333333333');
    //console.log('this.logincustomService.array_menu::',this.logincustomService.array_menu);
    this.array_menu = [];
    this.array_device = [];
    this.array_usu = [];
  }
  iondidopen(e: any) {

    let localStorage: any;
    this.storage.create();
    this.storage.get('USER_MENU').then((result1) => {
      localStorage = (result1);
      this.array_menu = localStorage;
      //this.NomUsuario = localStorage.user_name;
      //console.log(this.device.uuid);
    });

    let localStorage_usu: any;
    this.storage.create();
    this.storage.get("USER_INFO").then((result1) => {
      localStorage_usu = (result1);
      console.log(localStorage_usu);

      this.array_usu = localStorage_usu;
      this.globalVal.global_permiso_80 = localStorage_usu.permiso_80;
      this.globalVal.global_user_area = localStorage.area;
    });

    console.log('ionDidOpen:94');
    this.storage.create();
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      console.log('localStorage==>>', localStorage);
      this.array_device = localStorage;
      //this.NomUsuario = localStorage.user_name;
      //console.log(this.device.uuid);
    });

    this.storage.get('IP_MANUAL').then((result1) => {
      localStorage = (result1);
      console.log('ip manual==>>', localStorage);
      this.IpLogeo = localStorage.ip;
      //this.NomUsuario = localStorage.user_name;
      //console.log(this.device.uuid);
    });


  }
  goto_list_pend(): void {
    //this.navCtrl.push(ProdlistvalespendComponent);
    console.log(['listvalespend']);
    this.router.navigate(['listvalespend']);///,this.valor
  }
  goto_home(): void {
    //this.navCtrl.push(ProdlistvalespendComponent);
    this.router.navigate(['home']);///,this.valor
  }
  goto_list_ticket() {
    this.router.navigate(['listicken']);///,this.valor
  }


  async logout() {
    /*
    console.log("revisarrrr logout aquiiiii");
    console.log(this.array_usu);
    console.log(this.array_usu.area);
    console.log(this.array_usu.permiso_80);
    */

    if (this.array_usu.permiso_80 != '80' && this.array_usu.area == 'PRODUCCION') {
      
      const modal = await this.modalController.create({
        component: ModalHorometroFinPage,
      });

      modal.onDidDismiss().then((data) => {
        const horometroFinal = data.data; // Recoge el dato del modal
        if (horometroFinal) {
          console.log('Horómetro Final guardado:', horometroFinal);
          // Continuar con el proceso de logout después de guardar
          this.logincustomService.logout();
        }
      });
      
      return await modal.present();
    } else {
      this.logincustomService.logout();
    }
  }


  goto_list_resumen() {
    this.router.navigate(['resumendiario']);///,this.valor
  }

  goto_menu(nombre_menu: string, params: string, titulo: string): void {
    //this.navCtrl.push(ProdlistvalespendComponent);
    let _params;

    console.log("revisar aqui");
    console.log(nombre_menu); // prod-list-acti-programada
    console.log(params); // 5
    console.log(titulo); // TC1
    console.log("--------------------------------------");

    //let params_http = new HttpParams()
    let params_http = [];
    console.log(params);

    if (!params) {
      //params_http.append('0','0');
      params_http.push(titulo);
    } else {
      params_http = params.split(",");
      params_http.push(titulo);
      /*
         array_value = params.split(",");
            let array_value1;
       array_value.forEach(item => {
         array_value1 = item.split(":");
            //params_http = params_http.append(array_value1[0], array_value1[1]);
            //params_http.push(array_value1[0], array_value1[1]);
            params_http.push(array_value1[1]);
            //params_http.push(item);
       });*/
      //params_http = JSON.stringify(params_http);
    }
    /*
    param1:val1,param2:val2
    */
    console.log(nombre_menu);
    console.log('_params', params_http);
    //  params_http = JSON.parse(JSON.stringify(params));
    //let checkViews = this.router.getCurrentNavigation().id
    //console.log(checkViews);
    if (nombre_menu == 'prod-list-acti-programada') {
      //this.prodlistActiProgramada.TituloDinamico=titulo;
      //console.log('condiion menu',this.prodlistActiProgramada.TituloDinamico);
      this.router.navigate(['home']);
      setTimeout(() => {
        this.router.navigate([nombre_menu], { queryParams: params_http, queryParamsHandling: 'merge' });
      }, 1);
    }
    else {
      this.router.navigate([nombre_menu], { queryParams: params_http, queryParamsHandling: 'merge' });
    }
    // if(checkViews.component == News){
    //    console.log('News is already in the Navstack, don't push!);
    // }else{
    // console.log('No Newspage open you can push!');
    // }

    //   this.router.navigate([nombre_menu],{ queryParams: params_http  ,queryParamsHandling:'merge'}).then((res)=>{
    //  console.log('then navigate');
    //  console.log(res);

    //  if (nombre_menu=='prod-list-acti-programada') {
    //   this.prodlistActiProgramada.TituloDinamico=titulo;
    //  // this.prodlistActiProgramada.ngOnInit();
    //   console.log('condiion menu',this.prodlistActiProgramada.TituloDinamico);
    // }

    //   }).finally(()=>{

    //     this.prodlistActiProgramada.TituloDinamico=titulo;
    //   //this.prodlistActiProgramada.ngOnInit();
    //   //this.prodlistActiProgramada.ionViewWillEnter();

    //   console.log('finally menu',this.prodlistActiProgramada.TituloDinamico);
    //   //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    //   });///,this.valor

    //this.router.navigate([nombre_menu],{params_http);///,this.valor

    // this.router.events.subscribe((ev) => {
    //   if (ev instanceof NavigationEnd) {
    //     console.log('ev',ev);
    //     this.prodlistActiProgramada.TituloDinamico=titulo;
    //     /* Your code goes here on every router change */
    //     /* this function calls on navigate forward or back from another page */
    //   }
    // });

  }

}
