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
  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
  ) { }

ngOnInit() {
  }
  toggleChanged() {
    console.log('Toggle state:', this.isToggled ? 'Activo' : 'Inactivo');
  }
  FNuevaCheckList(row: any ){

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
}
