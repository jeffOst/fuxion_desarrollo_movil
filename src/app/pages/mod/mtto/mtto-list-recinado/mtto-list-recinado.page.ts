import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { MttorecinadoservicesService } from "src/app/api/mtto/mttorecinadoservices.service";
import { MttoRecinadoCables } from "src/app/interfaces/mtto/mttoinspcables";
import { IonInput,NavController, MenuController,IonItemSliding, Platform, AlertController, LoadingController,ActionSheetController} from '@ionic/angular';
import{ HeaderComponent } from "src/app/components/header/header.component";
@Component({
  selector: 'app-mtto-list-recinado',
  templateUrl: './mtto-list-recinado.page.html',
  styleUrls: ['./mtto-list-recinado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})

export class MttoListRecinadoPage implements OnInit {
  NomUsuario: String;
  inputSearchValue="";
  constructor(
    private plt: Platform,
    //private changeRef: ChangeDetectorRef,
    public navCtrl: NavController,
    private menuCrl: MenuController,
    private alertController: AlertController,
    private mttorecinadoservicesService:MttorecinadoservicesService,
    private loadingController: LoadingController,    
    public storage: Storage,
    public actionSheetController: ActionSheetController
  ) { }
  arrayCargado: MttoRecinadoCables[];
  ngOnInit() {

   let localStorage: any;
    
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NomUsuario = localStorage.user_name;
      if (this.NomUsuario=='') {
        this.navCtrl.navigateForward('login');
      }
      //console.log(this.device.uuid);
    });

  }

  ionViewWillEnter() {
    this.listarInspCables();
  }

  listarInspCables() {
    this.arrayCargado = null;
    //this.ionViewWillEnter();
    
    this.mttorecinadoservicesService.ListInspCablesPend(this.inputSearchValue).subscribe(
      res => {
        console.log('listando cargandoooo array')
        this.arrayCargado = res;
      }
    )
  }

  EditarInspCable(tipo:string){

    let data: any;
    data = {
      id:tipo
    }
    this.navCtrl.navigateForward(['mtto-win-recinado', data]);
  }

  EntregarCable(tipo:string,tipo2:string){
    let data: any;
    data = {
      id:tipo,
      identrega:tipo2
    }
    this.navCtrl.navigateForward(['mtto-recina-entrega-cable', data]);
  }

}

