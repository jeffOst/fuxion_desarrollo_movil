import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController, AlertController,IonInput, NavParams, LoadingController,ModalController } from '@ionic/angular';
import { ProdservicesService } from "src/app/api/prod/prodservices.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pop-up-pt',
  templateUrl: './pop-up-pt.page.html',
  styleUrls: ['./pop-up-pt.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers:[NavParams]
})

export class PopUpPtPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo:IonInput;
  constructor(
    private loadingController: LoadingController,
    public serviceProduccion: ProdservicesService,
    public  modalCtrl:ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams
  ) { 
    this.idmarca_=navParams.get('idmarca');
    this.idpotencia_=navParams.get('idpotencia');
    this.idtipo_=navParams.get('idtipo');
  }

  ngOnInit() {
  }
idmarca_:string;
idpotencia_:string;
idtipo_:string;
  idvaleservidetot_param:number=0;
  results_equipos: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";

  async cancelar_listaequipos(nombrept,idpt,idmarca,idtipo,idpotencia){
    const onClosedData:any = {
      idequipo:nombrept,
      idpt:idpt,
      idmarca:idmarca,//SEQMA04
      idtipo:idtipo,///idclase
      idpotencia:idpotencia
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
        this.serviceProduccion.listado_pt_service(this.search_term_equipo, this.switchButtonSegmento, '19','H',this.idmarca_,this.idpotencia_,this.idtipo_).then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {            
          this.idinputsearch_equipo.setFocus();
        },600)
        });
      });
  }

  seleccionar_pt(codsmg,idpt,idmarca,idtipo,idpotencia){
    this.cancelar_listaequipos(codsmg,idpt,idmarca,idtipo,idpotencia);
  }
}

