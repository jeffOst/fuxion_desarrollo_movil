import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProviderVar{
    public flag_var1 :boolean;
    public flag_var2 :boolean;
 }
export interface MttoInspCables {
    codsmg: string,
    fchregistro_imc:string,
    estado:string,
    usuario:string,
    correlativo_imc:string,
    idinspcablemina:string
}
export interface MttoRecinadoCables {
  codsmg: string,
  fchregistro_rcc:string,
  estado:string,
  usuario:string,
  correlativo_rcc:string,
  Cable1:string,
  Cable2:string,
  idrecinadocablecab:string,
  coloravatar:string,
  avatar:string,
  equipo_entregado:string,
  idrecinadocableentrega:string,
  colorc1:string,
  colorc2:string,
}
export interface ApiImage {
    _id: string;
    name: string;
    createdAt: Date;
    url: string;
  }
  export interface Photo {
    filepath: string;
    webviewPath: string;
  }
  export class PhotoService {
    public photos: Photo[] = [];

    // other code
  }

  export function getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
    }
