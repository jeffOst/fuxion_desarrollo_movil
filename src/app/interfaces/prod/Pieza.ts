import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProvider {
    public flag_ginicio_masivo: boolean;
    public flag_gfin_masivo: boolean;
}

export interface MSolicitudQc {
    idsolicitudcontrolcab: string,
    idofpterminado_scc: string,
    idsolicitante_scc: string,
    fch_solicitud_scc: string,
    cantidad_scc: number,
    cantidad: number,
    cantidad_atendido: number,
    nota_scc: string,
    idtablet_scc: string,
    descripcion_pt: string,
    codigo_pt: string,
    correorden: string,
    estado: string,
    nombres_tecnico: string,
    acc: string,//save
    Y04001:string,
    Y04002:string,
    Nsemanaofmes:string,
    actividad:string,
    row_selected:string

}
/*
  Y04001	Y04002	correorden	Nsemanaofmes	descrip	fch_solicitud_scc	nombres_solicitante	cantidad_scc	idsolicitudcontrolcab
  */

export interface MPieza {
    maquina: string,
    idmaquina: string,
    idofpterminado: number,
    correorden: string,
    cantidad_ofpt: string,
    fcreacion_ofpt: string,
    Y04001: string,
    Y04002: string,
    avatar: string,
    coloravatar: string,
    estado: string,
    EQUIPOID: number,
    descrip: string,
    codsmg: string,
    fasignado: string,
    nomclase: string,///nom pieza servicio
    nomclase_pt: string,///nom pieza pt
    idclase_pt: string,///nom pieza pt
    cantidad: number,
    tiempo_estandar: number,
    idestado: number,
    CONCOMPONENTE: string,
    codigo_qr: string,
    index: number,
    idmaterial: string,
    idturno: string,
    material: string,
    turno: string,
    nombres_tecnico: string,
    id_personal: string,
    idclase: string,
    actividad: string,
    SEQMASERV: string,
    observacion: string,
    fecha_inicio: string,
    fecha_fin: string,
    fecha_inicio_formato_iso: string,
    fecha_fin_formato_iso: string,
    acc: string,//save
    pk_idservicio: string,
    ////////////////actividad
    hora_ini_acti_otd: string,
    hora_fin_acti_otd: string,
    tiempo: string,
    cant_fin_actividad_otd: string,
    obs_fin_actividad_otd: string,
    idestado_prod_serv_otd: string,
    tecnico: string,
    idTargetMenu: number,
    nomsubfam: string,
    idsubfamilia: string,
    idordenfabricab: string,
    descripcion_pt: string,
    codigo_pt: string,
    idproceso: string,
    proceso: string,
    //////////////////metalizado
    proceso_metalizado:string,
    idproceso_metalizado_ofd:string,
    idservicio_metalizado_ofd:string,
    servicio_metalizado:string,
    cnt_metalizado_obs: number,
    cnt_29012_peso_ini: number,
    cnt_50000_peso_ini: number,
    idasignaestacionof:string,
    cnt_29012_peso_fin: number,
    cnt_50000_peso_fin: number
    ////eje
    idservicio_x_eje_ofd:string,
    servicio_eje:string,
    flag_serv_eje_ms:string,
    ///reproceso
    fecha_reproceso:string,
    idusuario_reproceso:string,
    cantidad_reproceso:string,
    flag_reproceso:string,
    color_reproceso:string,
    idrevisiondet_reproceso:string,
    fechainicio_prod:string,
    fechafin_prod:string,   
    fechainicio: string,
    flag_agregado: string,
    plano_diseno: string,
    motivoPausa: string,
    cantidad_total: any,
    cantidad_revisada: string,
    cantidad_pendiente: string,
    cantidad_ingresar: number,
    idsubestacion_asof: number,
    descripcion_proceso_hr: number,
    idrevisionofd: number,
    codhru: number,
    cnt_pieza_rev_hru: number,
    cnt_pieza_pend_hru: number,
    idrevision_maquina: number,
    flag_historico_actividad: number

}