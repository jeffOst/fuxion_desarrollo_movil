import { Injectable } from '@angular/core';
@Injectable()
export class GlovalVar {
   public flag_ginicio_masivo: boolean;
   public flag_gfin_masivo: boolean;
}
export interface InforTablero {
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
   marca: string,
   potencia: string,
   tarranque: string,
   voltaje_a: string

}