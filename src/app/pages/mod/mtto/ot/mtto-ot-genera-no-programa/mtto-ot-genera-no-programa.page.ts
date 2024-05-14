import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from "src/app/interfaces/mtto/mtto-ordentrabajo";
import { MttoOtPopTecnicoPage } from 'src/app/pages/mod/mtto/ot/mtto-ot-pop-tecnico/mtto-ot-pop-tecnico.page';
import { MttoOtPopEquipoPage } from 'src/app/pages/mod/mtto/ot/mtto-ot-pop-equipo/mtto-ot-pop-equipo.page';
import { NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";
import { Storage } from "@ionic/storage";
@Component({
  selector: 'app-mtto-ot-genera-no-programa',
  templateUrl: './mtto-ot-genera-no-programa.page.html',
  styleUrls: ['./mtto-ot-genera-no-programa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MttoOtGeneraNoProgramaPage implements OnInit {
  DsOrdenTrabajo: any;
  ClassNotiEquipo: string;
  CssNotiSite: string;
  CssNotiDiasOpera: string;
  CssNotiTenico: string;
  dataReturned: any;
  rest_site:any;
  scanActive:boolean=true;
  Cancelar:string='Cancelar';
  disableButton:boolean=false;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public ApiServices: MttoOrdentrabajoService,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
  private loadingController:LoadingController
  ) {

    this.DsOrdenTrabajo = {} as OrdenTrabajo;
    this.DsOrdenTrabajo.codsmg = '';
    this.DsOrdenTrabajo.Y06002 = "";
    this.DsOrdenTrabajo.dias_trabajados_manual = 0;
    this.DsOrdenTrabajo.nombres_tecnico = "";

    console.log(this.DsOrdenTrabajo);

  }

  ngOnInit() {
    this.load_cbos_pieza_material_maquina();
  }

  async FOpenPopUpEquipo() {
    let idpieza_;
    let id_personal_;
    idpieza_ = this.DsOrdenTrabajo.codsmg;//ma00estado_replicated;
    id_personal_ = this.DsOrdenTrabajo.idactivos;
    const modal = await this.modalCtrl.create({
      component: MttoOtPopEquipoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        nombre_tecnico: idpieza_,
        titulo_modal: 'Maestro de Equipos',
        id_personal: id_personal_
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);

        let index = 0;
        this.DsOrdenTrabajo.codsmg = dataReturned.data.nombres;
        this.DsOrdenTrabajo.idactivos = dataReturned.data.id;///idclase <> idpieza
      }
    });
    return await modal.present();
  }
  select_change_site(ev) {
    for (const row of this.rest_site) {
      if (row.Y06001 == ev.detail.value) {
        this.DsOrdenTrabajo.Y06002 = row.Y06002;
        this.DsOrdenTrabajo.Y06001 = row.Y06001
      }
    }

  }
  ////////////////////////////pop SERVICIOS
  async FOpenModalTecnico(index) {
    let idpieza_;
    let id_personal_;
    idpieza_ = this.DsOrdenTrabajo.nombres_tecnico;//ma00estado_replicated;
    id_personal_ = this.DsOrdenTrabajo.ot_id_tecnico;
    const modal = await this.modalCtrl.create({
      component: MttoOtPopTecnicoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        nombre_tecnico: idpieza_,
        titulo_modal: 'Tecnicos de Mantto',
        id_personal: id_personal_
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned = dataReturned.data;
        console.log('dataReturned::206', dataReturned);

        let index = 0;
        this.DsOrdenTrabajo.nombres_tecnico = dataReturned.data.nombres;
        this.DsOrdenTrabajo.ot_id_tecnico = dataReturned.data.id;///idclase <> idpieza
      }
    });
    return await modal.present();
  }

  load_cbos_pieza_material_maquina() {
    const loading = this.loadingController.create({
      message: 'Cargando listas...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiServices.load_cbo_site().then((res) => {
          this.rest_site = res['site'];
          
        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }

  ngOnDestroy(){
    //alert('SEguro de ir atrazassss');
  }
  
  FCancelarForm() {

  }

  FSaveForm(op) {


    const loading = this.loadingController.create({
      message: 'Guardando...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.DsOrdenTrabajo.acc = '14';
        this.ApiServices.SaveOtNoProgramada(this.DsOrdenTrabajo).then((res) => {
          let rest: any;
          rest = res[0];
          this.loadingController.dismiss();
          if (rest.o_nres == 0) {
            alert('Error, no se pudo guardar correctamente.');
          } else {

            if (op==1) {
            this.DsOrdenTrabajo.id_orden_trab_cab = rest.o_nres
            this.DsOrdenTrabajo.nroot = rest.p2
            this.DsOrdenTrabajo.codequipo = this.DsOrdenTrabajo.codsmg
            this.DsOrdenTrabajo.fcreaot = rest.p1
            this.DsOrdenTrabajo.idot = rest.o_nres

            let navigationExtras: NavigationExtras = {
              state: this.DsOrdenTrabajo
            };
            console.log('navigationExtras', navigationExtras);
            this.navCtrl.navigateForward(['winprincipal'], navigationExtras);
              
            }


          }



        }).finally(() => {

          console.log('finalyyyy');


        });

      });
      

  }


}

