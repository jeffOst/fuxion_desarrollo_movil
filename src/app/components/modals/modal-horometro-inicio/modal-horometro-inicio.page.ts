import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonicModule, NavParams, AlertController, NavController, IonInput, Platform, LoadingController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { MPieza } from "src/app/interfaces/prod/Pieza";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-modal-horometro-inicio',
  templateUrl: './modal-horometro-inicio.page.html',
  styleUrls: ['./modal-horometro-inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalHorometroInicioPage implements OnInit {

  ArrayItemsSelectedDesti: MPieza[] = [];

  CssMaquina: string;
  maquinas: any[] = [];  // Aquí se almacenarán las maquinas de la base de datos
  rest_maquina: any;

  CssTurno: string;
  turnos: any[] = [];  // Aquí se almacenarán los turnos de la base de datos
  rest_turno: any;

  nombreMaquina: string = '';

  // Datos del formulario
  formData = {
    turno: '',
    maquina: '',
    horometroInicial: '',
    nombreMaquina: '',
  };

  constructor(
    private router: Router,
    private navParams: NavParams,
    private modalController: ModalController,
    private alertController: AlertController,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService
  ) { }

  ngOnInit() {

    this.load_cbos();

  }


  load_cbos() {
    this.loadingController.create({
      message: 'Cargando motivos de pausa...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.load_cbos_pieza_material_maquina('0', '0', '0').then((res) => {
        this.maquinas = res['maquinas']; // Asigna los datos a maquinas
        this.turnos = res['turno']; // Asigna los datos a turnos
      }).finally(() => {
        loading.dismiss();
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onSubmit() {
    // Lógica para manejar los datos del formulario
    console.log('Datos del formulario:', this.formData);
    this.dismiss(); // Cierra el modal después de guardar

    console.log("verificar maquina")
    console.log(this.formData.maquina);
    console.log(this.nombreMaquina);

    //this.navCtrl.navigateForward('prod-list-acti-programada');
    this.goto_menu('prod-list-acti-programada', this.formData.maquina.toString(), this.nombreMaquina);

  }


  goto_menu(nombre_menu: string, params: string, titulo: string): void {
    //this.navCtrl.push(ProdlistvalespendComponent);
    let _params;

    console.log("revisar aqui");
    console.log(nombre_menu); // prod-list-acti-programada
    console.log(params); // 5
    console.log(titulo); // TC1
    console.log("--------------------------------------");


    let params_http = [];
    console.log(params);

    if (!params) {
      params_http.push(titulo);
    } else {
      params_http = params.split(",");
      params_http.push(titulo);
    }

    console.log(nombre_menu);
    console.log('_params', params_http);

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


  onMaquinaChange(event) {
    const selectedMaquina = this.maquinas.find(motivo => motivo.codigo === event.detail.value);
  
    if (selectedMaquina) {
      // Si el código es distinto a 15 (OTROS), se inserta el nombre en el textarea
      if (selectedMaquina.codigo !== 15) {
        this.nombreMaquina = selectedMaquina.nombre;
      } else {
        this.nombreMaquina = ''; // Limpia el campo si es 'OTROS'
      }
    }
  }




}
