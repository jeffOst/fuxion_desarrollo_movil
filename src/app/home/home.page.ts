 import { CommonModule, NgIf  } from '@angular/common';
 import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
//   standalone: true,
//   imports: [IonicModule],
// })
// export class HomePage {
//   constructor() {}
// }

import { Component } from '@angular/core';
//import { LaravelPassportService } from 'laravel-passport';
import { NavController, MenuController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";
//import { LoginPage } from "../login/login.page";
import{ HeaderComponent } from "../components/header/header.component";
import { Storage } from "@ionic/storage";
@Component({
    selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,HeaderComponent,CommonModule,NgIf],
})
export class HomePage {
  NombresUsuarioLocal: string;
  hideCardTA:boolean=false;
  constructor(
    //private laravelP:LaravelPassportService,
    public navCtrl:NavController,
    private menuCrl:MenuController,
    private storage: Storage,
    public globalVal: GlovalProvider
    //public menuComponent:MenuComponent
    ) {    
      let localStorage: any;
      this.storage.create();
      this.storage.get('USER_INFO').then((result1) => {
        localStorage = (result1);
        this.NomUsuario=localStorage.user_name;
        this.globalVal.global_user_id = localStorage.user_id;
        console.log('this.device.uuid');
        console.log("aqui 222" + this.globalVal.global_user_id);
      });

      

  }
  NomUsuario:String;
  logout(){
    //this.laravelP.logout();
    //this.navCtrl.navigateRoot('/login');
  }
  

  FListarActvidades(){
    
    let navigationExtras: NavigationExtras = {
      state: {idmenu:0,menu:'TABLA ACTIVIDADES'}
    };
    this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'],navigationExtras);

  }
  ngOnInit() {
/////////////////valida logeado

    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      console.log('localStorage_user', localStorage);
      this.NombresUsuarioLocal = localStorage.user_name;
      console.log('ngoninit', this.NombresUsuarioLocal);


      if (localStorage.area=='PRODUCCION') {
        this.hideCardTA=true;
        this.FListarActvidades();
      }

      if (this.NombresUsuarioLocal == '') {
        this.navCtrl.navigateForward('login');
      }
    }).catch(err => {
      console.log('errrr', err);
    })

  }


}

