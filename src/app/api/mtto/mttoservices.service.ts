import { HttpClient,HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiImage, MttoInspCables } from "src/app/interfaces/mtto/mttoinspcables";
//import { Uid } from '@ionic-native/uid/ngx';
//import { Device } from '@ionic-native/';
//import { Device } from '@capacitor/device';
//import { Device, DevicePlugin   } from '@capacitor/device';
import { __await } from 'tslib';
import { Storage } from "@ionic/storage";
//import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
import { ApiBackDomains } from "src/app/interfaces/ApiConections";
const { Http } = Plugins;
// @Injectable({
//   providedIn: 'root'
// })
@Injectable({ providedIn:'root' })
export class MttoservicesService {
  //urlApiProd: string = 'https://fuxion.geohidraulica.com.pe/aw_modulos/mante/CApiInspeccionCable.php';///produccion
  //urlApiProd: string = 'http://localhost/erpgeo_hidro/aw_modulos/mante/CApiInspeccionCable.php';  ///local
  //urlApiProd: string = 'https://clon.geohidraulica.com.pe/aw_modulos/mante/CApiInspeccionCable.php';///test
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + "aw_modulos/prod/api/CAtencionServicios.php";
  //urlApiProd: string = 'http://192.168.0.108/erpgeo_hidro/aw_modulos/mante/CApiInspeccionCable.php';
  //DirectorioImg: string = 'http://localhost/erpgeo_hidro/aw_file/img_tablet/';
  DirectorioImg: string = ApiBackDomains.UrlDomainLocal +'aw_file/adjuntos/img_inspeccion/';///prod
  //DirectorioImg: string = 'https://clon.geohidraulica.com.pe/aw_file/img_tablet/';///test

  public mttoInspCables: MttoInspCables;
  public ApiImage :MttoInspCables;
  confirmSaveBd:string;
  constructor(
    public httpClient: HttpClient,
    //public http:HTTP,
    public storage: Storage,
    ///public uid: Uid,
    //private device: DevicePlugin
    ) {
      //const device = await Device.getId();
      //console.log(this.device.uuid);
    }
//////////////************************************************* */

getImages(id) {
  return this.httpClient.get<ApiImage[]>(`${this.urlApiProd}?acc=5&id=`+id);
}

uploadImage(blobData, id, ext) {


  let formData: FormData = new FormData();

  formData.append('file', blobData,'myimage.'+ext);
  formData.append('id', id);
  formData.append('acc','3');
  formData.append('type', 'image/png');

///,{headers:headers}
return this.httpClient.post(this.urlApiProd, formData);

}

uploadImage2(blobData, id, ext) {
  console.log('formData:blobData::>',blobData);
  //const formData = new FormData;
  blobData = btoa(blobData);
  let formData = JSON.stringify(
    {
      file:blobData,
      acc:3,
      id:id
    }
  );

  return this.httpClient.post(this.urlApiProd, formData);
}

uploadImageFile(file: File) {
  const ext = file.name.split('.').pop();
  const formData = new FormData();
  formData.append('file', file, `myimage.${ext}`);
  formData.append('name', file.name);

  return this.httpClient.post(`${this.urlApiProd}?acc=4`,formData);
}

deleteImage(id) {
  return this.httpClient.delete(`${this.urlApiProd}?acc=7&id=${id}`);
}

  ///////////////////////PAGINA EJECUTADOS
  ListInspCablesPend(titulo: string): Observable<MttoInspCables[]> {
    let url12: string = this.urlApiProd;

    let dataPost = JSON.stringify(
      {
        s: encodeURI(titulo),
        acc: 1,
        idtablet:'this.device.getId'
      }
    );
    return this.httpClient.get<MttoInspCables[]>(url12 + '?acc=1&s=' + encodeURI(titulo)+'&idtablet='+'this.device.uuid').pipe();
  }
  ////////////////editar/nuevo insp cable
  load_form_insp_cable(id: string,idtecnico:string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        id: id,
        acc: 2,
        idtablet:0,//this.device.uuid,
        idtecnico:idtecnico
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results//.json()
    );
  }

  upload_img(formData:any){

  }

  ///////////////////////equipos
  listado_equipos_service(titulo: string, type: string, acc:string, tipo:string): Promise<any> {
    let url12: string = this.urlApiProd;
    //let url12: string = "http://localhost/erpgeo_hidro/aw_modulos/prod/CApiValesServicios.php";
    let dataPost = JSON.stringify(
      {
        s: (titulo),
        acc: acc,
        tipo: type,
        idtablet:0,//this.device.uuid,
        madre_hija:tipo
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

  async GuardarFormulario(paramsToBd: any)//:Observable<any>
  {
    console.log('Dentro::GuardarFormulario::>',paramsToBd);

    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient.post(url12 + '?acc=6', dataPost)
      .toPromise().then(result_post => {
          console.log(result_post);
          requestFinalizaBd = result_post;//.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
        },
        err => {
          console.log(err,"Error- something is wrong!")

        })
  }

}
