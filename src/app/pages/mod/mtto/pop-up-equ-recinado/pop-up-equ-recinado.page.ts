 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { IonicModule } from '@ionic/angular';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController, AlertController,IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttorecinadoservicesService } from "src/app/api/mtto/mttorecinadoservices.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pop-up-equ-recinado',
  templateUrl: './pop-up-equ-recinado.page.html',
  styleUrls: ['./pop-up-equ-recinado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class PopUpEquRecinadoPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo:IonInput;
  constructor(
    private loadingController: LoadingController,
    public serviceProduccion: MttorecinadoservicesService,
    public  modalCtrl:ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams

  ) { }
  results_equipos: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";
  ngOnInit() {
  }

  async cancelar_listaequipos(idequipo,id_orden_trab_fis_cab,fch_inicio_ot){
    const onClosedData:any = {
      idequipo:idequipo,
      id_orden_trab_fis_cab:id_orden_trab_fis_cab,
      fch_inicio_ot:fch_inicio_ot
    };
    await this.modalCtrl.dismiss(onClosedData);

  }

  lista_equipos() {
    
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.serviceProduccion.listado_equipos_service(this.search_term_equipo, this.switchButtonSegmento, '4','H').then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {            
          this.idinputsearch_equipo.setFocus();
        },600)
        });
      });
  }
  seleccionar_equipo(codsmg,id_orden_trab_fis_cab,fch_inicio_ot){
    this.cancelar_listaequipos(codsmg,id_orden_trab_fis_cab,fch_inicio_ot);    
  }

}
