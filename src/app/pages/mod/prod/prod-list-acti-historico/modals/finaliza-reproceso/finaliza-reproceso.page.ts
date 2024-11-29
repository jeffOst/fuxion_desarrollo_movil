import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController, NavParams, AlertController, NavController, IonInput, Platform, LoadingController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { MPieza } from "src/app/interfaces/prod/Pieza";


@Component({
  selector: 'app-finaliza-reproceso',
  templateUrl: './finaliza-reproceso.page.html',
  styleUrls: ['./finaliza-reproceso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinalizaReprocesoPage implements OnInit {

  descripcionProceso: string = '';
  valorModal: number;
  codMaquina: number = 0;
  CssMotiParada: string;
  flagReproceso: any = 0; // Valor por defecto
  listReproceso: any[] = [];  // Aquí se almacenarán los motivos de la base de datos
  listMaquina: any[] = [];
  rest_moti_parada: any;
  ArrayItemsSelectedDesti: MPieza[] = [];
  mostrarOpcionesReproceso: boolean = false; // Variable para mostrar/ocultar el campo

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private alertController: AlertController,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService
  ) {
    this.valorModal = this.navParams.get('valorModal');
  }

  dismiss() {
    this.modalController.dismiss({
      'observaciones': '',
      'flag_guardar': 0
    });
  }

  ngOnInit() {
    this.load_cbos_lista_reproceso();
  }

  ionViewDidEnter() {
  }

  load_cbos_lista_reproceso() {
    this.loadingController.create({
      message: 'Cargando motivos de pausa...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.load_cbos_list_reproceso().then((res) => {
        this.listReproceso = res['list_reproceso']; // Asigna los datos a listReproceso
        this.listMaquina = res['list_maquina'];
      }).finally(() => {
        loading.dismiss();
      });
    });
  }

  onReprocesoChange(event) {
    const selectedReproceso = this.listReproceso.find(reproceso => reproceso.codigo === event.detail.value);

    if (selectedReproceso) {
      // Si el código es distinto a 1 (SI), se inserta el nombre en el textarea
      if (selectedReproceso.codigo !== 1) {
        //this.observaciones = selectedReproceso.nombre;
        this.mostrarOpcionesReproceso = false; // Oculta el campo si no es 'OTROS'
      } else {
        //this.observaciones = ''; // Limpia el campo si es 'OTROS'
        this.mostrarOpcionesReproceso = true; // Muestra el campo si es 'OTROS'
      }
    }
  }


  async guardarFinalizacion() {

    if (this.flagReproceso === 1) {

      if (!this.codMaquina || this.codMaquina === 0) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El campo de Maquina no puede estar vacío.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }

      if (!this.descripcionProceso || this.descripcionProceso.trim() === '') {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El campo de procesos no puede estar vacío.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
    }

    this.modalController.dismiss({
      'flagReproceso': this.flagReproceso,
      'codMaquina': this.codMaquina,
      'descripcionRepro': this.descripcionProceso,
      'flag_guardar': 1
    });

    console.log("salio de finalizacion");

  }

}
