import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el formulario

@Component({
  selector: 'app-logout-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Confirmar Logout</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-padding">
        <form (ngSubmit)="submitForm()">
          <ion-item>
            <ion-label position="floating">Horómetro Final</ion-label>
            <ion-input type="text" [(ngModel)]="horometroFinal" name="horometroFinal"></ion-input>
          </ion-item>

          <ion-button expand="block" type="submit">Guardar</ion-button>
        </form>
      </div>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, FormsModule] // Asegúrate de importar FormsModule
})
export class LogoutModalComponent {
  horometroFinal: string;

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submitForm() {
    // Guardar el valor ingresado y cerrar el modal
    console.log('Horómetro Final:', this.horometroFinal);
    this.modalCtrl.dismiss(this.horometroFinal);
  }
}
