import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class GlovalProvider {
    public idchecklistcab: string;    

    constructor() {
        console.log('UserProfileService.Constructor invoked.');
        // this.service = DataService.getInstance();
        // console.log('this.service=%s', this.service);


    }

}

export interface CheckListCab {
    codsmg:string,
    modelo:string,
    id_orden_trab_fis_cab:string,
    idchecklistcab:string,
    correlativo_clc:string,
    idordentrabajocab_clc:string,
    idequipo_clc:string,
    idactivos:string,
    fch_ini_montaje_clc :string,
    idestado_checklist_clc :string,
    idtecnico_checlist_clc :string
}

export interface CheckListMotorCab {
idchecklistmotorcab :string,
idchecklistcab_motor :string,
idversion_motor_cmc:string,
idsupervisor_responsable_cmc:string,
idestado_estator_cmc :string,
idestado_checklist_cmc :string,
fch_ejecutado_cmc :string,
codigo_estator_cmc :string
}
