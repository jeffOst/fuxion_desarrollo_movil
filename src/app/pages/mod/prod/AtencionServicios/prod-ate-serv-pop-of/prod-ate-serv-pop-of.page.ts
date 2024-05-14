import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-prod-ate-serv-pop-of',
  templateUrl: './prod-ate-serv-pop-of.page.html',
  styleUrls: ['./prod-ate-serv-pop-of.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class ProdAteServPopOfPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  @Input() titulo_modal: string;
  @Input() idsubfamilia: string;
  @Input() id_actividad: string;
  @Input() correorden: string;
  @Input() idordenfabricab: string;
  @Input() idclase: string;
  @Input() Y04002: string;
  @Input() idofpterminado: string;

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

  ionViewDidEnter() {
    this.idsubfamilia = (this.idsubfamilia == undefined) ? '' : this.idsubfamilia;
    this.FFindRows();

    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)

  }

  async FOnCloseModel(idordenfabricab, correorden, Y04002, idofpterminado, index, idsubfamilia, idclase, nomsubfam, nomclase,Y04001) {
    console.log('idofpterminado:::', idofpterminado);
    const onClosedData: any = {
      idordenfabricab: idordenfabricab,
      correorden: correorden,
      Y04002: Y04002,
      idofpterminado: idofpterminado,
      idsubfamilia: idsubfamilia,
      idclase: idclase, nomsubfam: nomsubfam, nomclase: nomclase,Y04001: Y04001,
    };
    console.log(
      onClosedData
    );

    await this.modalCtrl.dismiss(onClosedData);

  }

  FSelectedItem(id: string, nombres: string, Y04002: string, idofpterminado: string, index: number, idsubfamilia: string, idclase: string, nomsubfam: string, nomclase: string,Y04001:string) {
    console.log('idofpterminado', idofpterminado);

    this.FOnCloseModel(id, nombres, Y04002, idofpterminado, index, idsubfamilia, idclase, nomsubfam, nomclase,Y04001);

  }

  FCloseModal() {
    this.correorden = (this.correorden == undefined) ? '' : this.correorden;
    this.idordenfabricab = (this.idordenfabricab == undefined) ? '' : this.idordenfabricab;
    this.Y04002 = (this.Y04002 == undefined) ? '' : this.Y04002;
    this.idofpterminado = (this.idofpterminado == undefined) ? '' : this.idofpterminado;
    this.FOnCloseModel(this.idordenfabricab, this.idsubfamilia, this.Y04002, this.idofpterminado, 0,0,0,0,0,'');

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
        this.ApiService.ListFindOfByClase(this.NgModInputSearch, this.idsubfamilia, this.idclase, this.id_actividad, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingCtrl.dismiss();

          // setTimeout(() => {
          //   this.IdHtmlInputSearch.setFocus();
          // }, 600)

        });
      });
  }

}
