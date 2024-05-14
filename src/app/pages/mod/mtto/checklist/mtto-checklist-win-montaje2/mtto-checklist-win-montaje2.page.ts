
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from "@ionic/storage";
import { UntypedFormBuilder, Validators, UntypedFormGroup, FormControl, } from "@angular/forms";

import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"
@Component({
  selector: 'app-mtto-checklist-win-montaje2',
  templateUrl: './mtto-checklist-win-montaje2.page.html',
  styleUrls: ['./mtto-checklist-win-montaje2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoChecklistWinMontaje2Page implements OnInit {
  FormCheckListPaso2: UntypedFormGroup;
  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  idchecklistcab;
  alertSiNo: any;
  EditDataRest: any;
  disableButtonPaso1: boolean = true;
  checklist_paso2_apli_ck: boolean = true;
  constructor(

    public formBuilder: UntypedFormBuilder,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoChekListMontajeService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal:GlovalProvider

  ) {

    this.FormCheckListPaso2 = this.formBuilder.group({
      idchecklistpaso2: [''],///, Validators.required
      idchecklistcab_paso2: ['', Validators.required],
      idestado_revi_paso2_cp2: [''],
      idsuper_respsble_cp2: ['', ],
      fch_revi_respsble_cp2: ['', ],
      idesta_revi_respsble_cp2: [''],
      revi_respsble_obs_cp2: ['', ],
      cub_pri_val_cc_cp2: ['', Validators.required],
      cub_pri_rev_rosc_cp2: ['', Validators.required],
      cub_pri_pie_lim_cp2: ['', Validators.required],
      cub_pri_observ_cp2: [''],
      cub_est_val_cc_cp2: ['', Validators.required],
      cub_est_rev_ros_cp2: ['', Validators.required],
      cub_est_pie_lim_cp2: ['', Validators.required],
      cub_est_observ_cp2: [''],
      sop_rod_val_cc_cp2: ['', Validators.required],
      sop_rod_rev_ros_cp2: ['', Validators.required],
      sop_rod_pie_lim_cp2: ['', Validators.required],
      sop_rod_observ_cp2: [''],
      eje_rot_val_cc_cp2: ['', Validators.required],
      eje_rot_rev_ros_cp2: ['', Validators.required],
      eje_rot_pie_lim_cp2: ['', Validators.required],
      eje_rot_observ_cp2: [''],
      impulso_val_cc_cp2: ['', Validators.required],
      impulso_rev_ros_cp2: ['', Validators.required],
      impulso_pie_lim_cp2: ['', Validators.required],
      impulso_observ_cp2: [''],
      checklist_paso2_apli: [''],
      cub_pri_apl: [''],
      cub_est_apl: [''],
      sop_rod_apl: [''],
      eje_rot_apl: [''],
      impulso_apl: [''],
    });

    this.idchecklistcab = globalVal.idchecklistcab
    this.FormCheckListPaso2.controls["idchecklistcab_paso2"].setValue(
    this.idchecklistcab
    );
    var thiss=this;
    this.storage.get('USER_PERMISO').then((result1) => {
      //resultado.json().forEach(resultado => resultjson2);
      result1.forEach(function (permiso) {
        if (permiso.Nivel == 32) {////permiso de jefe
          thiss.disableButtonPaso1 = false;
        } else {
          thiss.disableButtonPaso1 = true;
        }
      }
      );
    });
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;

      this.storage.get('DEVICE_INFO').then((result1) => {
        localStorage = (result1);
        this.NombreDispositivo = localStorage.name;
        this.IdDispositivo = localStorage.uuid;
        //console.log(this.navParamsAny);

      });

    });

  }


  FLoadForms() {
    const loading = this.loadingController.create({
      message: 'Cargando lista...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        this.ApiService.FormFindPaso2(this.idchecklistcab, '1', 'H').then((rest) => {

          this.EditDataRest = rest;
          console.log(this.EditDataRest);

          try {
            this.FormCheckListPaso2.setValue({

              idchecklistpaso2: this.EditDataRest[0].idchecklistpaso2,
idchecklistcab_paso2: this.EditDataRest[0].idchecklistcab_paso2,
idestado_revi_paso2_cp2: this.EditDataRest[0].idestado_revi_paso2_cp2,
idsuper_respsble_cp2: this.EditDataRest[0].idsuper_respsble_cp2,
fch_revi_respsble_cp2: this.EditDataRest[0].fch_revi_respsble_cp2,
idesta_revi_respsble_cp2: this.EditDataRest[0].idesta_revi_respsble_cp2,
revi_respsble_obs_cp2: this.EditDataRest[0].revi_respsble_obs_cp2,
cub_pri_val_cc_cp2: this.EditDataRest[0].cub_pri_val_cc_cp2,
cub_pri_rev_rosc_cp2: this.EditDataRest[0].cub_pri_rev_rosc_cp2,
cub_pri_pie_lim_cp2: this.EditDataRest[0].cub_pri_pie_lim_cp2,
cub_pri_observ_cp2: this.EditDataRest[0].cub_pri_observ_cp2,
cub_est_val_cc_cp2: this.EditDataRest[0].cub_est_val_cc_cp2,
cub_est_rev_ros_cp2: this.EditDataRest[0].cub_est_rev_ros_cp2,
cub_est_pie_lim_cp2: this.EditDataRest[0].cub_est_pie_lim_cp2,
cub_est_observ_cp2: this.EditDataRest[0].cub_est_observ_cp2,
sop_rod_val_cc_cp2: this.EditDataRest[0].sop_rod_val_cc_cp2,
sop_rod_rev_ros_cp2: this.EditDataRest[0].sop_rod_rev_ros_cp2,
sop_rod_pie_lim_cp2: this.EditDataRest[0].sop_rod_pie_lim_cp2,
sop_rod_observ_cp2: this.EditDataRest[0].sop_rod_observ_cp2,
eje_rot_val_cc_cp2: this.EditDataRest[0].eje_rot_val_cc_cp2,
eje_rot_rev_ros_cp2: this.EditDataRest[0].eje_rot_rev_ros_cp2,
eje_rot_pie_lim_cp2: this.EditDataRest[0].eje_rot_pie_lim_cp2,
eje_rot_observ_cp2: this.EditDataRest[0].eje_rot_observ_cp2,
impulso_val_cc_cp2: this.EditDataRest[0].impulso_val_cc_cp2,
impulso_rev_ros_cp2: this.EditDataRest[0].impulso_rev_ros_cp2,
impulso_pie_lim_cp2: this.EditDataRest[0].impulso_pie_lim_cp2,
impulso_observ_cp2: this.EditDataRest[0].impulso_observ_cp2,
cub_pri_apl:(this.EditDataRest[0].cub_pri_apl=='1')?false:true,
cub_est_apl:(this.EditDataRest[0].cub_est_apl=='1')?false:true,
sop_rod_apl:(this.EditDataRest[0].sop_rod_apl=='1')?false:true,
eje_rot_apl:(this.EditDataRest[0].eje_rot_apl=='1')?false:true,
impulso_apl:(this.EditDataRest[0].impulso_apl=='1')?false:true,
checklist_paso2_apli: this.globalVal.checklist_paso2_apli,
            });

            let event: any;
            event = {detail:{ checked:this.FormCheckListPaso2.controls['cub_pri_apl'].value}};
            this.toggle1(event);
            event = {detail:{ checked:this.FormCheckListPaso2.controls['cub_est_apl'].value}};
            this.toggle2(event);
            event = {detail:{ checked:this.FormCheckListPaso2.controls['sop_rod_apl'].value}};
            this.toggle3(event);
            event = {detail:{ checked:this.FormCheckListPaso2.controls['eje_rot_apl'].value}};
            this.toggle4(event);
            event = {detail:{ checked:this.FormCheckListPaso2.controls['impulso_apl'].value}};
            this.toggle5(event);

          } catch (error) {
            console.log('error:::>', error);
          }

        }).finally(() => {
          this.loadingController.dismiss();

        });
      });
  }


  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso2.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: "CONTROL DE MOTOR ELECTRICO",
          subHeader: "",
          mode: "ios",
          backdropDismiss: true,
          message: "Confirmar que desea guardar?",
          buttons: [
            {
              text: "Aceptar",
              cssClass: "alert-button-group",
              role: "A",
              handler: () => { },
            },
            {
              text: "Cancelar",
              role: "F",
              handler: () => {
              },
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {
            console.log("aceptaPop::::>>", aceptaPop);
            if (aceptaPop.role == "A") {

           if (this.disableButtonPaso1 == false) {
            this.FormCheckListPaso2.controls["idsuper_respsble_cp2"].setValue(
              this.IdUsuarioLocal
            );
           }


           ///////////////////////////////////////////////////////////////////
const loading = this.loadingController.create({
  message: 'Guardando Paso 2...',
  translucent: true//,
  //cssClass: 'custom-class custom-loading'
}).then(
  loading => {
    loading.present();
  });

              this.ApiService
                .GuardarFormPaso2(this.FormCheckListPaso2.value)
                .then((res) => {

                  this.FormCheckListPaso2.controls["idchecklistpaso2"].setValue(
                    this.ApiService.confirmSaveBd
                  );
                  this.loadingController.dismiss();
                  alert('Guardado correctamente.');
                })
                .finally(() => {
                  //this.navCtrl.navigateForward(["mtto-list-recinado"]);
                })
                .catch((err) => {
                  console.log("errror:::>>>>>>>>>", err);
                });
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      console.log(this.FormCheckListPaso2.valid);
      console.log(this.FormCheckListPaso2);

      for (let i in this.FormCheckListPaso2.controls) {
        this.FormCheckListPaso2.controls[i].setValue(
          this.FormCheckListPaso2.controls[i].value
        );
        this.FormCheckListPaso2.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: "CONTROL DE MOTOR ELECTRICO",
          subHeader: "",
          mode: "ios",
          backdropDismiss: true,
          message: "Falta seleccionar todos los datos",
          buttons: [
            {
              text: "Aceptar",
              cssClass: "alert-button-group",
              role: "A",
              handler: () => { },
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => { });
          /////////////////////////
        });

      //////////////////
    }
  }

  SaveFormBorradorPaso1() {

    this.alertSiNo = this.alertController
      .create({
        header: "CONTROL DE MOTOR ELECTRICO",
        subHeader: "",
        mode: "ios",
        backdropDismiss: true,
        message: "Confirmar que desea guardar?",
        buttons: [
          {
            text: "Aceptar",
            cssClass: "alert-button-group",
            role: "A",
            handler: () => { },
          },
          {
            text: "Cancelar",
            //cssClass: 'alert-button-group',
            role: "F",
            handler: () => {
              //this.conectar_to_insert();
              //this.events.publish('user:created',Date.now());
              //return false;
            },
          },
        ],
      })
      .then((alertI) => {
        alertI.present();
        alertI.onDidDismiss().then((aceptaPop) => {
          console.log("aceptaPop::::>>", aceptaPop);
          if (aceptaPop.role == "A") {

                       ///////////////////////////////////////////////////////////////////
const loading = this.loadingController.create({
  message: 'Guardando Paso 1...',
  translucent: true//,
  //cssClass: 'custom-class custom-loading'
}).then(
  loading => {
    loading.present();
  });

            this.ApiService
              .GuardarFormPaso2(this.FormCheckListPaso2.value)
              .then((res) => {

                this.FormCheckListPaso2.controls["idchecklistpaso2"].setValue(
                  this.ApiService.confirmSaveBd
                );
this.loadingController.dismiss();
alert('Guardado correctamente.');
              })
              .finally(() => {
                //this.navCtrl.navigateForward(["mtto-list-recinado"]);
              })
              .catch((err) => {
                console.log("errror:::>>>>>>>>>", err);
              });
          } else {
          }
        });
        /////////////////////////
      });

  }

  //////////////////////////save check no aplica paso
  SaveCheckNoAplicaPaso(event: any) {
    const loading = this.loadingController
      .create({
        message: 'Guardando Paso 2...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    //this.idchecklistcab = this.globalVal.idchecklistcab;
    this.FormCheckListPaso2.controls['idchecklistcab_paso2'].setValue(
      this.idchecklistcab
    );

    //this.globalVal.checklist_paso2_apli == '0' ? true : false;
    this.globalVal.checklist_paso2_apli=(event.detail['checked'])?'0':'1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      2,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso2.controls["idchecklistpaso1"].setValue(
        //   this.ApiService.confirmSaveBd
        // );
        this.NoAplicaPaso(event);
        this.loadingController.dismiss();
      })
      .finally(() => {})
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    /////////////////////////
  }

  NoAplicaPaso(event: any) {
    console.log(event);
    console.log(event.detail['checked']);
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('cub_pri_apl').setValue(true);
      this.FormCheckListPaso2.get('cub_pri_apl').enable();
      this.FormCheckListPaso2.get('cub_est_apl').enable();
      this.FormCheckListPaso2.get('cub_est_apl').setValue(true);
      this.FormCheckListPaso2.get('sop_rod_apl').enable();
      this.FormCheckListPaso2.get('sop_rod_apl').setValue(true);
      this.FormCheckListPaso2.get('eje_rot_apl').enable();
      this.FormCheckListPaso2.get('eje_rot_apl').setValue(true);
      this.FormCheckListPaso2.get('impulso_apl').enable();
      this.FormCheckListPaso2.get('impulso_apl').setValue(true);
      this.FormCheckListPaso2.get('idestado_revi_paso2_cp2').enable();

    } else {
      this.FormCheckListPaso2.get('cub_pri_apl').disable();
      this.FormCheckListPaso2.get('cub_pri_apl').setValue(true);
      this.FormCheckListPaso2.get('cub_est_apl').disable();
      this.FormCheckListPaso2.get('cub_est_apl').setValue(true);
      this.FormCheckListPaso2.get('sop_rod_apl').disable();
      this.FormCheckListPaso2.get('sop_rod_apl').setValue(true);
      this.FormCheckListPaso2.get('eje_rot_apl').disable();
      this.FormCheckListPaso2.get('eje_rot_apl').setValue(true);
      this.FormCheckListPaso2.get('impulso_apl').disable();
      this.FormCheckListPaso2.get('impulso_apl').setValue(true);
      this.FormCheckListPaso2.get('idestado_revi_paso2_cp2').disable();

    }
    this.toggle1(event);
    this.toggle2(event);
    this.toggle3(event);
    this.toggle4(event);
    this.toggle5(event);
  }

  toggle1(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('cub_pri_val_cc_cp2').enable();
      this.FormCheckListPaso2.get('cub_pri_rev_rosc_cp2').enable();
      this.FormCheckListPaso2.get('cub_pri_pie_lim_cp2').enable();
      this.FormCheckListPaso2.get('cub_pri_observ_cp2').enable();
    } else {
      this.FormCheckListPaso2.get('cub_pri_val_cc_cp2').disable();
      this.FormCheckListPaso2.get('cub_pri_rev_rosc_cp2').disable();
      this.FormCheckListPaso2.get('cub_pri_pie_lim_cp2').disable();
      this.FormCheckListPaso2.get('cub_pri_observ_cp2').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('cub_est_val_cc_cp2').enable();
      this.FormCheckListPaso2.get('cub_est_rev_ros_cp2').enable();
      this.FormCheckListPaso2.get('cub_est_pie_lim_cp2').enable();
      this.FormCheckListPaso2.get('cub_est_observ_cp2').enable();
    } else {
      this.FormCheckListPaso2.get('cub_est_val_cc_cp2').disable();
      this.FormCheckListPaso2.get('cub_est_rev_ros_cp2').disable();
      this.FormCheckListPaso2.get('cub_est_pie_lim_cp2').disable();
      this.FormCheckListPaso2.get('cub_est_observ_cp2').disable();
    }
  }
  toggle3(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('sop_rod_val_cc_cp2').enable();
      this.FormCheckListPaso2.get('sop_rod_rev_ros_cp2').enable();
      this.FormCheckListPaso2.get('sop_rod_pie_lim_cp2').enable();
      this.FormCheckListPaso2.get('sop_rod_observ_cp2').enable();
    } else {
      this.FormCheckListPaso2.get('sop_rod_val_cc_cp2').disable();
      this.FormCheckListPaso2.get('sop_rod_rev_ros_cp2').disable();
      this.FormCheckListPaso2.get('sop_rod_pie_lim_cp2').disable();
      this.FormCheckListPaso2.get('sop_rod_observ_cp2').disable();
    }
  }
  toggle4(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('eje_rot_val_cc_cp2').enable();
      this.FormCheckListPaso2.get('eje_rot_rev_ros_cp2').enable();
      this.FormCheckListPaso2.get('eje_rot_pie_lim_cp2').enable();
      this.FormCheckListPaso2.get('eje_rot_observ_cp2').enable();
    } else {
      this.FormCheckListPaso2.get('eje_rot_val_cc_cp2').disable();
      this.FormCheckListPaso2.get('eje_rot_rev_ros_cp2').disable();
      this.FormCheckListPaso2.get('eje_rot_pie_lim_cp2').disable();
      this.FormCheckListPaso2.get('eje_rot_observ_cp2').disable();
    }
  }

  toggle5(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso2.get('impulso_val_cc_cp2').enable();
      this.FormCheckListPaso2.get('impulso_rev_ros_cp2').enable();
      this.FormCheckListPaso2.get('impulso_pie_lim_cp2').enable();
      this.FormCheckListPaso2.get('impulso_observ_cp2').enable();
    } else {
      this.FormCheckListPaso2.get('impulso_val_cc_cp2').disable();
      this.FormCheckListPaso2.get('impulso_rev_ros_cp2').disable();
      this.FormCheckListPaso2.get('impulso_pie_lim_cp2').disable();
      this.FormCheckListPaso2.get('impulso_observ_cp2').disable();
    }
  }
  ionViewWillEnter(){
    //this.FLoadForms()
    this.checklist_paso2_apli_ck = this.globalVal.checklist_paso2_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso2_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);

    this.FormCheckListPaso2.controls['checklist_paso2_apli'].setValue(
      this.checklist_paso2_apli_ck
    );
  }
  ngOnInit() {

  }


}

