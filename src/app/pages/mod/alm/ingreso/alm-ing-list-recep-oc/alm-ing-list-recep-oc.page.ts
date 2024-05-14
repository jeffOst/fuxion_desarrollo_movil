// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-alm-ing-list-recep-oc',
//   templateUrl: './alm-ing-list-recep-oc.page.html',
//   styleUrls: ['./alm-ing-list-recep-oc.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule]
// })
// export class AlmIngListRecepOcPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// export class AlmIngListRecepOcPagePage implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavController, AlertController,IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlmIngSaliServicio } from "src/app/api/alm/alm-ing-sali-servicio.service";
import { MAlmacenIngreso } from "src/app/interfaces/alm/AlmacenIngreso";
import { NavigationExtras } from '@angular/router';
import { HeaderComponent } from '../../../../../components/header/header.component';
@Component({
  selector: 'app-alm-ing-list-recep-oc-page',
  templateUrl: './alm-ing-list-recep-oc.page.html',
  styleUrls: ['./alm-ing-list-recep-oc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
// @Component({
//   selector: 'app-alm-ing-list-recep-oc',
//   templateUrl: './alm-ing-list-recep-oc.page.html',
//   styleUrls: ['./alm-ing-list-recep-oc.page.scss'],
// })
export class AlmIngListRecepOcPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch: IonInput;
  @Input() titulo_modal: string;
  @Input() idclase: string;
  @Input() id_actividad: string;
  @Input() nomclase:string;

  DataSetGrid: any;
  NgModInputSearch: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  scanActive = false;
  ContentCss:string="";
  constructor(
    public ApiService: AlmIngSaliServicio,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
  ) {
    //this.DataSetGrid = {} as MAlmacenIngreso;
   }

  ngOnInit() {

  }

  ionViewDidEnter(){
    console.log(this.idclase);

    this.idclase = (this.idclase == undefined) ? '' : this.idclase;
    this.FFindRows(0,'');

    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)

  }

  FFindRows(option,scan) {
    console.log('nomclase()::',this.nomclase);
    const loading = this.loadingCtrl.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        if (option==1) {
          this.NgModInputSearch=scan
        }
        this.ApiService.ListFindQrByOc(this.NgModInputSearch, this.idclase, this.id_actividad, this.IdUsuarioLocal, this.IdDispositivo,this.nomclase).then((res) => {
          this.DataSetGrid = res;
          console.log('this.DataSetGrid.count:::>',this.DataSetGrid.length);
          if(this.DataSetGrid.length==0){
            this.mostrarConfirmacion1();

          }

if (option==1 && this.DataSetGrid.length>0) {
  let row = this.DataSetGrid[0];
        console.log('this.DataSetGrid:::>',row)
        this.FSelectedItem(row,'0');
        this.NgModInputSearch='';
}

        }).finally(() => {
          this.loadingCtrl.dismiss();

          // setTimeout(() => {
          //   this.IdHtmlInputSearch.setFocus();
          // }, 600)

        });
      });
  }
  

  FSelectedItem(row: any, index: any) {
    console.log('holaaa',row.result_es);
    console.log(':::::OJO:::', row);
    if (row.result_es=='1'){
    let navigationExtras: NavigationExtras = {
      state: row
    };
    this.navCtrl.navigateForward(['alm-ing-win-recep-oc'], navigationExtras);
  }
  else{
    
    this.mostrarmnsj ();   
    
  }
}
  async mostrarConfirmacion1() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'No se encuentra el registro',
      cssClass:'alerta-confirma',
            mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();
  }
  async mostrarmnsj() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'No se puede aperturar el registro, ver el estado',
      cssClass:'alerta-confirma',
            mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();
  }

  ///////////////////////////SCAN QR
  async start_scan_qr(index) {
    //this.realPositionYScrollAux = this.realPositionYScroll;
    this.IdHtmlInputSearch.getInputElement().then((input)=>{
      //input.blur();
    });
    

    const allowed = await this.checkPermiso();
    if (allowed) {
      this.scanActive = true;
      this.ContentCss="ion_content_qr";
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        console.log(result);
        this.NgModInputSearch = result.content;

        this.FFindRows(1,result.content)

        console.log('result.hasContent:::', result.hasContent);
        //this.content.scrollByPoint(0, this.realPositionYScrollAux, 1200);
        this.scanActive = false;
        this.ContentCss="";
        this.IdHtmlInputSearch.readonly=false;


        console.log('this.DataSetGrid:::>',this.DataSetGrid)
        // let row = this.DataSetGrid[0];
        // console.log('this.DataSetGrid:::>',row)
        //this.FSelectedItem(row,'0');


      }

    }

  }
  
  async checkPermiso() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: 'No Permiso',
          message: 'Por favor dar permiso al acceso de camara en configuraciones',
          buttons: [{ text: 'No', role: 'Cancelar' }, { text: 'Abrir Configuracions', handler: () => { BarcodeScanner.openAppSettings(); resolve(false) } }]
        });
        await alert.present();
      }
      else {
        resolve(false);
      }
    });
    console.log(status);
    // status.granted;
  }
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
    this.ContentCss="";
  }


}

