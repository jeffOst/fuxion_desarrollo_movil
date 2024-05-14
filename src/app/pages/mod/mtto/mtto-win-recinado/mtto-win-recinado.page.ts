
import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Storage } from "@ionic/storage";
import { MttorecinadoservicesService } from "src/app/api/mtto/mttorecinadoservices.service";
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, ToastController, IonInput, NavController, MenuController, IonItemSliding, Platform, AlertController, LoadingController, ActionSheetController, ModalController } from '@ionic/angular';
///import { ApiImage, getFileReader, Photo } from "../../../interfaces/mttoinspcables";
import { MttoRecinadoCables, getFileReader } from "src/app/interfaces/mtto/mttoinspcables";
import { HttpClient } from "@angular/common/http";
//import { WebView } from "@ionic-native/ionic-webview/ngx";
//import { CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
//import { Camera, CameraOptions, PictureSourceType } from "@ionic-native/camera/ngx";
//import { FilePath } from '@ionic-native/file-path/ngx';

//import { Uid } from '@ionic-native/uid/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Camera,CameraResultType,  CameraPhoto, CameraSource } from '@capacitor/camera';
//import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import {
  GalleryPhoto,
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
  GalleryImageOptions,
} from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
import { PopUpEquRecinadoPage } from 'src/app/pages/mod/mtto/pop-up-equ-recinado/pop-up-equ-recinado.page';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { IonTabs } from '@ionic/angular'


