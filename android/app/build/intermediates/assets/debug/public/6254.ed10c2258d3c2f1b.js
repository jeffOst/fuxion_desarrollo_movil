"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6254,1456],{3951:(N,v,h)=>{h.d(v,{A:()=>C});const C=(0,h(7423).fo)("Browser",{web:()=>h.e(6874).then(h.bind(h,6874)).then(f=>new f.BrowserWeb)})},1456:(N,v,h)=>{h.d(v,{k:()=>t});var g=h(5861),C=h(4053),f=h(8256),E=h(529),b=h(849);let t=(()=>{class T{constructor(i,a,r){this.httpClient=i,this.http=a,this.storage=r,this.urlApiProd=C.N.UrlDomainLocal+"aw_modulos/mante/api/CApiOrdenTrabajo.php",this.DirectorioImg=C.N.UrlDomainLocal+"aw_file/img_tablet/",this.confirmRequest="",this.key="123456",this.counts_rows=0,this.ArrayItemsSelected=[],this.EditArItemsSelected=[],this.o_nres="",this.o_msj="",this.idhorasxVueltaOtCab="",this.radioRevisionSelected=""}load_lista_solse(i,a){let r=this.urlApiProd,l=JSON.stringify({idot:i,acc:5,idtablet:"this.device.uuid",idotsolse_otd:a});return this.http.post(r,l).toPromise().then(c=>c)}FListOtPorSolsePieza(i,a,r,l){let c=this.urlApiProd,u=JSON.stringify({s:i,acc:r,tipo:a,idtablet:"this.device.uuid",madre_hija:l});return this.httpClient.post(c,u).toPromise().then(m=>m)}listado_principal_ot(i,a,r,l){let c=this.urlApiProd,u=JSON.stringify({s:i,acc:r,tipo:a,idtablet:"this.device.uuid",madre_hija:l});return this.httpClient.post(c,u).toPromise().then(m=>m)}listado_servicio_popup(i,a,r,l,c){let u=this.urlApiProd,m=JSON.stringify({s:i,acc:a,avatar:r,idpieza:l,idtablet:"this.device.uuid",idtablet2:c});return this.http.post(u,m).toPromise().then(P=>P)}guardar_servicios_selected_ot(i,a){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=4&idot="+a,r).toPromise().then(c=>c)}update_solse_ot(i,a){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=6&idot="+a,r).toPromise().then(c=>c)}update_solse_ot_qr(i,a){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=7&idsolse="+a,r).toPromise().then(c=>c)}listado_equipos_service(i,a,r,l){let c=this.urlApiProd,u=JSON.stringify({s:i,acc:r,tipo:a,idtablet:"this.device.uuid",madre_hija:l});return this.http.post(c,u).toPromise().then(m=>m)}load_lista_servicios(i){let a=this.urlApiProd,r=JSON.stringify({idot:i,acc:3,idtablet:"this.device.uuid"});return this.http.post(a,r).toPromise().then(l=>l)}llamarMaestroServicios(i,a,r,l,c){let u=this.urlApiProd,m=JSON.stringify({s:i,acc:r,tipo:a,idtablet:c,madre_hija:l});return this.http.post(u,m).toPromise().then(P=>P)}EjServQuitarItemSelected(i){var a=this;return(0,g.Z)(function*(){let r=a.urlApiProd,l={id:i.idvaleservidetot,avatar:i.avatar,acc:6};a.ArrayItemsSelectedPivot=i,a.http.post(r,l).subscribe(c=>{},c=>{console.log("Error- something is wrong!")}),a.CntAgregado=a.EjeSerQuitarStorage(a.ArrayItemsSelectedPivot)})()}EjeSerQuitarStorage(i){let a=this.ArrayItemsSelected.indexOf(i);return a>-1&&this.ArrayItemsSelected.splice(a,1),this.storage.set("my-items",this.ArrayItemsSelected),this.ArrayItemsSelected.length}FListCbosDejarEje(i){let a=this.urlApiProd,r=JSON.stringify({idot:i,acc:9,idtablet:"this.device.uuid"});return this.http.post(a,r).toPromise().then(l=>l)}SaveRecojerPieza(i){let a=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,a).toPromise().then(r=>r)}ListFindTecnico(i,a,r){let l=JSON.stringify({acc:11,s:i,idusu:a,iddevice:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(c=>c)}ListFindEquipo(i,a,r){let l=JSON.stringify({acc:12,s:i,idusu:a,iddevice:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(c=>c)}load_cbo_site(){let i=JSON.stringify({acc:13});return this.httpClient.post(this.urlApiProd,i).toPromise().then(a=>a)}SaveOtNoProgramada(i){let a=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,a).toPromise().then(r=>r)}ListFindOts(i,a,r){let l=JSON.stringify({acc:15,s:i,idusu:a,iddevice:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(c=>c)}FormFindPaso1(i,a,r){let l=JSON.stringify({acc:16,id_orden_trab_cab:i,idusu:a,iddevice:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(c=>c)}GuardarFormPaso1(i){var a=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let l=a.urlApiProd,c=JSON.stringify(i);return a.httpClient.post(l+"?acc=17",c).toPromise()})()}LoadPdfInformeTecnico(i){let a=JSON.stringify({acc:14,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,a).toPromise().then(r=>r)}ListBombasxFabTableros(i,a,r){let l=JSON.stringify({acc:18,s:i,idusu:a,familia:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(c=>c)}GuardarNuevoEquipo(i){var a=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let l=a.urlApiProd,c=JSON.stringify(i);return a.httpClient.post(l+"?acc=19",c).toPromise()})()}ListRepuestosxBomba(i,a){let r=JSON.stringify({acc:20,idot:i,idusu:a});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}GuardarFormPaso2(i,a){var r=this;return(0,g.Z)(function*(){let c=r.urlApiProd,u=JSON.stringify(i);return r.httpClient.post(c+"?acc=21&idusu="+a,u).toPromise()})()}listadoArticulos(i,a,r,l,c){console.log(i);let u=this.urlApiProd,m=JSON.stringify({s:i,idpieza:a,cantidad:r,toggle:l,acc:c});return this.http.post(u,m).toPromise().then(P=>P)}GuardarArticulo(i){var a=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let l=a.urlApiProd,c=JSON.stringify(i);return a.httpClient.post(l+"?acc=23",c).toPromise()})()}ListServiciosxBomba(i,a){let r=JSON.stringify({acc:24,idot:i,idusu:a});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListFindSolse(i,a){let r=JSON.stringify({acc:26,idot:i,idusu:a});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}GuardarOtTerminado(i,a){var r=this;return(0,g.Z)(function*(){let c=r.urlApiProd,u=JSON.stringify({acc:27,idot:i,idusuario:a});return r.httpClient.post(c,u).toPromise()})()}LoadPdfOrdentrabajo(i){let a=JSON.stringify({acc:28,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,a).toPromise().then(r=>r)}FLoadMotivoAdicional(i,a){let r=JSON.stringify({acc:29,idusu:i,iddevice:a});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}FQuitarItem(i){var a=this;return(0,g.Z)(function*(){let r=a.urlApiProd,l=JSON.stringify(i);return a.httpClient.post(r,l).toPromise()})()}ListaPartList(i,a,r,l,c,u,m){let P=this.urlApiProd,A=JSON.stringify({s:i,pd:a,ot:r,im:l,it:c,acc:u,idot:m});return this.http.post(P,A).toPromise().then(S=>S)}GuardarPartList(i){var a=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let l=a.urlApiProd,c=JSON.stringify(i);return a.httpClient.post(l+"?acc=32",c).toPromise()})()}}return T.\u0275fac=function(i){return new(i||T)(f.LFG(E.eN),f.LFG(E.eN),f.LFG(b.K))},T.\u0275prov=f.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},6254:(N,v,h)=>{h.r(v),h.d(v,{MttoWinOrdenTrabajo1Page:()=>H});var g=h(5861),C=h(3951),f=h(6895),E=h(4053),b=h(433),p=h(5562),t=h(8256),T=h(1456),O=h(849),i=h(1407),a=h(7883);function r(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function l(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tipo Orden de Trabajo"),t.qZA(),t.TgZ(4,"ion-select",17),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTipoOt(o,0))}),t.YNc(5,r,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.TipoOtPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTipoOt)}}function c(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function u(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function m(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tipo Bomba"),t.qZA(),t.TgZ(4,"ion-select",21),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTipoBomba(o,0))}),t.YNc(5,u,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.TipoBombaPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTipoBomba)}}function P(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function A(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function S(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Material:"),t.qZA(),t.TgZ(4,"ion-select",22),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTipoMaterial(o,0))}),t.YNc(5,A,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.MaterialPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsMaterial)}}function j(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function J(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function R(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Motor:"),t.qZA(),t.TgZ(4,"ion-select",23),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeMotor(o,0))}),t.YNc(5,J,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.MotorPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsMotor)}}function y(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function L(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Voltaje:"),t.qZA(),t.TgZ(4,"ion-select",24),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeVoltaje(o,0))}),t.YNc(5,y,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.VoltajePivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsVoltaje)}}function V(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function I(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tipo de Potencia:"),t.qZA(),t.TgZ(4,"ion-select",25),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangePotencia(o,0))}),t.YNc(5,V,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.PotenciaPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTipoPotencia)}}function U(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function q(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function W(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tipo de Equipamiento:"),t.qZA(),t.TgZ(4,"ion-select",26),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTipoEquipamiento(o,0))}),t.YNc(5,q,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.TipoEquipamientoPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTipoEquipamiento)}}function Q(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function k(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function B(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Estandar:"),t.qZA(),t.TgZ(4,"ion-select",27),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeEstandar(o,0))}),t.YNc(5,k,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.EstandarPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsEstandar)}}function Y(n,_){1&n&&(t.TgZ(0,"div",20),t._uU(1," Falta seleccionar este campo "),t.qZA())}function w(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function G(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tension de Fuerza:"),t.qZA(),t.TgZ(4,"ion-select",28),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTensionFuerza(o,0))}),t.YNc(5,w,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.TensionFuerzaPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTensionFuerza)}}function K(n,_){if(1&n&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.codigo),t.xp6(1),t.hij("",e.nombre," ")}}function z(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),t._uU(3,"Tension de Mando:"),t.qZA(),t.TgZ(4,"ion-select",29),t.NdJ("ionChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.FSelectChangeTensionMando(o,0))}),t.YNc(5,K,2,2,"ion-select-option",18),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("selectedText",e.TensionMandoPivotSelectedText),t.xp6(1),t.Q6J("ngForOf",e.DsTensionMando)}}let H=(()=>{class n{constructor(e,s,o,d,F,Z,$,D,X,tt){let x;if(this.formBuilder=e,this.navCtrl=s,this.loadingController=o,this.ApiService=d,this.storage=F,this.alertController=Z,this.router=$,this.globalVal=D,this.ref=X,this.actionSheetCtrl=tt,this.disableButtonPaso1=!0,this.checklist_paso1_apli_ck=!1,this.aisla_tierra_apl_ck=!0,this.aisla_entre_fases_apl_ck=!0,this.repara_chapa_apl_ck=!0,this.montaje_estator_apl_ck=!0,this.imgs=[],this.images=[],this.DirectorioFotos=E.N.UrlDomainLocal+"aw_file/adjuntos/",this.imageBlobs=[],this.ItemVisibleBomba=!1,this.ItemVisibleTablero=!1,this.storage.create(),this.storage.get("USER_INFO").then(M=>{x=M,this.NombresUsuarioLocal=x.user_name,this.IdUsuarioLocal=x.user_id,this.storage.get("DEVICE_INFO").then(et=>{x=et,this.NombreDispositivo=x.name,this.IdDispositivo=x.uuid})}),this.FormCheckListPaso1=this.formBuilder.group({id_orden_trab_fis_cab:[""],idtipo_otc:[""],ot_bomba:[""],Y04001:[""],codsmg:["",b.kI.required],Y04002:[""],ot_id_superv_planta:[""],familia:[""],id_tipo_material_ot:[""],id_tipo_equipamiento_ot:[""],id_estandar_ot:[""],id_tension_fuerza_ot:[""],id_tension_mando_ot:[""],ot_estado_general:[""],descrip:[""],id_orden_trab_cab:["",b.kI.required],ot_idordentrabprev:[""],ot_tipo_de_oti:[""],ot_procedencia:[""],ot_estado:[""],ot_id_tecnico:[""],ot_id_informe_tec:[""],ot_nota:[""],Y06002:[""],ot_fech_fin_labor:[""],ot_fech_h_inicio_labor:[""],ot_fech_inicio_labor:[""],ot_fech_h_fin_labor:[""],SEQMA04:[""],corre_inf_cab_otc:[""],corre_fisico:[""],dias_trabajados:[""],idestado_cerrado:[""],idestado_bloquear_otc:[""],tipobomba_otc:[""],idordenfabricab_otc:[""],voltaje_ot:[""],motor_ot:[""],potencia:[""],rep_fab:[""],idpartlist_otc:[""],nombre_partlist_otc:[""],tipo_partlist_otc:[""]}),console.log(this.router.getCurrentNavigation().extras),""==this.globalVal.checklist_paso_pivot)try{this.navParamsAny=this.router.getCurrentNavigation().extras.state.Row,D.id_orden_trab_cab=this.navParamsAny.id_orden_trab_cab,D.ot_rep_fab=this.navParamsAny.rep_fab,"1"==this.navParamsAny.familia?(console.log("ingreso familia bomba!!!"),this.ItemVisibleBomba=!0,this.ItemVisibleTablero=!1,this.FormCheckListPaso1.get("tipobomba_otc").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("tipobomba_otc").updateValueAndValidity(),this.FormCheckListPaso1.get("idtipo_otc").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("idtipo_otc").updateValueAndValidity(),this.FormCheckListPaso1.get("id_tipo_material_ot").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("id_tipo_material_ot").updateValueAndValidity()):"2"==this.navParamsAny.familia&&(this.ItemVisibleBomba=!1,this.ItemVisibleTablero=!0,this.FormCheckListPaso1.get("id_tipo_equipamiento_ot").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("id_tipo_equipamiento_ot").updateValueAndValidity(),this.FormCheckListPaso1.get("id_estandar_ot").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("id_estandar_ot").updateValueAndValidity(),this.FormCheckListPaso1.get("potencia").setValidators([this.valorDiferenteDeCero]),this.FormCheckListPaso1.get("potencia").updateValueAndValidity())}catch(M){console.log(M),this.id_orden_trab_cab=D.id_orden_trab_cab}else this.id_orden_trab_cab=D.id_orden_trab_cab}onTouched(e){console.log(e)}valorDiferenteDeCero(e){const s=e.value;return null==s||""===s||0===s||"0"===s?{valorNoValido:!0}:null}FLoadForms(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(s=>{s.present(),this.id_orden_trab_cab=this.globalVal.id_orden_trab_cab,console.log(this.id_orden_trab_cab),this.ApiService.FormFindPaso1(this.id_orden_trab_cab,"1","H").then(o=>{this.EditDataRest=o.form;try{this.FormCheckListPaso1.setValue({id_orden_trab_fis_cab:this.EditDataRest[0].id_orden_trab_fis_cab,idtipo_otc:this.EditDataRest[0].idtipo_otc,ot_bomba:this.EditDataRest[0].ot_bomba,Y04001:this.EditDataRest[0].Y04001,codsmg:this.EditDataRest[0].codsmg,Y04002:this.EditDataRest[0].Y04002,ot_id_superv_planta:this.EditDataRest[0].ot_id_superv_planta,familia:this.EditDataRest[0].familia,id_tipo_material_ot:this.EditDataRest[0].id_tipo_material_ot,id_tipo_equipamiento_ot:this.EditDataRest[0].id_tipo_equipamiento_ot,id_estandar_ot:this.EditDataRest[0].id_estandar_ot,id_tension_fuerza_ot:this.EditDataRest[0].id_tension_fuerza_ot,id_tension_mando_ot:this.EditDataRest[0].id_tension_mando_ot,ot_estado_general:this.EditDataRest[0].ot_estado_general,descrip:this.EditDataRest[0].descrip,id_orden_trab_cab:this.EditDataRest[0].id_orden_trab_cab,ot_idordentrabprev:this.EditDataRest[0].ot_idordentrabprev,ot_tipo_de_oti:this.EditDataRest[0].ot_tipo_de_oti,ot_procedencia:this.EditDataRest[0].ot_procedencia,ot_estado:this.EditDataRest[0].ot_estado,ot_id_tecnico:this.EditDataRest[0].ot_id_tecnico,ot_id_informe_tec:this.EditDataRest[0].ot_id_informe_tec,ot_nota:this.EditDataRest[0].ot_nota,Y06002:this.EditDataRest[0].Y06002,ot_fech_fin_labor:this.EditDataRest[0].ot_fech_fin_labor,ot_fech_h_inicio_labor:this.EditDataRest[0].ot_fech_h_inicio_labor,ot_fech_inicio_labor:this.EditDataRest[0].ot_fech_inicio_labor,ot_fech_h_fin_labor:this.EditDataRest[0].ot_fech_h_fin_labor,SEQMA04:this.EditDataRest[0].SEQMA04,corre_inf_cab_otc:this.EditDataRest[0].corre_inf_cab_otc,corre_fisico:this.EditDataRest[0].corre_fisico,dias_trabajados:this.EditDataRest[0].dias_trabajados,idestado_cerrado:this.EditDataRest[0].idestado_cerrado,idestado_bloquear_otc:this.EditDataRest[0].idestado_bloquear_otc,tipobomba_otc:this.EditDataRest[0].tipobomba_otc,idordenfabricab_otc:this.EditDataRest[0].idordenfabricab_otc,voltaje_ot:this.EditDataRest[0].voltaje_ot,motor_ot:this.EditDataRest[0].motor_ot,potencia:this.EditDataRest[0].potencia,rep_fab:this.EditDataRest[0].rep_fab,idpartlist_otc:this.EditDataRest[0].idpartlist_otc,nombre_partlist_otc:this.EditDataRest[0].nombre_partlist_otc,tipo_partlist_otc:this.EditDataRest[0].tipo_partlist_otc}),this.MaterialPivotSelectedText=this.EditDataRest[0].id_tipo_material_ot2,this.TipoEquipamientoPivotSelectedText=this.EditDataRest[0].id_tipo_equipamiento_ot2,this.EstandarPivotSelectedText=this.EditDataRest[0].id_estandar_ot2,this.TensionFuerzaPivotSelectedText=this.EditDataRest[0].id_tension_fuerza_ot2,this.TensionMandoPivotSelectedText=this.EditDataRest[0].id_tension_mando_ot2,this.TipoOtPivotSelectedText=this.EditDataRest[0].ot_tipo_de_oti2,this.TipoBombaPivotSelectedText=this.EditDataRest[0].tipobomba_otc2,this.MotorPivotSelectedText=this.EditDataRest[0].motor_ot2,this.VoltajePivotSelectedText=this.EditDataRest[0].voltaje_ot,this.PotenciaPivotSelectedText=this.EditDataRest[0].potencia2,this.globalVal.ot_estado_general=this.EditDataRest[0].ot_estado_general,this.globalVal.tipo=this.EditDataRest[0].tipobomba_otc2,this.globalVal.marca=this.EditDataRest[0].marca,this.globalVal.modelo=this.EditDataRest[0].modelo,this.globalVal.potencia=this.EditDataRest[0].potencia2,this.globalVal.nombre_partlist_otc=this.EditDataRest[0].nombre_partlist_otc,this.globalVal.tipo_partlist_otc=this.EditDataRest[0].tipo_partlist_otc,this.globalVal.nom_configuracion_exm=this.EditDataRest[0].nom_configuracion_exm,console.log("this.globalVal.nombre_partlist_otc",this.globalVal.nombre_partlist_otc)}catch(d){console.log("error:::>",d)}"1"==this.EditDataRest[0].familia?(this.ItemVisibleBomba=!0,this.ItemVisibleTablero=!1):(this.ItemVisibleBomba=!1,this.ItemVisibleTablero=!0),this.DsTipoOt=o.tipserv,this.Opciones1=o.responsable,this.DsMaterial=o.material,this.DsMotor=o.motor,this.DsVoltaje=o.voltaje,this.DsTipoPotencia=o.potencia,this.DsTipoEquipamiento=o.tipo_equipamiento,this.DsEstandar=o.estandar,this.DsTensionFuerza=o.TensionFuerza,this.DsTensionMando=o.TensionMando,this.DsTipoBomba=o.tipobomba,console.log("this.Opciones1",this.Opciones1),console.log(this.DsTipoOt)}).finally(()=>{this.loadingController.dismiss()})})}mostrarConfirmacion(){var e=this;return(0,g.Z)(function*(){yield(yield e.alertController.create({header:"Confirmaci\xf3n",message:"\xbfDesea realizar esta acci\xf3n?",cssClass:"alerta-confirma",mode:"ios",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Acci\xf3n cancelada")}},{text:"Aceptar",handler:()=>{e.SaveFormTerminadoPaso1()}}]})).present()})()}SaveFormTerminadoPaso1(){var e=this;return(0,g.Z)(function*(){if(e.FormCheckListPaso1.valid)e.id_orden_trab_cab=e.globalVal.id_orden_trab_cab,e.loadingController.create({message:"Guardando Paso 1...",translucent:!0}).then(o=>{o.present()}),yield e.ApiService.GuardarFormPaso1(e.FormCheckListPaso1.value).then(function(){var o=(0,g.Z)(function*(d){e.loadingController.dismiss();let F="0"==d[0].o_nres?"alerta-error":"alerta-ok";e.globalVal.tipo=e.TipoBombaPivotSelectedText,yield(yield e.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"DATOS GENERALES",cssClass:F,mode:"ios",animated:!0,message:d[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada")}}]})).present()});return function(d){return o.apply(this,arguments)}}()).finally(()=>{console.log("finally:::>>LN:394")}).catch(o=>{console.log("errror:::>>>>>>>>>",o)});else{for(let s in e.FormCheckListPaso1.controls)e.FormCheckListPaso1.controls[s].setValue(e.FormCheckListPaso1.controls[s].value),e.FormCheckListPaso1.controls[s].markAsTouched();e.alertSiNo=e.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"GENERAL",mode:"ios",cssClass:"alerta-error",backdropDismiss:!0,message:"Falta seleccionar todos los datos",buttons:[{text:"Aceptar",role:"A",handler:()=>{}}]}).then(s=>{s.present(),s.onDidDismiss().then(o=>{})})}})()}SaveFormBorradorPaso1(){this.alertSiNo=this.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"DATOS GENERALES",mode:"ios",cssClass:"alerta-ok",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(e=>{e.present(),e.onDidDismiss().then(s=>{"A"==s.role&&(this.loadingController.create({message:"Guardando datos generales...",translucent:!0}).then(d=>{d.present()}),this.id_orden_trab_cab=this.globalVal.id_orden_trab_cab,this.ApiService.GuardarFormPaso1(this.FormCheckListPaso1.value).then(d=>{this.loadingController.dismiss(),console.log(d),alert("Guardado correctamente-----.")}).finally(()=>{}).catch(d=>{console.log("errror:::>>>>>>>>>",d)}))})})}ionViewWillEnter(){let e;this.checklist_paso1_apli_ck="0"==this.globalVal.checklist_paso1_apli,this.FLoadForms(),e={detail:{checked:this.checklist_paso1_apli_ck,jc:0}}}ngOnInit(){}FSelectChangeTipoBomba(e,s){for(const o of this.DsTipoBomba)console.log(o.codigo,e.detail.value),o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.tipobomba_otc.setValue(o.codigo),this.TipoBombaPivotSelectedText=o.nombre)}FSelectChangeTipoMaterial(e,s){console.log("select_change_material::",this.DsMaterial);for(const o of this.DsMaterial)console.log(o.codigo,e.detail.value),o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.id_tipo_material_ot.setValue(o.codigo),this.MaterialPivotSelectedText=o.nombre)}FSelectChangeMotor(e,s){for(const o of this.DsMotor)console.log(o.codigo,e.detail.value),o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.motor_ot.setValue(o.codigo),this.MotorPivotSelectedText=o.nombre)}FSelectChangeVoltaje(e,s){for(const o of this.DsVoltaje)console.log(o.nombre,e.detail.value),o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.voltaje_ot.setValue(o.nombre),this.VoltajePivotSelectedText=o.nombre)}FSelectChangePotencia(e,s){for(const o of this.DsTipoPotencia)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.potencia.setValue(o.codigo),this.PotenciaPivotSelectedText=o.nombre)}FSelectChangeTipoEquipamiento(e,s){for(const o of this.DsTipoEquipamiento)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.id_tipo_equipamiento_ot.setValue(o.codigo),this.TipoEquipamientoPivotSelectedText=o.nombre)}FSelectChangeEstandar(e,s){for(const o of this.DsEstandar)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.id_estandar_ot.setValue(o.codigo),this.EstandarPivotSelectedText=o.nombre)}FSelectChangeTensionFuerza(e,s){for(const o of this.DsTensionFuerza)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.id_tension_fuerza_ot.setValue(o.codigo),this.TensionFuerzaPivotSelectedText=o.nombre)}FSelectChangeTensionMando(e,s){for(const o of this.DsTensionMando)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.id_tension_mando_ot.setValue(o.codigo),this.TensionMandoPivotSelectedText=o.nombre)}FSelectChangeTipoOt(e,s){for(const o of this.DsTipoOt)o.codigo==e.detail.value&&(this.FormCheckListPaso1.controls.idtipo_otc.setValue(o.codigo),this.TipoOtPivotSelectedText=o.nombre)}DownloadOpenLocalPdf(){this.ApiService.LoadPdfOrdentrabajo(this.globalVal.id_orden_trab_cab).then(e=>{this.EditDataRest=e,console.log("this.Opciones1",this.EditDataRest);try{let s=E.N.UrlDomainLocal+"aw_file/"+this.EditDataRest.nomfile;console.log(s),C.A.open({url:s}),setTimeout(()=>{C.A.close()},5e3)}catch(s){console.log("error:::>",s)}}).finally(()=>{this.loadingController.dismiss()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.QS),t.Y36(p.SH),t.Y36(p.HT),t.Y36(T.k),t.Y36(O.K),t.Y36(p.Br),t.Y36(i.F0),t.Y36(a.X),t.Y36(t.sBO),t.Y36(p.BX))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-mtto-win-orden-trabajo1"]],standalone:!0,features:[t.jDz],decls:56,vars:20,consts:[["mode","ios"],["text-capitalize",""],[1,"ion-padding"],[3,"formGroup"],["f","ngForm"],["mode","ios",1,"ion-no-padding"],["type","text","formControlName","corre_fisico"],["slot","end",3,"click"],["slot","start","name","cloud-download-sharp"],["type","text","maxlength","80","formControlName","Y06002"],["type","text","maxlength","80","formControlName","ot_fech_inicio_labor"],["type","text","maxlength","80","formControlName","dias_trabajados"],[4,"ngIf"],["style","color: var(--ion-color-danger);",4,"ngIf"],["position","floating"],["mode","ios","formControlName","ot_nota",3,"autoGrow","autofocus"],["color","warning","fill","outline","expand","full",3,"click"],["cancelText","Cancelar","placeholder","Seleccionar Tipo OT","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[2,"color","var(--ion-color-danger)"],["cancelText","Cancelar","placeholder","Seleccionar Tipo Bomba","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Material","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Motor","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","formControlName","voltaje_ot","placeholder","Seleccionar Voltaje","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Tipo de Potencia","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Tipo de Equipamiento","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Estandar","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Tension de Fuerza","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar tension de mando","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-item")(3,"ion-title",1)(4,"ion-label"),t._uU(5,"DATOS GENERALES"),t.qZA()()()()(),t.TgZ(6,"ion-content",2)(7,"form",3,4)(9,"ion-list",5)(10,"ion-item")(11,"ion-label")(12,"p"),t._uU(13,"Nro.Informe Tecnico"),t.qZA(),t._UZ(14,"ion-input",6),t.qZA(),t.TgZ(15,"ion-button",7),t.NdJ("click",function(){return s.DownloadOpenLocalPdf()}),t._UZ(16,"ion-icon",8),t._uU(17," PDF"),t.qZA()(),t.TgZ(18,"ion-item")(19,"ion-label")(20,"p"),t._uU(21,"PROCEDENCIA"),t.qZA(),t._UZ(22,"ion-input",9),t.qZA()(),t.TgZ(23,"ion-item")(24,"ion-label")(25,"p"),t._uU(26,"F.Creacion O.T."),t.qZA(),t._UZ(27,"ion-input",10),t.qZA()(),t.TgZ(28,"ion-item")(29,"ion-label")(30,"p"),t._uU(31,"Dias Operativos"),t.qZA(),t._UZ(32,"ion-input",11),t.qZA()(),t.YNc(33,l,6,2,"ion-item",12),t.YNc(34,c,2,0,"div",13),t.YNc(35,m,6,2,"ion-item",12),t.YNc(36,P,2,0,"div",13),t.YNc(37,S,6,2,"ion-item",12),t.YNc(38,j,2,0,"div",13),t.YNc(39,R,6,2,"ion-item",12),t.YNc(40,L,6,2,"ion-item",12),t.YNc(41,I,6,2,"ion-item",12),t.YNc(42,U,2,0,"div",13),t.YNc(43,W,6,2,"ion-item",12),t.YNc(44,Q,2,0,"div",13),t.YNc(45,B,6,2,"ion-item",12),t.YNc(46,Y,2,0,"div",13),t.YNc(47,G,6,2,"ion-item",12),t.YNc(48,z,6,2,"ion-item",12),t.TgZ(49,"ion-item")(50,"ion-label",14),t._uU(51," Observaciones: "),t.qZA(),t._UZ(52,"ion-textarea",15),t.qZA()()()(),t.TgZ(53,"ion-footer")(54,"ion-button",16),t.NdJ("click",function(){return s.mostrarConfirmacion()}),t._uU(55,"Guardar Cabecera y Cargar Detalle"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("formGroup",s.FormCheckListPaso1),t.xp6(26),t.Q6J("ngIf",s.ItemVisibleBomba),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("idtipo_otc").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleBomba),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("tipobomba_otc").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleBomba),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("id_tipo_material_ot").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleBomba),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleBomba),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleTablero),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("potencia").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleTablero),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("id_tipo_equipamiento_ot").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleTablero),t.xp6(1),t.Q6J("ngIf",s.FormCheckListPaso1.get("id_estandar_ot").hasError("valorNoValido")),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleTablero),t.xp6(1),t.Q6J("ngIf",s.ItemVisibleTablero),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0))},dependencies:[p.Pc,p.YG,p.W2,p.fr,p.Gu,p.gu,p.pK,p.Ie,p.Q$,p.q_,p.t9,p.n0,p.g2,p.wd,p.sr,p.QI,p.j9,f.ez,f.sg,f.O5,b.u5,b._Y,b.JJ,b.JL,b.nD,b.UX,b.sg,b.u],styles:["ion-alert.custom-alert[_ngcontent-%COMP%]{height:auto;--backdrop-opacity: .7}.custom-alert[_ngcontent-%COMP%]   .alert-button-group[_ngcontent-%COMP%]{padding:8px}button.alert-button.alert-button-confirm[_ngcontent-%COMP%]{background-color:var(--ion-color-success);color:var(--ion-color-success-contrast)}.md[_ngcontent-%COMP%]   button.alert-button.alert-button-confirm[_ngcontent-%COMP%]{border-radius:4px}.ios[_ngcontent-%COMP%]   .custom-alert[_ngcontent-%COMP%]   button.alert-button[_ngcontent-%COMP%]{border:.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0),.2)}.ios[_ngcontent-%COMP%]   button.alert-button.alert-button-cancel[_ngcontent-%COMP%]{border-right:0;border-bottom-left-radius:13px;border-top-left-radius:13px}.ios[_ngcontent-%COMP%]   button.alert-button.alert-button-confirm[_ngcontent-%COMP%]{border-bottom-right-radius:13px;border-top-right-radius:13px}"]}),n})()}}]);