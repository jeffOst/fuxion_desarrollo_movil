import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController } from '@ionic/angular';
import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdservicesService } from "src/app/api/prod/prodservices.service";
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-mtto-otis-pop-up-equipo',
  templateUrl: './mtto-otis-pop-up-equipo.page.html',
  styleUrls: ['./mtto-otis-pop-up-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class MttoOtisPopUpEquipoPage implements OnInit {
  @ViewChild('idinputsearch_equipo') idinputsearch_equipo:IonInput;
  TipoEquipo:string='0';
  results_equipos: any;
  search_term_equipo = '';
  switchButtonSegmento: string = "";
  navParamsAny: any;
  idusuario:string;
  ///ArrayItemsSelectedDesti: ItemsSelected[] = [];
  constructor(
    private loadingController: LoadingController,
    //public serviceProduccion: ProdservicesService,
    private ApiService: MttoOrdentrabajoService,
    public  modalCtrl:ModalController,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    //this.TipoEquipo = parseInt(this.route.snapshot.paramMap.get('idvaleservidetot'));
    //
    //this.TipoEquipo=navParams.get('familia');
    console.log('this.this.navParams::>',this.navParams);
    console.log('this.this.navParams::>',this.navParams.get('Row'));
    console.log('this.this.navParams::>',this.navParams.get('Row').familia);
    //console.log(this.TipoEquipo);
    // this.idvaleservidetot_param=navParams.get('idvaleservidetot_p');

    // this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    // console.log(this.router.getCurrentNavigation().extras.state);
    // console.log(this.router.getCurrentNavigation().extras.state['Row']);
    // console.log(this.navParamsAny);
    this.TipoEquipo=this.navParams.get('Row').familia;
    this.idusuario=this.navParams.get('Row').idusuario;
   }

  ngOnInit() {
  }

  async cancelar_listaequipos(idequipo,idofcab,idtipo,idpotencia){
    const onClosedData:any = {
      idequipo:idequipo,
      idofcab:idofcab,
      idtipo:idtipo,
      idpotencia:idpotencia
    };
    await this.modalCtrl.dismiss(onClosedData);
  }

  FindEquipos() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListBombasxFabTableros(this.search_term_equipo, this.switchButtonSegmento, this.TipoEquipo).then((res) => {
          this.results_equipos = res;
        }).finally(() => {
          this.loadingController.dismiss();
          setTimeout(() => {
          this.idinputsearch_equipo.setFocus();
        },600)
        });
      });
  }

  async seleccionar_equipo(idcodsmg,idofcab,idtipo,idpotencia){

let row:any;
row={
  idequipo:idcodsmg,
  familia:this.TipoEquipo,
  idusuario:this.idusuario,
  idofcab:idofcab
}

    const loading = this.loadingController
    .create({
      message: 'Guardando Paso 1...',
      translucent: true, //,
      //cssClass: 'custom-class custom-loading'
    })
    .then((loading) => {
      loading.present();
    });
  await this.ApiService.GuardarNuevoEquipo(row)
    .then( async (res) => {
      this.loadingController.dismiss();
      console.log(res);
      //let css_msj=(res[0].o_nres=='0')?'alerta-error':'alerta-ok';

    /////////////////////////////
    let Row=res['form'][0];
    let navigationExtras: NavigationExtras = {
      state: { Row },
    };
    //console.log(navigationExtras);

    this.navCtrl.navigateForward(
      ['/mtto-win-orden-trabajo'],
      navigationExtras
    );


    })
    .finally(() => {
      console.log('finally:::>>LN:394');

      //this.navCtrl.navigateForward(["mtto-list-recinado"]);
    })
    .catch((err) => {
      console.log('errror:::>>>>>>>>>', err);
    });





    //this.cancelar_listaequipos(codsmg,idmarca,idtipo,idpotencia);
    /*let index=0;
    for (const row of this.ArrayItemsSelectedDesti) {
      //console.log(this.ArrayItemsSelectedDesti[index].Y04001);
      if (this.ArrayItemsSelectedDesti[index].idvaleservidetot==this.TipoEquipo) {
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
