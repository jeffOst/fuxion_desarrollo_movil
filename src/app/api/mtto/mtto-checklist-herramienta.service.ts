import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { ApiImage } from "src/app/interfaces/mtto/mttoinspcables";
import { ApiBackDomains } from '../../interfaces/ApiConections';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class MttoListChecklistHerra {
  urlApiProd: string =ApiBackDomains.UrlDomainLocal +'aw_modulos/mante/api/CApiCheckListHerramientras.php';
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
  NewForm(idusu:string,cod:any): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 5,
      idusu: idusu,
      cod: cod
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso1(
    paramsToBd: any, //:Observable<any>
    idregistro: string
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    //let dataPost = JSON.stringify(paramsToBd);
    let dataPost = JSON.stringify(
      {
        paramsToBd: paramsToBd,
        idregistro: idregistro
      });
      console.log('dataPost',dataPost);
      
    return this.httpClient
      .post(url12 + '?acc=6', dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso2(row: any, IdUsuarioLocal: any, stado: any) {
    let url12: string = this.urlApiProd;
  
    let dataPost = {
      row: row,
      idestado: stado, // Aquí incluyes idestado en los datos que envías
      IdUsuarioLocal: IdUsuarioLocal
    };
  
    return this.httpClient
      .post(url12 + '?acc=7', JSON.stringify(dataPost))
      .toPromise();
  }
  async GuardarlistHerra(row: any, IdUsuarioLocal: any, stado: any,idregistro: any) {
    let url12: string = this.urlApiProd;
  
    let dataPost = {
      row: row,
      idestado: stado, // Aquí incluyes idestado en los datos que envías
      IdUsuarioLocal: IdUsuarioLocal,
      idregistro: idregistro
    };
  
    return this.httpClient
      .post(url12 + '?acc=13', JSON.stringify(dataPost))
      .toPromise();
  }
  uploadImage(blobData, id, ext) {
    let formData: FormData = new FormData();
    formData.append('file', blobData,'myimage.'+ext);
    formData.append('id', id);
    formData.append('acc','8');
    formData.append('type', 'image/png');

  return this.httpClient.post(this.urlApiProd, formData);
}

getImages(id) {
  return this.httpClient.get<ApiImage[]>(`${this.urlApiProd}?acc=9&id=`+id);
}
UpLoadImageMultiple(imageRequests, id, ext) {
  try {

    // const headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded',

    // };
    let formData: FormData = new FormData();
    formData.append('id', id);
      formData.append('acc','10');
      formData.append('type', 'image/png');

    //for (const image of imageRequests) {
      for (let i = 0; i < imageRequests.length; i++) {
      console.log('image::ruta=>::>',imageRequests[i]);
      ///const base64Data = await this.convertToBase64(image);
      //imageRequests.push({ data:base64Data });
      //formData.append('file', image,'myimage.'+ext);
      formData.append('images[]', imageRequests[i], `image_${i}.jpg`);
    }

    //await  this.httpClient.post(`${this.urlApiProd}?acc=15&id=`+id+`fio=`, imageRequests,{ headers }).toPromise();
    return this.httpClient.post(this.urlApiProd, formData);
    console.log('Imágenes enviadas exitosamente al API.',formData);
  } catch (error) {
    console.error('Error al enviar imágenes al API:', error);
  }
}
deleteImage(id) {
  return this.httpClient.delete(`${this.urlApiProd}?acc=11&id=${id}`);
}
Lisherra(InputSearch:string,usuario:any,idregistro:any): Promise<any> {
  let dataPost = JSON.stringify(
    {
      acc: 12,
      s: InputSearch,
      usuario: usuario,
      idregistro: idregistro
    }
  );
  return this.httpClient.post(this.urlApiProd, dataPost).toPromise().then(results => results
  );
}
}
