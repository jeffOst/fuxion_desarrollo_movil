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
    horometroInicial: '0000:00:00',
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
    });

  }

  NomUsuario: String;

  ngOnInit() {
    this.load_cbos();
    this.obtenerIdCodMaquinaDet();
  }

  load_cbos() {
    this.loadingController.create({
      message: 'Cargando motivos de pausa...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.load_cbos_pieza_material_maquina('0', this.globalVal.global_user_id, '0').then((res) => {
        this.maquinas = res['maquinas']; // Asigna los datos a maquinas
        this.turnos = res['turno']; // Asigna los datos a turnos
        /*
        console.log("erifcaaaa aquiii jeffrey"); 
        console.log(res['valores_usuario_maquina']);
        console.log(res['valores_usuario_maquina'][1].id_cod_maquina_det);
        */
        
      }).finally(() => {
        loading.dismiss();
      });
    });
  }
 

  obtenerIdCodMaquinaDet() {
    this.ApiServices.load_idCodMaquinaDet(this.globalVal.global_user_id).then((res) => {
      if (res) {
        console.log("idmaquina:", res.id_cod_maquina_det);
        console.log("idturno:", res.id_actividad_cab);
        console.log("nombre_maquina:", res.nombre_maquina);

        this.formData.maquina = res.id_cod_maquina_det;
        this.formData.turno = res.id_actividad_cab;
        this.formData.nombreMaquina = res.nombre_maquina;
        this.nombreMaquina = res.nombre_maquina;
        
      } else {
        console.log("No se encontraron resultados");
      }
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async onSubmit() {

    if (this.formData.turno.toString() == null || this.formData.turno.toString() == '') {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Falta agregar el Turno que pertenece.',
        buttons: ['OK']
      });
      await alert.present();
      return;

    }
    else if (this.formData.maquina.toString() == null || this.formData.maquina.toString() == '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Falta agregar la maquina que pertenece.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else {

      const maquinasValidas = ['2', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '19'];

      if (maquinasValidas.includes(this.formData.maquina.toString())) {

        // Lógica para manejar los datos del formulario
        //console.log('Datos del formulario:', this.formData);
        if (this.formData.horometroInicial.toString() == '00:00') {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'El valor del Horometro a ingresar no puede ser 0',
            buttons: ['OK']
          });
          await alert.present();
          return;
        }
        else if (this.formData.horometroInicial.toString() == '') {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'La cantidad a ingresar no puede ser igual a vacio.',
            buttons: ['OK']
          });
          await alert.present();
          return;
        }
        else {

          //console.log("verifca aquiiii la maquinaaaa");
          //console.log(this.formData.maquina.toString());
          //console.log(this.nombreMaquina);
          
          //REGISTRA EL HOROMETRO DE INICIO
          this.FSaveHorometro(this.globalVal.global_user_id, this.formData.maquina.toString(), this.formData.turno.toString(), this.formData.horometroInicial.toString());
          //REDIRECCIONA AL LA VENTANA DE LA MAQUINA SELECCIONADA
          this.goto_menu('prod-list-acti-programada', this.formData.maquina.toString(), this.nombreMaquina);
          //REFRESCAR EL MENU MOSTRANDO SOLO LA MAQUINA SELECCIONADA
          this.refrescar_menu_produccion(this.globalVal.global_user_id, this.formData.maquina.toString());
          this.dismiss(); // Cierra el modal después de guardar

        }

      } else {

        //REGISTRA EL HOROMETRO DE INICIO
        this.FSaveHorometro(this.globalVal.global_user_id, this.formData.maquina.toString(), this.formData.turno.toString(), this.formData.horometroInicial.toString());
        //REDIRECCIONA AL LA VENTANA DE LA MAQUINA SELECCIONADA
        this.goto_menu('prod-list-acti-programada', this.formData.maquina.toString(), this.nombreMaquina);
        //REFRESCAR EL MENU MOSTRANDO SOLO LA MAQUINA SELECCIONADA
        this.refrescar_menu_produccion(this.globalVal.global_user_id, this.formData.maquina.toString());
        this.dismiss(); // Cierra el modal después de guardar

      }

    }

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

      this.globalVal.global_user_maquina = this.formData.maquina.toString();

      // Guardar los cambios nuevamente en el storage
      this.storage.set('USER_INFO', localStorage);

    });

  }


  FSaveHorometro(iduser: string, idmaquina: string, turno: string, horometroInicial: string) {

    this.loadingController.create({
      message: 'Regsitrando Horometro...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.SaveHorometroInicio(iduser, idmaquina, turno, horometroInicial).then((res) => {

        let rest: any;
        rest = res[0];

        if (rest.o_nres == 0) {
          alert('Error, no se pudo guardar correctamente.');
        }

      }).finally(() => {
        loading.dismiss();
      });
    });


  }


  goto_menu(nombre_menu: string, params: string, titulo: string): void {
    //this.navCtrl.push(ProdlistvalespendComponent);
    let _params;
    /*
    console.log("revisar aqui");
    console.log(nombre_menu); // prod-list-acti-programada
    console.log(params); // 5
    console.log(titulo); // TC1
    console.log("--------------------------------------");
    */

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
  this.formData.horometroInicial = value;
}




}