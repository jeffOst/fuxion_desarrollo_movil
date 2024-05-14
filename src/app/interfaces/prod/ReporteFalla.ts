import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProvider {
    public flag_ginicio_masivo: boolean;
    public flag_gfin_masivo: boolean;
}

export interface MReporteFallaCab {
idreportefallacab:string,
correlativo_rfc:string,
fch_registro_rfc:string,
idmaquina_rfc:string,
idtecnico_rfc:string,
idtipofalla_rfc:string,
descripcion_rfc:string,
se_solicita_rfc:string,
acc:string,
maquina:string,
nombres_tecnico:string,
falla:string

}

