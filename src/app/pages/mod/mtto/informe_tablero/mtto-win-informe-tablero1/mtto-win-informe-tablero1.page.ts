import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';//modificar con informe tecnico
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-mtto-win-informe-tablero1',
  templateUrl: './mtto-win-informe-tablero1.page.html',
  styleUrls: ['./mtto-win-informe-tablero1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinInformeTablero1Page implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
  checklist_paso1_apli_ck: boolean = false;
  navParamsAny: any;
  corre_inf_cab;
  EditDataRest: any;
  EditDataRest1: any;
  alertSiNo: any;
  ng_fch_ini_inf: any ;
  ng_fch_fin_inf: any;
  constructor(
    public formBuilder: UntypedFormBuilder,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public globalVal: GlovalProvider,
    private router: Router,
    private alertController: AlertController,
  ) { 
    this.FormCheckListPaso1 = this.formBuilder.group({
                marca: [''],
                potencia: [''],
                site: [''],
                tarranque: [''],
                voltajeman:[''],
                codsmg: [''],

                corre_inf_cab: [''],
                fch_fin_inf: [''],
                fch_ini_inf: [''],
                horastrab: [''],
                fech_de_registro: ['']
    });
    if (this.globalVal.checklist_paso_pivot == '') {
      try {
        this.navParamsAny =this.router.getCurrentNavigation().extras.state['Row'];
        globalVal.corre_inf_cab = this.navParamsAny.corre_inf_cab;
        console.log(globalVal.corre_inf_cab);/////
      } catch (error) {
        console.log(globalVal.corre_inf_cab);
        this.corre_inf_cab = globalVal.corre_inf_cab;
      }
    } else {
      this.corre_inf_cab = globalVal.corre_inf_cab;
    }
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.checklist_paso1_apli_ck =
    this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
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
       
        this.ApiService.FormFindinftab1(this.globalVal.corre_inf_cab)
          .then((rest) => {
            console.log(this.globalVal.corre_inf_cab);
            this.EditDataRest = rest['form'];
            this.EditDataRest1 = rest['list'];
            //console.log('hrlppp',this.EditDataRest);
            
            try{
               this.FormCheckListPaso1.setValue({ 
                marca: this.EditDataRest[0].marca,
                potencia: this.EditDataRest[0].potencia,
                site: this.EditDataRest[0].Y06002,
                tarranque: this.EditDataRest[0].tarranque,
                voltajeman:this.EditDataRest[0].voltaje_a,
                codsmg: this.EditDataRest[0].codsmg,
                corre_inf_cab: this.globalVal.corre_inf_cab,
                fch_ini_inf: this.EditDataRest1[0].fchini_it,
                fch_fin_inf: this.EditDataRest1[0].fchfin_it,
                horastrab: this.EditDataRest1[0].hrstrab_it,
                fech_de_registro: this.EditDataRest1[0].fech_de_registro
               });
              console.log('este tiempo',this.EditDataRest1[0].fchfin_it);
              
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

    async SaveFormTerminadoPaso1() {
      if (this.FormCheckListPaso1.valid) {
        const loading = this.loadingController
          .create({
            message: 'Guardando Paso 1...',
            translucent: true, 
          })
          .then((loading) => {
            loading.present();
          });
          this.FormCheckListPaso1.controls['corre_inf_cab'].setValue(
            this.globalVal.corre_inf_cab
          );
          this.FormCheckListPaso1.controls['fch_ini_inf'].setValue(
            this.ng_fch_ini_inf
          );
          this.FormCheckListPaso1.controls['fch_fin_inf'].setValue(
            this.ng_fch_fin_inf
          );
          console.log('este es el form completo',this.FormCheckListPaso1.value);
          
        await this.ApiService.GuardarInfPaso1(this.FormCheckListPaso1.value)
          .then( async (res) => {
            this.loadingController.dismiss();
            let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';

            const alert = await this.alertController.create({
              header: 'ORDEN DE TRABAJO',
              subHeader: 'ENTREGA MOTOR',
              cssClass:css_msj,
              mode: 'ios',
              animated: true,
              message: res[0].o_msj,// 'La operación se completó con éxito.',
              buttons: [
                {
                  text: 'Aceptar',
  
                  handler: () => {
                    // Realiza acciones adicionales después de aceptar la confirmación
                  //  this.FLoadForms();
                    console.log('Operación confirmada');
                  },
                },
              ],
            });
  
            await alert.present();
  
  
          })
          .finally(() => {
            console.log('finally:::>>LN:394');
            this.FLoadForms();
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
}
