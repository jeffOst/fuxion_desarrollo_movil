import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Network, ConnectionStatus } from "@capacitor/network";
// import { ApiBackDomains } from '../../../../../interfaces/ApiConections';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
// import * as pdfjsLib from 'pdfjs-dist';

// import { PDFDocument } from 'pdf-lib';
// import * as tf from '@tensorflow/tfjs';


import { Capacitor } from '@capacitor/core'; // Importa Capacitor
import { Filesystem, Directory } from '@capacitor/filesystem'; // Importa Filesystem de Capacitor
@Component({
  selector: 'app-mtto-checklist-win-montaje',
  templateUrl: './mtto-checklist-win-montaje-page.html',
  styleUrls: ['./mtto-checklist-win-montaje-page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,PdfViewerModule]
})

export class MttoChecklistWinMontajePage implements OnInit {
  networkStatus: ConnectionStatus;
  
  DsviewPDF: any;
  navParams: any;
  tituloTollBar: string = 'Chekclist Montaje';
  Cancelar: string = 'Cancelar'
  disableButton: boolean = false;
  flagResumenDiario: string;
  idTargetMenu: number;
  valor: string;
  flaglistaprod: string;
  EQUIPOID: string;
  pdfSrc: string
  zoom: number = 1.0; // Zoom inicial
  recortes: any[] = []; // Coordenadas dinámicas de recortes


  images: { id: number, src: string, top: number, left: number, width: number, height: number,filename: string }[] = [];


  //pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"
  //pdfSrc = "http://192.168.3.90/fuxion/aw_file/adjuntos/144556_65e9d277c3f9b.pdf";
  //pdfSrc = "http://192.168.3.90/fuxion/aw_file/adjuntos/pdf-test.pdf";
  //pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/adjuntos1/pdf-test.pdf";


  constructor(

    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    public globalVal: GlovalProvider,
    private loadingController: LoadingController,
  ) {
    this.navParams = this.router.getCurrentNavigation().extras.state;
    this.flagResumenDiario = "0"; //this.navParams.flag;

    if (this.navParams) {
      this.DsviewPDF = {} as MPieza;
      this.idTargetMenu = this.navParams.idTargetMenu;
      this.DsviewPDF.EQUIPOID = 'Repuestos';
    }
    console.log('extras del eextra',this.router.getCurrentNavigation().extras.state);
  }
  ngOnInit() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
      })
    }
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      if (this.networkStatus && this.networkStatus.connected) {
        this.tituloTollBar = 'CheckList de Montaje de Bomba';
      }
      else {
        this.tituloTollBar = 'Sin conexion a internet';
      }
    })
    this.loadImages();
  }
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  loadImages() {
    // Definir las imágenes y sus coordenadas
    const imageArray = [
      { id: 4,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/CUBIERTAE.png', top: 480, left: 250, width: 500, height: 400 },
      { id: 1,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/CABLEADO.png', top: 300, left: 30, width: 160, height: 300 },
      { id: 3,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/CUBIERTAP.png', top: 50, left: 250, width: 250, height: 500 },
      { id: 2,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/CUBIERTA.png', top: 120, left: 30, width: 260, height: 140 },
      
      
      { id: 5,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/EJE.png', top: 10, left: 510, width: 200, height: 240 },
      { id: 6,src:'https://fuxion.geohidraulica.com.pe/aw_images/CHECKLIST/SELLO.png', top: 250, left: 510, width: 190, height: 240 },

    ];

    // Asignamos las imágenes y sus coordenadas a la variable `images`
    this.images = imageArray.map(image => ({
      ...image,
      filename: this.extractFilename(image.src)
    }));
  }
  extractFilename(src: string): string {
    const parts = src.split('/');
    const filenameWithExtension = parts[parts.length - 1];
    return filenameWithExtension.split('%20').join(' ').split('.').slice(0, -1).join('.'); // Reemplaza '%20' por espacio y elimina la extensión
  }
  onImageClick(imageId: number) {
    console.log(`Imagen seleccionada con ID: ${imageId}`);
      // Crear el objeto Row con el formato que necesita FNuevaCheckList
  const Row = { imageId }; // Puedes ajustar este objeto según lo que necesites enviar
  
  // Llamar a FNuevaCheckList y pasar el objeto Row
  this.FNuevaCheckList(Row);
  }

  FNuevaCheckList(Row: any) {
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    console.log(navigationExtras);
    this.globalVal.checklist_paso_pivot = '';
    this.navCtrl.navigateForward(['/mtto-checklist-win-montaje1'], navigationExtras);
  }


  //   ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     this.valor = params['valor'];
  //   });

  //   // this.pdfSrc = ApiBackDomains.UrlDomainLocal + "/aw_file/diseno_plano/" + this.valor;
    
    
  //   // this.pdfSrc = "http://192.168.100.22/aw_file/diseno_plano/" + this.valor;
  //   // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/" + this.valor;
  //   // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/156673_65fae74889f20.%20BOMBA%20MIURA%2010HP.pdf";
  //   this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/CHECKLIST/15-S.02.11.06.03.01.pdf";
  //   const imageUrls = [
  //     'https://fuxion.geohidraulica.com.pe/aw_file/CHECKLIST/EJE%20%20ROTOR%20-%20ESPADA%20N.png',
  //     'https://fuxion.geohidraulica.com.pe/aw_file/CHECKLIST/CABLEADO%20-%20ESPADA%20N.png'
      
  //   ];
  //   //console.log(this.pdfSrc);
  // }
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async  extractPDFImages(pdfBytes: ArrayBuffer) {
  //   // const pdfDoc = await PDFDocument.load(pdfBytes);
  //   // const images = [];
  
  //   // for (let i = 0; i < pdfDoc.getPageCount(); i++) {
  //   //   const page = pdfDoc.getPage(i);
  //   //   const { width, height } = page.getSize();
  //   //   const canvas = document.createElement('canvas');
  //   //   canvas.width = width;
  //   //   canvas.height = height;
  
  //   //   const ctx = canvas.getContext('2d');
  //   //   const pdfPage = await pdfDoc.saveAsBase64({ dataUri: true });
  //   //   const img = new Image();
  //   //   img.src = pdfPage;
  
  //   //   await new Promise((resolve) => (img.onload = resolve));
  //   //   ctx?.drawImage(img, 0, 0, width, height);
  //   //   images.push(canvas.toDataURL());
  //   // }
  
  //   // return images; // Devuelve las imágenes como Data URLs.
  // }


  // // async  compareImages(mainImage: string, partImage: string): Promise<number> {
  // //   const loadImage = async (src: string) => {
  // //     const img = new Image();
  // //     img.src = src;
  // //     await new Promise((resolve) => (img.onload = resolve));
  // //     return tf.browser.fromPixels(img);
  // //   };
  
  // //   const mainTensor = await loadImage(mainImage);
  // //   const partTensor = await loadImage(partImage);
  
  // //   const resizedPart = tf.image.resizeBilinear(partTensor, [mainTensor.shape[0], mainTensor.shape[1]]);
  // //   const difference = tf.sub(mainTensor, resizedPart).abs();
  // //   const mse = tf.mean(difference).arraySync();
  
  // //   mainTensor.dispose();
  // //   partTensor.dispose();
  // //   resizedPart.dispose();
  
  // //   return 1; // Un valor más bajo indica mayor similitud.
  // // }

  // async  loadImages(urls: string[]): Promise<HTMLImageElement[]> {
  //   const promises = urls.map((url) => {
  //     const img = new Image();
  //     img.src = url;
  //     return new Promise<HTMLImageElement>((resolve, reject) => {
  //       img.onload = () => resolve(img);
  //       img.onerror = () => reject(`Error al cargar la imagen: ${url}`);
  //     });
  //   });
  //   return Promise.all(promises);
  // }
  
  // // Función para comparar las imágenes
  // // async  compareImages(pdfImage: HTMLImageElement, partImage: HTMLImageElement): Promise<number> {
  // async  compareImages(pdfImage: HTMLImageElement, partImage: HTMLImageElement) {
  //   // const pdfTensor = tf.browser.fromPixels(pdfImage);
  //   // const partTensor = tf.browser.fromPixels(partImage);
  
  //   // const resizedPart = tf.image.resizeBilinear(partTensor, [pdfTensor.shape[0], pdfTensor.shape[1]]);
  //   // const difference = tf.sub(pdfTensor, resizedPart).abs();
  //   // const mseTensor  = tf.mean(difference).arraySync();
  //   // const mse = mseTensor instanceof tf.Tensor ? mseTensor.arraySync()[0] : mseTensor;
  //   // pdfTensor.dispose();
  //   // partTensor.dispose();
  //   // resizedPart.dispose();

  //   // return mse;
  // }
  
  // // Comparar las imágenes cargadas con una imagen de referencia
  // async  processImageComparison(pdfImageUrl: string, imageUrls: string[]) {
  //   try {
  //     // Cargar la imagen del PDF
  //     const pdfImage = await this.loadImages([pdfImageUrl]).then((images) => images[0]);
  
  //     // Cargar las imágenes de las partes
  //     const partImages = await this.loadImages(imageUrls);
  
  //     // Iterar y comparar
  //     for (const partImage of partImages) {
  //       const mse = await this.compareImages(pdfImage, partImage);
  //       console.log(`Error cuadrático medio (MSE) entre la imagen del PDF y la parte: ${mse}`);
  //     }
  //   } catch (error) {
  //     console.error('Error durante la comparación de imágenes:', error);
  //   }
  // }
  
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////







  // async loadPDF(pdfSrc: string) {
  //   const loadingTask = pdfjsLib.getDocument(pdfSrc);
  //   const pdf = await loadingTask.promise;

  //   const page = await pdf.getPage(1); // Analiza la primera página del PDF
  //   const viewport = page.getViewport({ scale: this.zoom });

  //   const textContent = await page.getTextContent();

  //   textContent.items.forEach((item: any) => {
  //     if (item.transform && item.str) {
  //       // Obtén las coordenadas y dimensiones del texto
  //       const [x, y, xScale, yScale] = item.transform;

  //       // Agrega las coordenadas ajustadas al viewport
  //       this.recortes.push({
  //         nombre: item.str, // Nombre del texto para identificar
  //         top: viewport.height - y * this.zoom, // Coordenada ajustada
  //         left: x * this.zoom,
  //         width: xScale * this.zoom,
  //         height: yScale * this.zoom,
  //       });
  //     }
  //   });
  // }

  // async descargarPDF() {
  //   try {

  //     this.route.queryParams.subscribe(params => {
  //       this.valor = params['valor'];
  //     });

  //     // this.pdfSrc = ApiBackDomains.UrlDomainLocal + "/aw_file/diseno_plano/" + this.valor;
  //     console.log('URLLLLLLL',this.pdfSrc);
  //     // this.pdfSrc = "http://192.168.100.22/aw_file/diseno_plano/" + this.valor;
  //     // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/" + this.valor;
  //     // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/156673_65fae74889f20.%20BOMBA%20MIURA%2010HP.pdf";
  //     this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/CHECKLIST/15-S.02.11.06.03.01.pdf";

  //     const response = await fetch(this.pdfSrc);
  //     const blob = await response.blob();

  //     if (Capacitor.isNative) {
  //       const fileName = this.valor;
  //       await Filesystem.writeFile({
  //         path: fileName,
  //         data: blob,
  //         directory: Directory.Documents,
  //       });

  //       console.log('PDF descargado correctamente.');
  //     } else {
  //       // Si no estás en una plataforma nativa, puedes abrir el archivo en una nueva pestaña del navegador
  //       const url = window.URL.createObjectURL(blob);
  //       window.open(url);
  //     }
  //   } catch (error) {
  //     console.error('Error en la descarga del PDF:', error);
  //   }
  // }

  // FCloseWin() {

  //   this.route.queryParams.subscribe(params => {
  //     this.flaglistaprod = params['flaglistaprod'];
  //   });

  //   if (this.flaglistaprod == '1') {
  //     console.log("cancelar 1");
  //     //this.navCtrl.navigateForward('prod-list-acti-programada');
  //     this.navCtrl.navigateForward('prod-ate-serv-asigna-estado');
  //   }
  //   else if (this.flaglistaprod == '2') {
  //     console.log("cancelar 2");
  //     this.navCtrl.navigateForward("prod-ate-serv-inicia-actividad");
  //   }
  //   else {
  //     console.log("cancelar 3");
  //     this.navCtrl.navigateForward("prod-ate-serv-list-actividades");
  //   }

  // }

  // zoomIn() {
  //   this.zoom += 0.1;
  // }

  // zoomOut() {
  //   if (this.zoom > 0.2) {
  //     this.zoom -= 0.1;
  //   }
  // }

  // resetZoom() {
  //   this.zoom = 1.0; // Asigna el valor del zoom al tamaño original del PDF
  // }

  // onPinch(event) {
  //   // Obtener el cambio de escala (scale) del evento de pellizco
  //   const scale = event.scale;

  //   // Calcula el nuevo nivel de zoom multiplicando el zoom actual por el cambio de escala
  //   this.zoom *= scale;

  //   // Asegúrate de que el zoom no se salga de ciertos límites (opcional)
  //   // Por ejemplo, podrías limitar el zoom mínimo y máximo:
  //   if (this.zoom < 0.5) {
  //     this.zoom = 0.5;
  //   }
  //   if (this.zoom > 2.0) {
  //     this.zoom = 2.0;
  //   }
  // }


}