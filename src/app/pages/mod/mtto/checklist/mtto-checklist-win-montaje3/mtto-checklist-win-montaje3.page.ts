import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';

@Component({
  selector: 'app-mtto-checklist-win-montaje3',
  templateUrl: './mtto-checklist-win-montaje3.page.html',
  styleUrls: ['./mtto-checklist-win-montaje3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MttoChecklistWinMontaje3Page implements OnInit {
  FormCheckListPaso3: UntypedFormGroup;
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
  tituloAlert: string = 'CONTROL DE RODAMIENTOS';
  checklist_paso3_apli_ck: boolean = true;
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
    this.FormCheckListPaso3 = this.formBuilder.group({
      idchecklistpaso3: [''], ///, Validators.required
      idchecklistcab_paso3: ['', Validators.required],
      idestado_revi_paso3_cp3: [''],
      idsuper_respsble_cp3: [''],
      fch_revi_respsble_cp3: [''],
      idesta_revi_respsble_cp3: [''],
      revi_respsble_obs_cp3: [''],
      rod_sup_codigo_cp3: ['', Validators.required],
      rod_sup_condic_cp3: ['', Validators.required],
      rod_sup_eng_rod_cp3: ['', Validators.required],
      rod_sup_estatu_cp3: ['', Validators.required],
      rod_sup_conf_part_cp3: ['', Validators.required],
      rod_sup_observ_cp3: [''],
      rod_inf_codigo_cp3: ['', Validators.required],
      rod_inf_condici_cp3: ['', Validators.required],
      rod_inf_eng_rod_cp3: ['', Validators.required],
      rod_inf_estatu_cp3: ['', Validators.required],
      rod_inf_conf_part_cp3: ['', Validators.required],
      rod_inf_observ_cp3: [''],
      rod_inf2_codigo_cp3: [''],
      rod_inf2_condici_cp3: [''],
      rod_inf2_eng_rod_cp3: [''],
      rod_inf2_estatu_cp3: [''],
      rod_inf2_conf_part_cp3: [''],
      rod_inf2_observ_cp3: [''],
      mon_caj_rod_ejec_cp3: ['', Validators.required],
      mon_caj_rod_fch_cp3: [''],
      mon_sop_rod_ejec_cp3: ['', Validators.required],
      mon_sop_rod_fch_cp3: [''],
      mon_sop_cub_ejec_cp3: ['', Validators.required],
      mon_sop_cub_fch_cp3: [''],
      checklist_paso3_apli: [''],
      rod_sup_apl: [''],
      rod_inf_apl: [''],
      rod_inf2_apl: [''],
      mon_caj_rod_apl: [''],
      mon_sop_rod_apl: [''],
      mon_sop_cub_apl: [''],
    });

    this.idchecklistcab = globalVal.idchecklistcab;
    this.FormCheckListPaso3.controls['idchecklistcab_paso3'].setValue(
      this.idchecklistcab
    );

    var thiss = this;
    this.storage.get('USER_PERMISO').then((result1) => {
      //resultado.json().forEach(resultado => resultjson2);
      result1.forEach(function (permiso) {
        if (permiso.Nivel == 32) {
          ////permiso de jefe
          thiss.disableButtonPaso1 = false;
        } else {
          thiss.disableButtonPaso1 = true;
        }
      });
    });
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;

      this.storage.get('DEVICE_INFO').then((result1) => {
        localStorage = result1;
        this.NombreDispositivo = localStorage.name;
        this.IdDispositivo = localStorage.uuid;
        //console.log(this.navParamsAny);
      });
    });
  }

  ngOnInit() {}

  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();
        this.ApiService.FormFindPaso3(this.idchecklistcab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest;
            try {
              this.FormCheckListPaso3.setValue({
                idchecklistpaso3: this.EditDataRest[0].idchecklistpaso3,
                idchecklistcab_paso3: this.EditDataRest[0].idchecklistcab_paso3,
                idestado_revi_paso3_cp3:
                  this.EditDataRest[0].idestado_revi_paso3_cp3,
                idsuper_respsble_cp3: this.EditDataRest[0].idsuper_respsble_cp3,
                fch_revi_respsble_cp3:
                  this.EditDataRest[0].fch_revi_respsble_cp3,
                idesta_revi_respsble_cp3:
                  this.EditDataRest[0].idesta_revi_respsble_cp3,
                revi_respsble_obs_cp3:
                  this.EditDataRest[0].revi_respsble_obs_cp3,
                rod_sup_codigo_cp3: this.EditDataRest[0].rod_sup_codigo_cp3,
                rod_sup_condic_cp3: this.EditDataRest[0].rod_sup_condic_cp3,
                rod_sup_eng_rod_cp3: this.EditDataRest[0].rod_sup_eng_rod_cp3,
                rod_sup_estatu_cp3: this.EditDataRest[0].rod_sup_estatu_cp3,
                rod_sup_conf_part_cp3:
                  this.EditDataRest[0].rod_sup_conf_part_cp3,
                rod_sup_observ_cp3: this.EditDataRest[0].rod_sup_observ_cp3,
                rod_inf_codigo_cp3: this.EditDataRest[0].rod_inf_codigo_cp3,
                rod_inf_condici_cp3: this.EditDataRest[0].rod_inf_condici_cp3,
                rod_inf_eng_rod_cp3: this.EditDataRest[0].rod_inf_eng_rod_cp3,
                rod_inf_estatu_cp3: this.EditDataRest[0].rod_inf_estatu_cp3,
                rod_inf_conf_part_cp3:
                  this.EditDataRest[0].rod_inf_conf_part_cp3,
                rod_inf_observ_cp3: this.EditDataRest[0].rod_inf_observ_cp3,
                rod_inf2_codigo_cp3: this.EditDataRest[0].rod_inf2_codigo_cp3,
                rod_inf2_condici_cp3: this.EditDataRest[0].rod_inf2_condici_cp3,
                rod_inf2_eng_rod_cp3: this.EditDataRest[0].rod_inf2_eng_rod_cp3,
                rod_inf2_estatu_cp3: this.EditDataRest[0].rod_inf2_estatu_cp3,
                rod_inf2_conf_part_cp3:
                  this.EditDataRest[0].rod_inf2_conf_part_cp3,
                rod_inf2_observ_cp3: this.EditDataRest[0].rod_inf2_observ_cp3,
                mon_caj_rod_ejec_cp3: this.EditDataRest[0].mon_caj_rod_ejec_cp3,
                mon_caj_rod_fch_cp3: this.EditDataRest[0].mon_caj_rod_fch_cp3,
                mon_sop_rod_ejec_cp3: this.EditDataRest[0].mon_sop_rod_ejec_cp3,
                mon_sop_rod_fch_cp3: this.EditDataRest[0].mon_sop_rod_fch_cp3,
                mon_sop_cub_ejec_cp3: this.EditDataRest[0].mon_sop_cub_ejec_cp3,
                mon_sop_cub_fch_cp3: this.EditDataRest[0].mon_sop_cub_fch_cp3,

                rod_sup_apl:
                  this.EditDataRest[0].rod_sup_apl == '1' ? false : true,
                rod_inf_apl:
                  this.EditDataRest[0].rod_inf_apl == '1' ? false : true,
                rod_inf2_apl:
                  this.EditDataRest[0].rod_inf2_apl == '1' ? false : true,
                mon_caj_rod_apl:
                  this.EditDataRest[0].mon_caj_rod_apl == '1' ? false : true,
                mon_sop_rod_apl:
                  this.EditDataRest[0].mon_sop_rod_apl == '1' ? false : true,
                mon_sop_cub_apl:
                  this.EditDataRest[0].mon_sop_cub_apl == '1' ? false : true,
                checklist_paso3_apli: this.globalVal.checklist_paso3_apli,
              });

              let event: any;
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['rod_sup_apl'].value,
                },
              };
              this.toggle1(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['rod_inf_apl'].value,
                },
              };
              this.toggle2(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['rod_inf2_apl'].value,
                },
              };
              this.toggle3(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['mon_caj_rod_apl'].value,
                },
              };
              this.toggle4(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['mon_sop_rod_apl'].value,
                },
              };
              this.toggle5(event);
              event = {
                detail: {
                  checked:
                    this.FormCheckListPaso3.controls['mon_sop_cub_apl'].value,
                },
              };
              this.toggle6(event);

              //console.log(this.FormCheckListPaso3.value);
            } catch (error) {
              console.log('error:::>', error);
            }
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso3.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: this.tituloAlert,
          subHeader: '',
          mode: 'ios',
          backdropDismiss: true,
          message: 'Confirmar que desea guardar?',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'alert-button-group',
              role: 'A',
              handler: () => {},
            },
            {
              text: 'Cancelar',
              role: 'F',
              handler: () => {},
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {
            console.log('aceptaPop::::>>', aceptaPop);
            if (aceptaPop.role == 'A') {
              if (this.disableButtonPaso1 == false) {
                this.FormCheckListPaso3.controls[
                  'idsuper_respsble_cp3'
                ].setValue(this.IdUsuarioLocal);
              }
              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController
                .create({
                  message: 'Guardando Paso 3...',
                  translucent: true, //,
                  //cssClass: 'custom-class custom-loading'
                })
                .then((loading) => {
                  loading.present();
                });
              this.ApiService.GuardarFormPaso3(this.FormCheckListPaso3.value)
                .then((res) => {
                  this.FormCheckListPaso3.controls['idchecklistpaso3'].setValue(
                    this.ApiService.confirmSaveBd
                  );

                  this.loadingController.dismiss();
                  alert('Guardado correctamente.');
                })
                .finally(() => {
                  //this.navCtrl.navigateForward(["mtto-list-recinado"]);
                })
                .catch((err) => {
                  console.log('errror:::>>>>>>>>>', err);
                });
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      for (let i in this.FormCheckListPaso3.controls) {
        this.FormCheckListPaso3.controls[i].setValue(
          this.FormCheckListPaso3.controls[i].value
        );
        this.FormCheckListPaso3.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: this.tituloAlert,
          subHeader: '',
          mode: 'ios',
          backdropDismiss: true,
          message: 'Falta seleccionar todos los datos',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'alert-button-group',
              role: 'A',
              handler: () => {},
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {});
          /////////////////////////
        });

      //////////////////
    }
  }

  SaveFormBorradorPaso1() {
    this.alertSiNo = this.alertController
      .create({
        header: this.tituloAlert,
        subHeader: '',
        mode: 'ios',
        backdropDismiss: true,
        message: 'Confirmar que desea guardar?',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {},
          },
          {
            text: 'Cancelar',
            //cssClass: 'alert-button-group',
            role: 'F',
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
          console.log('aceptaPop::::>>', aceptaPop);
          if (aceptaPop.role == 'A') {
            const loading = this.loadingController
              .create({
                message: 'Guardando Paso 4...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });

            this.ApiService.GuardarFormPaso3(this.FormCheckListPaso3.value)
              .then((res) => {
                this.FormCheckListPaso3.controls['idchecklistpaso3'].setValue(
                  this.ApiService.confirmSaveBd
                );

                this.loadingController.dismiss();
                alert('Guardado correctamente.');
              })
              .finally(() => {
                //this.navCtrl.navigateForward(["mtto-list-recinado"]);
              })
              .catch((err) => {
                console.log('errror:::>>>>>>>>>', err);
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
        message: 'Guardando Paso 3...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    //this.idchecklistcab = this.globalVal.idchecklistcab;
    this.FormCheckListPaso3.controls['idchecklistcab_paso3'].setValue(
      this.idchecklistcab
    );
    this.globalVal.checklist_paso3_apli = event.detail['checked'] ? '0' : '1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      3,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso3.controls["idchecklistpaso1"].setValue(
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
      this.FormCheckListPaso3.get('rod_sup_apl').setValue(true);
      this.FormCheckListPaso3.get('rod_sup_apl').enable();
      this.FormCheckListPaso3.get('rod_inf_apl').enable();
      this.FormCheckListPaso3.get('rod_inf_apl').setValue(true);
      this.FormCheckListPaso3.get('rod_inf2_apl').enable();
      this.FormCheckListPaso3.get('rod_inf2_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_caj_rod_apl').enable();
      this.FormCheckListPaso3.get('mon_caj_rod_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_sop_rod_apl').enable();
      this.FormCheckListPaso3.get('mon_sop_rod_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_sop_cub_apl').enable();
      this.FormCheckListPaso3.get('mon_sop_cub_apl').setValue(true);
      this.FormCheckListPaso3.get('idestado_revi_paso3_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('rod_sup_apl').disable();
      this.FormCheckListPaso3.get('rod_sup_apl').setValue(true);
      this.FormCheckListPaso3.get('rod_inf_apl').disable();
      this.FormCheckListPaso3.get('rod_inf_apl').setValue(true);
      this.FormCheckListPaso3.get('rod_inf2_apl').disable();
      this.FormCheckListPaso3.get('rod_inf2_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_caj_rod_apl').disable();
      this.FormCheckListPaso3.get('mon_caj_rod_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_sop_rod_apl').disable();
      this.FormCheckListPaso3.get('mon_sop_rod_apl').setValue(true);
      this.FormCheckListPaso3.get('mon_sop_cub_apl').disable();
      this.FormCheckListPaso3.get('mon_sop_cub_apl').setValue(true);
      this.FormCheckListPaso3.get('idestado_revi_paso3_cp3').disable();
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
      this.FormCheckListPaso3.get('rod_sup_codigo_cp3').enable();
      this.FormCheckListPaso3.get('rod_sup_condic_cp3').enable();
      this.FormCheckListPaso3.get('rod_sup_eng_rod_cp3').enable();
      this.FormCheckListPaso3.get('rod_sup_estatu_cp3').enable();
      this.FormCheckListPaso3.get('rod_sup_conf_part_cp3').enable();
      this.FormCheckListPaso3.get('rod_sup_observ_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('rod_sup_codigo_cp3').disable();
      this.FormCheckListPaso3.get('rod_sup_condic_cp3').disable();
      this.FormCheckListPaso3.get('rod_sup_eng_rod_cp3').disable();
      this.FormCheckListPaso3.get('rod_sup_estatu_cp3').disable();
      this.FormCheckListPaso3.get('rod_sup_conf_part_cp3').disable();
      this.FormCheckListPaso3.get('rod_sup_observ_cp3').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso3.get('rod_inf_codigo_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf_condici_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf_eng_rod_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf_estatu_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf_conf_part_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf_observ_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('rod_inf_codigo_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf_condici_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf_eng_rod_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf_estatu_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf_conf_part_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf_observ_cp3').disable();
    }
  }
  toggle3(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso3.get('rod_inf2_codigo_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf2_condici_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf2_eng_rod_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf2_estatu_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf2_conf_part_cp3').enable();
      this.FormCheckListPaso3.get('rod_inf2_observ_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('rod_inf2_codigo_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf2_condici_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf2_eng_rod_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf2_estatu_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf2_conf_part_cp3').disable();
      this.FormCheckListPaso3.get('rod_inf2_observ_cp3').disable();
    }
  }
  toggle4(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso3.get('mon_caj_rod_ejec_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('mon_caj_rod_ejec_cp3').disable();
    }
  }

  toggle5(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso3.get('mon_sop_rod_ejec_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('mon_sop_rod_ejec_cp3').disable();
    }
  }

  toggle6(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso3.get('mon_sop_cub_ejec_cp3').enable();
    } else {
      this.FormCheckListPaso3.get('mon_sop_cub_ejec_cp3').disable();
    }
  }

  ionViewWillEnter() {
    this.checklist_paso3_apli_ck =
      this.globalVal.checklist_paso3_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso3_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);
    this.FormCheckListPaso3.controls['checklist_paso3_apli'].setValue(
      this.checklist_paso3_apli_ck
    );
  }
}
