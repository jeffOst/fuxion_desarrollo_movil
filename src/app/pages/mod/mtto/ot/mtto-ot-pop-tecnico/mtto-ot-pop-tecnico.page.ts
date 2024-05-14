import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
//import { MttoOrdentrabajoService } from "../../../../services/mtto-ordentrabajo.service";
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";

@Component({
  selector: 'app-mtto-ot-pop-tecnico',
  templateUrl: './mtto-ot-pop-tecnico.page.html',
  styleUrls: ['./mtto-ot-pop-tecnico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoOtPopTecnicoPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  @Input() titulo_modal: string;
  @Input() nombre_tecnico: string;
  @Input() id_personal: string;
  DataSetGrid: any;
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  constructor(
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public ApiService: MttoOrdentrabajoService,


  ) { }

  ngOnInit() {

    this.nombre_tecnico = (this.nombre_tecnico == undefined) ? '' : this.nombre_tecnico;
    this.FFindRows();

  }


  async FOnCloseModel(id, nombres, index) {
    const onClosedData: any = {
      id: id,
      nombres: nombres
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
    this.nombre_tecnico = (this.nombre_tecnico == undefined) ? '' : this.nombre_tecnico;
    this.id_personal = (this.id_personal == undefined) ? '' : this.id_personal;
    this.FOnCloseModel(this.id_personal, this.nombre_tecnico, 0);

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
        this.ApiService.ListFindTecnico(this.NgModInputSearch, this.IdUsuarioLocal, this.IdDispositivo).then((res) => {
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
