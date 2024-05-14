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
  selector: 'app-mtto-list-orden-trabajo',
  templateUrl: './mtto-list-orden-trabajo.page.html',
  styleUrls: ['./mtto-list-orden-trabajo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class MttoListOrdenTrabajoPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  NgModInputSearch: any;
  SelectFiltra: any;
  SelectFiltra2: any;
  SSelectFiltro: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  DataSetGrid: any;
  Row_: any;
  estaCargando: boolean = false;
  scanActive: boolean = true;
  dataReturned: any;
  disableButton = true; // Inicialmente, deshabilita el botón
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name
      console.log(localStorage);
      
    });
  }

  InputChange(event){
    console.log(event);
    console.log(event.inputType);

      this.disableButton = this.searchTerm.trim() === '' || event.inputType === 'deleteContentBackward';
  }

  FListaEquipos(event) {

    this.searchTerm = event.target.value;
  //  this.disableButton = this.searchTerm.length === 0; // Habilita el botón si hay texto en el campo de búsqueda
  //  this.disableButton = this.searchTerm.trim() === ''; // Deshabilita el botón si el término de búsqueda está vacío
  console.log(event);
  console.log(event.inputType);

    this.disableButton = this.searchTerm.trim() === '' || event.inputType === 'deleteContentBackward';

if (this.searchTerm.trim().length >=6) {

    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.ListFindOts(
          this.NgModInputSearch,
          this.IdUsuarioLocal,
          'H',
          this.SelectFiltra,
          this.SelectFiltra2
        )
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
  }
  filtrar(event:any){
    this.SelectFiltra=event.detail.value;

  }
  filtrar2(event:any){
    this.SelectFiltra2=event.detail.value;

  }
  FListaEquiposAlterno(){

    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true, //,
      //cssClass: 'custom-class custom-loading'
    })
    .then((loading) => {
      loading.present();

      this.ApiService.ListFindOts(
        this.NgModInputSearch,
        this.IdUsuarioLocal,
        'H',
        this.SelectFiltra = this.SelectFiltra ? this.SelectFiltra.toString() : "",
        this.SelectFiltra2 = this.SelectFiltra2 ? this.SelectFiltra2.toString() : ""
      )
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
          console.log(this.SelectFiltra);
          loading.dismiss();
        });
    });

  }

  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-win-orden-trabajo'], navigationExtras);
  }

  ionViewWillEnter() {
    this.estaCargando = true;
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      //user_id
      //user_name

      //if (this.estaCargando == false) {
      this.FListaEquiposAlterno();
      //}
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
  FGenerarOtxProduccion() {
    let Row = { familia: 1, idusuario: this.IdUsuarioLocal };
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    //console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(
      ['/mtto-otis-pop-up-equipo'],
      navigationExtras
    );
  }

  FGenerarOtxTablero() {
    let Row = { familia: 2, idusuario: this.IdUsuarioLocal };
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    //console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(
      ['/mtto-otis-pop-up-equipo'],
      navigationExtras
    );
  }
  async OpenModalEquipos(op: any) {
    let Row;
    if (op == '1') {
      Row = { familia: 1, idusuario: this.IdUsuarioLocal };
    } else {
      Row = { familia: 2, idusuario: this.IdUsuarioLocal };
    }

    const modal = await this.modalCtrl.create({
      component: MttoOtisPopUpEquipoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        Row,
      },
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Modal Sent Data :', this.dataReturned);
        //console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].codsmg = dataReturned.data.idequipo;
        // // // this.ArrayItemsSelectedDesti[index].marca = dataReturned.data.idmarca,
        // // //   this.ArrayItemsSelectedDesti[index].potencia = dataReturned.data.idpotencia,
        // // //   this.ArrayItemsSelectedDesti[index].tipo = dataReturned.data.idtipo
        this.globalVal.checklist_paso_pivot = '';
        let row: any;
        row = {
          idequipo: dataReturned.data.idequipo,
          familia: op,
          idusuario: this.IdUsuarioLocal,
          idofcab: dataReturned.data.idofcab,
        };

if (dataReturned.data.idequipo!='0') {

        const loading = this.loadingController
          .create({
            message: 'Guardando Paso 1...',
            translucent: true, //,
            //cssClass: 'custom-class custom-loading'
          })
          .then((loading) => {
            loading.present();
          });
        await this.ApiService.GuardarNuevoEquipo(row)
          .then(async (res) => {
            this.loadingController.dismiss();
            console.log(res);
            //let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';

            /////////////////////////////
            let Row = res['form'][0];
            let navigationExtras: NavigationExtras = {
              state: { Row },
            };
            //console.log(navigationExtras);

            this.navCtrl.navigateForward(
              ['/mtto-win-orden-trabajo'],
              navigationExtras
            );
          })
          .finally(() => {
            console.log('finally:::>>LN:394');

            //this.navCtrl.navigateForward(["mtto-list-recinado"]);
          })
          .catch((err) => {
            console.log('errror:::>>>>>>>>>', err);
          });
        //////////////////////////////////fin
      }
    }
    });
    return await modal.present();

  }
}
