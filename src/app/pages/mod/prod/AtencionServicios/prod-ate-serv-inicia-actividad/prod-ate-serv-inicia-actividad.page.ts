import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Storage } from '@ionic/storage';
import { MotivoPausaPage } from 'src/app/pages/mod/prod/prod-list-acti-historico/modals/motivo-pausa/motivo-pausa.page';
import { FinalizaReprocesoPage } from 'src/app/pages/mod/prod/prod-list-acti-historico/modals/finaliza-reproceso/finaliza-reproceso.page';



@Component({
  selector: 'app-prod-ate-serv-inicia-actividad',
  templateUrl: './prod-ate-serv-inicia-actividad.page.html',
  styleUrls: ['./prod-ate-serv-inicia-actividad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PdfViewerModule]
})

export class ProdAteServIniciaActividadPage implements OnInit {
  DsIniciaActividad: any;
  navParams: any;
  flagResumenDiario: string;
  hideBtnModificaFecha: boolean;
  hideBtnInicio: boolean;
  hideBtnReanuda: boolean;
  hideNomEstado: boolean;
  idEstadoActividad: number;
  idTargetMenu: number;
  hideItemByTipoRep: boolean;
  hideItemByTipoSer: boolean;
  hideItemByTipoTal: boolean;
  hideItemByProceso: boolean;
  hideItemByMetalizado: boolean;
  hideItemByRevisionEje: boolean;
  idTipoActividad: number;
  flagUpdatedObsOK: boolean = true;
  obs_aux: any;
  rest_serv_eje: any;
  fechainicio_prod: string;
  fechafin_prod: string;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  CantItemsMotivoPausa: number = 0;
  DsGridMotivoPausa: any[] = []; // Inicializamos como un array vacío
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  currentDateTime: Date = new Date(); // Inicializa con la fecha y hora actual


  constructor(
    public navCtrl: NavController,
    private router: Router,
    public storage: Storage,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) {

    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });

    this.navParams = this.router.getCurrentNavigation().extras.state;

    this.flagResumenDiario = this.navParams.flag;

    console.log('this.navParams::>', this.navParams);
    this.flagUpdatedObsOK = true;
    if (this.navParams) {


      this.DsIniciaActividad = {} as MPieza;
      this.DsIniciaActividad.maquina = this.navParams.maquina;
      this.DsIniciaActividad.idmaquina = this.navParams.idmaquina;
      this.DsIniciaActividad.idofpterminado = this.navParams.idofpterminado;
      this.DsIniciaActividad.EQUIPOID = this.navParams.EQUIPOID;
      this.DsIniciaActividad.fasignado = this.navParams.fasignado;
      this.DsIniciaActividad.avatar = this.navParams.avatar;
      this.DsIniciaActividad.correorden = this.navParams.correorden;
      //this.DsIniciaActividad.Y04001 = this.navParams.Y04001;
      this.DsIniciaActividad.Y04002 = this.navParams.Y04002;
      this.DsIniciaActividad.cantidad = this.navParams.cantidad;
      this.DsIniciaActividad.idestado = this.navParams.idestado;
      //this.IdCboEstadoActual= this.navParams.idestado;
      this.DsIniciaActividad.nomclase = this.navParams.nomclase;
      this.DsIniciaActividad.codigo_qr = this.navParams.codigo_qr;
      this.DsIniciaActividad.codsmg = this.navParams.codsmg;
      this.DsIniciaActividad.idclase_pt = this.navParams.idclase;
      this.DsIniciaActividad.material = this.navParams.material;
      this.DsIniciaActividad.idmaterial = this.navParams.idmaterial;
      this.DsIniciaActividad.nombres_tecnico = this.navParams.nombres_tecnico;
      this.DsIniciaActividad.id_personal = this.navParams.id_personal;
      this.DsIniciaActividad.fecha_inicio = this.navParams.fecha_inicio;
      this.DsIniciaActividad.fecha_fin = this.navParams.fecha_fin
      this.DsIniciaActividad.pk_idservicio = this.navParams.pk_idservicio;
      this.DsIniciaActividad.actividad = this.navParams.actividad;
      this.idTipoActividad = parseInt(this.navParams.actividad);
      this.idEstadoActividad = parseInt(this.navParams.idestado);
      this.idTargetMenu = this.navParams.idTargetMenu;
      this.DsIniciaActividad.codigo_pt = this.navParams.codigo_pt;
      this.DsIniciaActividad.descripcion_pt = this.navParams.descripcion_pt
      this.DsIniciaActividad.nomsubfam = this.navParams.nomsubfam
      this.DsIniciaActividad.proceso = this.navParams.proceso
      this.DsIniciaActividad.observacion = this.navParams.observacion

      this.DsIniciaActividad.proceso_metalizado = this.navParams.proceso_metalizado;
      this.DsIniciaActividad.servicio_metalizado = this.navParams.servicio_metalizado;
      this.DsIniciaActividad.cnt_metalizado_obs = this.navParams.cnt_metalizado_obs;
      this.DsIniciaActividad.cnt_29012_peso_ini = this.navParams.cnt_29012_peso_ini;
      this.DsIniciaActividad.cnt_50000_peso_ini = this.navParams.cnt_50000_peso_ini;

      this.DsIniciaActividad.cnt_50000_peso_fin = this.navParams.cnt_50000_peso_fin;
      this.DsIniciaActividad.cnt_29012_peso_fin = this.navParams.cnt_29012_peso_fin;

      this.DsIniciaActividad.servi0000cio_eje = this.navParams.servicio_eje;
      this.DsIniciaActividad.idservicio_x_eje_otd = this.navParams.idservicio_x_eje_otd;

      this.DsIniciaActividad.flag_serv_eje_ms = this.navParams.flag_serv_eje_ms;

      this.DsIniciaActividad.plano_diseno = this.navParams.plano_diseno;

      //this.fechainicio_prod = '2024-02-29T14:00:00.000Z'; // Formato ISO
      //this.fechainicio_prod = '2024-02-29 15:11:54Z'; // Formato ISO
      this.fechainicio_prod = this.navParams.fecha_inicio_formato_iso; // Formato ISO
      this.fechafin_prod = this.navParams.fecha_fin_formato_iso; // Formato ISO

      //Si es un registro con una ruta
      if (this.navParams.codhru != 0) {
        this.DsIniciaActividad.cantidad_revisada = this.navParams.cnt_pieza_rev_hru;
        this.DsIniciaActividad.cantidad_total = this.navParams.cnt_pieza_pend_hru;
      } else {
        this.DsIniciaActividad.cantidad_revisada = this.navParams.cantidad_revisada;
        this.DsIniciaActividad.cantidad_total = this.navParams.cantidad_total;
      }

      console.log(this.navParams.cantidad_revisada);


      this.DsIniciaActividad.cantidad_pendiente = this.navParams.cantidad_pendiente;
      this.DsIniciaActividad.cantidad_ingresar = 0;


      /////////////metalizado
      //console.log('this.DsIniciaActividad.proceso_metalizado::', this.DsIniciaActividad.proceso_metalizado);

      //  1994-12-15T13:47:20.789"

      if (this.DsIniciaActividad.flag_serv_eje_ms != null) {
        if (this.DsIniciaActividad.flag_serv_eje_ms == 1) {

          this.hideItemByRevisionEje = true;
        }
      } else {
        this.hideItemByRevisionEje = false;

      }

      if (this.DsIniciaActividad.proceso_metalizado != null) {
        if (this.DsIniciaActividad.proceso_metalizado.length > 4) {
          this.hideItemByMetalizado = true;
        }
      } else {
        this.hideItemByMetalizado = false;
      }


      if (this.navParams.idproceso != '0') {
        this.hideItemByProceso = true;
      }
      console.log('this.navParams::43:::>', this.DsIniciaActividad);

      if (this.navParams.index == 0) {
        /////nuevo
        console.log('nuevooooo');

      } else {
        /////////editar
        console.log('editarrrrrr');
        this.UpdateFormEdit()
      }
    }
  }

  ngOnInit() {
    this.hideBtnInicio = true;
    if (this.hideItemByRevisionEje) {
      this.load_cbos_any();
    }
    this.FCondicionarEstado(this.idEstadoActividad);
    if (this.idTipoActividad == 1) {////servicios
      this.hideItemByTipoRep = false;
      this.hideItemByTipoSer = true;
      this.hideItemByTipoTal = false;

    } else if (this.idTipoActividad == 2 || this.idTipoActividad == 3) {
      this.hideItemByTipoRep = true;
      this.hideItemByTipoSer = false;
      this.hideItemByTipoTal = false;
    }
    else if (this.idTipoActividad == 4) {
      this.hideItemByTipoRep = false;
      this.hideItemByTipoSer = false;
      this.hideItemByTipoTal = true;
    }
    //console.log('hide_div_equipo:::', this.hideItemByTipoRep);


    // Actualiza la fecha y hora cada segundo
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000); // 1000 ms = 1 segundo

  }

  ionViewDidEnter() {

    this.refreshGridData();

  }

  // Nueva función para refrescar la información de la grilla
  refreshGridData() {
    console.log('Refrescando datos de la grilla...');
    this.ApiServices.HistoricoMotivoParada(this.DsIniciaActividad.pk_idservicio).then((res) => {
      console.log(res);
      this.DsGridMotivoPausa = res; // Actualiza los datos de la grilla
      this.CantItemsMotivoPausa = this.DsGridMotivoPausa.length; // Actualiza la cantidad de items
    }).catch((error) => {
      console.error('Error al refrescar los datos:', error);
    });
  }

  UpdateFormEdit() {

    // const loading = this.loadingController.create({
    //   //spinner: null,
    //   //duration: 5000,
    //   message: 'Cargando cantidad...',
    //   translucent: true//,
    //   //cssClass: 'custom-class custom-loading'
    // }).then(
    //   loading => {
    //     loading.present();
    //console.log(this.device.uuid);listado_resumen_diario
    this.ApiServices.LoadFormIniciaActividad(this.DsIniciaActividad.pk_idservicio, this.DsIniciaActividad.actividad).then((res) => {
      console.log('this.results=>>>', res);
      this.DsIniciaActividad.cantidad = res[0]['cantidad'];
      this.DsIniciaActividad.observacion = res[0]['obs'];
      console.log('this.results=>>>', res);

    }).finally(() => {
      //this.loadingController.dismiss();
    });


    // });



  }

  plus() {
    this.DsIniciaActividad.cantidad++;
  }
  minus() {
    this.DsIniciaActividad.cantidad--;
  }

  FCloseWin(idflag) {

    console.log("VERIFICAR EL FLAG DEL BOTON CANCELAR");
    console.log(this.flagResumenDiario);

    if (this.flagResumenDiario == '1') {
      this.navCtrl.navigateForward("prod-resumen-diario-horas");
    }
    else if (this.idTargetMenu == 1) {
      this.navCtrl.navigateForward("prod-list-acti-programada");
    }
    else {
      this.navCtrl.navigateForward("prod-ate-serv-list-actividades");
    }

  }
  FCondicionarEstado(tip: number) {
    //console.log('FEstadoActividad', tip);

    switch (tip) {
      case 1:////pausa
        this.hideBtnInicio = true;
        this.hideBtnModificaFecha = false;
        console.log('inicio 1', tip);
        break;
      case 2:////pausa
        this.hideBtnReanuda = true;
        this.hideBtnInicio = false;
        this.hideNomEstado = false;
        this.hideBtnModificaFecha = false;
        this.DsIniciaActividad.estado = "PAUSA";
        console.log('PAUSA', tip);
        break;
      case 3:////finalizar
        this.hideBtnReanuda = false;
        this.hideBtnInicio = false; //aqui es
        this.hideNomEstado = true;
        this.hideBtnModificaFecha = true;
        this.DsIniciaActividad.estado = "FINALIZAR";
        console.log('FINALIZAR', tip);
        break;
      case 4:////reanudar
        this.hideBtnReanuda = false;
        this.hideBtnInicio = true;
        this.hideNomEstado = false;
        this.hideBtnModificaFecha = false;
        this.DsIniciaActividad.estado = "REANUDAR";
        console.log('REANUDAR', tip);
        break;

      default:
        console.log('default', tip);
        break;
    }
  }


  async openObservacionesPausaModal(): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: MotivoPausaPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        valorModal: this.DsIniciaActividad.pk_idservicio,
        idusuario: this.IdUsuarioLocal
      }
    });

    return new Promise((resolve) => {
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null && dataReturned.data !== undefined) {
          resolve(dataReturned.data);
          //console.log("revisar aqui");
          //console.log(dataReturned.data);

        } else {
          resolve({ flag_guardar: 0, observaciones: '' }); // Devuelve un objeto con valores por defecto
        }
      });
      modal.present();
    });
  }

  async openFinalizaReprocesoModal(): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: FinalizaReprocesoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        valorModal: this.DsIniciaActividad.pk_idservicio,
        idusuario: this.IdUsuarioLocal
      }
    });

    return new Promise((resolve) => {
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null && dataReturned.data !== undefined) {
          resolve(dataReturned.data);
          //console.log("revisar aqui");
          //console.log(dataReturned.data);

        } else {
          resolve({ flag_guardar: 0, observaciones: '' }); // Devuelve un objeto con valores por defecto
        }
      });
      modal.present();
    });
  }

  async procesarFinalizacion() {
    let flagR: any = null;
    let flagGuardadoR: any = null; // Inicializa la variable con un valor por defecto
    let codMaquinaR: any = null; // Inicializa la variable con un valor por defecto
    let descripcionR: string = '';
    const modalRetornoR = await this.openFinalizaReprocesoModal(); // Llama a la función

    if (modalRetornoR !== null) {
      flagR = modalRetornoR.flagReproceso ?? 0;
      codMaquinaR = modalRetornoR.codMaquina ?? '';
      descripcionR = modalRetornoR.descripcionRepro ?? '';
      flagGuardadoR = modalRetornoR.flag_guardar ?? 0;
    } else {
      flagR = 0;
      codMaquinaR = 0;
      descripcionR = '';
      flagGuardadoR = 0;
    }

    if (flagGuardadoR == 1) {
      this.hideBtnReanuda = false;
      this.hideBtnInicio = false;
      this.hideNomEstado = true;
      this.DsIniciaActividad.estado = "FINALIZAR";
      this.DsIniciaActividad.flag_reproceso = flagR;
      this.DsIniciaActividad.maquina_reproceso = codMaquinaR;
      this.DsIniciaActividad.descripcion_reproceso = descripcionR;
      this.FSaveEstado(3); // Cambia el valor si es necesario
    }
  }


  async FEstadoActividad(tip: number) {
    console.log('FEstadoActividad', tip);


    switch (tip) {

      /*
      case 2: ////pausa 1

        let flagGuardado: any = null; // Inicializa la variable con un valor por defecto
        let observacionGuardado: string = '';
        const modalRetorno = await this.openObservacionesPausaModal(); // Llama a la función

        if (modalRetorno !== null) {
          if (modalRetorno.flag_guardar !== undefined) {
            flagGuardado = modalRetorno.flag_guardar; // Asigna el valor retornado
          } else {
            flagGuardado = 0; // Valor por defecto si no está definido
          }

          if (modalRetorno.observaciones !== undefined) {
            observacionGuardado = modalRetorno.observaciones; // Asigna el valor retornado
          } else {
            observacionGuardado = ''; // Valor por defecto si no está definido
          }

        } else {
          flagGuardado = 0; // Valor por defecto si no está definido
          observacionGuardado = ''; // Valor por defecto si no está definido
        }


        //console.log("Valor flag_guardar:", flagGuardado); // Imprime el valor
        //console.log("Valor observacionGuardado:", observacionGuardado); // Imprime el valor

        if (flagGuardado == 1) {
          this.hideBtnReanuda = true;
          this.hideBtnInicio = false;
          this.hideNomEstado = false;
          this.DsIniciaActividad.estado = "PAUSA";
          this.DsIniciaActividad.motivoPausa = observacionGuardado;

          this.FSaveEstado(tip);

        }

        break;
      */

      case 2: ////pausa 2

        this.hideBtnReanuda = true;
        this.hideBtnInicio = false;
        this.hideNomEstado = false;
        this.DsIniciaActividad.estado = "PAUSA";
        this.FSaveEstado(tip);

        break;


      /*
      case 3: ////finalizar 1

        //console.log(this.DsIniciaActividad.cantidad_pendiente);

        if (this.DsIniciaActividad.cantidad_ingresar < 0) {

          const alert = await this.alertController.create({
            header: 'Error',
            message: 'El campo Cantidad a Ingresar no puede ser menor a 0.',
            buttons: ['OK']
          });
          await alert.present();
          //this.DsIniciaActividad.cantidad_pendiente = this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada;
          this.DsIniciaActividad.cantidad_ingresar = 0;
          return;

        }
        else {
          console.log("Finalizando actividad");

          this.hideBtnReanuda = false;
          this.hideBtnInicio = false;
          this.hideNomEstado = true;
          this.DsIniciaActividad.estado = "FINALIZAR";

          this.FSaveEstado(tip);
        }
        //else if (this.DsIniciaActividad.cantidad_ingresar > (this.DsIniciaActividad.cantidad_pendiente)) {
          
          //const alert = await this.alertController.create({
          //  header: 'Error',
          //  message: 'No puede exceder la cantidad pendiente de ingresar',
          //  buttons: ['OK']
          //});

          //await alert.present();
          //////this.DsIniciaActividad.cantidad_pendiente = this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada;
          //this.DsIniciaActividad.cantidad_ingresar = 0;
          //return;

        //}

      break;
      */


      case 3: ////finalizar 2
        console.log(this.DsIniciaActividad.cantidad_ingresar);

        // Validar si cantidad_ingresar es 0 y mostrar ventana de confirmación
        if (this.DsIniciaActividad.cantidad_ingresar === 0) {
          const alert = await this.alertController.create({
            header: 'Confirmación',
            message: '¿Desea finalizar el registro con cantidad 0?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: () => {
                  console.log('Registro cancelado por el usuario.');
                  return;
                }
              },
              {
                text: 'Aceptar',
                handler: async () => {
                  // Continuar con el resto del código si acepta
                  await this.procesarFinalizacion();
                }
              }
            ]
          });
          await alert.present();
        } else {
          // Continuar con el resto del código directamente si cantidad_ingresar no es 0
          await this.procesarFinalizacion();
        }
        break;



      /*
    case 4: ////reanudar 1
      this.hideBtnReanuda = false;
      this.hideBtnInicio = true;
      this.hideNomEstado = false;
      this.DsIniciaActividad.estado = "REANUDAR";
      this.FSaveEstado(tip);

      break;
    */

      case 4: //reanudar 2

        let flagGuardado: any = null; // Inicializa la variable con un valor por defecto
        let observacionGuardado: string = '';
        const modalRetorno = await this.openObservacionesPausaModal(); // Llama a la función

        if (modalRetorno !== null) {
          if (modalRetorno.flag_guardar !== undefined) {
            flagGuardado = modalRetorno.flag_guardar; // Asigna el valor retornado
          } else {
            flagGuardado = 0; // Valor por defecto si no está definido
          }

          if (modalRetorno.observaciones !== undefined) {
            observacionGuardado = modalRetorno.observaciones; // Asigna el valor retornado
          } else {
            observacionGuardado = ''; // Valor por defecto si no está definido
          }

        } else {
          flagGuardado = 0; // Valor por defecto si no está definido
          observacionGuardado = ''; // Valor por defecto si no está definido
        }

        if (flagGuardado == 1) {

          this.hideBtnReanuda = false;
          this.hideBtnInicio = true;
          this.hideNomEstado = false;
          this.DsIniciaActividad.estado = "REANUDAR";
          this.DsIniciaActividad.motivoPausa = observacionGuardado;
          this.FSaveEstado(tip);

        }

        break;


      default:
        break;
    }

    //this.FSaveEstado(tip);
  }


  FSaveEstado(idEstadoBtn) {

    const loading = this.loadingController.create({
      message: 'Cargando...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        this.DsIniciaActividad.acc = '8';
        this.DsIniciaActividad.idestado = idEstadoBtn;
        this.ApiServices.SaveInicioActividad(this.DsIniciaActividad).then((res) => {
          let rest: any;
          rest = res[0];

          console.log(rest);
          console.log(rest.o_nres);
          if (rest.o_nres == 0) {
            alert('Error, no se pudo guardar correctamente.');
          } else {

            //this.DsIniciaActividad.pk_idservicio=rest.o_nres
            this.DsIniciaActividad.fecha_fin = rest.p1
            let navigationExtras: NavigationExtras = {
              state: this.DsIniciaActividad
            };

            this.loadingController.dismiss();
            console.log('navigationExtras', navigationExtras);
            //this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

            // Navegar de vuelta a la lista y pasar un parámetro
            //this.router.navigate(['/prod-ate-serv-list-actividades'], { queryParams: { refresh: true } });

            //SI ES UNA PAUSA O REANUDAR
            if(idEstadoBtn == 2 || idEstadoBtn == 4){
              // Refrescar los datos de la grilla
              this.refreshGridData();
            }

          }

        }).finally(() => {

          console.log('finalyyyy');


        });

      });

  }

  async onCantPendChange(event: any) {


    /*
      console.log('El valor del input ha cambiado:', event.detail.value);
      console.log(event.detail.value);
      console.log(this.DsIniciaActividad.cantidad_pendiente);
      console.log(this.DsIniciaActividad.cantidad_total);
      console.log(this.DsIniciaActividad.cantidad_revisada);
      console.log(this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada);
    */

    /*
    if (this.DsIniciaActividad.cantidad_ingresar > (this.DsIniciaActividad.cantidad_pendiente)) {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No puede exceder la cantidad pendiente de ingresar',
        buttons: ['OK']
      });

      await alert.present();
      //this.DsIniciaActividad.cantidad_pendiente = this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada;
      this.DsIniciaActividad.cantidad_ingresar = 0;

      return;

    }*/
    if (this.DsIniciaActividad.cantidad_ingresar < 0) {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La cantidad a ingresar no puede ser menor a 0',
        buttons: ['OK']
      });
      await alert.present();
      //this.DsIniciaActividad.cantidad_pendiente = this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada;
      this.DsIniciaActividad.cantidad_ingresar = 0;

      return;

    }
    else if (this.DsIniciaActividad.cantidad_ingresar == null) {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La cantidad a ingresar no puede ser igual a vacio.',
        buttons: ['OK']
      });
      await alert.present();
      //this.DsIniciaActividad.cantidad_pendiente = this.DsIniciaActividad.cantidad_total - this.DsIniciaActividad.cantidad_revisada;
      this.DsIniciaActividad.cantidad_ingresar = 0;

      return;

    }
    else {
      console.log("ingresa a else");
    }


  }

  unCheckFocus(e) {

    if (this.flagUpdatedObsOK) {

      if (e == 3) {
        if (this.DsIniciaActividad.observacion == this.obs_aux) {
          return false;
        }
      }

      this.flagUpdatedObsOK = false;
      // const loading = this.loadingController.create({
      //   message: 'Actualizando...',
      //   translucent: true//,
      //   //cssClass: 'custom-class custom-loading'
      // }).then(
      //   loading => {
      //     loading.present();

      this.DsIniciaActividad.acc = '21';
      this.ApiServices.SaveInicioActividad(this.DsIniciaActividad).then((res) => {
        let rest: any;
        rest = res[0];
        this.obs_aux = this.DsIniciaActividad.observacion;

        if (rest.o_nres == 0) {
          alert('Error, no se pudo guardar correctamente.');
        } else {

          //this.DsIniciaActividad.pk_idservicio=rest.o_nres
          ///this.DsIniciaActividad.fecha_fin = rest.p1

          //this.loadingController.dismiss();

          this.flagUpdatedObsOK = true;
          //console.log('navigationExtras', navigationExtras);
          //this.navCtrl.navigateForward(['prod-ate-serv-inicia-actividad'], navigationExtras);

        }



        // }).finally(() => {

        //   console.log('finalyyyy');


        // });

      });

    }///fin if

  }

  select_change_eje(ev) {

    for (const row of this.rest_serv_eje) {
      console.log(row.SEQMASERV);

      if (row.SEQMASERV == ev.detail.value) {
        this.DsIniciaActividad.servicio_eje = row.Y04002;
        this.DsIniciaActividad.idservicio_x_eje_ofd = row.SEQMASERV
        this.unCheckFocus(4)

      }
    }

  }

  load_cbos_any() {
    const loading = this.loadingController.create({
      message: 'Cargando listas...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiServices.load_cbos_any_edit_ini_actvidad(this.DsIniciaActividad.actividad, '', '').then((res) => {
          this.rest_serv_eje = res['servicio_eje'];

        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  onFechaInicioChange(event: CustomEvent, valor1: string, valor2: string) {

    // El evento tiene la propiedad 'detail' que contiene el valor seleccionado
    console.log('Fecha inicio cambiada | actualizar:', event.detail.value);
    console.log(valor1);
    // Puedes realizar otras operaciones aquí según tus necesidades
    var fecha_cambiada = event.detail.value;
    var idservicio = valor1;
    var avatar = valor2;

    console.log("verifica aquiii id");
    console.log(this.IdUsuarioLocal);

    this.ApiServices.UpdateFechaInicioProd(fecha_cambiada, idservicio, avatar, this.IdUsuarioLocal).then((res) => {

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

  }


  onFechaFinChange(event: CustomEvent, valor1: string, valor2: string) {

    // El evento tiene la propiedad 'detail' que contiene el valor seleccionado
    console.log('Fecha fin cambiada | actualizar:', event.detail.value);
    console.log(valor1);

    // Puedes realizar otras operaciones aquí según tus necesidades
    var fecha_cambiada = event.detail.value;
    var idservicio = valor1;
    var avatar = valor2;


    this.ApiServices.UpdateFechaFinProd(fecha_cambiada, idservicio, avatar, this.IdUsuarioLocal).then((res) => {

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

  }


  visualizar_pdf(plano) {
    /*
    let row: any;
    row = {} as MPieza;
    
    row.plano_diseno = plano;
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['pdf-viewer'], navigationExtras);
    */


    this.navCtrl.navigateForward('pdf-viewer', {
      queryParams: {
        valor: plano,
        flaglistaprod: 2
      }
    });


  }

}