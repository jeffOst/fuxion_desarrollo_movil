import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import {
  Router,
  NavigationExtras,
  ActivatedRoute,
  ROUTES,
} from '@angular/router';

import { Storage } from '@ionic/storage';
import { InformeCab } from 'src/app/interfaces/mtto/InformeTecnico';
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Network, ConnectionStatus } from '@capacitor/network';


@Component({
  selector: 'app-mtto-win-manto-pend',
  templateUrl: './mtto-win-manto-pend.page.html',
  styleUrls: ['./mtto-win-manto-pend.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MttoWinMantoPendPage implements OnInit {
  navParamsAny: any;
  Cancelar: string = 'Cancelar';
  disableButton: boolean = false;
  codsmg : string;
  id_orden_trab_cab: string;
  id_orden_trab_fis_cab : string
  estaCargando: boolean = false;
  DataSetGrid: any;
  selectedItems: string[] = [];
  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
  ) {
    console.log(this.router.getCurrentNavigation().extras.state['Row']);
    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
  }

  ngOnInit() {
    this.codsmg = this.navParamsAny.codsmg;
    this.id_orden_trab_cab = this.navParamsAny.id_orden_trab_cab;
    this.id_orden_trab_fis_cab = this.navParamsAny.id_orden_trab_fis_cab;
    this.FListaEquiposPendMantoDet();
  }

  FListaEquiposPendMantoDet(){
    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true,
    })
    .then((loading) => {
      loading.present();
      this.ApiService.ListFindOtsMantoDet('44', this.id_orden_trab_cab, '')
        .then((res) => {
          this.DataSetGrid = res;
          this.loadingController.dismiss();
          this.estaCargando = false;
        })
        .finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
          }, 600);
        })
        .catch(() => {
        })
        .then((err) => {
          loading.dismiss();
        });
    });
  }

  FAprobarItemManto(){
    console.log(
      this.selectedItems
    );
  }

  async onCheckboxChange(Row: any){
    // if(Row.stock_item == 0){
    //   const alert = await this.alertController.create({
    //     header: 'Alerta',
    //     message: 'Stock en 0',
    //     cssClass:'alerta-confirma',
    //     mode: 'ios',
    //     buttons: [
    //       {
    //         text: 'Aceptar',
    //         handler: () => {
    //         },
    //       },
    //     ],
    //   });
    //   await alert.present();
    //   return false;
    // }
    if (Row.isChecked) {
      this.selectedItems.push(Row.id_orden_trabajo_det);
    } else {
      const index = this.selectedItems.indexOf(Row.id_orden_trabajo_det);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }

}
