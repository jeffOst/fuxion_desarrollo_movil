import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AlertController,IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { Storage } from "@ionic/storage";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
@Component({
  selector: 'app-prod-ate-serv-pop-qr',
  templateUrl: './prod-ate-serv-pop-qr.page.html',
  styleUrls: ['./prod-ate-serv-pop-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ProdAteServPopQrPage implements OnInit {
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

    public ApiService: ProdGestionServicioService,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public storage: Storage,
    private alertController: AlertController
  ) {

    let localStorage;
    //////////////////
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo = localStorage.uuid;
    });

  }

  ngOnInit() {
    this.idclase = (this.idclase == undefined) ? '' : this.idclase;
    //this.FFindRows();
  }

  ionViewDidEnter(){
    console.log(this.idclase);
try {

  // this.idclase = (this.idclase == undefined) ? '' : this.idclase;
  //   this.FFindRows();

} catch (error) {

}


    // setTimeout(() => {
    //   this.IdHtmlInputSearch.setFocus();
    // }, 600)

  }

  async FOnCloseModel(row:any,index:number) {
    const onClosedData: any = {
      row
    };
    console.log(
      onClosedData
    );

    await this.modalCtrl.dismiss(onClosedData);

  }

  FSelectedItem(row: any, index: number) {
    this.FOnCloseModel(row, index);

  }

  FCloseModal() {
    this.idclase = (this.idclase == undefined) ? '' : this.idclase;
    this.id_actividad = (this.id_actividad == undefined) ? '' : this.id_actividad;
    let row:any;
    this.FOnCloseModel(row,0);

  }

  FFindRows() {
    //console.log('nomclase()::',this.nomclase);
    console.log('se llama muchas veces');

    const loading = this.loadingCtrl.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListFindQrByOf(this.NgModInputSearch, this.idclase, this.id_actividad, this.IdUsuarioLocal, this.IdDispositivo,this.nomclase).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          console.log('dentro finally fin rows');

          this.loadingCtrl.dismiss();

          // setTimeout(() => {
          //   this.IdHtmlInputSearch.setFocus();
          // }, 600)

        }).catch(()=>{
          console.log('dentro catch finrows');
          this.loadingCtrl.dismiss();

        }).then(()=>{

          console.log('dentro thennn finrows');

        })
      });
  }

  ///////////////////////////SCAN QR
  async start_scan_qr(index) {
    //this.realPositionYScrollAux = this.realPositionYScroll;
    this.IdHtmlInputSearch.getInputElement().then((input)=>{
      input.blur();
    });

    const allowed = await this.checkPermiso();
    if (allowed) {
      this.scanActive = true;
      this.ContentCss="ion_content_qr";
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        //console.log(result);
        this.NgModInputSearch = result.content;
        //console.log('result.hasContent:::', result.hasContent);
        //this.content.scrollByPoint(0, this.realPositionYScrollAux, 1200);
        this.scanActive = false;
        this.ContentCss="";
        this.IdHtmlInputSearch.readonly=false;
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
