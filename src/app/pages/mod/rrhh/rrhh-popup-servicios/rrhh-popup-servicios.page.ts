import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RrhhHorasExtrasService } from 'src/app/api/rrhh/rrhh-horasextras.service';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rrhh-popup-servicios',
  templateUrl: './rrhh-popup-servicios.page.html',
  styleUrls: ['./rrhh-popup-servicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RrhhPopupServiciosPage implements OnInit {
  nombre_tecnico: string;
  id_personal: string;
  DataSetGrid:any;
  NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
id_area: any;
  constructor(
    public ApiService:RrhhHorasExtrasService,
    public  modalCtrl:ModalController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
  ) { 
    this.id_area=navParams.get('id_area');
    console.log('ayudaaaa',this.id_area);
    
  }

  ngOnInit() {
    this.FFindRows();
  }

  async FOnCloseModel(id,nombres){
    const onClosedData:any = {
      id:id,
      nombres:nombres
    };
    console.log(
      onClosedData
    );
    
    await this.modalCtrl.dismiss(onClosedData);

  }
  FSelectedItem(id:string,nombres:string){
    this.FOnCloseModel(id,nombres);

  }
  FCloseModal(){
    this.nombre_tecnico=(this.nombre_tecnico == undefined)?'':this.nombre_tecnico;
    this.id_personal=(this.id_personal == undefined)?'':this.id_personal;
    this.FOnCloseModel(this.id_personal,this.nombre_tecnico);

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
        this.ApiService.ListFindServicios(this.NgModInputSearch,this.IdUsuarioLocal,this.id_area).then((res) => {
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
