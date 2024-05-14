import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';//modificar con informe tecnico
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
@Component({
  selector: 'app-mtto-win-informe-tablero3',
  templateUrl: './mtto-win-informe-tablero3.page.html',
  styleUrls: ['./mtto-win-informe-tablero3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinInformeTablero3Page implements OnInit {
  FormCheckListPaso3: UntypedFormGroup;
  alertSiNo: any;
  EditDataRest1: any;
  checklist_paso3_apli_ck: boolean = false;
  constructor(
    public formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private ApiService1: MttoOrdentrabajoService,
    public globalVal: GlovalProvider,
    private ApiService: MttoInformeTecnicoService,
  ) {
    this.FormCheckListPaso3 = this.formBuilder.group({
      contactores: [''], 
      intprin: [''], 
      reltec: [''], 
      pulsador2: [''], 
      lamparas2: [''], 
      conmutadores2: [''], 
      relefas: [''], 
      horometro2: [''], 
      bloqaux: [''], 
      bartierr: [''], 
      sistdefuga: [''], 
      bobdis: [''], 
      ventextr: [''], 
      obser2: [''],
      corre_inf_cab: ['']
});
   }
   ionViewWillEnter() {
    this.checklist_paso3_apli_ck =
    this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    
    let event: any;
    event = {
      detail: { checked: this.checklist_paso3_apli_ck, jc: 0 },
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
          //  this.EditDataRest = rest['form'];
            this.EditDataRest1 = rest['list'];
            //console.log('hrlppp',this.EditDataRest);
            
            try{
               this.FormCheckListPaso3.setValue({ 
              
                corre_inf_cab: this.globalVal.corre_inf_cab,
                contactores: this.EditDataRest1[0].contactores,
                intprin: this.EditDataRest1[0].intprin,
                reltec: this.EditDataRest1[0].realtec,
                pulsador2: this.EditDataRest1[0].pulsador2,
                lamparas2: this.EditDataRest1[0].lamparas2,
                conmutadores2: this.EditDataRest1[0].conmutadores2,
                relefas: this.EditDataRest1[0].relefas,
                horometro2: this.EditDataRest1[0].horometro2,
                bloqaux: this.EditDataRest1[0].bloqaux,
                bartierr: this.EditDataRest1[0].bartierr,
                sistdefuga: this.EditDataRest1[0].sistdefuga,
                bobdis: this.EditDataRest1[0].bobdis,
                ventextr: this.EditDataRest1[0].ventextr,
                obser2: this.EditDataRest1[0].obser2
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
              this.FormCheckListPaso3.controls['corre_inf_cab'].setValue(
                this.globalVal.corre_inf_cab
              );
           // this.corre_inf_cab = this.globalVal.corre_inf_cab;
            this.ApiService.GuardarinfPaso3(this.FormCheckListPaso3.value)
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
