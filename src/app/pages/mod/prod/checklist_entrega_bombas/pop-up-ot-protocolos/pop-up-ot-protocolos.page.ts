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
    private loadingCtrl: LoadingController,
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
  FCloseModal(){
    this.FOnCloseModelWithoutData();
  }
  ionViewDidEnter(){
    this.FFindRows();
  }
  FFindRows(){
    const loading = this.loadingCtrl.create({
      message: 'Cargando lista...',
      translucent: true
    }).then(
      loading => {
        loading.present();
        this.ApiService.ListBombasDisponible(this.NgModInputSearch).then((res) => {
          this.DataSetGrid = res;
        }).finally(() => {
          this.loadingCtrl.dismiss();
        });
      });
  }
  FSelectedItem(id:string,nombres:string){
    this.FOnCloseModel(id,nombres);

  }
  async FOnCloseModel(id,nombres){
    const onClosedData:any = {
      id:id,
      nombres:nombres
    };
    console.log(
      onClosedData
    );
    
    await this.modalCtrl.dismiss(onClosedData);

  }
  async FOnCloseModelWithoutData() {
    await this.modalCtrl.dismiss(); // No pasa ningún dato
}
}
