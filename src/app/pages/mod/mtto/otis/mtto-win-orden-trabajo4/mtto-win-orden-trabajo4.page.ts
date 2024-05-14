import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';

import { Storage } from '@ionic/storage';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { MttoOtisPopUpEquipoPage } from 'src/app/pages/mod/mtto/otis/mtto-otis-pop-up-equipo/mtto-otis-pop-up-equipo.page';

@Component({
  selector: 'app-mtto-win-orden-trabajo4',
  templateUrl: './mtto-win-orden-trabajo4.page.html',
  styleUrls: ['./mtto-win-orden-trabajo4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoWinOrdenTrabajo4Page implements OnInit {

  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  DataSetGrid: any;
  Row_: any;
  estaCargando: boolean = false;
  scanActive: boolean = true;
  dataReturned: any;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {

    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name
      console.log(localStorage);

      this.FListaEquipos();

    });



  }

  FListaEquipos() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.ListFindSolse(this.globalVal.id_orden_trab_cab, this.IdUsuarioLocal)
          .then((res) => {
            this.DataSetGrid = res;
            this.loadingController.dismiss();
            this.estaCargando = false;
          })
          .finally(() => {
            this.loadingController.dismiss();
            setTimeout(() => {
              //this.idinputsearch_equipo.setFocus();
            }, 600);
          })
          .catch(() => {
            //console.log('catcha api lista');
          })
          .then((err) => {
            console.log('thennnnn', err);
            loading.dismiss();
          });
      });
  }



  ionViewWillEnter() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name

      if (this.estaCargando == false) {
      this.FListaEquipos();
      }
    });
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked');
  }



}
