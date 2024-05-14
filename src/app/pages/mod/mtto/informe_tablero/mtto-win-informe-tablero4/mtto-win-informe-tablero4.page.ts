import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiBackDomains } from 'src/app/interfaces/ApiConections';
import { FormsModule,UntypedFormGroup,FormGroup,UntypedFormBuilder,NgForm,ReactiveFormsModule} from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import {
  NavController,
  AlertController,
  NavParams,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import {
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  GalleryPhoto,
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
  GalleryImageOptions,
} from '@capacitor/camera';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';//modificar con informe tecnico
import { MttoInformeTecnicoService } from 'src/app/api/mtto/mtto-informe-tecnico-service';
@Component({
  selector: 'app-mtto-win-informe-tablero4',
  templateUrl: './mtto-win-informe-tablero4.page.html',
  styleUrls: ['./mtto-win-informe-tablero4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class MttoWinInformeTablero4Page implements OnInit {
  FormCheckListPaso4: UntypedFormGroup;
  alertSiNo: any;
  imgs: string[] = [];
  imageBlobs: Blob[] = [];
  popLodingMenaje: any;
  corre_inf_cab;
  EditDataRest1: any;
  images = [];
  DirectorioFotos: string = ApiBackDomains.UrlDomainLocal + 'aw_file/adjuntos/';
  checklist_paso1_apli_ck: boolean = false;
  constructor(
    public formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private ApiService1: MttoOrdentrabajoService,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController,
    public globalVal: GlovalProvider,
    private ApiService: MttoInformeTecnicoService,
  ) { 
    this.FormCheckListPaso4 = this.formBuilder.group({
      manioper: [''], 
      estgab: [''], 
      basesopt: [''], 
      analisis: [''], 
      obser3: [''],
      corre_inf_cab: [''],
      estado_informe: ['']
});
  }
  ionViewWillEnter() {
    this.checklist_paso1_apli_ck =
    this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
    };
  }
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();
       
        this.ApiService1.FormFindinftab1(this.globalVal.corre_inf_cab)
          .then((rest) => {
            console.log(this.globalVal.corre_inf_cab);
           // this.EditDataRest = rest['form'];
            this.EditDataRest1 = rest['list'];
            //console.log('hrlppp',this.EditDataRest);
            
            try{
               this.FormCheckListPaso4.setValue({ 
                corre_inf_cab: this.globalVal.corre_inf_cab,
                manioper: this.EditDataRest1[0].manioper,
                estgab: this.EditDataRest1[0].estgab,
                basesopt: this.EditDataRest1[0].basesopt,
                analisis: this.EditDataRest1[0].analisis,
                obser3: this.EditDataRest1[0].obser3,
                estado_informe: ''
               });
             // console.log('esta marca',this.EditDataRest[0].marca);
             this.loadImages( this.globalVal.corre_inf_cab,);
            }catch (error) {
              console.log('error:::>', error);
            }
            //console.log("el id que debe pasar es",this.globalVal.id_orden_trab_cab);
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
          
      });
      
    }

  SaveFormInfPaso1() {
    this.alertSiNo = this.alertController
      .create({
        header: 'INFORME TECNICO',
        subHeader: 'DATOS GENERALES',
        mode: 'ios',
        backdropDismiss: true,
        cssClass:'alerta-ok',
        message: 'Confirmar que desea guardar?',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {},
          },
          {
            text: 'Cancelar',
            //cssClass: 'alert-button-group',
            role: 'F',
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
          if (aceptaPop.role == 'A') {
            const loading = this.loadingController
              .create({
                message: 'Guardando datos generales...',
                translucent: true, //,
                //cssClass: 'custom-class custom-loading'
              })
              .then((loading) => {
                loading.present();
              });
              this.FormCheckListPaso4.controls['corre_inf_cab'].setValue(
                this.globalVal.corre_inf_cab
              );
           // this.corre_inf_cab = this.globalVal.corre_inf_cab;
            this.ApiService.GuardarinfPaso4(this.FormCheckListPaso4.value)
              .then( async (res) => {
                this.loadingController.dismiss();
                let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';
                //alert('Guardado correctamente.');
                const alert = await this.alertController.create({
                  header: 'ORDEN DE TRABAJO',
                  subHeader: 'DATOS GENERALES',
                  cssClass:css_msj,
                  mode: 'ios',
                  animated: true,
                  message: res[0].o_msj,// 'La operación se completó con éxito.',
                  buttons: [
                    {
                      text: 'Aceptar',

                      handler: () => {
                        // Realiza acciones adicionales después de aceptar la confirmación
                        console.log('Operación confirmada');
                      },
                    },
                  ],
                });

                await alert.present();

              })
              .finally(() => {
                //this.navCtrl.navigateForward(["mtto-list-recinado"]);
              })
              .catch((err) => {
                console.log('errror:::>>>>>>>>>', err);
              });
          } else {
          }
        });
        /////////////////////////
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
        },
      },
      {
        text: 'Elegir desde las fotos',
        icon: 'image',
        handler: () => {
          console.log('Photos', CameraSource.Photos);
          /////////////////this.addNewToGallery(2); jc
          //this.selectMultiplePhotos();
          this.pickImages_buton();
          //this.filePickerRef.nativeElement.click();
          return;
        },
      },
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
      buttons,
    });
    await actionSheet.present();
  }
  async pickImages_buton() {



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
  
        let respons = this.ApiService.UpLoadImageMultiple(
          this.imageBlobs,
          this.globalVal.corre_inf_cab,
            'png'
          ).subscribe(
            (newImage) => {
              this.loadingController.dismiss();
              this.loadImages( this.globalVal.corre_inf_cab);
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
  loadImages(id) {
    this.ApiService.getImages(id).subscribe((images) => {
      this.images = images;
      this.ref.detectChanges();
      //this.loadingController.dismiss();
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
  public async addNewToGallery(tp) {
    // Take a photo
    console.log('addNewToGallery::::tp::::>', tp);
    let capturedPhoto;
    if (tp == 1) {
      capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
        width: 800, // Opcional: ajusta el ancho de las imágenes
        height: 800, // Opcional: ajusta la altura de las imágenes
      }).finally(() => {
        console.log('capturedPhoto::::', capturedPhoto);
      });
      ///////////***************************************************************************************nuevo codigo */
    }
    const savedImageFile = await this.savePicture(capturedPhoto);

  }
  private async savePicture(cameraPhoto: CameraPhoto) {
    ///////////////////lanzar pop guardando photooo
    const base64Data = await this.readAsBase64(cameraPhoto);
    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
      //directory: FilesystemDirectory.Data
    });

    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath,
    };
  }
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    return (await this.convertBlobToBase64(blob)) as string;
  }
  convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {

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
    ////////////////fin lanzar guardando foto

    const reader = new FileReader();
    let newInstance = getFileReader();
    newInstance.readAsDataURL(blob);
    newInstance.onload = (imgsrc) => {
      let url = (imgsrc.target as FileReader).result;
      let filePath;
      filePath = url;
      let correctPath; // = filePath.substr(0, filePath.lastIndexOf('/') + 1);
      filePath = this.dataURLtoBlob(filePath);
      this.ApiService.uploadImage(
        filePath,
        this.globalVal.corre_inf_cab,
        'png'
      ).subscribe(
        (newImage) => {
          this.loadingController.dismiss();
          this.loadImages( this.globalVal.corre_inf_cab,);
          //this.ref.detectChanges();
          console.log('salio okkkk::', newImage);
          ///aqui cerrar pop loading imagennnnn
        },
        (error) => {
          console.log('error__::>', error);
        }
      );
    };

  }).finally(() => {
    console.log('convertBlobToBase64:::', this.convertBlobToBase64);
  });
  dataURLtoBlob(dataurl) {
    console.log('dentro fucion dataURLtoBlob:',dataurl);
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  ngOnInit() {
  }
  deleteImage(id, index) {
    this.alertSiNo = this.alertController
      .create({
        header: 'INFORME TECNICO',
        subHeader: 'GENERAL',
        mode: 'ios',
        backdropDismiss: true,
        message: 'Confirmar que desea eliminar?',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-group',
            role: 'A',
            handler: () => {},
          },
          {
            text: 'Cancelar',
            //cssClass: 'alert-button-group',
            role: 'F',
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
          console.log('aceptaPop::::>>', aceptaPop);
          if (aceptaPop.role == 'A') {
            this.ApiService.deleteImage(id).subscribe(res => {
              this.images.splice(index, 1);
            });
          } else {
          }
        });
      });
  }
}
