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
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
import { Storage } from '@ionic/storage';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { State } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-mtto-list-informe-tecnico',
  templateUrl: './mtto-list-informe-tecnico.page.html',
  styleUrls: ['./mtto-list-informe-tecnico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class MttoListInformeTecnicoPage implements OnInit {
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
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoInformeTecnicoService,
    public storage: Storage,
    private alertController: AlertController,
    public globalVal: GlovalProvider
  ) {

  }

  ngOnInit() {
    console.log('ngOnInit');
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
        message: 'Cargando lista::::...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.ListFindOts(this.NgModInputSearch, this.IdUsuarioLocal, 'H')
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

  FNuevaCheckList(Row: any) {
    // aquiiiiii es donde se condiciona para abrir el informe que le pertenece
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(Row.tipoinf_ic);
      this.globalVal.checklist_paso_pivot = '';
      if (Row.tipoinf_ic==1) {
      this.navCtrl.navigateForward(
        ['/mtto-win-informe-tecnico'],
        navigationExtras
      );
    } else if (Row.tipoinf_ic==3) {
      this.navCtrl.navigateForward(
        ['/mtto-informe-tablero/page1'],
        navigationExtras
      );
    }
  
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
      console.log(localStorage);
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
