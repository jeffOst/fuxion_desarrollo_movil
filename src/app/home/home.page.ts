import { CommonModule, NgIf } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";
import { HeaderComponent } from "../components/header/header.component";
import { Storage } from "@ionic/storage";
//import { HelloWorldModalComponent } from '../components/modals/hello-world-modal.component'; // Importa tu modal
import { ModalHorometroInicioPage } from '../components/modals/modal-horometro-inicio/modal-horometro-inicio.page'; // Importa tu modal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, CommonModule, NgIf],
})
export class HomePage {
  NombresUsuarioLocal: string;
  hideCardTA: boolean = false;

  constructor(
    public navCtrl: NavController,
    private menuCrl: MenuController,
    private storage: Storage,
    public globalVal: GlovalProvider,
    private modalCtrl: ModalController // Agrega ModalController
  ) {    
    let localStorage: any;
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NomUsuario = localStorage.user_name;
      this.globalVal.global_user_id = localStorage.user_id;
    });
  }

  NomUsuario: String;

  logout() {}

  FListarActvidades() {
    let navigationExtras: NavigationExtras = {
      state: { idmenu: 0, menu: 'TABLA ACTIVIDADES' }
    };
    this.navCtrl.navigateForward(['prod-ate-serv-list-actividades'], navigationExtras);
  }

  async openModal() { // Método para abrir el modal
    const modal = await this.modalCtrl.create({
      //component: HelloWorldModalComponent
      component: ModalHorometroInicioPage
    });
    return await modal.present();
  }

  ngOnInit() {
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;

      if (localStorage.area == 'PRODUCCION') {
        this.hideCardTA = true;
        this.FListarActvidades();
        this.openModal(); // Abre el modal cuando la condición se cumple
      }

      if (this.NombresUsuarioLocal == '') {
        this.navCtrl.navigateForward('login');
      }
    }).catch(err => {
      console.log('errrr', err);
    })
  }
}
