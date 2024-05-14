import { HttpClient } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { Listservipend, ItemsSelected } from "src/app/interfaces/prod/listservipend";
////interfaces/listservipend
import { Storage } from "@ionic/storage";
//import { Uid } from '@ionic-native/uid/ngx';
//import { HttpClient } from '@angular/common/http';
//import { Device } from '@ionic-native/device/ngx';
//import { Plugins } from "@capacitor/core";
//import { Device } from '@capacitor/device';

import { __await } from 'tslib';
import { ApiBackDomains } from "src/app/interfaces/ApiConections";

export enum SearchType {
  all = ''
}
const ITEMS_KEY = 'my-items';
//const ItemsSelectedServ = 'serv_selected';
@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class ProdservicesService {
  //urlApiProd: string = 'https://fuxion.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';
  //urlApiProd: string = 'http://192.168.100.141/erpgeo_hidro//aw_modulos/prod/CApiValesServicios.php';///local
  //urlApiProd: string = 'https://thingproxy.freeboard.io/fetch/https://clon.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';///test
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + "aw_modulos/prod/api/CApiValesServicios.php";
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
  confirmSaveBd: string;
  data_lista: any;
  public id_tablet: string;
  radioRevisionSelected: string = "";
  constructor(
    //public paginalistaprin:ListvalespendPage,
    public httpClient: HttpClient,
    public http: HttpClient,
    public storage: Storage,
    //public uid: Uid,
    //private device: Device,
  ) {
    let localStorage: any;
    console.log('this.device.uuid 1');
    //console.log(this.device.uuid);
    /*this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      this.device.uuid=localStorage.imei;
      console.log(this.device.uuid);
    });*/
    //console.log(this.device.uuid);
    console.log('constructor:::====>prodservices.service.ts');
  }

  llamarDatosApi(titulo: string, type: string, id_device: string,idmenu:string): Promise<any> {
    let url12: string = this.urlApiProd;
    console.log('dentro dellamarDatosApillamarDatosApi:  ');
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: 1,
        tipo: type,
        idtablet: id_device,///this.device.uuid
        idmenu:idmenu
      }
    );

    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );


  }
  async quitar_de_lista_local(items2: ItemsSelected) {
    let url12: string = this.urlApiProd;

    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let user = {
      id: items2.idvaleservidetot,
      name: items2.codsmg,
      avatar: items2.avatar,
      acc: 2
    }
    this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ; ArrayItemsSelected
    this.http.post(url12, user)
      .subscribe(
        result => {
        },
        err => {
          console.log("Error- something is wrong!")
        });
    this.CntAgregado = this.agregar_storage_ok(this.ArrayItemsSelectedPivot);
    //return this.CntAgregado;
  }
  /////quitar del storage
  agregar_storage_ok(items: ItemsSelected): number {
    console.log('agregar_storage_ok(){:::');
    console.log(this.ArrayItemsSelected);
    this.ArrayItemsSelected.push(items);
    this.storage.set(ITEMS_KEY, this.ArrayItemsSelected);
    return this.ArrayItemsSelected.length;
  }
  ////////////////////////
  async agregar_a_lista_local(items2: ItemsSelected) {
    let url12: string = this.urlApiProd;

    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    /*let user = {
      id: items2.idvaleservidetot,
      name: items2.codsmg,
      avatar: items2.avatar,
      acc: 2
    }*/
    this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ;
    /*this.http.post(url12, user)
      .subscribe(
        result => {
        },
        err => {
          console.log("Error- something is wrong!")
        });*/
    //this.CntAgregado = this.add_storage_local_servicios(this.ArrayItemsSelectedPivot);
  }
  //////agregar storage local servicios
  /*add_storage_local_servicios(items: ItemsSelected): number {
    this.ArrayItemsSelected.push(items);
    this.storage.set(ItemsSelectedServ, this.ArrayItemsSelected);
    return this.ArrayItemsSelected.length;
  }*/
  //////////////////////////////////////////rechazar de la lista principal+++++++++++++++++++++++++++++++++++
  async BdRechazarVale(items2: ItemsSelected) {
    let url12: string = this.urlApiProd;
    let user = {
      id: items2.idvaleservidetot,
      name: items2.codsmg,
      avatar: items2.avatar,
      acc: 9
    }
    this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ;
    this.http.post(url12, user)
      .subscribe(
        result => {
        },
        err => {
          console.log("Error- something is wrong!")
        });
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
  //////////////
  //crear
  consultaCantFilasSeleted(): number {
    console.log('this.ArrayItemsSelected:::::>');
    console.log(this.ArrayItemsSelected);
    if (this.ArrayItemsSelected !== null) {
      return this.ArrayItemsSelected.length;
    }
    else {
      this.ArrayItemsSelected = [];
      return 0
    }
  }
  //read
  getItems(): Promise<ItemsSelected[]> {
    console.log(this.storage.length());
    return this.storage.get(ITEMS_KEY);
  }
  getCountItems(): number {
    return this.ArrayItemsSelected.length;
  }
  ///delete
  deleteItems(id: number): Promise<ItemsSelected> {
    return this.storage.get(ITEMS_KEY).then((items: ItemsSelected[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      let toKeep: ItemsSelected[] = [];
      for (let i of items) {
        if (i.idvaleservidetot_i !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

  list_selected() {
    return this.ArrayItemsSelected;
  }
  async iniciar_tarea() {
    let localStorage: any;
    let request_insert: any;
    this.EditArItemsSelected = this.ArrayItemsSelected;

    //const device = await Device.getId()
    //const device = await Device.getInfo();

    this.storage.get('USER_INFO').then((result1) => {
      //console.log(result1);
      localStorage = (result1);
      /////////////RECUPERAR LOCAL STORAGE
      for (let key = 0; key < this.EditArItemsSelected.length; key++) {
        //const element = this.ArrayItemsSelected[key];
        this.EditArItemsSelected[key].idtecnico = localStorage.user_id;
        this.EditArItemsSelected[key].idtablet = 'device.uuid';
        /////////////FIN RECUPERAR LOCAL
      }

      return this.http.post(this.urlApiProd + '?acc=3&rd=' + this.radioRevisionSelected + '&idtablet=' + 'this.device.uuid', this.EditArItemsSelected)
        .subscribe(
          (result_post) => {
            console.log(result_post);
            request_insert = result_post;//.json();
            if (request_insert[0].o_nres == 0) {
              ////////////error
              this._NroCorrelativoTarea = '0';
              this.MsjBd = request_insert[0].o_msj;
              this.idhorasxVueltaOtCab = '0';

            } else {
              this._NroCorrelativoTarea = request_insert[0].o_nres;
              this.idhorasxVueltaOtCab = request_insert[0].param1;
              console.log('::::this.idhorasxVueltaOtCab::::>');
              console.log(this.idhorasxVueltaOtCab);
              for (let key = 0; key < this.ArrayItemsSelected.length; key++) {
                //const element = this.ArrayItemsSelected[key];
                console.log('::::request_insert[0].param1::::>');
                console.log(request_insert[0].param1);
                this.ArrayItemsSelected[key].idhorasxvueltaotcab = request_insert[0].param1;
                /////////////FIN RECUPERAR LOCAL
              }

            }
            this.radioRevisionSelected = "";

          },
          err => {
            console.log("Error- something is wrong!")

          });

    });
  }
  async finalizarTareaSaveBd(paramsToBd: any, role: string)//:Observable<any>
  {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    return this.http.post(url12 + '?acc=4&id=' + this.idhorasxVueltaOtCab + '&role=' + role, paramsToBd)
      .subscribe(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post;//.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.EditArItemsSelected.push();
          this.ArrayItemsSelected.push();
        },
        err => {
          console.log("Error- something is wrong!")

        });
  }
  ///////////////////////PAGINA EJECUTADOS
  retornarListaEjecutados(titulo: string, device: string): Observable<ItemsSelected[]> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s: encodeURI(titulo),
        acc: 1,
        idtablet: device
      }
    );
    return this.httpClient.get<ItemsSelected[]>(url12 + '?acc=5&s=' + encodeURI(titulo) + '&idtablet=' + device).pipe();
  }
  //////////////////////editar tarea
  EditListItemsSeleted(id: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        id: id,
        acc: 7,
        idtablet: 'this.device.uuid'
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );
  }
  /////////////////listar vueltas
  ListarVueltas(id: string, avatar: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        id: id,
        acc: 8,
        idtablet: 'this.device.uuid',
        avatar: avatar
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );
  }
  //////////////////////////////////////////rechazar de la lista principal+++++++++++++++++++++++++++++++++++
  async BdEliminarTicked(items2: ItemsSelected) {
    let url12: string = this.urlApiProd;
    let user = {
      id: items2.idhorasxvueltaotcab,
      name: items2.corre_hvot,
      acc: 10
    }
    //this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ;
    this.http.post(url12, user)
      .subscribe(
        result => {
        },
        err => {
          console.log("Error- something is wrong!")
        });
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
        idtablet: device,//this.device.uuid,
        madre_hija: tipo
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  save_servicios_porinspeccion = async (items2: ItemsSelected[], paramBd: any) => {
    console.log('ver datos de obs');

    console.log(paramBd.values.txtObservaciones);

    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    /*let user = {
      id: items2.idvaleservidetot,
      name: items2.codsmg,
      avatar: items2.avatar,
      acc: 2
    }*/
    let localStorage: any;
    this.storage.get('USER_INFO').then((result1) => {
      localStorage = (result1);
      /////////////RECUPERAR LOCAL STORAGE
      let url12: string = this.urlApiProd + '?acc=12&idtecnico=' + localStorage.user_id + '&idtablet=' + 'this.device.uuid' + '&obs=' + paramBd.values.txtObservaciones;
      //const element = this.ArrayItemsSelected[key];
      //items2[key].idtecnico = localStorage.user_id;
      //items2[key].idtablet = this.device.uuid;
      /////////////FIN RECUPERAR LOCAL

      //this.ArrayItemsSelectedPivot = items2;// [{idvaleservidetot_i:idpk,cantidad:0}] ;

      ///////////////////////////////////////
      this.http.post(url12, items2)
        .subscribe(
          result => {
            console.log('resultado de guardado');
            console.log(result);

            this.o_nres = (result as any)[0].o_nres;
            this.o_msj = (result as any)[0].o_msj
            return result;
          },
          err => {
            console.log("Error- something is wrong!")
          });
    });
    //////////////////////////////////////////////////////////////////////
    //this.CntAgregado = this.agregar_storage_ok(this.ArrayItemsSelectedPivot);
    //return this.CntAgregado;
  }
  /////////////////////////////
  async iniciar_tarea_noprogramado(mod:any, FechaHoraInicio:any, HoraInicio:any, HoraFin:any) {
    let localStorage: any;
    let request_insert: any;
    this.EditArItemsSelected = this.ArrayItemsSelected;
    this.storage.get('USER_INFO').then((result1) => {
      //console.log(result1);
      localStorage = (result1);
      /////////////RECUPERAR LOCAL STORAGE
      for (let key = 0; key < this.EditArItemsSelected.length; key++) {
        //const element = this.ArrayItemsSelected[key];
        this.EditArItemsSelected[key].idtecnico = localStorage.user_id;
        this.EditArItemsSelected[key].idtablet = 'this.device.uuid';
        /////////////FIN RECUPERAR LOCAL
      }
      return this.http.post(this.urlApiProd + '?acc=13&rd=' + this.radioRevisionSelected + '&idtablet=' + 'this.device.uuid' + '&mod=' + mod + '&f=' + FechaHoraInicio + '&hi=' + HoraInicio + '&hf=' + HoraFin, this.EditArItemsSelected)
        .subscribe(
          (result_post) => {
            console.log(result_post);
            request_insert = result_post;//.json();
            if (request_insert[0].o_nres == 0) {
              ////////////error
              this._NroCorrelativoTarea = '0';
              this.MsjBd = request_insert[0].o_msj;
              this.idhorasxVueltaOtCab = '0';

            } else {
              this._NroCorrelativoTarea = request_insert[0].o_nres;
              this.idhorasxVueltaOtCab = request_insert[0].param1;

            }
            this.radioRevisionSelected = "";

          },
          err => {
            console.log("Error- something is wrong!")

          });

    });
  }
  ////////////////////////
  listado_resumen_diario(iduser: string,horainicio_filtro:string): Promise<any> {
    let url12: string = this.urlApiProd;

    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (iduser),
        acc: 14,
        horainicio_filtro: horainicio_filtro,
        idtablet: 'this.device.uuid'
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  ///////////////////
  async iniciar_tarea_x_item(idvaleservidetot: number) {
    let localStorage: any;
    let request_insert: any;
    this.EditArItemsSelected = this.ArrayItemsSelected;
    this.storage.get('USER_INFO').then((result1) => {
      //console.log(result1);
      localStorage = (result1);
      /////////////RECUPERAR LOCAL STORAGE
      for (let key = 0; key < this.EditArItemsSelected.length; key++) {
        //const element = this.ArrayItemsSelected[key];
        this.EditArItemsSelected[key].idtecnico = localStorage.user_id;
        this.EditArItemsSelected[key].idtablet = 'this.device.uuid';
        /////////////FIN RECUPERAR LOCAL
      }

      return this.http.post(this.urlApiProd + '?acc=16&rd=' + this.radioRevisionSelected + '&idtablet=' + 'this.device.uuid' + '&idvaleservidetot=' + idvaleservidetot, this.EditArItemsSelected)
        .subscribe(
          (result_post) => {
            console.log(result_post);
            request_insert = result_post;//.json();
            if (request_insert[0].o_nres == 0) {
              ////////////error
              this._NroCorrelativoTarea = '0';
              this.MsjBd = request_insert[0].o_msj;
              this.idhorasxVueltaOtCab = '0';

            } else {
              ///this.serviceProduccion.ArrayItemsSelected
              for (let key = 0; key < this.ArrayItemsSelected.length; key++) {
                //const element = this.ArrayItemsSelected[key];
                if (idvaleservidetot == this.ArrayItemsSelected[key].idvaleservidetot) {
                  console.log('_______se actualizoooo el item cab___________');
                  console.log(this.ArrayItemsSelected);
                  this.ArrayItemsSelected[key].idhorasxvueltaotcab = request_insert[0].param1;
                }
                /////////////FIN RECUPERAR LOCAL
              }
              //this._NroCorrelativoTarea = request_insert[0].o_nres;
              //this.idhorasxVueltaOtCab = request_insert[0].param1;

            }
            this.radioRevisionSelected = "";

          },
          err => {
            console.log("Error- something is wrong!")

          });

    });
  }

  async finalizarTareaSaveBdxitem(paramsToBd: any, role: string, idvaleservidetot_input: any)//:Observable<any>
  {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let idhorasxvueltaotcab: string = '0';

    for (let key = 0; key < this.ArrayItemsSelected.length; key++) {
      //const element = this.ArrayItemsSelected[key];
      if (idvaleservidetot_input == this.ArrayItemsSelected[key].idvaleservidetot) {
        console.log('_______se actualizoooo el item cab___________');
        console.log(this.ArrayItemsSelected);
        idhorasxvueltaotcab = this.ArrayItemsSelected[key].idhorasxvueltaotcab;
        this.ArrayItemsSelected.splice(key, 1);
      }
      /////////////FIN RECUPERAR LOCAL
    }

    return this.http.post(url12 + '?acc=15&id=' + idvaleservidetot_input + '&role=' + role + '&idhorasxvueltaotcab=' + idhorasxvueltaotcab, paramsToBd)
      .subscribe(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post;//.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.EditArItemsSelected.push();
          this.ArrayItemsSelected.push();
        },
        err => {
          console.log("Error- something is wrong!")

        });
  }
  /////////////////////////////////////////cierre inesperado
  async finalizarTareaSaveBdxitemAutomatico(paramsToBd: any, role: string, idvaleservidetot_input: any)//:Observable<any>
  {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let idhorasxvueltaotcab: string = '0';

    for (let key = 0; key < this.ArrayItemsSelected.length; key++) {
      //const element = this.ArrayItemsSelected[key];
      if (idvaleservidetot_input == this.ArrayItemsSelected[key].idvaleservidetot) {
        console.log('_______se actualizoooo el item cab___________');
        console.log(this.ArrayItemsSelected);
        idhorasxvueltaotcab = this.ArrayItemsSelected[key].idhorasxvueltaotcab;
        //this.ArrayItemsSelected.splice(key,1);
      }
      /////////////FIN RECUPERAR LOCAL
    }

    return this.http.post(url12 + '?acc=22&id=' + idvaleservidetot_input + '&role=' + role + '&idhorasxvueltaotcab=' + idhorasxvueltaotcab, paramsToBd)
      .subscribe(
        (result_post) => {
          console.log(result_post);
          //requestFinalizaBd = result_post;//.json();
          //this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          //this.EditArItemsSelected.push();
          //this.ArrayItemsSelected.push();
        },
        err => {
          console.log("Error- something is wrong!")

        });
  }
  listado_servicio_noprogramado(titulo: string, acc: string, avatar: string, idpieza: string, idtablet: string): Promise<any> {
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
  ///////////////////////PT
  listado_pt_service(titulo: string, type: string, acc: string, tipo: string, idmarca_: string, idpotencia_: string, idtipo_: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: 'this.device.uuid',
        madre_hija: tipo,
        idmarca: idmarca_, idpotencia: idpotencia_, idtipo: idtipo_
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  ///////////////////////marca tipo potencia
  load_cbo_marca_tipo_potencia(equipo: string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (equipo),
        acc: 18,
        idtablet: 'this.device.uuid'
      }
    );
    return this.http.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }
  //////////////
  async finalizarTareaAutomatico()//:Observable<any>
  {
    let requestFinalizaBd: any;
    let paramsToBd: any;
    let url12: string = this.urlApiProd;
    return this.http.post(url12 + '?acc=21&id=' + this.idhorasxVueltaOtCab, paramsToBd)
      .subscribe(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post;//.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.EditArItemsSelected.push();
          this.ArrayItemsSelected.push();
        },
        err => {
          console.log("Error- something is wrong!")

        });
  }


}
