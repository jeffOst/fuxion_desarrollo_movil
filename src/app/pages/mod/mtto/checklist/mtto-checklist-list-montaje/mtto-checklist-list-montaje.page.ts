import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"
import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
//import { MttoChekListMontajeService } from "../../../../api/services/mtto/mtto-chek-list-montaje.service";
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
//import { CheckListCab } from 'src/app/interfaces/mtto/CheckListMtto';
import { Storage } from "@ionic/storage";
import { HeaderComponent } from '../../../../../components/header/header.component';

@Component({
  selector: 'app-mtto-checklist-list-montaje',
  templateUrl: './mtto-checklist-list-montaje.page.html',
  styleUrls: ['./mtto-checklist-list-montaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})

export class MttoChecklistListMontajePage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch:IonInput;
NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
NombreDispositivo:string;
NombresUsuarioLocal:string;
DataSetGrid:any;
Row_:any;
estaCargando:boolean=false;
scanActive:boolean=true;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoChekListMontajeService,
    public storage: Storage,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.estaCargando=true;
    this.FListaEquipos();
  }

  FListaEquipos() {
    const loading = this.loadingController.create({
      message: 'Cargando lista::::...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();

        this.ApiService.ListFindOts(this.NgModInputSearch,'1', 'H').then((res) => {
          this.DataSetGrid = res;
          this.loadingController.dismiss();
          this.estaCargando=false;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            //this.idinputsearch_equipo.setFocus();
          }, 600)
        }).catch(()=>{
//console.log('catcha api lista');

        }).then((err)=>{
          console.log('thennnnn',err);
          loading.dismiss();

        })

      });
  }

  FNuevaCheckList(Row:any){

    let navigationExtras: NavigationExtras = {
      state: {Row}
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot='';
    this.navCtrl.navigateForward(['/mtto-checklist-win-montaje'], navigationExtras);


  }

  ionViewWillEnter(){
    console.log(this.estaCargando,'ionViewWillEnter:::>XionViewDidEnter ');
    if (this.estaCargando==false) {
      console.log('this.FListaEquipos ');
      this.FListaEquipos();
    }


  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked');
  }

}
