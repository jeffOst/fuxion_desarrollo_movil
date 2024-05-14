
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
import { CameraResultType, CameraPhoto, CameraSource, Photo, Camera } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
import { PopUpEquRecinadoPage } from 'src/app/pages/mod/mtto/pop-up-equ-recinado/pop-up-equ-recinado.page';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonTabs } from '@ionic/angular'


const { Device, Network, FilesystemDirectory } = Plugins;
const Storage_KEY = "my_images";
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-mtto-win-recinado-tab-2',
  templateUrl: './mtto-win-recinado-tab-2.page.html',
  styleUrls: ['./mtto-win-recinado-tab-2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MttoWinRecinadoTab2Page implements OnInit {

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
  ///////////////--------------------------
  FormRecinado: FormGroup;
  EditDataRest: any;
  popLodingMenaje: any;
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
      ca2_codigo_rcc: new FormControl('')


    })

    this.DirectorioFotos = this.api.DirectorioImg;
    this.ClsId = this.route.snapshot.paramMap.get('id');
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
    
    console.log("jeffrey verifica aqui");
    console.log('this.EditDataRest ', this.EditDataRest);
    
    
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
        fch_reg_ot_rcc: new Date(this.EditDataRest[0].fch_reg_ot_rcc).toISOString(),
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
        ca2_codigo_rcc: this.EditDataRest[1].ca2_codigo_rcc
      });
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
    console.log('addNewToGallery::::');
    let capturedPhoto;
    if (tp == 1) {


      capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      }).finally(() => {
        console.log('capturedPhoto::::', capturedPhoto);
      });
      ///////////***************************************************************************************nuevo codigo */
    } else if (tp == 2) {
      capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 100
      }).finally(() => {
        console.log('capturedPhoto::::', capturedPhoto);
      });
    }
    ///////////***********************fi nue codigo */
    console.log('LN {140}::::');
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    //this.photos.unshift(savedImageFile);
    /*
        Storage.set({
          key: this.PHOTO_STORAGE,
          value: JSON.stringify(this.photos)
        });
        */

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

  segmentChanged(e) {
    //this.listServiciosPendientes();
  }
  select_change_estado(e) {
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