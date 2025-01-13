import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { Storage } from "@ionic/storage";
import { InformeCab } from "src/app/interfaces/mtto/InformeTecnico"
import { MttoChekListMontajeService } from 'src/app/api/mtto/mtto-chek-list-montaje-service.service';
import { ViewChild } from "@angular/core";
import { IonTabs } from '@ionic/angular'
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal"
import { Network, ConnectionStatus } from "@capacitor/network";


@Component({
  selector: 'app-mtto-win-manto-pend',
  templateUrl: './mtto-win-manto-pend.page.html',
  styleUrls: ['./mtto-win-manto-pend.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MttoWinMantoPendPage implements OnInit {

  navParamsAny: any;
  Cancelar: string = 'Cancelar';
  disableButton: boolean = false;
  
  constructor(
    private router: Router,//,
  ) { 
    console.log(this.router.getCurrentNavigation().extras.state['Row']);
  }

  ngOnInit() {
    console.log("hola");
  }

}
