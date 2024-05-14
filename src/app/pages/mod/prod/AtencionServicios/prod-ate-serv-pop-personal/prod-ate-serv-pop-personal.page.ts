import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-prod-ate-serv-pop-personal',
  templateUrl: './prod-ate-serv-pop-personal.page.html',
  styleUrls: ['./prod-ate-serv-pop-personal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServPopPersonalPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch:IonInput;
  ////data passed from father
  @Input() titulo_modal: string;
  @Input() nombre_tecnico: string;
  @Input() id_personal: string;
  

DataSetGrid:any;

NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
NombreDispositivo:string;
NombresUsuarioLocal:string;
  constructor(
   public ApiService:ProdGestionServicioService,
   private loadingCtrl: LoadingController,
   public  modalCtrl:ModalController,
   public storage: Storage,
   //private route: ActivatedRoute,
  ) { 
    
    //////////////////get vals from page father
    let localStorage;
    //////////////////
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal=localStorage.user_id;
    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo=localStorage.uuid;
    });
  }

  ngOnInit() {
    //console.log('nombre_tecnico:::55:::',this.nombre_tecnico);
    this.nombre_tecnico=(this.nombre_tecnico == undefined)?'':this.nombre_tecnico;
    this.FFindRows();

    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)

  }

  async FOnCloseModel(id,nombres,index){
    const onClosedData:any = {
      id:id,
      nombres:nombres
    };
    console.log(
      onClosedData
    );
    
    await this.modalCtrl.dismiss(onClosedData);

  }

  FSelectedItem(id:string,nombres:string,index:number){
    this.FOnCloseModel(id,nombres,index);

  }

  FCloseModal(){
    this.nombre_tecnico=(this.nombre_tecnico == undefined)?'':this.nombre_tecnico;
    this.id_personal=(this.id_personal == undefined)?'':this.id_personal;
    this.FOnCloseModel(this.id_personal,this.nombre_tecnico,0);

  }

  FFindRows(){
    const loading = this.loadingCtrl.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListFindPersonal(this.NgModInputSearch,this.IdUsuarioLocal,this.IdDispositivo).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingCtrl.dismiss();
         
        // setTimeout(() => {            
        //   this.IdHtmlInputSearch.setFocus();
        // },600)

        });
      });
  }

}
