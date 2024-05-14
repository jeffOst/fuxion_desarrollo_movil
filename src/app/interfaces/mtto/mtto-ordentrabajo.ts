import { Injectable } from '@angular/core';
@Injectable()
export class GlovalVar {
   public flag_ginicio_masivo: boolean;
   public flag_gfin_masivo: boolean;
}
export interface OrdenTrabajo {
   id_orden_trab_cab:string,
   idhorasxvueltaotcab: number,
   corre_hvot: string,
   idtecnico_hvot: number,
   nota_hvot: string,
   idtablet_hvot: string,
   idresultado_hvot: number,
   finicio_hvot_cab: string,
   ffin_hvot_cab: string,
   idestado_hvcab: number,
   idhorasxvueltaofdet: number,
   hora_inicio: string,
   hora_fin: string,
   total_horas: number,
   ot_id_tecnico: number,
   ot_procedencia: string,
   Y06002: string,
   Y06001: string,
   dias_trabajados_manual: number,
   nombres_tecnico: string,
   nroot: string,
   codequipo: string,
   fcreaot: string,
   idot: string,
   index: number

}
export interface model_solse {
   idotsolse: string,
   corre_otss: string,
   cantidad_otss: number,
   nomclase_os: string,
   idordentrabajo_os: number,
   fcreacion_otss: string,
   codigo_qr_os: string,
   codsmg: string,
   idactivos: string,
   ot_fech_inicio_labor: string,
   nomsubfam: string,
   idtipo_mp_os: any,
   tipo_ot: any,
   acc: string,
   idusuario_recojo_os: string,
   fch_recojo_os: string
}
export interface model_bomba {

   id_orden_trab_cab:string,
   nombre:string,
   codsmg: string
}
