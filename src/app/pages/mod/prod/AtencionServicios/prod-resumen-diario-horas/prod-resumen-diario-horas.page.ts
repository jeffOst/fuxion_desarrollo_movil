import { Component, Injectable, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchType, ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { IonInput, NavController, MenuController, IonList, Platform, AlertController, LoadingController, IonItemSliding, ActionSheetController, IonButton, IonIcon } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from "@ionic/storage";
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";

@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-prod-resumen-diario-horas',
  templateUrl: './prod-resumen-diario-horas.page.html',
  styleUrls: ['./prod-resumen-diario-horas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})

export class ProdResumenDiarioHorasPage implements OnInit {
  @ViewChild('idinputsearch_resumen') idinputsearch_resumen: IonInput;
  results_lista_resumen_cab: any;
  results_lista_ot: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";
  IdUsuarioLocal: string;
  NombresUsuarioLocal: string;
  alertSiNo: any;
  porcentaje: any;
  horas_asignadas: any;
  equipo_asignado: any;
  total_horas: string;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private prodGestionServicioService: ProdGestionServicioService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private changeRef: ChangeDetectorRef,
  ) {
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.IdUsuarioLocal = localStorage.user_id;
      this.NombresUsuarioLocal = localStorage.user_name;
    });

  }

  ionViewDidEnter() {
    console.log("volver a ver");
    console.log(this.globalVal.global_user_id);
    this.lista_equipos_resumen()
    console.log("entro a este evento ngOnInit");
  }

  ngOnInit() {

  }

  /*
   ngOnInit() {
 
     console.log("volver a ver");
     console.log(this.globalVal.global_user_id);
     this.lista_equipos_resumen()
     console.log("entro a este evento ngOnInit");
 
   }
   */

  /*
    mostrarConfirmacion(row: any) {
      
      row.flagResumenDiario = 1;
      
      let navigationExtras: NavigationExtras = {
        state: row
      };
      this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
  
    }
  */


  async mostrarConfirmacion(row: any) {

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea clonar el registro seleccionado?',
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {


            let navigationExtras: NavigationExtras = {
              state: row,
            };

            row.flagResumenDiario = "1";

            this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);

          },
        },
      ],
    });

    await alert.present();
  }


  /*
  async mostrarConfirmacion(item_equipo: any) {

    console.log("verificar avatar ahora")
    console.log(item_equipo.avatar);

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea clonar el registro seleccionado?',
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Si el usuario acepta, llama a tu función principal
            //this.navCtrl.navigateForward('addserviciostodet');
            this.FNuevaActvividadClonar(item_equipo);

          },
        },
      ],
    });

    await alert.present();
  }


  FNuevaActvividadClonar(row: any) {
    //let row:any;
    row = {} as MPieza;
    //row.maquina=this.TituloDinamico;
    row.CONCOMPONENTE = 1;
    row.flagResumenDiario = 1;
    row.nomAvatar = row.avatar;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);

    console.log("ver aquiiii tambien");
    console.log(row.nomAvatar);
  }
  */

  FNuevaActvividad() {
    let row: any;
    row = {} as MPieza;
    //row.maquina=this.TituloDinamico;
    row.CONCOMPONENTE = "1";
    row.flagResumenDiario = "1";
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['addserviciostodet'], navigationExtras);
  }

  FSelectedItem(row: any) {
    console.log(row);
    //let row1:any;
    //row1[0]=row;

    //row.maquina=this.TituloDinamico;
    row.flag = 1;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    console.log(navigationExtras);

    this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

  }

  lista_equipos_resumen() {
    console.log("entro a lista_equipos_resumen()");
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {

        loading.present();


        this.prodGestionServicioService.listado_principal_cabecera(this.search_term_equipo, this.switchButtonSegmento, '30', 'H', this.globalVal.global_user_id).then((res) => {
          this.results_lista_resumen_cab = res;
          this.horas_asignadas = this.results_lista_resumen_cab[0]['horas_labor_cab'] + ' hrs.'
          this.equipo_asignado = this.results_lista_resumen_cab[0]['equipo_asignado']
        }).finally(() => {
          console.log("ok");
        });


        this.prodGestionServicioService.listado_principal_resumen_horas(this.search_term_equipo, this.switchButtonSegmento, '27', 'H', this.globalVal.global_user_id).then((res) => {

          this.results_lista_ot = res;
          this.porcentaje = this.results_lista_ot[0]['productividad']
          this.total_horas = this.results_lista_ot[0]['total_horas'] + ' hrs.'
          //this.horas_asignadas = this.results_lista_ot[0]['horas_labor_cab']

        }).finally(() => {

          if (typeof this.horas_asignadas === 'undefined') {
            this.horas_asignadas = 'Sin Asignar.';
            this.equipo_asignado = 'Sin Asignar.';
          } 
          
          this.loadingController.dismiss();

        });

      });
  }


  /*
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
  */


}
