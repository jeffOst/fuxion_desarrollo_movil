//import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
//import { ApiImage, MttoRecinadoCables } from "../interfaces/mttoinspcables";
import { OrdenTrabajo } from "src/app/interfaces/mtto/mtto-ordentrabajo";
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
export class ProdEntregaBomba {
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + 'aw_modulos/prod/api/CChecklistentregabomb.php';  ///local
//   public OrdenTrabajo_: OrdenTrabajo;
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

  ///////////////////////lista de solses

 
  ListBombasDisponible(InputSearch:string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 1,
        s: InputSearch
        // id_orden_trab_cab2:id_orden_trab_cab2
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  // ListBombasDisponible(
  //   InputSearch: string

  // ): Promise<any> {
  //   let dataPost = JSON.stringify({
  //     acc: 1,
  //     s: InputSearch
  //   });
  //   return this.httpClient
  //     .post(this.urlApiProd, dataPost)
  //     .toPromise()
  //     .then((results) => results);
  // }
}
