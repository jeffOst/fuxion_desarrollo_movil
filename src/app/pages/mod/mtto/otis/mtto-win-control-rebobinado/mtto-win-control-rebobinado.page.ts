import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationExtras } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Storage } from '@ionic/storage';
import {
  NavController,
  AlertController,
  IonInput,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
@Component({
  selector: 'app-mtto-win-control-rebobinado',
  templateUrl: './mtto-win-control-rebobinado.page.html',
  styleUrls: ['./mtto-win-control-rebobinado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class MttoWinControlRebobinadoPage implements OnInit {
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  disableButton = true; // Inicialmente, deshabilita el botón
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  scanActive: boolean = true;
  DataSetGrid: any;
  estaCargando: boolean = false;
  NombresUsuarioLocal: string;
  SelectFiltra: string;
  SelectFiltra3: string;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public globalVal: GlovalProvider,
    public storage: Storage,
    
  ) { }

  ngOnInit() {
    this.FListaEquiposAlterno();
  }
  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-win-orden-trabajo'], navigationExtras);
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

      this.ApiService.ListFindMot(
        this.NgModInputSearch,
        this.IdUsuarioLocal,
        'H',
        this.SelectFiltra3
      )
        .then((res) => {
          this.DataSetGrid = res;
          this.loadingController.dismiss();
          this.estaCargando = false;
        })
        .finally(() => {
          this.loadingController.dismiss();
          
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
  filtrar3(event:any){
    this.SelectFiltra3=event.detail.value;
    this.SelectFiltra3 = this.SelectFiltra3 ? this.SelectFiltra3.toString() : "";
  }
//   FListaEquipos(event) {

//     this.searchTerm = event.target.value;
//   //  this.disableButton = this.searchTerm.length === 0; // Habilita el botón si hay texto en el campo de búsqueda
//   //  this.disableButton = this.searchTerm.trim() === ''; // Deshabilita el botón si el término de búsqueda está vacío
//   console.log(event);
//   console.log(event.inputType);

//     this.disableButton = this.searchTerm.trim() === '' || event.inputType === 'deleteContentBackward';

// if (this.searchTerm.trim().length >=6) {

//     const loading = this.loadingController
//       .create({
//         message: 'Cargando lista...',
//         translucent: true, //,
//         //cssClass: 'custom-class custom-loading'
//       })
//       .then((loading) => {
//         loading.present();

//         this.ApiService.ListFindOts(
//           this.NgModInputSearch,
//           this.IdUsuarioLocal,
//           'H',
//           this.SelectFiltra,
//           this.SelectFiltra2
//         )
//           .then((res) => {
//             this.DataSetGrid = res;
//             this.loadingController.dismiss();
//             this.estaCargando = false;
//           })
//           .finally(() => {
//             this.loadingController.dismiss();
//             setTimeout(() => {
//               //this.idinputsearch_equipo.setFocus();
//             }, 600);
//           })
//           .catch(() => {
//             //console.log('catcha api lista');
//           })
//           .then((err) => {
//             console.log('thennnnn', err);
//             loading.dismiss();
//           });
//       });
//     }
//   }
}
