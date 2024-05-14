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

@Component({
  selector: 'app-mtto-win-informe-tecnico5',
  templateUrl: './mtto-win-informe-tecnico5.page.html',
  styleUrls: ['./mtto-win-informe-tecnico5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MttoWinInformeTecnico5Page implements OnInit {
  FormInformeTecPaso2 = this.formBuilder.group({
    ///idchecklistcab_paso1: [''],

    cable_prin_m: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cable_prin_c: [''],
    cable_prin_tipo: ['', Validators.required],
    cable_prin_ope: ['', Validators.required],
    cable_prin_cambio: [''],
    cable_prin_seccionado: [''],
    cable_prin_repara_det: [''],
    cable_2da_m: [''],
    cable_2da_c: [''],
    cable_2da_tipo: [''],
    cable_2da_ope: [''],
    cable_2da_cambio: [''],
    cable_2da_seccionado: [''],
    cable_2da_repara_det: [''],
    cable_aux_m: [''],
    cable_aux_c: [''],
    cable_aux_tipo: [''],
    cable_aux_ope: [''],
    cable_aux_cambio: [''],
    cable_aux_seccionado: [''],
    cable_aux_repara_det: [''],
    b_con_descarga: ['', Validators.required],
    b_con_des_diametro: ['', Validators.required],
    b_con_des_tipo: ['', Validators.required],
    b_dano_fisico_ext: [''],
    b_dano_fisico_ext_det: [''],
    b_partes_faltante: [''],
    b_parte_faltante_ext: [''],
    b_otros: [''],
    corre_inf_cab: [''],
    idtipo_campana_it: [''],
    idtipodiametro_it: [''],
    idestado_campana: [''],
    b_con_reclamo_it: [''],
  });

  //FormInformeTecPaso2: UntypedFormGroup;
  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  corre_inf_cab;
  alertSiNo: any;
  EditDataRest: any;

  TipoCblePivotSelectedText: string;
  TipoCble2PivotSelectedText: string;
  islaPivotSelectedText: string;
  DsTipoCable: any;
  DsTipoCampana: any;
  DsIsla: any;
  Opciones1: any;
  images = [];
  DirectorioFotos: string = '../aw_file/adjuntos/';
  popLodingMenaje: any;
  EstadoCampanaPivotSelectedText: string;
  DiametroCampanaPivotSelectedText: string;
  TipoCampanaPivotSelectedText: string;
  DsDiametroCampana: any;
  DsEstadoCampana: any;

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

    //console.log(this.router.getCurrentNavigation().extras);
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
        // this.FormInformeTecPaso2.controls['checklist_paso1_apli'].setValue(
        //   this.checklist_paso1_apli_ck
        // );
      } catch (error) {
        console.log(error);
        this.corre_inf_cab = globalVal.corre_inf_cab;

        //this.FormInformeTecPaso2.controls["checklist_paso1_apli"].disable();
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

        this.corre_inf_cab = this.globalVal.corre_inf_cab;
        console.log(this.corre_inf_cab);

        this.FormInformeTecPaso2.controls['corre_inf_cab'].setValue(
          this.corre_inf_cab
        );

        this.ApiService.FormFindPaso5(this.corre_inf_cab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest['form'];
            this.DsTipoCable = rest['tipo_cable'];
            this.DsTipoCampana = rest['tipo_campana'];
            this.DsDiametroCampana = rest['tipo_diametro'];
            this.DsEstadoCampana = rest['estado_campana'];
            // if (this.EditDataRest[0].checklist_paso1_apli==1) {
            //   ///this.checklist_paso1_apli_ck=true;
            // }
            try {
              this.FormInformeTecPaso2.setValue({
                cable_prin_m: this.EditDataRest[0].cable_prin_m,
                cable_prin_c: this.EditDataRest[0].cable_prin_c,
                cable_prin_tipo: this.EditDataRest[0].cable_prin_tipo,
                ///dif_sup_apl:this.EditDataRest[0].dif_sup_apl == '1' ? false : true,
                cable_prin_ope:
                  this.EditDataRest[0].cable_prin_ope == '1' ? true : false,
                cable_prin_cambio:
                  this.EditDataRest[0].cable_prin_cambio == '1' ? true : false,
                cable_prin_seccionado:
                  this.EditDataRest[0].cable_prin_seccionado == '1'
                    ? true
                    : false,

                cable_prin_repara_det:
                  this.EditDataRest[0].cable_prin_repara_det,
                cable_2da_m: this.EditDataRest[0].cable_2da_m,
                cable_2da_c: this.EditDataRest[0].cable_2da_c,
                cable_2da_tipo: this.EditDataRest[0].cable_2da_tipo,

                cable_2da_ope:
                  this.EditDataRest[0].cable_2da_ope == '1' ? true : false,
                cable_2da_cambio:
                  this.EditDataRest[0].cable_2da_cambio == '1' ? true : false,
                cable_2da_seccionado:
                  this.EditDataRest[0].cable_2da_seccionado == '1'
                    ? true
                    : false,

                cable_2da_repara_det: this.EditDataRest[0].cable_2da_repara_det,
                cable_aux_m: this.EditDataRest[0].cable_aux_m,
                cable_aux_c: this.EditDataRest[0].cable_aux_c,
                cable_aux_tipo: this.EditDataRest[0].cable_aux_tipo,

                cable_aux_ope:
                  this.EditDataRest[0].cable_aux_ope == '1' ? true : false,
                cable_aux_cambio:
                  this.EditDataRest[0].cable_aux_cambio == '1' ? true : false,
                cable_aux_seccionado:
                  this.EditDataRest[0].cable_aux_seccionado == '1'
                    ? true
                    : false,

                cable_aux_repara_det: this.EditDataRest[0].cable_aux_repara_det,
                b_con_descarga: this.EditDataRest[0].b_con_descarga,
                b_con_des_diametro: this.EditDataRest[0].b_con_des_diametro,
                b_con_des_tipo: this.EditDataRest[0].b_con_des_tipo,
                b_dano_fisico_ext: this.EditDataRest[0].b_dano_fisico_ext,
                b_dano_fisico_ext_det:
                  this.EditDataRest[0].b_dano_fisico_ext_det,
                b_partes_faltante: this.EditDataRest[0].b_partes_faltante,
                b_otros: this.EditDataRest[0].b_otros,
                b_parte_faltante_ext: this.EditDataRest[0].b_parte_faltante_ext,
                corre_inf_cab: this.EditDataRest[0].corre_inf_cab,
                idtipo_campana_it: this.EditDataRest[0].idtipo_campana_it,
                idtipodiametro_it: this.EditDataRest[0].idtipodiametro_it,
                idestado_campana: this.EditDataRest[0].idestado_campana,
                b_con_reclamo_it:this.EditDataRest[0].b_con_reclamo_it,
              });

              this.TipoCblePivotSelectedText = this.EditDataRest[0].tipocable_1;
              this.TipoCble2PivotSelectedText =
                this.EditDataRest[0].tipocable_2;

              this.TipoCampanaPivotSelectedText =
                this.EditDataRest[0].idtipo_campana_it2;
              this.DiametroCampanaPivotSelectedText =
                this.EditDataRest[0].idtipodiametro_it2;
              this.EstadoCampanaPivotSelectedText =
                this.EditDataRest[0].idestado_campana2;

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

  SaveFormTerminadoPaso1() {
    if (this.FormInformeTecPaso2.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: 'INFORME TECNICO',
          subHeader: 'ANTES DEL DESMONTAJE',
          mode: 'ios',
          cssClass:'alerta-ok',
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
              this.corre_inf_cab = this.globalVal.corre_inf_cab;

              // this.FormInformeTecPaso2.controls['idchecklistcab_paso1'].setValue(
              //   this.corre_inf_cab
              // );
              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController
                .create({
                  message: 'Guardando Antes del..',
                  translucent: true, //,
                  //cssClass: 'custom-class custom-loading'
                })
                .then((loading) => {
                  loading.present();
                });
              this.ApiService.GuardarFormPaso5(this.FormInformeTecPaso2.value)
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

              //////////////////////////////////////////////////////////
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      for (let i in this.FormInformeTecPaso2.controls) {
        this.FormInformeTecPaso2.controls[i].setValue(
          this.FormInformeTecPaso2.controls[i].value
        );
        this.FormInformeTecPaso2.controls[i].markAsTouched();
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

  SaveFormBorradorPaso2() {
    this.alertSiNo = this.alertController
      .create({
        header: 'INFORME TECNICO',
        subHeader: 'ANTES DEL DESMONTAJE',
        mode: 'ios',
        cssClass:'alerta-ok',
        backdropDismiss: true,
        message: 'Confirmar que desea guardar?',

        buttons: [
          {
            text: 'Aceptar',
            //cssClass: 'alert-button-group',
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
                message: 'Guardando datos generales...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });

            this.corre_inf_cab = this.globalVal.corre_inf_cab;

            this.ApiService.GuardarFormPaso5(this.FormInformeTecPaso2.value)
              .then( async (res) => {
                this.loadingController.dismiss();
                //alert('Guardado correctamente.');

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
          }
        });
        /////////////////////////
      });
  }

  //////////////////////////save check no aplica paso
  // SaveCheckNoAplicaPaso(event: any) {
  //   const loading = this.loadingController
  //     .create({
  //       message: 'Guardando Paso 1...',
  //       translucent: true, //,
  //       //cssClass: 'custom-class custom-loading'
  //     })
  //     .then((loading) => {
  //       loading.present();
  //     });
  //   this.corre_inf_cab = this.globalVal.corre_inf_cab;
  //   this.FormInformeTecPaso2.controls['idchecklistcab_paso1'].setValue(
  //     this.corre_inf_cab
  //   );
  //   this.globalVal.checklist_paso1_apli=(event.detail['checked'])?'0':'1';
  //   this.ApiService.GuardarAplicaPaso(
  //     this.corre_inf_cab,
  //     1,
  //     event.detail['checked']
  //   )
  //     .then((res) => {
  //       // this.FormInformeTecPaso2.controls["idchecklistpaso1"].setValue(
  //       //   this.ApiService.confirmSaveBd
  //       // );
  //       this.NoAplicaPaso(event);
  //       this.loadingController.dismiss();
  //     })
  //     .finally(() => {})
  //     .catch((err) => {
  //       console.log('errror:::>>>>>>>>>', err);
  //     });
  //   /////////////////////////
  // }
  /////////////fin save check no aplica paso

  ionViewWillEnter() {
    this.FLoadForms();
    // this.FormInformeTecPaso2.controls['checklist_paso1_apli'].setValue(
    //   this.checklist_paso1_apli_ck
    // );
  }
  ngOnInit() {}

  FSelectChangeTipoCable(ev, index) {
    console.log('select_change_material::', this.DsTipoCable);
    for (const row of this.DsTipoCable) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['cable_prin_tipo'].setValue(
          row.codigo
        );
        this.TipoCblePivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeTipoCable2(ev, index) {
    console.log('select_change_material::', this.DsTipoCable);
    for (const row of this.DsTipoCable) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['cable_2da_tipo'].setValue(
          row.codigo
        );
        this.TipoCble2PivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeIsla(ev, index) {
    for (const row of this.DsIsla) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['idisla_ic'].setValue(row.codigo);
        this.islaPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeTipoCampana(ev, index) {
    console.log('select_change_material::', this.DsTipoCable);
    for (const row of this.DsTipoCampana) {
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['idtipo_campana_it'].setValue(
          row.codigo
        );
        this.TipoCampanaPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeDiametroCampana(ev, index) {
    console.log('select_change_material::', this.DsTipoCable);
    for (const row of this.DsDiametroCampana) {
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['idtipodiametro_it'].setValue(
          row.codigo
        );
        this.DiametroCampanaPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeEstadoCampana(ev, index) {
    console.log('select_change_material::', this.DsTipoCable);
    for (const row of this.DsEstadoCampana) {
      if (row.codigo == ev.detail.value) {
        this.FormInformeTecPaso2.controls['idestado_campana'].setValue(
          row.codigo
        );
        this.EstadoCampanaPivotSelectedText = row.nombre;
      }
    }
  }
}
