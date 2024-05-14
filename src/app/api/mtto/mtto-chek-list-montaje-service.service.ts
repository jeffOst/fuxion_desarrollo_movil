import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { ApiBackDomains } from '../../interfaces/ApiConections';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class MttoChekListMontajeService {
  urlApiProd: string =
    ApiBackDomains.UrlDomainLocal +
    'aw_modulos/mante/api/CApiCheckListMontaje.php';
  confirmSaveBd: string;
  confirmRequest: any = '';
  constructor(
    public httpClient: HttpClient,
    //public http:HTTP,
    public storage: Storage
  ) {}

  /////////////////lista solic calidad
  ListFindOts(
    InputSearch: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 1,
      s: InputSearch,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  /////save checklist cab
  SaveCheckListCab(
    id_orden_trab_cab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 2,
      id_orden_trab_cab: id_orden_trab_cab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  FormFindPaso1(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 3,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  FormFindPaso2(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 5,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  async GuardarFormPaso1(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=4', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  async GuardarFormPaso2(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=6', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }
  FormFindPaso3(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 7,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso3(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=8', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  FormFindPaso4(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 9,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso4(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=10', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  FormFindPaso5(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 11,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso5(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=12', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  FormFindPaso6(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 13,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso6(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=14', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  async GuardarAplicaPaso(
    idchecklistcab: any,
    numeroPaso: any, //:Observable<any>
    ck:any
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let paramsToBd: any;
    paramsToBd = {
      idchecklistcab: idchecklistcab,
      numeroPaso: numeroPaso,
      ck:ck
    };
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=15', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }
}
