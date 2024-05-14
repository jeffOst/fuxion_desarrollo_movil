import { CommonModule } from '@angular/common';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { model_bomba } from "src/app/interfaces/mtto/mtto-ordentrabajo";
import { IonicModule } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PopUpBombaPage } from 'src/app/pages/mod/mtto/otis/pop-up-bomba/pop-up-bomba.page';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';

import { Storage } from '@ionic/storage';
import { HeaderComponent } from '../../../../../components/header/header.component';
// import { PopUpBombaPage } from 'src/app/pages/mod/mtto/otis/pop-up-bomba/pop-up-bomba.page';

@Component({
  selector: 'app-mtto-win-orden-trabajo5',
  templateUrl: './mtto-win-orden-trabajo5.page.html',
  styleUrls: ['./mtto-win-orden-trabajo5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})

export class MttoWinOrdenTrabajo5Page implements OnInit {

  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  NgModInputSearch: any;
  alertSiNo: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  EditDataRest: any;
  DataSetGrid: any;
  ArrayItemsSelectedDesti: model_bomba[] = [];
  FormCheckListPaso5: UntypedFormGroup;
  Row_: any;
  estaCargando: boolean = false;
  scanActive: boolean = true;
  dataReturned: any;
  ng_fch_ini_inf: any ;
  id_orden_trab_cab:any;
  id_orden_trab_cab_2:any;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    public formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private modalCtrl: ModalController,
  ) {
    this.FormCheckListPaso5 = this.formBuilder.group({
         fch_entrega_mtto: [''],
        codsmg:[''],
        correlativo_mtto: [''],
        obs_entrega:[''],
        id_orden_trab_cab_2: this.globalVal.id_orden_trab_cab,
        idusuario:[''],
        id_orden_trab_cab:[''],
        guia_salida_mtto:[''],
        r_nucleo: [''],
        equipo_ini: [''],
        cod_nucleo_lt: ['']
      });

  }
 
  ngOnInit() {

    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name
      console.log(localStorage);

    });

    this.FLoadmot();

  }
  onTouched(e) {
    console.log(e);
  }
  async mostrarConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea realizar esta acción?',
      cssClass: 'alerta-confirma',
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
    //////////////////////////////////////////////////////////////////
    const loading = this.loadingController
      .create({
        message: 'Guardando O.T...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    //   this.FormCheckListPaso5.controls['corre_inf_cab'].setValue(
    //     this.globalVal.corre_inf_cab
    //   );
     // this.FormCheckListPaso5.controls['idusuario'].setValue(
      console.log('FORMULARIOOOOOO:',this.FormCheckListPaso5.value);
      //);
      this.FormCheckListPaso5.controls['fch_entrega_mtto'].setValue(
        this.ng_fch_ini_inf
      );
      
    await this.ApiService.GuardarFormPaso5(
        this.FormCheckListPaso5.value
    )
      .then(async (res) => {
        this.loadingController.dismiss();
        console.log(res);
        let css_msj = res[0].o_nres == '0' ? 'alerta-error' : 'alerta-ok';

        const alert = await this.alertController.create({
          header: 'ORDEN DE TRABAJO',
          subHeader: 'MATERIALES',
          cssClass: css_msj,
          mode: 'ios',
          animated: true,
          message: res[0].o_msj, // 'La operación se completó con éxito.',
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
  }


  ionViewWillEnter() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name

      if (this.estaCargando == false) {
    //   this.FListaEquipos();
      }
    });
  }

//   ngAfterContentChecked() {
//     console.log('ngAfterContentChecked');
//   }
//   ngAfterViewInit() {
//     console.log('ngAfterViewInit');
//   }
//   ngAfterViewChecked() {
//     //console.log('ngAfterViewChecked');
//   }

async open_popup_bombas() {
    const guiaValue = this.FormCheckListPaso5.controls['guia_salida_mtto'].value;
    if(guiaValue==1){

      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Este motor ya a sido enviado a mina, no se aceptan modificaciones',
        cssClass: 'alerta-confirma',
        mode: 'ios',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              // Puedes agregar acciones adicionales si es necesario
            }
          }
        ]
      });
  
      await alert.present();
  
      return;
    }

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
      component: PopUpBombaPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
       // index_p: this.i_row,
        id_orden_trab_cab:id_orden_trab_cab
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
        this.FormCheckListPaso5.controls['codsmg'].setValue(this.dataReturned.codsmg);
        this.FormCheckListPaso5.controls['correlativo_mtto'].setValue(this.dataReturned.id_orden_trab_fis_cab);
        this.FormCheckListPaso5.controls['id_orden_trab_cab'].setValue(this.dataReturned.id_orden_trab_cab);
      }
    });
    return await modal.present();
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

        this.ApiService.FormFindPaso2(
          this.globalVal.id_orden_trab_cab
          //this.IdUsuarioLocal
        )
          .then((rest) => {
            //console.log(rest);
            //this.ValuesAcordionGroup=[];
            this.EditDataRest = rest['form'];
            console.log('hrlppp',rest['form']);
            try{
              this.FormCheckListPaso5.setValue({ 
                id_orden_trab_cab_2: this.globalVal.id_orden_trab_cab,
                fch_entrega_mtto: this.EditDataRest[0].fch_entrega_mtto,
                codsmg: this.EditDataRest[0].equipo_mtto,
                obs_entrega: this.EditDataRest[0].obs_mtto,
                correlativo_mtto: this.EditDataRest[0].correlativo_mtto,
                idusuario:  this.IdUsuarioLocal,
                id_orden_trab_cab:this.EditDataRest[0].nro_ot_salida_mtto,
                guia_salida_mtto:this.EditDataRest[0].guia_salida_mtto,
                r_nucleo: this.EditDataRest[0].r_nucleo_listmot,
                equipo_ini: this.EditDataRest[0].equipo_ini,
                cod_nucleo_lt: this.EditDataRest[0].cod_nucleo_lt,
              });
              
              
              this.ng_fch_ini_inf=this.EditDataRest[0].fch_entrega_mtto;
              console.log(this.EditDataRest);
           }catch (error) {
             console.log('error:::>', error);
           }
            // this.EditDataRest.forEach((element) => {
            //   console.log(element);
            //   console.log(element.idclase);
            //   console.log(this.ValuesAcordionGroup);
            // });
            //console.log(this.ValuesAcordionGroup);
            ///ValuesAcordionGroup
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }


}
