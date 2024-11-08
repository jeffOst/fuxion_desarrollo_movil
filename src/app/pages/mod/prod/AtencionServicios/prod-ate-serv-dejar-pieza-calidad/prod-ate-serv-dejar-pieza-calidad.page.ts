 import { Component, OnInit } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { IonicModule } from '@ionic/angular';


// export class ProdAteServDejarPiezaCalidadPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { MSolicitudQc } from 'src/app/interfaces/prod/Pieza';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { ProdAteServPopPersonalPage } from '../../../prod/AtencionServicios/prod-ate-serv-pop-personal/prod-ate-serv-pop-personal.page';
import { Location } from "@angular/common";

@Component({
  selector: 'app-prod-ate-serv-dejar-pieza-calidad',
  templateUrl: './prod-ate-serv-dejar-pieza-calidad.page.html',
  styleUrls: ['./prod-ate-serv-dejar-pieza-calidad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdAteServDejarPiezaCalidadPage implements OnInit {
  FormModel: any;
  navParams: any;
  CssNotiTecnico: string;
  CssNotiCantidad: string;
  CssReproceso: string;
  hide_div_reproceso:boolean;
  Cancelar:string='Cancelar';
  readonly_qr:boolean=false;
  disableButton:boolean;
  
  tipoPiezaCalidad: any[] = [];  // Aquí se almacenarán los tipoPiezaCalidad de la base de datos
  
  // Datos del formulario
  /*
  formData = {
    tipoPieza: '1'
  };
  */

  selectedCodigo = 2; // Aquí estableces el valor predeterminado PP


  constructor(
    public navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public ApiServices: ProdGestionServicioService,
    public location:Location
  ) {

    this.FormModel = {} as MSolicitudQc;

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log(this.navParams);

    console.log('this.FormModel', this.FormModel);
    if (this.navParams) {
      this.FormModel.correorden = this.navParams.correorden;

      console.log('this.navParams', this.navParams);
      this.FormModel.idofpterminado = this.navParams.idofpterminado;
      this.FormModel.codigo_pt = this.navParams.Y04001;
      this.FormModel.descripcion_pt = this.navParams.descripcion_pt;
      this.FormModel.nombres_tecnico = this.navParams.nombres_tecnico;
      this.FormModel.EQUIPOID = this.navParams.EQUIPOID;
      this.FormModel.idsolicitante_scc = this.navParams.idsolicitante_scc;
      this.FormModel.cantidad = this.navParams.cantidad;
      this.FormModel.cantidad_atendido = this.navParams.cantidad_atendido;
      console.log('this.FormModel', this.FormModel);
      this.CssReproceso = (this.navParams.flag_reproceso==1)?'CssReproceso':'';
      console.log('this.CssReproceso=',this.CssReproceso);

      this.hide_div_reproceso = (this.navParams.flag_reproceso==1)?true:false;
      this.FormModel.fecha_reproceso = this.navParams.fecha_reproceso;
      this.FormModel.cantidad_reproceso= this.navParams.cantidad_reproceso;
      this.FormModel.idrevisiondet_reproceso= this.navParams.idrevisiondet_reproceso;
    }


  }

  ngOnInit() {
    this.load_cbos();
    this.FormModel.cantidad_scc = 0;
    if (!this.hide_div_reproceso) {
      this.listServiciosPendientes();
    }

  }
  
  load_cbos() {
    this.loadingController.create({
      message: 'Cargando motivos de pausa...',
      translucent: true
    }).then(loading => {
      loading.present();
      this.ApiServices.load_cbos_calidad_dejar_piezas_tipo().then((res) => {
        this.tipoPiezaCalidad = res['tipo_pieza']; // Asigna los datos a tipoPiezaCalidad
      }).finally(() => {
        loading.dismiss();
      });
    });
  } 

  FCancelarForm() {
    this.location.back();
  }

  FSaveForm() {
    let msgg: string = '';
    let index = 0;
    let siono = 0

    this.CssNotiTecnico = 'field_required_ok';
    ////tecnico
    if (this.FormModel.nombres_tecnico == null || this.FormModel.nombres_tecnico == '') {
      siono = 2;
      msgg = ' Fala seleccionar  Tecnico';
      this.CssNotiTecnico = 'field_required';
    }

    ////cantidad
    this.CssNotiCantidad = 'field_required_ok';
    if (this.FormModel.cantidad_scc == null || this.FormModel.cantidad_scc == '') {
      siono = 2;
      msgg = ' Fala agregar cantidad';
      this.CssNotiCantidad = 'field_required';
    }

    if (siono == 1 || siono == 2) {
      //msgg = (siono == 1) ? ' si es: OT u OF' : 'el Equipo'
      const alert = this.alertController.create({
        header: 'Solicita Control Calidad',
        cssClass: 'success',
        subHeader: '',
        mode: "ios",
        message: '' + msgg,//+ ', en el item: (' + (index + 1) + ')'
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'bgcolor:danger',
            handler: () => {

            }
          }]
      }).then((alertOK) => {
        alertOK.present();
      });
    } else {

      /////////////////
      const loading = this.loadingController.create({
        message: 'Cargando...',
        translucent: true//,
        //cssClass: 'custom-class custom-loading'
      }).then(
        loading => {
          loading.present();

          //console.log(this.selectedCodigo);
          this.FormModel.acc = '13';
          this.FormModel.tipo_calidad = (this.selectedCodigo);

          
          this.ApiServices.SaveControlCalidadByOf(this.FormModel).then((res) => {
            this.loadingController.dismiss();
            let rest: any;
            rest = res[0];
            console.log(rest);
            console.log(rest.o_nres);
            if (rest.o_nres == 0) {
              alert('Error, '+rest.o_msj);
            } else {
              this.FormModel.idsolicitudcontrolcab = rest.o_nres

              let navigationExtras: NavigationExtras = {
                state: this.FormModel
              };


              console.log('navigationExtras', navigationExtras);
              this.navCtrl.navigateForward(['prod-ate-serv-asigna-estado'], navigationExtras);
              alert(rest.o_msj);

            }



          }).finally(() => {

            console.log('finalyyyy');


          });

        });

    }///fin else si o no

    ///////////////////

  }


  async FOpenModalTecnico(index) {
    let nombres_tecnico;
    let id_personal_;
    let flag_msg: boolean = false;
    //////////////////////////
    nombres_tecnico = this.FormModel.nombres_tecnico;//ma00estado_replicated;
    id_personal_ = this.FormModel.idsolicitante_scc;
    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: ProdAteServPopPersonalPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        nombre_tecnico: nombres_tecnico,
        titulo_modal: 'Lista de Tecnicos',
        id_personal: id_personal_
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {

        this.FormModel.nombres_tecnico = dataReturned.data.nombres;
        this.FormModel.idsolicitante_scc = dataReturned.data.id;///idclase <> idpieza

      }
    });
    return await modal.present();
  }

  listServiciosPendientes() {
    //console.log(e);
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        //console.log(this.device.uuid);listado_resumen_diario
        this.ApiServices.LoadFormDejarPiezasCalidad(this.FormModel.idofpterminado).then((res) => {
          console.log('this.results=>>>', res);
          this.FormModel.cantidad_atendido = res[0]['cnt_recibo'];
          this.FormModel.cantidad_scc = this.FormModel.cantidad - this.FormModel.cantidad_atendido;
          console.log('this.results=>>>', res);

        }).finally(() => {
          this.loadingController.dismiss();
        });


      });

  }


}

