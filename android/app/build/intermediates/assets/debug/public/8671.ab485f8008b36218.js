"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8671,6485,5610,531,6702,6026],{6485:(T,C,h)=>{h.d(C,{Z:()=>S});var J=h(2519),f=h(6242),E=h(9862);let S=(()=>{var P;class F{constructor(t){this.httpClient=t,this.urlApiProd=J.N.UrlDomainLocal+"aw_modulos/prod/api/CAtencionServicios.php"}ListDatos(t,o,e,a){let s=JSON.stringify({s:t,acc:1,tipo:o,idtablet:e,idmenu:a});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}FUpdateEstadoServicio(t,o,e,a,s,l){let m=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:a,avatar:s,idasignaestacionof:l});return this.httpClient.post(this.urlApiProd,m).toPromise().then(p=>p)}ListSolsexQr(t,o,e,a,s){let l=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:a,avatar:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(m=>m)}load_cbos_pieza_material_maquina(t,o,e){let a=JSON.stringify({acc:3,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}ListFindPersonal(t,o,e){let a=JSON.stringify({acc:4,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}ListFindServiciosByPieza(t,o,e,a,s,l){let m=JSON.stringify({acc:5,s:t,idpieza:o,tipServicio:e,idusu:a,iddevice:s,nomclase:l});return this.httpClient.post(this.urlApiProd,m).toPromise().then(p=>p)}agregarServiciosByPieza(t,o,e,a,s,l){let m=JSON.stringify({acc:32,s:t,nomclase:l,idpieza:o,tipServicio:e,idusu:a,iddevice:s});return this.httpClient.post(this.urlApiProd,m).toPromise().then(p=>p)}ListFindPiezaByActividad(t,o,e,a,s,l,m,p){let c=JSON.stringify({acc:6,s:t,idpieza:o,tipServicio:e,idusu:a,iddevice:s,idclase:l,idsubfamilia:m,nomsubfam:p});return this.httpClient.post(this.urlApiProd,c).toPromise().then(u=>u)}SaveInicioActividad(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}UpdateFechaInicioProd(t,o,e,a){let s=JSON.stringify({acc:28,fecha:t,pk_idservicio:o,avatar:e,idusuario:a});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}UpdateFechaFinProd(t,o,e,a){let s=JSON.stringify({acc:29,fecha:t,pk_idservicio:o,avatar:e,idusuario:a});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}ListFindActividades(t,o,e){let a=JSON.stringify({acc:9,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}ListFindActividadesHistorico(t,o,e){let a=JSON.stringify({acc:31,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}ListFindClaseByPieza(t,o,e,a,s){let l=JSON.stringify({acc:10,s:t,idpieza:o,tipServicio:e,idusu:a,iddevice:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(m=>m)}ListFindOfByClase(t,o,e,a,s,l){let m=JSON.stringify({acc:11,s:t,idsubfamilia:o,idclase:e,tipServicio:a,idusu:s,iddevice:l});return this.httpClient.post(this.urlApiProd,m).toPromise().then(p=>p)}ListFindQrByOf(t,o,e,a,s,l){let m=JSON.stringify({acc:12,s:t,idpieza:o,tipServicio:e,idusu:a,iddevice:s,nomclase:l});return this.httpClient.post(this.urlApiProd,m).toPromise().then(p=>p)}SaveControlCalidadByOf(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}ListFindSolicitudQcByOf(t,o,e,a){let s=JSON.stringify({acc:14,s:t,idofpterminado:o,idusu:e,iddevice:a});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}load_cbos_ma00(){let t=JSON.stringify({acc:15});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FCreaCorrelativo(){let t=JSON.stringify({acc:16});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}SaveReporteFalla(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}SaveRelevo(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}FCreaCorrelativoRelevo(){let t=JSON.stringify({acc:18});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}load_cbo_subprocesos(t,o,e){let a=JSON.stringify({acc:20,idmaquina:t,nom_pieza:o,servicio:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}load_cbos_any_edit_ini_actvidad(t,o,e){let a=JSON.stringify({acc:22,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}ListActividadesxTecnico(t,o,e){let a=JSON.stringify({iduser:t,acc:23,horainicio_filtro:o,horafin_filtro:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(s=>s)}SaveResumenDia(t,o){let e=JSON.stringify(o);return this.httpClient.post(this.urlApiProd,e).toPromise().then(a=>a)}LoadFormDejarPiezasCalidad(t){let o=JSON.stringify({idpt:t,acc:25});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}LoadFormIniciaActividad(t,o){let e=JSON.stringify({idpt:t,avatar:o,acc:26});return this.httpClient.post(this.urlApiProd,e).toPromise().then(a=>a)}listado_principal_resumen_horas(t,o,e,a,s){let l=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:a,idusuario:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(m=>m)}listado_principal_cabecera(t,o,e,a,s){let l=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:a,idusuario:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(m=>m)}}return(P=F).\u0275fac=function(t){return new(t||P)(f.LFG(E.eN))},P.\u0275prov=f.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),F})()},8671:(T,C,h)=>{h.r(C),h.d(C,{ProdAteServAsignaEstadoPage:()=>p});var J=h(5861),f=h(6814),E=h(95),d=h(6728),i=h(6242),S=h(4248),P=h(6485),F=h(2014),Z=h(5472);function t(c,u){if(1&c&&(i.TgZ(0,"ion-item")(1,"ion-row",17)(2,"ion-col",18),i._uU(3,"Actividad:"),i.qZA(),i.TgZ(4,"ion-col",19)(5,"div"),i._uU(6,"por Reproceso"),i.qZA()(),i.TgZ(7,"ion-col",18),i._uU(8," F. Revision: "),i.qZA(),i.TgZ(9,"ion-col",19)(10,"div"),i._uU(11),i.qZA()()()()),2&c){const _=i.oxw();i.xp6(5),i.Tol(_.CssReproceso),i.xp6(5),i.Tol(_.CssReproceso),i.xp6(1),i.Oqu(_.FormHtmlJs.fecha_reproceso)}}function o(c,u){1&c&&i._UZ(0,"ion-icon",20)}function e(c,u){1&c&&i._UZ(0,"ion-icon",21)}function a(c,u){if(1&c){const _=i.EpF();i.TgZ(0,"ion-item")(1,"ion-label")(2,"p"),i._uU(3,"Calidad"),i.qZA(),i.TgZ(4,"ion-row")(5,"ion-col",22)(6,"ion-button",23),i.NdJ("click",function(){i.CHM(_);const r=i.oxw();return i.KtG(r.FDejarCalidad())}),i.TgZ(7,"ion-text",24),i._uU(8," Dejar piezas en calidad "),i.qZA()()(),i.TgZ(9,"ion-col",25),i._UZ(10,"ion-icon",26),i.qZA()()()()}}function s(c,u){if(1&c&&(i.TgZ(0,"ion-item")(1,"ion-label"),i._uU(2," Historial Engregas Calidad "),i.TgZ(3,"ion-chip")(4,"ion-label",27),i._uU(5),i.qZA()()()()),2&c){const _=i.oxw();i.xp6(5),i.hij(" ",_.CantEntregasCalidad," ")}}function l(c,u){if(1&c){const _=i.EpF();i.TgZ(0,"ion-row")(1,"ion-item",32),i.NdJ("click",function(){const g=i.CHM(_).$implicit,v=i.oxw(2);return i.KtG(v.showDetailCalidad(g))}),i.TgZ(2,"ion-col",33),i._uU(3),i.qZA(),i.TgZ(4,"ion-col",34),i._uU(5),i.qZA(),i.TgZ(6,"ion-col",35),i._uU(7),i.qZA()()()}if(2&c){const _=u.$implicit;i.xp6(3),i.hij("",_.fch_solicitud_scc," "),i.xp6(2),i.Oqu(_.nombres_tecnico),i.xp6(2),i.Oqu(_.cantidad_scc)}}function m(c,u){if(1&c&&(i.TgZ(0,"ion-item")(1,"ion-grid")(2,"ion-row")(3,"ion-col",28),i._uU(4,"Fecha "),i.qZA(),i.TgZ(5,"ion-col",29),i._uU(6,"Responsable Registro"),i.qZA(),i.TgZ(7,"ion-col",30),i._uU(8,"Cantidad"),i.qZA()(),i.YNc(9,l,8,3,"ion-row",31),i.qZA()()),2&c){const _=i.oxw();i.xp6(9),i.Q6J("ngForOf",_.DsGridSolicitudQc)}}let p=(()=>{var c;class u{constructor(n,r,g,v,b){let A;this.router=n,this.prodservice=r,this.storage=g,this.navCtrl=v,this.alertController=b,this.CantEntregasCalidad=0,this.FlagCCalidad=!1,this.hide_div_reproceso=!1,this.Cancelar="Cancelar",this.disableButton=!0,this.scanActive=!0,this.FormHtmlJs={},this.navParams=this.router.getCurrentNavigation().extras.state,this.storage.get("USER_INFO").then(O=>{A=O,this.nombres_usuario_local=A.user_name,this.id_usuario_local=A.user_id,console.log(A),console.log(this.navParams),this.navParams&&(this.FormHtmlJs.maquina=this.navParams.maquina,this.FormHtmlJs.idofpterminado=this.navParams.idofpterminado,this.FormHtmlJs.EQUIPOID=this.navParams.EQUIPOID,this.FormHtmlJs.fasignado=this.navParams.fasignado,this.FormHtmlJs.avatar=this.navParams.avatar,this.FormHtmlJs.correorden=this.navParams.correorden,this.FormHtmlJs.Y04001=this.navParams.Y04001,this.FormHtmlJs.Y04002=this.navParams.Y04002,this.FormHtmlJs.descripcion_pt=this.navParams.descripcion_pt,this.FormHtmlJs.cantidad=this.navParams.cantidad,this.FormHtmlJs.idestado=this.navParams.idestado,this.IdCboEstadoActual=this.navParams.idestado,this.FormHtmlJs.nomclase=this.navParams.nomclase,this.FormHtmlJs.idasignaestacionof=this.navParams.idasignaestacionof,this.FormHtmlJs.cnt_29012_peso_ini=this.navParams.cnt_29012_peso_ini,this.FormHtmlJs.cnt_50000_peso_ini=this.navParams.cnt_50000_peso_ini,this.FormHtmlJs.cnt_metalizado_obs=this.navParams.cnt_metalizado_obs,this.FormHtmlJs.codigo_qr=this.navParams.codigo_qr,this.FormHtmlJs.codsmg=this.navParams.codsmg,this.FormHtmlJs.descrip=this.navParams.descrip,this.FormHtmlJs.idmaquina=this.navParams.idmaquina,this.FormHtmlJs.idordenfabricab=this.navParams.idordenfabricab,this.FormHtmlJs.idsubfamilia=this.navParams.idsubfamilia,this.FormHtmlJs.nomsubfam=this.navParams.nomsubfam,this.FormHtmlJs.proceso_metalizado=this.navParams.proceso_metalizado,this.FormHtmlJs.servicio_metalizado=this.navParams.servicio_metalizado,this.CssReproceso=1==this.navParams.flag_reproceso?"CssReproceso":"",this.hide_div_reproceso=1==this.navParams.flag_reproceso,this.FormHtmlJs.fecha_reproceso=this.navParams.fecha_reproceso,this.FormHtmlJs.cantidad_reproceso=this.navParams.cantidad_reproceso,this.FormHtmlJs.idrevisiondet_reproceso=this.navParams.idrevisiondet_reproceso,this.FormHtmlJs.codigo_pt=this.navParams.Y04001,this.FormHtmlJs.CONCOMPONENTE=this.navParams.CONCOMPONENTE,"O.F"==this.FormHtmlJs.avatar&&(this.FlagCCalidad=!0)),this.FormHtmlJs.nombres_tecnico=this.nombres_usuario_local,this.FormHtmlJs.idsolicitante_scc=this.id_usuario_local,this.FormHtmlJs.plano_diseno=this.navParams.plano_diseno,this.FormHtmlJs.cantidad_total=this.navParams.cantidad,this.FormHtmlJs.cantidad_revisada=this.navParams.cantidad_revisada,this.FormHtmlJs.cantidad_pendiente=this.navParams.cantidad_pendiente,console.log("this.FormHtmlJs",this.FormHtmlJs)}),this.storage.get("DEVICE_INFO").then(O=>{A=O,this.nombre_dispositivo=A.name,this.id_dispositivo=A.uuid,console.log("localStorage Device",A)})}FIniciarActvividad(){var n=this;return(0,J.Z)(function*(){if(console.log("verificar el estado actual"),console.log(n.navParams.idestado),2!=n.navParams.idestado)if(3!=n.navParams.idestado){console.log(n.FormHtmlJs);let r=n.FormHtmlJs;r.maquina="Iniciar Actividad",n.navCtrl.navigateForward(["addserviciostodet"],{state:r})}else yield(yield n.alertController.create({header:"Alerta",message:"Este registro esta Proceso de revision, debe finalizar el registro ya creado que se encuentra en Orden De Fabricacion En Proceso. (Debe asignar la cantidad que se reviso.)",buttons:["Aceptar"]})).present();else yield(yield n.alertController.create({header:"Alerta",message:"Este registro ya se encuentra completado, no se puede iniciar otra actividad",buttons:["Aceptar"]})).present()})()}cancelar_ejecucion(){this.navCtrl.navigateForward("prod-list-acti-programada")}CboEstadoChange(n){console.log("CboEstadoChange",n),console.log(n.detail),console.log(n.detail.value),this.IdCboEstadoActual=n.detail.value,this.prodservice.FUpdateEstadoServicio(this.FormHtmlJs.idofpterminado,n.detail.value,this.id_usuario_local,this.id_dispositivo,this.FormHtmlJs.avatar,this.FormHtmlJs.idasignaestacionof).then(r=>{this.ResptApi=r,console.log(this.ResptApi)}).finally(()=>{setTimeout(()=>{},600)})}CboEstadoCancel(n){console.log("CboEstadoCancel",n)}CboEstadoBlur(n){console.log("CboEstadoBlur",n)}ngOnInit(){}ionViewDidEnter(){this.prodservice.ListFindSolicitudQcByOf("",this.FormHtmlJs.idofpterminado,this.id_usuario_local,this.id_dispositivo).then(n=>{console.log(n),this.DsGridSolicitudQc=n,this.CantEntregasCalidad=this.DsGridSolicitudQc.length}).finally(()=>{})}FDejarCalidad(){this.navCtrl.navigateForward(["prod-ate-serv-dejar-pieza-calidad"],{state:this.FormHtmlJs})}showDetailCalidad(n){this.navCtrl.navigateForward(["prod-ate-serv-view-dejar-pieza-calidad"],{state:n})}cboEstadoSelect(){}visualizar_pdf(n){this.navCtrl.navigateForward("pdf-viewer",{queryParams:{valor:n,flaglistaprod:1}})}}return(c=u).\u0275fac=function(n){return new(n||c)(i.Y36(S.F0),i.Y36(P.Z),i.Y36(F.K),i.Y36(Z.SH),i.Y36(d.Br))},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-prod-ate-serv-asigna-estado"]],standalone:!0,features:[i.jDz],decls:84,vars:19,consts:[["mode","ios"],["text-capitalize",""],["slot","start"],["defaultHref","prod-list-acti-programada",3,"text"],["expand","block","color","white","size","small","slot","end","title","Iniciar Actividad",3,"click"],["color","danger"],["expand","block","color","dark","size","small","name","play-forward",3,"hidden"],[4,"ngIf"],[3,"value"],["size","default",3,"click"],["slot","start","name","star"],[2,"width","100%"],["color","warning","size","small","name","ellipse",4,"ngIf"],["color","success","size","small","name","ellipse",4,"ngIf"],["okText","Terminado","cancelText","Limpiar",2,"width","100%",3,"value","ionChange","ionCancel","ionBlur"],["value","1",3,"ionSelect"],["value","2",3,"ionSelect"],[1,"ion-text-left",2,"width","100%"],["size","3",1,"ion-text-right"],["size","3",1,"ion-text-left"],["color","warning","size","small","name","ellipse"],["color","success","size","small","name","ellipse"],["size","10"],["expand","full","color","white","title","Dejar en Calidad",2,"background-color","transparent !important",3,"click"],["color","dark"],["size","2"],["color","dark","size","small","name","cart"],["color","secondary"],["size-sm","4","size-md","4","size-xl","4",1,"headgrid"],["size-sm","5","size-md","5","size-xl","5",1,"headgrid"],["size-sm","3","size-md","3","size-xl","3",1,"headgrid"],[4,"ngFor","ngForOf"],["mode","ios","button","",2,"width","100% !important",3,"click"],["size-sm","4","size-md","4","size-xl","4"],["size-sm","5","size-md","5","size-xl","5"],["size-sm","3","size-md","3","size-xl","3"]],template:function(n,r){1&n&&(i.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),i._uU(3,"Asignar Estado"),i.qZA(),i.TgZ(4,"ion-buttons",2),i._UZ(5,"ion-back-button",3),i.qZA()()(),i.TgZ(6,"ion-content")(7,"ion-list")(8,"ion-item")(9,"ion-label")(10,"p"),i._uU(11,"Maquina"),i.qZA(),i.TgZ(12,"h1"),i._uU(13),i.qZA()(),i.TgZ(14,"ion-button",4),i.NdJ("click",function(){return r.FIniciarActvividad()}),i.TgZ(15,"ion-text",5),i._uU(16,"\xa0Iniciar Actividad \xa0"),i.qZA(),i._UZ(17,"ion-icon",6),i.qZA()(),i.YNc(18,t,12,7,"ion-item",7),i.TgZ(19,"ion-item")(20,"ion-label")(21,"p"),i._uU(22,"Centro de Costos"),i.qZA(),i.TgZ(23,"h1"),i._uU(24),i.qZA()()(),i.TgZ(25,"ion-item")(26,"ion-label")(27,"p"),i._uU(28,"F. Asignado"),i.qZA(),i.TgZ(29,"h1"),i._uU(30),i.qZA()()(),i.TgZ(31,"ion-item")(32,"ion-label")(33,"p"),i._uU(34),i.qZA(),i.TgZ(35,"h1"),i._uU(36),i.qZA()()(),i.TgZ(37,"ion-item")(38,"ion-label")(39,"p"),i._uU(40,"Cod. P.T."),i.qZA(),i._UZ(41,"input",8),i.TgZ(42,"ion-button",9),i.NdJ("click",function(){return r.visualizar_pdf(r.FormHtmlJs.plano_diseno)}),i._UZ(43,"ion-icon",10),i._uU(44," Ver Plano "),i.qZA()()(),i.TgZ(45,"ion-item")(46,"ion-label")(47,"p"),i._uU(48,"Pieza"),i.qZA(),i.TgZ(49,"h1"),i._uU(50),i.qZA()()(),i.TgZ(51,"ion-item")(52,"ion-label")(53,"p"),i._uU(54,"Nom. P.T."),i.qZA(),i.TgZ(55,"h1"),i._uU(56),i.qZA()()(),i.TgZ(57,"ion-item")(58,"ion-label")(59,"p"),i._uU(60,"Total Piezas"),i.qZA(),i.TgZ(61,"h1"),i._uU(62),i.qZA()()(),i.TgZ(63,"ion-item")(64,"ion-card")(65,"p"),i._uU(66,"Estado"),i.qZA(),i.TgZ(67,"ion-input",11),i.YNc(68,o,1,0,"ion-icon",12)(69,e,1,0,"ion-icon",13),i.TgZ(70,"ion-select",14),i.NdJ("ionChange",function(v){return r.CboEstadoChange(v)})("ionCancel",function(v){return r.CboEstadoCancel(v)})("ionBlur",function(v){return r.CboEstadoBlur(v)}),i.TgZ(71,"ion-select-option",15),i.NdJ("ionSelect",function(){return r.cboEstadoSelect()}),i._uU(72,"Asignado"),i.qZA(),i.TgZ(73,"ion-select-option",16),i.NdJ("ionSelect",function(){return r.cboEstadoSelect()}),i._uU(74,"Completo"),i.qZA()()()()(),i.TgZ(75,"ion-item")(76,"ion-label")(77,"p"),i._uU(78,"F. Cierre"),i.qZA(),i.TgZ(79,"h1"),i._uU(80),i.qZA()()(),i.YNc(81,a,11,0,"ion-item",7)(82,s,6,1,"ion-item",7)(83,m,10,1,"ion-item",7),i.qZA()()),2&n&&(i.xp6(5),i.Q6J("text",r.Cancelar),i.xp6(8),i.Oqu(r.FormHtmlJs.maquina),i.xp6(4),i.Q6J("hidden",r.scanActive),i.xp6(1),i.Q6J("ngIf",r.hide_div_reproceso),i.xp6(6),i.Oqu(r.FormHtmlJs.EQUIPOID),i.xp6(6),i.Oqu(r.FormHtmlJs.fasignado),i.xp6(4),i.hij("Nro. ",r.FormHtmlJs.avatar,""),i.xp6(2),i.Oqu(r.FormHtmlJs.correorden),i.xp6(5),i.s9C("value",r.FormHtmlJs.Y04001),i.xp6(9),i.Oqu(r.FormHtmlJs.nomclase),i.xp6(6),i.Oqu(r.FormHtmlJs.Y04002),i.xp6(6),i.Oqu(r.FormHtmlJs.cantidad),i.xp6(6),i.Q6J("ngIf","1"==r.IdCboEstadoActual),i.xp6(1),i.Q6J("ngIf","2"==r.IdCboEstadoActual),i.xp6(1),i.s9C("value",r.FormHtmlJs.idestado),i.xp6(10),i.Oqu(r.FormHtmlJs.fch_cierre_servicios_opt),i.xp6(1),i.Q6J("ngIf",r.FlagCCalidad),i.xp6(1),i.Q6J("ngIf",r.FlagCCalidad),i.xp6(1),i.Q6J("ngIf",r.FlagCCalidad))},dependencies:[d.Pc,d.YG,d.Sm,d.PM,d.hM,d.wI,d.W2,d.jY,d.Gu,d.gu,d.pK,d.Ie,d.Q$,d.q_,d.Nd,d.t9,d.n0,d.yW,d.wd,d.sr,d.QI,d.j9,d.oU,f.ez,f.sg,f.O5,E.u5],styles:[".selector[_ngcontent-%COMP%]{font-family:SFNSDisplay;font-size:12px;line-height:1.2;letter-spacing:.1px;color:#29235e;width:100%!important;max-width:100%!important;justify-content:center;border:solid 2px #e8ebf0;background-color:#fff;text-align:center}.CssReproceso[_ngcontent-%COMP%]{color:#b52024!important;font-size:large}"]}),u})()}}]);