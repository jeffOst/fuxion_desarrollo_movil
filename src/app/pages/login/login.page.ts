// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
//import { LaravelPassportService } from "laravel-passport";
import { Router } from '@angular/router';
//import { Http } from "@angular/http";
import { LogincustomService } from "../../api/logincustom.service";
import { LoadingController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Network, ConnectionStatus } from "@capacitor/network";
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})

export class LoginPage implements OnInit {
  user: UntypedFormGroup;
  msjErrorBdForm: string= '';
  sites: any;
  loadinProgress: any;
  networkStatus: ConnectionStatus;
  tituloTollBar: string = '';
  constructor(
    //public http:Http,
    public modalController: ModalController,
    public formBuilder: UntypedFormBuilder,
    private storage: Storage,
    private router: Router,
    private logincustomService: LogincustomService,
    public loadingController: LoadingController
  ) {
    this.user = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      siteform: ['000', Validators.required],
      ip: ['fuxion.geohidraulica.com.pe', Validators.required] //'192.168.3.82/erpgeo_hidro'
    })
    //this.load_sites();

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
        this.tituloTollBar = '';
      }
      else {
        this.tituloTollBar = 'Sin conexion a internet';
      }
    })

    this.msjErrorBdForm = '';
    ///console.log('on init');
    this.load_sites();





  }

  ionViewWillEnter() {
    this.msjErrorBdForm = '';

    this.storage.get('IP_MANUAL').then((response) => {
      console.log('ip manual guaddado en storage:>',response);

      if (response) {

        this.user.controls['ip'].setValue(response.ip);

      }
    });

  }
  load_sites() {
    console.log('load_sites()');

    this.logincustomService.service_load_sites().then((res) => {

      this.sites = res;

    }).finally(() => {

    }).catch((err) => {
      console.log('err::service_load_sites::', err);
      this.sites = [{ 'Y06001': '000', 'Y06002': 'LIMA' }]
    })

  }
  //////////////////////////
  showHideAutoLoader() {

    this.loadinProgress = this.loadingController.create({
      message: 'Por favor espere...'
    })
      .then((res) => {
        res.present();



      });

  }

  hideLoader() {


    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }

  serviceLogin() {

    //this.showHideAutoLoader();
    this.loadinProgress = this.loadingController.create({
      message: 'Por favor espere...'
    })
      .then((res) => {
        res.present();

        ///////////antes de progress
        this.logincustomService.device_info().finally(
          () => {

            const user = this.user.value;
            this.logincustomService.login(user.email, user.password, user.siteform,user.ip).then((resp) => {
              this.hideLoader();
            }).finally(() => {

            }).catch((err) => {

            });

          }
        )
        ////////aqui inicia progress
      });

    setTimeout(() => {
      console.log('timeee::::>');
      console.log(this.logincustomService.msjErrorBd);
      this.msjErrorBdForm = this.logincustomService.msjErrorBd;
    }, 1000);

    /*if (user.email!="" && user.password!="") {
      let url:string="https://fuxion.geohidraulica.com.pe/aw_modulos/CApiLogin.php";
      let dataPost=JSON.stringify(
        {
          Login:user.email,
          Password:user.password,
          SITE:'000'///por defaul solo sucursal principal
        }
      );
      this.http.post(url,dataPost).subscribe(
        (resultado)=>{
          console.log(resultado);
          this.router.navigate(['/']);
        }
      )

    } else {

    }*/
  }

  ////////////////////////////laravel
  close() {
    this.modalController.dismiss();
  }

  login() {
    const user = this.user.value;
    /*
      this.laravelPassportService.loginWithEmailAndPassword(user.email,user.password).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/']);

      },
      err=> {
        console.log(err)
      },
      ()=>{
        console.log('completed');
      }
    );*/
  }

}
