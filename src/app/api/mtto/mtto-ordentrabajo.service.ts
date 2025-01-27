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
export class MttoOrdentrabajoService {
  //urlApiProd: string = 'https://thingproxy.freeboard.io/fetch//https://fuxion.geohidraulica.com.pe/aw_modulos/mante/api/CApiOrdenTrabajo.php';///produccion
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + 'aw_modulos/mante/api/CApiOrdenTrabajo.php';  ///local
  urlApiInf: string= ApiBackDomains.UrlDomainLocal+'aw_modulos/mante/api/CApiInformeTablero.php';
  //urlApiProd: string = 'https://thingproxy.freeboard.io/fetch/https://clon.geohidraulica.com.pe/aw_modulos/mante/api/CApiOrdenTrabajo.php';///test
  //DirectorioImg: string = 'http://localhost/erpgeo_hidro/aw_file/img_tablet/';
  //DirectorioImg: string = 'https://fuxion.geohidraulica.com.pe/aw_file/adjuntos/img_recinado/';///prod
  DirectorioImg: string = ApiBackDomains.UrlDomainLocal + 'aw_file/img_tablet/';///test


  public OrdenTrabajo_: OrdenTrabajo;
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

  FAprobacionItemsOt(acc: string, idblockguiaremicab : string): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      idblockguiaremicab: idblockguiaremicab
    });
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }

  FDeleteRowGuiaCabOtis(acc: string,idblockguiaremicab: string): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      idblockguiaremicab: idblockguiaremicab
    });
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }

  //NEW JA
  FListBlockGuiasRemiCabOtis(acc: string, id_oti: string): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      id_oti: id_oti
    });
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }
  //NEW JA
  SaveCheckAtencionDet(
    acc : string,
    idblockguiaremidet: string,
    flag: string,
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      idblockguiaremidet: idblockguiaremidet,
      flag: flag
    });
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }

  // NEW JA
  FCreaDetalleGuiaOti(
    acc : string,
    id_oti : string,
    idblockguiaremicab: string,
  ) : Promise<any>{
    let dataPost = JSON.stringify({
      acc: acc,
      id_oti : id_oti,
      idblockguiaremicab: idblockguiaremicab
    });
    return this.http.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }

  //NEW JA 
  FCreaCabeceraGuiaOti(
    acc : string,
    id_oti : string,
    id_usu : string
  ) : Promise<any>{
    let dataPost = JSON.stringify({
      acc: acc,
      id_oti : id_oti,
      id_usu: id_usu
    });
    return this.http.post(this.urlApiProd, dataPost).toPromise().then(results => results);
  }

  //New JA
  FlistBlockGuiasRemiDetOtis(
    acc : string,
    id_block : string,
    InputSearch: string,
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      id_block : id_block,
      s: InputSearch,
    });
    return this.http.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }
  //NEW JA
  ListFindOtsManto(
    acc : string,
    InputSearch: string,
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: acc,
      s: InputSearch,
    });
    return this.http.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }


  ///////////////////////lista de solses
  load_lista_solse(idot: string, idotsolse_otd: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        idot: (idot),
        acc: 5,
        idtablet: 'this.device.uuid',
        idotsolse_otd: idotsolse_otd
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  FormFindinftab1(corre_inf_cab: string): Promise<any>{
    let url12: string = this.urlApiInf;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        // idot: (idot),
        acc: 1,
        id: corre_inf_cab
        //idotsolse_otd: idotsolse_otd
      }
    );
    return this.http.post(url12, dataPost).toPromise().then((results) => results);

  }
  Formtoggtab1(corre_inf_cab: string): Promise<any>{
    let url12: string = this.urlApiInf;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        // idot: (idot),
        acc: 7,
        id: corre_inf_cab
        //idotsolse_otd: idotsolse_otd
      }
    );
    return this.http.post(url12, dataPost).toPromise().then((results) => results);

  }
  ///////////////////////listado ots
  FListOtPorSolsePieza(titulo: string, type: string, acc: string, tipo: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: 'this.device.uuid',
        madre_hija: tipo
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results)
  }

  ///////////////////////listado ots
  listado_principal_ot(titulo: string, type: string, acc: string, tipo: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: 'this.device.uuid',
        madre_hija: tipo
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results)
  }

  listado_servicio_popup(titulo: string, acc: string, avatar: string, idpieza: string, idtablet: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        avatar: avatar,
        idpieza: idpieza,
        idtablet: 'this.device.uuid',
        idtablet2: idtablet
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  ///////////////////////////
  guardar_servicios_selected_ot(paramsToBd: any, idot: string)//:Observable<any>
  {
    //let requestFinalizaBd: any;
    let dataPost = JSON.stringify(paramsToBd);

    //let options = new RequestOptions({headers: headers});
    console.log('paramsToBd:::>', paramsToBd);
    let url12: string = this.urlApiProd;
    return this.httpClient.post(url12 + '?acc=4&idot=' + idot, dataPost)
      .toPromise().then(results => results);
  }
  ///////////////////////////save solse update
  update_solse_ot(paramsToBd: any, idot: string)//:Observable<any>
  {
    //let requestFinalizaBd: any;
    let dataPost = JSON.stringify(paramsToBd);

    //let options = new RequestOptions({headers: headers});
    console.log('paramsToBd:::>', paramsToBd);
    let url12: string = this.urlApiProd;
    return this.httpClient.post(url12 + '?acc=6&idot=' + idot, dataPost)
      .toPromise().then(results => results);
  }
  ////
  update_solse_ot_qr(paramsToBd: any, idot: string)//:Observable<any>
  {
    //let requestFinalizaBd: any;
    let dataPost = JSON.stringify(paramsToBd);

    //let options = new RequestOptions({headers: headers});
    console.log('paramsToBd:::>', paramsToBd);
    let url12: string = this.urlApiProd;
    return this.httpClient.post(url12 + '?acc=7&idsolse=' + idot, dataPost)
      .toPromise().then(results => results);
  }
  ////////////////////solseeee aqui empiezza

  ///////////////////////equipos
  listado_equipos_service(titulo: string, type: string, acc: string, tipo: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: 'this.device.uuid',
        madre_hija: tipo
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  ///////////////////////marca tipo potencia
  load_lista_servicios(idot: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        idot: (idot),
        acc: 3,
        idtablet: 'this.device.uuid'
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

  ///////////////////////servicios nuevos
  llamarMaestroServicios(titulo: string, type: string, acc: string, tipo: string, device: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: device,//'this.device.uuid',
        madre_hija: tipo
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

  ////////////////////////////////////quitar de la lista seleccionada
  async EjServQuitarItemSelected(items2: ItemsSelected) {
    let url12: string = this.urlApiProd;
    let user = {
      id: items2.idvaleservidetot,
      avatar: items2.avatar,
      acc: 6
    }
    this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ;
    this.http.post(url12, user)
      .subscribe(
        result => {
        },
        err => {
          console.log("Error- something is wrong!")
        });
    this.CntAgregado = this.EjeSerQuitarStorage(this.ArrayItemsSelectedPivot);
    //return this.CntAgregado;
  }
  /////agregar al storageeee
  EjeSerQuitarStorage(items: ItemsSelected): number {
    let index = this.ArrayItemsSelected.indexOf(items);
    if (index > -1) {
      this.ArrayItemsSelected.splice(index, 1);
    }
    this.storage.set(ITEMS_KEY, this.ArrayItemsSelected);
    return this.ArrayItemsSelected.length;
  }
  ///////////////////listga de tipo de OT
  FListCbosDejarEje(idot) {

    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        idot: (idot),
        acc: 9,
        idtablet: 'this.device.uuid'
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

  SaveRecojerPieza(row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindTecnico(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 11,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }
  ListFindEquipo(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 12,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }

  load_cbo_site() {

    let dataPost = JSON.stringify(
      {
        acc: 13

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }

  SaveOtNoProgramada(row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
///////////////////////////////////////////////////////////////////////////////ordenes de trabajo dle fuxion a movil

ListFindInftab(
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
    .post(this.urlApiInf, dataPost)
    .toPromise()
    .then((results) => results);
}



ListFindOts(
  InputSearch: string,
    id_usuario_local: string,
    id_dispositivo: string,
    SelectFiltra: string,
    SelectFiltra2: string,
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 15,
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
ListFindMot(
  InputSearch: string,
    id_usuario_local: string,
    id_dispositivo: string,
    SelectFiltra2: string
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 39,
    s: InputSearch,
    idusu: id_usuario_local,
    iddevice: id_dispositivo,
    SelectFiltra2: SelectFiltra2,
  });
  return this.httpClient
    .post(this.urlApiProd, dataPost)
    .toPromise()
    .then((results) => results);
}
FormFindPaso1(
  id_orden_trab_cab: string,
  id_usuario_local: string,
  id_dispositivo: string
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 16,
    id_orden_trab_cab: id_orden_trab_cab,
    idusu: id_usuario_local,
    iddevice: id_dispositivo,
  });
  return this.httpClient
    .post(this.urlApiProd, dataPost)
    .toPromise()
    .then((results) => results);
}

FormFindPaso2(
  id_orden_trab_cab_2: string
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 37,
    id_orden_trab_cab_2: id_orden_trab_cab_2
  });
  return this.httpClient
    .post(this.urlApiProd, dataPost)
    .toPromise()
    .then((results) => results);
}
FormFindPaso6(
  
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 38
  
  });
  return this.httpClient
    .post(this.urlApiProd, dataPost)
    .toPromise()
    .then((results) => results);
}
FormFindPaso61(
  id_orden_trab_cab:any
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 41,
      id_orden_trab_cab
    
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
FormFindPaso3(
  // id_orden_trab_cab_2: string,
  // codsmg: string,
  // nombre: string
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 38
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
    .post(url12 + '?acc=17', dataPost)
    .toPromise()
}
async GuardarFormPaso5(
  paramsToBd: any, //:Observable<any>
) {
  console.log('Dentro::GuardarFormulario::>', paramsToBd);
  let requestFinalizaBd: any;
  let url12: string = this.urlApiProd;
  let dataPost = JSON.stringify(paramsToBd);
  return this.httpClient
    .post(url12 + '?acc=36', dataPost)
    .toPromise()
}
async GuardarFormPaso6(
  paramsToBd: any //:Observable<any>
) {
  console.log('Dentro::GuardarFormulario::>', paramsToBd);
  let requestFinalizaBd: any;
  let url12: string = this.urlApiProd;
  let dataPost = JSON.stringify(paramsToBd);
  return this.httpClient
    .post(url12 + '?acc=40', dataPost)
    .toPromise()
}
async ElminarlistPaso6(
  paramsToBd: any //:Observable<any>
) {
  console.log('Dentro::GuardarFormulario::>', paramsToBd);
  let requestFinalizaBd: any;
  let url12: string = this.urlApiProd;
  let dataPost = JSON.stringify(paramsToBd);
  return this.httpClient
    .post(url12 + '?acc=42', dataPost)
    .toPromise()
}
async GuardarInfPaso1(
  paramsToBd: any //:Observable<any>
) {
  console.log('Dentro::GuardarFormulario::>', paramsToBd);
  let requestFinalizaBd: any;
  let url12: string = this.urlApiInf;
  let dataPost = JSON.stringify(paramsToBd);
  return this.httpClient
    .post(url12 + '?acc=2', dataPost)
    .toPromise()
}
LoadPdfInformeTecnico(
  idchecklistcab: string
): Promise<any> {
  let dataPost = JSON.stringify({
    acc: 14,
    idchecklistcab: idchecklistcab
  });
  return this.httpClient
    .post(this.urlApiProd, dataPost)
    .toPromise()
    .then((results) => results);

  }

  ListBombasxFabTableros(
    InputSearch: string,
      id_usuario_local: string,
      tipoequipo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 18,
      s: InputSearch,
      idusu: id_usuario_local,
      familia: tipoequipo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  async GuardarNuevoEquipo(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=19', dataPost)
      .toPromise()
  }

  ListRepuestosxBomba(
    idot: string,
      id_usuario_local: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 20,
      idot:idot,
      idusu: id_usuario_local
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  async GuardarFormPaso2(///////fala setear
    row,IdUsuarioLocal
  ) {
    //console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    // let paramsToBd:any={
    //   idservicio:idservicio,idpapa:idpapa,idhijo:idhijo,idusuario:idusuario,acc:9,idclase:idclase,ck:ck
    // }
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(row);
    return this.httpClient
      .post(url12 + '?acc=21&idusu='+IdUsuarioLocal, dataPost)
      .toPromise();
  }

  ///////////////////////equipos
  ///this.serviceProduccion.listadoArticulos(this.search_term_equipo, this.FormModel.idpieza, this.FormModel.cantidad,this.FormModel.toggle).then((res) => {
  listadoArticulos(s: string, idpieza: string, cantidad: string, toggle: string,acc:string,param:string): Promise<any> {
    console.log(s);
    console.log('final',param);
    
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s:s,
        idpieza:idpieza,
        cantidad:cantidad,
        toggle:toggle,
        acc:acc,
        param:param
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

async GuardarArticulo(paramsToBd:any){
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=23', dataPost)
      .toPromise()
  }

  ListServiciosxBomba(
    idot: string,
      id_usuario_local: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 24,
      idot:idot,
      idusu: id_usuario_local
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  ListFindSolse(
    idot: string,
      id_usuario_local: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 26,
      idot:idot,
      idusu: id_usuario_local
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  async GuardarOtTerminado(
    idot: any,idusuario:any
  ) {
    //console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let paramsToBd: any={
      acc:27,
      idot:idot,
      idusuario:idusuario
    };
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 , dataPost)
      .toPromise()
  }

  LoadPdfOrdentrabajo(
    idchecklistcab: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 28,
      idchecklistcab: idchecklistcab
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);

    }

    FLoadMotivoAdicional(
      id_usuario_local: string,
      id_dispositivo: string
    ): Promise<any> {
      let dataPost = JSON.stringify({
        acc: 29,
        idusu: id_usuario_local,
        iddevice: id_dispositivo,
      });
      return this.httpClient
        .post(this.urlApiProd, dataPost)
        .toPromise()
        .then((results) => results);
    }
    ListBombasDisponible(InputSearch:string,id_orden_trab_cab2: string): Promise<any> {
      let dataPost = JSON.stringify(
        {
          acc: 35,
          s: InputSearch,
          id_orden_trab_cab2:id_orden_trab_cab2
        }
      );
      return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
      );
    }
    async FQuitarItem(
      row: any
    ) {
      //console.log('Dentro::GuardarFormulario::>', paramsToBd);
      // let paramsToBd: any={
      //   acc:27,
      //   idot:idot,
      //   idusuario:idusuario
      // };
      let url12: string = this.urlApiProd;
      let dataPost = JSON.stringify(row);
      return this.httpClient
        .post(url12 , dataPost)
        .toPromise()
    }

    ListaPartList(s: string, pd: string, ot: string, im: string, it: string,acc:string,idot:string): Promise<any> {

      let url12: string = this.urlApiProd;
      let dataPost = JSON.stringify(
        {
          s:s,
          pd:pd,
          ot:ot,
          im:im,
          it:it,
          acc:acc,
          idot:idot
        }
      );
      return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
      );

    }

    async GuardarPartList(paramsToBd:any){
      console.log('Dentro::GuardarFormulario::>', paramsToBd);
      let requestFinalizaBd: any;
      let url12: string = this.urlApiProd;
      let dataPost = JSON.stringify(paramsToBd);
      return this.httpClient
        .post(url12 + '?acc=32', dataPost)
        .toPromise()
    }

    async GuardarCargarDetalleOT(
      idot: any,idusuario:any,val:any
    ) {
      //console.log('Dentro::GuardarFormulario::>', paramsToBd);
      let paramsToBd: any={
        acc:33,
        idot:idot,
        idusuario:idusuario,
        val:val
      };
      let url12: string = this.urlApiProd;
      let dataPost = JSON.stringify(paramsToBd);
      return this.httpClient
        .post(url12 , dataPost)
        .toPromise()
    }

}
