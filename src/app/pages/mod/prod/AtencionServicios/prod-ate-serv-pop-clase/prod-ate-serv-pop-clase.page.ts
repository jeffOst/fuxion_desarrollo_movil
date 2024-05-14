import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-prod-ate-serv-pop-clase',
  templateUrl: './prod-ate-serv-pop-clase.page.html',
  styleUrls: ['./prod-ate-serv-pop-clase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServPopClasePage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  @Input() titulo_modal: string;
  @Input() idclase: string;
  @Input() id_actividad: string;

  DataSetGrid: any;
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  constructor(
    public ApiService: ProdGestionServicioService,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public storage: Storage,
  ) {

    let localStorage;
    //////////////////
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });

  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.idclase = (this.idclase == undefined) ? '' : this.idclase;
    this.FFindRows();
    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)
  }

  async FOnCloseModel(idsubfamilia, nomsubfam, index) {
    const onClosedData: any = {
      idsubfamilia: idsubfamilia,
      nomsubfam: nomsubfam
    };
    console.log(
      onClosedData
    );

    await this.modalCtrl.dismiss(onClosedData);

  }

  FSelectedItem(id: string, nombres: string, index: number) {
    this.FOnCloseModel(id, nombres, index);

  }

  FCloseModal() {
    this.idclase = (this.idclase == undefined) ? '' : this.idclase;
    this.id_actividad = (this.id_actividad == undefined) ? '' : this.id_actividad;
    this.FOnCloseModel(this.id_actividad, this.idclase, 0);

  }

  FFindRows() {
    const loading = this.loadingCtrl.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListFindClaseByPieza(this.NgModInputSearch, this.idclase, this.id_actividad, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingCtrl.dismiss();
          
          // setTimeout(() => {
          //   this.IdHtmlInputSearch.setFocus();
          // }, 600);

        });
      });
  }

}

