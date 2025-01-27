import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
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
  tituloModal: string = '';
  flag_edit_pausa: number = 0;
  fechafin_pausa: string;
  fechainicio_pausa: string;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  user_permiso_80: number = 0;

  constructor(
    public storage: Storage,
    private navParams: NavParams,
    private modalController: ModalController,
    private alertController: AlertController,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService
  ) {

    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.user_permiso_80 = localStorage.permiso_80;
    });

    this.valorModal = this.navParams.get('valorModal');
    
    //this.fechainicio_pausa = '2025-01-27T13:05:00Z'; // Formato ISO
    //this.fechafin_pausa = '2025-01-30T16:11:00Z'; // Formato ISO
    
    this.fechainicio_pausa = this.navParams.get('fecha_ini_formato_iso'); // Formato ISO
    this.fechafin_pausa = this.navParams.get('fecha_fin_formato_iso'); // Formato ISO

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
      'fechafin_pausa': this.fechafin_pausa,
      'fechainicio_pausa': this.fechainicio_pausa,
      'flag_guardar': 1
    });
  }
}
