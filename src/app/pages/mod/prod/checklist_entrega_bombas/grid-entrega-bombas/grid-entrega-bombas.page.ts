// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavigationExtras } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm,NgModel,NgModelGroup,ReactiveFormsModule} from '@angular/forms';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { WinEntregaBombas1Page } from 'src/app/pages/mod/prod/checklist_entrega_bombas/win-entrega-bombas1/win-entrega-bombas1.page';
import { ProdEntregaBomba } from 'src/app/api/prod/prod-entrega-bomba.service';
import { checklist_en } from 'src/app/interfaces/prod/checklist_entrega';

@Component({
  selector: 'app-grid-entrega-bombas',
  templateUrl: './grid-entrega-bombas.page.html',
  styleUrls: ['./grid-entrega-bombas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule,HeaderComponent]
})
export class GridEntregaBombasPage implements OnInit {
@ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
NgModInputSearch: any;
Cancelar: string = 'Cancelar';
scanActive = false;
isToggled: boolean = false;
toggleText: string = 'Inactivo';
DataSetGrid: any;
dataReturned: any;
IdUsuarioLocal: string;
SelectFiltra: any;
SelectFiltra2: any;
SSelectFiltro: any;
estaCargando: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: ProdEntregaBomba,
    public globalVal: checklist_en,
  ) { }

ngOnInit() {
  }
  toggleChanged() {
    console.log('Toggle state:', this.isToggled ? 'Activo' : 'Inactivo');
  }
  FNuevaCheckList(Row: any ){
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/win-entrega-bombas1'], navigationExtras);
  }
  OpenModalEquipos(){
      // // const modal = await this.modalCtrl.create({
      // //   component: WinEntregaBombas1Page,
      // //   backdropDismiss: true,
      // //   showBackdrop: true,
      // //   mode: 'ios',
      // //   componentProps: {
      // //     // index_p: this.i_row,
      // //    }
      // // });
  
      // // modal.onDidDismiss().then((dataReturned) => {
      // //   if (dataReturned.data != undefined) {
      // //     this.dataReturned = dataReturned.data;
      // //     // console.log('dataReturned::206', dataReturned);
      // //     // this.FormCheckListPaso1.controls['maquina'].setValue(
      // //     //   this.dataReturned.nombres
      // //     // );
      // //     // this.FormCheckListPaso1.controls['idmaquina'].setValue(
      // //     //   this.dataReturned.id
      // //     // );
      // //   }
      // // });
      // // return await modal.present();
      this.navCtrl.navigateForward(['win-entrega-bombas1']);
  }
  ionViewWillEnter() { 
      this.FLoadForms();
    }
    FLoadForms() {
      const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.Listgridprot(
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
        
      }
}
