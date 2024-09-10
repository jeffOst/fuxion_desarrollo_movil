import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { ApiBackDomains } from '../../interfaces/ApiConections';
import { Storage } from '@ionic/storage';

import { ApiImage } from "src/app/interfaces/mtto/mttoinspcables";

@Injectable({
  providedIn: 'root',
})
export class MttoInformeTecnicoService {
  urlApiProd: string =
    ApiBackDomains.UrlDomainLocal +
    'aw_modulos/mante/api/CApiInformeTecnico.php';
    urlApiInf: string =
    ApiBackDomains.UrlDomainLocal +
    'aw_modulos/mante/api/CApiInformeTablero.php';
  confirmSaveBd: string;
  confirmRequest: any = '';
  constructor(
    public httpClient: HttpClient,
    //public http:HTTP,
    public storage: Storage
  ) {}

  /////////////////lista solic calidad
  ListFindOts(
    InputSearch: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 1,
      s: InputSearch,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  /////save checklist cab
  SaveCheckListCab(
    id_orden_trab_cab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 2,
      id_orden_trab_cab: id_orden_trab_cab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  FormFindPaso1(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 3,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  FLoadPiezasAcordion(
    id: string,
    p2: string,
    cod_inf:string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 7,
      id: id,
      p2:p2,
      cod_inf: cod_inf
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }

  FLoadServiciosxPiezas(
    id: string,
    p2: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 8,
      id: id,
      p2:p2
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
      .post(url12 + '?acc=4', dataPost)
      .toPromise()
      // .then(
      //   (result_post) => {
      //     console.log(result_post);
      //     requestFinalizaBd = result_post; //.json();
      //     this.confirmSaveBd = requestFinalizaBd[0].o_nres;
      //     this.confirmRequest = requestFinalizaBd;
      //   },
      //   (err) => {
      //     console.log(err, 'Error- something is wrong!');
      //   }
      // );
  }

  async GuardarinfPaso1(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=2', dataPost)
      .toPromise()
      // .then(
      //   (result_post) => {
      //     console.log(result_post);
      //     requestFinalizaBd = result_post; //.json();
      //     this.confirmSaveBd = requestFinalizaBd[0].o_nres;
      //     this.confirmRequest = requestFinalizaBd;
      //   },
      //   (err) => {
      //     console.log(err, 'Error- something is wrong!');
      //   }
      // );
  }
  async GuardarinfPaso2(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=3', dataPost)
      .toPromise()
  }
  async GuardarinfPaso3(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=4', dataPost)
      .toPromise()
  }
  async GuardarinfPaso4(
    paramsToBd: any //:Observable<any>
  ) {
    console.log('Dentro::GuardarFormulario::>', paramsToBd);
    
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=5', dataPost)
      .toPromise()
  }
  async GuardarinfPaso5(
    paramsToBd: any
  ) {
    //console.log('Dentro::GuardarFormulario::>', paramsToBd);
    
    let requestFinalizaBd: any;
    let url12: string = this.urlApiInf;
    let dataPost = JSON.stringify(paramsToBd);
    console.log('datos enviados',dataPost);
    return this.httpClient
      .post(url12 + '?acc=6',dataPost)
      .toPromise()
  }
  async GuardarFormPaso2(
    idservicio,idpapa,idhijo,idusuario,idclase,ck,cod_material
  ) {
    //console.log('Dentro::GuardarFormulario::>', paramsToBd);
    let requestFinalizaBd: any;
    let paramsToBd:any={
      idservicio:idservicio,idpapa:idpapa,idhijo:idhijo,idusuario:idusuario,acc:9,idclase:idclase,ck:ck,cod_material
    }
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=6', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }
  FormFindPaso3(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 7,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso3(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=8', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  // FormFindPaso4(
  //   idchecklistcab: string,
  //   id_usuario_local: string,
  //   id_dispositivo: string
  // ): Promise<any> {
  //   let dataPost = JSON.stringify({
  //     acc: 9,
  //     idchecklistcab: idchecklistcab,
  //     idusu: id_usuario_local,
  //     iddevice: id_dispositivo,
  //   });
  //   return this.httpClient
  //     .post(this.urlApiProd, dataPost)
  //     .toPromise()
  //     .then((results) => results);
  // }
  // async GuardarFormPaso4(
  //   paramsToBd: any //:Observable<any>
  // ) {
  //   let requestFinalizaBd: any;
  //   let url12: string = this.urlApiProd;
  //   let dataPost = JSON.stringify(paramsToBd);
  //   return this.httpClient
  //     .post(url12 + '?acc=10', dataPost)
  //     .toPromise()
  //     .then(
  //       (result_post) => {
  //         console.log(result_post);
  //         requestFinalizaBd = result_post; //.json();
  //         this.confirmSaveBd = requestFinalizaBd[0].o_nres;
  //         this.confirmRequest = requestFinalizaBd;
  //       },
  //       (err) => {
  //         console.log(err, 'Error- something is wrong!');
  //       }
  //     );
  // }

  FormFindPaso5(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 10,
      id: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  async GuardarFormPaso5(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=11', dataPost)
      .toPromise()
      // .then(
      //   (result_post) => {
      //     console.log(result_post);
      //     requestFinalizaBd = result_post; //.json();
      //     this.confirmSaveBd = requestFinalizaBd[0].o_nres;
      //     this.confirmRequest = requestFinalizaBd;
      //   },
      //   (err) => {
      //     console.log(err, 'Error- something is wrong!');
      //   }
      // );
  }
/////////////////////////////LOAD TAB FINAL
  FormFindPaso6(
    idchecklistcab: string,
    id_usuario_local: string,
    id_dispositivo: string
  ): Promise<any> {
    let dataPost = JSON.stringify({
      acc: 12,
      idchecklistcab: idchecklistcab,
      idusu: id_usuario_local,
      iddevice: id_dispositivo,
    });
    return this.httpClient
      .post(this.urlApiProd, dataPost)
      .toPromise()
      .then((results) => results);
  }
  /////////////guardando analsis del problema
  async GuardarFormPaso6(
    paramsToBd: any //:Observable<any>
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=13', dataPost)
      .toPromise()
      // .then(
      //   (result_post) => {
      //     console.log(result_post);
      //     requestFinalizaBd = result_post; //.json();
      //     this.confirmSaveBd = requestFinalizaBd[0].o_nres;
      //     this.confirmRequest = requestFinalizaBd;
      //   },
      //   (err) => {
      //     console.log(err, 'Error- something is wrong!');
      //   }
      // );
  }

  async GuardarAplicaPaso(
    idchecklistcab: any,
    numeroPaso: any, //:Observable<any>
    ck:any
  ) {
    let requestFinalizaBd: any;
    let url12: string = this.urlApiProd;
    let paramsToBd: any;
    paramsToBd = {
      idchecklistcab: idchecklistcab,
      numeroPaso: numeroPaso,
      ck:ck
    };
    let dataPost = JSON.stringify(paramsToBd);
    return this.httpClient
      .post(url12 + '?acc=15', dataPost)
      .toPromise()
      .then(
        (result_post) => {
          console.log(result_post);
          requestFinalizaBd = result_post; //.json();
          this.confirmSaveBd = requestFinalizaBd[0].o_nres;
          this.confirmRequest = requestFinalizaBd;
        },
        (err) => {
          console.log(err, 'Error- something is wrong!');
        }
      );
  }

  //////////IMAGENES
  getImages(id) {
    return this.httpClient.get<ApiImage[]>(`${this.urlApiProd}?acc=5&id=`+id);
  }

  uploadImage(blobData, id, ext) {
    let formData: FormData = new FormData();
    formData.append('file', blobData,'myimage.'+ext);
    formData.append('id', id);
    formData.append('acc','6');
    formData.append('type', 'image/png');

  return this.httpClient.post(this.urlApiProd, formData);
}


//async
UpLoadImageMultiple(imageRequests, id, ext) {
  try {

    // const headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded',

    // };
    let formData: FormData = new FormData();
    formData.append('id', id);
      formData.append('acc','15');
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

// sendImages() {
//   const url = 'tu_url_de_api';
//   const formData = new FormData();

//   for (let i = 0; i < this.imageBlobs.length; i++) {
//     formData.append('images[]', this.imageBlobs[i], `image_${i}.jpg`);
//   }

//   this.http.post(url, formData).subscribe(
//     response => {
//       console.log('POST request successful', response);
//     },
//     error => {
//       console.error('Error making POST request', error);
//     }
//   );
// }

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

  deleteImage(id) {
    return this.httpClient.delete(`${this.urlApiProd}?acc=16&id=${id}`);
  }

}
