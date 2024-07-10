import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { NavController, AlertController,IonInput, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdGestionServicioService } from "src/app/api/prod/prod-gestion-servicio.service";
import { ActivatedRoute } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-pop-up-servicios',
  templateUrl: './pop-up-servicios.page.html',
  styleUrls: ['./pop-up-servicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopUpServiciosPage implements OnInit {
  @ViewChild('IdHtmlInputSearch') IdHtmlInputSearch:IonInput;
 
NgModInputSearch:any;
IdUsuarioLocal:string;
IdDispositivo:string;
NombreDispositivo:string;
NombresUsuarioLocal:string;
DataSetGrid:any;
idpieza_:string;
idtablet_:string;
avatar_:string;
idvaleservidetot_param:number=0;
search_term_equipo = '';

SEQMASERV:string;
Y04002:string;
nomclase:string;

  constructor(
    private loadingController: LoadingController,
    public ApiService: ProdGestionServicioService,
    public  modalCtrl:ModalController,
    private route: ActivatedRoute,
    public navParams: NavParams,
    public storage: Storage,
  ) { 
    console.log('navParams:::>',navParams);
    
    this.idpieza_=navParams.get('idpieza');
    this.idtablet_=navParams.get('idtablet');
    this.avatar_=navParams.get('avatar');
    this.SEQMASERV=navParams.get('SEQMASERV');
    this.Y04002=navParams.get('Y04002');
    this.nomclase=navParams.get('nomclase');
    
    
    let localStorage;
    //////////////////
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.NombresUsuarioLocal = localStorage.user_name;
      this.IdUsuarioLocal=localStorage.user_id;
    });
    this.storage.get('DEVICE_INFO').then((result1) => {
      localStorage = (result1);
      this.NombreDispositivo = localStorage.name;
      this.IdDispositivo=localStorage.uuid;
    });

  }

  ngOnInit() {
    
  }
  
  ionViewDidEnter(){
    this.FFindRows();
  }
  async cancelar_listaservicios(Y04002,Y04001,SEQMASERV,es_con_procesos_ms,flag_serv_eje_ms){
    const onClosedData:any = {
      Y04001:Y04001,
      Y04002:Y04002,
      SEQMASERV:SEQMASERV,
      es_con_procesos_ms:es_con_procesos_ms,
      flag_serv_eje_ms:flag_serv_eje_ms
    };
    await this.modalCtrl.dismiss(onClosedData);

  }

  FFindRows() {
    const loading = this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Cargando lista...',
      translucent: true//,
      //cssClass: 'custom-class custom-loading'
    }).then(
      loading => {
        loading.present();
        //InputSearch:string,idpieza: string,tipServicio: string,id_usuario_local: string, id_dispositivo: string
        this.ApiService.ListFindServiciosByPieza(this.NgModInputSearch,this.idpieza_,this.avatar_,this.IdUsuarioLocal,this.IdDispositivo,this.nomclase).then((res) => {
          this.DataSetGrid = res;
          //console.log(this.results_equipos);
        }).finally(() => {
          this.loadingController.dismiss();
          
          // setTimeout(() => {            
          // this.IdHtmlInputSearch.setFocus();
          // },600)

        });
      });
  }

  FSelectedItem(Y04002,Y04001,SEQMASERV,es_con_procesos_ms,flag_serv_eje_ms){
    this.cancelar_listaservicios(Y04002,Y04001,SEQMASERV,es_con_procesos_ms,flag_serv_eje_ms);
  }

  agregar_servicio_actividad() {
    console.log('Texto ingresado:', this.NgModInputSearch);
    // Aquí puedes agregar la lógica que necesites cuando se haga clic en el botón

    const loading = this.loadingController.create({
      message: 'Cargando lista...',
      translucent: true//,
    }).then(
      loading => {
        loading.present();
        this.ApiService.agregarServiciosByPieza(this.NgModInputSearch,this.idpieza_,this.avatar_,this.IdUsuarioLocal,this.IdDispositivo,this.nomclase).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          
          //this.loadingController.dismiss();
          this.loadingController.dismiss().then(() => {
            this.FFindRows(); // Llamada a la función para listar después de registrar
          });

        });
      });

  }

  onSearchChange(event:any){
    const query = event.target.value;
    if (query && query.trim() !== '') {
      this.ApiService.ListFindServiciosByPieza(this.NgModInputSearch,this.idpieza_,this.avatar_,this.IdUsuarioLocal,this.IdDispositivo,this.nomclase).then((res) => {
        this.DataSetGrid = res;
        //console.log(this.results_equipos);
      }).finally(() => {
        this.loadingController.dismiss();
       
        // setTimeout(() => {            
        // this.IdHtmlInputSearch.setFocus();
        // },600)
 
      });
    }
 
  }


}