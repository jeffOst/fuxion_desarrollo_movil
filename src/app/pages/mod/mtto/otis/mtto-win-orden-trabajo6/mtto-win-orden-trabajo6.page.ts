import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { NavigationExtras } from '@angular/router';
import { NavController, AlertController, IonInput, Platform, LoadingController, ModalController } from '@ionic/angular';
 import { PopUpBombaPage } from 'src/app/pages/mod/mtto/otis/pop-up-bomba/pop-up-bomba.page';
 import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
 import { model_bomba } from "src/app/interfaces/mtto/mtto-ordentrabajo";
 import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
 

@Component({
  selector: 'app-mtto-win-orden-trabajo6',
  templateUrl: './mtto-win-orden-trabajo6.page.html',
  styleUrls: ['./mtto-win-orden-trabajo6.page.scss'],
  standalone: true,

  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})

export class MttoWinOrdenTrabajo6Page implements OnInit {
  dataReturned: any;
  ArrayItemsSelectedDesti: model_bomba[] = [];
  id_device: string;
  codsmg: string;
  reb_motor:any;
  ng_fch_entrega_mtto: any ;
  ng_fch_entrega_mtto2: any ;
  FormCheckListPaso6: UntypedFormGroup;
  DsMaterial: any;
  RebMotor: any;
  listmotor:any;
  id_orden_trab_fis_cab;
  id_orden_trab_cab;
  id_orden_trab_cab_2;
  EditDataRest: any;
  filas: any[] = []; 
  TipoBombaPivotSelectedText: string;
  MotorRebSelectedText: string;
  scanActive: boolean = true;
  alertSiNo: any;
  checklist_paso1_apli_ck: boolean = false;
  constructor(
  private modalCtrl: ModalController,
  private alertController: AlertController,
  private loadingController: LoadingController,
  public globalVal: GlovalProvider,
  public storage: Storage,
  public formBuilder: UntypedFormBuilder,
  private ApiService: MttoOrdentrabajoService,
  public navCtrl: NavController,
  
  ) { 
    this.FormCheckListPaso6 = this.formBuilder.group({
      reb_motor: [''],
      fch_entrega_mtto:[''],
      fch_entrega_mtto2:[''],
      cod_list:[''],
      id_orden_trab_cab: this.globalVal.id_orden_trab_cab
    });
    
  }
  async mostrarConfirmacion6() {
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
            this.SaveFormTerminadoPaso6();
          },
        },
      ],
    });

    await alert.present();
  }
  async mostrarEliminar6(event, item: any) {
    console.log(event, item);
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Desea eliminar el registro?',
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
            this.dellistPaso6(item);
          },
        },
      ],
    });
    await alert.present();
  }
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
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();
       
        this.ApiService.FormFindPaso6()
          .then((rest) => {
            //console.log(rest);
            
            this.RebMotor= rest['mttorrebesta'];
            try{
               this.FormCheckListPaso6.setValue({ 
               // id_orden_trab_cab:this.globalVal.id_orden_trab_cab
               });
              
            }catch (error) {
              console.log('error:::>', error);
            }
            console.log("el id que debe pasar es",this.globalVal.id_orden_trab_cab);
           
            
          })
          this.ApiService.FormFindPaso61(this.globalVal.id_orden_trab_cab)
            .then((rest) => {
              //console.log(rest['list']);
              
              this.listmotor= rest['list'];
             // console.log("quetrae el listado",this.listmotor);
              try{
                this.FormCheckListPaso6.setValue({ 
                 // id_orden_trab_cab:this.listmotor[0].id_orden_trab_cab
                });
                
              }catch (error) {
                console.log('error:::>', error);
              }
              
            })
          .finally(() => {
            this.loadingController.dismiss();
          });
          
      });
      
    }
    async dellistPaso6(item:any) {
        const loading = this.loadingController
          .create({
            message: 'Eliminando Registro',
            translucent: true, 
          })
          .then((loading) => {
            loading.present();
          });
          // this.FormCheckListPaso6.controls['cod_list'].setValue(
          //   this.ng_fch_entrega_mtto
          // );
          // this.FormCheckListPaso6.controls['fch_entrega_mtto2'].setValue(
          //   this.ng_fch_entrega_mtto2
          // );
        await this.ApiService.ElminarlistPaso6(item)
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
      }
    async SaveFormTerminadoPaso6() {
      if (this.FormCheckListPaso6.valid) {
        const loading = this.loadingController
          .create({
            message: 'Guardando Paso 1...',
            translucent: true, 
          })
          .then((loading) => {
            loading.present();
          });
          this.FormCheckListPaso6.controls['fch_entrega_mtto'].setValue(
            this.ng_fch_entrega_mtto
          );
          this.FormCheckListPaso6.controls['fch_entrega_mtto2'].setValue(
            this.ng_fch_entrega_mtto2
          );


        await this.ApiService.GuardarFormPaso6(this.FormCheckListPaso6.value)
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
        for (let i in this.FormCheckListPaso6.controls) {
          this.FormCheckListPaso6.controls[i].setValue(
            this.FormCheckListPaso6.controls[i].value
          );
          this.FormCheckListPaso6.controls[i].markAsTouched();
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
  ngOnInit() {
  }
  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-win-orden-trabajo'], navigationExtras);
  }
  FSelectChangeMotor(ev, index) {
    for (const row of this.RebMotor) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso6.controls['reb_motor'].setValue(row.codigo);
        this.MotorRebSelectedText = row.nombre;
      }
    }
  }

  ionViewDidEnter() {
    this.ng_fch_entrega_mtto=new Date().toISOString();
    //this.load_cbos_pieza_material_maquina();
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });
    this.ng_fch_entrega_mtto2=new Date().toISOString();
    //this.load_cbos_pieza_material_maquina();
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });
  }
 

 

}
