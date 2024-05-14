//import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-mtto-checklist-win-montaje6',
//   templateUrl: './mtto-checklist-win-montaje6.page.html',
//   styleUrls: ['./mtto-checklist-win-montaje6.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule]
// })
// export class MttoChecklistWinMontaje6Page implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from "@ionic/storage";
import { UntypedFormBuilder, Validators, UntypedFormGroup, FormControl, } from "@angular/forms";
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"

@Component({
  selector: 'app-mtto-checklist-win-montaje6',
  templateUrl: './mtto-checklist-win-montaje6.page.html',
  styleUrls: ['./mtto-checklist-win-montaje6.page.scss'],
     standalone: true,
     imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoChecklistWinMontaje6Page implements OnInit {
  FormCheckListPaso6: UntypedFormGroup;
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
  tituloAlert: string = "PRUEBA EN POZA Y REVISION FINAL";
  checklist_paso6_apli_ck: boolean = true;
  constructor(
    public formBuilder: UntypedFormBuilder,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoChekListMontajeService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider
  ) {

    this.FormCheckListPaso6 = this.formBuilder.group({

      idchecklistpaso6:[''],
idchecklistcab_paso6:[''],
idestado_revi_paso6_cp6:[''],
idsuper_respsble_cp6:[''],
fch_revi_respsble_cp6:[''],
idesta_revi_respsble_cp6:[''],
revi_respsble_obs_cp6:[''],
ins_bor_aj_rev_cp6:['',Validators.required],
ins_bor_me_val_cp6:['',Validators.required],
ins_bor_me_rev_cp6:['',Validators.required],
ins_cab_aj_rev_cp6:['',Validators.required],
ins_cab_me_val_cp6:['',Validators.required],
ins_cab_me_rev_cp6:['',Validators.required],
ins_ent_ve1_rev_cp6:['',Validators.required],
ins_ent_ve2_rev_cp6:['',Validators.required],
pru_rea_gi_rev_cp6:['',Validators.required],
pru_rea_co_val_cp6:['',Validators.required],
pru_rea_co_rev_cp6:['',Validators.required],
ban_pru_pr_rev_cp6:['',Validators.required],
rev_fin_rev_rev_cp6:['',Validators.required],
rev_fin_med_val_cp6:['',Validators.required],
rev_fin_med_rev_cp6:['',Validators.required],
rev_fin_ins_rev_cp6:['',Validators.required],
rev_fin_revaju_rev_cp6:['',Validators.required],
rev_fin_pint_rev_cp6:['',Validators.required],
rev_fin_inst_rev_cp6:['',Validators.required],
ins_bor_apl:[''],
ins_cab_apl:[''],
    //ins_ent_apl:[''],
    // pru_rea_apl:[''],
    // ban_pru_apl:[''],
    // rev_fin_apl:[''],
    checklist_paso6_apli:['']

    });

    this.idchecklistcab = globalVal.idchecklistcab
    this.FormCheckListPaso6.controls["idchecklistcab_paso6"].setValue(
      this.idchecklistcab
    );

    var thiss = this;
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

  ngOnInit() {
    //this.FLoadForms()
  }


  FLoadForms() {
    const loading = this.loadingController.create({
      message: 'Cargando lista...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        this.ApiService.FormFindPaso6(this.idchecklistcab, '1', 'H').then((rest) => {
          this.EditDataRest = rest;
          try {
            this.FormCheckListPaso6.setValue({

              idchecklistpaso6: this.EditDataRest[0].idchecklistpaso6,
idchecklistcab_paso6: this.EditDataRest[0].idchecklistcab_paso6,
idestado_revi_paso6_cp6: this.EditDataRest[0].idestado_revi_paso6_cp6,
idsuper_respsble_cp6: this.EditDataRest[0].idsuper_respsble_cp6,
fch_revi_respsble_cp6: this.EditDataRest[0].fch_revi_respsble_cp6,
idesta_revi_respsble_cp6: this.EditDataRest[0].idesta_revi_respsble_cp6,
revi_respsble_obs_cp6: this.EditDataRest[0].revi_respsble_obs_cp6,
ins_bor_aj_rev_cp6: this.EditDataRest[0].ins_bor_aj_rev_cp6,
ins_bor_me_val_cp6: this.EditDataRest[0].ins_bor_me_val_cp6,
ins_bor_me_rev_cp6: this.EditDataRest[0].ins_bor_me_rev_cp6,
ins_cab_aj_rev_cp6: this.EditDataRest[0].ins_cab_aj_rev_cp6,
ins_cab_me_val_cp6: this.EditDataRest[0].ins_cab_me_val_cp6,
ins_cab_me_rev_cp6: this.EditDataRest[0].ins_cab_me_rev_cp6,
ins_ent_ve1_rev_cp6: this.EditDataRest[0].ins_ent_ve1_rev_cp6,
ins_ent_ve2_rev_cp6: this.EditDataRest[0].ins_ent_ve2_rev_cp6,
pru_rea_gi_rev_cp6: this.EditDataRest[0].pru_rea_gi_rev_cp6,
pru_rea_co_val_cp6: this.EditDataRest[0].pru_rea_co_val_cp6,
pru_rea_co_rev_cp6: this.EditDataRest[0].pru_rea_co_rev_cp6,
ban_pru_pr_rev_cp6: this.EditDataRest[0].ban_pru_pr_rev_cp6,
rev_fin_rev_rev_cp6: this.EditDataRest[0].rev_fin_rev_rev_cp6,
rev_fin_med_val_cp6: this.EditDataRest[0].rev_fin_med_val_cp6,
rev_fin_med_rev_cp6: this.EditDataRest[0].rev_fin_med_rev_cp6,
rev_fin_ins_rev_cp6: this.EditDataRest[0].rev_fin_ins_rev_cp6,
rev_fin_revaju_rev_cp6: this.EditDataRest[0].rev_fin_revaju_rev_cp6,
rev_fin_pint_rev_cp6: this.EditDataRest[0].rev_fin_pint_rev_cp6,
rev_fin_inst_rev_cp6: this.EditDataRest[0].rev_fin_inst_rev_cp6,

ins_bor_apl:this.EditDataRest[0].ins_bor_apl == '1' ? false : true,
              ins_cab_apl:this.EditDataRest[0].ins_cab_apl == '1' ? false : true,
              // ins_ent_apl:this.EditDataRest[0].ins_ent_apl == '1' ? false : true,
              // pru_rea_apl:this.EditDataRest[0].pru_rea_apl == '1' ? false : true,
              // ban_pru_apl:this.EditDataRest[0].ban_pru_apl == '1' ? false : true,
              // rev_fin_apl:this.EditDataRest[0].rev_fin_apl == '1' ? false : true,
              checklist_paso6_apli: this.globalVal.checklist_paso6_apli


            });

let event: any;
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso6.controls['ins_bor_apl'].value,
                },
              };
              this.toggle1(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso6.controls['ins_cab_apl'].value,
                },
              };
              this.toggle2(event);


            //console.log(this.FormCheckListPaso6.value);

          } catch (error) {
            console.log('error:::>', error);
            this.loadingController.dismiss();
          }

        }).finally(() => {
          this.loadingController.dismiss();

        });
      });
  }

  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso6.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: this.tituloAlert,
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
                this.FormCheckListPaso6.controls["idsuper_respsble_cp6"].setValue(
                  this.IdUsuarioLocal
                );
              }

                                                     ///////////////////////////////////////////////////////////////////
