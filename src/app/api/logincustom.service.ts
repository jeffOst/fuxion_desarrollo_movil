import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiBackDomains } from '../interfaces/ApiConections';
//import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class LogincustomService {
  authState = new BehaviorSubject(false);
  logindata: any = {};
  dbData: any;
  nombrecompleto: string = '';
  id_personal: string = '';
  uniqueDeviceIDStr: string = '';
  id_device: string = '';
  name_device: string = '';
  msjErrorBd: string = '';
  array_menu: any;
  array_device: any;
  area: string = '';
  urlApiLogin: string = 'aw_modulos/mae/CApiLogin.php'; ///local
  UrlDominio: string = ApiBackDomains.UrlDomainLocal;
  //urlApiLogin: string = "https://thingproxy.freeboard.io/fetch/https://fuxion.geohidraulica.com.pe/aw_modulos/mae/CApiLogin.php";////produc
  //urlApiLogin: string = "https://thingproxy.freeboard.io/fetch/https://clon.geohidraulica.com.pe/aw_modulos/mae/CApiLogin.php"; ///test

  /////////////constructor
  constructor(
    public http: HttpClient,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) //public androidPermissions: AndroidPermissions,
  //public uid: Uid,
  // private device: Device,
  //private uniqueDeviceID: UniqueDeviceID
  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
    this.logindata.username = '';
    this.logindata.password = '';
  }
  ngOnInit() {
    console.log('ngOnInit:::device_info::');
    //this.device_info(); //jc
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter:::device_info::');
  }
  ///LOAD INFO DEVICE
  async device_info() {
    // const iddevice = await Device.getId()
    // const info = await Device.getInfo();
    console.log('info::', 'info');
    //this.array_device=info;
    this.array_device = {
      appName: 'info.model',
      manufacturer: 'info.manufacturer',
      uuid: 'iddevice.uuid',
      name: 'info.name',
      model: 'info.model',
    };
    console.log('this.array_device', this.array_device);

    this.id_device = 'iddevice.uuid';
    this.name_device = 'info.name';
    await this.storage.create();
    this.storage.set('DEVICE_INFO', this.array_device).then((response) => {
      console.log('set("DEVICE_INFO"', response);
      console.log(this.storage.get('DEVICE_INFO'));
    });
  }
  ////////////////////dentro clase
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  service_load_sites(): Promise<any> {
    console.log('service_load_sites()::::device_info:>>>');
    this.device_info(); //jc
    let url12: string = this.urlApiLogin;
    console.log('service_load_sites:>>>');

    let dataPost = JSON.stringify({
      acc: '3',
      site: '000',
    });
    return this.http
      .post(url12, dataPost)
      .toPromise()
      .then(
        (results) => results //.json()
      );
  }

  async login(user: string, clave: string, site: string, ip: string) {
    ApiBackDomains.UrlDomainLocal = 'http://' + ip + '/'; ////<===setear la neva ip
    console.log(this.urlApiLogin, ApiBackDomains.UrlDomainLocal);
    let url: string = '';
    url = ApiBackDomains.UrlDomainLocal + this.urlApiLogin;
    console.log(this.urlApiLogin, ip);

    this.logindata.username = user;
    this.logindata.password = clave;
    if (this.logindata.username != '' && this.logindata.password != '') {
      //let url: string = "https://fuxion.geohidraulica.com.pe/aw_modulos/CApiLogin.php";
      //let url: string = "https://fuxion.geohidraulica.com.pe/aw_modulos/mae/CApiLogin.php?acc=1";

      url = url + '?acc=1';
      console.log(url);

      let dataPost = JSON.stringify({
        Login: this.logindata.username,
        Password: this.logindata.password,
        SITE: site, //'000'///por defaul solo sucursal principal
      });

      return this.http.post(url, dataPost).subscribe((resultado) => {
        this.dbData = resultado; //.json();

        if (this.dbData === null) {
          this.msjErrorBd = 'No esta registrado el usuario.';
          return false;

          console.log('resultado', resultado);
          console.log(this.dbData);
        }
        if (this.dbData.length > 0) {
          //resultado.json().forEach(resultado => resultjson2);
          this.dbData = resultado; //.json();
          // console.log("this.resultado::");
          // console.log(resultado);
          if (this.dbData === null) {
            this.msjErrorBd = 'No esta registrado el usuario.';
            return false;
          } else {
            // console.log("this.dbData::");
            // console.log(this.dbData);

            for (var i = 0; i < this.dbData.length; i++) {
              this.id_personal = this.dbData[i].id_personal;
              this.nombrecompleto = this.dbData[i].nombrecompleto;
              this.area = this.dbData[i].area_aux_p;
              //console.log(this.dbData[i].nombrecompleto)
              //console.log(this.nombrecompleto)
            }
          }
          ///////////////get Imei
          try {
            // console.log("try{");
            // console.log(this.storage.get("DEVICE_INFO"));

            this.storage.get('DEVICE_INFO').then((result1) => {
              //console.log('name_device:::result1::', result1);
              let imei_: string = '';
              if (result1) {
                imei_ = result1.uuid;
              }
              var dummy_reponse = {
                user_id: this.id_personal,
                user_name: this.nombrecompleto,
                imei: imei_,
                area: this.area,
              };
              this.uniqueDeviceIDStr = 'result1.uuid';
              ///console.log("dummy_reponse ", dummy_reponse);

              this.storage.set('USER_INFO', dummy_reponse).then((response) => {
                this.load_menuxusuario(this.id_personal);
                this.load_permisosxusuario(this.id_personal);

                this.storage.remove("IP_MANUAL").then((response) => {
                  let ArrayIp: any;
                  ArrayIp = { ip: ip };
                  this.storage.set('IP_MANUAL', ArrayIp).then((response) => {});
                  console.log('ArrayIp::',ArrayIp);

                });

              });
            });
          } catch (error) {
            console.log('error', error);
          }
          console.log('try }');

          //////////////////////////////carga de menu

          //////////////////////////////////////////
        } //fin resultado
        else {
          // console.log("resultado::>", resultado);
          this.msjErrorBd = 'No existe el usuario:.';
        }
      });
    } else {
      let resp: any;
      resp[0] = 'Erro debe ingresar datos';
      return resp;
    }
  }

  async load_menuxusuario(username: string) {
    //let url: string = "http://192.168.0.108/erpgeo_hidro/aw_modulos/mae/CApiLogin.php?acc=2";
    //let url: string = this.urlApiLogin + "?acc=2";
    let url: string =
      ApiBackDomains.UrlDomainLocal + this.urlApiLogin + '?acc=2';
    let dataPost = JSON.stringify({
      usuario: username,
      p0: '',
      p1: '000', ///por defaul solo sucursal principal
    });
    console.log('ingreso loadmenuxusuario:208');

    return this.http.post(url, dataPost).subscribe((resultado) => {
      if (resultado) {
        //resultado.json().forEach(resultado => resultjson2);
        this.dbData = resultado; //.json();

        if (this.dbData === null) {
          this.msjErrorBd = 'No existe el usuario.';
          return false;
        } else {
          this.array_menu = this.dbData;
          //console.log("this.array_menu", this.array_menu);
          ///console.log('navigate / ');
          this.storage.set('USER_MENU', this.dbData).then((response) => {});
          this.router.navigate(['/home']);
          this.authState.next(true);
        }
        ///////////////////////redirecciona home

        ///////////////
      } //fin resultado
    });
  }

  async refrescar_prod_load_menuxusuario(username: string, maquina: string) {

    let url: string =
      ApiBackDomains.UrlDomainLocal + this.urlApiLogin + '?acc=5';
    let dataPost = JSON.stringify({
      v1: username,
      v2: maquina,
      v3: '000', //por defaul solo sucursal principal
    });

    return this.http.post(url, dataPost).subscribe((resultado) => {
      if (resultado) {
        this.dbData = resultado; 

        if (this.dbData === null) {
          this.msjErrorBd = 'No existe el usuario.';
          return false;
        } else {
          this.array_menu = this.dbData;
          this.storage.set('USER_MENU', this.dbData).then((response) => {});
          //this.router.navigate(['/home']);
          this.authState.next(true);
        }
        ///////////////////////redirecciona home
      } //fin resultado
    });
  }

  async load_permisosxusuario(username: string) {
    //let url: string = "http://192.168.0.108/erpgeo_hidro/aw_modulos/mae/CApiLogin.php?acc=2";
    let url: string = this.urlApiLogin + '?acc=4';
    let dataPost = JSON.stringify({
      usuario: username,
      p0: '',
      p1: '000', ///por defaul solo sucursal principal
    });

    return this.http.post(url, dataPost).subscribe((resultado) => {
      if (resultado) {
        //resultado.json().forEach(resultado => resultjson2);
        this.dbData = resultado; //.json();
        // if (this.dbData === null) {
        //   this.msjErrorBd = "No existe el usuario.";
        //return false;
        // } else {
        this.storage.set('USER_PERMISO', this.dbData).then((response) => {});
        //}
        ///////////////////////redirecciona home

        ///////////////
      } //fin resultado
    });
  }

  logout() {
    this.storage.remove('USER_MENU').then((response) => {});

    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });

    //this.storage.clear();
  }

  isAuthenticated() {
    return this.authState.value;
  }
  //////////////////////////
  login_v1() {
    if (this.logindata.username != '' && this.logindata.password != '') {
      let url: string =
        'https://fuxion.geohidraulica.com.pe/aw_modulos/CApiLogin.php?acc=1';
      //let url: string = "http://192.168.0.108/erpgeo_hidro/aw_modulos/mae/CApiLogin.php?acc=1";
      let dataPost = JSON.stringify({
        Login: this.logindata.username,
        Password: this.logindata.password,
        SITE: '000', ///por defaul solo sucursal principal
      });
      /*this.http.post(url, dataPost).subscribe(
        (resultado) => {
          return resultado;
        }
      )*/
    } else {
    }
  }

  // async getImei() {
  //   const { hasPermission } = await this.androidPermissions.checkPermission(
  //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
  //   );

  //   if (!hasPermission) {
  //     const result = await this.androidPermissions.requestPermission(
  //       this.androidPermissions.PERMISSION.READ_PHONE_STATE
  //     );

  //     if (!result.hasPermission) {
  //       throw new Error("Permissions required");
  //     }

  //     // ok, a user gave us permission, we can get him identifiers after restart app
  //     return;
  //   }

  //   return this.uid.IMEI;
  // }
}
