import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController,LoadingController,IonInput } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
@Component({
  selector: 'app-mtto-list-informe-tablero',
  templateUrl: './mtto-list-informe-tablero.page.html',
  styleUrls: ['./mtto-list-informe-tablero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class MttoListInformeTableroPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  Row_: any;
  DataSetGrid: any;
  scanActive: boolean = true;
  NgModInputSearch: any;
  SelectFiltra: any;
  SelectFiltra2: any;
  SSelectFiltro: any;
  IdUsuarioLocal: string;
  disableButton = true; // Inicialmente, deshabilita el botón
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  estaCargando: boolean = false;
  constructor(
    public navCtrl: NavController,
    public globalVal: GlovalProvider,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
  ) { }

  ngOnInit() {
  }

  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-informe-tablero'], navigationExtras);
  }

  FListaEquipos(event) {

    this.searchTerm = event.target.value;
  //  this.disableButton = this.searchTerm.length === 0; // Habilita el botón si hay texto en el campo de búsqueda
  //  this.disableButton = this.searchTerm.trim() === ''; // Deshabilita el botón si el término de búsqueda está vacío
  console.log(event);
  console.log(event.inputType);

    //this.disableButton = this.searchTerm.trim() === '' || event.inputType === 'deleteContentBackward';



    const loading = this.loadingController
      .create({
        message: 'Cargando lista...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();

        this.ApiService.ListFindInftab(
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
