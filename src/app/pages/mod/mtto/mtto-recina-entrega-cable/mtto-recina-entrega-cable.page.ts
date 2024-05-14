import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Storage } from "@ionic/storage";
import { MttorecinadoservicesService } from "src/app/api/mtto/mttorecinadoservices.service";
import { ActivatedRoute, RouteReuseStrategy } from "@angular/router";
import {
  IonicModule,
  IonicRouteStrategy,
  ToastController,
  IonInput,
  NavController,
  MenuController,
  IonItemSliding,
  Platform,
  AlertController,
  LoadingController,
  ActionSheetController,
  ModalController,
} from "@ionic/angular";

import {   ApiImage,  getFileReader,  Photo, } from "src/app/interfaces/mtto/mttoinspcables";

import { HttpClient } from "@angular/common/http";
//import { WebView } from "@ionic-native/ionic-webview/ngx";

//import { Uid } from "@ionic-native/uid/ngx";
//import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { PopUpEquRecinadoPage } from "src/app/pages/mod/mtto/pop-up-equ-recinado/pop-up-equ-recinado.page";

import { FormsModule,FormBuilder, Validators, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mtto-recina-entrega-cable',
  templateUrl: './mtto-recina-entrega-cable.page.html',
  styleUrls: ['./mtto-recina-entrega-cable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})

export class MttoRecinaEntregaCablePage implements OnInit {
  FormRecinadoEntrega: FormGroup;
  dataReturned: any;
  codsmg1: string;
  fch_reg_ot_rce: string;
  nroot: string;
  alertSiNo: any;
  fchactual: string = new Date().toISOString();
  ClsId: string;
  idrecinadocableentrega: string;
  EditDataRest: any;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    //public formGroup: FormGroup,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private api: MttorecinadoservicesService,
    private modalCtrl: ModalController,
    //private webView: WebView,
    private plt: Platform,
    private alertController: AlertController,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private actionSheetCtrl: ActionSheetController,
    //private pictureSourceType: PictureSourceType,
    private ref: ChangeDetectorRef,
    private storage: Storage,
    private http: HttpClient,
    //private filePath: FilePath,
    //private uid: Uid,
    //private androidPermissions: AndroidPermissions
  ) {
    this.FormRecinadoEntrega = this.formBuilder.group({
      idrecinadocableentrega: new FormControl(""),
      correlativo_rce: new FormControl(""),
      idrecinadocablecab_rce: new FormControl(""),
      codsmg: new FormControl("", Validators.required),      
      idequipo_rce: new FormControl(""),
      //idtipocab1: new FormControl('',Validators.required),
      idordentrabajocab_rce: new FormControl("0"),
      idestadocable1_rce: new FormControl("", Validators.required),
      idestadocable2_rce: new FormControl(""),
      detalle_rce: new FormControl(""),
      nroot: new FormControl("", Validators.required),
      fch_reg_ot_rce: new FormControl(""),
      fchregistro_rce: new FormControl(""),
    });
    console.log('this.route.snapshot.paramMap',this.route.snapshot.paramMap);
    
    this.ClsId = this.route.snapshot.paramMap.get("id");
    this.idrecinadocableentrega = this.route.snapshot.paramMap.get("identrega");
    this.FormRecinadoEntrega.controls["idrecinadocablecab_rce"].setValue(
      this.route.snapshot.paramMap.get("id")
    );
    //console.log('this.FormRecinadoEntrega.controls',this.FormRecinadoEntrega.controls);
  }

  ngOnInit() {
    this.fchactual = new Date().toISOString();
console.log('this.idrecinadocableentrega',this.idrecinadocableentrega);

    if (this.idrecinadocableentrega != "0") {
      this.api
        .load_form_entrega_cable(
          this.idrecinadocableentrega,
          'localStorage.user_id'
        )
        .then((rest) => {
          //this.loadingController.dismiss();
          this.EditarInspeccionLoad(rest);
        });
    }
  }

  EditarInspeccionLoad(rest: any) {
    this.EditDataRest = rest;

    console.log("this.EditDataRest ", this.EditDataRest);
    try {
      this.FormRecinadoEntrega.setValue({
        idrecinadocableentrega: this.EditDataRest[0].idrecinadocableentrega,
        correlativo_rce: this.EditDataRest[0].correlativo_rce,
        idrecinadocablecab_rce: this.EditDataRest[0].idrecinadocablecab_rce,
        codsmg: this.EditDataRest[0].codsmg,
        
        idequipo_rce: this.EditDataRest[0].idequipo_rce,
        //idtipocab1: new FormControl('',Validators.required),
        idordentrabajocab_rce: this.EditDataRest[0].idordentrabajocab_rce,
        idestadocable1_rce: this.EditDataRest[0].idestadocable1_rce,
        idestadocable2_rce: this.EditDataRest[0].idestadocable2_rce,
        detalle_rce: this.EditDataRest[0].detalle_rce,
        nroot: this.EditDataRest[0].nroot,
        fch_reg_ot_rce: new Date(
          this.EditDataRest[0].fch_reg_ot_rce
        ).toISOString(),
        fchregistro_rce: new Date(
          this.EditDataRest[0].fchregistro_rce
        ).toISOString(),
      });

      ///////////////***************************************** */
      /**metraje_rcd,tipocable_icmd,idestadocable_rcd,reclamo_rcd,detalle_rcd */
    } catch (error) {
      console.log("error:::>", error);
    }
    //this.NamesForm.idtipocab1 = this.EditDataRest[0].city_id;
    //this.NamesForm.metraje_protocolo = this.EditDataRest[0].address;
    /*console.log('this.NamesForm:::>',this.NamesForm);
    console.log(this.images);
    console.log('::::::::::::::::::>>');
    console.log(this.photos);
    */
    console.log(
      ":::this.FormRecinado.value.idrecinadocablecab:::::::::::::::>>"
    );
    console.log("<<<<::::::::::::::::::>>");
  }

  ////***************************/*
  cancelar_ejecucion() {
    this.navCtrl.navigateForward("mtto-list-recinado");
  }

  async open_popup_equipos() {
    const modal = await this.modalCtrl.create({
      component: PopUpEquRecinadoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: "ios",
      componentProps: {
        idvaleservidetot_p: 0,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;

        (this.fch_reg_ot_rce = dataReturned.data.fch_inicio_ot),
          (this.nroot = dataReturned.data.id_orden_trab_fis_cab),
          (this.codsmg1 = dataReturned.data.idequipo);
        this.FormRecinadoEntrega.controls["idordentrabajocab_rce"].setValue(
          dataReturned.data.id_orden_trab_fis_cab
        );
        //console.log(this.ArrayItemsSelectedDesti);
      }
    });
    return await modal.present();
  }
  SaveFormEntrega() {
    if (this.FormRecinadoEntrega.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: "Agregar Entrega Cable",
          subHeader: "",
          mode: "ios",
          backdropDismiss: true,
          message: "Confirmar que desea guardar?",
          buttons: [
            {
              text: "Aceptar",
              cssClass: "alert-button-group",
              role: "A",
              handler: () => {},
            },
            {
              text: "Cancelar",
              //cssClass: 'alert-button-group',
              role: "F",
              handler: () => {
                //this.conectar_to_insert();
                //this.events.publish('user:created',Date.now());
                //return false;
              },
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {
            console.log("aceptaPop::::>>", aceptaPop);
            if (aceptaPop.role == "A") {
              this.api
                .GuardarFormEntregaCable(this.FormRecinadoEntrega.value)
                .then((res) => {
                  console.log("res:::>>>>>>>>>", res);
                })
                .finally(() => {
                  this.navCtrl.navigateForward(["mtto-list-recinado"]);
                })
                .catch((err) => {
                  console.log("errror:::>>>>>>>>>", err);
                });
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      console.log(this.FormRecinadoEntrega.valid);
      console.log(this.FormRecinadoEntrega);

      for (let i in this.FormRecinadoEntrega.controls) {
        this.FormRecinadoEntrega.controls[i].setValue(
          this.FormRecinadoEntrega.controls[i].value
        );
        this.FormRecinadoEntrega.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: "Agregar Recinado Cable",
          subHeader: "",
          mode: "ios",
          backdropDismiss: true,
          message: "Falta seleccionar todos los datos",
          buttons: [
            {
              text: "Aceptar",
              cssClass: "alert-button-group",
              role: "A",
              handler: () => {},
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {});
          /////////////////////////
        });

      //////////////////
    }
  }
  segmentChanged(e) {}
}
