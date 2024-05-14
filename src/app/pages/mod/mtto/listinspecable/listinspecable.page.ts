
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Location } from "@angular/common";
/////////////////////////////////////////
import { Component, OnInit, ViewChild, ChangeDetectorRef, ɵConsole } from '@angular/core';
//import { LaravelPassportService } from 'laravel-passport';
import { IonInput,NavController, MenuController,IonItemSliding, Platform, AlertController, LoadingController,ActionSheetController} from '@ionic/angular';
import { MttoInspCables } from "src/app/interfaces/mtto/mttoinspcables";
import { MttoservicesService } from "src/app/api/mtto/mttoservices.service";
//mttoservices.service
import { Storage } from "@ionic/storage";
import{ HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-listinspecable',
  templateUrl: './listinspecable.page.html',
  styleUrls: ['./listinspecable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class ListinspecablePage implements OnInit {
  NomUsuario: String;
  inputSearchValue="";
  constructor(
    private plt: Platform,
    //private changeRef: ChangeDetectorRef,
    public navCtrl: NavController,
    private menuCrl: MenuController,
    private alertController: AlertController,
    private mttoservicesService:MttoservicesService,
    private loadingController: LoadingController,
    private location: Location,
    public storage: Storage,
    public actionSheetController: ActionSheetController
  ) { }
  arrayCargado: MttoInspCables[];
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
    
    this.mttoservicesService.ListInspCablesPend(this.inputSearchValue).subscribe(
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
    this.navCtrl.navigateForward(['wininspecable', data]);
  }

  ImprimirPdf(item:any){

  }

}
