import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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
@Component({
  selector: 'app-win-entrega-bombas1',
  templateUrl: './win-entrega-bombas1.page.html',
  styleUrls: ['./win-entrega-bombas1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class WinEntregaBombas1Page implements OnInit {
  Cancelar: string = 'Cancelar';
  scanActive = false;
  isToggled: boolean = false;
  toggleText: string = 'Inactivo';
  dataReturned: any;
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
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
          // console.log('dataReturned::206', dataReturned);
          // this.FormCheckListPaso1.controls['maquina'].setValue(
          //   this.dataReturned.nombres
          // );
          // this.FormCheckListPaso1.controls['idmaquina'].setValue(
          //   this.dataReturned.id
          // );
        }
      });
      return await modal.present();
}
  
}
