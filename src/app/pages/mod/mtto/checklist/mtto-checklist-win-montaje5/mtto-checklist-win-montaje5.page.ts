//import { Component, OnInit } from '@angular/core';
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
  selector: 'app-mtto-checklist-win-montaje5',
  templateUrl: './mtto-checklist-win-montaje5.page.html',
  styleUrls: ['./mtto-checklist-win-montaje5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoChecklistWinMontaje5Page implements OnInit {
  FormCheckListPaso5: UntypedFormGroup;
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
  tituloAlert: string = "MONTAJE DE CAMARA HIDRAULICA";
  checklist_paso5_apli_ck: boolean = true;
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

    this.FormCheckListPaso5 = this.formBuilder.group({
      idchecklistpaso5: [''],
      idchecklistcab_paso5: [''],
      idestado_revi_paso5_cp5: [''],
      idsuper_respsble_cp5: [''],
      fch_revi_respsble_cp5: [''],
      idesta_revi_respsble_cp5: [''],
      revi_respsble_obs_cp5: [''],
      dif_sup_mat_cp5: ['', Validators.required],
      dif_sup_ver_cp5: ['', Validators.required],
      dif_sup_est_cp5: ['', Validators.required],
      dif_sup_par_lis_cp5: ['', Validators.required],
      dif_sup_luz_reg_cp5: [''],//, Validators.required
      dif_sup_prov_cp5: ['', Validators.required],
      dif_sup_obs_cp5: [''],
      impuls_mat_cp5: ['', Validators.required],
      impuls_ver_cp5: ['', Validators.required],
      impuls_est_cp5: ['', Validators.required],
      impuls_par_lis_cp5: ['', Validators.required],
      impuls_luz_reg_cp5: [''],////, Validators.required
      impuls_prov_cp5: ['', Validators.required],
      impuls_obs_cp5: [''],////debio ser con boton si o no pero se quito el requerido
      imp_2da_mat_cp5: [''],
      imp_2da_ver_cp5: [''],
      imp_2da_est_cp5: [''],
      imp_2da_par_lis_cp5: [''],
      imp_2da_luz_reg_cp5: [''],
      imp_2da_prov_cp5: [''],
      imp_2da_obs_cp5: [''],////fin
      cub_ext_mat_cp5: ['', Validators.required],
      cub_ext_ver_cp5: ['', Validators.required],
      cub_ext_est_cp5: ['', Validators.required],
      cub_ext_par_lis_cp5: ['', Validators.required],
      cub_ext_luz_reg_cp5: [''],///, Validators.required
      cub_ext_prov_cp5: ['', Validators.required],
      cub_ext_obs_cp5: [''],

      dif_inf_mat_cp5: [''],///',Validators.required],
      dif_inf_ver_cp5: [''],///',Validators.required],
      dif_inf_est_cp5: [''],///',Validators.required],
      dif_inf_par_lis_cp5: [''],///',Validators.required],
      dif_inf_luz_reg_cp5: [''],///',Validators.required],
      dif_inf_prov_cp5: [''],///',Validators.required],
      dif_inf_obs_cp5: [''],

      dif_suc_mat_cp5: [''],///',Validators.required],
      dif_suc_ver_cp5: [''],///',Validators.required],
      dif_suc_est_cp5: [''],///',Validators.required],
      dif_suc_par_lis_cp5: [''],///',Validators.required],
      dif_suc_luz_reg_cp5: [''],///',Validators.required],
      dif_suc_prov_cp5: [''],///',Validators.required],
      dif_suc_obs_cp5: [''],

      ani_dif_mat_cp5: [''],///, Validators.required],
      ani_dif_ver_cp5: [''],///, Validators.required],
      ani_dif_est_cp5: [''],///, Validators.required],
      ani_dif_par_lis_cp5: [''],///, Validators.required],
      ani_dif_luz_reg_cp5: [''],///, Validators.required],
      ani_dif_prov_cp5: [''],///, Validators.required],
      ani_dif_obs_cp5: [''],
      col_bas_mat_cp5: [''],///, Validators.required],
      col_bas_ver_cp5: [''],///, Validators.required],
      col_bas_est_cp5: [''],///, Validators.required],
      col_bas_par_lis_cp5: [''],///, Validators.required],
      col_bas_luz_reg_cp5: [''],///, Validators.required],
      col_bas_prov_cp5: [''],///, Validators.required],
      col_bas_obs_cp5: [''],

      agitador_mat_cp5: [''],///',Validators.required],
      agitador_ver_cp5: [''],///',Validators.required],
      agitador_est_cp5: [''],///',Validators.required],
      agitador_par_lis_cp5: [''],///',Validators.required],
      agitador_luz_reg_cp5: [''],///',Validators.required],
      agitador_prov_cp5: [''],///',Validators.required],
      agitador_obs_cp5: [''],

checklist_paso5_apli: [''],
dif_sup_apl: [''],
impuls_apl: [''],
imp_2da_apl: [''],
cub_ext_apl: [''],
dif_inf_apl: [''],
dif_suc_apl: [''],
ani_dif_apl: [''],
col_bas_apl: [''],
agitador_apl: ['']

    });

    this.idchecklistcab = globalVal.idchecklistcab
    this.FormCheckListPaso5.controls["idchecklistcab_paso5"].setValue(
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
        this.ApiService.FormFindPaso5(this.idchecklistcab, '1', 'H').then((rest) => {
          this.EditDataRest = rest;
          try {
            this.FormCheckListPaso5.setValue({

              idchecklistpaso5: this.EditDataRest[0].idchecklistpaso5,
              idchecklistcab_paso5: this.EditDataRest[0].idchecklistcab_paso5,
              idestado_revi_paso5_cp5: this.EditDataRest[0].idestado_revi_paso5_cp5,
              idsuper_respsble_cp5: this.EditDataRest[0].idsuper_respsble_cp5,
              fch_revi_respsble_cp5: this.EditDataRest[0].fch_revi_respsble_cp5,
              idesta_revi_respsble_cp5: this.EditDataRest[0].idesta_revi_respsble_cp5,
              revi_respsble_obs_cp5: this.EditDataRest[0].revi_respsble_obs_cp5,
              dif_sup_mat_cp5: this.EditDataRest[0].dif_sup_mat_cp5,
              dif_sup_ver_cp5: this.EditDataRest[0].dif_sup_ver_cp5,
              dif_sup_est_cp5: this.EditDataRest[0].dif_sup_est_cp5,
              dif_sup_par_lis_cp5: this.EditDataRest[0].dif_sup_par_lis_cp5,
              dif_sup_luz_reg_cp5: this.EditDataRest[0].dif_sup_luz_reg_cp5,
              dif_sup_prov_cp5: this.EditDataRest[0].dif_sup_prov_cp5,
              dif_sup_obs_cp5: this.EditDataRest[0].dif_sup_obs_cp5,
              impuls_mat_cp5: this.EditDataRest[0].impuls_mat_cp5,
              impuls_ver_cp5: this.EditDataRest[0].impuls_ver_cp5,
              impuls_est_cp5: this.EditDataRest[0].impuls_est_cp5,
              impuls_par_lis_cp5: this.EditDataRest[0].impuls_par_lis_cp5,
              impuls_luz_reg_cp5: this.EditDataRest[0].impuls_luz_reg_cp5,
              impuls_prov_cp5: this.EditDataRest[0].impuls_prov_cp5,
              impuls_obs_cp5: this.EditDataRest[0].impuls_obs_cp5,
              imp_2da_mat_cp5: this.EditDataRest[0].imp_2da_mat_cp5,
              imp_2da_ver_cp5: this.EditDataRest[0].imp_2da_ver_cp5,
              imp_2da_est_cp5: this.EditDataRest[0].imp_2da_est_cp5,
              imp_2da_par_lis_cp5: this.EditDataRest[0].imp_2da_par_lis_cp5,
              imp_2da_luz_reg_cp5: this.EditDataRest[0].imp_2da_luz_reg_cp5,
              imp_2da_prov_cp5: this.EditDataRest[0].imp_2da_prov_cp5,
              imp_2da_obs_cp5: this.EditDataRest[0].imp_2da_obs_cp5,
              cub_ext_mat_cp5: this.EditDataRest[0].cub_ext_mat_cp5,
              cub_ext_ver_cp5: this.EditDataRest[0].cub_ext_ver_cp5,
              cub_ext_est_cp5: this.EditDataRest[0].cub_ext_est_cp5,
              cub_ext_par_lis_cp5: this.EditDataRest[0].cub_ext_par_lis_cp5,
              cub_ext_luz_reg_cp5: this.EditDataRest[0].cub_ext_luz_reg_cp5,
              cub_ext_prov_cp5: this.EditDataRest[0].cub_ext_prov_cp5,
              cub_ext_obs_cp5: this.EditDataRest[0].cub_ext_obs_cp5,
              dif_inf_mat_cp5: this.EditDataRest[0].dif_inf_mat_cp5,
              dif_inf_ver_cp5: this.EditDataRest[0].dif_inf_ver_cp5,
              dif_inf_est_cp5: this.EditDataRest[0].dif_inf_est_cp5,
              dif_inf_par_lis_cp5: this.EditDataRest[0].dif_inf_par_lis_cp5,
              dif_inf_luz_reg_cp5: this.EditDataRest[0].dif_inf_luz_reg_cp5,
              dif_inf_prov_cp5: this.EditDataRest[0].dif_inf_prov_cp5,
              dif_inf_obs_cp5: this.EditDataRest[0].dif_inf_obs_cp5,
              dif_suc_mat_cp5: this.EditDataRest[0].dif_suc_mat_cp5,
              dif_suc_ver_cp5: this.EditDataRest[0].dif_suc_ver_cp5,
              dif_suc_est_cp5: this.EditDataRest[0].dif_suc_est_cp5,
              dif_suc_par_lis_cp5: this.EditDataRest[0].dif_suc_par_lis_cp5,
              dif_suc_luz_reg_cp5: this.EditDataRest[0].dif_suc_luz_reg_cp5,
              dif_suc_prov_cp5: this.EditDataRest[0].dif_suc_prov_cp5,
              dif_suc_obs_cp5: this.EditDataRest[0].dif_suc_obs_cp5,
              ani_dif_mat_cp5: this.EditDataRest[0].ani_dif_mat_cp5,
              ani_dif_ver_cp5: this.EditDataRest[0].ani_dif_ver_cp5,
              ani_dif_est_cp5: this.EditDataRest[0].ani_dif_est_cp5,
              ani_dif_par_lis_cp5: this.EditDataRest[0].ani_dif_par_lis_cp5,
              ani_dif_luz_reg_cp5: this.EditDataRest[0].ani_dif_luz_reg_cp5,
              ani_dif_prov_cp5: this.EditDataRest[0].ani_dif_prov_cp5,
              ani_dif_obs_cp5: this.EditDataRest[0].ani_dif_obs_cp5,
              col_bas_mat_cp5: this.EditDataRest[0].col_bas_mat_cp5,
              col_bas_ver_cp5: this.EditDataRest[0].col_bas_ver_cp5,
              col_bas_est_cp5: this.EditDataRest[0].col_bas_est_cp5,
              col_bas_par_lis_cp5: this.EditDataRest[0].col_bas_par_lis_cp5,
              col_bas_luz_reg_cp5: this.EditDataRest[0].col_bas_luz_reg_cp5,
              col_bas_prov_cp5: this.EditDataRest[0].col_bas_prov_cp5,
              col_bas_obs_cp5: this.EditDataRest[0].col_bas_obs_cp5,
              agitador_mat_cp5: this.EditDataRest[0].agitador_mat_cp5,
              agitador_ver_cp5: this.EditDataRest[0].agitador_ver_cp5,
              agitador_est_cp5: this.EditDataRest[0].agitador_est_cp5,
              agitador_par_lis_cp5: this.EditDataRest[0].agitador_par_lis_cp5,
              agitador_luz_reg_cp5: this.EditDataRest[0].agitador_luz_reg_cp5,
              agitador_prov_cp5: this.EditDataRest[0].agitador_prov_cp5,
              agitador_obs_cp5: this.EditDataRest[0].agitador_obs_cp5,

              dif_sup_apl:this.EditDataRest[0].dif_sup_apl == '1' ? false : true,
              impuls_apl:this.EditDataRest[0].impuls_apl == '1' ? false : true,
              imp_2da_apl:this.EditDataRest[0].imp_2da_apl == '1' ? false : true,
              cub_ext_apl:this.EditDataRest[0].cub_ext_apl == '1' ? false : true,
              dif_inf_apl:this.EditDataRest[0].dif_inf_apl == '1' ? false : true,
              dif_suc_apl:this.EditDataRest[0].dif_suc_apl == '1' ? false : true,
              ani_dif_apl:this.EditDataRest[0].ani_dif_apl == '1' ? false : true,
              col_bas_apl:this.EditDataRest[0].col_bas_apl == '1' ? false : true,
              agitador_apl:this.EditDataRest[0].agitador_apl == '1' ? false : true,
              checklist_paso5_apli: this.globalVal.checklist_paso5_apli
            });

            let event: any;
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['dif_sup_apl'].value,
                },
              };
              this.toggle1(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['impuls_apl'].value,
                },
              };
              this.toggle2(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['imp_2da_apl'].value,
                },
              };
              this.toggle3(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['cub_ext_apl'].value,
                },
              };
              this.toggle4(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['dif_inf_apl'].value,
                },
              };
              this.toggle5(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['dif_suc_apl'].value,
                },
              };
              this.toggle6(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['ani_dif_apl'].value,
                },
              };
              this.toggle7(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['col_bas_apl'].value,
                },
              };
              this.toggle8(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso5.controls['agitador_apl'].value,
                },
              };
              this.toggle9(event);

          } catch (error) {
            console.log('error:::>', error);
          }

        }).finally(() => {
          this.loadingController.dismiss();

        });
      });
  }

  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso5.valid) {
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
                this.FormCheckListPaso5.controls["idsuper_respsble_cp5"].setValue(
                  this.IdUsuarioLocal
                );
              }

              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController.create({
                message: 'Guardando Paso 5...',
                translucent: true//,
                //cssClass: 'custom-class custom-loading'
              }).then(
                loading => {
                  loading.present();
                });

              this.ApiService
                .GuardarFormPaso5(this.FormCheckListPaso5.value)
                .then((res) => {
                  this.FormCheckListPaso5.controls["idchecklistpaso5"].setValue(
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


      for (let i in this.FormCheckListPaso5.controls) {
        this.FormCheckListPaso5.controls[i].setValue(
          this.FormCheckListPaso5.controls[i].value
        );
        this.FormCheckListPaso5.controls[i].markAsTouched();
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
          //console.log("aceptaPop::::>>", aceptaPop);
          if (aceptaPop.role == "A") {
            ///////////////////////////////////////////////////////////////////
            const loading = this.loadingController.create({
              message: 'Guardando Paso 5...',
              translucent: true//,
              //cssClass: 'custom-class custom-loading'
            }).then(
              loading => {
                loading.present();
              });


            this.ApiService
              .GuardarFormPaso5(this.FormCheckListPaso5.value)
              .then((res) => {
                this.loadingController.dismiss();
                alert('Guardado correctamente.');

                this.FormCheckListPaso5.controls["idchecklistpaso5"].setValue(
                  this.ApiService.confirmSaveBd
                );

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
    this.FormCheckListPaso5.controls['idchecklistcab_paso5'].setValue(
      this.idchecklistcab
    );
    this.globalVal.checklist_paso5_apli = event.detail['checked'] ? '0' : '1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      5,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso5.controls["idchecklistpaso1"].setValue(
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
      this.FormCheckListPaso5.get('dif_sup_apl').setValue(true);
      this.FormCheckListPaso5.get('dif_sup_apl').enable();
      this.FormCheckListPaso5.get('impuls_apl').enable();
      this.FormCheckListPaso5.get('impuls_apl').setValue(true);
      this.FormCheckListPaso5.get('imp_2da_apl').enable();
      this.FormCheckListPaso5.get('imp_2da_apl').setValue(true);
      this.FormCheckListPaso5.get('cub_ext_apl').enable();
      this.FormCheckListPaso5.get('cub_ext_apl').setValue(true);
      this.FormCheckListPaso5.get('dif_inf_apl').enable();
      this.FormCheckListPaso5.get('dif_inf_apl').setValue(true);
      this.FormCheckListPaso5.get('dif_suc_apl').enable();
      this.FormCheckListPaso5.get('dif_suc_apl').setValue(true);
      this.FormCheckListPaso5.get('ani_dif_apl').enable();
      this.FormCheckListPaso5.get('ani_dif_apl').setValue(true);
      this.FormCheckListPaso5.get('col_bas_apl').enable();
      this.FormCheckListPaso5.get('col_bas_apl').setValue(true);
      this.FormCheckListPaso5.get('agitador_apl').enable();
      this.FormCheckListPaso5.get('agitador_apl').setValue(true);
      this.FormCheckListPaso5.get('idestado_revi_paso5_cp5').enable();


    } else {
      this.FormCheckListPaso5.get('dif_sup_apl').disable();
      this.FormCheckListPaso5.get('dif_sup_apl').setValue(true);
      this.FormCheckListPaso5.get('impuls_apl').disable();
      this.FormCheckListPaso5.get('impuls_apl').setValue(true);
      this.FormCheckListPaso5.get('imp_2da_apl').disable();
      this.FormCheckListPaso5.get('imp_2da_apl').setValue(true);
      this.FormCheckListPaso5.get('cub_ext_apl').disable();
      this.FormCheckListPaso5.get('cub_ext_apl').setValue(true);
      this.FormCheckListPaso5.get('dif_inf_apl').disable();
      this.FormCheckListPaso5.get('dif_inf_apl').setValue(true);
      this.FormCheckListPaso5.get('dif_suc_apl').disable();
      this.FormCheckListPaso5.get('dif_suc_apl').setValue(true);
      this.FormCheckListPaso5.get('ani_dif_apl').disable();
      this.FormCheckListPaso5.get('ani_dif_apl').setValue(true);
      this.FormCheckListPaso5.get('col_bas_apl').disable();
      this.FormCheckListPaso5.get('col_bas_apl').setValue(true);
      this.FormCheckListPaso5.get('agitador_apl').disable();
      this.FormCheckListPaso5.get('agitador_apl').setValue(true);
      this.FormCheckListPaso5.get('idestado_revi_paso5_cp5').disable();
    }
    this.toggle1(event);
    this.toggle2(event);
    this.toggle3(event);
    this.toggle4(event);
    this.toggle5(event);
    this.toggle6(event);
    this.toggle7(event);
    this.toggle8(event);
    this.toggle9(event);
  }

  toggle1(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('dif_sup_mat_cp5').enable();
      this.FormCheckListPaso5.get('dif_sup_ver_cp5').enable();
      this.FormCheckListPaso5.get('dif_sup_est_cp5').enable();
      this.FormCheckListPaso5.get('dif_sup_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('dif_sup_prov_cp5').enable();
      this.FormCheckListPaso5.get('dif_sup_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('dif_sup_mat_cp5').disable();
      this.FormCheckListPaso5.get('dif_sup_ver_cp5').disable();
      this.FormCheckListPaso5.get('dif_sup_est_cp5').disable();
      this.FormCheckListPaso5.get('dif_sup_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('dif_sup_prov_cp5').disable();
      this.FormCheckListPaso5.get('dif_sup_obs_cp5').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('impuls_mat_cp5').enable();
      this.FormCheckListPaso5.get('impuls_ver_cp5').enable();
      this.FormCheckListPaso5.get('impuls_est_cp5').enable();
      this.FormCheckListPaso5.get('impuls_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('impuls_prov_cp5').enable();
      this.FormCheckListPaso5.get('impuls_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('impuls_mat_cp5').disable();
      this.FormCheckListPaso5.get('impuls_ver_cp5').disable();
      this.FormCheckListPaso5.get('impuls_est_cp5').disable();
      this.FormCheckListPaso5.get('impuls_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('impuls_prov_cp5').disable();
      this.FormCheckListPaso5.get('impuls_obs_cp5').disable();
    }
  }
  toggle3(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('imp_2da_mat_cp5').enable();
      this.FormCheckListPaso5.get('imp_2da_ver_cp5').enable();
      this.FormCheckListPaso5.get('imp_2da_est_cp5').enable();
      this.FormCheckListPaso5.get('imp_2da_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('imp_2da_prov_cp5').enable();
      this.FormCheckListPaso5.get('imp_2da_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('imp_2da_mat_cp5').disable();
      this.FormCheckListPaso5.get('imp_2da_ver_cp5').disable();
      this.FormCheckListPaso5.get('imp_2da_est_cp5').disable();
      this.FormCheckListPaso5.get('imp_2da_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('imp_2da_prov_cp5').disable();
      this.FormCheckListPaso5.get('imp_2da_obs_cp5').disable();
    }
  }
  toggle4(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('cub_ext_mat_cp5').enable();
      this.FormCheckListPaso5.get('cub_ext_ver_cp5').enable();
      this.FormCheckListPaso5.get('cub_ext_est_cp5').enable();
      this.FormCheckListPaso5.get('cub_ext_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('cub_ext_prov_cp5').enable();
      this.FormCheckListPaso5.get('cub_ext_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('cub_ext_mat_cp5').disable();
      this.FormCheckListPaso5.get('cub_ext_ver_cp5').disable();
      this.FormCheckListPaso5.get('cub_ext_est_cp5').disable();
      this.FormCheckListPaso5.get('cub_ext_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('cub_ext_prov_cp5').disable();
      this.FormCheckListPaso5.get('cub_ext_obs_cp5').disable();
    }
  }

  toggle5(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('dif_inf_mat_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_ver_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_est_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_luz_reg_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_prov_cp5').enable();
      this.FormCheckListPaso5.get('dif_inf_obs_cp5').enable();

    } else {
      this.FormCheckListPaso5.get('dif_inf_mat_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_ver_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_est_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_luz_reg_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_prov_cp5').disable();
      this.FormCheckListPaso5.get('dif_inf_obs_cp5').disable();

    }
  }

  toggle6(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('dif_suc_mat_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_ver_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_est_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_luz_reg_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_prov_cp5').enable();
      this.FormCheckListPaso5.get('dif_suc_obs_cp5').enable();

    } else {
      this.FormCheckListPaso5.get('dif_suc_mat_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_ver_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_est_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_luz_reg_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_prov_cp5').disable();
      this.FormCheckListPaso5.get('dif_suc_obs_cp5').disable();
    }
  }

  toggle7(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('ani_dif_mat_cp5').enable();
      this.FormCheckListPaso5.get('ani_dif_ver_cp5').enable();
      this.FormCheckListPaso5.get('ani_dif_est_cp5').enable();
      this.FormCheckListPaso5.get('ani_dif_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('ani_dif_prov_cp5').enable();
      this.FormCheckListPaso5.get('ani_dif_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('ani_dif_mat_cp5').disable();
      this.FormCheckListPaso5.get('ani_dif_ver_cp5').disable();
      this.FormCheckListPaso5.get('ani_dif_est_cp5').disable();
      this.FormCheckListPaso5.get('ani_dif_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('ani_dif_prov_cp5').disable();
      this.FormCheckListPaso5.get('ani_dif_obs_cp5').disable();
    }
  }

  toggle8(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('col_bas_mat_cp5').enable();
      this.FormCheckListPaso5.get('col_bas_ver_cp5').enable();
      this.FormCheckListPaso5.get('col_bas_est_cp5').enable();
      this.FormCheckListPaso5.get('col_bas_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('col_bas_prov_cp5').enable();
      this.FormCheckListPaso5.get('col_bas_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('col_bas_mat_cp5').disable();
      this.FormCheckListPaso5.get('col_bas_ver_cp5').disable();
      this.FormCheckListPaso5.get('col_bas_est_cp5').disable();
      this.FormCheckListPaso5.get('col_bas_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('col_bas_prov_cp5').disable();
      this.FormCheckListPaso5.get('col_bas_obs_cp5').disable();
    }
  }

  toggle9(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso5.get('agitador_mat_cp5').enable();
      this.FormCheckListPaso5.get('agitador_ver_cp5').enable();
      this.FormCheckListPaso5.get('agitador_est_cp5').enable();
      this.FormCheckListPaso5.get('agitador_par_lis_cp5').enable();
      this.FormCheckListPaso5.get('agitador_prov_cp5').enable();
      this.FormCheckListPaso5.get('agitador_obs_cp5').enable();
    } else {
      this.FormCheckListPaso5.get('agitador_mat_cp5').disable();
      this.FormCheckListPaso5.get('agitador_ver_cp5').disable();
      this.FormCheckListPaso5.get('agitador_est_cp5').disable();
      this.FormCheckListPaso5.get('agitador_par_lis_cp5').disable();
      this.FormCheckListPaso5.get('agitador_prov_cp5').disable();
      this.FormCheckListPaso5.get('agitador_obs_cp5').disable();
    }
  }

  ionViewWillEnter() {
    this.checklist_paso5_apli_ck =
      this.globalVal.checklist_paso5_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso5_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);
    this.FormCheckListPaso5.controls['checklist_paso5_apli'].setValue(
      this.checklist_paso5_apli_ck
    );
  }



}

