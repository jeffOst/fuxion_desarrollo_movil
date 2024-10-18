import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonicModule, NavParams, AlertController, NavController, IonInput, Platform, LoadingController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { MPieza } from "src/app/interfaces/prod/Pieza";
import { NavigationEnd, Router } from '@angular/router';
import { LogincustomService } from "../../../api/logincustom.service";
import { Storage } from "@ionic/storage";
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";

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
    private logincustomService: LogincustomService,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService,
    private storage: Storage,
    public globalVal: GlovalProvider,
  ) {

    let localStorage: any;
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {

      localStorage = (result1);
      this.NomUsuario = localStorage.user_name;
      this.globalVal.global_user_id = localStorage.user_id;

      console.log("verificar localstorage");
      console.log(localStorage);
      console.log("--------------------------------");

    });

  }

  NomUsuario: String;

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

    //REGISTRA EL HOROMETRO DE INICIO
    this.FSaveHorometro(this.globalVal.global_user_id, this.formData.maquina.toString(), this.formData.turno.toString(), this.formData.horometroInicial.toString());

    //REDIRECCIONA AL LA VENTANA DE LA MAQUINA SELECCIONADA
    this.goto_menu('prod-list-acti-programada', this.formData.maquina.toString(), this.nombreMaquina);

    //REFRESCAR EL MENU MOSTRANDO SOLO LA MAQUINA SELECCIONADA
    this.refrescar_menu_produccion(this.globalVal.global_user_id, this.formData.maquina.toString());

  }

  refrescar_menu_produccion(iduser: string, idmaquina: string) {

    //Volver a cargar el menu de acuerdo al usuario y maquina seleccionada.
    this.loadingController.create({
      message: 'Por favor espere...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.logincustomService.refrescar_prod_load_menuxusuario(iduser, idmaquina).then((res) => {
        //success
      }).finally(() => {
        loading.dismiss();
      });
    });

    //Asignar nuevos valores a la variable session global

    let localStorage: any;
    //this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {

      localStorage = result1 || {}; // Si USER_INFO está vacío, inicializamos un objeto vacío.

      // Agregar o modificar valores en USER_INFO
      localStorage.codigo_turno = this.formData.turno.toString();
      localStorage.codigo_maquina = this.formData.maquina.toString();
      localStorage.numHorometroIni = this.formData.horometroInicial.toString();

      // Guardar los cambios nuevamente en el storage
      this.storage.set('USER_INFO', localStorage);

    });

  }


  FSaveHorometro(iduser: string, idmaquina: string, turno: string, horometroInicial: string) {

    const loading = this.loadingController.create({
      message: 'Registrando Horometro...',
      translucent: true
    }).then(
      loading => {
        loading.present();

        this.ApiServices.SaveHorometroInicio(iduser, idmaquina, turno, horometroInicial).then((res) => {

          let rest: any;
          rest = res[0];

          console.log(rest);
          console.log(rest.o_nres);

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
