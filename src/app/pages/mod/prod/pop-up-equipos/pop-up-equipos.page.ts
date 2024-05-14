import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProdservicesService } from "src/app/api/prod/prodservices.service";

@Component({
  selector: 'app-pop-up-equipos',
  templateUrl: './pop-up-equipos.page.html',
  styleUrls: ['./pop-up-equipos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class PopUpEquiposPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo:IonInput;
  constructor(
    private loadingController: LoadingController,
    public serviceProduccion: ProdservicesService,
    public  modalCtrl:ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams
  ) {
    //this.idvaleservidetot_param = parseInt(this.route.snapshot.paramMap.get('idvaleservidetot'));
    //
    this.idvaleservidetot_param=navParams.get('idvaleservidetot_p');
    //console.log('this.idvaleservidetot_param::>');
    //console.log(this.idvaleservidetot_param);
    //console.log(navParams);
    
   }

  ngOnInit() {
  }
  idvaleservidetot_param:number=0;
  results_equipos: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";
  ///ArrayItemsSelectedDesti: ItemsSelected[] = [];

  async cancelar_listaequipos(idequipo,idmarca,idtipo,idpotencia){
    const onClosedData:any = {
      idequipo:idequipo,
      idmarca:idmarca,
      idtipo:idtipo,
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
        this.serviceProduccion.listado_equipos_service(this.search_term_equipo, this.switchButtonSegmento, '17','H').then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {            
          this.idinputsearch_equipo.setFocus();
        },600)
        });
      });
  }
  seleccionar_equipo(codsmg,idmarca,idtipo,idpotencia){
    this.cancelar_listaequipos(codsmg,idmarca,idtipo,idpotencia);
    /*let index=0;
    for (const row of this.ArrayItemsSelectedDesti) {
      //console.log(this.ArrayItemsSelectedDesti[index].Y04001);
      if (this.ArrayItemsSelectedDesti[index].idvaleservidetot==this.idvaleservidetot_param) {
        this.ArrayItemsSelectedDesti[index].codsmg=codsmg;
        
        break;
  }
  index++;
}
  */
    //this.selected_equipo=codsmg;    
    ///cerrar popup
  }


}


