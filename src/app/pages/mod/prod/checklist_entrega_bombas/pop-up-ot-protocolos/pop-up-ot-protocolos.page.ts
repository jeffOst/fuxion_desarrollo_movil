import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';
import { ProdEntregaBomba } from 'src/app/api/prod/prod-entrega-bomba.service';
import { FormsModule, NgForm,NgModel,NgModelGroup,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-pop-up-ot-protocolos',
  templateUrl: './pop-up-ot-protocolos.page.html',
  styleUrls: ['./pop-up-ot-protocolos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class PopUpOtProtocolosPage implements OnInit {
  DataSetGrid:any;
  NgModInputSearch:any;
  constructor(
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private ApiService: ProdEntregaBomba,
    private alertController: AlertController,
  ) { }

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
        this.ApiService.ListBombasDisponible(this.NgModInputSearch).then((res) => {
          console.log('respuesta de esto',res);
          this.DataSetGrid = res;
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
