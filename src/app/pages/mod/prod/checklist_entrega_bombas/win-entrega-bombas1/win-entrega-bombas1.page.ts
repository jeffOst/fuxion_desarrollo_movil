import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { ProdEntregaBomba } from 'src/app/api/prod/prod-entrega-bomba.service';
import { FormsModule, NgForm,NgModel,NgModelGroup,ReactiveFormsModule} from '@angular/forms';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { PopUpOtProtocolosPage } from 'src/app/pages/mod/prod/checklist_entrega_bombas/pop-up-ot-protocolos/pop-up-ot-protocolos.page';
import { FormBuilder,UntypedFormBuilder, UntypedFormGroup,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { checklist_en } from 'src/app/interfaces/prod/checklist_entrega';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
@Component({
  selector: 'app-win-entrega-bombas1',
  templateUrl: './win-entrega-bombas1.page.html',
  styleUrls: ['./win-entrega-bombas1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class WinEntregaBombas1Page implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
  disableButton;
  disableButton_1;
  ng_fch_entrega_mtto: any ;
  Cancelar: string = 'Cancelar';
  scanActive = false;
  isToggled: boolean = false;
  toggleText: string = 'Inactivo';
  dataReturned: any;
  checkboxValue: any;
  id_device: string;
  navParamsAny: any;
  idregistro: any;
  estaCargando: boolean = false;
  isChecked101: boolean;
  isChecked11: boolean;
  DataSetGrid: any;
  opciones: any;
  materiales: any;
  medidas: any;
  firma1: any;
  firma2: any;
  estprotocolo: any;
  estbaker: any;
  // idmaterial: any;
  // idmedida: any;
  constructor(
    private modalCtrl: ModalController,
    public formBuilder: UntypedFormBuilder,
    private loadingController: LoadingController,
    private ApiService: ProdEntregaBomba,
    private alertController: AlertController,
    public globalVal: checklist_en,
    private router: Router,//,
    public storage: Storage,
    public navCtrl: NavController,
    private ref: ChangeDetectorRef,
  ) { 
    this.FormCheckListPaso1 = this.formBuilder.group({
      nomb_bomba:[''],
      nomb_campana:[''],
      idcampana:[''],
      lugar_dest:[''],
      potencia_bomba: [''],
      idprotocolo: [''],
      idmaterial:[''],
      idmedida:[''],
      fech_hora:[''],
      estado:[''],
      lr1:[''],
      lr2:[''],
      tc1:[''],
      tc2:[''],
      cc1:[''],
      cc2:[''],

      estado1:[''],
      estado2:[''],
      estado3:[''],
      estado4:[''],
      estado5:[''],
      estado6:[''],
      estado7:[''],
      estado8:[''],
      estado9:[''],
      estado10:[''],
      estado11:[''],

      observ1:[''],
      observ2:[''],
      observ3:[''],
      observ4:[''],
      observ5:[''],
      observ6:[''],
      observ7:[''],
      observ8:[''],
      observ9:[''],
      observ10:[''],
      observ11:[''],

      buton11:['false'],
      buton12:['false'],
      buton13:['false'],
      buton14:['false'],
      buton15:['false'],
      buton16:['false'],
      buton17:['false'],
      buton18:['false'],
      buton19:['false'],
      buton20:['false'],
      buton21:['false'],

      firm1:[''],
      firm2:[''],
      estprotocolo:[''],
      estbaker:[''],
    });
  }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state && 'Row' in this.router.getCurrentNavigation().extras.state) {
      this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
  } else {
      this.navParamsAny = 0;  // Si no existe 'Row', asigna el valor 0
  }
  
    this.idregistro= this.navParamsAny.idcheckentbomb;
    console.log('paso los parametros:' ,this.navParamsAny.idcheckentbomb);

    this.FFirmInicial();
    this.FcboInicial();
    
    // setTimeout(() => {
      this.FListaInicial();
  //   }, 1000);
  }
  ionViewDidEnter() {
    
    //this.load_cbos_pieza_material_maquina();
    this.storage.get('DEVICE_INFO').then((result1) => {
      this.id_device = result1.uuid;
      console.log('this.id_device::>', this.id_device);

    });
  }
async win_equipo_protocol(){
      const modal = await this.modalCtrl.create({
        component: PopUpOtProtocolosPage,
        backdropDismiss: true,
        showBackdrop: true,
        mode: 'ios',
        componentProps: {
          // index_p: this.i_row,
         }
      });
  
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned.data != undefined) {
          this.dataReturned = dataReturned.data;
           console.log('dataReturned::206', dataReturned);
          this.FormCheckListPaso1.controls['nomb_campana'].setValue(
            this.dataReturned.nombres
          );
          // this.FormCheckListPaso1.controls['lugar_dest'].setValue(
          //   this.dataReturned.destino
          // );
          // this.FormCheckListPaso1.controls['potencia_bomba'].setValue(
          //   this.dataReturned.potencia
          // );
          this.FormCheckListPaso1.controls['idcampana'].setValue(
            this.dataReturned.id
          );
        }
      });
      return await modal.present();
}

