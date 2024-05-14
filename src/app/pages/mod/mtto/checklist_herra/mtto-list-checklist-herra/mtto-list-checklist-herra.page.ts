import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { PopUpFormHerraPage } from 'src/app/pages/mod/mtto/checklist_herra/pop-up-form-herra/pop-up-form-herra.page';
import { Storage } from '@ionic/storage';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-mtto-list-checklist-herra',
  templateUrl: './mtto-list-checklist-herra.page.html',
  styleUrls: ['./mtto-list-checklist-herra.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class MttoListChecklistHerraPage implements OnInit {
  NgModInputSearch: any;
  DataSetGrid: any;
  disableButton = true; // Inicialmente, deshabilita el botón
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  IdUsuarioLocal: string;
  SelectFiltra: any;
  SelectFiltra2: any;
  dataReturned: any;
  EditDataRest: any;
  cod: any;
  estaCargando: boolean = false;
  constructor(
    public globalVal: GlovalProvider,
    public storage: Storage,
    private loadingController: LoadingController,
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private ApiService: MttoListChecklistHerra,
  ) { }

  ngOnInit() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      //this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name
      console.log(localStorage);
      
    });
  }
  ionViewWillEnter() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
    //  this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name

      //if (this.estaCargando == false) {
      this.FListaEquipos(event);
      //}
    });
  }
  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-win-checklist-herra'], navigationExtras);
    //aqui es la ruta del primer win q contendra el form
  }
  FNewherra2(Row: any) {
    this.ApiService.NewForm(this.IdUsuarioLocal)
    // .then((rest) => {
    //   this.EditDataRest = rest['form'];
    //   try {Row = this.EditDataRest[0];} catch (error) {
    //     console.log('error:::>', error);
    //   };
    //   let navigationExtras: NavigationExtras = {
    //     state: { Row },
    //   };
      // console.log('navigationExtras1111',navigationExtras);
      // this.globalVal.checklist_paso_pivot = '';
      // this.navCtrl.navigateForward(['/mtto-win-checklist-herra'], navigationExtras);
      //aqui es la ruta del primer win q contendra el form
    // });
  }

  FListaEquipos(event) {

    this.searchTerm = event.target.value;
//   //  this.disableButton = this.searchTerm.length === 0; // Habilita el botón si hay texto en el campo de búsqueda
//   //  this.disableButton = this.searchTerm.trim() === ''; // Deshabilita el botón si el término de búsqueda está vacío
//   console.log(event);
//   console.log(event.inputType);

//     this.disableButton = this.searchTerm.trim() === '' || event.inputType === 'deleteContentBackward';

// if (this.searchTerm.trim().length >=6) {

    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.ListFindcheck(
          this.NgModInputSearch,
          this.IdUsuarioLocal,
          'H',
          this.SelectFiltra,
          this.SelectFiltra2
        )
          .then((res) => {
            this.DataSetGrid = res;
            this.loadingController.dismiss();
            this.estaCargando = false;
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
    // }
  }
  async PopUpItemsHerramienta() {
    const modal = await this.modalCtrl.create({
      component: PopUpFormHerraPage,
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
      component: PopUpFormHerraPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
       // index_p: this.i_row,
        
      }
    });
  }
}
