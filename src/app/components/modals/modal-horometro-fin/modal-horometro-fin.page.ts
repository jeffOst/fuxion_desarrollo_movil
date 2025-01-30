import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonicModule, LoadingController, AlertController, NavParams } from '@ionic/angular';

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
    private navParams: NavParams,
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
    this.horometroFinal = this.navParams.get('horometroFinAnterior');

  }

  async submitForm() {
    // Guardar el valor ingresado y cerrar el modal
    //console.log('Horómetro Final:', this.horometroFinal.toString());
    //console.log(this.globalVal.global_horometro_fin_anterior);

    // Obtener solo los primeros 4 dígitos (las horas)
    const horasGuardado = this.globalVal.global_horometro_fin_anterior.substring(0, 4);
    //console.log('Horas (primeros 4 dígitos):', horasGuardado);

    // Obtener solo los primeros 4 dígitos (las horas)
    const horasingresar = this.horometroFinal.toString().substring(0, 4);
    //console.log('Horas (primeros 4 dígitos):', horasingresar);


    if (horasingresar <= horasGuardado) {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El valor del Horometro a ingresar debe ser mayor al horometro de Inicio.',
        buttons: ['OK']
      });
      await alert.present();
      return;

    }

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

  clearHorometroFinal() {
    console.log('Botón limpiar presionado'); // Verifica si se llama la función
    this.horometroFinal = ''; // Limpia el valor del campo
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


  formatTime(event: any) {
    let value = event.target.value;

    // Elimina caracteres no numéricos
    value = value.replace(/[^0-9]/g, '');

    // Asegura que el valor no exceda los 8 caracteres
    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    // Formatea el valor de acuerdo con hh:mm:ss
    if (value.length >= 5) {
      value = value.slice(0, 4) + ':' + value.slice(4, 6) + (value.length > 6 ? ':' + value.slice(6, 8) : '');
    } else if (value.length >= 4) {
      value = value.slice(0, 4) + ':' + value.slice(4);
    }

    // Actualiza el campo de entrada y el modelo de datos
    event.target.value = value;
    this.horometroFinal = value;
  }


}