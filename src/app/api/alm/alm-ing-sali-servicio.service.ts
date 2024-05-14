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
export class AlmIngSaliServicio {
  //urlApiProd: string = 'https://fuxion.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + "aw_modulos/alm/api/CAlmIngresoSalida.php";
  //urlApiProd: string = 'https://thingproxy.freeboard.io/fetch/https://clon.geohidraulica.com.pe/aw_modulos/prod/CApiValesServicios.php';///test
  constructor(public httpClient: HttpClient) { 

  }
  /////////////////lista de oc by qr
ListFindQrByOc(InputSearch:string,idpieza: string,tipServicio: string,id_usuario_local: string, id_dispositivo: string,nomclase:string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc:1,
      s: InputSearch,
      idpieza: idpieza,      
      tipServicio: tipServicio,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
      nomclase:nomclase
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}
/////////////////lista detalle
ListDetalleGuia(idofpterminado: string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc:2,
      id: idofpterminado,            
      idusu: id_usuario_local,
      iddevice: id_dispositivo
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

FSaveFormIngreso(row:any): Promise<any> {
  let dataPost = JSON.stringify(
    row
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

/////////////////lista solic calidad
ListFindDetalleByOc(idofpterminado: string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc:4,      
      id: idofpterminado,            
      idusu: id_usuario_local,
      iddevice: id_dispositivo
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

//////////////////////falta confirmarrr
 
  //this.FormHtmlJs.idofpterminado,ev.detail.value,this.id_usuario_local,this.id_dispositivo
 



  ListFindActividades(InputSearch:string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
    let dataPost = JSON.stringify(
      {
        acc:9,
        s: InputSearch,        
        idusu: id_usuario_local,
        iddevice: id_dispositivo
        
      }
    );
    return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
    );
  }
/////////////////fin clase
ListFindClaseByPieza(InputSearch:string,idpieza: string,tipServicio: string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc:10,
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
ListFindOfByClase(InputSearch:string,idsubfamilia: string,idclase:string,tipServicio: string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc:11,
      s: InputSearch,
      idsubfamilia: idsubfamilia,
      idclase:idclase,
      tipServicio: tipServicio,
      idusu: id_usuario_local,
      iddevice: id_dispositivo
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}


//////////////////save solicitud de control de calidad
SaveControlCalidadByOf(row:any): Promise<any> {
  let dataPost = JSON.stringify(
    row
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}


load_cbos_ma00(): Promise<any> {
    
  let dataPost = JSON.stringify(
    {
      acc:15
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );

}
///////crea correlativo para reporte de falla
FCreaCorrelativo(): Promise<any> {
  let dataPost = JSON.stringify(
    {acc:16}
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
////////////////////////guardar reporte de falla
}

SaveReporteFalla(row:any): Promise<any> {
  let dataPost = JSON.stringify(
    row
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

SaveRelevo(row:any): Promise<any> {
  let dataPost = JSON.stringify(
    row
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

///////crea correlativo para reporte de falla
FCreaCorrelativoRelevo(): Promise<any> {
  let dataPost = JSON.stringify(
    {acc:18}
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
////////////////////////guardar reporte de falla
}

 //////////////listado sub prrocesos x maquina x pieza y x servicio
 load_cbo_subprocesos(idmaquina: string,nom_pieza: string, servicio: string): Promise<any> {
    
  let dataPost = JSON.stringify(
    {
      acc:20,
      idmaquina: idmaquina,
      nom_pieza: nom_pieza,
      servicio:servicio
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );

}

//////////////listado sservicio x ejece x off                                                                                              
load_cbos_any_edit_ini_actvidad(idtipserv: string,id_usuario_local: string, id_dispositivo: string): Promise<any> {
    
  let dataPost = JSON.stringify(
    {
      acc:22,
      id_usuario_local: id_usuario_local,
      id_dispositivo: id_dispositivo,
      idtipserv:idtipserv
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );

}

ListActividadesxTecnico(iduser: string,horainicio_filtro:string,horafin_filtro:string): Promise<any> {
  let dataPost = JSON.stringify(
    {
      iduser:iduser,
      acc: 23,
      horainicio_filtro: horainicio_filtro,
      //id_usuario_local: id_usuario_local,
      horafin_filtro: horafin_filtro
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
  );
}

SaveResumenDia(idusuario,row:any): Promise<any> {
  let dataPost = JSON.stringify(
    row
  );
  
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}

LoadFormDejarPiezasCalidad(idpt){
  let dataPost = JSON.stringify(
    {
      idpt:idpt,
      acc: 25
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
  );
}

LoadFormIniciaActividad(idpt,avatar){
  let dataPost = JSON.stringify(
    {
      idpt:idpt,
      avatar:avatar,
      acc: 26
      
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results//.json()
  );
}


}
