import { async } from '@angular/core/testing';
import { Browser } from '@capacitor/browser';
//import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { CommonModule } from '@angular/common';
import { ApiBackDomains } from 'src/app/interfaces/ApiConections';
import {
  FormsModule,
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
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

import {
  GalleryPhoto,
  CameraResultType,
  CameraPhoto,
  CameraSource,
  Photo,
  Camera,
  GalleryImageOptions,
} from '@capacitor/camera';

import { Filesystem, Encoding, Directory } from '@capacitor/filesystem';
import { getFileReader } from 'src/app/interfaces/mtto/mttoinspcables';
//import { pathToFileURL } from 'url';

import {
  DocumentViewer,
  DocumentViewerOptions,
} from '@awesome-cordova-plugins/document-viewer/ngx';
import { Plugins } from '@capacitor/core';

const { ImageGallery, GalleryOptions } = Plugins;

@Component({
  selector: 'app-mtto-win-informe-tecnico1',
  templateUrl: './mtto-win-informe-tecnico1.page.html',
  styleUrls: ['./mtto-win-informe-tecnico1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [DocumentViewer],
})
export class MttoWinInformeTecnico1Page implements OnInit {
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

  disableButtonPaso1: boolean = true;
  checklist_paso1_apli_ck: boolean = false;
  aisla_tierra_apl_ck: boolean = true;
  aisla_entre_fases_apl_ck: boolean = true;
  repara_chapa_apl_ck: boolean = true;
  montaje_estator_apl_ck: boolean = true;
  imgs: string[] = [];
  ///////////////
  reponsablePivotSelectedText: string;
  islaPivotSelectedText: string;
  DsResponabilidad: any;
  DsIsla: any;
  Opciones1: any;
  images = [];
  DirectorioFotos: string = ApiBackDomains.UrlDomainLocal + 'aw_file/adjuntos/';
  //DirectorioFotos: string = '../aw_file/adjuntos/';
  popLodingMenaje: any;
  imageBlobs: Blob[] = [];
  constructor(
    public formBuilder: UntypedFormBuilder,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private ApiService: MttoInformeTecnicoService,
    public storage: Storage,
    private alertController: AlertController,
    private router: Router,
    public globalVal: GlovalProvider,
    private ref: ChangeDetectorRef,
    private actionSheetCtrl: ActionSheetController,
    private documentViewer: DocumentViewer
  ) ///private camera:Camera
  {
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

    this.FormCheckListPaso1 = this.formBuilder.group({
      ///idchecklistcab_paso1: [''],

      fech_de_registro: ['', Validators.required],
      corre_fisico: ['', Validators.required],
      id_persona: ['', Validators.required],
      Fech_de_sistema: [''],
      fech_de_inicio: ['', Validators.required],
      tec_responsable: ['', Validators.required],
      Procedencia: ['', Validators.required],
      equipo: ['', Validators.required],
      equipo_model: ['', Validators.required],
      dias_trabajados: [''],
      Taller_lima: ['', Validators.required],
      operaciones: ['', Validators.required],
      estado_informe: ['', Validators.required],
      conf_jefe_planta: [''],
      conf_super_planta: ['', Validators.required],
      Conf_tecnico: ['', Validators.required],
      analisis_del_problema: [''],
      componentes_de_reclamo: [''],
      nro_fotos: [''],
      Y06002: ['', Validators.required],
      nrofisico_alternativo: [''],
      codsmg: [''],
      corre_inf_cab: ['', Validators.required], ///id pk de la tabla
      idactivos: [''],
      idisla_ic: [''],
      dias_trabajados_manual: [''],
      idresponsabilidad: [''],
      //responsabilidad: [''],
      falla_primaria_ic: ['', Validators.required],
      falla_secundaria_ic: ['', Validators.required],
    });
    console.log(this.router.getCurrentNavigation().extras);
    var thiss = this;
    ///////////////////////////////cuando carga desde lista
    ///////////////////////////////cuando carga desde lista
    if (this.globalVal.checklist_paso_pivot == '') {
      try {
        this.navParamsAny =
          this.router.getCurrentNavigation().extras.state['Row'];
        globalVal.corre_inf_cab = this.navParamsAny.corre_inf_cab;
        // globalVal.checklist_paso1_apli = this.navParamsAny.checklist_paso1_apli;
        // globalVal.checklist_paso2_apli = this.navParamsAny.checklist_paso2_apli;
        // globalVal.checklist_paso3_apli = this.navParamsAny.checklist_paso3_apli;
        // globalVal.checklist_paso4_apli = this.navParamsAny.checklist_paso4_apli;
        // globalVal.checklist_paso5_apli = this.navParamsAny.checklist_paso5_apli;
        // globalVal.checklist_paso6_apli = this.navParamsAny.checklist_paso6_apli;

        // this.checklist_paso1_apli_ck = globalVal.checklist_paso1_apli == '0' ? true : false;
        // this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
        //   this.checklist_paso1_apli_ck
        // );
      } catch (error) {
        console.log(error);
        this.corre_inf_cab = globalVal.corre_inf_cab;

        //this.FormCheckListPaso1.controls["checklist_paso1_apli"].disable();
      }
    } else {
      this.corre_inf_cab = globalVal.corre_inf_cab;
    }

    this.storage.get('USER_PERMISO').then((result1) => {
      //resultado.json().forEach(resultado => resultjson2);
      result1.forEach(function (permiso) {
        if (permiso.Nivel == 32) {
          ////permiso de jefe
          thiss.disableButtonPaso1 = false;
        } else {
          thiss.disableButtonPaso1 = true;
        }
      });
    });
  }

  onTouched(e) {
    console.log(e);
  }
  FLoadForms() {
    const loading = this.loadingController
      .create({
        message: 'Cargando lista....',
        translucent: true, //,
      })
      .then((loading) => {
        loading.present();

        this.corre_inf_cab = this.globalVal.corre_inf_cab;
        console.log(this.corre_inf_cab);

        this.ApiService.FormFindPaso1(this.corre_inf_cab, '1', 'H')
          .then((rest) => {
            this.EditDataRest = rest['form'];
            console.log('formularrioooo',this.EditDataRest );
            
            this.DsResponabilidad = rest['responsabilidad'];
            this.Opciones1 = rest['responsable'];
            this.DsIsla = rest['isla'];
            console.log('this.Opciones1', this.Opciones1);
            console.log(this.DsResponabilidad);
            // if (this.EditDataRest[0].checklist_paso1_apli==1) {
            //   ///this.checklist_paso1_apli_ck=true;
            // }
            try {
              this.FormCheckListPaso1.setValue({
                //responsabilidad: this.EditDataRest[0].responsabilidad,
                dias_trabajados_manual:
                  this.EditDataRest[0].dias_trabajados_manual,
                Y06002: this.EditDataRest[0].Y06002,
                estado_informe: this.EditDataRest[0].estado_informe,
                fech_de_registro: this.EditDataRest[0].fech_de_registro,
                corre_fisico: this.EditDataRest[0].corre_fisico,
                id_persona: this.EditDataRest[0].id_persona,
                Fech_de_sistema: this.EditDataRest[0].Fech_de_sistema,
                fech_de_inicio: this.EditDataRest[0].fech_de_inicio,
                tec_responsable: this.EditDataRest[0].tec_responsable,
                Procedencia: this.EditDataRest[0].Procedencia,
                equipo: this.EditDataRest[0].equipo,
                equipo_model: this.EditDataRest[0].equipo_model,
                dias_trabajados: this.EditDataRest[0].dias_trabajados,
                Taller_lima: this.EditDataRest[0].Taller_lima,
                operaciones: this.EditDataRest[0].operaciones,
                conf_jefe_planta: this.EditDataRest[0].conf_jefe_planta,
                conf_super_planta: this.EditDataRest[0].conf_super_planta,
                Conf_tecnico: this.EditDataRest[0].Conf_tecnico,
                analisis_del_problema:
                  this.EditDataRest[0].analisis_del_problema,
                componentes_de_reclamo:
                  this.EditDataRest[0].componentes_de_reclamo,
                nro_fotos: this.EditDataRest[0].nro_fotos,
                nrofisico_alternativo:
                  this.EditDataRest[0].nrofisico_alternativo,
                codsmg: this.EditDataRest[0].codsmg,
                corre_inf_cab: this.EditDataRest[0].corre_inf_cab,
                idactivos: this.EditDataRest[0].idactivos,
                idisla_ic: this.EditDataRest[0].idisla_ic,
                idresponsabilidad: this.EditDataRest[0].idresponsabilidad,
                falla_primaria_ic: this.EditDataRest[0].falla_primaria_ic,
                falla_secundaria_ic: this.EditDataRest[0].falla_secundaria_ic,
              });
              this.reponsablePivotSelectedText =
                this.EditDataRest[0].responsabilidad;
              this.islaPivotSelectedText = this.EditDataRest[0].isla;

              this.loadImages(this.corre_inf_cab);
            } catch (error) {
              console.log('error:::>', error);
            }
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      });
  }

  SaveFormTerminadoPaso1() {
    if (this.FormCheckListPaso1.valid) {
      this.alertSiNo = this.alertController
        .create({
          header: 'CONTROL DE MOTOR ELECTRICO',
          subHeader: '',
          mode: 'ios',
          backdropDismiss: true,
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
              role: 'F',
              handler: () => {},
            },
          ],
        })
        .then((alertI) => {
          alertI.present();
          alertI.onDidDismiss().then((aceptaPop) => {
            console.log('aceptaPop::::>>', aceptaPop);
            if (aceptaPop.role == 'A') {
              this.corre_inf_cab = this.globalVal.corre_inf_cab;

              // this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
              //   this.corre_inf_cab
              // );

              if (this.disableButtonPaso1 == false) {
                this.FormCheckListPaso1.controls[
                  'idsupervisor_responsable_cmc'
                ].setValue(this.IdUsuarioLocal);
              }
              ///////////////////////////////////////////////////////////////////
              const loading = this.loadingController
                .create({
                  message: 'Guardando Paso 1...',
                  translucent: true, //,
                  //cssClass: 'custom-class custom-loading'
                })
                .then((loading) => {
                  loading.present();
                });
              this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
                .then((res) => {
                  this.loadingController.dismiss();
                  alert('Guardado correctamente.');
                })
                .finally(() => {
                  //this.navCtrl.navigateForward(["mtto-list-recinado"]);
                })
                .catch((err) => {
                  console.log('errror:::>>>>>>>>>', err);
                });

              //////////////////////////////////////////////////////////
            } else {
            }
          });
          /////////////////////////
        });
    } else {
      for (let i in this.FormCheckListPaso1.controls) {
        this.FormCheckListPaso1.controls[i].setValue(
          this.FormCheckListPaso1.controls[i].value
        );
        this.FormCheckListPaso1.controls[i].markAsTouched();
      }

      this.alertSiNo = this.alertController
        .create({
          header: 'CONTROL DE MOTOR ELECTRICO',
          subHeader: '',
          mode: 'ios',
          backdropDismiss: true,
          message: 'Falta seleccionar todos los datos',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'alert-button-group',
              role: 'A',
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

  SaveFormBorradorPaso1() {
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

            this.corre_inf_cab = this.globalVal.corre_inf_cab;

            this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value)
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

  //////////////////////////save check no aplica paso
  // SaveCheckNoAplicaPaso(event: any) {
  //   const loading = this.loadingController
  //     .create({
  //       message: 'Guardando Paso 1...',
  //       translucent: true, //,
  //       //cssClass: 'custom-class custom-loading'
  //     })
  //     .then((loading) => {
  //       loading.present();
  //     });
  //   this.corre_inf_cab = this.globalVal.corre_inf_cab;
  //   this.FormCheckListPaso1.controls['idchecklistcab_paso1'].setValue(
  //     this.corre_inf_cab
  //   );
  //   this.globalVal.checklist_paso1_apli=(event.detail['checked'])?'0':'1';
  //   this.ApiService.GuardarAplicaPaso(
  //     this.corre_inf_cab,
  //     1,
  //     event.detail['checked']
  //   )
  //     .then((res) => {
  //       // this.FormCheckListPaso1.controls["idchecklistpaso1"].setValue(
  //       //   this.ApiService.confirmSaveBd
  //       // );
  //       this.NoAplicaPaso(event);
  //       this.loadingController.dismiss();
  //     })
  //     .finally(() => {})
  //     .catch((err) => {
  //       console.log('errror:::>>>>>>>>>', err);
  //     });
  //   /////////////////////////
  // }
  /////////////fin save check no aplica paso

  ionViewWillEnter() {
    this.checklist_paso1_apli_ck =
      this.globalVal.checklist_paso1_apli == '0' ? true : false;
    this.FLoadForms();
    let event: any;
    event = {
      detail: { checked: this.checklist_paso1_apli_ck, jc: 0 },
    };

    // this.FormCheckListPaso1.controls['checklist_paso1_apli'].setValue(
    //   this.checklist_paso1_apli_ck
    // );
  }
  ngOnInit() {}

  FSelectChangeResponsable(ev, index) {
    console.log('select_change_material::', this.DsResponabilidad);
    for (const row of this.DsResponabilidad) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idresponsabilidad'].setValue(
          row.codigo
        );
        this.reponsablePivotSelectedText = row.nombre;
      }
    }
  }

  FSelectChangeIsla(ev, index) {
    for (const row of this.DsIsla) {
      // console.log(this.ArrayItemsSelectedDesti[index].material);
      console.log(row.codigo, ev.detail.value);
      if (row.codigo == ev.detail.value) {
        this.FormCheckListPaso1.controls['idisla_ic'].setValue(row.codigo);
        this.islaPivotSelectedText = row.nombre;
      }
    }
  }
  ////////////////////////////////////////////////////////////////DESDE AQUI IMAGENES///////////////
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
        /////////////////////////
      });
  }

  loadImages(id) {
    this.ApiService.getImages(id).subscribe((images) => {
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


  ///////////////////
  async convertToBase64(filePath: string): Promise<string> {
    const file = await Filesystem.readFile({ path: filePath });
    const base64Data = file.data;
    return base64Data.toString();
  }

    async sendImagesToAPI(images: string[]) {
    const apiUrl = 'URL_DEL_API'; // Reemplaza con la URL de tu API
    const imageRequests = [];
    for (const image of images) {
      const response = await fetch(image!);
      const blob = await response.blob();
      await this.ConvertToBlobToBase64(blob);
    }
    return this.imageBlobs;
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
          this.corre_inf_cab,
          'png'
        ).subscribe(
          (newImage) => {
            this.loadingController.dismiss();
            this.loadImages(this.corre_inf_cab);
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

  DownloadOpenLocalPdf() {
    //C:\AppServ\www\erpgeo_hidro\aw_file

    /////////////////////////////////////////////////
    this.ApiService.LoadPdfInformeTecnico(this.corre_inf_cab)
      .then((rest) => {
        this.EditDataRest = rest;
        console.log('this.Opciones1', this.EditDataRest);
        // if (this.EditDataRest[0].checklist_paso1_apli==1) {
        //   ///this.checklist_paso1_apli_ck=true;
        // }
        try {
          /////////////////////////////////
          let ruta =
            ApiBackDomains.UrlDomainLocal +
            'aw_file/' +
            this.EditDataRest.nomfile;
          console.log(ruta);
          //Filesystem.appendFile()

          //////////////////////////////////
          Browser.open({ url: ruta });

          setTimeout(() => {
            Browser.close();
          }, 5000);
        } catch (error) {
          console.log('error:::>', error);
        }
      })
      .finally(() => {
        this.loadingController.dismiss();
      });
  }
  OpenLocalPdf() {
    let ruta = ApiBackDomains.UrlDomainLocal + 'aw_file/pdfxd.pdf';
    console.log(ruta);
    //Browser.open({url:ruta});

    const options: DocumentViewerOptions = {
      title: 'My PDF',
    };

    this.documentViewer.viewDocument(ruta, 'application/pdf', options);
  }
  ///////////////////////////


///////////////////////////////////////////desde aqui funciones nuevas
ConvertToBlobToBase64 = (blob: Blob) => new Promise<void>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => {
    let filePath = reader.result as string;
    //filePath = this.dataURLtoBlob(filePath);
    const blobData = new Blob([filePath], { type: 'image/jpeg' });

    this.addImageBlob(blobData);
    resolve();
  };
  reader.onerror = error => {
    reject(error);
  };
});

addImageBlob(blob: Blob) {
  this.imageBlobs.push(blob);
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
          this.corre_inf_cab,
          'png'
        ).subscribe(
          (newImage) => {
            this.loadingController.dismiss();
            this.loadImages(this.corre_inf_cab);
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

async getBlobFromImagePath(imgPath: string): Promise<Blob> {

  const response = await fetch(imgPath);
  const blob = await response.blob();
  return blob;
}

// sendImagesToServer() {
//   const url = 'tu_url_de_api';
//   const formData = new FormData();

//   for (let i = 0; i < this.imageBlobs.length; i++) {
//     formData.append('images[]', this.imageBlobs[i], `image_${i}.jpg`);
//   }

//   this.http.post(url, formData).subscribe(
//     response => {
//       console.log('POST request successful', response);
//     },
//     error => {
//       console.error('Error making POST request', error);
//     }
//   );
// }
///////////////////////////////////-------------------------------------------------------------

}
