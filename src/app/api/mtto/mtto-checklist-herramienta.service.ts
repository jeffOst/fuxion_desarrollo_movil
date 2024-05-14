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
export class MttoListChecklistHerra {
  urlApiProd: string =
    ApiBackDomains.UrlDomainLocal +
    'aw_modulos/mante/api/CApiCheckListHerramientras.php';
  confirmSaveBd: string;
  confirmRequest: any = '';
  constructor(
    public httpClient: HttpClient,
    public storage: Storage
  ) {}
  ListFindcheck(
    InputSearch: string,
      id_usuario_local: string,
      id_dispositivo: string,
      SelectFiltra: string,
      SelectFiltra2: string,
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 1,
      s: InputSearch,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
      SelectFiltra:SelectFiltra,
      SelectFiltra2:SelectFiltra2,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  cargawin1(
    id_usuario: string,
    idreg: string,
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 2,
      id_usuario: id_usuario,
      idreg: idreg
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  LisTecnicos(InputSearch:string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 3,
        s: InputSearch
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  LisHerramienta(InputSearch:string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 4,
        s: InputSearch
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  NewForm(idusu:string): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 5,
      idusu: idusu
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
}