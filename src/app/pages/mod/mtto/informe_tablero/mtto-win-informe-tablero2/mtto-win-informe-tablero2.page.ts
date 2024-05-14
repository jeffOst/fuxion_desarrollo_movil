import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { IonicModule } from '@ionic/angular';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';//modificar con informe tecnico
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
@Component({
  selector: 'app-mtto-win-informe-tablero2',
  templateUrl: './mtto-win-informe-tablero2.page.html',
  styleUrls: ['./mtto-win-informe-tablero2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinInformeTablero2Page implements OnInit {
  FormCheckListPaso2: UntypedFormGroup;
  alertSiNo: any;
  corre_inf_cab;
  IdUsuarioLocal: string;
  disableButtonPaso1: boolean = true;
  EditDataRest1: any;
  checklist_paso2_apli_ck: boolean = false;
  constructor(
    public formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private loadingController: LoadingController,
    private ApiService1: MttoOrdentrabajoService,
    private ApiService: MttoInformeTecnicoService,
  ) {
    this.FormCheckListPaso2 = this.formBuilder.group({
      pulsador1: [''],
      lamparas1: [''],
      conmutadores: [''],
      horometro: [''],
      amper: [''],
      voltim: [''],
      keypad: [''],
      balsono: [''],
      prensaes: [''],
      gabmetal: [''],
      obser1: [''],
      corre_inf_cab: ['']
});

   }
   ionViewWillEnter() {
    this.checklist_paso2_apli_ck =
    this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    
    let event: any;
    event = {
      detail: { checked: this.checklist_paso2_apli_ck, jc: 0 },
    };
  }
   FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();
       
        this.ApiService1.FormFindinftab1(this.globalVal.corre_inf_cab)
          .then((rest) => {
            console.log(this.globalVal.corre_inf_cab);
           // this.EditDataRest = rest['form'];
            this.EditDataRest1 = rest['list'];
            //console.log('hrlppp',this.EditDataRest);
            
            try{
               this.FormCheckListPaso2.setValue({ 
                corre_inf_cab: this.globalVal.corre_inf_cab,
                pulsador1: this.EditDataRest1[0].pulsador1,
                lamparas1: this.EditDataRest1[0].lamparas1,
                conmutadores: this.EditDataRest1[0].conmutadores,
                horometro: this.EditDataRest1[0].horometro,
                amper: this.EditDataRest1[0].amper,
                voltim: this.EditDataRest1[0].voltim,
                keypad: this.EditDataRest1[0].keypad,
                balsono: this.EditDataRest1[0].balsono,
                prensaes: this.EditDataRest1[0].prensaes,
                gabmetal: this.EditDataRest1[0].gabmetal,
                obser1: this.EditDataRest1[0].obser1
               });
             // console.log('esta marca',this.EditDataRest[0].marca);
              
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

   SaveFormInfPaso1() {
    this.alertSiNo = this.alertController
      .create({
        header: 'INFORME TECNICO',
        subHeader: 'DATOS GENERALES',
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
                message: 'Guardando datos generales...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });
              console.log(this.globalVal.corre_inf_cab);
              
            this.FormCheckListPaso2.controls['corre_inf_cab'].setValue(
              this.globalVal.corre_inf_cab
            );
            this.ApiService.GuardarinfPaso2(this.FormCheckListPaso2.value)
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
          } else {
          }
        });
        /////////////////////////
      });
  }
  ngOnInit() {
  }

}
