import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
//import { ApiImage, MttoRecinadoCables } from "../interfaces/mttoinspcables";
import { HorasExtras } from "src/app/interfaces/rrhh/rrhh-horasextras";
///import { Uid } from '@ionic-native/uid/ngx';
//import { Device } from '@ionic-native/device/ngx';
import { __await } from 'tslib';
import { Storage } from "@ionic/storage";

import { Plugins } from '@capacitor/core';
import { Listservipend, ItemsSelected } from "src/app/interfaces/prod/listservipend";
import { ApiBackDomains } from "src/app/interfaces/ApiConections";

const ITEMS_KEY = 'my-items';
@Injectable({
  providedIn: 'root'
})
export class RrhhHorasExtrasService {
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + 'aw_modulos/rrhh/api/CApiRRHHhorasextras.php';  ///local
  urlApiInf: string= ApiBackDomains.UrlDomainLocal+'aw_modulos/rrhh/api/CApiRRHHhorasextras.php';
  DirectorioImg: string = ApiBackDomains.UrlDomainLocal + 'aw_file/img_tablet/';///test
  public horasextras_: HorasExtras;
  confirmSaveBd: string;
  confirmRequest: any = '';
  ///////////////
  key = '123456';
  public arrayLocalLpedido: Listservipend;
  public ArrayListRequestServ: Observable<any>;
  public counts_rows: number = 0;
  public ArrayItemsSelected: ItemsSelected[] = [];// ItemsSelected;
  public EditArItemsSelected: ItemsSelected[] = [];// ItemsSelected;
  public ArrayItemsSelectedPivot: ItemsSelected;
  o_nres: string = '';
  o_msj: string = '';
  CntAgregado: number;
  _NroCorrelativoTarea: string;
  MsjBd: string;
  idhorasxVueltaOtCab: string = "";//pk transaccion

  data_lista: any;
  public id_tablet: string;
  radioRevisionSelected: string = "";

  ///////////////////////

  constructor(
    public httpClient: HttpClient,
    public http: HttpClient,
    public storage: Storage,
    ///public uid: Uid,
    //private device: Device
  ) { }

  ListFindOts(
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
  ListFindPersonal(InputSearch: string, id_usuario_local: string, id_maquina: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 2,
        s: InputSearch,
        idusu: id_usuario_local,
        id_maquina: id_maquina

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindServicios(InputSearch: string, id_usuario_local: string, id_area: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 3,
        s: InputSearch,
        idusu: id_usuario_local,
        id_area: id_area

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindActividad(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 4
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindMotivo(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 5
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindArea(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 10,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindSupervisor(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 6
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFinDescripcion(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 7
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  async GuardarInfPaso1(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=8', dataPost)
      .toPromise()
  }
  FormFindinftab1(corre_inf_cab: string): Promise<any>{
    let url12: string = this.urlApiInf;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        // idot: (idot),
        acc: 9,
        id: corre_inf_cab
        //idotsolse_otd: idotsolse_otd
      }
    );
    return this.http.post(url12, dataPost).toPromise().then((results) => results);

  }
}
