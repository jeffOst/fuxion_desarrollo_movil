import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProvider{
   public flag_ginicio_masivo :boolean;
   public flag_gfin_masivo :boolean;
} 
export interface HorasVuelta {
idhorasxvueltaotcab: number,
corre_hvot: string,
idtecnico_hvot: number,
nota_hvot: string,
idtablet_hvot: string,
idresultado_hvot: number,
finicio_hvot_cab: string,
ffin_hvot_cab: string,
idestado_hvcab: number,
idhorasxvueltaofdet:number,
hora_inicio:string,
hora_fin:string,
total_horas:number
}
export interface Listservipend {
    idvaleservidetot:number,
    cantidad:number,
    nrosolse_ot:string,
    fchvalesrv:string,    
    Y04002:string,
    Y04001:string,
    codsmg:string,
    nombres:string,
    avatar:string,
    coloravatar:string,
    cntvueltas:number
}
export interface ItemsSelected {    
    idvaleservidetot_i:number,
    idvaleservidetot:number,
    cantidad:number,
    nrosolse_ot:string,// 
    fchvalesrv:string,//
    SEQMASERV:string,
    Y04002:string,///nota obs
    Y04001:string,///nota obs
    codsmg:string,
    nombres:string,
    ////////////////
    idtablet:string,
    idtecnico:string,
    imei:string,
    coloravatar:string,
    avatar:string,
    nombre_avatar: string,
    /////////////tickect
    finicio_hvot_cab:string,
    ffin_hvot_cab:string,
    hora_finicio_hvot_cab:string,
    hora_ffin_hvot_cab:string,
    idhorasxvueltaotcab:string,
    nota_hvot:string,
    corre_hvot:string,
    nombres_ejecutor:string,
    ma00estado_nombre:string,
    resumen_Y04002:string,
    horas_ejecutadas:string,
    ma00estado_replicated:string,
    pieza_nombre:string,
    cntvueltas:number,
    marca:string,
    marca_nombre:string,
    potencia:string,
    potencia_nombre:string,
    tipo:string,
    tipo_nombre:string,
    unidad:string,
    actividad:string,
    codigo_qr_os:string
}
/*idvaleservidetot	cantidad_ot	nrosolse_ot	fchvalesrv	Y04002	codsmg	nombres
10511	1	201900116	2019-10-10	Servicio de Arenado de DIFUSOR SUPERIOR de Bomba ABS 58 - J405	GB-58A031	Joel Paredes Lopez*/