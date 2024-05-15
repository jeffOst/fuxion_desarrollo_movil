import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController, AlertController, IonInput, Platform,NavParams, LoadingController, ModalController } from '@ionic/angular';
import { MttoListChecklistHerra } from 'src/app/api/mtto/mtto-checklist-herramienta.service';
import { GlovalProvider } from 'src/app/interfaces/mtto/GlobalVal';
@Component({
  selector: 'app-pop-up-add-herra',
  templateUrl: './pop-up-add-herra.page.html',
  styleUrls: ['./pop-up-add-herra.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopUpAddHerraPage implements OnInit {
  NgModInputSearch:any;
  DataSetGrid:any;
  id_personal: string;
  tecnico_cl: string;
  cargo: string;
  idregistro: string;
  IdUsuarioLocal: string;
  constructor(
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private ApiService: MttoListChecklistHerra,
    public navParams: NavParams,
    private alertController: AlertController,
    public globalVal: GlovalProvider,
    private toastController: ToastController,
    public storage: Storage,
  ) {
    this.id_personal=navParams.get('id_personal');
    this.tecnico_cl=navParams.get('tecnico_cl');
    this.cargo=navParams.get('cargo');
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log('parametross',this.navParams);
    console.log('this.idregistro',this.idregistro);
    
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = result1;
      this.IdUsuarioLocal = localStorage.user_id;
      //  this.NombresUsuarioLocal = localStorage.user_name;
      console.log('localStorage',localStorage);
      this.FFindRows();
    });
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
        this.ApiService.Lisherra(this.NgModInputSearch,this.IdUsuarioLocal,this.idregistro).then((res) => {
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
  async saveEvent(ev, row: any) {
    console.log(ev);

    let ck = '1';
    let valorConvertido;
    console.log("eventoooo",ev.detail.checked);
    if (ev.detail.checked == true) {
      valorConvertido = 1;
  } else {
      
      valorConvertido = 2;
  }

console.log('valorConvertido',valorConvertido);

    // row.check_toggle= (ev.detail['checked'])?'1':'0';
    // row.habilitar_toggle=(ev.detail['checked'])?'0':'1';
    await this.ApiService.GuardarlistHerra(row, this.IdUsuarioLocal,valorConvertido,this.idregistro)
      .then(async (res) => {
        console.log(res);

        this.presentToast(res[0].o_msj);
      })
      .finally(() => {
        //this.navCtrl.navigateForward(["mtto-list-recinado"]);
      })
      .catch((err) => {
        console.log('errror:::>>>>>>>>>', err);
      });
    ev.preventDefault();
  }
  async presentToast(message: any) {
    console.log('ingreso toast');

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
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
