import { async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
//import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
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

import {
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
} from '@capacitor/camera';
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
//import { log } from 'console';

@Component({
  selector: 'app-mtto-win-informe-tecnico6',
  templateUrl: './mtto-win-informe-tecnico6.page.html',
  styleUrls: ['./mtto-win-informe-tecnico6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MttoWinInformeTecnico6Page implements OnInit {
  FormInformeTecPaso3 = this.formBuilder.group({
    falla_primaria_ic: [''],
    falla_secundaria_ic: [''],
    analisis_del_problema: ['', Validators.required],
    componentes_de_reclamo: [''],
    nro_fotos: [''],
    estado_informe: [''],
    corre_inf_cab: [''],
  });

  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  corre_inf_cab;
  alertSiNo: any;
  EditDataRest: any;

  constructor(
    public formBuilder: UntypedFormBuilder,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoInformeTecnicoService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController
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

    var thiss = this;
    ///////////////////////////////cuando carga desde lista
    ///////////////////////////////cuando carga desde lista
    if (this.globalVal.checklist_paso_pivot == '') {
      try {
        this.navParamsAny =
          this.router.getCurrentNavigation().extras.state['Row'];
        globalVal.corre_inf_cab = this.navParamsAny.corre_inf_cab;
        // globalVal.checklist_paso1_apli = this.navParamsAny.checklist_paso1_apli;
        // globalVal.checklist_paso2_apli = this.navParamsAny.checklist_paso2_apli;
        // globalVal.checklist_paso3_apli = this.navParamsAny.checklist_paso3_apli;
        // globalVal.checklist_paso4_apli = this.navParamsAny.checklist_paso4_apli;
        // globalVal.checklist_paso5_apli = this.navParamsAny.checklist_paso5_apli;
        // globalVal.checklist_paso6_apli = this.navParamsAny.checklist_paso6_apli;

        // this.checklist_paso1_apli_ck = globalVal.checklist_paso1_apli == '0' ? true : false;
        // this.FormInformeTecPaso3.controls['checklist_paso1_apli'].setValue(
        //   this.checklist_paso1_apli_ck
        // );
      } catch (error) {
        console.log(error);
        this.corre_inf_cab = globalVal.corre_inf_cab;

        //this.FormInformeTecPaso3.controls["checklist_paso1_apli"].disable();
      }
    } else {
      this.corre_inf_cab = globalVal.corre_inf_cab;
    }

    // this.storage.get('USER_PERMISO').then((result1) => {
    //   //resultado.json().forEach(resultado => resultjson2);
    //   result1.forEach(function (permiso) {
    //     if (permiso.Nivel == 32) {
    //       ////permiso de jefe
    //       thiss.disableButtonPaso1 = false;
    //     } else {
    //       thiss.disableButtonPaso1 = true;
    //     }
    //   });
    // });
  }

  ionViewWillEnter() {
    this.FLoadForms();
    // this.FormInformeTecPaso2.controls['checklist_paso1_apli'].setValue(
    //   this.checklist_paso1_apli_ck
    // );
  }

  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        this.corre_inf_cab = this.globalVal.corre_inf_cab;
        console.log(this.corre_inf_cab);

        this.FormInformeTecPaso3.controls['corre_inf_cab'].setValue(
          this.corre_inf_cab
        ); ///estado_informe

        this.ApiService.FormFindPaso6(this.corre_inf_cab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest['form'];

            try {
              this.FormInformeTecPaso3.setValue({
                falla_primaria_ic: this.EditDataRest[0].falla_primaria_ic,
                falla_secundaria_ic: this.EditDataRest[0].falla_secundaria_ic,
                analisis_del_problema:
                  this.EditDataRest[0].analisis_del_problema,
                componentes_de_reclamo:
                  this.EditDataRest[0].componentes_de_reclamo,
                nro_fotos: this.EditDataRest[0].nro_fotos,
                corre_inf_cab: this.EditDataRest[0].corre_inf_cab,
                estado_informe: this.EditDataRest[0].estado_informe,
              });

              ///this.loadImages(this.corre_inf_cab);
            } catch (error) {
              console.log('error:::>', error);
            }
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  SaveFormBorradorPaso2() {
    this.alertSiNo = this.alertController
      .create({
        header: 'INFORME TECNICO',
        subHeader: 'ANALISIS DEL PROBLEMA',
        mode: 'ios',
        backdropDismiss: true,
        cssClass:'alerta-ok',
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
                message: 'Guardando...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });

            this.corre_inf_cab = this.globalVal.corre_inf_cab;

            this.ApiService.GuardarFormPaso6(this.FormInformeTecPaso3.value)
              .then( async (res) => {
                this.loadingController.dismiss();

                let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';
                //alert('Guardado correctamente.');
                const alert = await this.alertController.create({
                  header: 'ORDEN DE TRABAJO',
                  subHeader: 'DATOS GENERALES',
                  cssClass:css_msj,
                  mode: 'ios',
                  animated: true,
                  message: res[0].o_msj,// 'La operación se completó con éxito.',
                  buttons: [
                    {
                      text: 'Aceptar',

                      handler: () => {
                        // Realiza acciones adicionales después de aceptar la confirmación
                        console.log('Operación confirmada');

                        if (res[0].o_nres == '1') {
                          //alert('Guardado correctamente.');
                          this.navCtrl.navigateForward(['mtto-list-informe-tecnico']);
                        } else {
                          console.log(this.ApiService.confirmRequest);
                          ///alert(this.ApiService.confirmRequest[0].o_msj);
                          this.FormInformeTecPaso3.controls['estado_informe'].setValue(
                            1
                          ); ///
                          ///this.ApiService.confirmRequest
                        }


                      },
                    },
                  ],
                });
                await alert.present();

              })
              .finally(() => {
                //this.navCtrl.navigateForward(["mtto-list-recinado"]);
              })
              .catch((err) => {
                console.log('errror:::>>>>>>>>>', err);
              });
          } else {
            this.FormInformeTecPaso3.controls['estado_informe'].setValue(1); ///
          }
        });
        /////////////////////////
      });
  }

  ngOnInit() {}
}
