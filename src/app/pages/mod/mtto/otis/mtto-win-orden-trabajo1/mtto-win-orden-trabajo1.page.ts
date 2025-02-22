
import { Browser } from '@capacitor/browser';
//import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { CommonModule } from '@angular/common';
import { ApiBackDomains } from 'src/app/interfaces/ApiConections';
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
////////////////////////////////


////////////////////////////////
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
//import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';

import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormBuilder,UntypedFormBuilder, UntypedFormGroup,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


import {
  GalleryPhoto,
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
  GalleryImageOptions,
} from '@capacitor/camera';

import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { GlovalProviderVar, getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
//import { pathToFileURL } from 'url';
import { GlovalVar } from 'src/app/interfaces/mtto/mtto-ordentrabajo';

@Component({
  selector: 'app-mtto-win-orden-trabajo1',
  templateUrl: './mtto-win-orden-trabajo1.page.html',
  styleUrls: ['./mtto-win-orden-trabajo1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MttoWinOrdenTrabajo1Page implements OnInit {
  //export class MttoWinInformeTecnico1Page implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  id_orden_trab_cab;
  alertSiNo: any;
  EditDataRest: any;

  disableButtonPaso1: boolean = true;
  checklist_paso1_apli_ck: boolean = false;
  aisla_tierra_apl_ck: boolean = true;
  aisla_entre_fases_apl_ck: boolean = true;
  repara_chapa_apl_ck: boolean = true;
  montaje_estator_apl_ck: boolean = true;
  toggleState: boolean = true;
  est_dis_ot: boolean = true;
  codigoMotor: string;
  imgs: string[] = [];
  ///////////////
  TipoEquipamientoPivotSelectedText: string;
  MaterialPivotSelectedText: string;
  FrecuenciaPivotSelectedText:string;
  VelRotPivotSelectedText: string;
  MotorPivotSelectedText: string;
  VoltajePivotSelectedText: string;
  PotenciaPivotSelectedText: string;

  TipoOtPivotSelectedText: string;
  TipoBombaPivotSelectedText: string;
  EstandarPivotSelectedText: string;
  TensionMandoPivotSelectedText: string;
  TensionFuerzaPivotSelectedText: string;
  TipoOtCausaSelectedText: string;
  TipoOtProcesoSelectedText: string;
  ot_idtoggle: any;
  estado_dis_motor_otc: any;
  DsTipoPotencia: any;
  DsTipoOt: any;
  DsTipoBomba: any;
  DsMaterial: any;
  DsFrecuencia: any;
  DsMotor: any;
  DsVoltaje: any;
  DsProceso: any;
  DsCausa: any;
  DsVelrot: any;
  DsTipoEquipamiento: any;
  DsEstandar: any;
  DsTensionFuerza: any;
  DsTensionMando: any;


  Opciones1: any;
  images = [];
  DirectorioFotos: string = ApiBackDomains.UrlDomainLocal + 'aw_file/adjuntos/';
  //DirectorioFotos: string = '../aw_file/adjuntos/';
  popLodingMenaje: any;
  imageBlobs: Blob[] = [];
  ItemVisibleBomba: boolean = false;
  ItemVisibleTablero: boolean = false;
  ItemVisibleMotor: boolean = false;
  ItemProCau: boolean=false;
  ItemPropro: boolean=false;
  Itemdividermotor: boolean=false;
  //ot_estado_general:any;
  idtoggle: any;
  rep_fab: any;

  constructor(
    public formBuilder: UntypedFormBuilder,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController ///private camera:Camera
    

  ) {
    //this.toggleState = true; // Asegúrate de que el valor inicial es correcto
   

    let localStorage;
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;

      this.storage.get('DEVICE_INFO').then((result2) => {
        localStorage = result2;
        this.NombreDispositivo = localStorage.name;
        this.IdDispositivo = localStorage.uuid;
        
        
        //console.log(this.navParamsAny);
      });
    });

    this.FormCheckListPaso1 = this.formBuilder.group({
      ///idchecklistcab_paso1: [''],
      id_orden_trab_fis_cab: [''],
      idtipo_otc: ['' ],
      ot_bomba: [''],
      Y04001: [''],
      codsmg: ['', Validators.required],
      Y04002: [''],
      ot_id_superv_planta: [''],
      familia: [''],
      id_tipo_material_ot: [''],
      idfrecuencia_ot: [''],
      idvelrot_ot: [''],
      id_tipo_equipamiento_ot: [''],
      id_estandar_ot: [''],
      id_tension_fuerza_ot: [''],
      id_tension_mando_ot: [''],
      id_causa_ot:[''],
      id_proceso_ot:[''],
      ot_estado_general: [''],
      descrip: [''],
      id_orden_trab_cab: ['', Validators.required],
      ot_idordentrabprev: [''],
      ot_tipo_de_oti: ['' ],
      ot_procedencia: [''],
      ot_estado: [''],
      ot_id_tecnico: [''],
      ot_id_informe_tec: [''],
      ot_nota: [''],
      Y06002: [''],
      ot_fech_fin_labor: [''],
      ot_fech_h_inicio_labor: [''],
      ot_fech_inicio_labor: [''],
      ot_fech_h_fin_labor: [''],
      SEQMA04: [''],
      corre_inf_cab_otc: [''],
      corre_fisico: [''],
      dias_trabajados: [''],
      ot_cod_reb_motor: [''], 
      ot_idtoggle: [''],
      estado_dis_motor_otc:[''],
      idestado_cerrado: [''],
      idestado_bloquear_otc: [''],
      tipobomba_otc: [''],
      idordenfabricab_otc: [''],
      voltaje_ot: [''],
      motor_ot: [''],
      potencia: [''],
      rep_fab: [''],
      idpartlist_otc: [''] ,
      nombre_partlist_otc: [''] ,
      tipo_partlist_otc: [''],
      ot_idtipoequip:['']
      //,motor_ot2: ['']
    });
    console.log(this.router.getCurrentNavigation().extras);
    var thiss = this;
    ///////////////////////////////cuando carga desde lista
    ///////////////////////////////cuando carga desde lista
    if (this.globalVal.checklist_paso_pivot == '') {
      try {
        this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];

        // this.ItemVisibleBomba=false;
        // this.ItemVisibleTablero=false;


        globalVal.id_orden_trab_cab = this.navParamsAny.id_orden_trab_cab;
        globalVal.ot_rep_fab = this.navParamsAny.rep_fab;


        if (this.navParamsAny.familia=='1') {
          console.log('ingreso familia bomba!!!');

          this.ItemVisibleBomba=true;
          this.ItemVisibleTablero=false;

          this.FormCheckListPaso1.get('tipobomba_otc').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('tipobomba_otc').updateValueAndValidity();

          this.FormCheckListPaso1.get('idtipo_otc').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('idtipo_otc').updateValueAndValidity();

          this.FormCheckListPaso1.get('id_tipo_material_ot').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('id_tipo_material_ot').updateValueAndValidity();

        } else if (this.navParamsAny.familia=='2') {
          this.ItemVisibleBomba=false;
          this.ItemVisibleTablero=true;
          this.FormCheckListPaso1.get('id_tipo_equipamiento_ot').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('id_tipo_equipamiento_ot').updateValueAndValidity();

          this.FormCheckListPaso1.get('id_estandar_ot').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('id_estandar_ot').updateValueAndValidity();

          this.FormCheckListPaso1.get('potencia').setValidators([this.valorDiferenteDeCero]);
          this.FormCheckListPaso1.get('potencia').updateValueAndValidity();


        }

      } catch (error) {
        console.log(error);
        this.id_orden_trab_cab = globalVal.id_orden_trab_cab;

        //this.FormCheckListPaso1.controls["checklist_paso1_apli"].disable();
      }
    } else {
      this.id_orden_trab_cab = globalVal.id_orden_trab_cab;
    }

  }

  onTouched(e) {
    console.log(e);
  }

  valorDiferenteDeCero(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
      if (valor === null || valor === undefined || valor === '' || valor === 0 || valor === '0') {
        return { valorNoValido: true }; // Inválido (es cero)
    } else {
      return null; // Válido (no es cero)
    }
  }


  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        this.id_orden_trab_cab = this.globalVal.id_orden_trab_cab;
        console.log(this.id_orden_trab_cab);

        this.ApiService.FormFindPaso1(this.id_orden_trab_cab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest['form'];
            // if (this.EditDataRest[0].checklist_paso1_apli==1) {
            //   ///this.checklist_paso1_apli_ck=true;
            // }
            try {
              this.FormCheckListPaso1.setValue({
                //responsabilidad: this.EditDataRest[0].responsabilidad,
                id_orden_trab_fis_cab:this.EditDataRest[0].id_orden_trab_fis_cab,
                idtipo_otc: this.EditDataRest[0].idtipo_otc,///TipoOtPivotSelectedText
                ot_bomba: this.EditDataRest[0].ot_bomba,
                Y04001: this.EditDataRest[0].Y04001,
                codsmg: this.EditDataRest[0].codsmg,
                Y04002: this.EditDataRest[0].Y04002,
                ot_id_superv_planta: this.EditDataRest[0].ot_id_superv_planta,
                familia: this.EditDataRest[0].familia,

                id_tipo_material_ot: this.EditDataRest[0].id_tipo_material_ot,
                idfrecuencia_ot:this.EditDataRest[0].idfrecuencia_ot,
                id_tipo_equipamiento_ot:this.EditDataRest[0].id_tipo_equipamiento_ot,
                id_estandar_ot: this.EditDataRest[0].id_estandar_ot,
                id_tension_fuerza_ot: this.EditDataRest[0].id_tension_fuerza_ot,
                id_tension_mando_ot: this.EditDataRest[0].id_tension_mando_ot,
                id_proceso_ot:this.EditDataRest[0].id_proceso_ot,
                id_causa_ot:this.EditDataRest[0].id_causa_ot,
                ot_estado_general: this.EditDataRest[0].ot_estado_general,
                descrip: this.EditDataRest[0].descrip,
                id_orden_trab_cab: this.EditDataRest[0].id_orden_trab_cab,
                ot_idordentrabprev: this.EditDataRest[0].ot_idordentrabprev,
                idvelrot_ot:this.EditDataRest[0].idvelocidad_rotacion_ot,//////////
                ot_tipo_de_oti: this.EditDataRest[0].ot_tipo_de_oti,////falta ceter¿ar

                ot_procedencia: this.EditDataRest[0].ot_procedencia,
                ot_estado: this.EditDataRest[0].ot_estado,
                ot_id_tecnico: this.EditDataRest[0].ot_id_tecnico,
                ot_id_informe_tec: this.EditDataRest[0].ot_id_informe_tec,
                ot_nota: this.EditDataRest[0].ot_nota,
                Y06002: this.EditDataRest[0].Y06002,
                ot_fech_fin_labor: this.EditDataRest[0].ot_fech_fin_labor,
                ot_fech_h_inicio_labor:this.EditDataRest[0].ot_fech_h_inicio_labor,
                ot_fech_inicio_labor: this.EditDataRest[0].ot_fech_inicio_labor,
                ot_fech_h_fin_labor: this.EditDataRest[0].ot_fech_h_fin_labor,
                SEQMA04: this.EditDataRest[0].SEQMA04,
                corre_inf_cab_otc: this.EditDataRest[0].corre_inf_cab_otc,
                corre_fisico: this.EditDataRest[0].corre_fisico,
                dias_trabajados: this.EditDataRest[0].dias_trabajados,
                ot_cod_reb_motor:this.EditDataRest[0].ot_cod_reb_motor,////////codigodelmotor
                estado_dis_motor_otc: this.EditDataRest[0].estado_dis_motor_otc,
                ot_idtoggle:this.EditDataRest[0].ot_idtoggle,
                idestado_cerrado: this.EditDataRest[0].idestado_cerrado,
                idestado_bloquear_otc:this.EditDataRest[0].idestado_bloquear_otc,
                tipobomba_otc: this.EditDataRest[0].tipobomba_otc,///TipoBombaPivotSelectedText
                idordenfabricab_otc: this.EditDataRest[0].idordenfabricab_otc,
                voltaje_ot: this.EditDataRest[0].voltaje_ot,
                motor_ot: this.EditDataRest[0].motor_ot,
                ot_idtipoequip: this.EditDataRest[0].ot_idtipoequip,
                potencia: this.EditDataRest[0].potencia,
                rep_fab: this.EditDataRest[0].rep_fab,
                idpartlist_otc: this.EditDataRest[0].idpartlist_otc ,
                nombre_partlist_otc: this.EditDataRest[0].nombre_partlist_otc ,
                tipo_partlist_otc: this.EditDataRest[0].tipo_partlist_otc,
              //  motor_ot2: this.EditDataRest[0].motor_ot2,

              });
              this.MaterialPivotSelectedText =this.EditDataRest[0].id_tipo_material_ot2;
              //this.FrecuenciaPivotSelectedText=this.EditDataRest[0].idfrecuencia_ot;
              this.TipoEquipamientoPivotSelectedText=this.EditDataRest[0].id_tipo_equipamiento_ot2;
              this.EstandarPivotSelectedText=this.EditDataRest[0].id_estandar_ot2;
              this.TensionFuerzaPivotSelectedText=this.EditDataRest[0].id_tension_fuerza_ot2;
              this.TensionMandoPivotSelectedText=this.EditDataRest[0].id_tension_mando_ot2;
              this.ot_idtoggle=this.EditDataRest[0].ot_idtoggle;
              this.TipoOtPivotSelectedText =this.EditDataRest[0].ot_tipo_de_oti2;
              this.TipoOtProcesoSelectedText=this.EditDataRest[0].proceso_ot;
              this.TipoOtCausaSelectedText=this.EditDataRest[0].causa_ot;
              this.TipoBombaPivotSelectedText = this.EditDataRest[0].tipobomba_otc2;
              this.rep_fab=this.EditDataRest[0].rep_fab;
              //console.log(this.rep_fab);
              

              
              
            
              if (this.rep_fab=="RB"){this.ItemVisibleMotor=true;this.ItemPropro=true;}else{this.ItemVisibleMotor=false;}
              if (this.rep_fab=="RM"){this.ItemProCau=true;this.ItemPropro=true;}else{this.ItemProCau=false;}
              if (this.rep_fab=="RT" || this.rep_fab=="FB"||this.rep_fab=="FT"){this.ItemVisibleMotor=false;this.ItemProCau=false;this.ItemPropro=false;}else{}
              this.estado_dis_motor_otc=this.EditDataRest[0].estado_dis_motor_otc;
              
              this.MotorPivotSelectedText = this.EditDataRest[0].motor_ot2;
              
              this.VoltajePivotSelectedText = this.EditDataRest[0].voltaje_ot;
              this.PotenciaPivotSelectedText= this.EditDataRest[0].potencia2;
              this.globalVal.ot_estado_general= this.EditDataRest[0].ot_estado_general;
              
              this.globalVal.tipo=this.EditDataRest[0].tipobomba_otc2;
              this.globalVal.marca=this.EditDataRest[0].marca;
              this.globalVal.modelo=this.EditDataRest[0].modelo;
              this.globalVal.potencia=this.EditDataRest[0].potencia2;

              this.globalVal.nombre_partlist_otc=this.EditDataRest[0].nombre_partlist_otc;
              this.globalVal.tipo_partlist_otc=this.EditDataRest[0].tipo_partlist_otc;
              this.globalVal.nom_configuracion_exm=this.EditDataRest[0].nom_configuracion_exm;
              console.log('this.globalVal.nombre_partlist_otc',this.globalVal.nombre_partlist_otc);
              
              //if(this.ot_idtoggle==1){}else{this.FormCheckListPaso1.get('ot_cod_reb_motor').disable();} //// para que blooquee el 

            } catch (error) {
              console.log('error:::>', error);
            }

            if (this.EditDataRest[0].familia=='1') {
              this.ItemVisibleBomba=true;
              this.ItemVisibleTablero=false;

            } else {
              this.ItemVisibleBomba=false;
              this.ItemVisibleTablero=true;
            }

            
            this.DsTipoOt = rest['tipserv'];
            this.Opciones1 = rest['responsable'];
            this.DsMaterial = rest['material'];
            this.DsFrecuencia= rest ['frecuencia']
            this.DsVelrot= rest ['velrot']
            this.DsMotor = rest['motor'];
            this.DsVoltaje = rest['voltaje'];
            this.DsTipoPotencia= rest['potencia'];
            this.DsTipoEquipamiento= rest['tipo_equipamiento'];
            this.DsEstandar= rest['estandar'];
            this.DsTensionFuerza= rest['TensionFuerza'];
            this.DsTensionMando= rest['TensionMando'];
            this.DsTipoBomba=rest['tipobomba'];
            this.DsProceso=rest['Mttorproceso'];
            this.DsCausa=rest['Mttorcausa'];

            console.log('this.Opciones1', this.Opciones1);
            console.log(this.DsTipoOt);
            
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  async mostrarConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea realizar esta acción?',
      cssClass:'alerta-confirma',
            mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Si el usuario acepta, llama a tu función principal
            this.SaveFormTerminadoPaso1();
          },
        },
      ],
    });

    await alert.present();
  }
