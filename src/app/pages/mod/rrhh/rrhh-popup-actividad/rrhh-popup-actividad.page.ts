import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RrhhHorasExtrasService } from 'src/app/api/rrhh/rrhh-horasextras.service';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-rrhh-popup-actividad',
  templateUrl: './rrhh-popup-actividad.page.html',
  styleUrls: ['./rrhh-popup-actividad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RrhhPopupActividadPage implements OnInit {
  nombre_tecnico: string;
  id_personal: string;
  DataSetGrid:any;
  NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
id_categoria: any;
  constructor(
    public ApiService:RrhhHorasExtrasService,
    public  modalCtrl:ModalController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
  ) { this.id_categoria=navParams.get('id_categoria');
    console.log('maquinaaa de guerra',this.id_categoria);}

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
      message: 'Cargando lista...',
      translucent: true
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListFindActividad(this.NgModInputSearch,this.IdUsuarioLocal,this.id_categoria).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingCtrl.dismiss();
        });
      });
  }
}
