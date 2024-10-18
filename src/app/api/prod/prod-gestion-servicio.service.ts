import { HttpClient } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { ApiBackDomains } from "../../interfaces/ApiConections";
import { Storage } from "@ionic/storage";
//import { Uid } from '@ionic-native/uid/ngx';
//import { HttpClient } from '@angular/common/http';
//import { Device } from '@ionic-native/device/ngx';
import { __await } from 'tslib';


export enum SearchType {
  all = ''
}
const ITEMS_KEY = 'my-items';
//const ItemsSelectedServ = 'serv_selected';
@Injectable({
  providedIn: 'root'
})
export class ProdGestionServicioService {
  //urlApiProd: string = 'https://fuxion.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + "aw_modulos/prod/api/CAtencionServicios.php";
  //urlApiProd: string = 'https://thingproxy.freeboard.io/fetch/https://clon.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';///test

  constructor(public httpClient: HttpClient) {

  }
  ListDatos(titulo: string, type: string, id_device: string, idmenu: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: 1,
        tipo: type,
        idtablet: id_device,
        idmenu: idmenu
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }
  //this.FormHtmlJs.idofpterminado,ev.detail.value,this.id_usuario_local,this.id_dispositivo
  FUpdateEstadoServicio(idofpterminado: string, value: string, id_usuario_local: string, id_dispositivo: string, avatar: string, idasignaestacionof: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        idofpterminado: (idofpterminado),
        acc: 2,
        value: value,
        id_usuario_local: id_usuario_local,
        id_dispositivo: id_dispositivo,
        avatar: avatar,
        idasignaestacionof: idasignaestacionof
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }

