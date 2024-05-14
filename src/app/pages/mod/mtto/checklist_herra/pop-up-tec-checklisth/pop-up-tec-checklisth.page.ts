import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
@Component({
  selector: 'app-pop-up-tec-checklisth',
  templateUrl: './pop-up-tec-checklisth.page.html',
  styleUrls: ['./pop-up-tec-checklisth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopUpTecChecklisthPage implements OnInit {
  NgModInputSearch:any;
  DataSetGrid:any;
  id_personal: string;
  tecnico_cl: string;
  cargo: string;
  constructor(
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private ApiService: MttoListChecklistHerra,
    public navParams: NavParams,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
  ) {
    this.id_personal=navParams.get('id_personal');
    this.tecnico_cl=navParams.get('tecnico_cl');
    this.cargo=navParams.get('cargo');
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.FFindRows();
  }
  async cancelar_listaservicios(id_personal,tecnico_cl,cargo){
    const onClosedData:any = {
      id_personal:id_personal,
      tecnico_cl:tecnico_cl,
      cargo:cargo
    };
    await this.modalCtrl.dismiss(onClosedData);

  }
  FFindRows() {
    const loading = this.loadingController.create({
      message: 'Cargando lista...',
      translucent: true
    }).then(
      loading => {
        loading.present();
        this.ApiService.LisTecnicos(this.NgModInputSearch).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingController.dismiss();
        });
      });
  }
  FSelectedItem(id_personal,tecnico_cl,cargo){
    this.cancelar_listaservicios(id_personal,tecnico_cl,cargo);
    // this.cancelar_listaservicios(codsmg,id_orden_trab_fis_cab,nombre,id_orden_trab_cab,ot_estado_general);
  }
  // async mostrarmnsj1(variable1: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Asignacion Motor',
  //     message: `Esta asignando este motor a la bomba  ${variable1}`,
  //     cssClass: 'alerta-confirma',
  //     mode: 'ios',
  //     buttons: [
  //       {
  //         text: 'Aceptar',
  //         handler: () => {
  //           // Aquí podrías agregar lógica adicional si es necesario
  //         },
  //       },
  //     ],
  //   });
  
  //   await alert.present();
  // }
}
