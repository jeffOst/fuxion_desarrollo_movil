import { CommonModule, NgIf } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";
import { HeaderComponent } from "../components/header/header.component";
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";
import { ModalHorometroInicioPage } from '../components/modals/modal-horometro-inicio/modal-horometro-inicio.page'; // Importa tu modal
import { LogincustomService } from "src/app/api/logincustom.service";

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
    private router: Router,
    public navCtrl: NavController,
    private menuCrl: MenuController,
    private storage: Storage,
    public globalVal: GlovalProvider,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService,
    private logincustomService: LogincustomService,
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

  logout() { }

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

  
  goto_menu(nombre_menu: string, params: string, titulo: string): void {
    console.log("entra goto_menu");
    //this.navCtrl.push(ProdlistvalespendComponent);
    let _params;

    let params_http = [];
    console.log(params);

    if (!params) {
      params_http.push(titulo);
    } else {
      params_http = params.split(",");
      params_http.push(titulo);
    }

    if (nombre_menu == 'prod-list-acti-programada') {
      this.router.navigate(['home']);
      setTimeout(() => {
        this.router.navigate([nombre_menu], { queryParams: params_http, queryParamsHandling: 'merge' });
      }, 1);
    }
    else {
      this.router.navigate([nombre_menu], { queryParams: params_http, queryParamsHandling: 'merge' });
    }

  }

  refrescar_menu_produccion(iduser: string, idmaquina: string) {

    //Volver a cargar el menu de acuerdo al usuario y maquina seleccionada.
    this.loadingController.create({
      message: 'Por favor espere...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.logincustomService.refrescar_prod_load_menuxusuario(iduser, idmaquina).then((res) => {
        //success
      }).finally(() => {
        loading.dismiss();
      });
    });

  }

  ngOnInit() {
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;


      if (localStorage.area == 'PRODUCCION') {

        this.loadingController.create({
          message: 'Por favor espere...',
          translucent: true
        }).then(loading => {
          loading.present();
          this.ApiServices.verificar_existe_horometroInicioxUsuario(this.globalVal.global_user_id).then((res) => {
            
            let rest: any;
            rest = res[0];

              console.log("jeffrey ahora verificar aquiii");
              console.log(rest);
              console.log(rest.codigo_hxu);
              console.log(rest.codmaquina_hxu);


              if (rest.codigo_hxu.toString() == '0') {
                console.log("entra aqui");
                this.hideCardTA = true;
                this.FListarActvidades();
                this.openModal(); // Abre el modal cuando la condición se cumple
              } else {
                
                console.log("entra aqui 22");
                //REDIRECCIONA AL LA VENTANA DE LA MAQUINA SELECCIONADA
                this.goto_menu('prod-list-acti-programada', rest.codmaquina_hxu.toString(), rest.nombre_maquina.toString());

                //REFRESCAR EL MENU MOSTRANDO SOLO LA MAQUINA SELECCIONADA
                this.refrescar_menu_produccion(this.globalVal.global_user_id, rest.codmaquina_hxu.toString());
                
              }

          }).finally(() => {
            loading.dismiss();
          });
        });

      
      }

      if (this.NombresUsuarioLocal == '') {
        this.navCtrl.navigateForward('login');
      }
    }).catch(err => {
      console.log('errrr', err);
    })
  }




}
