import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";

@Component({
  selector: 'app-mtto-ot-pop-equipo',
  templateUrl: './mtto-ot-pop-equipo.page.html',
  styleUrls: ['./mtto-ot-pop-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoOtPopEquipoPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch:IonInput;
  @Input() titulo_modal: string;
  @Input() cod_equipo: string;
  @Input() idactivos: string;
DataSetGrid:any;
NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
NombreDispositivo:string;
NombresUsuarioLocal:string;

  constructor(
    private loadingCtrl: LoadingController,
   public  modalCtrl:ModalController,
   public storage: Storage,   
   public ApiService:MttoOrdentrabajoService,

  ) { 

  }

  ngOnDestroy(){
    //alert('SEguro de ir atrazassss');
  }

  ngOnInit() {
    this.FFindRows();
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
    this.cod_equipo=(this.cod_equipo == undefined)?'':this.cod_equipo;
    this.idactivos=(this.idactivos == undefined)?'':this.idactivos;
    this.FOnCloseModel(this.idactivos,this.cod_equipo,0);

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
        this.ApiService.ListFindEquipo(this.NgModInputSearch,this.IdUsuarioLocal,this.IdDispositivo).then((res) => {
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

