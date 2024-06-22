import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-motivo-pausa',
  templateUrl: './motivo-pausa.page.html',
  styleUrls: ['./motivo-pausa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MotivoPausaPage implements OnInit {

  observaciones: string = '';
  valorModal: number; // Variable para recibir el valor

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private alertController: AlertController
  ) {

    this.valorModal = this.navParams.get('valorModal'); // Recibe el valor
  }

  dismiss() {

    this.modalController.dismiss({
      'observaciones': '',
      'flag_guardar': 0
    });

  }

  ngOnInit() {

  }

  async guardar() {
    if (!this.observaciones || this.observaciones.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El campo de observaciones no puede estar vacío.',
        buttons: ['OK']
      });
      await alert.present();
      return; // Detiene la ejecución si el campo está vacío
    }

    //console.log("SE PRESIONÓ EN EL BOTÓN GUARDAR");
    //console.log("Observaciones ingresadas:", this.observaciones);
    this.modalController.dismiss({
      'observaciones': this.observaciones,
      'flag_guardar': 1
    });

    //console.log("Valor recibido desde la página principal:", this.valorModal); // Muestra el valor en la consola
  }


}
