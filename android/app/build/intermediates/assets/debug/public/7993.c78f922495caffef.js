"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7993,6485,5610,531,6702,6026,6172,7152,7779,1902,6039,7016,8553,1490,5494,7007,5932,3475,3605,7756,6400,7969,6041,3541],{6485:(y,v,_)=>{_.d(v,{Z:()=>i});var f=_(2519),P=_(6242),p=_(9862);let i=(()=>{var g;class A{constructor(t){this.httpClient=t,this.urlApiProd=f.N.UrlDomainLocal+"aw_modulos/prod/api/CAtencionServicios.php"}ListDatos(t,o,e,s){let r=JSON.stringify({s:t,acc:1,tipo:o,idtablet:e,idmenu:s});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}FUpdateEstadoServicio(t,o,e,s,r,a){let c=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:s,avatar:r,idasignaestacionof:a});return this.httpClient.post(this.urlApiProd,c).toPromise().then(d=>d)}ListSolsexQr(t,o,e,s,r){let a=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:s,avatar:r});return this.httpClient.post(this.urlApiProd,a).toPromise().then(c=>c)}load_cbos_pieza_material_maquina(t,o,e){let s=JSON.stringify({acc:3,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}load_cbos_motivo_pausa_maquina(){let t=JSON.stringify({acc:34});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindPersonal(t,o,e){let s=JSON.stringify({acc:4,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}ListFindServiciosByPieza(t,o,e,s,r,a){let c=JSON.stringify({acc:5,s:t,idpieza:o,tipServicio:e,idusu:s,iddevice:r,nomclase:a});return this.httpClient.post(this.urlApiProd,c).toPromise().then(d=>d)}agregarServiciosByPieza(t,o,e,s,r,a){let c=JSON.stringify({acc:32,s:t,nomclase:a,idpieza:o,tipServicio:e,idusu:s,iddevice:r});return this.httpClient.post(this.urlApiProd,c).toPromise().then(d=>d)}ListFindPiezaByActividad(t,o,e,s,r,a,c,d){let l=JSON.stringify({acc:6,s:t,idpieza:o,tipServicio:e,idusu:s,iddevice:r,idclase:a,idsubfamilia:c,nomsubfam:d});return this.httpClient.post(this.urlApiProd,l).toPromise().then(n=>n)}SaveInicioActividad(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}UpdateFechaInicioProd(t,o,e,s){let r=JSON.stringify({acc:28,fecha:t,pk_idservicio:o,avatar:e,idusuario:s});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}UpdateFechaFinProd(t,o,e,s){let r=JSON.stringify({acc:29,fecha:t,pk_idservicio:o,avatar:e,idusuario:s});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}ListFindActividades(t,o,e){let s=JSON.stringify({acc:9,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}ListFindActividadesHistorico(t,o,e){let s=JSON.stringify({acc:31,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}ListFindClaseByPieza(t,o,e,s,r){let a=JSON.stringify({acc:10,s:t,idpieza:o,tipServicio:e,idusu:s,iddevice:r});return this.httpClient.post(this.urlApiProd,a).toPromise().then(c=>c)}ListFindOfByClase(t,o,e,s,r,a){let c=JSON.stringify({acc:11,s:t,idsubfamilia:o,idclase:e,tipServicio:s,idusu:r,iddevice:a});return this.httpClient.post(this.urlApiProd,c).toPromise().then(d=>d)}ListFindQrByOf(t,o,e,s,r,a){let c=JSON.stringify({acc:12,s:t,idpieza:o,tipServicio:e,idusu:s,iddevice:r,nomclase:a});return this.httpClient.post(this.urlApiProd,c).toPromise().then(d=>d)}SaveControlCalidadByOf(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}ListFindSolicitudQcByOf(t,o,e,s){let r=JSON.stringify({acc:14,s:t,idofpterminado:o,idusu:e,iddevice:s});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}load_cbos_ma00(){let t=JSON.stringify({acc:15});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FCreaCorrelativo(){let t=JSON.stringify({acc:16});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}SaveReporteFalla(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}SaveRelevo(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}FCreaCorrelativoRelevo(){let t=JSON.stringify({acc:18});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}load_cbo_subprocesos(t,o,e){let s=JSON.stringify({acc:20,idmaquina:t,nom_pieza:o,servicio:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}load_cbos_any_edit_ini_actvidad(t,o,e){let s=JSON.stringify({acc:22,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}ListActividadesxTecnico(t,o,e){let s=JSON.stringify({iduser:t,acc:23,horainicio_filtro:o,horafin_filtro:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(r=>r)}SaveResumenDia(t,o){let e=JSON.stringify(o);return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}LoadFormDejarPiezasCalidad(t){let o=JSON.stringify({idpt:t,acc:25});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}LoadFormIniciaActividad(t,o){let e=JSON.stringify({idpt:t,avatar:o,acc:26});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}listado_principal_resumen_horas(t,o,e,s,r){let a=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:s,idusuario:r});return this.httpClient.post(this.urlApiProd,a).toPromise().then(c=>c)}listado_principal_cabecera(t,o,e,s,r){let a=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:s,idusuario:r});return this.httpClient.post(this.urlApiProd,a).toPromise().then(c=>c)}}return(g=A).\u0275fac=function(t){return new(t||g)(P.LFG(p.eN))},g.\u0275prov=P.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),A})()},6172:(y,v,_)=>{_.d(v,{X:()=>P});var f=_(6242);let P=(()=>{var p;class u{constructor(){console.log("UserProfileService.Constructor invoked.")}}return(p=u).\u0275fac=function(i){return new(i||p)},p.\u0275prov=f.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),u})()},7993:(y,v,_)=>{_.r(v),_.d(v,{ProdResumenDiarioHorasPage:()=>r});var f=_(5861),P=_(6814),p=_(95),u=_(6728),C=_(6471),i=_(6242),g=_(5472),A=_(6485),O=_(2014),t=_(4248),o=_(6172);const e=["idinputsearch_resumen"];function s(a,c){if(1&a){const d=i.EpF();i.TgZ(0,"ion-list",20),i.NdJ("click",function(){const h=i.CHM(d).$implicit,m=i.oxw();return i.KtG(m.FSelectedItem(h))}),i.TgZ(1,"ion-item-sliding")(2,"ion-item",21)(3,"ion-grid")(4,"ion-row")(5,"ion-col",22)(6,"ion-label"),i._uU(7),i.qZA()(),i.TgZ(8,"ion-col",23),i._uU(9),i.qZA(),i.TgZ(10,"ion-col",23),i._uU(11),i.qZA(),i.TgZ(12,"ion-col",24),i._uU(13),i.qZA(),i.TgZ(14,"ion-col",24),i._uU(15),i.qZA(),i.TgZ(16,"ion-col",25),i._uU(17),i.qZA(),i.TgZ(18,"ion-col",22),i._uU(19),i.qZA(),i.TgZ(20,"ion-col",23),i._uU(21),i.qZA()()()(),i.TgZ(22,"ion-item-options",26),i.NdJ("ionSwipe",function(){const h=i.CHM(d).$implicit,m=i.oxw();return i.KtG(m.mostrarConfirmacion(h))}),i.TgZ(23,"ion-item-option",27),i._uU(24," Clonar Registro"),i.qZA()()()()}if(2&a){const d=c.$implicit,n=c.even;i.ekj("odd",c.odd)("even",n),i.xp6(7),i.Oqu(d.Y04002),i.xp6(2),i.Oqu(d.avatar),i.xp6(2),i.Oqu(d.tiempo_estandar),i.xp6(2),i.Oqu(d.maquina),i.xp6(2),i.Oqu(d.codsmg),i.xp6(2),i.Oqu(d.fecha_inicio),i.xp6(2),i.Oqu(d.fecha_fin),i.xp6(2),i.Oqu(d.flag_agregado)}}let r=(()=>{var a;class c{constructor(l,n,h,m,E,T,D,Z){let S;this.navCtrl=l,this.loadingController=n,this.prodGestionServicioService=h,this.storage=m,this.alertController=E,this.router=T,this.globalVal=D,this.changeRef=Z,this.search_term_equipo="",this.switchButtonSegmento="",this.storage.get("USER_INFO").then(N=>{S=N,this.IdUsuarioLocal=S.user_id,this.NombresUsuarioLocal=S.user_name})}ionViewDidEnter(){console.log("volver a ver"),console.log(this.globalVal.global_user_id),this.lista_equipos_resumen(),console.log("entro a este evento ngOnInit")}ngOnInit(){}mostrarConfirmacion(l){var n=this;return(0,f.Z)(function*(){yield(yield n.alertController.create({header:"Confirmaci\ufffdn",message:"\ufffdDesea clonar el registro seleccionado?",cssClass:"alerta-confirma",mode:"ios",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Acci\ufffdn cancelada")}},{text:"Aceptar",handler:()=>{let m={state:l};l.flagResumenDiario="1",n.navCtrl.navigateForward(["addserviciostodet"],m)}}]})).present()})()}FNuevaActvividad(){let l;l={},l.CONCOMPONENTE="1",l.flagResumenDiario="1",this.navCtrl.navigateForward(["addserviciostodet"],{state:l})}FSelectedItem(l){console.log(l),l.flag=1;let n={state:l};console.log(n),this.navCtrl.navigateForward(["prod-ate-serv-inicia-actividad"],n)}lista_equipos_resumen(){console.log("entro a lista_equipos_resumen()"),this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(n=>{n.present(),this.prodGestionServicioService.listado_principal_cabecera(this.search_term_equipo,this.switchButtonSegmento,"30","H",this.globalVal.global_user_id).then(h=>{this.results_lista_resumen_cab=h,this.horas_asignadas=this.results_lista_resumen_cab[0].horas_labor_cab+" hrs.",this.equipo_asignado=this.results_lista_resumen_cab[0].equipo_asignado}).finally(()=>{console.log("ok")}),this.prodGestionServicioService.listado_principal_resumen_horas(this.search_term_equipo,this.switchButtonSegmento,"27","H",this.globalVal.global_user_id).then(h=>{this.results_lista_ot=h,this.porcentaje=this.results_lista_ot[0].productividad,this.total_horas=this.results_lista_ot[0].total_horas+" hrs."}).finally(()=>{typeof this.horas_asignadas>"u"&&(this.horas_asignadas="Sin Asignar.",this.equipo_asignado="Sin Asignar."),this.loadingController.dismiss()})})}}return(a=c).\u0275fac=function(l){return new(l||a)(i.Y36(g.SH),i.Y36(u.HT),i.Y36(A.Z),i.Y36(O.K),i.Y36(u.Br),i.Y36(t.F0),i.Y36(o.X),i.Y36(i.sBO))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-prod-resumen-diario-horas"]],viewQuery:function(l,n){if(1&l&&i.Gf(e,5),2&l){let h;i.iGM(h=i.CRH())&&(n.idinputsearch_resumen=h.first)}},standalone:!0,features:[i.jDz],decls:47,vars:7,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],["titulo","Resumen Diario Horas"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","debounce","2500","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Parametros",2,"width","98%",3,"ngModel","ngModelChange","ionChange"],["idinputsearch_resumen",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["id","titulo"],["size-sm","2","size-md","2","size-xl","2",1,"headgrid"],[2,"color","black"],["size","1",1,"headgrid"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],["size-sm","2","size-md","2","size-xl","3",1,"headgrid"],[3,"odd","even","click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["title","Nueva Actividad",3,"click"],["name","grid-outline"],[3,"click"],["button",""],["size-sm","2","size-md","2","size-xl","2"],["size","1"],["size-sm","1","size-md","1","size-xl","1"],["size-sm","2","size-md","2","size-xl","3"],["side","end",3,"ionSwipe"],["color","primary","expandable",""]],template:function(l,n){1&l&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()(),i.TgZ(7,"ion-item")(8,"ion-searchbar",6,7),i.NdJ("ngModelChange",function(m){return n.search_term_equipo=m})("ionChange",function(){return n.lista_equipos_resumen()}),i.qZA(),i.TgZ(10,"ion-icon",8,9),i.NdJ("click",function(){return n.lista_equipos_resumen()}),i.qZA()(),i.TgZ(12,"ion-item")(13,"h1",10),i._uU(14),i.qZA()(),i.TgZ(15,"ion-item")(16,"ion-grid")(17,"ion-row")(18,"ion-col",11)(19,"ion-label",12),i._uU(20,"Servicio"),i.qZA()(),i.TgZ(21,"ion-col",13)(22,"ion-label",12),i._uU(23,"Fuente"),i.qZA()(),i.TgZ(24,"ion-col",13)(25,"ion-label",12),i._uU(26,"Tiempo Estandar"),i.qZA()(),i.TgZ(27,"ion-col",14)(28,"ion-label",12),i._uU(29,"Maquina"),i.qZA()(),i.TgZ(30,"ion-col",14)(31,"ion-label",12),i._uU(32,"Equipo"),i.qZA()(),i.TgZ(33,"ion-col",15)(34,"ion-label",12),i._uU(35,"F.Inicio"),i.qZA()(),i.TgZ(36,"ion-col",11)(37,"ion-label",12),i._uU(38,"F.Fin"),i.qZA()(),i.TgZ(39,"ion-col",13)(40,"ion-label",12),i._uU(41,"Agregado"),i.qZA()()()()()(),i.TgZ(42,"ion-content"),i.YNc(43,s,25,12,"ion-list",16),i.TgZ(44,"ion-fab",17)(45,"ion-fab-button",18),i.NdJ("click",function(){return n.FNuevaActvividad()}),i._UZ(46,"ion-icon",19),i.qZA()()()),2&l&&(i.xp6(8),i.Q6J("ngModel",n.search_term_equipo),i.xp6(6),i.xDo("",n.NombresUsuarioLocal," | Porcentaje de Registro: ",n.porcentaje," % | Total Horas: ",n.total_horas," | Horas Asignadas: ",n.horas_asignadas," | Equipo Asignado: ",n.equipo_asignado,""),i.xp6(29),i.Q6J("ngForOf",n.results_lista_ot))},dependencies:[u.Pc,u.wI,u.W2,u.IJ,u.W4,u.jY,u.gu,u.Ie,u.u8,u.IK,u.td,u.Q$,u.q_,u.Nd,u.VI,u.sr,u.j9,P.ez,P.sg,p.u5,p.JJ,p.On,C.G]}),a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),c})()}}]);