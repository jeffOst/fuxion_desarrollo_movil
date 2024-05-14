import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
//import { ActivatedRoute } from '@angular/router';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-prod-ate-serv-pop-pieza',
  templateUrl: './prod-ate-serv-pop-pieza.page.html',
  styleUrls: ['./prod-ate-serv-pop-pieza.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServPopPiezaPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch:IonInput;
  ////data passed from father
 @Input() titulo_modal: string;
 @Input() nombre_pieza: string;
 @Input() id_actividad: string;
 @Input() idsubfamilia: string;
 @Input() nomsubfam: string;
 @Input() idclase: string;

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
  ) {
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
    

  }
  ionViewDidEnter(){
    this.nombre_pieza=(this.nombre_pieza == undefined)?'':this.nombre_pieza;
    this.FFindRows();

    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)

  }

  async FOnCloseModel(id,nombres,idsubfamilia,nomsubfam,index){
    const onClosedData:any = {
      id:id,
      nombres:nombres,
      idsubfamilia:idsubfamilia,
      nomsubfam:nomsubfam

    };
    console.log(
      onClosedData
    );
    
    await this.modalCtrl.dismiss(onClosedData);

  }

  FSelectedItem(id:string,nombres:string,idsubfamilia:string,nomsubfam:string,index:number){
    this.FOnCloseModel(id,nombres,idsubfamilia,nomsubfam,index);

  }

  FCloseModal(){
    this.nombre_pieza=(this.nombre_pieza == undefined)?'':this.nombre_pieza;
    this.id_actividad=(this.id_actividad == undefined)?'':this.id_actividad;
    this.id_actividad=(this.id_actividad == undefined)?'':this.id_actividad;
    this.idsubfamilia=(this.idsubfamilia == undefined)?'':this.idsubfamilia;
    this.nomsubfam=(this.nomsubfam == undefined)?'':this.nomsubfam;
    this.FOnCloseModel(this.id_actividad,this.nombre_pieza,this.idsubfamilia,this.nomsubfam,0);

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
        this.ApiService.ListFindPiezaByActividad(this.NgModInputSearch,this.nombre_pieza,this.id_actividad,this.IdUsuarioLocal,this.IdDispositivo,this.idclase,this.idsubfamilia,this.nomsubfam).then((res) => {
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

