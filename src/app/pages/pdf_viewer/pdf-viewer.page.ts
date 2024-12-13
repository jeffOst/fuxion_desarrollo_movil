import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MPieza } from 'src/app/interfaces/prod/Pieza';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ApiBackDomains } from '../../interfaces/ApiConections';

import { Capacitor } from '@capacitor/core'; // Importa Capacitor
import { Filesystem, Directory } from '@capacitor/filesystem'; // Importa Filesystem de Capacitor


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.page.html',
  styleUrls: ['./pdf-viewer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PdfViewerModule]
})
export class PdfViewerPage implements OnInit {
  DsviewPDF: any;
  navParams: any;
  flagResumenDiario: string;
  idTargetMenu: number;
  valor: string;
  flaglistaprod: string;
  EQUIPOID: string;
  pdfSrc: string
  zoom: number = 1.0; // Zoom inicial

  //pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"
  //pdfSrc = "http://192.168.3.90/fuxion/aw_file/adjuntos/144556_65e9d277c3f9b.pdf";
  //pdfSrc = "http://192.168.3.90/fuxion/aw_file/adjuntos/pdf-test.pdf";
  //pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/adjuntos1/pdf-test.pdf";


  constructor(

    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
  ) {
    this.navParams = this.router.getCurrentNavigation().extras.state;
    this.flagResumenDiario = "0"; //this.navParams.flag;

    if (this.navParams) {
      this.DsviewPDF = {} as MPieza;
      this.idTargetMenu = this.navParams.idTargetMenu;
      this.DsviewPDF.EQUIPOID = 'Repuestos';
    }

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.valor = params['valor'];
    });

    this.pdfSrc = ApiBackDomains.UrlDomainLocal + "/aw_file/diseno_plano/" + this.valor;
    
    
    // this.pdfSrc = "http://192.168.100.22/aw_file/diseno_plano/" + this.valor;
    // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/" + this.valor;

    //console.log(this.pdfSrc);
  }

  async descargarPDF() {
    try {

      this.route.queryParams.subscribe(params => {
        this.valor = params['valor'];
      });

      this.pdfSrc = ApiBackDomains.UrlDomainLocal + "/aw_file/diseno_plano/" + this.valor;
      console.log('URLLLLLLL',this.pdfSrc);
      // this.pdfSrc = "http://192.168.100.22/aw_file/diseno_plano/" + this.valor;
      // this.pdfSrc = "https://fuxion.geohidraulica.com.pe/aw_file/diseno_plano/" + this.valor;

      const response = await fetch(this.pdfSrc);
      const blob = await response.blob();

      if (Capacitor.isNative) {
        const fileName = this.valor;
        await Filesystem.writeFile({
          path: fileName,
          data: blob,
          directory: Directory.Documents,
        });

        console.log('PDF descargado correctamente.');
      } else {
        // Si no estás en una plataforma nativa, puedes abrir el archivo en una nueva pestaña del navegador
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      }
    } catch (error) {
      console.error('Error en la descarga del PDF:', error);
    }
  }

  FCloseWin() {

    this.route.queryParams.subscribe(params => {
      this.flaglistaprod = params['flaglistaprod'];
    });

    if (this.flaglistaprod == '1') {
      console.log("cancelar 1");
      //this.navCtrl.navigateForward('prod-list-acti-programada');
      this.navCtrl.navigateForward('prod-ate-serv-asigna-estado');
    }
    else if (this.flaglistaprod == '2') {
      console.log("cancelar 2");
      this.navCtrl.navigateForward("prod-ate-serv-inicia-actividad");
    }
    else {
      console.log("cancelar 3");
      this.navCtrl.navigateForward("prod-ate-serv-list-actividades");
    }

  }

  zoomIn() {
    this.zoom += 0.1;
  }

  zoomOut() {
    if (this.zoom > 0.2) {
      this.zoom -= 0.1;
    }
  }

  resetZoom() {
    this.zoom = 1.0; // Asigna el valor del zoom al tamaño original del PDF
  }

  onPinch(event) {
    // Obtener el cambio de escala (scale) del evento de pellizco
    const scale = event.scale;

    // Calcula el nuevo nivel de zoom multiplicando el zoom actual por el cambio de escala
    this.zoom *= scale;

    // Asegúrate de que el zoom no se salga de ciertos límites (opcional)
    // Por ejemplo, podrías limitar el zoom mínimo y máximo:
    if (this.zoom < 0.5) {
      this.zoom = 0.5;
    }
    if (this.zoom > 2.0) {
      this.zoom = 2.0;
    }
  }


}