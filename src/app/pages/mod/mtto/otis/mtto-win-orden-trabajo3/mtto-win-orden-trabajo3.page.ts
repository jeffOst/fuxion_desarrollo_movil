import { NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonicModule,
  ActionSheetController,
  ToastController,
} from '@ionic/angular';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
//import { CheckListCab } from "src/app/interfaces/mtto/CheckListMtto"
//import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
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

import {
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
} from '@capacitor/camera';
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
import { MttoOtisPopUpAddItemPage } from 'src/app/pages/mod/mtto/otis/mtto-otis-pop-up-add-item/mtto-otis-pop-up-add-item.page';
///


@Component({
  selector: 'app-mtto-win-orden-trabajo3',
  templateUrl: './mtto-win-orden-trabajo3.page.html',
  styleUrls: ['./mtto-win-orden-trabajo3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


 export class MttoWinOrdenTrabajo3Page implements OnInit {
  FormCheckListPaso1: UntypedFormGroup;
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
  @ViewChild('listenerOut', { static: true }) listenerOut: ElementRef;
  ValuesAcordionGroup: string[] = ['551571', '551579'];
  dataReturned: any;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoOrdentrabajoService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController,
    private modalCtrl: ModalController
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

  ngOnInit() {}
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

        this.ApiService.ListServiciosxBomba(
          this.globalVal.id_orden_trab_cab,
          this.IdUsuarioLocal
        )
          .then((rest) => {
            //console.log(rest);
            //this.ValuesAcordionGroup=[];
            this.EditDataRest = rest;
            // this.EditDataRest.forEach((element) => {
            //   console.log(element);
            //   console.log(element.idclase);
            //   console.log(this.ValuesAcordionGroup);
            // });
            //console.log(this.ValuesAcordionGroup);
            ///ValuesAcordionGroup
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  async presentToast(message: any) {
    console.log('ingreso toast');

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }

  async FasignaServicio(ev, row: any) {
    console.log(ev);
    let ck = ev.detail['checked'] ? '1' : '0';
    row.check_toggle = ev.detail['checked'] ? '1' : '0';
    row.habilitar_input = ev.detail['checked'] ? '1' : '0';
    await this.ApiService.GuardarFormPaso2(row, this.IdUsuarioLocal)
      .then(async (res) => {
        console.log(res);
        this.presentToast(res[0].o_msj);
      })
      .finally(() => {
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
  }

  async FBlourInput(ev, row: any) {
    console.log(ev);

    let ck = '1';
    // row.check_toggle= (ev.detail['checked'])?'1':'0';
    // row.habilitar_toggle=(ev.detail['checked'])?'0':'1';
    await this.ApiService.GuardarFormPaso2(row, this.IdUsuarioLocal)
      .then(async (res) => {
        console.log(res);

        this.presentToast(res[0].o_msj);
      })
      .finally(() => {
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    ev.preventDefault();
  }

  //   FLoadServiciosxPiezas(idclase) {
  //     const loading = this.loadingController
  //       .create({
  //         message: 'Cargando lista....',
  //         translucent: true, //,
  //       })
  //       .then((loading) => {
  //         loading.present();

  //         //this.corre_inf_cab = this.globalVal.corre_inf_cab;
  //         console.log(this.corre_inf_cab);

  //         this.ApiService.FLoadServiciosxPiezas(idclase, this.globalVal.corre_inf_cab)
  //           .then((rest) => {
  //             console.log(rest);
  //             //this.DsServiciosxPieza={};
  //             console.log(this.DsServiciosxPieza);
  //             console.log(idclase.length);
  // if (idclase.length>0) {
  // console.log('ingresooo');

  // //this.DsServiciosxPieza=rest;

  // //this.DsServiciosxPieza.push(rest);

  //              //this.DsServiciosxPieza[idclase].push(rest);
  //              this.DsServiciosxPieza[idclase]=rest;
  //              console.log('ingresooo 23222');
  //              console.log(this.DsServiciosxPieza);

  //           }

  //           })
  //           .finally(() => {
  //             this.loadingController.dismiss();
  //           });
  //       });
  //   }

  //   accordionGroupChange (ev: any)  {
  //     // const nativeEl = this.listenerOut.nativeElement;
  //     // if (!nativeEl) {
  //     //   return;
  //     // }
  // console.log(ev);

  //     //const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
  //     //const selectedValue = ev.detail.value;

  //     // nativeEl.innerText = `
  //     //   Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
  //     //   Collapsed: ${collapsedItems.join(', ')}
  //     // `;
  //     //let idclase_=ev.detail.value[0];
  //     //console.log(idclase_);
  //     if (ev.length>0) {
  //       console.log('ingreso carga detalles');

  //     this.FLoadServiciosxPiezas(ev);
  //     }
  //   };
  async agregarItem(row: any) {
    console.log(row);
///mtto-otis-pop-up-add-item
    // let Row;
    // if (op=='1') {
    //   Row={familia:1,idusuario:this.IdUsuarioLocal}
    // } else {
    //   Row={familia:2,idusuario:this.IdUsuarioLocal}
    // }

    const modal = await this.modalCtrl.create({
      component: MttoOtisPopUpAddItemPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        row,
      },
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      this.FLoadPiezasAcordion();
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Modal Sent Data :', this.dataReturned);
        //console.log(dataReturned.data);
        //this.ArrayItemsSelectedDesti[index].codsmg = dataReturned.data.idequipo;
        // // // this.ArrayItemsSelectedDesti[index].marca = dataReturned.data.idmarca,
        // // //   this.ArrayItemsSelectedDesti[index].potencia = dataReturned.data.idpotencia,
        // // //   this.ArrayItemsSelectedDesti[index].tipo = dataReturned.data.idtipo


if (dataReturned.data.o_nres=='1') {

} else {
  console.log('no guardo nada');

}

        //////////////////////////////////fin
      }
    });
    return await modal.present();
  }

  agregarItemSinPieza(){
    let row:any={
      idclase:0,
      nomclase:'Sin Pieza Definida',
      rs:'0',
      id_orden_trab_cab:this.globalVal.id_orden_trab_cab
    }

    this.agregarItem(row);


      }


  async mostrarConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea realizar esta acción?',
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Si el usuario acepta, llama a tu función principal
            this.SaveFormTerminadoPaso1();
          },
        },
      ],
    });

    await alert.present();
  }

  async SaveFormTerminadoPaso1() {
    ///////////////////////////////////////////////////////////////////
    const loading = this.loadingController
      .create({
        message: 'Guardando O.T...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });
    await this.ApiService.GuardarOtTerminado(
      this.globalVal.id_orden_trab_cab,
      this.IdUsuarioLocal
    )
      .then(async (res) => {
        this.loadingController.dismiss();
        console.log(res);
        let css_msj = res[0].o_nres == '0' ? 'alerta-error' : 'alerta-ok';

        const alert = await this.alertController.create({
          header: 'ORDEN DE TRABAJO',
          subHeader: 'MATERIALES',
          cssClass: css_msj,
          mode: 'ios',
          animated: true,
          message: res[0].o_msj, // 'La operación se completó con éxito.',
          buttons: [
            {
              text: 'Aceptar',

              handler: () => {
                // Realiza acciones adicionales después de aceptar la confirmación
                console.log('Operación confirmada');
                if (res[0].o_nres == '1') {
                  this.navCtrl.navigateForward(['mtto-list-orden-trabajo']);
                }
              },
            },
          ],
        });

        await alert.present();
      })
      .finally(() => {
        console.log('finally:::>>LN:394');

        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    //////////////////////////////////////////////////////////
  }

  async FItemEliminar(event, item: any) {
    console.log(event, item);

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Desea quitar el item seleccionado?',
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Acción cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Si el usuario acepta, llama a tu función principal
            this.FQuitarItem(item);
          },
        },
      ],
    });

    await alert.present();
  }

  async FQuitarItem(item: any) {
    ///////////////////////////////////////////////////////////////////
    const loading = this.loadingController
      .create({
        message: 'Guardando O.T...',
        translucent: true, //,
        //cssClass: 'custom-class custom-loading'
      })
      .then((loading) => {
        loading.present();
      });

    // Valor que deseas agregar a la nueva columna

    const item_ = [item];

    // Recorre el array y agrega la columna "idusuario" a cada objeto
    console.log(
      '// Recorre el array y agrega la columna "idusuario" a cada objeto',
      item
    );
    item_.forEach((objeto) => {
      objeto.IdUsuarioLocal = this.IdUsuarioLocal;
      objeto.acc = 30;
    });

    console.log(item_);

    await this.ApiService.FQuitarItem(item_[0])
      .then(async (res) => {
        this.loadingController.dismiss();
        console.log(res);
        let css_msj = res[0].o_nres == '0' ? 'alerta-error' : 'alerta-ok';

        this.presentToast(res[0].o_msj);
        console.log(res[0].o_nres);

        if (res[0].o_nres == '1') {
          const index = this.EditDataRest.indexOf(item);
          // Si se encuentra el elemento, elimínalo
          if (index > -1) {
            this.EditDataRest.splice(index, 1);
          }
        }
      })
      .finally(() => {
        console.log('finally:::>>LN:394');

        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    //////////////////////////////////////////////////////////
  }

}
