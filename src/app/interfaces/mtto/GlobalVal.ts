import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class GlovalProvider {
    public idchecklistcab: string;
    public  checklist_paso1_apli: string;
    public 	checklist_paso2_apli: string;
    public 	checklist_paso3_apli: string;
    public 	checklist_paso4_apli: string;
    public 	checklist_paso5_apli: string;
    public 	checklist_paso6_apli: string;
    public 	checklist_paso_pivot: string;
    public 	corre_inf_cab: string;
    public 	id_orden_trab_cab: string;
    public 	ot_estado_general:any;
    public 	ot_rep_fab:any;

    public 	tipo:any;
    public 	modelo:any;
    public 	marca:any;
    public 	potencia:any;
    public 	nombre_partlist_otc:any;
    public nom_configuracion_exm:any;
    public tipo_partlist_otc:any;
    public fab_rep:any;
    public global_user_id:any;
    public global_user_area:any;
    public global_permiso_80:any;
    public global_user_maquina:any;


    constructor() {
        console.log('UserProfileService.Constructor invoked.');
        // this.service = DataService.getInstance();
        // console.log('this.service=%s', this.service);


    }

}