const loading = this.loadingController.create({
  message: 'Guardando Paso 6...',
  translucent: true//,
  //cssClass: 'custom-class custom-loading'
}).then(
  loading => {
    loading.present();
  });


              this.ApiService
                .GuardarFormPaso6(this.FormCheckListPaso6.value)
                .then((res) => {
                  console.log("res:::>>>>>>>>>", res);
                  console.log(this.ApiService.confirmSaveBd);
                  this.FormCheckListPaso6.controls["idchecklistpaso6"].setValue(
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


      for (let i in this.FormCheckListPaso6.controls) {
        this.FormCheckListPaso6.controls[i].setValue(
          this.FormCheckListPaso6.controls[i].value
        );
        this.FormCheckListPaso6.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: this.tituloAlert,
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
        header:this.tituloAlert,
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
          //console.log("aceptaPop::::>>", aceptaPop);
          if (aceptaPop.role == "A") {
                                                                 ///////////////////////////////////////////////////////////////////
const loading = this.loadingController.create({
  message: 'Guardando Paso 6...',
  translucent: true//,
  //cssClass: 'custom-class custom-loading'
}).then(
  loading => {
    loading.present();
  });

            this.ApiService
              .GuardarFormPaso6(this.FormCheckListPaso6.value)
              .then((res) => {
                //console.log('res::::::despues de guardar',res);
                //console.log(this.ApiService.confirmRequest);
                this.FormCheckListPaso6.controls["idchecklistpaso6"].setValue(
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
        message: 'Guardando Paso 5...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    //this.idchecklistcab = this.globalVal.idchecklistcab;
    this.FormCheckListPaso6.controls['idchecklistcab_paso6'].setValue(
      this.idchecklistcab
    );
    this.globalVal.checklist_paso6_apli = event.detail['checked'] ? '0' : '1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      6,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso6.controls["idchecklistpaso1"].setValue(
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
    if (event.detail['checked']) {
      this.FormCheckListPaso6.get('ins_bor_apl').setValue(true);
      this.FormCheckListPaso6.get('ins_bor_apl').enable();
      this.FormCheckListPaso6.get('ins_cab_apl').enable();
      this.FormCheckListPaso6.get('ins_cab_apl').setValue(true);

      // this.FormCheckListPaso6.get('ins_ent_apl').enable();
      // this.FormCheckListPaso6.get('ins_ent_apl').setValue(true);
      // this.FormCheckListPaso6.get('pru_rea_apl').enable();
      // this.FormCheckListPaso6.get('pru_rea_apl').setValue(true);
      // this.FormCheckListPaso6.get('ban_pru_apl').enable();
      // this.FormCheckListPaso6.get('ban_pru_apl').setValue(true);
      // this.FormCheckListPaso6.get('rev_fin_apl').enable();
      // this.FormCheckListPaso6.get('rev_fin_apl').setValue(true);
      // this.FormCheckListPaso6.get('ani_dif_apl').enable();
      // this.FormCheckListPaso6.get('ani_dif_apl').setValue(true);
      // this.FormCheckListPaso6.get('col_bas_apl').enable();
      // this.FormCheckListPaso6.get('col_bas_apl').setValue(true);
      // this.FormCheckListPaso6.get('agitador_apl').enable();
      // this.FormCheckListPaso6.get('agitador_apl').setValue(true);
      this.FormCheckListPaso6.get('idestado_revi_paso6_cp6').enable();

    } else {
      this.FormCheckListPaso6.get('ins_bor_apl').disable();
      this.FormCheckListPaso6.get('ins_bor_apl').setValue(true);
      this.FormCheckListPaso6.get('ins_cab_apl').disable();
      this.FormCheckListPaso6.get('ins_cab_apl').setValue(true);
      // this.FormCheckListPaso6.get('ins_ent_apl').disable();
      // this.FormCheckListPaso6.get('ins_ent_apl').setValue(true);
      // this.FormCheckListPaso6.get('pru_rea_apl').disable();
      // this.FormCheckListPaso6.get('pru_rea_apl').setValue(true);
      // this.FormCheckListPaso6.get('ban_pru_apl').disable();
      // this.FormCheckListPaso6.get('ban_pru_apl').setValue(true);
      // this.FormCheckListPaso6.get('rev_fin_apl').disable();
      // this.FormCheckListPaso6.get('rev_fin_apl').setValue(true);
      // this.FormCheckListPaso6.get('ani_dif_apl').disable();
      // this.FormCheckListPaso6.get('ani_dif_apl').setValue(true);
      // this.FormCheckListPaso6.get('col_bas_apl').disable();
      // this.FormCheckListPaso6.get('col_bas_apl').setValue(true);
      // this.FormCheckListPaso6.get('agitador_apl').disable();
      // this.FormCheckListPaso6.get('agitador_apl').setValue(true);
      this.FormCheckListPaso6.get('idestado_revi_paso6_cp6').disable();
    }
    this.toggle1(event);
    this.toggle2(event);
    // this.toggle3(event);
    // this.toggle4(event);
    // this.toggle5(event);
    // this.toggle6(event);
    // this.toggle7(event);
    // this.toggle8(event);
    // this.toggle9(event);
  }

  toggle1(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso6.get('ins_bor_aj_rev_cp6').enable();
      this.FormCheckListPaso6.get('ins_bor_me_val_cp6').enable();
      this.FormCheckListPaso6.get('ins_bor_me_rev_cp6').enable();
      // this.FormCheckListPaso6.get('dif_sup_par_lis_cp5').enable();
      // this.FormCheckListPaso6.get('dif_sup_prov_cp5').enable();
      // this.FormCheckListPaso6.get('dif_sup_obs_cp5').enable();
    } else {
      this.FormCheckListPaso6.get('ins_bor_aj_rev_cp6').disable();
      this.FormCheckListPaso6.get('ins_bor_me_val_cp6').disable();
      this.FormCheckListPaso6.get('ins_bor_me_rev_cp6').disable();
      // this.FormCheckListPaso6.get('dif_sup_par_lis_cp5').disable();
      // this.FormCheckListPaso6.get('dif_sup_prov_cp5').disable();
      // this.FormCheckListPaso6.get('dif_sup_obs_cp5').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso6.get('ins_cab_aj_rev_cp6').enable();
      this.FormCheckListPaso6.get('ins_cab_me_val_cp6').enable();
      this.FormCheckListPaso6.get('ins_cab_me_rev_cp6').enable();
      // this.FormCheckListPaso6.get('impuls_par_lis_cp5').enable();
      // this.FormCheckListPaso6.get('impuls_prov_cp5').enable();
      // this.FormCheckListPaso6.get('impuls_obs_cp5').enable();
    } else {
      this.FormCheckListPaso6.get('ins_cab_aj_rev_cp6').disable();
      this.FormCheckListPaso6.get('ins_cab_me_val_cp6').disable();
      this.FormCheckListPaso6.get('ins_cab_me_rev_cp6').disable();
      // this.FormCheckListPaso6.get('impuls_par_lis_cp5').disable();
      // this.FormCheckListPaso6.get('impuls_prov_cp5').disable();
      // this.FormCheckListPaso6.get('impuls_obs_cp5').disable();
    }
  }


  ionViewWillEnter() {
    this.checklist_paso6_apli_ck =
      this.globalVal.checklist_paso6_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso6_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);
    this.FormCheckListPaso6.controls['checklist_paso6_apli'].setValue(
      this.checklist_paso6_apli_ck
    );
  }


}
