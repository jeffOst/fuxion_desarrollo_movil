import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule,ActionSheetController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
//import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
// import { MttoChekListMontajeService } from "../../../../services/mtto/mtto-chek-list-montaje.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms';

import { CameraResultType, CameraPhoto, CameraSource, Photo, Camera } from '@capacitor/camera';
import { Filesystem, Encoding,Directory } from '@capacitor/filesystem';
import { getFileReader } from "src/app/interfaces/mtto/mttoinspcables";
//import { count } from 'console';

@Component({
  selector: 'app-mtto-win-informe-tecnico3',
  templateUrl: './mtto-win-informe-tecnico3.page.html',
  styleUrls: ['./mtto-win-informe-tecnico3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MttoWinInformeTecnico3Page implements OnInit {
  @ViewChild('popover') popover;
  isOpen = false;
  FormHtmlJs: any;
  navParamsAny: any;
  IdUsuarioLocal: string;
  IdDispositivo: string;
  NombreDispositivo: string;
  NombresUsuarioLocal: string;
  corre_inf_cab;
  alertSiNo: any;
  EditDataRest: any;
  DsServiciosxPieza: any = {};

  constructor(

    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoInformeTecnicoService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController,

  ) {
    let localStorage;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;

      this.storage.get('DEVICE_INFO').then((result1) => {
        localStorage = result1;
        this.NombreDispositivo = localStorage.name;
        this.IdDispositivo = localStorage.uuid;
        //console.log(this.navParamsAny);
      });
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.FLoadPiezasAcordion();
  }
  FLoadPiezasAcordion() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        //this.corre_inf_cab = this.globalVal.corre_inf_cab;
        console.log(this.corre_inf_cab);

        this.ApiService.FLoadPiezasAcordion('2', '')
          .then((rest) => {
            console.log(rest);
            //this.ValuesAcordionGroup=[];
            this.EditDataRest = rest;
            this.EditDataRest.forEach(element => {
              console.log(element);
              console.log(element.idclase);

  //this.ValuesAcordionGroup.push(element.idclase);
});
            ///ValuesAcordionGroup

          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  FasignaServicio(ev,idservicio,idpapa,idhijo,idclase){
    console.log(ev);
    let ck = (ev.detail['checked'])?'1':'0';
    this.ApiService.GuardarFormPaso2(idservicio,idpapa,idhijo,this.IdUsuarioLocal,idclase,ck)
              .then((res) => {
                //this.loadingController.dismiss();
                //alert('Guardado correctamente.');
              })
              .finally(() => {
                //this.navCtrl.navigateForward(["mtto-list-recinado"]);
              })
              .catch((err) => {
                console.log('errror:::>>>>>>>>>', err);
              });

  }

  FLoadServiciosxPiezas(idclase,ev) {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        //this.corre_inf_cab = this.globalVal.corre_inf_cab;
        console.log(this.corre_inf_cab);

        this.ApiService.FLoadServiciosxPiezas(idclase, this.globalVal.corre_inf_cab)
          .then((rest) => {
            console.log(rest);
            //this.DsServiciosxPieza={};
            console.log(this.DsServiciosxPieza);
            console.log(idclase.length);
if (idclase.length>0) {
             //this.DsServiciosxPieza[idclase].push(rest);
             this.DsServiciosxPieza[idclase]=rest;
             console.log('ingresooo 23222,',this.DsServiciosxPieza[idclase].lenth);
             console.log(this.DsServiciosxPieza[idclase]);
//if ( this.DsServiciosxPieza[idclase].lenth ==0) {
  console.log(rest.length);
  console.log(rest['length']);
  if (rest['length'] == 0) {
    console.log('ingresoooooo');

  this.presentPopover(ev);
}



// if (rest['length']) {
//   console.log('arraya');

// }

          }else{

          }

          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }


  accordionGroupChange (eevento:any,ev: any)  {
    // const nativeEl = this.listenerOut.nativeElement;
    // if (!nativeEl) {
    //   return;
    // }
console.log(ev);

    //const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    //const selectedValue = ev.detail.value;

    // nativeEl.innerText = `
    //   Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
    //   Collapsed: ${collapsedItems.join(', ')}
    // `;
    //let idclase_=ev.detail.value[0];
    //console.log(idclase_);
    if (ev.length>0) {
      console.log('ingreso carga detalles');

      this.FLoadServiciosxPiezas(ev,eevento);
    }
  };


}