//////////////
/*onToggle(ev) {
  console.log("holaaaaa",ev);
  
  let toggle_2;
   toggle_2= ev.detail['checked'] ? '1' : '0';
     this.FormCheckListPaso1.controls['ot_idtoggle'].setValue(
      toggle_2
    );
    console.log("cahoooo",toggle_2);
    if(toggle_2== '1'){
      this.toggleState = false;
    }else {
      this.toggleState = true;
      this.FormCheckListPaso1.controls['ot_cod_reb_motor'].setValue('');
      }
     toggle_2; 
     console.log(this.toggleState);
     
}
*/
  async SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso1.valid) {
      this.id_orden_trab_cab = this.globalVal.id_orden_trab_cab;
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
      await this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
        .then( async (res) => {
          this.loadingController.dismiss();
          let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';
          this.globalVal.tipo=this.TipoBombaPivotSelectedText;

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
          console.log('finally:::>>LN:394');

          //this.navCtrl.navigateForward(["mtto-list-recinado"]);
        })
        .catch((err) => {
          console.log('errror:::>>>>>>>>>', err);
        });
      //////////////////////////////////////////////////////////
    } else {
      for (let i in this.FormCheckListPaso1.controls) {
        this.FormCheckListPaso1.controls[i].setValue(
          this.FormCheckListPaso1.controls[i].value
        );
        this.FormCheckListPaso1.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: 'ORDEN DE TRABAJO',
          subHeader: 'GENERAL',
          mode: 'ios',
          cssClass:'alerta-error',
          backdropDismiss: true,
          message: 'Falta seleccionar todos los datos',
          buttons: [
            {
              text: 'Aceptar',
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
        header: 'ORDEN DE TRABAJO',
        subHeader: 'DATOS GENERALES',
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

            this.id_orden_trab_cab = this.globalVal.id_orden_trab_cab;

            this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
              .then((res) => {
                this.loadingController.dismiss();
                console.log(res);

                alert('Guardado correctamente-----.');
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
  //   this.id_orden_trab_cab = this.globalVal.id_orden_trab_cab;
  //   this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
  //     this.id_orden_trab_cab
  //   );
  //   this.globalVal.checklist_paso1_apli=(event.detail['checked'])?'0':'1';
  //   this.ApiService.GuardarAplicaPaso(
  //     this.id_orden_trab_cab,
  //     1,
  //     event.detail['checked']
  //   )
  //     .then((res) => {
  //       // this.FormCheckListPaso1.controls["idchecklistpaso1"].setValue(
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
    this.checklist_paso1_apli_ck =
      this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
    };

    // this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
    //   this.checklist_paso1_apli_ck
    // );
  }
  ngOnInit() {}

  FSelectChangeTipoBomba(ev, index) {

    for (const row of this.DsTipoBomba) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['tipobomba_otc'].setValue(
          row.codigo
        );
        this.TipoBombaPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeTipoMaterial(ev, index) {
    console.log('select_change_material::', this.DsMaterial);
    for (const row of this.DsMaterial) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_tipo_material_ot'].setValue(
          row.codigo
        );
        this.MaterialPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeFrecuencia(ev, index) {
    console.log('select_change_material::', this.DsFrecuencia);
    for (const row of this.DsFrecuencia) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idfrecuencia_ot'].setValue(
          row.codigo
        );
        this.FrecuenciaPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeVelRot(ev, index) {
    console.log('select_change_material::', this.DsVelrot);
    for (const row of this.DsVelrot) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idvelrot_ot'].setValue(
          row.codigo
        );
        this.VelRotPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeMotor(ev, index) {
    for (const row of this.DsMotor) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['motor_ot'].setValue(row.codigo);
        this.MotorPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeVoltaje(ev, index) {
    for (const row of this.DsVoltaje) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.nombre, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['voltaje_ot'].setValue(row.nombre);
        this.VoltajePivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangePotencia(ev, index) {
    for (const row of this.DsTipoPotencia) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['potencia'].setValue(row.codigo);
        this.PotenciaPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeTipoEquipamiento(ev, index) {
    for (const row of this.DsTipoEquipamiento) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_tipo_equipamiento_ot'].setValue(row.codigo);
        this.TipoEquipamientoPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeEstandar(ev, index) {
    for (const row of this.DsEstandar) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_estandar_ot'].setValue(row.codigo);
        this.EstandarPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeTensionFuerza(ev, index) {
    for (const row of this.DsTensionFuerza) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_tension_fuerza_ot'].setValue(row.codigo);
        this.TensionFuerzaPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeTensionMando(ev, index) {
    for (const row of this.DsTensionMando) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_tension_mando_ot'].setValue(row.codigo);
        this.TensionMandoPivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeDsProceso(ev, index) {
    for (const row of this.DsProceso) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_proceso_ot'].setValue(row.codigo);
        this.FormCheckListPaso1.controls['idtipo_otc'].setValue('1');
        this.TipoOtProcesoSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeDsCausa(ev, index) {
    for (const row of this.DsCausa) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['id_causa_ot'].setValue(row.codigo);
        this.TipoOtCausaSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeTipoOt(ev, index) {
    for (const row of this.DsTipoOt) {
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idtipo_otc'].setValue(row.codigo);
        this.TipoOtPivotSelectedText = row.nombre;
      }
    }
    // this.FormCheckListPaso1.get('idtipo_otc').setValidators([this.valorDiferenteDeCero]);
    //       this.FormCheckListPaso1.get('idtipo_otc').updateValueAndValidity();
  }

  DownloadOpenLocalPdf() {
    /////////////////////////////////////////////////
    this.ApiService.LoadPdfOrdentrabajo(this.globalVal.id_orden_trab_cab)
      .then((rest) => {
        this.EditDataRest = rest;
        console.log('this.Opciones1', this.EditDataRest);
        // if (this.EditDataRest[0].checklist_paso1_apli==1) {
        //   ///this.checklist_paso1_apli_ck=true;
        // }
        try {
          /////////////////////////////////
          let ruta =
            ApiBackDomains.UrlDomainLocal +
            'aw_file/' +
            this.EditDataRest.nomfile;
          console.log(ruta);
          //Filesystem.appendFile()

          //////////////////////////////////
          Browser.open({ url: ruta });

          setTimeout(() => {
            Browser.close();
          }, 5000);
        } catch (error) {
          console.log('error:::>', error);
        }
      })
      .finally(() => {
        this.loadingController.dismiss();
      });
  }

  ///////////////////////////
}
