import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule,ToastController } from '@ionic/angular';
import { Network, ConnectionStatus } from "@capacitor/network";
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { PopUpTecChecklisthPage } from 'src/app/pages/mod/mtto/checklist_herra/pop-up-tec-checklisth/pop-up-tec-checklisth.page';
import { PopUpImagenHerraPage } from 'src/app/pages/mod/mtto/checklist_herra/pop-up-imagen-herra/pop-up-imagen-herra.page';
import { PopUpAddHerraPage } from 'src/app/pages/mod/mtto/checklist_herra/pop-up-add-herra/pop-up-add-herra.page';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-mtto-win-checklist-herra',
  templateUrl: './mtto-win-checklist-herra.page.html',
  styleUrls: ['./mtto-win-checklist-herra.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinChecklistHerraPage implements OnInit {
  networkStatus: ConnectionStatus;
  tituloTollBar: string = 'CheckList Herramientas';
  Cancelar: string = 'Cancelar';
  disableButton: boolean = false;
  estaCargando: boolean = false;
  IdUsuarioLocal: string;
  NombresUsuarioLocal: string;
  FormCheckListPaso1: UntypedFormGroup;
  EditDataRest: any;
  DataSetGrid: any;
  DataSetGrid1: any;
  selectedSegment: string = null;
  DsIsla: any;
  DsMesa: any;
  ot_idtoggle: any;
  toggleValue: boolean = false; 
  DsTecnico: any;
  dataReturned: any;
  navParamsAny: any;
  idregistro: any;
  alertSiNo: any;
  ng_fch_ins: any;
  IslaPivotSelectedText: string;
  MesaPivotSelectedText: string;
  TecnicoPivotSelectedText: string;
  checklist_paso1_apli_ck: boolean = false;
  toggleState: boolean = true;
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private router: Router,
    public formBuilder: UntypedFormBuilder,
    private loadingController: LoadingController,
    private ApiService: MttoListChecklistHerra,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {
    this.FormCheckListPaso1 = this.formBuilder.group({
    nomusuario: [''],
    idmesa: [''],
    idisla: [''],
    idusuario: [''],
    idestado_hd: [''],
    obser: [''],
    correlativo: [''],
    tipo_ckl: [''],
    fch_inspec_ch:['']
    
   });
   try {
    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    console.log('this.navParamsAny',this.navParamsAny);
    this.idregistro=this.navParamsAny.id_check_ch;
    console.log('this.idregistro',this.navParamsAny);
    
  } catch (error) {
    console.log(error);

  }
   }

  ngOnInit() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;  
      })
    }
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      if (this.networkStatus && this.networkStatus.connected) {
        this.tituloTollBar = 'CheckList de Herramientas';
      }
      else {
        this.tituloTollBar = 'Sin conexion a internet';
      }
    })


    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.IdUsuarioLocal = localStorage.user_id;
       this.NombresUsuarioLocal = localStorage.user_name;
      console.log(localStorage);
      
    });
  }
  ionViewWillEnter() {
    // this.checklist_paso1_apli_ck =
    //   this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadmot();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
    };

    // this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
    //   this.checklist_paso1_apli_ck
    // );
  }
  FLoadmot() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        //this.corre_inf_cab = this.globalVal.corre_inf_cab;
        //console.log(this.corre_inf_cab);

        this.ApiService.cargawin1(
          //this.globalVal.id_orden_trab_cab
          this.IdUsuarioLocal,
          this.idregistro
        )
          .then((rest) => {
            //console.log(rest);
            //this.ValuesAcordionGroup=[];
            this.DataSetGrid = rest['form'];
            this.DataSetGrid1 = rest['cab'];
            //console.log('probando como pasa',this.DataSetGrid);
            // console.log('dategrid1111',this.DataSetGrid1[0].ubi_isla_ch,this.DataSetGrid1[0].mesa_trab_ch);
           
            
            try{
               this.FormCheckListPaso1.controls['nomusuario'].setValue(
                this.DataSetGrid1[0].tec_res_ch
                   );
              this.FormCheckListPaso1.controls['idusuario'].setValue(
                this.DataSetGrid1[0].id_personal
                   );
                // this.FormCheckListPaso1.controls['idisla'].setValue(
                // this.DataSetGrid1[0].ubi_isla_ch
                //     );
                this.FormCheckListPaso1.controls['idisla'].setValue(
                  this.DataSetGrid1[0].idisla
                     );
                this.FormCheckListPaso1.controls['idmesa'].setValue(
                  this.DataSetGrid1[0].idmesa
                     );
                     this.FormCheckListPaso1.controls['obser'].setValue(
                      this.DataSetGrid1[0].observ_ch
                         );
                this.FormCheckListPaso1.controls['correlativo'].setValue(
                      this.DataSetGrid1[0].corre_ch
                         );
                this.FormCheckListPaso1.controls['tipo_ckl'].setValue(
                      this.DataSetGrid1[0].tipo_doc_ch1
                         );
                 this.FormCheckListPaso1.controls['fch_inspec_ch'].setValue(
                  this.DataSetGrid1[0].fch_inspec_ch
                         );
                
                this.IslaPivotSelectedText=this.DataSetGrid1[0].ubi_isla_ch;
                this.MesaPivotSelectedText=this.DataSetGrid1[0].mesa_trab_ch;
              // this.FormCheckListPaso1.controls['idmesa'].setValue(
              //   this.DataSetGrid1[0].mesa_trab_ch
              //       );
           }catch (error) {
             console.log('error:::>', error);
           }
           this.DsIsla= rest ['isla'];
           this.DsMesa= rest ['mesa'];
           this.DsTecnico= rest ['tecnico'];
          //  console.log('mesaaa',this.DsMesa);
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }
  FSelectChangeIsla(ev, index) {
    console.log('select_change_material::', this.DsIsla);
    for (const row of this.DsIsla) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value,'valor isla');
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idisla'].setValue(
          row.codigo
        );
         this.IslaPivotSelectedText = row.nombre;
      }
      if (index > 0) {
        this.FormCheckListPaso1.controls['idisla'].setValue(
          index
        );
         this.IslaPivotSelectedText = row.nombre;
      }
    }
  }
  FSelectChangeMesa(ev, index) {
    console.log('select_change_material::', this.DsMesa);
    for (const row of this.DsMesa) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(ev.detail.value,'valor mesaaa');
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idmesa'].setValue(
          row.codigo
        );
       
         this.MesaPivotSelectedText = row.nombre;
      }
      if (index > 0) {
        this.FormCheckListPaso1.controls['idmesa'].setValue(
          index
        );
         this.MesaPivotSelectedText = row.nombre;
      }
    }
  }
  async open_popup_herra() {
    const modal = await this.modalCtrl.create({
      component: PopUpAddHerraPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
       // index_p: this.i_row,
       idregistro: this.idregistro
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //this.ArrayItemsSelectedDesti.push
        //console.log('Modal Sent Data :');        
        console.log('datos',this.dataReturned);
        //console.log(dataReturned.data);
        //console.log('this.i_row::>'+this.i_row);
        // this.FormCheckListPaso1.controls['idusuario'].setValue(this.dataReturned.id_personal);
        // this.FormCheckListPaso1.controls['nomusuario'].setValue(this.dataReturned.tecnico_cl);
  
      }
    });
    return await modal.present();
  }

  FLoadmot1() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        //this.corre_inf_cab = this.globalVal.corre_inf_cab;
        //console.log(this.corre_inf_cab);

        this.ApiService.cargawin1(
          //this.globalVal.id_orden_trab_cab
          this.IdUsuarioLocal,
          this.idregistro
        )
          .then((rest) => {
            //console.log(rest);
            //this.ValuesAcordionGroup=[];
           
           
            try{
              this.DataSetGrid = rest['form'];
           }catch (error) {
             console.log('error:::>', error);
           }
          
          //  console.log('mesaaa',this.DsMesa);
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  async open_popup_tecni() {
    // const guiaValue = this.FormCheckListPaso1.controls['guia_salida_mtto'].value;
    // if(guiaValue==1){

    //   const alert = await this.alertController.create({
    //     header: 'Alerta',
    //     message: 'Este motor ya a sido enviado a mina, no se aceptan modificaciones',
    //     cssClass: 'alerta-confirma',
    //     mode: 'ios',
    //     buttons: [
    //       {
    //         text: 'Aceptar',
    //         handler: () => {
    //           // Puedes agregar acciones adicionales si es necesario
    //         }
    //       }
    //     ]
    //   });
  
    //   await alert.present();
  
    //   return;
    // }

    let idpieza_;
    let avatar_;
    let Y04002_;
    let SEQMASERV_;
    let id_orden_trab_cab;
    let id_orden_trab_fis_cab;
    let flag_msg: boolean = false;
    //////////////////////////

    ////////////////////////////////////
    const modal = await this.modalCtrl.create({
      component: PopUpTecChecklisthPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
       // index_p: this.i_row,
        
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //this.ArrayItemsSelectedDesti.push
        //console.log('Modal Sent Data :');        
        console.log('datos',this.dataReturned);
        //console.log(dataReturned.data);
        //console.log('this.i_row::>'+this.i_row);
        this.FormCheckListPaso1.controls['idusuario'].setValue(this.dataReturned.id_personal);
        this.FormCheckListPaso1.controls['nomusuario'].setValue(this.dataReturned.tecnico_cl);
        // this.FormCheckListPaso1.controls['id_orden_trab_cab'].setValue(this.dataReturned.id_orden_trab_cab);
      }
    });
    return await modal.present();
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
  async SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso1.valid) {
      //this.id_orden_trab_cab = this.globalVal.id_orden_trab_cab;
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
      await this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value,this.idregistro)
        .then( async (res) => {
          console.log('ressssssssssssssssssssssssssssssssssssss',res);
          this.loadingController.dismiss();
          let css_msj=(res[0].o_nres==0)?'alerta-error':'alerta-ok';
          
          
        //  this.globalVal.tipo=this.TipoBombaPivotSelectedText;

          const alert = await this.alertController.create({
            header: 'CHECKLIST HERRAMIENTAS',
            subHeader: 'CONFIRMAR',
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
                    this.navCtrl.navigateForward(['mtto-list-checklist-herra']);
                  }
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
  async presentToast(message: any) {
    console.log('ingreso toast');

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  async FBlourInput(ev, row: any) {
    console.log(ev);

    let ck = '1';
    const segmentValue = ev.detail.value;
    if (this.selectedSegment === segmentValue) {
      // Deseleccionar el segmento si ya estaba seleccionado
      this.selectedSegment = null;
    } else {
      // Seleccionar el segmento si estaba deseleccionado
      this.selectedSegment = segmentValue;
    }
    console.log("eventoooo",ev.detail.value);
    
    // row.check_toggle= (ev.detail['checked'])?'1':'0';
    // row.habilitar_toggle=(ev.detail['checked'])?'0':'1';
    await this.ApiService.GuardarFormPaso2(row, this.IdUsuarioLocal,ev.detail.value)
      .then(async (res) => {
        console.log(res);

        this.presentToast(res[0].o_msj);
      })
      .finally(() => {
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    ev.preventDefault();
  }

/////////////////////////////////////////////////////////////////

toggleSegment(segmentValue: string) {
  if (this.selectedSegment === segmentValue) {
    // Deseleccionar el segmento si ya estaba seleccionado
    this.selectedSegment = null;
  } else {
    // Seleccionar el segmento si estaba deseleccionado
    this.selectedSegment = segmentValue;
  }
}
////////////////////////////////////////////////////////////////



  async open_popupimages() {
     
    const modal = await this.modalCtrl.create({
      component: PopUpImagenHerraPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        idregistro: this.idregistro
      }
    });
    return await modal.present();
  }  
}
