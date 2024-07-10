import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RrhhHorasExtrasService } from 'src/app/api/rrhh/rrhh-horasextras.service';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-rrhh-popup-tecnico',
  templateUrl: './rrhh-popup-tecnico.page.html',
  styleUrls: ['./rrhh-popup-tecnico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RrhhPopupTecnicoPage implements OnInit {
  nombre_tecnico: string;
  id_personal: string;
  area: string;
  DataSetGrid:any;
  NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
id_areapert:string;
  constructor(
    public ApiService:RrhhHorasExtrasService,
    public  modalCtrl:ModalController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.FFindRows();
  }

  async FOnCloseModel(id,nombres,area,id_areapert){
    const onClosedData:any = {
      id:id,
      nombres:nombres,
      area: area,
      id_areapert: id_areapert
    };
    console.log(
      onClosedData
    );
    
    await this.modalCtrl.dismiss(onClosedData);

  }
  FSelectedItem(id:string,nombres:string,area:string,id_areapert:string){
    this.FOnCloseModel(id,nombres,area,id_areapert);

  }
  FCloseModal(){
    this.nombre_tecnico=(this.nombre_tecnico == undefined)?'':this.nombre_tecnico;
    this.id_personal=(this.id_personal == undefined)?'':this.id_personal;
    this.area=(this.area == undefined)?'':this.area;
    this.id_areapert=(this.id_areapert== undefined)?'':this.id_areapert;
    this.FOnCloseModel(this.id_personal,this.nombre_tecnico,this.area,this.id_areapert);

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
        });
      });
  }
}
