import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { FormBuilder,UntypedFormBuilder, UntypedFormGroup,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { RrhhPopupActividadPage } from 'src/app/pages/mod/rrhh/rrhh-popup-actividad/rrhh-popup-actividad.page';
import { RrhhPopupTecnicoPage } from 'src/app/pages/mod/rrhh/rrhh-popup-tecnico/rrhh-popup-tecnico.page';
import { RrhhPopupServiciosPage } from 'src/app/pages/mod/rrhh/rrhh-popup-servicios/rrhh-popup-servicios.page';
import { RrhhPopupMotivoPage } from 'src/app/pages/mod/rrhh/rrhh-popup-motivo/rrhh-popup-motivo.page';
import { RrhhPopupAreaPage } from 'src/app/pages/mod/rrhh/rrhh-popup-area/rrhh-popup-area.page';
import { RrhhPopupSupervisorPage } from 'src/app/pages/mod/rrhh/rrhh-popup-supervisor/rrhh-popup-supervisor.page';
import { RrhhPopupDescripcionPage } from 'src/app/pages/mod/rrhh/rrhh-popup-descripcion/rrhh-popup-descripcion.page';
import { RrhhHorasExtrasService } from 'src/app/api/rrhh/rrhh-horasextras.service';

@Component({
  selector: 'app-rrhh-win-horas-extras',
  templateUrl: './rrhh-win-horas-extras.page.html',
  styleUrls: ['./rrhh-win-horas-extras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class RrhhWinHorasExtrasPage implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
  disabledbuton:any;
  navParamsAny: any;
  Cancelar: string = 'Cancelar';
  disableButton;
  disableButton1;
  scanActive = false;
  dataReturned: any;
  dataReturned1: any;
  dataReturned2: any;
  dataReturned3: any;
  dataReturned4: any;
  dataReturned5: any;
  alertSiNo: any;
  EditDataRest: any;
  estaCargando: boolean = false;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  // tip_horas: string = '1';  // Valor predeterminado
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    public formBuilder: UntypedFormBuilder,
    public ApiService:RrhhHorasExtrasService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public storage: Storage
  ) {

    this.FormCheckListPaso1 = this.formBuilder.group({
      nom_tecni:['',Validators.required],
      nom_serv:['',Validators.required],
      actividad: ['',Validators.required],
      motivo: ['',Validators.required],
      supervisor:['',Validators.required],
      area:['',Validators.required],
      descrip : ['',Validators.required],
      cantidad: ['',Validators.required],
      tip_horas: ['',Validators.required],

      button: [''],

      idtecni: [''],
      idactivi: [''],
      idprogra: [''],
      // iddescrip: [''],
      idmotivo: [''],
      idarea: [''],
      idsuper: [''],
      id_documento:['']
    })
   }

  ngOnInit() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name
      console.log('localStorage',this.NombresUsuarioLocal);
      console.log('localStorage',this.IdUsuarioLocal);
      this.FormCheckListPaso1.controls['nom_tecni'].setValue(
        this.NombresUsuarioLocal
      );
  
      this.FormCheckListPaso1.controls['idtecni'].setValue(
        this.IdUsuarioLocal
      );
      this.FormCheckListPaso1.controls['tip_horas'].setValue(
        '1'
      );
    });

    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    console.log('this.navParamsAny',this.navParamsAny.idreghoex);
    this.disabledbuton=this.navParamsAny.estado_reg_hhee
    if (this.disabledbuton==2){
      this.disableButton=true
      this.disableButton1=true
    }
    else if (this.disabledbuton==0){
      this.disableButton =  true
      this.disableButton1= false 
    }
    else {
      this.disableButton = false
      this.disableButton1=true
    }


    this.FormCheckListPaso1.controls['id_documento'].setValue(
      this.navParamsAny.idreghoex
    );

    

  }
  ionViewWillEnter() {
    if (this.navParamsAny.idreghoex!= 0){

      this.FLoadForms();
    }
    console.log('carga mas lento?',this.NombresUsuarioLocal);
    
    this.FormCheckListPaso1.controls['nom_tecni'].setValue(
      this.NombresUsuarioLocal
    );

    this.FormCheckListPaso1.controls['idtecni'].setValue(
      this.IdUsuarioLocal
    );
  }
  // async FOpenModalTecnico() {
  //   const modal = await this.modalCtrl.create({
  //     component: RrhhPopupTecnicoPage,
  //     backdropDismiss: true,
  //     showBackdrop: true,
  //     mode: 'ios'
  //   });

  //   modal.onDidDismiss().then((dataReturned) => {
  //     if (dataReturned.data != undefined) {
  //       this.dataReturned = dataReturned.data;
  //       console.log('dataReturned::206', dataReturned);
  //       this.FormCheckListPaso1.controls['area'].setValue(
  //         this.dataReturned.area
  //       );
  //       this.FormCheckListPaso1.controls['idarea'].setValue(
  //         this.dataReturned.id_areapert
  //       );
  //     }
  //   });
  //   return await modal.present();
  // }
  async open_popup_servicios() {
    const modal = await this.modalCtrl.create({
      component: RrhhPopupServiciosPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned1 = dataReturned.data;
        console.log('dataReturned::207', dataReturned);
        this.FormCheckListPaso1.controls['nom_serv'].setValue(
          this.dataReturned1.nombres
        );
        this.FormCheckListPaso1.controls['idprogra'].setValue(
          this.dataReturned1.id
        );
      }
    });
    return await modal.present();
  }
  async open_popup_motivo() {
    const modal = await this.modalCtrl.create({
      component: RrhhPopupMotivoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned3 = dataReturned.data;
        console.log('dataReturned::207', dataReturned);
        this.FormCheckListPaso1.controls['motivo'].setValue(
          this.dataReturned3.nombres
        );
        this.FormCheckListPaso1.controls['idmotivo'].setValue(
          this.dataReturned3.id
        );
      }
    });
    return await modal.present();
  }
  async open_popup_supervisor() {
    const modal = await this.modalCtrl.create({
      component: RrhhPopupSupervisorPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned4 = dataReturned.data;
        console.log('dataReturned::207', dataReturned);
        this.FormCheckListPaso1.controls['supervisor'].setValue(
          this.dataReturned4.nombres
        );
        this.FormCheckListPaso1.controls['idsuper'].setValue(
          this.dataReturned4.id
        );
      }
    });
    return await modal.present();
  }
  async open_popup_area() {
    const modal = await this.modalCtrl.create({
      component: RrhhPopupAreaPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned4 = dataReturned.data;
        console.log('dataReturned::207', dataReturned);
        this.FormCheckListPaso1.controls['area'].setValue(
          this.dataReturned4.nombres
        );
        this.FormCheckListPaso1.controls['idarea'].setValue(
          this.dataReturned4.id
        );
      }
    });
    return await modal.present();
  }
  // async open_popup_descrip() {
  //   const modal = await this.modalCtrl.create({
  //     component: RrhhPopupDescripcionPage,
  //     backdropDismiss: true,
  //     showBackdrop: true,
  //     mode: 'ios'
  //   });

  //   modal.onDidDismiss().then((dataReturned) => {
  //     if (dataReturned.data != undefined) {
  //       this.dataReturned5 = dataReturned.data;
  //       console.log('dataReturned::207', dataReturned);
  //       this.FormCheckListPaso1.controls['descrip'].setValue(
  //         this.dataReturned5.nombres
  //       );
  //       this.FormCheckListPaso1.controls['iddescrip'].setValue(
  //         this.dataReturned5.id
  //       );
  //     }
  //   });
  //   return await modal.present();
  // }
  async FOpenModalActividad() {
    const modal = await this.modalCtrl.create({
      component: RrhhPopupActividadPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        this.dataReturned2 = dataReturned.data;
        console.log('dataReturned::206', dataReturned);
        this.FormCheckListPaso1.controls['actividad'].setValue(
          this.dataReturned2.nombres
        );
        this.FormCheckListPaso1.controls['idactivi'].setValue(
          this.dataReturned2.id
        );
      }
    });
    return await modal.present();
  }

  cancelar_ejecucion() {
    // this.navCtrl.navigateForward('rrhh-horas-extras');////addnoprogramado
  }
  async SaveFormTerminadoPaso1(value:any) {
    console.log('que esta validando aqui?',this.FormCheckListPaso1.valid);
    
    if (this.FormCheckListPaso1.valid) {
      this.FormCheckListPaso1.controls['button'].setValue(
        value
      );
      // Lógica para manejar un formulario válido
      await this.ApiService.GuardarInfPaso1(this.FormCheckListPaso1.value)
      .then( async (res) => {
        this.loadingController.dismiss();
        let css_msj=res[0].o_nres=='0'?'alerta-error':'alerta-ok';

        const alert = await this.alertController.create({
          header: 'ALERTA',
          subHeader: 'Confirmacion',
          cssClass:css_msj,
          mode: 'ios',
          animated: true,
          message: res[0].o_msj,// 'La operación se completó con éxito.',
          buttons: [
            {
              text: 'Aceptar',

              handler: () => {

                console.log('Operación confirmada');
                if (res[0].o_nres == '1') {
                  this.navCtrl.navigateForward(['rrhh-horas-extras']);
                }
              },
            },
          ],
        });

        await alert.present();


      })
      .finally(() => {
        console.log('finally:::>>LN:394');
        // this.FLoadForms();
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
        
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    } else {
      // Manejo de errores de validación
      console.log('entraaaaa al elseeee');
      
      this.showAlert();
    }
      
     
      //////////////////////////////////////////////////////////

  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'ALERTA',
      subHeader: 'Confirmacion',
      cssClass:'alerta-error',
      mode: 'ios',
      animated: true,
      message: 'Error falta completar datos',
      buttons: [
        {
          text: 'Aceptar',

          handler: () => {

            console.log('Operación confirmada');
           
          },
        },
      ],
    });

    await alert.present();
  }

  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present(); 
        this.ApiService.FormFindinftab1(this.navParamsAny.idreghoex)
          .then((rest) => {
            console.log(this.navParamsAny.idreghoex);
            this.EditDataRest = rest['form'];
           
           console.log('hrlppp',this.EditDataRest);
            
            try{
               this.FormCheckListPaso1.setValue({ 
                nom_serv: this.EditDataRest[0].program,
                actividad: this.EditDataRest[0].actividad,
                motivo: this.EditDataRest[0].motivo,
                supervisor:this.EditDataRest[0].supervisor,
                area:this.EditDataRest[0].area,
                descrip: this.EditDataRest[0].descrip_he,
                cantidad: this.EditDataRest[0].cantidad,
                tip_horas: this.EditDataRest[0].tip_horahe,
                button: this.EditDataRest[0].estado_reg_hhee,
                nom_tecni: this.NombresUsuarioLocal,
                idtecni: this.IdUsuarioLocal,
                idactivi: this.EditDataRest[0].actividad_he,
                idprogra: this.EditDataRest[0].idprogram_prod,
                // iddescrip: this.EditDataRest[0].iddescrip_he,
                idmotivo: this.EditDataRest[0].idmotivo_he,
                idarea: this.EditDataRest[0].idarea_he,
                idsuper: this.EditDataRest[0].idsupervisor_he,
                id_documento:this.EditDataRest[0].idreghoex
               });
           
              
            }catch (error) {
              console.log('error:::>', error);
            }
            //console.log("el id que debe pasar es",this.globalVal.id_orden_trab_cab);
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
          
      });
      
    }
}
