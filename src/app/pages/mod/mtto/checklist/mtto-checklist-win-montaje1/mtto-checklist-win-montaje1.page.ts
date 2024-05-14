// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
//import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
// import { MttoChekListMontajeService } from "../../../../services/mtto/mtto-chek-list-montaje.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-mtto-checklist-win-montaje1',
  templateUrl: './mtto-checklist-win-montaje1.page.html',
  styleUrls: ['./mtto-checklist-win-montaje1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MttoChecklistWinMontaje1Page implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
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
  checklist_paso1_apli_ck: boolean = false;
  aisla_tierra_apl_ck: boolean = true;
  aisla_entre_fases_apl_ck: boolean = true;
  repara_chapa_apl_ck: boolean = true;
  montaje_estator_apl_ck: boolean = true;
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

    this.FormCheckListPaso1 = this.formBuilder.group({
      idchecklistpaso1: ['0'],
      idchecklistcab_paso1: [''],
      idsupervisor_responsable_cmc: [''],
      fch_revision_responsable_cmc: [''],
      idestado_revision_responsable_cmc: [''],
      revision_responsable_obs_cmc: [''],
      fch_ejecutado_cmc: [''],

      aisla_tierra_cmc: ['', Validators.required],
      aisla_tierra_obs_cmc: [''],

      aisla_entre_fases_cmc: ['', Validators.required],
      aisla_entre_fases_obs_cmc: [''],

      repara_chapa_cmc: [''],
      repara_chapa_obs_cmc: [''],

      montaje_estator_cubi_cmc: [''],
      montaje_estator_cubi_codigo_cmc: [''],
      idestado_revision_paso1_cmc: [''],
      checklist_paso1_apli: [''],
      aisla_tierra_apl: [''],
      aisla_entre_fases_apl: [''],
      repara_chapa_apl: [''],
      montaje_estator_apl: [''],
    });
    console.log(this.router.getCurrentNavigation().extras);
    var thiss = this;
    ///////////////////////////////cuando carga desde lista
    ///////////////////////////////cuando carga desde lista
    if (this.globalVal.checklist_paso_pivot == '') {

      try {
        this.navParamsAny =
          this.router.getCurrentNavigation().extras.state['Row'];
        globalVal.idchecklistcab = this.navParamsAny.idchecklistcab;
        globalVal.checklist_paso1_apli = this.navParamsAny.checklist_paso1_apli;
        globalVal.checklist_paso2_apli = this.navParamsAny.checklist_paso2_apli;
        globalVal.checklist_paso3_apli = this.navParamsAny.checklist_paso3_apli;
        globalVal.checklist_paso4_apli = this.navParamsAny.checklist_paso4_apli;
        globalVal.checklist_paso5_apli = this.navParamsAny.checklist_paso5_apli;
        globalVal.checklist_paso6_apli = this.navParamsAny.checklist_paso6_apli;

        // this.checklist_paso1_apli_ck = globalVal.checklist_paso1_apli == '0' ? true : false;
        // this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
        //   this.checklist_paso1_apli_ck
        // );

      } catch (error) {
        console.log(error);
        this.idchecklistcab = globalVal.idchecklistcab;

        //this.FormCheckListPaso1.controls["checklist_paso1_apli"].disable();
      }
    } else {

      this.idchecklistcab = globalVal.idchecklistcab;
    }

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
  }



  onTouched(e) {
    console.log(e);
  }
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        this.idchecklistcab = this.globalVal.idchecklistcab;
        console.log(this.idchecklistcab);

        this.ApiService.FormFindPaso1(this.idchecklistcab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest;
            console.log(this.EditDataRest);
            // if (this.EditDataRest[0].checklist_paso1_apli==1) {
            //   ///this.checklist_paso1_apli_ck=true;
            // }
            try {
              this.FormCheckListPaso1.setValue({
                aisla_entre_fases_cmc:
                  this.EditDataRest[0].aisla_entre_fases_cmc,
                aisla_entre_fases_obs_cmc:
                  this.EditDataRest[0].aisla_entre_fases_obs_cmc,
                aisla_tierra_cmc: this.EditDataRest[0].aisla_tierra_cmc,
                aisla_tierra_obs_cmc: this.EditDataRest[0].aisla_tierra_obs_cmc,
                fch_ejecutado_cmc: this.EditDataRest[0].fch_ejecutado_cmc,
                fch_revision_responsable_cmc:
                  this.EditDataRest[0].fch_revision_responsable_cmc,
                idchecklistcab_paso1: this.EditDataRest[0].idchecklistcab_paso1,
                idchecklistpaso1: this.EditDataRest[0].idchecklistpaso1,
                idestado_revision_responsable_cmc:
                  this.EditDataRest[0].idestado_rev_responsable_cmc, //idestado_revision_responsable_cmc,
                idsupervisor_responsable_cmc:
                  this.EditDataRest[0].idsupervisor_responsable_cmc,
                montaje_estator_cubi_cmc:
                  this.EditDataRest[0].montaje_estator_cubi_cmc,
                repara_chapa_cmc: this.EditDataRest[0].repara_chapa_cmc,
                revision_responsable_obs_cmc:
                  this.EditDataRest[0].revision_respons_obs_cmc,
                repara_chapa_obs_cmc: this.EditDataRest[0].repara_chapa_obs_cmc,
                montaje_estator_cubi_codigo_cmc:
                  this.EditDataRest[0].montaje_estator_cubi_codigo_cm,
                idestado_revision_paso1_cmc:this.EditDataRest[0].idestado_revision_paso1_cmc,
                checklist_paso1_apli: this.globalVal.checklist_paso1_apli,
                aisla_tierra_apl:(this.EditDataRest[0].aisla_tierra_apl=='0')?false:true,
                aisla_entre_fases_apl:(this.EditDataRest[0].aisla_entre_fases_apl=='0')?false:true,
                repara_chapa_apl:(this.EditDataRest[0].repara_chapa_apl=='0')?false:true,
                montaje_estator_apl:(this.EditDataRest[0].montaje_estator_apl=='0')?false:true,
              });
              let event: any;
              event = {detail:{ checked:this.FormCheckListPaso1.controls['aisla_tierra_apl'].value}};
              this.toggle1(event);
              event = {detail:{ checked:this.FormCheckListPaso1.controls['aisla_entre_fases_apl'].value}};
              this.toggle2(event);
              event = {detail:{ checked:this.FormCheckListPaso1.controls['repara_chapa_apl'].value}};
              this.toggle3(event);
              event = {detail:{ checked:this.FormCheckListPaso1.controls['montaje_estator_apl'].value}};
              this.toggle4(event);
              
              

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
    if (this.FormCheckListPaso1.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: 'CONTROL DE MOTOR ELECTRICO',
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
              this.idchecklistcab = this.globalVal.idchecklistcab;
              this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
                this.idchecklistcab
              );

              if (this.disableButtonPaso1 == false) {
                this.FormCheckListPaso1.controls[
                  'idsupervisor_responsable_cmc'
                ].setValue(this.IdUsuarioLocal);
              }
              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController
                .create({
                  message: 'Guardando Paso 1...',
                  translucent: true, //,
                  //cssClass: 'custom-class custom-loading'
                })
                .then((loading) => {
                  loading.present();
                });
              this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
                .then((res) => {
                  this.FormCheckListPaso1.controls['idchecklistpaso1'].setValue(
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

              //////////////////////////////////////////////////////////
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      for (let i in this.FormCheckListPaso1.controls) {
        this.FormCheckListPaso1.controls[i].setValue(
          this.FormCheckListPaso1.controls[i].value
        );
        this.FormCheckListPaso1.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: 'CONTROL DE MOTOR ELECTRICO',
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
        header: 'CONTROL DE MOTOR ELECTRICO',
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
          if (aceptaPop.role == 'A') {
            const loading = this.loadingController
              .create({
                message: 'Guardando Paso 1...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });

            this.idchecklistcab = this.globalVal.idchecklistcab;
            this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
              this.idchecklistcab
            );

            this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
              .then((res) => {
                this.FormCheckListPaso1.controls['idchecklistpaso1'].setValue(
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

  NoAplicaPaso(event: any) {
    console.log(event);
    console.log(event.detail['checked']);
    if (event.detail['checked']) {
      this.FormCheckListPaso1.get('aisla_tierra_apl').enable();
      this.FormCheckListPaso1.get('aisla_entre_fases_apl').enable();
      this.FormCheckListPaso1.get('repara_chapa_apl').enable();
      this.FormCheckListPaso1.get('montaje_estator_apl').enable();
      this.FormCheckListPaso1.get('idestado_revision_paso1_cmc').enable();
    } else {
      this.FormCheckListPaso1.get('aisla_tierra_apl').disable();
      this.FormCheckListPaso1.get('aisla_entre_fases_apl').disable();
      this.FormCheckListPaso1.get('repara_chapa_apl').disable();
      this.FormCheckListPaso1.get('montaje_estator_apl').disable();
      this.FormCheckListPaso1.get('idestado_revision_paso1_cmc').disable();
    }
    this.toggle1(event);
    this.toggle2(event);
    this.toggle3(event);
    this.toggle4(event);
  }
  toggle1(event) {
    console.log(event);
    console.log(event.detail);
    if (event.detail['checked']) {
      this.FormCheckListPaso1.get('aisla_tierra_cmc').enable();
      this.FormCheckListPaso1.get('aisla_tierra_obs_cmc').enable();
    } else {
      this.FormCheckListPaso1.get('aisla_tierra_cmc').disable();
      this.FormCheckListPaso1.get('aisla_tierra_obs_cmc').disable();
    }
  }
  toggle2(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso1.get('aisla_entre_fases_cmc').enable();
      this.FormCheckListPaso1.get('aisla_entre_fases_obs_cmc').enable();
    } else {
      this.FormCheckListPaso1.get('aisla_entre_fases_cmc').disable();
      this.FormCheckListPaso1.get('aisla_entre_fases_obs_cmc').disable();
    }
  }
  toggle3(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso1.get('repara_chapa_cmc').enable();
      this.FormCheckListPaso1.get('repara_chapa_obs_cmc').enable();
    } else {
      this.FormCheckListPaso1.get('repara_chapa_cmc').disable();
      this.FormCheckListPaso1.get('repara_chapa_obs_cmc').disable();
    }
  }
  toggle4(event) {
    if (event.detail['checked']) {
      this.FormCheckListPaso1.get('montaje_estator_cubi_cmc').enable();
      this.FormCheckListPaso1.get('montaje_estator_cubi_codigo_cmc').enable();
    } else {
      this.FormCheckListPaso1.get('montaje_estator_cubi_cmc').disable();
      this.FormCheckListPaso1.get('montaje_estator_cubi_codigo_cmc').disable();
    }
  }
  //////////////////////////save check no aplica paso
  SaveCheckNoAplicaPaso(event: any) {
    const loading = this.loadingController
      .create({
        message: 'Guardando Paso 1...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    this.idchecklistcab = this.globalVal.idchecklistcab;
    this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
      this.idchecklistcab
    );
    this.globalVal.checklist_paso1_apli=(event.detail['checked'])?'0':'1';
    this.ApiService.GuardarAplicaPaso(
      this.idchecklistcab,
      1,
      event.detail['checked']
    )
      .then((res) => {
        // this.FormCheckListPaso1.controls["idchecklistpaso1"].setValue(
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
  /////////////fin save check no aplica paso

  ionViewWillEnter(){
    this.checklist_paso1_apli_ck = this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
    };
    this.NoAplicaPaso(event);

    this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
      this.checklist_paso1_apli_ck
    );

  }
  ngOnInit() {


  }

}
