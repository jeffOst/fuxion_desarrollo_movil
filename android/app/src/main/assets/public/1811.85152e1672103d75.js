"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1811,6485,5610,531,6702,6026],{6485:(S,m,c)=>{c.d(m,{Z:()=>f});var v=c(2519),u=c(6242),_=c(9862);let f=(()=>{var h;class g{constructor(i){this.httpClient=i,this.urlApiProd=v.N.UrlDomainLocal+"aw_modulos/prod/api/CAtencionServicios.php"}ListDatos(i,t,o,r){let e=JSON.stringify({s:i,acc:1,tipo:t,idtablet:o,idmenu:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}FUpdateEstadoServicio(i,t,o,r,e,s){let a=JSON.stringify({idofpterminado:i,acc:2,value:t,id_usuario_local:o,id_dispositivo:r,avatar:e,idasignaestacionof:s});return this.httpClient.post(this.urlApiProd,a).toPromise().then(d=>d)}ListSolsexQr(i,t,o,r,e){let s=JSON.stringify({idofpterminado:i,acc:2,value:t,id_usuario_local:o,id_dispositivo:r,avatar:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(a=>a)}load_cbos_pieza_material_maquina(i,t,o){let r=JSON.stringify({acc:3,id_usuario_local:t,id_dispositivo:o,idtipserv:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}load_cbos_motivo_pausa_maquina(){let i=JSON.stringify({acc:34});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}ListFindPersonal(i,t,o){let r=JSON.stringify({acc:4,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListFindServiciosByPieza(i,t,o,r,e,s){let a=JSON.stringify({acc:5,s:i,idpieza:t,tipServicio:o,idusu:r,iddevice:e,nomclase:s});return this.httpClient.post(this.urlApiProd,a).toPromise().then(d=>d)}agregarServiciosByPieza(i,t,o,r,e,s){let a=JSON.stringify({acc:32,s:i,nomclase:s,idpieza:t,tipServicio:o,idusu:r,iddevice:e});return this.httpClient.post(this.urlApiProd,a).toPromise().then(d=>d)}ListFindPiezaByActividad(i,t,o,r,e,s,a,d){let p=JSON.stringify({acc:6,s:i,idpieza:t,tipServicio:o,idusu:r,iddevice:e,idclase:s,idsubfamilia:a,nomsubfam:d});return this.httpClient.post(this.urlApiProd,p).toPromise().then(P=>P)}SaveInicioActividad(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}UpdateFechaInicioProd(i,t,o,r){let e=JSON.stringify({acc:28,fecha:i,pk_idservicio:t,avatar:o,idusuario:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}UpdateFechaFinProd(i,t,o,r){let e=JSON.stringify({acc:29,fecha:i,pk_idservicio:t,avatar:o,idusuario:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}ListFindActividades(i,t,o){let r=JSON.stringify({acc:9,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListFindActividadesHistorico(i,t,o){let r=JSON.stringify({acc:31,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListFindClaseByPieza(i,t,o,r,e){let s=JSON.stringify({acc:10,s:i,idpieza:t,tipServicio:o,idusu:r,iddevice:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(a=>a)}ListFindOfByClase(i,t,o,r,e,s){let a=JSON.stringify({acc:11,s:i,idsubfamilia:t,idclase:o,tipServicio:r,idusu:e,iddevice:s});return this.httpClient.post(this.urlApiProd,a).toPromise().then(d=>d)}ListFindQrByOf(i,t,o,r,e,s){let a=JSON.stringify({acc:12,s:i,idpieza:t,tipServicio:o,idusu:r,iddevice:e,nomclase:s});return this.httpClient.post(this.urlApiProd,a).toPromise().then(d=>d)}SaveControlCalidadByOf(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindSolicitudQcByOf(i,t,o,r){let e=JSON.stringify({acc:14,s:i,idofpterminado:t,idusu:o,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}load_cbos_ma00(){let i=JSON.stringify({acc:15});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}FCreaCorrelativo(){let i=JSON.stringify({acc:16});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}SaveReporteFalla(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}SaveRelevo(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FCreaCorrelativoRelevo(){let i=JSON.stringify({acc:18});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}load_cbo_subprocesos(i,t,o){let r=JSON.stringify({acc:20,idmaquina:i,nom_pieza:t,servicio:o});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}load_cbos_any_edit_ini_actvidad(i,t,o){let r=JSON.stringify({acc:22,id_usuario_local:t,id_dispositivo:o,idtipserv:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListActividadesxTecnico(i,t,o){let r=JSON.stringify({iduser:i,acc:23,horainicio_filtro:t,horafin_filtro:o});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}SaveResumenDia(i,t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(r=>r)}LoadFormDejarPiezasCalidad(i){let t=JSON.stringify({idpt:i,acc:25});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}LoadFormIniciaActividad(i,t){let o=JSON.stringify({idpt:i,avatar:t,acc:26});return this.httpClient.post(this.urlApiProd,o).toPromise().then(r=>r)}listado_principal_resumen_horas(i,t,o,r,e){let s=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:r,idusuario:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(a=>a)}listado_principal_cabecera(i,t,o,r,e){let s=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:r,idusuario:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(a=>a)}}return(h=g).\u0275fac=function(i){return new(i||h)(u.LFG(_.eN))},h.\u0275prov=u.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),g})()},1811:(S,m,c)=>{c.r(m),c.d(m,{ProdAteServPopPersonalPage:()=>i});var v=c(5861),u=c(6814),_=c(95),l=c(6728),n=c(6242),f=c(6485),h=c(2014);const g=["IdHtmlInputSearch"];function C(t,o){if(1&t){const r=n.EpF();n.TgZ(0,"ion-list",7)(1,"ion-item",8),n.NdJ("click",function(){const s=n.CHM(r),a=s.$implicit,d=s.index,p=n.oxw();return n.KtG(p.FSelectedItem(a.id_personal,a.nombres_tecnico,d))}),n.TgZ(2,"ion-label")(3,"strong"),n._uU(4),n.qZA(),n.TgZ(5,"p"),n._uU(6),n.qZA()()()()}if(2&t){const r=o.$implicit,s=o.even;n.ekj("odd",o.odd)("even",s),n.xp6(4),n.Oqu(r.nombres_tecnico),n.xp6(2),n.Oqu(r.cargo)}}let i=(()=>{var t;class o{constructor(e,s,a,d){let p;this.ApiService=e,this.loadingCtrl=s,this.modalCtrl=a,this.storage=d,this.storage.get("USER_INFO").then(P=>{p=P,this.NombresUsuarioLocal=p.user_name,this.IdUsuarioLocal=p.user_id}),this.storage.get("DEVICE_INFO").then(P=>{p=P,this.NombreDispositivo=p.name,this.IdDispositivo=p.uuid})}ngOnInit(){this.nombre_tecnico=null==this.nombre_tecnico?"":this.nombre_tecnico,this.FFindRows()}FOnCloseModel(e,s,a){var d=this;return(0,v.Z)(function*(){const p={id:e,nombres:s};console.log(p),yield d.modalCtrl.dismiss(p)})()}FSelectedItem(e,s,a){this.FOnCloseModel(e,s,a)}FCloseModal(){this.nombre_tecnico=null==this.nombre_tecnico?"":this.nombre_tecnico,this.id_personal=null==this.id_personal?"":this.id_personal,this.FOnCloseModel(this.id_personal,this.nombre_tecnico,0)}FFindRows(){this.loadingCtrl.create({message:"Cargando lista...",translucent:!0}).then(s=>{s.present(),this.ApiService.ListFindPersonal(this.NgModInputSearch,this.IdUsuarioLocal,this.IdDispositivo).then(a=>{this.DataSetGrid=a}).finally(()=>{this.loadingCtrl.dismiss()})})}}return(t=o).\u0275fac=function(e){return new(e||t)(n.Y36(f.Z),n.Y36(l.HT),n.Y36(l.IN),n.Y36(h.K))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-prod-ate-serv-pop-personal"]],viewQuery:function(e,s){if(1&e&&n.Gf(g,5),2&e){let a;n.iGM(a=n.CRH())&&(s.IdHtmlInputSearch=a.first)}},inputs:{titulo_modal:"titulo_modal",nombre_tecnico:"nombre_tecnico",id_personal:"id_personal"},standalone:!0,features:[n.jDz],decls:13,vars:3,consts:[["mode","ios"],["slot","start"],[1,"",3,"click"],["part","icon","aria-hidden","true","role","img","name","chevron-back-outline",1,"md","hydrated"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar parametros",2,"width","100%",3,"ngModel","ngModelChange","ionChange"],["IdHtmlInputSearch",""],["lines","full","inset","true",3,"odd","even",4,"ngFor","ngForOf"],["lines","full","inset","true"],["button","",3,"click"]],template:function(e,s){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),n._uU(3),n.qZA(),n.TgZ(4,"ion-buttons",1)(5,"ion-button",2),n.NdJ("click",function(){return s.FCloseModal()}),n._UZ(6,"ion-icon",3),n._uU(7," Cancelar "),n.qZA()()()(),n.TgZ(8,"ion-content")(9,"ion-item")(10,"ion-searchbar",4,5),n.NdJ("ngModelChange",function(d){return s.NgModInputSearch=d})("ionChange",function(){return s.FFindRows()}),n.qZA()(),n.YNc(12,C,7,6,"ion-list",6),n.qZA()),2&e&&(n.xp6(3),n.Oqu(s.titulo_modal),n.xp6(7),n.Q6J("ngModel",s.NgModInputSearch),n.xp6(2),n.Q6J("ngForOf",s.DataSetGrid))},dependencies:[l.Pc,l.YG,l.Sm,l.W2,l.Gu,l.gu,l.Ie,l.Q$,l.q_,l.VI,l.wd,l.sr,l.j9,u.ez,u.sg,_.u5,_.JJ,_.On],styles:[".back_button_geo[_ngcontent-%COMP%]{--background-hover: transparent;--background-hover-opacity: 1;--background-focused: currentColor;--background-focused-opacity: .1;--border-radius: 4px;--color: var(--ion-color-primary, #3880ff);--icon-margin-end: -5px;--icon-margin-start: -4px;--icon-font-size: 1.85em;--min-height: 32px;font-size:17px;--background: transparent;--color-focused: currentColor;--color-hover: currentColor;--icon-margin-top: 0;--icon-margin-bottom: 0;--icon-padding-top: 0;--icon-padding-end: 0;--icon-padding-bottom: 0;--icon-padding-start: 0;--margin-top: 0;--margin-end: 0;--margin-bottom: 0;--margin-start: 0;--min-width: auto;--min-height: auto;--padding-top: 0;--padding-end: 0;--padding-bottom: 0;--padding-start: 0;--opacity: 1;--ripple-color: currentColor;--transition: background-color, opacity .1s linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;user-select:none;font-kerning:none}"]}),o})()}}]);