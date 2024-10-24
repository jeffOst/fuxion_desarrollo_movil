import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonicModule, LoadingController, AlertController } from '@ionic/angular';

//import { ModalController, IonicModule, NavParams, AlertController, NavController, IonInput, Platform, LoadingController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { MPieza } from "src/app/interfaces/prod/Pieza";
import { NavigationEnd, Router } from '@angular/router';
import { LogincustomService } from "../../../api/logincustom.service";
import { Storage } from "@ionic/storage";
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";


@Component({
  selector: 'app-modal-horometro-fin',
  templateUrl: './modal-horometro-fin.page.html',
  styleUrls: ['./modal-horometro-fin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalHorometroFinPage implements OnInit {

  horometroFinal: string;


  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    //private navParams: NavParams,
    private modalController: ModalController,
    private alertController: AlertController,
    private logincustomService: LogincustomService,
    //public navCtrl: NavController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService,
    private storage: Storage,
    public globalVal: GlovalProvider,
  ) {

    let localStorage: any;
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {

      localStorage = (result1);
      this.globalVal.global_user_id = localStorage.user_id;
    });

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  async submitForm() {
    // Guardar el valor ingresado y cerrar el modal
    console.log('Horómetro Final:', this.horometroFinal.toString());

    // Lógica para manejar los datos del formulario
    //console.log('Datos del formulario:', this.formData);
    /*if (this.horometroFinal.toString() == '00:00') {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El valor del Horometro a ingresar no puede ser 0',
        buttons: ['OK']
      });
      await alert.present();
      return;

    }*/
    if (this.horometroFinal.toString() == '') {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La cantidad a ingresar no puede ser igual a vacio.',
        buttons: ['OK']
      });
      await alert.present();
      return;

    }
    else {

      //REGISTRA EL HOROMETRO DE INICIO
      this.FSaveHorometro(this.globalVal.global_user_id, this.horometroFinal.toString());
      this.modalCtrl.dismiss(this.horometroFinal);

    }

  }

  FSaveHorometro(iduser: string, horometroFinal: string) {


    const loading = this.loadingController.create({
      message: 'Registrando Horometro...',
      translucent: true
    }).then(
      loading => {
        loading.present();

        this.ApiServices.SaveHorometroFin(iduser, horometroFinal).then((res) => {

          let rest: any;
          rest = res[0];

          if (rest.o_nres == 0) {
            alert('Error, no se pudo guardar correctamente.');
          } else {
            this.loadingController.dismiss();
          }

        }).finally(() => {
          console.log('finalyyyy');
        });

      });

  }

}