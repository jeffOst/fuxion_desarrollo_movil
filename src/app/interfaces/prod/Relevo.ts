import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProvider {
    public flag_ginicio_masivo: boolean;
    public flag_gfin_masivo: boolean;
}

export interface MRelevo {
    idrelevocab:string,
    correlativo_rc:string,
    fch_registro_rc:string,
    idmaquina_rc:string,
    idtecnico_ingreso_rc:string,
    idtecnico_salida_rc:string,
    idorden_limpieza_rc:string,
    orden_limpieza_rc:string,
    idestado_maquina_rc:string,
    estado_maquina_rc:string,
    idequipo_medicion_rc:string,
    equipo_medicion_rc:string,
    idpieza_proceso_rc:string,
    pieza_proceso_rc:string,
    idcoordinacion_relevo_rc:string,
    coordinacion_relevo_rc:string,
    observacion_rc:string,
    nombres_tecnico_ingreso:string,
    nombres_tecnico_salida:string,
    SEQMASERV:string

}

