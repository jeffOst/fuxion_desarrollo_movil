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
  selector: 'app-mtto-checklist-win-montaje4',
  templateUrl: './mtto-checklist-win-montaje4.page.html',
  styleUrls: ['./mtto-checklist-win-montaje4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoChecklistWinMontaje4Page implements OnInit {
  FormCheckListPaso4: UntypedFormGroup;
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
  tituloAlert: string = "INSTALACION DE SELLOS MECANICOS";
  checklist_paso4_apli_ck: boolean = true;
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
    this.FormCheckListPaso4 = this.formBuilder.group({
      idchecklistpaso4: [''],
      idchecklistcab_paso4: ['', Validators.required],
      idestado_revi_paso4_cp4: ['', Validators.required],
      idsuper_respsble_cp4: [''],
      fch_revi_respsble_cp4: [''],
      idesta_revi_respsble_cp4: [''],
      revi_respsble_obs_cp4: [''],
      sel_sup_condic_cp4: ['', Validators.required],
      sel_sup_estatu_cp4: ['', Validators.required],
      sel_sup_compre_cp4: ['', Validators.required],
      sel_sup_part_list_cp4: ['', Validators.required],
      sel_sup_tipo_cp4: ['', Validators.required],
      sel_sup_obse_cp4: [''],

      sel_int_condic_cp4: [''],//,Validators.required
      sel_int_estatu_cp4: [''],//,Validators.required
      sel_int_compre_cp4: [''],//,Validators.required
      sel_int_part_list_cp4: [''],//,Validators.required
      sel_int_tipo_cp4: [''],//,Validators.required
      sel_int_obse_cp4: [''],

      sel_infe_condic_cp4: ['', Validators.required],
      sel_infe_estatu_cp4: ['', Validators.required],
      sel_infe_compre_cp4: ['', Validators.required],
      sel_infe_part_list_cp4: ['', Validators.required],
      sel_infe_tipo_cp4: ['', Validators.required],
      sel_infe_obse_cp4: [''],
      pru_her_ejec_cp4: [''],
      pru_her_valor_cp4: [''],
      pru_her_fch_ejec_cp4: [''],
      pre_pru_ejec_cp4: [''],
      pre_pru_fch_ejec_cp4: [''],
      lle_cam_ejec_cp4: [''],
      lle_cam_fch_ejec_cp4: [''],

      checklist_paso4_apli: [''],
      sel_sup_apl: [''],
      sel_int_apl: [''],
      sel_infe_apl: [''],
      pru_her_apl: [''],
      pre_pru_apl: [''],
      lle_cam_apl: ['']

    });

    this.idchecklistcab = globalVal.idchecklistcab
    this.FormCheckListPaso4.controls["idchecklistcab_paso4"].setValue(
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
        this.ApiService.FormFindPaso4(this.idchecklistcab, '1', 'H').then((rest) => {
          this.EditDataRest = rest;
          try {
            this.FormCheckListPaso4.setValue({

              idchecklistpaso4: this.EditDataRest[0].idchecklistpaso4,
              idchecklistcab_paso4: this.EditDataRest[0].idchecklistcab_paso4,
              idestado_revi_paso4_cp4: this.EditDataRest[0].idestado_revi_paso4_cp4,
              idsuper_respsble_cp4: this.EditDataRest[0].idsuper_respsble_cp4,
              fch_revi_respsble_cp4: this.EditDataRest[0].fch_revi_respsble_cp4,
              idesta_revi_respsble_cp4: this.EditDataRest[0].idesta_revi_respsble_cp4,
              revi_respsble_obs_cp4: this.EditDataRest[0].revi_respsble_obs_cp4,
              sel_sup_condic_cp4: this.EditDataRest[0].sel_sup_condic_cp4,
              sel_sup_estatu_cp4: this.EditDataRest[0].sel_sup_estatu_cp4,
              sel_sup_compre_cp4: this.EditDataRest[0].sel_sup_compre_cp4,
              sel_sup_part_list_cp4: this.EditDataRest[0].sel_sup_part_list_cp4,
              sel_sup_tipo_cp4: this.EditDataRest[0].sel_sup_tipo_cp4,
              sel_sup_obse_cp4: this.EditDataRest[0].sel_sup_obse_cp4,
              sel_int_condic_cp4: this.EditDataRest[0].sel_int_condic_cp4,
              sel_int_estatu_cp4: this.EditDataRest[0].sel_int_estatu_cp4,
              sel_int_compre_cp4: this.EditDataRest[0].sel_int_compre_cp4,
              sel_int_part_list_cp4: this.EditDataRest[0].sel_int_part_list_cp4,
              sel_int_tipo_cp4: this.EditDataRest[0].sel_int_tipo_cp4,
              sel_int_obse_cp4: this.EditDataRest[0].sel_int_obse_cp4,
              sel_infe_condic_cp4: this.EditDataRest[0].sel_infe_condic_cp4,
              sel_infe_estatu_cp4: this.EditDataRest[0].sel_infe_estatu_cp4,
              sel_infe_compre_cp4: this.EditDataRest[0].sel_infe_compre_cp4,
              sel_infe_part_list_cp4: this.EditDataRest[0].sel_infe_part_list_cp4,
              sel_infe_tipo_cp4: this.EditDataRest[0].sel_infe_tipo_cp4,
              sel_infe_obse_cp4: this.EditDataRest[0].sel_infe_obse_cp4,
              pru_her_ejec_cp4: this.EditDataRest[0].pru_her_ejec_cp4,
              pru_her_valor_cp4: this.EditDataRest[0].pru_her_valor_cp4,
              pru_her_fch_ejec_cp4: this.EditDataRest[0].pru_her_fch_ejec_cp4,
              pre_pru_ejec_cp4: this.EditDataRest[0].pre_pru_ejec_cp4,
              pre_pru_fch_ejec_cp4: this.EditDataRest[0].pre_pru_fch_ejec_cp4,
              lle_cam_ejec_cp4: this.EditDataRest[0].lle_cam_ejec_cp4,
              lle_cam_fch_ejec_cp4: this.EditDataRest[0].lle_cam_fch_ejec_cp4,

              sel_sup_apl:this.EditDataRest[0].sel_sup_apl == '1' ? false : true,
              sel_int_apl:this.EditDataRest[0].sel_int_apl == '1' ? false : true,
              sel_infe_apl:this.EditDataRest[0].sel_infe_apl == '1' ? false : true,
              pru_her_apl:this.EditDataRest[0].pru_her_apl == '1' ? false : true,
              pre_pru_apl:this.EditDataRest[0].pre_pru_apl == '1' ? false : true,
              lle_cam_apl:this.EditDataRest[0].lle_cam_apl == '1' ? false : true,
              checklist_paso4_apli: this.globalVal.checklist_paso4_apli
            });

            let event: any;
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['sel_sup_apl'].value,
                },
              };
              this.toggle1(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['sel_int_apl'].value,
                },
              };
              this.toggle2(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['sel_infe_apl'].value,
                },
              };
              this.toggle3(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['pru_her_apl'].value,
                },
              };
              this.toggle4(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['pre_pru_apl'].value,
                },
              };
              this.toggle5(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso4.controls['lle_cam_apl'].value,
                },
              };
              this.toggle6(event);

          } catch (error) {
            console.log('error:::>', error);
          }

        }).finally(() => {
          this.loadingController.dismiss();

        });
      });
  }

  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso4.valid) {
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
                this.FormCheckListPaso4.controls["idsuper_respsble_cp4"].setValue(
                  this.IdUsuarioLocal
                );
              }

              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController.create({
                message: 'Guardando Paso 4...',
                translucent: true//,
                //cssClass: 'custom-class custom-loading'
              }).then(
                loading => {
                  loading.present();
                });

              this.ApiService
                .GuardarFormPaso4(this.FormCheckListPaso4.value)
                .then((res) => {
                  this.FormCheckListPaso4.controls["idchecklistpaso4"].setValue(
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


      for (let i in this.FormCheckListPaso4.controls) {
        this.FormCheckListPaso4.controls[i].setValue(
          this.FormCheckListPaso4.controls[i].value
        );
        this.FormCheckListPaso4.controls[i].markAsTouched();
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
              message: 'Guardando Paso 4...',
              translucent: true//,
              //cssClass: 'custom-class custom-loading'
            }).then(
              loading => {
                loading.present();
              });

            this.ApiService
              .GuardarFormPaso4(this.FormCheckListPaso4.value)
              .then((res) => {
                this.FormCheckListPaso4.controls["idchecklistpaso4"].setValue(
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
        message: 'Guardando Paso 4...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    //this.idchecklistcab = this.globalVal.idchecklistcab;
    this.FormCheckListPaso4.controls['idchecklistcab_paso4'].setValue(
      this.idchecklistcab
    );
    this.globalVal.checklist_paso4_apli = event.detail['checked'] ? '0' : '1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      4,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso4.controls["idchecklistpaso1"].setValue(
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
      this.FormCheckListPaso4.get('sel_sup_apl').setValue(true);
      this.FormCheckListPaso4.get('sel_sup_apl').enable();
      this.FormCheckListPaso4.get('sel_int_apl').enable();
      this.FormCheckListPaso4.get('sel_int_apl').setValue(true);
      this.FormCheckListPaso4.get('sel_infe_apl').enable();
      this.FormCheckListPaso4.get('sel_infe_apl').setValue(true);
      this.FormCheckListPaso4.get('pru_her_apl').enable();
      this.FormCheckListPaso4.get('pru_her_apl').setValue(true);
      this.FormCheckListPaso4.get('pre_pru_apl').enable();
      this.FormCheckListPaso4.get('pre_pru_apl').setValue(true);
      this.FormCheckListPaso4.get('lle_cam_apl').enable();
      this.FormCheckListPaso4.get('lle_cam_apl').setValue(true);
      this.FormCheckListPaso4.get('idestado_revi_paso4_cp4').enable();


    } else {
      this.FormCheckListPaso4.get('sel_sup_apl').disable();
      this.FormCheckListPaso4.get('sel_sup_apl').setValue(true);
      this.FormCheckListPaso4.get('sel_int_apl').disable();
      this.FormCheckListPaso4.get('sel_int_apl').setValue(true);
      this.FormCheckListPaso4.get('sel_infe_apl').disable();
      this.FormCheckListPaso4.get('sel_infe_apl').setValue(true);
      this.FormCheckListPaso4.get('pru_her_apl').disable();
      this.FormCheckListPaso4.get('pru_her_apl').setValue(true);
      this.FormCheckListPaso4.get('pre_pru_apl').disable();
      this.FormCheckListPaso4.get('pre_pru_apl').setValue(true);
      this.FormCheckListPaso4.get('lle_cam_apl').disable();
      this.FormCheckListPaso4.get('lle_cam_apl').setValue(true);
      this.FormCheckListPaso4.get('idestado_revi_paso4_cp4').disable();
    }
    this.toggle1(event);
    this.toggle2(event);
    this.toggle3(event);
    this.toggle4(event);
    this.toggle5(event);
    this.toggle6(event);
  }

  toggle1(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('sel_sup_condic_cp4').enable();
      this.FormCheckListPaso4.get('sel_sup_estatu_cp4').enable();
      this.FormCheckListPaso4.get('sel_sup_compre_cp4').enable();
      this.FormCheckListPaso4.get('sel_sup_part_list_cp4').enable();
      this.FormCheckListPaso4.get('sel_sup_tipo_cp4').enable();
      this.FormCheckListPaso4.get('sel_sup_obse_cp4').enable();
    } else {
      this.FormCheckListPaso4.get('sel_sup_condic_cp4').disable();
      this.FormCheckListPaso4.get('sel_sup_estatu_cp4').disable();
      this.FormCheckListPaso4.get('sel_sup_compre_cp4').disable();
      this.FormCheckListPaso4.get('sel_sup_part_list_cp4').disable();
      this.FormCheckListPaso4.get('sel_sup_tipo_cp4').disable();
      this.FormCheckListPaso4.get('sel_sup_obse_cp4').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('sel_int_condic_cp4').enable();
      this.FormCheckListPaso4.get('sel_int_estatu_cp4').enable();
      this.FormCheckListPaso4.get('sel_int_compre_cp4').enable();
      this.FormCheckListPaso4.get('sel_int_part_list_cp4').enable();
      this.FormCheckListPaso4.get('sel_int_tipo_cp4').enable();
      this.FormCheckListPaso4.get('sel_int_obse_cp4').enable();
    } else {
      this.FormCheckListPaso4.get('sel_int_condic_cp4').disable();
      this.FormCheckListPaso4.get('sel_int_estatu_cp4').disable();
      this.FormCheckListPaso4.get('sel_int_compre_cp4').disable();
      this.FormCheckListPaso4.get('sel_int_part_list_cp4').disable();
      this.FormCheckListPaso4.get('sel_int_tipo_cp4').disable();
      this.FormCheckListPaso4.get('sel_int_obse_cp4').disable();
    }
  }
  toggle3(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('sel_infe_condic_cp4').enable();
      this.FormCheckListPaso4.get('sel_infe_estatu_cp4').enable();
      this.FormCheckListPaso4.get('sel_infe_compre_cp4').enable();
      this.FormCheckListPaso4.get('sel_infe_part_list_cp4').enable();
      this.FormCheckListPaso4.get('sel_infe_tipo_cp4').enable();
      this.FormCheckListPaso4.get('sel_infe_obse_cp4').enable();
    } else {
      this.FormCheckListPaso4.get('sel_infe_condic_cp4').disable();
      this.FormCheckListPaso4.get('sel_infe_estatu_cp4').disable();
      this.FormCheckListPaso4.get('sel_infe_compre_cp4').disable();
      this.FormCheckListPaso4.get('sel_infe_part_list_cp4').disable();
      this.FormCheckListPaso4.get('sel_infe_tipo_cp4').disable();
      this.FormCheckListPaso4.get('sel_infe_obse_cp4').disable();
    }
  }
  toggle4(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('pru_her_ejec_cp4').enable();
      // this.FormCheckListPaso4.get('pre_pru_ejec_cp4').enable();
      // this.FormCheckListPaso4.get('rod_sup_eng_rod_cp3').enable();
      // this.FormCheckListPaso4.get('rod_sup_estatu_cp3').enable();
      // this.FormCheckListPaso4.get('rod_sup_conf_part_cp3').enable();
      // this.FormCheckListPaso4.get('rod_sup_observ_cp3').enable();
    } else {
      this.FormCheckListPaso4.get('pru_her_ejec_cp4').disable();
      // this.FormCheckListPaso4.get('pre_pru_ejec_cp4').disable();
      // this.FormCheckListPaso4.get('rod_sup_eng_rod_cp3').disable();
      // this.FormCheckListPaso4.get('rod_sup_estatu_cp3').disable();
      // this.FormCheckListPaso4.get('rod_sup_conf_part_cp3').disable();
      // this.FormCheckListPaso4.get('rod_sup_observ_cp3').disable();
    }
  }

  toggle5(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('pru_her_valor_cp4').enable();
      this.FormCheckListPaso4.get('pre_pru_ejec_cp4').enable();

    } else {
      this.FormCheckListPaso4.get('pru_her_valor_cp4').disable();
      this.FormCheckListPaso4.get('pre_pru_ejec_cp4').disable();

    }
  }

  toggle6(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso4.get('lle_cam_ejec_cp4').enable();

    } else {
      this.FormCheckListPaso4.get('lle_cam_ejec_cp4').disable();

    }
  }

  ionViewWillEnter() {
    this.checklist_paso4_apli_ck =
      this.globalVal.checklist_paso4_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso4_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);
    this.FormCheckListPaso4.controls['checklist_paso4_apli'].setValue(
      this.checklist_paso4_apli_ck
    );
  }

}

