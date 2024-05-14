import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlmIngSaliServicio } from "src/app/api/alm/alm-ing-sali-servicio.service";
import { MAlmacenIngreso } from "src/app/interfaces/alm/AlmacenIngreso";
import { IonInput, NavParams, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-alm-ing-win-det-recep-oc',
  templateUrl: './alm-ing-win-det-recep-oc.page.html',
  styleUrls: ['./alm-ing-win-det-recep-oc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlmIngWinDetRecepOcPage implements OnInit {
  @Input() idoc: string;
  @Input() id_usuario_local: string;
  @Input() id_dispositivo: string;
  FormHtmlJs = {} as MAlmacenIngreso;
  navParams:any;
  slideOpts:any;
  constructor(
    public navCtrl: NavController,
    public prodservice:AlmIngSaliServicio,
    private router: Router,

  ) {

    this.navParams = this.router.getCurrentNavigation().extras.state;
    console.log('this.navParams::>', this.navParams);
this.idoc=this.navParams.Y20005;

  }

  ngOnInit() {
  }

  FCloseWin(){

    this.navCtrl.navigateForward("alm-ing-win-recep-oc");

}

ionViewDidEnter(){
  this.prodservice.ListFindDetalleByOc(this.idoc,this.id_usuario_local,this.id_dispositivo).then((res) => {
    console.log(res);
    //this.DsGridSolicitudQc = res;
this.FormHtmlJs.detalle=res;
console.log(res);
    console.log(this.FormHtmlJs.detalle);
    this.slideOpts = {
      initialSlide: 2,
      speed: 400
    };

  }).finally(() => {

  });
  //

}

}
