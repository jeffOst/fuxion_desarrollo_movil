"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4992,6485,5610,531,6702,6026],{6485:(y,Z,m)=>{m.d(Z,{Z:()=>M});var T=m(2519),D=m(6242),P=m(9862);let M=(()=>{var i;class S{constructor(n){this.httpClient=n,this.urlApiProd=T.N.UrlDomainLocal+"aw_modulos/prod/api/CAtencionServicios.php"}ListDatos(n,o,d,r){let l=JSON.stringify({s:n,acc:1,tipo:o,idtablet:d,idmenu:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(_=>_)}FUpdateEstadoServicio(n,o,d,r,l,_){let u=JSON.stringify({idofpterminado:n,acc:2,value:o,id_usuario_local:d,id_dispositivo:r,avatar:l,idasignaestacionof:_});return this.httpClient.post(this.urlApiProd,u).toPromise().then(A=>A)}ListSolsexQr(n,o,d,r,l){let _=JSON.stringify({idofpterminado:n,acc:2,value:o,id_usuario_local:d,id_dispositivo:r,avatar:l});return this.httpClient.post(this.urlApiProd,_).toPromise().then(u=>u)}load_cbos_pieza_material_maquina(n,o,d){let r=JSON.stringify({acc:3,id_usuario_local:o,id_dispositivo:d,idtipserv:n});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListFindPersonal(n,o,d){let r=JSON.stringify({acc:4,s:n,idusu:o,iddevice:d});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListFindServiciosByPieza(n,o,d,r,l,_){let u=JSON.stringify({acc:5,s:n,idpieza:o,tipServicio:d,idusu:r,iddevice:l,nomclase:_});return this.httpClient.post(this.urlApiProd,u).toPromise().then(A=>A)}agregarServiciosByPieza(n,o,d,r,l,_){let u=JSON.stringify({acc:32,s:n,nomclase:_,idpieza:o,tipServicio:d,idusu:r,iddevice:l});return this.httpClient.post(this.urlApiProd,u).toPromise().then(A=>A)}ListFindPiezaByActividad(n,o,d,r,l,_,u,A){let E=JSON.stringify({acc:6,s:n,idpieza:o,tipServicio:d,idusu:r,iddevice:l,idclase:_,idsubfamilia:u,nomsubfam:A});return this.httpClient.post(this.urlApiProd,E).toPromise().then(b=>b)}SaveInicioActividad(n){let o=JSON.stringify(n);return this.httpClient.post(this.urlApiProd,o).toPromise().then(d=>d)}UpdateFechaInicioProd(n,o,d,r){let l=JSON.stringify({acc:28,fecha:n,pk_idservicio:o,avatar:d,idusuario:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(_=>_)}UpdateFechaFinProd(n,o,d,r){let l=JSON.stringify({acc:29,fecha:n,pk_idservicio:o,avatar:d,idusuario:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(_=>_)}ListFindActividades(n,o,d){let r=JSON.stringify({acc:9,s:n,idusu:o,iddevice:d});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListFindActividadesHistorico(n,o,d){let r=JSON.stringify({acc:31,s:n,idusu:o,iddevice:d});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListFindClaseByPieza(n,o,d,r,l){let _=JSON.stringify({acc:10,s:n,idpieza:o,tipServicio:d,idusu:r,iddevice:l});return this.httpClient.post(this.urlApiProd,_).toPromise().then(u=>u)}ListFindOfByClase(n,o,d,r,l,_){let u=JSON.stringify({acc:11,s:n,idsubfamilia:o,idclase:d,tipServicio:r,idusu:l,iddevice:_});return this.httpClient.post(this.urlApiProd,u).toPromise().then(A=>A)}ListFindQrByOf(n,o,d,r,l,_){let u=JSON.stringify({acc:12,s:n,idpieza:o,tipServicio:d,idusu:r,iddevice:l,nomclase:_});return this.httpClient.post(this.urlApiProd,u).toPromise().then(A=>A)}SaveControlCalidadByOf(n){let o=JSON.stringify(n);return this.httpClient.post(this.urlApiProd,o).toPromise().then(d=>d)}ListFindSolicitudQcByOf(n,o,d,r){let l=JSON.stringify({acc:14,s:n,idofpterminado:o,idusu:d,iddevice:r});return this.httpClient.post(this.urlApiProd,l).toPromise().then(_=>_)}load_cbos_ma00(){let n=JSON.stringify({acc:15});return this.httpClient.post(this.urlApiProd,n).toPromise().then(o=>o)}FCreaCorrelativo(){let n=JSON.stringify({acc:16});return this.httpClient.post(this.urlApiProd,n).toPromise().then(o=>o)}SaveReporteFalla(n){let o=JSON.stringify(n);return this.httpClient.post(this.urlApiProd,o).toPromise().then(d=>d)}SaveRelevo(n){let o=JSON.stringify(n);return this.httpClient.post(this.urlApiProd,o).toPromise().then(d=>d)}FCreaCorrelativoRelevo(){let n=JSON.stringify({acc:18});return this.httpClient.post(this.urlApiProd,n).toPromise().then(o=>o)}load_cbo_subprocesos(n,o,d){let r=JSON.stringify({acc:20,idmaquina:n,nom_pieza:o,servicio:d});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}load_cbos_any_edit_ini_actvidad(n,o,d){let r=JSON.stringify({acc:22,id_usuario_local:o,id_dispositivo:d,idtipserv:n});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}ListActividadesxTecnico(n,o,d){let r=JSON.stringify({iduser:n,acc:23,horainicio_filtro:o,horafin_filtro:d});return this.httpClient.post(this.urlApiProd,r).toPromise().then(l=>l)}SaveResumenDia(n,o){let d=JSON.stringify(o);return this.httpClient.post(this.urlApiProd,d).toPromise().then(r=>r)}LoadFormDejarPiezasCalidad(n){let o=JSON.stringify({idpt:n,acc:25});return this.httpClient.post(this.urlApiProd,o).toPromise().then(d=>d)}LoadFormIniciaActividad(n,o){let d=JSON.stringify({idpt:n,avatar:o,acc:26});return this.httpClient.post(this.urlApiProd,d).toPromise().then(r=>r)}listado_principal_resumen_horas(n,o,d,r,l){let _=JSON.stringify({s:n,acc:d,tipo:o,idtablet:"this.device.uuid",madre_hija:r,idusuario:l});return this.httpClient.post(this.urlApiProd,_).toPromise().then(u=>u)}listado_principal_cabecera(n,o,d,r,l){let _=JSON.stringify({s:n,acc:d,tipo:o,idtablet:"this.device.uuid",madre_hija:r,idusuario:l});return this.httpClient.post(this.urlApiProd,_).toPromise().then(u=>u)}}return(i=S).\u0275fac=function(n){return new(n||i)(D.LFG(P.eN))},i.\u0275prov=D.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),S})()},4992:(y,Z,m)=>{m.r(Z),m.d(Z,{ProdAteServIniciaActividadPage:()=>$});var T=m(5861),D=m(6814),P=m(95),p=m(6728),O=m(4874),M=m(4229),i=m(6242),S=m(5472),x=m(4248),n=m(2014),o=m(6485);function d(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"C\xf3digo Q.R."),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.codigo_qr)}}function r(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"C\xf3digo Producto Terminado"),i.qZA(),i._UZ(4,"input",18),i.TgZ(5,"ion-button",19),i.NdJ("click",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.visualizar_pdf(t.DsIniciaActividad.plano_diseno))}),i._UZ(6,"ion-icon",20),i._uU(7," Ver Plano "),i.qZA()()()}if(2&e){const a=i.oxw();i.xp6(4),i.s9C("value",a.DsIniciaActividad.codigo_pt)}}function l(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Clase"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.nomsubfam)}}function _(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Descripci\xf3n Versi\xf3n"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.descripcion_pt)}}function u(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Codigo de Bomba"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.codsmg)}}function A(e,h){if(1&e&&(i.TgZ(0,"ion-select-option",18),i._uU(1),i.qZA()),2&e){const a=h.$implicit;i.Q6J("value",a.SEQMASERV),i.xp6(1),i.hij("",a.Y04002," ")}}function E(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Servicio Asignado (Ejes)*"),i.qZA(),i.TgZ(4,"ion-select",21),i.NdJ("ionChange",function(t){i.CHM(a);const c=i.oxw();return i.KtG(c.select_change_eje(t))})("ngModelChange",function(t){i.CHM(a);const c=i.oxw();return i.KtG(c.DsIniciaActividad.idservicio_x_eje_ofd=t)}),i.YNc(5,A,2,2,"ion-select-option",22),i.qZA()()()}if(2&e){const a=i.oxw();i.xp6(4),i.Q6J("selectedText",a.DsIniciaActividad.servicio_eje)("ngModel",a.DsIniciaActividad.idservicio_x_eje_ofd),i.xp6(1),i.Q6J("ngForOf",a.rest_serv_eje)}}function b(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Tipo Proceso Metalizado:"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.proceso_metalizado)}}function U(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Servicio Metalizado"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.servicio_metalizado)}}function F(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"N. Metalizados Observados"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.cnt_metalizado_obs)}}function q(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"MRTACERAM 29012 Peso Inicial(g)"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.cnt_29012_peso_ini)}}function B(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"ULTRABON 50000 Peso Inicial(g)"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.cnt_50000_peso_ini)}}function N(e,h){if(1&e&&(i.TgZ(0,"h1"),i._uU(1),i.qZA()),2&e){const a=i.oxw();i.xp6(1),i.Oqu(a.DsIniciaActividad.estado)}}function J(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-button",23),i.NdJ("click",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.FEstadoActividad(2))}),i._uU(1,"PAUSAR"),i.qZA()}}function R(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-button",23),i.NdJ("click",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.FEstadoActividad(3))}),i._uU(1,"FINALIZAR"),i.qZA()}}function Y(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-button",24),i.NdJ("click",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.FEstadoActividad(4))}),i._uU(1,"REANUDAR"),i.qZA()}}function w(e,h){if(1&e&&(i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Tipo Proceso"),i.qZA(),i.TgZ(4,"h1"),i._uU(5),i.qZA()()()),2&e){const a=i.oxw();i.xp6(5),i.Oqu(a.DsIniciaActividad.proceso)}}function z(e,h){if(1&e&&(i.TgZ(0,"h1"),i._uU(1),i.qZA()),2&e){const a=i.oxw();i.xp6(1),i.Oqu(a.DsIniciaActividad.fecha_fin)}}function Q(e,h){1&e&&(i.TgZ(0,"ion-col",25),i._uU(1,"Fecha y Hora de Inicio:"),i.qZA())}const L=()=>({standalone:!0});function k(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-datetime",27),i.NdJ("ngModelChange",function(t){i.CHM(a);const c=i.oxw(2);return i.KtG(c.fechainicio_prod=t)})("ionChange",function(t){i.CHM(a);const c=i.oxw(2);return i.KtG(c.onFechaInicioChange(t,c.DsIniciaActividad.pk_idservicio,c.DsIniciaActividad.avatar))}),i.qZA()}if(2&e){const a=i.oxw(2);i.Q6J("preferWheel",!0)("showDefaultButtons",!0)("ngModel",a.fechainicio_prod)("ngModelOptions",i.DdM(4,L))}}function K(e,h){if(1&e&&i.YNc(0,k,1,5,"ion-datetime",26),2&e){const a=i.oxw();i.Q6J("ngIf",a.hideBtnModificaFecha)}}function H(e,h){1&e&&(i.TgZ(0,"ion-col",25),i._uU(1,"Fecha y Hora de Finalizacion:"),i.qZA())}function j(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-datetime",29),i.NdJ("ngModelChange",function(t){i.CHM(a);const c=i.oxw(2);return i.KtG(c.fechafin_prod=t)})("ionChange",function(t){i.CHM(a);const c=i.oxw(2);return i.KtG(c.onFechaFinChange(t,c.DsIniciaActividad.pk_idservicio,c.DsIniciaActividad.avatar))}),i.qZA()}if(2&e){const a=i.oxw(2);i.Q6J("preferWheel",!0)("showDefaultButtons",!0)("ngModel",a.fechafin_prod)}}function G(e,h){if(1&e&&i.YNc(0,j,1,3,"ion-datetime",28),2&e){const a=i.oxw();i.Q6J("ngIf",a.hideBtnModificaFecha)}}function W(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"MRTACERAM 29012 Peso Final(g):"),i.qZA(),i.TgZ(4,"app-input-with-button",30),i.NdJ("ngModelChange",function(t){i.CHM(a);const c=i.oxw();return i.KtG(c.DsIniciaActividad.cnt_29012_peso_fin=t)})("call_click_padre",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.unCheckFocus(1))}),i.qZA()()()}if(2&e){const a=i.oxw();i.xp6(4),i.Q6J("ngModel",a.DsIniciaActividad.cnt_29012_peso_fin)}}function V(e,h){if(1&e){const a=i.EpF();i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"ULTRABON 50000 Peso Final(g):"),i.qZA(),i.TgZ(4,"app-input-with-button",30),i.NdJ("ngModelChange",function(t){i.CHM(a);const c=i.oxw();return i.KtG(c.DsIniciaActividad.cnt_50000_peso_fin=t)})("call_click_padre",function(){i.CHM(a);const t=i.oxw();return i.KtG(t.unCheckFocus(2))}),i.qZA()()()}if(2&e){const a=i.oxw();i.xp6(4),i.Q6J("ngModel",a.DsIniciaActividad.cnt_50000_peso_fin)}}let $=(()=>{var e;class h{constructor(s,t,c,v,g,f,C){let I;this.navCtrl=s,this.router=t,this.storage=c,this.loadingController=v,this.ApiServices=g,this.modalCtrl=f,this.alertController=C,this.flagUpdatedObsOK=!0,this.pdfSrc="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",this.storage.get("USER_INFO").then(X=>{I=X,this.NombresUsuarioLocal=I.user_name,this.IdUsuarioLocal=I.user_id}),this.navParams=this.router.getCurrentNavigation().extras.state,this.flagResumenDiario=this.navParams.flag,console.log("this.navParams::>",this.navParams),this.flagUpdatedObsOK=!0,this.navParams&&(this.DsIniciaActividad={},this.DsIniciaActividad.maquina=this.navParams.maquina,this.DsIniciaActividad.idmaquina=this.navParams.idmaquina,this.DsIniciaActividad.idofpterminado=this.navParams.idofpterminado,this.DsIniciaActividad.EQUIPOID=this.navParams.EQUIPOID,this.DsIniciaActividad.fasignado=this.navParams.fasignado,this.DsIniciaActividad.avatar=this.navParams.avatar,this.DsIniciaActividad.correorden=this.navParams.correorden,this.DsIniciaActividad.Y04002=this.navParams.Y04002,this.DsIniciaActividad.cantidad=this.navParams.cantidad,this.DsIniciaActividad.idestado=this.navParams.idestado,this.DsIniciaActividad.nomclase=this.navParams.nomclase,this.DsIniciaActividad.codigo_qr=this.navParams.codigo_qr,this.DsIniciaActividad.codsmg=this.navParams.codsmg,this.DsIniciaActividad.idclase_pt=this.navParams.idclase,this.DsIniciaActividad.material=this.navParams.material,this.DsIniciaActividad.idmaterial=this.navParams.idmaterial,this.DsIniciaActividad.nombres_tecnico=this.navParams.nombres_tecnico,this.DsIniciaActividad.id_personal=this.navParams.id_personal,this.DsIniciaActividad.fecha_inicio=this.navParams.fecha_inicio,this.DsIniciaActividad.fecha_fin=this.navParams.fecha_fin,this.DsIniciaActividad.pk_idservicio=this.navParams.pk_idservicio,this.DsIniciaActividad.actividad=this.navParams.actividad,this.idTipoActividad=parseInt(this.navParams.actividad),this.idEstadoActividad=parseInt(this.navParams.idestado),this.idTargetMenu=this.navParams.idTargetMenu,this.DsIniciaActividad.codigo_pt=this.navParams.codigo_pt,this.DsIniciaActividad.descripcion_pt=this.navParams.descripcion_pt,this.DsIniciaActividad.nomsubfam=this.navParams.nomsubfam,this.DsIniciaActividad.proceso=this.navParams.proceso,this.DsIniciaActividad.observacion=this.navParams.observacion,this.DsIniciaActividad.proceso_metalizado=this.navParams.proceso_metalizado,this.DsIniciaActividad.servicio_metalizado=this.navParams.servicio_metalizado,this.DsIniciaActividad.cnt_metalizado_obs=this.navParams.cnt_metalizado_obs,this.DsIniciaActividad.cnt_29012_peso_ini=this.navParams.cnt_29012_peso_ini,this.DsIniciaActividad.cnt_50000_peso_ini=this.navParams.cnt_50000_peso_ini,this.DsIniciaActividad.cnt_50000_peso_fin=this.navParams.cnt_50000_peso_fin,this.DsIniciaActividad.cnt_29012_peso_fin=this.navParams.cnt_29012_peso_fin,this.DsIniciaActividad.servi0000cio_eje=this.navParams.servicio_eje,this.DsIniciaActividad.idservicio_x_eje_otd=this.navParams.idservicio_x_eje_otd,this.DsIniciaActividad.flag_serv_eje_ms=this.navParams.flag_serv_eje_ms,this.DsIniciaActividad.plano_diseno=this.navParams.plano_diseno,this.fechainicio_prod=this.navParams.fecha_inicio_formato_iso,this.fechafin_prod=this.navParams.fecha_fin_formato_iso,this.DsIniciaActividad.cantidad_total=this.navParams.cantidad_total,this.DsIniciaActividad.cantidad_revisada=this.navParams.cantidad_revisada,this.DsIniciaActividad.cantidad_pendiente=this.navParams.cantidad_pendiente,this.DsIniciaActividad.cantidad_ingresar=0,console.log("VERIFICAR A<QUIIIIII;"),console.log(this.navParams.cantidad_total),console.log(this.navParams.cantidad_revisada),console.log(this.navParams.cantidad_pendiente),null!=this.DsIniciaActividad.flag_serv_eje_ms?1==this.DsIniciaActividad.flag_serv_eje_ms&&(this.hideItemByRevisionEje=!0):this.hideItemByRevisionEje=!1,null!=this.DsIniciaActividad.proceso_metalizado?this.DsIniciaActividad.proceso_metalizado.length>4&&(this.hideItemByMetalizado=!0):this.hideItemByMetalizado=!1,"0"!=this.navParams.idproceso&&(this.hideItemByProceso=!0),console.log("this.navParams::43:::>",this.DsIniciaActividad),0==this.navParams.index?console.log("nuevooooo"):(console.log("editarrrrrr"),this.UpdateFormEdit()))}ngOnInit(){this.hideItemByRevisionEje&&this.load_cbos_any(),this.FCondicionarEstado(this.idEstadoActividad),1==this.idTipoActividad?(this.hideItemByTipoRep=!1,this.hideItemByTipoSer=!0,this.hideItemByTipoTal=!1):2==this.idTipoActividad||3==this.idTipoActividad?(this.hideItemByTipoRep=!0,this.hideItemByTipoSer=!1,this.hideItemByTipoTal=!1):4==this.idTipoActividad&&(this.hideItemByTipoRep=!1,this.hideItemByTipoSer=!1,this.hideItemByTipoTal=!0)}UpdateFormEdit(){this.ApiServices.LoadFormIniciaActividad(this.DsIniciaActividad.pk_idservicio,this.DsIniciaActividad.actividad).then(s=>{console.log("this.results=>>>",s),this.DsIniciaActividad.cantidad=s[0].cantidad,this.DsIniciaActividad.observacion=s[0].obs,console.log("this.results=>>>",s)}).finally(()=>{})}plus(){this.DsIniciaActividad.cantidad++}minus(){this.DsIniciaActividad.cantidad--}FCloseWin(s){console.log("VERIFICAR EL FLAG DEL BOTON CANCELAR"),console.log(this.flagResumenDiario),this.navCtrl.navigateForward("1"==this.flagResumenDiario?"prod-resumen-diario-horas":1==this.idTargetMenu?"prod-list-acti-programada":"prod-ate-serv-list-actividades")}FCondicionarEstado(s){switch(console.log("FEstadoActividad",s),s){case 1:this.hideBtnInicio=!0,this.hideBtnModificaFecha=!1,console.log("inicio 1",s);break;case 2:this.hideBtnReanuda=!0,this.hideBtnInicio=!1,this.hideNomEstado=!1,this.hideBtnModificaFecha=!1,this.DsIniciaActividad.estado="PAUSA",console.log("PAUSA",s);break;case 3:this.hideBtnReanuda=!1,this.hideBtnInicio=!1,this.hideNomEstado=!0,this.hideBtnModificaFecha=!0,this.DsIniciaActividad.estado="FINALIZAR",console.log("FINALIZAR",s);break;case 4:this.hideBtnReanuda=!1,this.hideBtnInicio=!0,this.hideNomEstado=!1,this.hideBtnModificaFecha=!1,this.DsIniciaActividad.estado="REANUDAR",console.log("REANUDAR",s);break;default:console.log("default",s)}}openObservacionesPausaModal(){var s=this;return(0,T.Z)(function*(){const t=yield s.modalCtrl.create({component:M.MotivoPausaPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{valorModal:s.DsIniciaActividad.pk_idservicio,idusuario:s.IdUsuarioLocal}});return new Promise(c=>{t.onDidDismiss().then(v=>{c(null!==v&&void 0!==v.data?v.data:{flag_guardar:0,observaciones:""})}),t.present()})})()}FEstadoActividad(s){var t=this;return(0,T.Z)(function*(){switch(console.log("FEstadoActividad",s),s){case 2:let c=null,v="";const g=yield t.openObservacionesPausaModal();null!==g?(c=void 0!==g.flag_guardar?g.flag_guardar:0,v=void 0!==g.observaciones?g.observaciones:""):(c=0,v=""),1==c&&(t.hideBtnReanuda=!0,t.hideBtnInicio=!1,t.hideNomEstado=!1,t.DsIniciaActividad.estado="PAUSA",t.DsIniciaActividad.motivoPausa=v,t.FSaveEstado(s));break;case 3:if(t.DsIniciaActividad.cantidad_ingresar<=0)return yield(yield t.alertController.create({header:"Error",message:"El campo Cantidad a Ingresar no puede ser 0 o menor",buttons:["OK"]})).present(),void(t.DsIniciaActividad.cantidad_ingresar=0);if(t.DsIniciaActividad.cantidad_ingresar>t.DsIniciaActividad.cantidad_pendiente)return yield(yield t.alertController.create({header:"Error",message:"No puede exceder la cantidad pendiente de ingresar",buttons:["OK"]})).present(),void(t.DsIniciaActividad.cantidad_ingresar=0);console.log("Finalizando actividad"),t.hideBtnReanuda=!1,t.hideBtnInicio=!1,t.hideNomEstado=!0,t.DsIniciaActividad.estado="FINALIZAR",t.FSaveEstado(s);break;case 4:t.hideBtnReanuda=!1,t.hideBtnInicio=!0,t.hideNomEstado=!1,t.DsIniciaActividad.estado="REANUDAR",t.FSaveEstado(s)}})()}FSaveEstado(s){console.log("debo revisar AQUI - FINALIZAR ACTIVIDAD"),console.log(this.DsIniciaActividad),console.log(this.DsIniciaActividad.idofpterminado),console.log(this.DsIniciaActividad.idmaquina),this.loadingController.create({message:"Cargando...",translucent:!0}).then(c=>{c.present(),this.DsIniciaActividad.acc="8",this.DsIniciaActividad.idestado=s,this.ApiServices.SaveInicioActividad(this.DsIniciaActividad).then(v=>{let g;if(g=v[0],console.log(g),console.log(g.o_nres),0==g.o_nres)alert("Error, no se pudo guardar correctamente.");else{this.DsIniciaActividad.fecha_fin=g.p1;let f={state:this.DsIniciaActividad};this.loadingController.dismiss(),console.log("navigationExtras",f)}}).finally(()=>{console.log("finalyyyy")})})}onCantPendChange(s){var t=this;return(0,T.Z)(function*(){return t.DsIniciaActividad.cantidad_ingresar>t.DsIniciaActividad.cantidad_pendiente?(yield(yield t.alertController.create({header:"Error",message:"No puede exceder la cantidad pendiente de ingresar",buttons:["OK"]})).present(),void(t.DsIniciaActividad.cantidad_ingresar=0)):t.DsIniciaActividad.cantidad_ingresar<0?(yield(yield t.alertController.create({header:"Error",message:"La cantidad a ingresar no puede ser menor a 0",buttons:["OK"]})).present(),void(t.DsIniciaActividad.cantidad_ingresar=0)):void console.log("ingresa a else")})()}unCheckFocus(s){if(this.flagUpdatedObsOK){if(3==s&&this.DsIniciaActividad.observacion==this.obs_aux)return!1;this.flagUpdatedObsOK=!1,this.DsIniciaActividad.acc="21",this.ApiServices.SaveInicioActividad(this.DsIniciaActividad).then(t=>{let c;c=t[0],this.obs_aux=this.DsIniciaActividad.observacion,0==c.o_nres?alert("Error, no se pudo guardar correctamente."):this.flagUpdatedObsOK=!0})}}select_change_eje(s){for(const t of this.rest_serv_eje)console.log(t.SEQMASERV),t.SEQMASERV==s.detail.value&&(this.DsIniciaActividad.servicio_eje=t.Y04002,this.DsIniciaActividad.idservicio_x_eje_ofd=t.SEQMASERV,this.unCheckFocus(4))}load_cbos_any(){this.loadingController.create({message:"Cargando listas...",translucent:!0}).then(t=>{t.present(),this.ApiServices.load_cbos_any_edit_ini_actvidad(this.DsIniciaActividad.actividad,"","").then(c=>{this.rest_serv_eje=c.servicio_eje}).finally(()=>{this.loadingController.dismiss()})})}onFechaInicioChange(s,t,c){console.log("Fecha inicio cambiada | actualizar:",s.detail.value),console.log(t);var v=s.detail.value,g=t,f=c;console.log("verifica aquiii id"),console.log(this.IdUsuarioLocal),this.ApiServices.UpdateFechaInicioProd(v,g,f,this.IdUsuarioLocal).then(C=>{let I;I=C[0],0==I.o_nres?alert("Error, no se pudo guardar correctamente."):this.loadingController.dismiss()}).finally(()=>{console.log("finalyyyy")})}onFechaFinChange(s,t,c){console.log("Fecha fin cambiada | actualizar:",s.detail.value),console.log(t),this.ApiServices.UpdateFechaFinProd(s.detail.value,t,c,this.IdUsuarioLocal).then(C=>{let I;I=C[0],0==I.o_nres?alert("Error, no se pudo guardar correctamente."):this.loadingController.dismiss()}).finally(()=>{console.log("finalyyyy")})}visualizar_pdf(s){this.navCtrl.navigateForward("pdf-viewer",{queryParams:{valor:s,flaglistaprod:2}})}}return(e=h).\u0275fac=function(s){return new(s||e)(i.Y36(S.SH),i.Y36(x.F0),i.Y36(n.K),i.Y36(p.HT),i.Y36(o.Z),i.Y36(p.IN),i.Y36(p.Br))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-prod-ate-serv-inicia-actividad"]],standalone:!0,features:[i.jDz],decls:121,vars:37,consts:[["mode","ios"],["text-capitalize",""],["slot","start"],[1,"",3,"click"],["part","icon","aria-hidden","true","role","img","name","chevron-back-outline",1,"md","hydrated"],[4,"ngIf"],[2,"color","rgb(74, 204, 81)"],["type","number","label","Ingresar Cantidad Terminada:","labelPlacement","floating",3,"clearInput","ngModel","ngModelChange","ionChange"],["lines","none",2,"padding","0px !important"],["style","width: 50% !important","expand","full","size","large","color","light",3,"click",4,"ngIf"],["style","width: 99% !important","expand","full","size","large","color","light",3,"click",4,"ngIf"],["size","4","class","ion-text-end",4,"ngIf"],["locale","es-ES","datetime","datetime1"],["trigger","popover-button","animated","true","arrow","true","mode","ios",3,"keepContentsMounted"],["locale","es-ES","datetime","datetime2"],["position","floating"],["mode","ios","maxlength","800","spellcheck","true",3,"ngModel","ngModelChange","ionBlur"],["type","hidden",3,"ngModel","ngModelChange"],[3,"value"],["size","default",3,"click"],["slot","start","name","star"],["cancelText","Cancelar","placeholder","Seleccionar servicio","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["expand","full","size","large","color","light",2,"width","50% !important",3,"click"],["expand","full","size","large","color","light",2,"width","99% !important",3,"click"],["size","4",1,"ion-text-end"],["locale","es-ES","id","datetime1","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelOptions","ngModelChange","ionChange",4,"ngIf"],["locale","es-ES","id","datetime1","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelOptions","ngModelChange","ionChange"],["locale","es-ES","id","datetime2","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelChange","ionChange",4,"ngIf"],["locale","es-ES","id","datetime2","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelChange","ionChange"],["ngDefaultControl","",3,"ngModel","ngModelChange","call_click_padre"]],template:function(s,t){1&s&&(i.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),i._uU(3,"Iniciar Servicio"),i.qZA(),i.TgZ(4,"ion-buttons",2)(5,"ion-button",3),i.NdJ("click",function(){return t.FCloseWin(t.DsIniciaActividad.EQUIPOID)}),i._UZ(6,"ion-icon",4),i._uU(7," Cancelar "),i.qZA()()()(),i.TgZ(8,"ion-content")(9,"ion-list")(10,"ion-item")(11,"ion-label")(12,"p"),i._uU(13,"OF/OT"),i.qZA(),i.TgZ(14,"h1"),i._uU(15),i.qZA()()(),i.TgZ(16,"ion-item")(17,"ion-label")(18,"p"),i._uU(19,"Nro. OF/OT"),i.qZA(),i.TgZ(20,"h2"),i._uU(21),i.qZA()()(),i.YNc(22,d,6,1,"ion-item",5),i.TgZ(23,"ion-item")(24,"ion-label")(25,"p"),i._uU(26,"Pieza Servicio"),i.qZA(),i.TgZ(27,"h1"),i._uU(28),i.qZA()()(),i.YNc(29,r,8,1,"ion-item",5)(30,l,6,1,"ion-item",5)(31,_,6,1,"ion-item",5)(32,u,6,1,"ion-item",5),i.TgZ(33,"ion-item")(34,"ion-label")(35,"p"),i._uU(36,"Material"),i.qZA(),i.TgZ(37,"h1"),i._uU(38),i.qZA()()(),i.TgZ(39,"ion-item")(40,"ion-label")(41,"p"),i._uU(42,"T\xe9cnico"),i.qZA(),i.TgZ(43,"h1"),i._uU(44),i.qZA()()(),i.TgZ(45,"ion-item")(46,"ion-label")(47,"p"),i._uU(48,"Maquina"),i.qZA(),i.TgZ(49,"h1"),i._uU(50),i.qZA()()(),i.TgZ(51,"ion-item")(52,"ion-label")(53,"p"),i._uU(54,"Servicio"),i.qZA(),i.TgZ(55,"h1"),i._uU(56),i.qZA()()(),i.YNc(57,E,6,3,"ion-item",5)(58,b,6,1,"ion-item",5)(59,U,6,1,"ion-item",5)(60,F,6,1,"ion-item",5)(61,q,6,1,"ion-item",5)(62,B,6,1,"ion-item",5),i.TgZ(63,"ion-item")(64,"ion-label")(65,"p")(66,"b"),i._uU(67,"Cantidad:"),i.qZA()(),i.TgZ(68,"h1")(69,"b"),i._uU(70),i.qZA()()()(),i.TgZ(71,"ion-item")(72,"ion-label")(73,"p")(74,"b"),i._uU(75,"Cantidad Terminado:"),i.qZA()(),i.TgZ(76,"h1",6)(77,"b"),i._uU(78),i.qZA()()()(),i.TgZ(79,"ion-item")(80,"ion-input",7),i.NdJ("ngModelChange",function(v){return t.DsIniciaActividad.cantidad_ingresar=v})("ionChange",function(v){return t.onCantPendChange(v)}),i.qZA()(),i.TgZ(81,"ion-item")(82,"ion-label")(83,"p"),i._uU(84,"Estado"),i.qZA(),i.YNc(85,N,2,1,"h1",5),i.TgZ(86,"ion-item",8),i.YNc(87,J,2,0,"ion-button",9)(88,R,2,0,"ion-button",9)(89,Y,2,0,"ion-button",10),i.qZA()()(),i.YNc(90,w,6,1,"ion-item",5),i.TgZ(91,"ion-item")(92,"ion-label")(93,"p"),i._uU(94,"F.Inicio"),i.qZA(),i.TgZ(95,"h1"),i._uU(96),i.qZA()()(),i.TgZ(97,"ion-item")(98,"ion-label")(99,"p"),i._uU(100,"F.Finaliza"),i.qZA(),i.YNc(101,z,2,1,"h1",5),i.qZA()(),i.TgZ(102,"ion-item"),i.YNc(103,Q,2,0,"ion-col",11),i._UZ(104,"ion-datetime-button",12),i.TgZ(105,"ion-popover",13),i.YNc(106,K,1,1,"ng-template"),i.qZA()(),i.TgZ(107,"ion-item"),i.YNc(108,H,2,0,"ion-col",11),i._UZ(109,"ion-datetime-button",14),i.TgZ(110,"ion-popover",13),i.YNc(111,G,1,1,"ng-template"),i.qZA()(),i.YNc(112,W,5,1,"ion-item",5)(113,V,5,1,"ion-item",5),i.TgZ(114,"ion-item")(115,"ion-label",15)(116,"p"),i._uU(117,"Observaci\xf3n"),i.qZA()(),i.TgZ(118,"ion-textarea",16),i.NdJ("ngModelChange",function(v){return t.DsIniciaActividad.observacion=v})("ionBlur",function(){return t.unCheckFocus(3)}),i.qZA()(),i.TgZ(119,"ion-input",17),i.NdJ("ngModelChange",function(v){return t.DsIniciaActividad.id_personal=v}),i.qZA()()(),i._UZ(120,"ion-footer")),2&s&&(i.xp6(15),i.Oqu(t.DsIniciaActividad.EQUIPOID),i.xp6(6),i.Oqu(t.DsIniciaActividad.correorden),i.xp6(1),i.Q6J("ngIf",t.hideItemByTipoSer),i.xp6(6),i.Oqu(t.DsIniciaActividad.nomclase),i.xp6(1),i.Q6J("ngIf",t.hideItemByTipoRep),i.xp6(1),i.Q6J("ngIf",t.hideItemByTipoRep),i.xp6(1),i.Q6J("ngIf",t.hideItemByTipoRep),i.xp6(1),i.Q6J("ngIf",t.hideItemByTipoSer),i.xp6(6),i.Oqu(t.DsIniciaActividad.material),i.xp6(6),i.Oqu(t.DsIniciaActividad.nombres_tecnico),i.xp6(6),i.Oqu(t.DsIniciaActividad.maquina),i.xp6(6),i.Oqu(t.DsIniciaActividad.Y04002),i.xp6(1),i.Q6J("ngIf",t.hideItemByRevisionEje),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(8),i.Oqu(t.DsIniciaActividad.cantidad_total),i.xp6(8),i.Oqu(t.DsIniciaActividad.cantidad_revisada),i.xp6(2),i.Q6J("clearInput",!0)("ngModel",t.DsIniciaActividad.cantidad_ingresar),i.xp6(5),i.Q6J("ngIf",t.hideNomEstado),i.xp6(2),i.Q6J("ngIf",t.hideBtnInicio),i.xp6(1),i.Q6J("ngIf",t.hideBtnInicio),i.xp6(1),i.Q6J("ngIf",t.hideBtnReanuda),i.xp6(1),i.Q6J("ngIf",t.hideItemByProceso),i.xp6(6),i.Oqu(t.DsIniciaActividad.fecha_inicio),i.xp6(5),i.Q6J("ngIf",t.hideNomEstado),i.xp6(2),i.Q6J("ngIf",t.hideBtnModificaFecha),i.xp6(2),i.Q6J("keepContentsMounted",!0),i.xp6(3),i.Q6J("ngIf",t.hideBtnModificaFecha),i.xp6(2),i.Q6J("keepContentsMounted",!0),i.xp6(2),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(1),i.Q6J("ngIf",t.hideItemByMetalizado),i.xp6(5),i.Q6J("ngModel",t.DsIniciaActividad.observacion),i.xp6(1),i.Q6J("ngModel",t.DsIniciaActividad.id_personal))},dependencies:[p.Pc,p.YG,p.Sm,p.wI,p.W2,p.x4,p.Mj,p.fr,p.Gu,p.gu,p.pK,p.Ie,p.Q$,p.q_,p.t9,p.n0,p.g2,p.wd,p.sr,p.d8,p.as,p.QI,p.j9,D.ez,D.sg,D.O5,P.u5,P.Fj,P.JJ,P.nD,P.On,O.xC]}),h})()}}]);