onCheckboxChange11(event: any) {
  this.FormCheckListPaso1.controls['buton11'].setValue(
  event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange12(event: any) {
  this.FormCheckListPaso1.controls['buton12'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange13(event: any) {
  this.FormCheckListPaso1.controls['buton13'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange14(event: any) {
  this.FormCheckListPaso1.controls['buton14'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange15(event: any) {
  this.FormCheckListPaso1.controls['buton15'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange16(event: any) {
  this.FormCheckListPaso1.controls['buton16'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange17(event: any) {
  this.FormCheckListPaso1.controls['buton17'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange18(event: any) {
  this.FormCheckListPaso1.controls['buton18'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange19(event: any) {
  this.FormCheckListPaso1.controls['buton19'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange20(event: any) {
  this.FormCheckListPaso1.controls['buton20'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}
onCheckboxChange21(event: any) {
  this.FormCheckListPaso1.controls['buton21'].setValue(
 event.detail.checked ? 1 : 0); // Cambia a 1 o 0 según el estado
}


async SaveFormTerminadoPaso1(estado:any) {
  //  if (estado==1){}
  //  if (this.FormCheckListPaso1.valid) {
   if (this.estprotocolo==1 && this.estbaker==1) {
    const loading = this.loadingController
      .create({
        message: 'Guardando Paso 1...',
        translucent: true, 
      })
      .then((loading) => {
        loading.present();
      });
      this.FormCheckListPaso1.controls['fech_hora'].setValue(
        this.ng_fch_entrega_mtto
      );
      this.FormCheckListPaso1.controls['estado'].setValue(
        estado
      );

    await this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
      .then( async (res) => {
        this.loadingController.dismiss();
        let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';

        const alert = await this.alertController.create({
          header: 'CONFIRMACION',
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
                this.navCtrl.navigateForward(['grid-entrega-bombas']);
              },
            },
          ],
        });

        await alert.present();


      })
      .finally(() => {
        console.log('finally:::>>LN:394');
        // this.FLoadForms();
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    } else {
      // Manejo de errores de validación
      console.log('entraaaaa al elseeee');
      
      this.showAlert();
    }

  }

  async SaveFormTerminadoPaso11(estado:any) {
    //  if (estado==1){}
    //  if (this.FormCheckListPaso1.valid) {
      const loading = this.loadingController
        .create({
          message: 'Guardando Paso 1...',
          translucent: true, 
        })
        .then((loading) => {
          loading.present();
        });
        this.FormCheckListPaso1.controls['fech_hora'].setValue(
          this.ng_fch_entrega_mtto
        );
        this.FormCheckListPaso1.controls['estado'].setValue(
          estado
        );
  
      await this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
        .then( async (res) => {
          this.loadingController.dismiss();
          let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';
  
          const alert = await this.alertController.create({
            header: 'CONFIRMACION',
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
                this.navCtrl.navigateForward(['grid-entrega-bombas']);
                console.log('Operación confirmada');
                },
              },
            ],
          });
  
          await alert.present();
  
  
        })
        .finally(() => {
          console.log('finally:::>>LN:394');
          // this.FLoadForms();
          //this.navCtrl.navigateForward(["mtto-list-recinado"]);
        })
        .catch((err) => {
          console.log('errror:::>>>>>>>>>', err);
        });
      // } else {
      //   // Manejo de errores de validación
      //   console.log('entraaaaa al elseeee');
        
      //   this.showAlert();
      // }
  
    }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'ALERTA',
      subHeader: 'Confirmacion',
      cssClass:'alerta-error',
      mode: 'ios',
      animated: true,
      message: 'Error el Protocolo y Baker deben estar Aprobados ',
      buttons: [
        {
          text: 'Aceptar',

          handler: () => {

            console.log('Operación confirmada');
           
          },
        },
      ],
    });

    await alert.present();
  }
FListaInicial(){

  const loading = this.loadingController
  .create({
    message: 'Cargando lista...',
    translucent: true, //,
    //cssClass: 'custom-class custom-loading'
  })
  .then((loading) => {
    loading.present();
    console.log('ingresa a realizar la consulta');
    
    this.ApiService.cargaReg(
      this.idregistro
      
    )
      .then((res) => {
        this.DataSetGrid = res;
        this.loadingController.dismiss();
        this.estaCargando = false;

        console.log('prueba de datos',this.DataSetGrid);
        this.FormCheckListPaso1.setValue({
          nomb_bomba:this.DataSetGrid[0].codsmg,
          lugar_dest:this.DataSetGrid[0].destino,
          potencia_bomba: this.DataSetGrid[0].potencia_bomb,
          idprotocolo: this.DataSetGrid[0].idcheckentbomb,

          nomb_campana: this.DataSetGrid[0].nomb_campana,
          idcampana: this.DataSetGrid[0].idcampana_ceb,
          fech_hora: this.DataSetGrid[0].fch_entrega_ceb,

          lr1:this.DataSetGrid[0].ca1_mts_pp,
          lr2:this.DataSetGrid[0].ca2_mts_pp,
          tc1:this.DataSetGrid[0].tipcable1,
          tc2:this.DataSetGrid[0].tipcable2,
          cc1:this.DataSetGrid[0].ca1_estado_pp,
          cc2:this.DataSetGrid[0].ca2_estado_pp,
          estado:this.DataSetGrid[0].estado_ceb,

          estado1:this.DataSetGrid[0].estados1_ceb,
          estado2:this.DataSetGrid[0].estados2_ceb,
          estado3:this.DataSetGrid[0].estados3_ceb,
          estado4:this.DataSetGrid[0].estados4_ceb,
          estado5:this.DataSetGrid[0].estados5_ceb,
          estado6:this.DataSetGrid[0].estados6_ceb,
          estado7:this.DataSetGrid[0].estados7_ceb,
          estado8:this.DataSetGrid[0].estados8_ceb,
          estado9:this.DataSetGrid[0].estados9_ceb,
          estado10:this.DataSetGrid[0].estados10_ceb,
          estado11:this.DataSetGrid[0].estados11_ceb,

          observ1:this.DataSetGrid[0].observ1_ceb,
          observ2:this.DataSetGrid[0].observ2_ceb,
          observ3:this.DataSetGrid[0].observ3_ceb,
          observ4:this.DataSetGrid[0].observ4_ceb,
          observ5:this.DataSetGrid[0].observ5_ceb,
          observ6:this.DataSetGrid[0].observ6_ceb,
          observ7:this.DataSetGrid[0].observ7_ceb,
          observ8:this.DataSetGrid[0].observ8_ceb,
          observ9:this.DataSetGrid[0].observ9_ceb,
          observ10:this.DataSetGrid[0].observ10_ceb,
          observ11:this.DataSetGrid[0].observ11_ceb,

          buton11:this.DataSetGrid[0].btn11_ceb,
          buton12:this.DataSetGrid[0].btn12_ceb,
          buton13:this.DataSetGrid[0].btn13_ceb,
          buton14:this.DataSetGrid[0].btn14_ceb,
          buton15:this.DataSetGrid[0].btn15_ceb,
          buton16:this.DataSetGrid[0].btn16_ceb,
          buton17:this.DataSetGrid[0].btn17_ceb,
          buton18:this.DataSetGrid[0].btn18_ceb,
          buton19:this.DataSetGrid[0].btn19_ceb,
          buton20:this.DataSetGrid[0].btn20_ceb,
          buton21:this.DataSetGrid[0].btn21_ceb,
          firm1:this.DataSetGrid[0].idfirma1,    
          firm2:this.DataSetGrid[0].idfirma2,    
          idmaterial:this.DataSetGrid[0].idmaterial_ceb,
          idmedida:this.DataSetGrid[0].idmedida_ceb,
          estprotocolo:this.DataSetGrid[0].flag_evaluacion_ppc,
          estbaker:this.DataSetGrid[0].estado_baker
        });
        this.ng_fch_entrega_mtto=this.DataSetGrid[0].fch_entrega_ceb,
        this.firma1=this.DataSetGrid[0].idfirma1,
        this.firma2=this.DataSetGrid[0].idfirma2,

        this.estprotocolo=this.DataSetGrid[0].flag_evaluacion_ppc,
        this.estbaker=this.DataSetGrid[0].estado_baker
        // this.idmaterial=this.DataSetGrid[0].idmaterial_ceb,
        // this.idmedida=this.DataSetGrid[0].idmedida_ceb
        console.log('material',this.DataSetGrid[0].idmedida_ceb,this.DataSetGrid[0].idmaterial_ceb,);
        console.log('material',this.firma1);
        if (this.DataSetGrid[0].estado_ceb==2){
          this.disableButton=true;
          this.disableButton_1=true;
        }
        else if (this.DataSetGrid[0].estado_ceb==3){
          this.disableButton=true;
          this.disableButton_1=false;
        }
        else if (this.DataSetGrid[0].estado_ceb==1){
          this.disableButton = false;
          this.disableButton_1=true;
        }
        
        else {
          this.disableButton = true;
          this.disableButton_1=true;

        }
      })
      .finally(() => {
        this.loadingController.dismiss();
        setTimeout(() => {
          //this.idinputsearch_equipo.setFocus();
        }, 600);
      })
      .catch(() => {
        //console.log('catcha api lista');
      })
      .then((err) => {
        console.log('thennnnn', err);
        loading.dismiss();
      });
  });

}
FFirmInicial(){

  const loading = this.loadingController
  .create({
    message: 'Cargando lista...',
    translucent: true, //,
    //cssClass: 'custom-class custom-loading'
  })
  .then((loading) => {
    loading.present();
    console.log('ingresa a realizar la consulta');
    
    this.ApiService.cargaFirma(
    )
      .then((res) => {
        this.opciones = res;
        this.loadingController.dismiss();
        this.estaCargando = false;

        console.log('prueba de opciones',this.opciones);
      })
      .finally(() => {
        this.loadingController.dismiss();
        // setTimeout(() => {
        //   //this.idinputsearch_equipo.setFocus();
        // }, 600);
      })
      .catch(() => {
        //console.log('catcha api lista');
      })
      .then((err) => {
        console.log('thennnnn', err);
        loading.dismiss();
      });
  });

}

FcboInicial(){

  const loading = this.loadingController
  .create({
    message: 'Cargando lista...',
    translucent: true, //,
    //cssClass: 'custom-class custom-loading'
  })
  .then((loading) => {
    loading.present();
    console.log('ingresa a la consulta materiales y medidas');
    
    this.ApiService.cargacbo(
    )
      .then((res) => {
        this.materiales = res['material'];
        this.medidas = res['medida'];
        this.loadingController.dismiss();
        this.estaCargando = false;

        console.log('materiales y medidas',this.materiales,this.medidas);
      })
      .finally(() => {
        this.loadingController.dismiss();
        // setTimeout(() => {
        //   //this.idinputsearch_equipo.setFocus();
        // }, 600);
      })
      .catch(() => {
        //console.log('catcha api lista');
      })
      .then((err) => {
        console.log('thennnnn', err);
        loading.dismiss();
      });
  });

}
onSelectMat(event: any) {
  // console.log('Selection material:', event.detail.value);
  this.FormCheckListPaso1.controls['idmaterial'].setValue(
    event.detail.value
  );
}
onSelectMed(event: any) {
  this.FormCheckListPaso1.controls['idmedida'].setValue(
    event.detail.value
  );
}

}
