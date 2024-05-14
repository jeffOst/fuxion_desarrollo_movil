import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoOrdentrabajoService } from "src/app/api/mtto/mtto-ordentrabajo.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mtto-solse-popupservicios',
  templateUrl: './mtto-solse-popupservicios.page.html',
  styleUrls: ['./mtto-solse-popupservicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MttoSolsePopupserviciosPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo: IonInput;
  constructor(private loadingController: LoadingController,
    public serviceProduccion: MttoOrdentrabajoService,
    public modalCtrl: ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams) {
      this.idpieza_ = navParams.get('idpieza');
    this.idtablet_ = navParams.get('idtablet');
    this.avatar_ = navParams.get('avatar');
  }


  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.lista_servicios()  
  }

  idpieza_: string;
  idtablet_: string;
  avatar_: string;

  idvaleservidetot_param: number = 0;
  results_equipos: any;
  search_term_equipo = '';
  async cancelar_listaservicios(Y04002, Y04001, SEQMASERV,pieza,unidad) {
    const onClosedData: any = {
      Y04001: Y04001,
      Y04002: Y04002,
      SEQMASERV: SEQMASERV,
      pieza: pieza,
      unidad:unidad
    };
    await this.modalCtrl.dismiss(onClosedData);

  }

  lista_servicios() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.serviceProduccion.listado_servicio_popup(this.search_term_equipo, '2', this.avatar_, this.idpieza_, this.idtablet_).then((res) => {
          //console.log('res::::::>');
          this.results_equipos = res;
          //console.log(this.results_equipos);
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
            this.idinputsearch_equipo.setFocus();
          }, 600)
        });
      });
  }

  seleccionar_servicio(Y04002, Y04001, SEQMASERV,pieza,unidad) {
    this.cancelar_listaservicios(Y04002, Y04001, SEQMASERV,pieza,unidad);
  }

}