const { Device, Network, FilesystemDirectory } = Plugins;
const Storage_KEY = "my_images";
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-mtto-win-recinado',
  templateUrl: './mtto-win-recinado.page.html',
  styleUrls: ['./mtto-win-recinado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MttoWinRecinadoPage implements OnInit {

  showGroup1: boolean = false;
  showGroup2: boolean = false;

  button1Active: boolean = false;
  button2Active: boolean = false;


  @ViewChild('myTabs') tabRef: IonTabs;
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  //photo: SafeResourceUrl;
  isDesktop: boolean;
  id_setinterval: number;
  NomUsuario: String;
  ClsArForm: any;
  ClsId: string;
  rest_tipo_cables: any;
  rest_diagnosticos: any;
  rest_estados: any;
  images = [];
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  correlativo: string = "000000";
  fchactual: string = new Date().toISOString();
  idrecinadocablecab: string;
  codsmg1: string;
  fch_reg_ot_rcc: string;
  nroot: string;
  fchregistro: string;
  EstadoInspeccion: string;
  DirectorioFotos: string = '../aw_file/adjuntos/img_recinado/';
  alertSiNo: any;
  imgs: string[] = [];
  imageBlobs: Blob[] = [];
  ///////////////--------------------------
  FormRecinado: FormGroup;
  EditDataRest: any;
  popLodingMenaje: any;
  //Toogles - VERIFICACION CABLE CORTADO
  toogle1: any;
  toogle2: any;
  toogle3: any;
  toogle4: any;
  toogle5: any;
  toogle6: any;
  toogle7: any;
  toogle8: any;
  toogle9: any;
  toogle10: any;
  toogle11: any;
  //Toogles - VERIFICACION CABLE CORTOCIRCUITADO
  toogle12: any;
  toogle13: any;
  toogle14: any;
  toogle15: any;
  toogle16: any;
  toogle17: any;
  toogle18: any;
  toogle19: any;
  toogle20: any;
  toogle21: any;
  toogle22: any;
  toogle23: any;
  toogle24: any;
  toogle25: any;
  toogle26: any;
  toogle27: any;
  toogle28: any;

  toogle29: any;
  toogle30: any;
  toogle31: any;
  toogle32: any;
  toogle33: any;
  toogle34: any;
  toogle35: any;
  toogle36: any;
  toogle37: any;
  toogle38: any;
  toogle39: any;
  toogle40: any;
  toogle41: any;
  toogle42: any;
  toogle43: any;
  toogle44: any;
  toogle45: any;
  toogle46: any;
  toogle47: any;
  toogle48: any;
  toogle49: any;
  toogle50: any;
  toogle51: any;
  toogle52: any;
  toogle53: any;
  toogle54: any;
  toogle55: any;
  toogle56: any;
  termistor_m1: number;
  termistor_t1: number;
  reclamo_rcd1: number;
  termistor_m2: number;
  termistor_t2: number;
  reclamo_rcd2: number;

  idestadoinspeccion: number;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  dataReturned: any;
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

    this.FormRecinado = this.formBuilder.group({
      correlativo: new FormControl('', Validators.required),
      fchregistro: new FormControl('', Validators.required),
      codsmg: new FormControl('', Validators.required),
      idestadoinspeccion: new FormControl('', Validators.required),
      //idtipocab1: new FormControl('',Validators.required),
      idrecinadocablecab: new FormControl('0', Validators.required),
      metraje_inspeccion1: new FormControl('', Validators.required),
      metraje_inspeccion2: new FormControl(''),
      detalle_rcd1: new FormControl(''),
      detalle_rcd2: new FormControl(''),
      reclamo_rcd1: new FormControl('0', Validators.required),
      reclamo_rcd2: new FormControl('0'),

      pareja_f1_f2_acac: new FormControl(''),
      pareja_f1_f3_acac: new FormControl(''),
      pareja_f1_p_acac: new FormControl(''),
      pareja_f1_g_acac: new FormControl(''),
      pareja_f2_f3_acac: new FormControl(''),
      pareja_f2_p_acac: new FormControl(''),
      pareja_f2_g_acac: new FormControl(''),
      pareja_f3_p_acac: new FormControl(''),
      pareja_f3_g_acac: new FormControl(''),
      pareja_p_g_acac: new FormControl(''),

      f1_armadura_acar: new FormControl(''),
      f2_armadura_acar: new FormControl(''),
      f3_armadura_acar: new FormControl(''),
      p_armadura_acar: new FormControl(''),
      g_armadura_acar: new FormControl(''),

      f1_p_acp: new FormControl(''),
      f2_p_acp: new FormControl(''),
      f3_p_acp: new FormControl(''),
      g_p_acp: new FormControl(''),

      idestadocable_rcd1: new FormControl('', Validators.required),
      idestadocable_rcd2: new FormControl(''),
      ca1_mts_pp1: new FormControl('0', Validators.required),///metraje final
      ca1_mts_pp2: new FormControl('0'),
      //ca2_mts_pp1: new FormControl('0',Validators.required),
      //ca2_mts_pp2: new FormControl('0'),
      fch_reg_ot_rcc: new FormControl('', Validators.required),
      tipo_cable1: new FormControl('', Validators.required),
      tipo_cable2: new FormControl(''),
      nroot: new FormControl('', Validators.required),

      aislamiento1: new FormControl('', Validators.required),
      aislamiento2: new FormControl(''),
      termistor_m1: new FormControl('', Validators.required),
      termistor_m2: new FormControl(''),
      termistor_t1: new FormControl('', Validators.required),
      termistor_t2: new FormControl(''),
      diagnostico1: new FormControl('', Validators.required),
      diagnostico2: new FormControl(''),
      ca1_codigo_rcc: new FormControl('', Validators.required),
      ca2_codigo_rcc: new FormControl(''),

      pareja_f1_f2_acac2: new FormControl(''),
      pareja_f1_f3_acac2: new FormControl(''),
      pareja_f1_p_acac2: new FormControl(''),
      pareja_f1_g_acac2: new FormControl(''),
      pareja_f2_f3_acac2: new FormControl(''),
      pareja_f2_p_acac2: new FormControl(''),
      pareja_f2_g_acac2: new FormControl(''),
      pareja_f3_p_acac2: new FormControl(''),
      pareja_f3_g_acac2: new FormControl(''),
      pareja_p_g_acac2: new FormControl(''),
      f1_armadura_acar2: new FormControl(''),
      f2_armadura_acar2: new FormControl(''),
      f3_armadura_acar2: new FormControl(''),
      p_armadura_acar2: new FormControl(''),
      g_armadura_acar2: new FormControl(''),
      f1_p_acp2: new FormControl(''),
      f2_p_acp2: new FormControl(''),
      f3_p_acp2: new FormControl(''),
      g_p_acp2: new FormControl(''),


      //VERIFICACION CABLE CORTADO
      toogle1: new FormControl(''),
      toogle2: new FormControl(''),
      toogle3: new FormControl(''),
      toogle4: new FormControl(''),
      toogle5: new FormControl(''),
      toogle6: new FormControl(''),
      toogle7: new FormControl(''),
      toogle8: new FormControl(''),
      toogle9: new FormControl(''),
      toogle10: new FormControl(''),
      toogle11: new FormControl(''),
      //VERIFICACION CABLE CORTOCIRCUITADO
      toogle12: new FormControl(''),
      toogle13: new FormControl(''),
      toogle14: new FormControl(''),
      toogle15: new FormControl(''),
      toogle16: new FormControl(''),
      toogle17: new FormControl(''),
      toogle18: new FormControl(''),
      toogle19: new FormControl(''),
      toogle20: new FormControl(''),
      toogle21: new FormControl(''),
      toogle22: new FormControl(''),
      toogle23: new FormControl(''),
      toogle24: new FormControl(''),
      toogle25: new FormControl(''),
      toogle26: new FormControl(''),
      toogle27: new FormControl(''),
      toogle28: new FormControl(''),

      toogle29: new FormControl(''),
      toogle30: new FormControl(''),
      toogle31: new FormControl(''),
      toogle32: new FormControl(''),
      toogle33: new FormControl(''),
      toogle34: new FormControl(''),
      toogle35: new FormControl(''),
      toogle36: new FormControl(''),
      toogle37: new FormControl(''),
      toogle38: new FormControl(''),
      toogle39: new FormControl(''),
      toogle40: new FormControl(''),
      toogle41: new FormControl(''),
      toogle42: new FormControl(''),
      toogle43: new FormControl(''),
      toogle44: new FormControl(''),
      toogle45: new FormControl(''),
      toogle46: new FormControl(''),
      toogle47: new FormControl(''),
      toogle48: new FormControl(''),
      toogle49: new FormControl(''),
      toogle50: new FormControl(''),
      toogle51: new FormControl(''),
      toogle52: new FormControl(''),
      toogle53: new FormControl(''),
      toogle54: new FormControl(''),
      toogle55: new FormControl(''),
      toogle56: new FormControl(''),


    })

    this.DirectorioFotos = this.api.DirectorioImg;
    this.ClsId = this.route.snapshot.paramMap.get('id');  //aqui se pasa el id
    this.fchregistro = new Date().toISOString();


  }
  /*
    async getImei() {
      const { hasPermission } = await this.androidPermissions.checkPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );
  
      if (!hasPermission) {
        const result = await this.androidPermissions.requestPermission(
          this.androidPermissions.PERMISSION.READ_PHONE_STATE
        );
  
        if (!result.hasPermission) {
          throw new Error('Permissions required');
        }
  
        // ok, a user gave us permission, we can get him identifiers after restart app
        return;
      }
  
      return this.uid.IMEI
    }*/

  async ngOnInit() {

    if ((this.plt.is('mobile') && this.plt.is('hybrid')) || this.plt.is('desktop')) {
      this.isDesktop = true;
    }


    // let imeee = this.getImei();
    //  console.log('imeee::', imeee);

    // let status = await Network.getStatus();
    // console.log('status', status);
    // const info = await Device.getInfo();
    // console.log('info::', info);

    this.api.list_tipo_cable().subscribe(res => {
      console.log('ingreso lista cables', res);
      this.rest_tipo_cables = res['tcable'];
      this.rest_diagnosticos = res['diagnostico'];
      this.rest_estados = res['estcable'];
      // console.log("this.rest_estados",res['estcable']);

      this.ref.detectChanges();
    })

    this.fchactual = new Date().toISOString();
    console.log('this.fchactual::', this.fchactual);

    //await this.loadSaved();
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NomUsuario = localStorage.user_name;
      console.log('localStorage.user_id;:::', localStorage.user_id);

      this.api.load_form_insp_cable(this.ClsId, localStorage.user_id).then((rest) => {
        //this.loadingController.dismiss();
        console.log('this.ClsId', this.ClsId);

        if (this.ClsId == '0') {
          this.NewInspeccionLoad(rest);
        } else {
          this.EditarInspeccionLoad(rest);
          this.selectedTextTCable1(1);
          this.selectedTextTCable2(1);
          this.selectedTextDiagnostico1(1);
          this.selectedTextDiagnostico2(1);
          this.selectedTextTCable3(1);
        }


      })


    }).finally(() => {
      console.log('localStorage.user_id;:::finally:::', localStorage.user_id);
    })

    this.plt.ready().then(
      () => {

      }
    )

  }
  ////////////
  SaveFormInsp() {

    if (this.FormRecinado.valid) {
      this.alertSiNo = this.alertController.create({
        header: 'Agregar Inspeccion Cable',
        subHeader: '',
        mode: "ios",
        backdropDismiss: true,
        message: 'Confirmar que desea guardar?',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {
            }
          },
          {
            text: 'Cancelar',
            //cssClass: 'alert-button-group',
            role: 'F',
            handler: () => {
              //this.conectar_to_insert();   
              //this.events.publish('user:created',Date.now());            
              //return false;
            }
          }
        ]

      }).then((alertI) => {
        alertI.present();
        alertI.onDidDismiss().then(
          (aceptaPop) => {
            console.log('aceptaPop::::>>', aceptaPop);
            if (aceptaPop.role == 'A') {
              this.api.GuardarFormulario(this.FormRecinado.value).then((res) => {
                console.log('res:::>>>>>>>>>', res);
              }).finally(() => {
                this.navCtrl.navigateForward(['mtto-list-recinado']);
              }).catch((err) => {
                console.log('errror:::>>>>>>>>>', err);
              })
            } else {

            }



          });
        /////////////////////////
      });
    }
    else {
      console.log(this.FormRecinado.valid);
      console.log(this.FormRecinado);


      for (let i in this.FormRecinado.controls) {
        this.FormRecinado.controls[i].setValue(this.FormRecinado.controls[i].value);
        this.FormRecinado.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController.create({
        header: 'Agregar Recinado Cable',
        subHeader: '',
        mode: "ios",
        backdropDismiss: true,
        message: 'Falta seleccionar todos los datos',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {
            }
          }
        ]

      }).then((alertI) => {
        alertI.present();
        alertI.onDidDismiss().then(
          (aceptaPop) => {

          });
        /////////////////////////
      });

      //////////////////

    }

  }
  NewInspeccionLoad(rest: any) {
    this.EditDataRest = rest;
    console.log('newinspeccion', this.EditDataRest[0]);
    console.log('newinspeccion', this.EditDataRest);
    this.idrecinadocablecab = this.EditDataRest[0].idrecinadocablecab;
    this.FormRecinado.value.idrecinadocablecab = this.EditDataRest[0].idrecinadocablecab;
    this.correlativo = this.EditDataRest[0].correlativo_rcc;
    this.fchregistro = new Date(this.EditDataRest[0].fchregistro_rcc).toISOString();
    //this.fch_reg_ot_rcc = new Date(this.EditDataRest[0].fchregistro_rcc).toISOString();

    /*
        this.FormRecinado.setValue({
          idrecinadocablecab: this.EditDataRest[0].idrecinadocablecab,
          correlativo: this.EditDataRest[0].correlativo_rcc,
          fchregistro: new Date(this.EditDataRest[0].fchregistro_rcc).toISOString()      
        });
    */
    this.ref.detectChanges();
  }
  //////////
  EditarInspeccionLoad(rest: any) {
    this.EditDataRest = rest;

    console.log('this.EditDataRest ', this.EditDataRest);
    console.log("ver aqui idrecinadocablecab al cargar la ventana");
    console.log(this.EditDataRest[0].idrecinadocablecab);


    try {
      this.FormRecinado.setValue({
        idrecinadocablecab: this.EditDataRest[0].idrecinadocablecab,
        correlativo: this.EditDataRest[0].correlativo_rcc,
        fchregistro: new Date(this.EditDataRest[0].fchregistro_rcc).toISOString(),
        codsmg: this.EditDataRest[0].codsmg,
        idestadoinspeccion: this.EditDataRest[0].idestado_rcc,
        ca1_mts_pp1: this.EditDataRest[0].metraje_pp_rcd,
        ca1_mts_pp2: this.EditDataRest[1].metraje_pp_rcd,
        metraje_inspeccion1: this.EditDataRest[0].metraje_rcd,
        metraje_inspeccion2: this.EditDataRest[1].metraje_rcd,
        tipo_cable1: this.EditDataRest[0].tipocable_rcd,
        tipo_cable2: this.EditDataRest[1].tipocable_rcd,
        idestadocable_rcd1: this.EditDataRest[0].idestadocable_rcd,
        idestadocable_rcd2: this.EditDataRest[1].idestadocable_rcd,
        reclamo_rcd1: this.EditDataRest[0].reclamo_rcd,
        reclamo_rcd2: this.EditDataRest[1].reclamo_rcd,
        detalle_rcd1: this.EditDataRest[0].detalle_rcd,
        detalle_rcd2: this.EditDataRest[1].detalle_rcd,
        //fch_reg_ot_rcc: new Date(this.EditDataRest[0].fch_reg_ot_rcc).toISOString(),
        fch_reg_ot_rcc: this.EditDataRest[0].fch_reg_ot_rcc,
        nroot: this.EditDataRest[1].nroot,
        aislamiento1: this.EditDataRest[0].aislamiento,
        aislamiento2: this.EditDataRest[1].aislamiento,
        termistor_m1: this.EditDataRest[0].thermistor_m,
        termistor_m2: this.EditDataRest[1].thermistor_m,
        termistor_t1: this.EditDataRest[0].thermistor_n,
        termistor_t2: this.EditDataRest[1].thermistor_n,
        diagnostico1: this.EditDataRest[0].diagnostico,
        diagnostico2: this.EditDataRest[1].diagnostico,
        ca1_codigo_rcc: this.EditDataRest[1].ca1_codigo_rcc,
        ca2_codigo_rcc: this.EditDataRest[1].ca2_codigo_rcc,

        pareja_f1_f2_acac: this.EditDataRest[0].pareja_f1_f2_acac,
        pareja_f1_f3_acac: this.EditDataRest[0].pareja_f1_f3_acac,
        pareja_f1_p_acac: this.EditDataRest[0].pareja_f1_p_acac,
        pareja_f1_g_acac: this.EditDataRest[0].pareja_f1_g_acac,
        pareja_f2_f3_acac: this.EditDataRest[0].pareja_f2_f3_acac,
        pareja_f2_p_acac: this.EditDataRest[0].pareja_f2_p_acac,
        pareja_f2_g_acac: this.EditDataRest[0].pareja_f2_g_acac,
        pareja_f3_p_acac: this.EditDataRest[0].pareja_f3_p_acac,
        pareja_f3_g_acac: this.EditDataRest[0].pareja_f3_g_acac,
        pareja_p_g_acac: this.EditDataRest[0].pareja_p_g_acac,

        f1_armadura_acar: this.EditDataRest[0].f1_armadura_acar,
        f2_armadura_acar: this.EditDataRest[0].f2_armadura_acar,
        f3_armadura_acar: this.EditDataRest[0].f3_armadura_acar,
        p_armadura_acar: this.EditDataRest[0].p_armadura_acar,
        g_armadura_acar: this.EditDataRest[0].g_armadura_acar,

        f1_p_acp: this.EditDataRest[0].f1_p_acp,
        f2_p_acp: this.EditDataRest[0].f2_p_acp,
        f3_p_acp: this.EditDataRest[0].f3_p_acp,
        g_p_acp: this.EditDataRest[0].g_p_acp,

        //ca1_mts_pp1: this.EditDataRest[0].metraje_pp_rcd,
        //ca1_mts_pp2: this.EditDataRest[1].metraje_pp_rcd,

        pareja_f1_f2_acac2: this.EditDataRest[1].pareja_f1_f2_acac,
        pareja_f1_f3_acac2: this.EditDataRest[1].pareja_f1_f3_acac,
        pareja_f1_p_acac2: this.EditDataRest[1].pareja_f1_p_acac,
        pareja_f1_g_acac2: this.EditDataRest[1].pareja_f1_g_acac,
        pareja_f2_f3_acac2: this.EditDataRest[1].pareja_f2_f3_acac,
        pareja_f2_p_acac2: this.EditDataRest[1].pareja_f2_p_acac,
        pareja_f2_g_acac2: this.EditDataRest[1].pareja_f2_g_acac,
        pareja_f3_p_acac2: this.EditDataRest[1].pareja_f3_p_acac,
        pareja_f3_g_acac2: this.EditDataRest[1].pareja_f3_g_acac,
        pareja_p_g_acac2: this.EditDataRest[1].pareja_p_g_acac,
        f1_armadura_acar2: this.EditDataRest[1].f1_armadura_acar,
        f2_armadura_acar2: this.EditDataRest[1].f2_armadura_acar,
        f3_armadura_acar2: this.EditDataRest[1].f3_armadura_acar,
        p_armadura_acar2: this.EditDataRest[1].p_armadura_acar,
        g_armadura_acar2: this.EditDataRest[1].g_armadura_acar,
        f1_p_acp2: this.EditDataRest[1].f1_p_acp,
        f2_p_acp2: this.EditDataRest[1].f2_p_acp,
        f3_p_acp2: this.EditDataRest[1].f3_p_acp,
        g_p_acp2: this.EditDataRest[1].g_p_acp,

        //AQUI SE ASIGNA VALORES
        //CABLE 1
        toogle1: this.EditDataRest[0].toogle1,
        toogle2: this.EditDataRest[0].toogle2,
        toogle3: this.EditDataRest[0].toogle3,
        toogle4: this.EditDataRest[0].toogle4,
        toogle5: this.EditDataRest[0].toogle5,
        toogle6: this.EditDataRest[0].toogle6,
        toogle7: this.EditDataRest[0].toogle7,
        toogle8: this.EditDataRest[0].toogle8,
        toogle9: this.EditDataRest[0].toogle9,
        toogle10: this.EditDataRest[0].toogle10,
        toogle11: this.EditDataRest[0].conformidad_v_c_cortado,
        toogle12: this.EditDataRest[0].toogle12,
        toogle13: this.EditDataRest[0].toogle13,
        toogle14: this.EditDataRest[0].toogle14,
        toogle15: this.EditDataRest[0].toogle15,
        toogle16: this.EditDataRest[0].toogle16,
        toogle17: this.EditDataRest[0].toogle17,
        toogle18: this.EditDataRest[0].toogle18,
        toogle19: this.EditDataRest[0].toogle19,
        toogle20: this.EditDataRest[0].toogle20,
        toogle21: this.EditDataRest[0].toogle21,
        toogle22: this.EditDataRest[0].conformidad_v_c_cortocircuitado,
        toogle23: this.EditDataRest[0].conformidad_a_c_activos,
        toogle24: this.EditDataRest[0].conformidad_a_c_armadura,
        toogle25: this.EditDataRest[0].conformidad_a_c_piloto,
        toogle26: this.EditDataRest[0].mantener_operacion_dfr,
        toogle27: this.EditDataRest[0].realizar_prueba_dias_dfr,
        toogle28: this.EditDataRest[0].cambiar_cable_dfr,

        //CABLE 2
        toogle29: this.EditDataRest[1].toogle1,
        toogle30: this.EditDataRest[1].toogle2,
        toogle31: this.EditDataRest[1].toogle3,
        toogle32: this.EditDataRest[1].toogle4,
        toogle33: this.EditDataRest[1].toogle5,
        toogle34: this.EditDataRest[1].toogle6,
        toogle35: this.EditDataRest[1].toogle7,
        toogle36: this.EditDataRest[1].toogle8,
        toogle37: this.EditDataRest[1].toogle9,
        toogle38: this.EditDataRest[1].toogle10,
        toogle39: this.EditDataRest[1].conformidad_v_c_cortado,
        toogle40: this.EditDataRest[1].toogle12,
        toogle41: this.EditDataRest[1].toogle13,
        toogle42: this.EditDataRest[1].toogle14,
        toogle43: this.EditDataRest[1].toogle15,
        toogle44: this.EditDataRest[1].toogle16,
        toogle45: this.EditDataRest[1].toogle17,
        toogle46: this.EditDataRest[1].toogle18,
        toogle47: this.EditDataRest[1].toogle19,
        toogle48: this.EditDataRest[1].toogle20,
        toogle49: this.EditDataRest[1].toogle21,
        toogle50: this.EditDataRest[1].conformidad_v_c_cortocircuitado,
        toogle51: this.EditDataRest[1].conformidad_a_c_activos,
        toogle52: this.EditDataRest[1].conformidad_a_c_armadura,
        toogle53: this.EditDataRest[1].conformidad_a_c_piloto,
        toogle54: this.EditDataRest[1].mantener_operacion_dfr,
        toogle55: this.EditDataRest[1].realizar_prueba_dias_dfr,
        toogle56: this.EditDataRest[1].cambiar_cable_dfr,

      });

      //CABLE 1
      this.toogle1 = this.EditDataRest[0].toogle1;
      this.toogle2 = this.EditDataRest[0].toogle2;
      this.toogle3 = this.EditDataRest[0].toogle3;
      this.toogle4 = this.EditDataRest[0].toogle4;
      this.toogle5 = this.EditDataRest[0].toogle5;
      this.toogle6 = this.EditDataRest[0].toogle6;
      this.toogle7 = this.EditDataRest[0].toogle7;
      this.toogle8 = this.EditDataRest[0].toogle8;
      this.toogle9 = this.EditDataRest[0].toogle9;
      this.toogle10 = this.EditDataRest[0].toogle10;
      this.toogle11 = this.EditDataRest[0].conformidad_v_c_cortado;
      this.toogle12 = this.EditDataRest[0].toogle12;
      this.toogle13 = this.EditDataRest[0].toogle13;
      this.toogle14 = this.EditDataRest[0].toogle14;
      this.toogle15 = this.EditDataRest[0].toogle15;
      this.toogle16 = this.EditDataRest[0].toogle16;
      this.toogle17 = this.EditDataRest[0].toogle17;
      this.toogle18 = this.EditDataRest[0].toogle18;
      this.toogle19 = this.EditDataRest[0].toogle19;
      this.toogle20 = this.EditDataRest[0].toogle20;
      this.toogle21 = this.EditDataRest[0].toogle21;
      this.toogle22 = this.EditDataRest[0].conformidad_v_c_cortocircuitado;
      this.toogle23 = this.EditDataRest[0].conformidad_a_c_activos;
      this.toogle24 = this.EditDataRest[0].conformidad_a_c_armadura;
      this.toogle25 = this.EditDataRest[0].conformidad_a_c_piloto;
      this.toogle26 = this.EditDataRest[0].mantener_operacion_dfr;
      this.toogle27 = this.EditDataRest[0].realizar_prueba_dias_dfr;
      this.toogle28 = this.EditDataRest[0].cambiar_cable_dfr;

      //CABLE 2
      this.toogle29 = this.EditDataRest[1].toogle1;
      this.toogle30 = this.EditDataRest[1].toogle2;
      this.toogle31 = this.EditDataRest[1].toogle3;
      this.toogle32 = this.EditDataRest[1].toogle4;
      this.toogle33 = this.EditDataRest[1].toogle5;
      this.toogle34 = this.EditDataRest[1].toogle6;
      this.toogle35 = this.EditDataRest[1].toogle7;
      this.toogle36 = this.EditDataRest[1].toogle8;
      this.toogle37 = this.EditDataRest[1].toogle9;
      this.toogle38 = this.EditDataRest[1].toogle10;
      this.toogle39 = this.EditDataRest[1].conformidad_v_c_cortado;
      this.toogle40 = this.EditDataRest[1].toogle12;
      this.toogle41 = this.EditDataRest[1].toogle13;
      this.toogle42 = this.EditDataRest[1].toogle14;
      this.toogle43 = this.EditDataRest[1].toogle15;
      this.toogle44 = this.EditDataRest[1].toogle16;
      this.toogle45 = this.EditDataRest[1].toogle17;
      this.toogle46 = this.EditDataRest[1].toogle18;
      this.toogle47 = this.EditDataRest[1].toogle19;
      this.toogle48 = this.EditDataRest[1].toogle20;
      this.toogle49 = this.EditDataRest[1].toogle21;
      this.toogle50 = this.EditDataRest[1].conformidad_v_c_cortocircuitado;
      this.toogle51 = this.EditDataRest[1].conformidad_a_c_activos;
      this.toogle52 = this.EditDataRest[1].conformidad_a_c_armadura;
      this.toogle53 = this.EditDataRest[1].conformidad_a_c_piloto;
      this.toogle54 = this.EditDataRest[1].mantener_operacion_dfr;
      this.toogle55 = this.EditDataRest[1].realizar_prueba_dias_dfr;
      this.toogle56 = this.EditDataRest[1].cambiar_cable_dfr;

      this.termistor_m1 = this.EditDataRest[0].thermistor_m;
      this.termistor_t1 = this.EditDataRest[0].thermistor_n;
      this.reclamo_rcd1 = this.EditDataRest[0].reclamo_rcd;

      this.termistor_m2 = this.EditDataRest[1].thermistor_m;
      this.termistor_t2 = this.EditDataRest[1].thermistor_n;
      this.reclamo_rcd2 = this.EditDataRest[1].reclamo_rcd;

      this.idestadoinspeccion = this.EditDataRest[0].idestado_rcc;

      //console.log("verifica");
      //console.log(this.termistor_m1);
      //console.log(this.EditDataRest[0].thermistor_m);

      //console.log("HELP");
      ///////////////***************************************** */
      /**metraje_rcd,tipocable_icmd,idestadocable_rcd,reclamo_rcd,detalle_rcd */

    } catch (error) {
      console.log('error:::>', error);

    }
    //this.NamesForm.idtipocab1 = this.EditDataRest[0].city_id;
    //this.NamesForm.metraje_protocolo = this.EditDataRest[0].address;
    /*console.log('this.NamesForm:::>',this.NamesForm);
    console.log(this.images);
    console.log('::::::::::::::::::>>');
    console.log(this.photos);
    */
    console.log(':::this.FormRecinado.value.idrecinadocablecab:::::::::::::::>>');
    this.loadImages(this.FormRecinado.value.idrecinadocablecab);
    console.log('<<<<::::::::::::::::::>>');
  }
  selectedTextTCable3(op) {
    let nombre = null;
    if (op == 1) {////////despues de cargar de TS
      console.log('this.rest_estados que rao no', this.rest_estados);
      this.rest_estados.forEach(es => {
        console.log('this.FormRecinado.get(idestadocable_rcd1).value', this.FormRecinado.get('idestadocable_rcd1').value);

        if (this.FormRecinado.get('idestadocable_rcd1').value == es.codigo) {
          nombre = es.nombre;
        }
      });
    } else {

    }
    return nombre;
  }
  selectedTextTCable1(op) {
    let nombre = null;
    if (op == 1) {////////despues de cargar de TS
      this.rest_tipo_cables.forEach(materia => {
        if (this.FormRecinado.get('tipo_cable1').value == materia.id) {
          nombre = materia.nombre;
        }
      });
    } else {

    }
    return nombre;
  }
  selectedTextTCable2(op) {
    let nombre = null;
    if (op == 1) {////////despues de cargar de TS
      console.log('this.rest_tipo_cables', this.rest_tipo_cables);

      this.rest_tipo_cables.forEach(materia => {
        //console.log('this.FormRecinado.get(tipo_cable1).value',this.FormRecinado.get('tipo_cable1').value);
        if (this.FormRecinado.get('tipo_cable2').value == materia.id) {
          nombre = materia.nombre;
        }
      });
    } else {

    }
    return nombre;
  }

  selectedTextDiagnostico1(op) {
    let nombre = null;
    if (op == 1) {////////despues de cargar de TS

      this.rest_diagnosticos.forEach(materia => {
        console.log('this.FormRecinado.get(diagnostico1).value', this.FormRecinado.get('diagnostico1').value);

        if (this.FormRecinado.get('diagnostico1').value == materia.id) {
          nombre = materia.nombre;
        }
      });
    } else {

    }
    return nombre;
  }
  selectedTextDiagnostico2(op) {
    let nombre = null;
    if (op == 1) {////////despues de cargar de TS

      this.rest_diagnosticos.forEach(materia => {

        if (this.FormRecinado.get('diagnostico2').value == materia.id) {
          nombre = materia.nombre;
        }
      });
    } else {

    }
    return nombre;
  }

  showGroup(groupNumber: number) {
    if (groupNumber === 1) {

      this.showGroup1 = true;
      this.showGroup2 = false;

      this.button1Active = !this.button1Active;
      if (this.button1Active) {
        this.button2Active = false;
      }

    } else if (groupNumber === 2) {

      this.showGroup1 = false;
      this.showGroup2 = true;

      this.button2Active = !this.button2Active;
      if (this.button2Active) {
        this.button1Active = false;
      }

    }
  }

  buttonColor(buttonNumber: number): string {
    if (buttonNumber === 1) {
      return this.button1Active ? 'primary' : 'medium';
    } else if (buttonNumber === 2) {
      return this.button2Active ? 'primary' : 'medium';
    }
  }

  async open_popup_equipos() {

    const modal = await this.modalCtrl.create({
      component: PopUpEquRecinadoPage,
      backdropDismiss: true,
      showBackdrop: true,
      mode: 'ios',
      componentProps: {
        idvaleservidetot_p: 0
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;

        this.fch_reg_ot_rcc = dataReturned.data.fch_inicio_ot,
          this.nroot = dataReturned.data.id_orden_trab_fis_cab,
          this.codsmg1 = dataReturned.data.idequipo
        //console.log(this.ArrayItemsSelectedDesti);


      }
    });

    return await modal.present();


  }

  /////////////////////////----------------------->>>
  loadImages(id) {

    this.api.getImages(id).subscribe(images => {
      this.images = images;
      this.ref.detectChanges();
      //this.loadingController.dismiss();
    });
  }

  async selectImageSource() {
    const buttons = [
      {
        text: 'Tome una Foto',
        icon: 'camera',
        handler: () => {
          console.log(CameraSource.Camera);
          this.addNewToGallery(1);
        }
      },
      {
        text: 'Elegir desde las fotos',
        icon: 'image',
        handler: () => {
          console.log('Photos', CameraSource.Photos);
          this.addNewToGallery(2);
          //this.filePickerRef.nativeElement.click();
          return;
        }
      }
    ];

    // Only allow file selection inside a browser
    /*if (!this.plt.is('hybrid')) {
      buttons.push({
        text: 'Elegir Archivo',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }*/

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecionar Image',
      buttons
    });
    await actionSheet.present();
  }
  public async addNewToGallery(tp) {
    // Take a photo
    const galleryOptions: GalleryImageOptions = {
      //resultType: CameraResultType.Uri, // Puedes usar CameraResultType.Base64 si prefieres obtener datos en Base64
      //source: CameraSource.Photos,
      width: 800, // Opcional: ajusta el ancho de las imágenes
      height: 800, // Opcional: ajusta la altura de las imágenes
      quality: 100, // Opcional: ajusta la calidad de las imágenes
      correctOrientation: true,
    };
  
  
    try {
      const val = await Camera.pickImages(galleryOptions);
      const images = val.photos;
      this.imgs = [];
      this.imageBlobs = [];
      for (let index = 0; index < images.length; index++) {
        this.imgs.push(images[index].webPath);
      }
  
      this.sendImages();
    } catch (error) {
      console.error('Error picking images', error);
    }
    
    ///////////***********************fi nue codigo */
  }

  sendImages() {

    this.popLodingMenaje = this.loadingController
    .create({
      //spinner: null,
      //duration: 5000,
      message: 'Guardando foto...',
      translucent: true, //,
      //cssClass: 'custom-class custom-loading'
    })
    .then((loading) => {
      loading.present();
    });
  
    Promise.all(this.imgs.map(imgPath => this.convertAndAddToBlobs(imgPath)))
      .then(() => {
  
        //this.sendImagesToServer();
    // this.api.uploadImage(filePath, , 'png').subscribe(newImage => {
    console.log('ingresaaaa aqui');
    
        let respons = this.api.uploadImage(
          this.imageBlobs,
          this.FormRecinado.value.idrecinadocablecab,
            'png'
          ).subscribe(
            (newImage) => {
              this.loadingController.dismiss();
             
              this.loadImages( this.FormRecinado.value.idrecinadocablecab);
              //this.ref.detectChanges();
              console.log('salio okkkk::', newImage);
              ///aqui cerrar pop loading imagennnnn
            },
            (error) => {
              console.log('error__::>', error);
            }
          );
  
  
      })
      .catch(error => {
        console.error('Error converting and adding Blobs', error);
      });
  }
  async convertAndAddToBlobs(imgPath: string) {
    try {
      console.log('convertAndAddToBlobs',imgPath);
      const blob = await this.getBlobFromImagePath(imgPath);
      this.addImageBlob(blob);
    } catch (error) {
      console.error('Error converting image to Blob', error);
    }
  }
  addImageBlob(blob: Blob) {
    this.imageBlobs.push(blob);
  }
  async getBlobFromImagePath(imgPath: string): Promise<Blob> {

    const response = await fetch(imgPath);
    const blob = await response.blob();
    return blob;
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    ///////////////////lanzar pop guardando photooo
    /*this.popLodingMenaje = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Guardando foto...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
      }
    )*/
    ////////////////fin lanzar guardando foto

    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
      //directory: FilesystemDirectory.Data
    });



    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format


    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {

    this.popLodingMenaje = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Guardando foto...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
      }
    )
    ////////////////fin lanzar guardando foto

    const reader = new FileReader();
    let newInstance = getFileReader();
    newInstance.readAsDataURL(blob);
    newInstance.onload = (imgsrc) => {
      let url = (imgsrc.target as FileReader).result;
      console.log('url__;;', url)
      let filePath;
      filePath = url;
      let correctPath;// = filePath.substr(0, filePath.lastIndexOf('/') + 1);
      console.log('filePath::', filePath);
      //correctPath = this.dataURLtoFile(filePath, 'fileName.png');
      //correctPath = newInstance.result;
      //console.log('correctPath::>>>>', correctPath);
      //correctPath = this.base64ToArrayBuffer(reader.result);
      //correctPath = this.dataURLtoBlob(newInstance.result);
      filePath = this.dataURLtoBlob(filePath);
      console.log('correctPath::<<<<<>>>>', correctPath);
      this.api.uploadImage(filePath, this.FormRecinado.value.idrecinadocablecab, 'png').subscribe(newImage => {
        this.loadingController.dismiss();
        this.loadImages(this.FormRecinado.value.idrecinadocablecab);
        //this.ref.detectChanges();
        console.log('salio okkkk::', newImage);
        ///aqui cerrar pop loading imagennnnn
      },
        error => {
          console.log('error__::>', error);

        }
      )

    }
    /*
       console.log('EMPTY:::>', reader); // readyState will be 0
       reader.onloadend = (): void => {
         console.log('DONE::::>>>', reader.readyState); // readyState will be 2
       };
      console.log('reader::', reader);
       console.log('reader::::::', reader);
       //reader.onerror = reject;
       console.log(reject);
       reader.onerror = (err) => {
         console.log("Error in Reading File", err);
         //console.error("Error in Reading File");
         reader.abort();
       };
       reader.onloadend = () => {
         resolve(reader.result);
         console.log('reader.result', reader.result);
         let format = 'jpg';
         console.log('cameraPhoto::>::', blob);
         let filePath;
         filePath = reader.result;
         //const blobData = this.b64toBlob(reader.result, `image/${format}`);                
       };
       reader.readAsDataURL(blob);
       console.log('LOADING', reader.readyState); // readyState will be 1
       console.log('reader.result::', reader.result);
       console.log('blob', blob);
   */
  }).finally(() => {
    console.log('convertBlobToBase64:::', this.convertBlobToBase64);


  })
  ////////////////////-----------------
  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  /////////---------------
  base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  ////////////*-----------------------------
  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  ////////////-****************************************
  public async loadSaved() {
    // Retrieve cached photo array data
    //const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    // this.photos = JSON.parse(photoList.value) || [];
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        //path: photo.filepath,
        path: photo.path,
        directory: Directory.Data
        //directory: FilesystemDirectory.Data
      });

      // Web platform only: Load the photo as base64 data::::webviewPath
      photo.webPath = `data:image/jpeg;base64,${readFile.data}`;
    }
    // more to come...
  }

  //////********************************************************************************************** */
  /*
  async addImage(source: CameraSource) {
    console.log('source', source);
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = '5555_22';

    this.api.uploadImage(blobData, imageName, image.format).then((newImage) => {
      this.images.push(newImage);
    });
  }
*/
  // Used for browser direct file upload
  uploadFile(event: EventTarget) {
    // const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    // const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    // const file: File = target.files[0];
    // this.api.uploadImageFile(file).subscribe((newImage: ApiImage) => {
    //   this.images.push(newImage);
    // });
  }

  deleteImage(id, index) {



    this.alertSiNo = this.alertController.create({
      header: 'Agregar Inspeccion Cable',
      subHeader: '',
      mode: "ios",
      backdropDismiss: true,
      message: 'Confirmar que desea eliminar?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'alert-button-group',
          role: 'A',
          handler: () => {
          }
        },
        {
          text: 'Cancelar',
          //cssClass: 'alert-button-group',
          role: 'F',
          handler: () => {
            //this.conectar_to_insert();   
            //this.events.publish('user:created',Date.now());            
            //return false;
          }
        }
      ]

    }).then((alertI) => {
      alertI.present();
      alertI.onDidDismiss().then(
        (aceptaPop) => {
          console.log('aceptaPop::::>>', aceptaPop);
          if (aceptaPop.role == 'A') {

            this.api.deleteImage(id).subscribe(res => {
              this.images.splice(index, 1);
            });

          } else {

          }
        });
      /////////////////////////
    });
  }

  // Helper function
  // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  ////***************************/*
  cancelar_ejecucion() {
    this.navCtrl.navigateForward('mtto-list-recinado');
  }

  load_datos() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Porfavor espere...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        let localStorage: any;
        let idtecnico: string;
        //console.log(Storage.get({ key: 'USER_INFO' }));

        this.storage.get('USER_INFO').then((result1) => {
          localStorage = (result1);
          idtecnico = localStorage.idtecnico;
        }).finally(() => {

          this.api.load_form_insp_cable(this.ClsId, idtecnico).then((res) => {
            this.ClsArForm = res;
            console.log(this.ClsArForm);
            //this.ClsTotiempo=this.ClsArForm[0].total_horas;
            this.loadingController.dismiss();
          });
        })
      });
  }

  segmentChanged(valor, opcion) {

    console.log(opcion);

    if (opcion === '1') {
      this.FormRecinado.controls['termistor_m1'].setValue(valor.detail.value);
    }
    if (opcion === '2') {
      this.FormRecinado.controls['termistor_t1'].setValue(valor.detail.value);
    }
    if (opcion === '3') {
      this.FormRecinado.controls['reclamo_rcd1'].setValue(valor.detail.value);
    }
    if (opcion === '4') {
      this.FormRecinado.controls['termistor_m2'].setValue(valor.detail.value);
    }
    if (opcion === '5') {
      this.FormRecinado.controls['termistor_t2'].setValue(valor.detail.value);
    }
    if (opcion === '6') {
      this.FormRecinado.controls['reclamo_rcd2'].setValue(valor.detail.value);
    }

    //console.log(valor.detail.value);
  }
  select_change_estado(e) {
  }

  funtion_toogle(event: any, acc: any) {

    console.log("verifica aqui");
    console.log(event);
    console.log(event.detail.checked);
    console.log(acc);

    const valor1 = event.detail.checked ? 1 : 0;
    console.log(valor1);

    //VERIFICACION CABLE CORTADO
    if (acc == 1) {
      this.FormRecinado.controls['toogle1'].setValue(valor1);
    }
    if (acc == 2) {
      this.FormRecinado.controls['toogle2'].setValue(valor1);
    }
    if (acc == 3) {
      this.FormRecinado.controls['toogle3'].setValue(valor1);
    }
    if (acc == 4) {
      this.FormRecinado.controls['toogle4'].setValue(valor1);
    }
    if (acc == 5) {
      this.FormRecinado.controls['toogle5'].setValue(valor1);
    }
    if (acc == 6) {
      this.FormRecinado.controls['toogle6'].setValue(valor1);
    }
    if (acc == 7) {
      this.FormRecinado.controls['toogle7'].setValue(valor1);
    }
    if (acc == 8) {
      this.FormRecinado.controls['toogle8'].setValue(valor1);
    }
    if (acc == 9) {
      this.FormRecinado.controls['toogle9'].setValue(valor1);
    }
    if (acc == 10) {
      this.FormRecinado.controls['toogle10'].setValue(valor1);
    }
    if (acc == 11) {
      this.FormRecinado.controls['toogle11'].setValue(valor1);
    }

    //VERIFICACION CABLE CORTOCIRCUITADO
    if (acc == 12) {
      this.FormRecinado.controls['toogle12'].setValue(valor1);
    }
    if (acc == 13) {
      this.FormRecinado.controls['toogle13'].setValue(valor1);
    }
    if (acc == 14) {
      this.FormRecinado.controls['toogle14'].setValue(valor1);
    }
    if (acc == 15) {
      this.FormRecinado.controls['toogle15'].setValue(valor1);
    }
    if (acc == 16) {
      this.FormRecinado.controls['toogle16'].setValue(valor1);
    }
    if (acc == 17) {
      this.FormRecinado.controls['toogle17'].setValue(valor1);
    }
    if (acc == 18) {
      this.FormRecinado.controls['toogle18'].setValue(valor1);
    }
    if (acc == 19) {
      this.FormRecinado.controls['toogle19'].setValue(valor1);
    }
    if (acc == 20) {
      this.FormRecinado.controls['toogle20'].setValue(valor1);
    }
    if (acc == 21) {
      this.FormRecinado.controls['toogle21'].setValue(valor1);
    }
    if (acc == 22) {
      this.FormRecinado.controls['toogle22'].setValue(valor1);
    }
    if (acc == 23) {
      this.FormRecinado.controls['toogle23'].setValue(valor1);
    }
    if (acc == 24) {
      this.FormRecinado.controls['toogle24'].setValue(valor1);
    }
    if (acc == 25) {
      this.FormRecinado.controls['toogle25'].setValue(valor1);
    }
    if (acc == 26) {
      this.FormRecinado.controls['toogle26'].setValue(valor1);
    }
    if (acc == 27) {
      this.FormRecinado.controls['toogle27'].setValue(valor1);
    }
    if (acc == 28) {
      this.FormRecinado.controls['toogle28'].setValue(valor1);
    }

    //VERIFICACION CABLE CORTADO - CABLE 2
    if (acc == 29) {
      this.FormRecinado.controls['toogle29'].setValue(valor1);
    }
    if (acc == 30) {
      this.FormRecinado.controls['toogle30'].setValue(valor1);
    }
    if (acc == 31) {
      this.FormRecinado.controls['toogle31'].setValue(valor1);
    }
    if (acc == 32) {
      this.FormRecinado.controls['toogle32'].setValue(valor1);
    }
    if (acc == 33) {
      this.FormRecinado.controls['toogle33'].setValue(valor1);
    }
    if (acc == 34) {
      this.FormRecinado.controls['toogle34'].setValue(valor1);
    }
    if (acc == 35) {
      this.FormRecinado.controls['toogle35'].setValue(valor1);
    }
    if (acc == 36) {
      this.FormRecinado.controls['toogle36'].setValue(valor1);
    }
    if (acc == 37) {
      this.FormRecinado.controls['toogle37'].setValue(valor1);
    }
    if (acc == 38) {
      this.FormRecinado.controls['toogle38'].setValue(valor1);
    }
    if (acc == 39) {
      this.FormRecinado.controls['toogle39'].setValue(valor1);
    }

    // VERIFICACION CABLE CORTOCIRCUITADO - CABLE 2
    if (acc == 40) {
      this.FormRecinado.controls['toogle40'].setValue(valor1);
    }
    if (acc == 41) {
      this.FormRecinado.controls['toogle41'].setValue(valor1);
    }
    if (acc == 42) {
      this.FormRecinado.controls['toogle42'].setValue(valor1);
    }
    if (acc == 43) {
      this.FormRecinado.controls['toogle43'].setValue(valor1);
    }
    if (acc == 44) {
      this.FormRecinado.controls['toogle44'].setValue(valor1);
    }
    if (acc == 45) {
      this.FormRecinado.controls['toogle45'].setValue(valor1);
    }
    if (acc == 46) {
      this.FormRecinado.controls['toogle46'].setValue(valor1);
    }
    if (acc == 47) {
      this.FormRecinado.controls['toogle47'].setValue(valor1);
    }
    if (acc == 48) {
      this.FormRecinado.controls['toogle48'].setValue(valor1);
    }
    if (acc == 49) {
      this.FormRecinado.controls['toogle49'].setValue(valor1);
    }
    if (acc == 50) {
      this.FormRecinado.controls['toogle50'].setValue(valor1);
    }

    //OTROS - CABLE 2
    if (acc == 51) {
      this.FormRecinado.controls['toogle51'].setValue(valor1);
    }
    if (acc == 52) {
      this.FormRecinado.controls['toogle52'].setValue(valor1);
    }
    if (acc == 53) {
      this.FormRecinado.controls['toogle53'].setValue(valor1);
    }
    if (acc == 54) {
      this.FormRecinado.controls['toogle54'].setValue(valor1);
    }
    if (acc == 55) {
      this.FormRecinado.controls['toogle55'].setValue(valor1);
    }
    if (acc == 56) {
      this.FormRecinado.controls['toogle56'].setValue(valor1);
    }

  }

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      //this.images = reader.result.toString();
      this.images.push(reader.result.toString());
    };
    reader.readAsDataURL(file);

  }


  /////------------------------------------------
  mySelect(id, event) {


    //this.globalVal.checklist_paso_pivot=id;
    if (id == 1) {

      //this.globalVal.corre_inf_cab = this.FormHtmlJs.corre_inf_cab;

    }


  }

}