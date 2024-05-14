//import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiImage, MttoRecinadoCables } from "src/app/interfaces/mtto/mttoinspcables";
///import { Uid } from '@ionic-native/uid/ngx';
//import { Device } from '@ionic-native/device/ngx';          
import { __await } from 'tslib';
import { Storage } from "@ionic/storage";
//import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
import { ApiBackDomains } from "src/app/interfaces/ApiConections";
@Injectable({
  providedIn: 'root'
})
export class MttorecinadoservicesService {
  //urlApiProd: string = 'http://fuxion.geohidraulica.com.pe/aw_modulos/mante/CApRecinadoCable.php';///produccion
  //urlApiProd: string = 'http://localhost/erpgeo_hidro/aw_modulos/mante/CApRecinadoCable.php';  ///local
  //urlApiProd: string = 'http://clon.geohidraulica.com.pe/aw_modulos/mante/CApRecinadoCable.php';///test
  //DirectorioImg: string = 'http://localhost/erpgeo_hidro/aw_file/img_tablet/';
  DirectorioImg: string = ApiBackDomains.UrlDomainLocal + 'aw_file/adjuntos/img_recinado/';///prod
  //DirectorioImg: string = 'https://clon.geohidraulica.com.pe/aw_file/img_tablet/';///test
  urlApiProd: string = ApiBackDomains.UrlDomainLocal + "aw_modulos/mante/CApRecinadoCable.php";
  public MttoRecinadoCables: MttoRecinadoCables;
  public ApiImage: MttoRecinadoCables;
  confirmSaveBd: string;
  constructor(
    public httpClient: HttpClient,
    //public http:HTTP,
    public storage: Storage,
    //public uid: Uid,
    //private device: Device
  ) {

  }

  ///////////////////////PAGINA EJECUTADOS  
  list_tipo_cable(): Observable<any[]> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        acc: 1,
        idtablet: 'this.device.uuid'
      }
    );
    return this.httpClient.get<any[]>(url12 + '?acc=1&idtablet=' + 'this.device.uuid').pipe();
  }

  getImages(id) {
    return this.httpClient.get<ApiImage[]>(`${this.urlApiProd}?acc=5&id=` + id);
  }

  uploadImage(blobData, id, ext) {
    try {
      let formData: FormData = new FormData();
      //formData.append('file', blobData,'myimage.'+ext);
      formData.append('id', id);
      formData.append('acc', '3');
      formData.append('type', 'image/png');
      for (let i = 0; i < blobData.length; i++) {
        console.log('image::ruta=>::>', blobData[i]);
        ///const base64Data = await this.convertToBase64(image);
        //imageRequests.push({ data:base64Data });
        //formData.append('file', image,'myimage.'+ext);
        formData.append('images[]', blobData[i], `image_${i}.jpg`);
      }
      console.log('Imágenes enviadas exitosamente al API.', formData);
      return this.httpClient.post(this.urlApiProd, formData);
    
    } catch (error) {
      console.error('Error al enviar imágenes al API:', error);
    }
  }

  uploadImage2(blobData, id, ext) {
    console.log('formData:blobData::>', blobData);
    //const formData = new FormData;
    blobData = btoa(blobData);
    let formData = JSON.stringify(
      {
        file: blobData,
        acc: 3,
        id: id
      }
    );

    return this.httpClient.post(this.urlApiProd, formData);
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);

    return this.httpClient.post(`${this.urlApiProd}?acc=4`, formData);
  }

  deleteImage(id) {
    return this.httpClient.delete(`${this.urlApiProd}?acc=7&id=${id}`);
  }

  ///////////////////////PAGINA EJECUTADOS  
  ListInspCablesPend(titulo: string): Observable<MttoRecinadoCables[]> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        s: encodeURI(titulo),
        acc: 1,
        idtablet: 'this.device.uuid'
      }
    );
    return this.httpClient.get<MttoRecinadoCables[]>(url12 + '?acc=8&s=' + encodeURI(titulo) + '&idtablet=' + 'this.device.uuid').pipe();
  }
  ////////////////editar/nuevo insp cable  
  load_form_insp_cable(id: string, idtecnico: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        id: id,
        acc: 2,
        idtablet: 'this.device.uuid',
        idtecnico: idtecnico
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results//.json()
    );
  }
  ////////////////editar/entrega cable
  load_form_entrega_cable(id: string, idtecnico: string): Promise<any> {
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(
      {
        id: id,
        acc: 11,
        idtablet: 'this.device.uuid',
        idtecnico: idtecnico
      }
    );
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results//.json()
    );
  }
  upload_img(formData: any) {

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
    return this.httpClient.post(url12, dataPost).toPromise().then(results => results//.json()
    );

  }

  async GuardarFormulario(paramsToBd: any)//:Observable<any>
  {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
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
          console.log(err, "Error- something is wrong!")

        })
  }
  async GuardarFormEntregaCable(paramsToBd: any)//:Observable<any>
  {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient.post(url12 + '?acc=10', dataPost)
      .toPromise().then(result_post => {
        console.log(result_post);
        requestFinalizaBd = result_post;//.json();
        this.confirmSaveBd = requestFinalizaBd[0].o_nres;
      },
        err => {
          console.log(err, "Error- something is wrong!")

        })
  }


}