  ListSolsexQr(idofpterminado: string, value: string, id_usuario_local: string, id_dispositivo: string, avatar: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        idofpterminado: (idofpterminado),
        acc: 2,
        value: value,
        id_usuario_local: id_usuario_local,
        id_dispositivo: id_dispositivo,
        avatar: avatar
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }
  //////////////listado de piezas,material,tecnico,maquina::gui iniciar actividad
  load_cbos_pieza_material_maquina(idtipserv: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {

    let dataPost = JSON.stringify(
      {
        acc: 3,
        id_usuario_local: id_usuario_local,
        id_dispositivo: id_dispositivo,
        idtipserv: idtipserv
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }

  load_cbos_motivo_pausa_maquina(): Promise<any> {

    let dataPost = JSON.stringify(
      {
        acc: 34
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }
  
  ListFindPersonal(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 4,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindServiciosByPieza(InputSearch: string, idpieza: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string, nomclase: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 5,
        s: InputSearch,
        idpieza: idpieza,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo,
        nomclase: nomclase

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  agregarServiciosByPieza(InputSearch: string, idpieza: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string, nomclase: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 32,
        s: InputSearch,
        nomclase: nomclase,
        idpieza: idpieza,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  ListFindPiezaByActividad(InputSearch: string, idpieza: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string, idclase: string, idsubfamilia: string, nomsubfam: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 6,
        s: InputSearch,
        idpieza: idpieza,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo,
        idclase: idclase,
        idsubfamilia: idsubfamilia,
        nomsubfam: nomsubfam

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  SaveInicioActividad(row: any): Promise<any> {
    
    let dataPost = JSON.stringify(
      row
    );

    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  
  SaveHorometroInicio(iduser: string, idmaquina: string, turno: string, horometroInicial: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 35,
        iduser: iduser,
        idmaquina: idmaquina,
        turno: turno,
        horometroInicial: horometroInicial
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  
  UpdateFechaInicioProd(fecha: string, idservicio: string, avatar: string, idusuario: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 28,
        fecha: fecha,
        pk_idservicio: idservicio,
        avatar: avatar,
        idusuario: idusuario
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  UpdateFechaFinProd(fecha: string, idservicio: string, avatar: string, idusuario: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 29,
        fecha: fecha,
        pk_idservicio: idservicio,
        avatar: avatar,
        idusuario: idusuario
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  
  ListFindActividades(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 9,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  ListFindActividadesHistorico(InputSearch: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 31,
        s: InputSearch,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  /////////////////fin clase
  ListFindClaseByPieza(InputSearch: string, idpieza: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 10,
        s: InputSearch,
        idpieza: idpieza,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  /////////////////fin ordfabcab
  ListFindOfByClase(InputSearch: string, idsubfamilia: string, idclase: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 11,
        s: InputSearch,
        idsubfamilia: idsubfamilia,
        idclase: idclase,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  /////////////////fin clase
  ListFindQrByOf(InputSearch: string, idpieza: string, tipServicio: string, id_usuario_local: string, id_dispositivo: string, nomclase: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 12,
        s: InputSearch,
        idpieza: idpieza,
        tipServicio: tipServicio,
        idusu: id_usuario_local,
        iddevice: id_dispositivo,
        nomclase: nomclase

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  //////////////////save solicitud de control de calidad
  SaveControlCalidadByOf(row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
  /////////////////lista solic calidad
  ListFindSolicitudQcByOf(InputSearch: string, idofpterminado: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 14,
        s: InputSearch,
        idofpterminado: idofpterminado,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  ListFindHojaRuta(InputSearch: string, idofpterminado: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc: 33,
        s: InputSearch,
        idofpterminado: idofpterminado,
        idusu: id_usuario_local,
        iddevice: id_dispositivo

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  
  load_cbos_ma00(): Promise<any> {

    let dataPost = JSON.stringify(
      {
        acc: 15
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }
  ///////crea correlativo para reporte de falla
  FCreaCorrelativo(): Promise<any> {
    let dataPost = JSON.stringify(
      { acc: 16 }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
    ////////////////////////guardar reporte de falla
  }

  SaveReporteFalla(row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  SaveRelevo(row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  ///////crea correlativo para reporte de falla
  FCreaCorrelativoRelevo(): Promise<any> {
    let dataPost = JSON.stringify(
      { acc: 18 }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
    ////////////////////////guardar reporte de falla
  }

  //////////////listado sub prrocesos x maquina x pieza y x servicio
  load_cbo_subprocesos(idmaquina: string, nom_pieza: string, servicio: string): Promise<any> {

    let dataPost = JSON.stringify(
      {
        acc: 20,
        idmaquina: idmaquina,
        nom_pieza: nom_pieza,
        servicio: servicio
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }

  //////////////listado sservicio x ejece x off                                                                                              
  load_cbos_any_edit_ini_actvidad(idtipserv: string, id_usuario_local: string, id_dispositivo: string): Promise<any> {

    let dataPost = JSON.stringify(
      {
        acc: 22,
        id_usuario_local: id_usuario_local,
        id_dispositivo: id_dispositivo,
        idtipserv: idtipserv
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );

  }

  ListActividadesxTecnico(iduser: string, horainicio_filtro: string, horafin_filtro: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        iduser: iduser,
        acc: 23,
        horainicio_filtro: horainicio_filtro,
        //id_usuario_local: id_usuario_local,
        horafin_filtro: horafin_filtro

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }

  SaveResumenDia(idusuario, row: any): Promise<any> {
    let dataPost = JSON.stringify(
      row
    );

    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }

  LoadFormDejarPiezasCalidad(idpt) {
    let dataPost = JSON.stringify(
      {
        idpt: idpt,
        acc: 25

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }

  LoadFormIniciaActividad(idpt, avatar) {
    let dataPost = JSON.stringify(
      {
        idpt: idpt,
        avatar: avatar,
        acc: 26

      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
    );
  }

  //Listado de resumen Diario de Horas
  listado_principal_resumen_horas(titulo: string, type: string, acc: string, tipo: string, idusuario: string): Promise<any> {

    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet: 'this.device.uuid',
        madre_hija: tipo,
        idusuario: idusuario
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results)
  }


    //Listado de resumen Diario de Horas
    listado_principal_cabecera(titulo: string, type: string, acc: string, tipo: string, idusuario: string): Promise<any> {

      let dataPost = JSON.stringify(
        {
          s: (titulo),
          acc: acc,
          tipo: type,
          idtablet: 'this.device.uuid',
          madre_hija: tipo,
          idusuario: idusuario
        }
      );
      return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results)
    }

  

}