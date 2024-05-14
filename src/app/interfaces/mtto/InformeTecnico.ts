import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class GlovalProvider {
    public corre_inf_cab: string;

    constructor() {
        console.log('UserProfileService.Constructor invoked.');
        // this.service = DataService.getInstance();
        // console.log('this.service=%s', this.service);


    }

}

export interface InformeCab {
  fech_de_registro:string,
  corre_fisico:string,///correlativo
  id_persona:string,
  Fech_de_sistema:string,
  fech_de_inicio:string,
  tec_responsable:string,
  Procedencia:string,
  equipo:string,
  equipo_model:string,
  dias_trabajados:string,
  Taller_lima:string,
  operaciones:string,
  estado_informe:string,
  conf_jefe_planta:string,
  conf_super_planta:string,
  Conf_tecnico:string,
  analisis_del_problema:string,
  componentes_de_reclamo:string,
  nro_fotos:string,
  Y06002:string,
  nrofisico_alternativo:string,
  codsmg:string,
  corre_inf_cab:string,///id pk tab la
  idactivos:string,
  idisla_ic:string,
  dias_trabajados_manual:string,
  idresponsabilidad:string,
  falla_primaria_ic:string,
  falla_secundaria_ic:string
}

export interface InformeDet {
idchecklistmotorcab :string,
idchecklistcab_motor :string,
idversion_motor_cmc:string,
idsupervisor_responsable_cmc:string,
idestado_estator_cmc :string,
idestado_checklist_cmc :string,
fch_ejecutado_cmc :string,
codigo_estator_cmc :string
}
