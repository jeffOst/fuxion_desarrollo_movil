import { Component, OnInit } from '@angular/core';
import { ApiBackDomains } from 'src/app/interfaces/ApiConections';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { GalleryPhoto,CameraResultType,CameraPhoto,CameraSource,Photo,Camera,GalleryImageOptions} from '@capacitor/camera';
import { ChangeDetectorRef,ElementRef,ViewChild} from '@angular/core';
@Component({
  selector: 'app-pop-up-imagen-herra',
  templateUrl: './pop-up-imagen-herra.page.html',
  styleUrls: ['./pop-up-imagen-herra.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopUpImagenHerraPage implements OnInit {
  NgModInputSearch:any;
  DataSetGrid:any;
  id_personal: string;
  tecnico_cl: string;
  cargo: string;
  popLodingMenaje: any;
  alertSiNo: any;
  idregistro: any;
  navParamsAny: any;
  DirectorioFotos: string = ApiBackDomains.UrlDomainLocal + 'aw_file/adjuntos/';
  images = [];
  imgs: string[] = [];
  imageBlobs: Blob[] = [];
  constructor(
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private ApiService: MttoListChecklistHerra,
    public navParams: NavParams,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private actionSheetCtrl: ActionSheetController,
    private ref: ChangeDetectorRef,
  ) {
    // this.idregistro=navParams.get('idregistro');
    //this.idregistro=this.navParamsAny.idregistro
    
    this.idregistro = this.navParams.get('idregistro');
    
    this.id_personal=navParams.get('id_personal');
    this.tecnico_cl=navParams.get('tecnico_cl');
    this.cargo=navParams.get('cargo');
   }

  ngOnInit() {
    this.loadImages(this.idregistro)
    
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
          this.pickImages_buton();
          return;
        },
      },
    ];
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecionar Image',
      buttons,
    });
    await actionSheet.present();
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
  }
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    return (await this.convertBlobToBase64(blob)) as string;
  }
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
  loadImages(id) {
    this.ApiService.getImages(id).subscribe((images) => {
      this.images = images;
      this.ref.detectChanges();
      //this.loadingController.dismiss();
    });
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
          this.idregistro,
          'png'
        ).subscribe(
          (newImage) => {
            this.loadingController.dismiss();
            this.loadImages( this.idregistro,);
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
          this.idregistro,
            'png'
          ).subscribe(
            (newImage) => {
              this.loadingController.dismiss();
              this.loadImages( this.idregistro);
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
  async getBlobFromImagePath(imgPath: string): Promise<Blob> {

    const response = await fetch(imgPath);
    const blob = await response.blob();
    return blob;
  }
  addImageBlob(blob: Blob) {
    this.imageBlobs.push(blob);
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
  deleteImage(id, index) {
    this.alertSiNo = this.alertController
      .create({
        header: 'CHECKLIST',
        subHeader: 'ALERTA',
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
            this.loadImages(this.idregistro);            
          } else {
          }
        });
      });
  }
  async cancelar_listaservicios(id_personal,tecnico_cl,cargo){
    const onClosedData:any = {
      // id_personal:id_personal,
      // tecnico_cl:tecnico_cl,
      // cargo:cargo
    };
    await this.modalCtrl.dismiss(onClosedData);

  }
}
