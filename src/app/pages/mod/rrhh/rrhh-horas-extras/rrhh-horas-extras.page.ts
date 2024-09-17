import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HeaderComponent } from '../../../../components/header/header.component';
import { Router, NavigationExtras } from '@angular/router';
import { RrhhHorasExtrasService } from 'src/app/api/rrhh/rrhh-horasextras.service';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-rrhh-horas-extras',
  templateUrl: './rrhh-horas-extras.page.html',
  styleUrls: ['./rrhh-horas-extras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class RrhhHorasExtrasPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  disableButton = true; // Inicialmente, deshabilita el botón
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  NgModInputSearch: any;
  SelectFiltra: any;
  SelectFiltra2: any;
  SSelectFiltro: any;
  IdUsuarioLocal: string;
  DataSetGrid: any;
  estaCargando: boolean = false;
  scanActive: boolean = true;
  NombresUsuarioLocal: string;
  constructor(
    public navCtrl: NavController,
    private alertController: AlertController,
    public storage: Storage,
    private loadingController: LoadingController,
    private ApiService: RrhhHorasExtrasService,
  ) { }

  ngOnInit() {

    
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
      this.FListaInicial();
      //}
    });
  }
  FListaInicial(){

    const loading = this.loadingController
    .create({
      message: 'Cargando lista...',
      translucent: true, //,
      //cssClass: 'custom-class custom-loading'
    })
    .then((loading) => {
      loading.present();
      console.log('ingresa a realizar la consulta');
      
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

  FListaFiltrado(event) {

    this.searchTerm = event.target.value;
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
  FSelectedItem(row: any) {
    console.log('como pasa row',row);
    //let row1:any;
    //row1[0]=row;

    //row.maquina=this.TituloDinamico;
    let navigationExtras: NavigationExtras = {
      state: { Row: row }
    };
    // console.log('aqui que enviar',navigationExtras);

    this.navCtrl.navigateForward(['rrhh-win-horas-extras'], navigationExtras);

  }


  FNewwin() {
    this.navCtrl.navigateForward(['rrhh-win-horas-extras']);
    let navigationExtras: NavigationExtras = {
      state: { Row:{DESCRIPCION: "MANTENIMIENTO",
        actividad_he:"COSTO TALLER",
        cantidad: "3",
        estado_reg_hhee:"0",
        fech_registro_ini:"",
        idprogram_prod: "1",
        idreghoex: "0",
        nomb_apell: "REVOLLEDO CASTILLA, PEDRO CRISTOBAL"} }
    };
    this.navCtrl.navigateForward(['rrhh-win-horas-extras'], navigationExtras);
  }
}
