import { Injectable } from '@angular/core';
@Injectable()
export class GlovalProvider {
    public flag_ginicio_masivo: boolean;
    public flag_gfin_masivo: boolean;
}
/*	EstadoDoc	Y20005	NROREQUISION	Y20061	Y20006	Y20011	Nombre	Y06002	Y06001	Y20012	CORRESMG
1	15	43028	202206890	5730	2022/09/30	41355937	Enviado a Proveedor	LIMA	000	ZARATE SANTOS MAYRA 	5730-22-LIM*/
export interface MAlmacenIngreso {
    CORRESMG: string,
    Y10077: string,
    EstadoDoc: string,
    Y20005: string,
    NROREQUISION: string,
    Y20061: string,///fch emision oc
    Nombre: string,///estado oc
    Y06002: string,
    Y06001: string,
    Y20012: string,//razo social
    SERIE: string,//
    IdUsuarioLocal: string,//
    /////////////////////////detalle
    Y20084: number,
    Y20082: number,
    Y20002: string,
    Y20001: string,
    acc: string,//save
    Y20033: string,////und
    CodCostos: string,
    SEQAPRODET: string,
    SEQAPROCAB: string,
    Y20008: string,//obs
    idordenfabridet: string,
    idordenfabricab: string,
    familia: string,
    cantidad: number,///of
    cant_atendido: number,///of
    cant_recepcion: number,///of
detalle:any
}

