import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewChild } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute, ROUTES } from '@angular/router';
import { IonTabs,NavController } from '@ionic/angular'
import { HeaderComponent } from '../../../../../components/header/header.component';
import { Network, ConnectionStatus } from "@capacitor/network";
import { GlovalProvider } from "src/app/interfaces/mtto/GlobalVal";
import { InformeCab } from "src/app/interfaces/mtto/InformeTecnico"
import { Storage } from "@ionic/storage";
import {
  NgForm,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms'

@Component({
  selector: 'app-mtto-informe-tablero',
  templateUrl: './mtto-informe-tablero.page.html',
  styleUrls: ['./mtto-informe-tablero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class MttoInformeTableroPage implements OnInit {
  @ViewChild('myTabs') tabRef: IonTabs;
  FormCheckListPaso1: UntypedFormGroup;
  FormHtmlJs: any;
  navParamsAny: any;
  networkStatus: ConnectionStatus;
  NombresUsuarioLocal: string;
  IdUsuarioLocal: string;
  tituloTollBar: string = 'Informe de Tablero';
  Cancelar: string = 'Cancelar'
  disableButton: boolean = false;
  constructor(
    public formBuilder: UntypedFormBuilder,
    public globalVal: GlovalProvider,
    private route: ActivatedRoute,//Router,
    private router: Router,//,
    public navCtrl: NavController,
    public storage: Storage,
  ) {
    this.FormHtmlJs = {} as InformeCab;
    this.FormCheckListPaso1 = this.formBuilder.group({ });
    this.navParamsAny = this.router.getCurrentNavigation().extras.state['Row'];
    let localStorage;
    //////////////////
    this.storage.create();
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal = localStorage.user_id;
      this.storage.create();
      this.storage.get('DEVICE_INFO').then((result1) => {
        localStorage = (result1);
        this.FloadForms();
      });
    });  
   }
   
  mySelect(id, event) {
    this.globalVal.checklist_paso_pivot=id;
    if (id == 1) {
      this.globalVal.idchecklistcab = this.FormHtmlJs.idchecklistcab;
    }
    let localStorage;
  //  this.NombresUsuarioLocal = localStorage.user_name;
  }

  FloadForms() {
    if (this.navParamsAny) {
      this.FormHtmlJs.corre_fisico = this.navParamsAny.corre_fisico
      this.FormHtmlJs.codsmg = this.navParamsAny.codsmg;
      this.FormHtmlJs.corre_inf_cab = this.navParamsAny.corre_inf_cab;
      this.FormHtmlJs.modelo = this.navParamsAny.modelo;
      this.FormHtmlJs.idactivos = this.navParamsAny.idactivos;
      this.FormHtmlJs.fech_de_registro = this.navParamsAny.fch_ini_montaje_clc;
      this.FormHtmlJs.corre_fisico = this.navParamsAny.corre_fisico;
      this.FormHtmlJs.tec_responsable = this.IdUsuarioLocal;
      if (this.FormHtmlJs.corre_inf_cab == 0) {
        console.log('inserta');
      } else {
        this.globalVal.corre_inf_cab = this.FormHtmlJs.corre_inf_cab;
      }

    }

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
    
  }

}
