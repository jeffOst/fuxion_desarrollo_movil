import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController, NavParams, AlertController, NavController, IonInput, Platform, LoadingController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { MPieza } from "src/app/interfaces/prod/Pieza";

@Component({
  selector: 'app-motivo-pausa',
  templateUrl: './motivo-pausa.page.html',
  styleUrls: ['./motivo-pausa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MotivoPausaPage implements OnInit {

  observaciones: string = '';
  valorModal: number;
  CssMotiParada: string;
  motivosPausa: any[] = [];  // Aquí se almacenarán los motivos de la base de datos
  rest_moti_parada: any;
  ArrayItemsSelectedDesti: MPieza[] = [];
  mostrarTextoObservaciones: boolean = false; // Variable para mostrar/ocultar el campo

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
    this.load_cbos_motivo_pausa();
  }

  ionViewDidEnter() {
    // Si necesitas volver a cargar los datos al entrar a la vista
    //this.load_cbos_motivo_pausa();
  }

  load_cbos_motivo_pausa() {
    this.loadingController.create({
      message: 'Cargando motivos de pausa...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.load_cbos_motivo_pausa_maquina().then((res) => {
        this.motivosPausa = res['motivo_parada']; // Asigna los datos a motivosPausa
      }).finally(() => {
        loading.dismiss();
      });
    });
  }
  /*
    // Método que se ejecuta cuando el valor del select cambia
    onMotivoChange(event) {
      const selectedValue = event.detail.value;
    
      this.mostrarTextoObservaciones = selectedValue === 15; // Mostrar si el valor es 15 (OTROS)
    }
      */

    onMotivoChange(event) {
      const selectedMotivo = this.motivosPausa.find(motivo => motivo.codigo === event.detail.value);
    
      if (selectedMotivo) {
        // Si el código es distinto a 15 (OTROS), se inserta el nombre en el textarea
        if (selectedMotivo.codigo !== 15) {
          this.observaciones = selectedMotivo.nombre;
          this.mostrarTextoObservaciones = false; // Oculta el campo si no es 'OTROS'
        } else {
          this.observaciones = ''; // Limpia el campo si es 'OTROS'
          this.mostrarTextoObservaciones = true; // Muestra el campo si es 'OTROS'
        }
      }
    }
    




  async guardar() {
    if (!this.observaciones || this.observaciones.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El campo de observaciones no puede estar vacío.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.modalController.dismiss({
      'observaciones': this.observaciones,
      'flag_guardar': 1
    });
  }
}
