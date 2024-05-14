import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoOrdentrabajoService } from 'src/app/api/mtto/mtto-ordentrabajo.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
@Component({
  selector: 'app-pop-up-bomba',
  templateUrl: './pop-up-bomba.page.html',
  styleUrls: ['./pop-up-bomba.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopUpBombaPage implements OnInit {
  NgModInputSearch:any;
  DataSetGrid:any;
  codsmg:string;
  id_orden_trab_fis_cab:string;
  nombre:string;
  id_orden_trab_cab: string;
  id_orden_trab_cab2: string;
  ot_estado_general:string;
  constructor(
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private ApiService: MttoOrdentrabajoService,
    public navParams: NavParams,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
  ) {
    this.codsmg=navParams.get('codsmg');
    this.id_orden_trab_fis_cab=navParams.get('id_orden_trab_fis_cab');
    this.nombre=navParams.get('nombre');
    this.id_orden_trab_cab=navParams.get('id_orden_trab_cab');
    this.ot_estado_general=navParams.get('ot_estado_general');
    this.id_orden_trab_cab2 = globalVal.id_orden_trab_cab;
  }

  ngOnInit() {
  }
  
  async cancelar_listaservicios(codsmg,id_orden_trab_fis_cab,nombre,id_orden_trab_cab,ot_estado_general){
    const onClosedData:any = {
      id_orden_trab_fis_cab:id_orden_trab_fis_cab,
      codsmg:codsmg,
      nombre:nombre,
      id_orden_trab_cab:id_orden_trab_cab,
      ot_estado_general:ot_estado_general
    };
    await this.modalCtrl.dismiss(onClosedData);

  }

  // async cancelar_listaservicios(Y04002,Y04001,SEQMASERV,es_con_procesos_ms,flag_serv_eje_ms){
  //   const onClosedData:any = {
  //     Y04001:Y04001,
  //     Y04002:Y04002,
  //     SEQMASERV:SEQMASERV,
  //     es_con_procesos_ms:es_con_procesos_ms,
  //     flag_serv_eje_ms:flag_serv_eje_ms
  //   };
  //   await this.modalCtrl.dismiss(onClosedData);

  // }
  ionViewDidEnter(){
    this.FFindRows();
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
       //////////////////////////////////////////////// revisar 
      
       console.log(this.id_orden_trab_cab2);
       
        this.ApiService.ListBombasDisponible(this.NgModInputSearch,this.id_orden_trab_cab2).then((res) => {
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

  FSelectedItem(codsmg,id_orden_trab_fis_cab,nombre,id_orden_trab_cab,ot_estado_general,guia_salida_mtto){
    
    if (guia_salida_mtto=='ENVIADO A MINA') {
      this.mostrarmnsj2();   
    }
    else if (ot_estado_general==3) {
      this.mostrarmnsj1(codsmg); 
      this.cancelar_listaservicios(codsmg,id_orden_trab_fis_cab,nombre,id_orden_trab_cab,ot_estado_general);
    }  
    else {
      this.mostrarmnsj ();   
    }
    // this.cancelar_listaservicios(codsmg,id_orden_trab_fis_cab,nombre,id_orden_trab_cab,ot_estado_general);
  }
  async mostrarmnsj1(variable1: string) {
    const alert = await this.alertController.create({
      header: 'Asignacion Motor',
      message: `Esta asignando este motor a la bomba  ${variable1}`,
      cssClass: 'alerta-confirma',
      mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            // Aquí podrías agregar lógica adicional si es necesario
          },
        },
      ],
    });
  
    await alert.present();
  }
  

  
  async mostrarmnsj() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'No se puede aperturar el registro, el estado debe ser aprobado',
      cssClass:'alerta-confirma',
            mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarmnsj2() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'La bomba seleccionada, a sido enviada a Mina, no se puede seleccionar',
      cssClass:'alerta-confirma',
            mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();
  }
}
