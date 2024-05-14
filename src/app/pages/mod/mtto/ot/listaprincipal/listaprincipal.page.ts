import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";
import { NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-listaprincipal',
  templateUrl: './listaprincipal.page.html',
  styleUrls: ['./listaprincipal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})

export class ListaprincipalPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;
  results_lista_ot: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";
  IdUsuarioLocal: string;
  NombresUsuarioLocal: string;
  alertSiNo: any;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private mttoOrdentrabajoService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
  ) {
let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });

  }

  ngOnInit() {
    this.lista_equipos()
  }

  lista_equipos() {

    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.mttoOrdentrabajoService.listado_principal_ot(this.search_term_equipo, this.switchButtonSegmento, '1', 'H').then((res) => {
          this.results_lista_ot = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            //this.idinputsearch_equipo.setFocus();
          }, 600)
        });
      });
  }

  CrearSolse(idot: string, nroot: string, codequipo: string, fcreaot: string) {
    console.log(':::::OJO:::', idot, nroot);

    let navigationExtras: NavigationExtras = {
      state: {
        idot: idot,
        nroot: nroot,
        codequipo: codequipo,
        fcreaot: fcreaot
      }
    };
    console.log(navigationExtras);

    this.navCtrl.navigateForward(['/winprincipal'], navigationExtras);
  }

  FEntregaEje() {
  }

  FGenerarOtNoProgramado() {

    this.alertSiNo = this.alertController.create({
      header: 'Agregar Servicios',
      subHeader: '',
      mode: "ios",
      backdropDismiss: true,
      cssClass: 'alertHeader',
      message: '¿Esta seguro de Generar una O.T. no programada?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'alertButton',
          role: 'A',
          handler: () => {
            this.navCtrl.navigateForward(['mtto-ot-genera-no-programa']);
          }
        },
        {
          text: 'Cancelar',
          //cssClass: 'alert-button-group',
          role: 'F',
          handler: () => {

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

}

