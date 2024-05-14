import { MSolicitudQc } from "src/app/interfaces/prod/Pieza";
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { IonInput, NavParams, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit,ViewChild,Input, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
// import { register } from 'swiper/element/bundle'
// register();

import { Swiper } from 'swiper'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-prod-ate-serv-view-dejar-pieza-calidad',
  templateUrl: './prod-ate-serv-view-dejar-pieza-calidad.page.html',
  styleUrls: ['./prod-ate-serv-view-dejar-pieza-calidad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class ProdAteServViewDejarPiezaCalidadPage implements OnInit {
  @ViewChild('swiper')
  swiperRef:ElementRef | undefined;
  swiper?:Swiper;

  @Input() idofpterminado: string;
  @Input() id_usuario_local: string;
  @Input() id_dispositivo: string;

  FormSolicitudQc: MSolicitudQc[] = [];
  navParams:any;
  slideOpts:any;
  constructor(
    public navCtrl: NavController,
    public prodservice:ProdGestionServicioService,
    private router: Router,
  ) {

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);
this.idofpterminado=this.navParams.idofpterminado;

  }

  ngOnInit() {
  }

  FCloseWin(){

      this.navCtrl.navigateForward("prod-ate-serv-asigna-estado");

  }

  ionViewDidEnter(){
    this.prodservice.ListFindSolicitudQcByOf('',this.idofpterminado,this.id_usuario_local,this.id_dispositivo).then((res) => {
      console.log(res);
      //this.DsGridSolicitudQc = res;
this.FormSolicitudQc=res;
      console.log(this.FormSolicitudQc);

      this.slideOpts = {
        initialSlide: 2,
        speed: 400
      };

    }).finally(() => {

    });
    //
  }

  /*
  Y04001	Y04002	correorden	Nsemanaofmes	descrip	fch_solicitud_scc	nombres_solicitante	cantidad_scc	idsolicitudcontrolcab
  */
swiperReady(){

  this.swiper = this.swiperRef?.nativeElement.swiper;
}
goNext(){

  this.swiper?.slideNext();

}
goPrev(){

  this.swiper?.slidePrev();

}
  swiperSliderChanged(e:any){

    console.log('changed',e);

  }

}

