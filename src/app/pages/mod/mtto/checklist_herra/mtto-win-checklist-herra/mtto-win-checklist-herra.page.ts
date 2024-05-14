import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Network, ConnectionStatus } from "@capacitor/network";
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { PopUpTecChecklisthPage } from 'src/app/pages/mod/mtto/checklist_herra/pop-up-tec-checklisth/pop-up-tec-checklisth.page';
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
  DsIsla: any;
  ot_idtoggle: any;
  toggleValue: boolean = false; 
  DsTecnico: any;
  dataReturned: any;
  navParamsAny: any;
  idregistro: any;
  IslaPivotSelectedText: string;
  TecnicoPivotSelectedText: string;
  checklist_paso1_apli_ck: boolean = false;
  toggleState: boolean = true;
  constructor(
    public storage: Storage,
    private router: Router,
    public formBuilder: UntypedFormBuilder,
    private loadingController: LoadingController,
    private ApiService: MttoListChecklistHerra,
    private modalCtrl: ModalController,
    private alertController: AlertController,
  ) {
    this.FormCheckListPaso1 = this.formBuilder.group({
    nomusuario: [''],
    idisla: [''],
    idusuario: [''],
    idestado_hd: [''],
    ot_idtoggle: ['']
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
            console.log('hrlppp',rest['form']);
            console.log('new consulta',this.DataSetGrid[0].idestado_hd);
            
            try{
              this.FormCheckListPaso1.controls['nomusuario'].setValue(
                this.NombresUsuarioLocal
                  );
              this.FormCheckListPaso1.controls['idusuario'].setValue(
                this.IdUsuarioLocal
                  );
                  // this.FormCheckListPaso1.controls['idestado_hd'].setValue(
                  //   this.DataSetGrid[0].idestado_hd
                  //     );
                      this.FormCheckListPaso1.controls['ot_idtoggle'].setValue(
                        this.DataSetGrid[0].icchecktog_hd
                          );
                         // if(this.ot_idtoggle==1){}else{this.FormCheckListPaso1.get('idestado_hd').disable();}
           }catch (error) {
             console.log('error:::>', error);
           }
           this.DsIsla= rest ['isla'];
           this.DsTecnico= rest ['tecnico'];
           
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
  onToggle(ev) {
    // console.log("holaaaaa",ev,index);
    // // this.DataSetGrid[index].toggleState = event.detail.checked;
    // this.DataSetGrid[index].toggleState = ev.detail['index'] ? '1' : '0';
    // console.log("uu",this.DataSetGrid[index]);
    
  }
}
