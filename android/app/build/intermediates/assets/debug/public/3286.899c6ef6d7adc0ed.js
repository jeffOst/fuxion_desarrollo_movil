"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3286,6485,5610,531,6702,6026],{6485:(F,A,p)=>{p.d(A,{Z:()=>C});var f=p(2519),v=p(6242),u=p(9862);let C=(()=>{var g;class O{constructor(t){this.httpClient=t,this.urlApiProd=f.N.UrlDomainLocal+"aw_modulos/prod/api/CAtencionServicios.php"}ListDatos(t,o,e,n){let s=JSON.stringify({s:t,acc:1,tipo:o,idtablet:e,idmenu:n});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}FUpdateEstadoServicio(t,o,e,n,s,l){let r=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:n,avatar:s,idasignaestacionof:l});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}ListSolsexQr(t,o,e,n,s){let l=JSON.stringify({idofpterminado:t,acc:2,value:o,id_usuario_local:e,id_dispositivo:n,avatar:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(r=>r)}load_cbos_pieza_material_maquina(t,o,e){let n=JSON.stringify({acc:3,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}ListFindPersonal(t,o,e){let n=JSON.stringify({acc:4,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}ListFindServiciosByPieza(t,o,e,n,s,l){let r=JSON.stringify({acc:5,s:t,idpieza:o,tipServicio:e,idusu:n,iddevice:s,nomclase:l});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}agregarServiciosByPieza(t,o,e,n,s,l){let r=JSON.stringify({acc:32,s:t,nomclase:l,idpieza:o,tipServicio:e,idusu:n,iddevice:s});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}ListFindPiezaByActividad(t,o,e,n,s,l,r,a){let d=JSON.stringify({acc:6,s:t,idpieza:o,tipServicio:e,idusu:n,iddevice:s,idclase:l,idsubfamilia:r,nomsubfam:a});return this.httpClient.post(this.urlApiProd,d).toPromise().then(c=>c)}SaveInicioActividad(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}UpdateFechaInicioProd(t,o,e,n){let s=JSON.stringify({acc:28,fecha:t,pk_idservicio:o,avatar:e,idusuario:n});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}UpdateFechaFinProd(t,o,e,n){let s=JSON.stringify({acc:29,fecha:t,pk_idservicio:o,avatar:e,idusuario:n});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}ListFindActividades(t,o,e){let n=JSON.stringify({acc:9,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}ListFindActividadesHistorico(t,o,e){let n=JSON.stringify({acc:31,s:t,idusu:o,iddevice:e});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}ListFindClaseByPieza(t,o,e,n,s){let l=JSON.stringify({acc:10,s:t,idpieza:o,tipServicio:e,idusu:n,iddevice:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(r=>r)}ListFindOfByClase(t,o,e,n,s,l){let r=JSON.stringify({acc:11,s:t,idsubfamilia:o,idclase:e,tipServicio:n,idusu:s,iddevice:l});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}ListFindQrByOf(t,o,e,n,s,l){let r=JSON.stringify({acc:12,s:t,idpieza:o,tipServicio:e,idusu:n,iddevice:s,nomclase:l});return this.httpClient.post(this.urlApiProd,r).toPromise().then(a=>a)}SaveControlCalidadByOf(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}ListFindSolicitudQcByOf(t,o,e,n){let s=JSON.stringify({acc:14,s:t,idofpterminado:o,idusu:e,iddevice:n});return this.httpClient.post(this.urlApiProd,s).toPromise().then(l=>l)}load_cbos_ma00(){let t=JSON.stringify({acc:15});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FCreaCorrelativo(){let t=JSON.stringify({acc:16});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}SaveReporteFalla(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}SaveRelevo(t){let o=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}FCreaCorrelativoRelevo(){let t=JSON.stringify({acc:18});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}load_cbo_subprocesos(t,o,e){let n=JSON.stringify({acc:20,idmaquina:t,nom_pieza:o,servicio:e});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}load_cbos_any_edit_ini_actvidad(t,o,e){let n=JSON.stringify({acc:22,id_usuario_local:o,id_dispositivo:e,idtipserv:t});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}ListActividadesxTecnico(t,o,e){let n=JSON.stringify({iduser:t,acc:23,horainicio_filtro:o,horafin_filtro:e});return this.httpClient.post(this.urlApiProd,n).toPromise().then(s=>s)}SaveResumenDia(t,o){let e=JSON.stringify(o);return this.httpClient.post(this.urlApiProd,e).toPromise().then(n=>n)}LoadFormDejarPiezasCalidad(t){let o=JSON.stringify({idpt:t,acc:25});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}LoadFormIniciaActividad(t,o){let e=JSON.stringify({idpt:t,avatar:o,acc:26});return this.httpClient.post(this.urlApiProd,e).toPromise().then(n=>n)}listado_principal_resumen_horas(t,o,e,n,s){let l=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:n,idusuario:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(r=>r)}listado_principal_cabecera(t,o,e,n,s){let l=JSON.stringify({s:t,acc:e,tipo:o,idtablet:"this.device.uuid",madre_hija:n,idusuario:s});return this.httpClient.post(this.urlApiProd,l).toPromise().then(r=>r)}}return(g=O).\u0275fac=function(t){return new(t||g)(v.LFG(u.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),O})()},3286:(F,A,p)=>{p.r(A),p.d(A,{ProdListActiHistoricoPage:()=>n});var f=p(6814),v=p(95),u=p(6728),Z=p(6471),i=p(6242),C=p(5472),g=p(6485),O=p(2014),T=p(4248);const t=["IdHtmlInputSearch"];function o(s,l){if(1&s){const r=i.EpF();i.TgZ(0,"ion-item",35),i.NdJ("click",function(){const c=i.CHM(r).$implicit,h=i.oxw(2);return i.KtG(h.FSelectedItem(c))}),i.TgZ(1,"ion-grid",36)(2,"ion-row",37)(3,"ion-col",38),i._uU(4),i.qZA(),i.TgZ(5,"ion-col",39),i._uU(6),i.qZA(),i.TgZ(7,"ion-col",40),i._uU(8),i.qZA(),i.TgZ(9,"ion-col",41),i._uU(10),i.qZA(),i.TgZ(11,"ion-col",42),i._uU(12),i.qZA(),i.TgZ(13,"ion-col",40)(14,"ion-label",43),i._uU(15),i.qZA()(),i.TgZ(16,"ion-col",38)(17,"ion-label",44),i._uU(18),i.qZA()(),i.TgZ(19,"ion-col",45),i._uU(20),i.qZA(),i.TgZ(21,"ion-col",38),i._uU(22),i.qZA(),i.TgZ(23,"ion-col",38),i._uU(24),i.qZA(),i.TgZ(25,"ion-col",40),i._uU(26),i.qZA(),i.TgZ(27,"ion-col",40),i._uU(28),i.qZA(),i.TgZ(29,"ion-col",46),i._uU(30),i.qZA(),i.TgZ(31,"ion-col",38),i._uU(32),i.qZA(),i.TgZ(33,"ion-col",40)(34,"ion-label",43),i._uU(35),i.qZA()()()()()}if(2&s){const r=l.$implicit,a=i.oxw(2);i.Q6J("hidden",a.scanActive),i.xp6(4),i.Oqu(r.nombres_tecnico),i.xp6(2),i.Oqu(r.avatar),i.xp6(2),i.Oqu(r.correorden),i.xp6(2),i.Oqu(r.cantidad_total),i.xp6(2),i.Oqu(r.cantidad_revisada),i.xp6(2),i.Q6J("color","3"!=r.idestado?"warning":"dark"),i.xp6(1),i.Oqu(r.codsmg),i.xp6(3),i.Oqu(r.nomclase),i.xp6(2),i.Oqu(r.Y04002),i.xp6(2),i.Oqu(r.fecha_inicio),i.xp6(2),i.Oqu(r.fecha_fin),i.xp6(2),i.Oqu(r.tiempo),i.xp6(2),i.Oqu(r.tiempo_pausa),i.xp6(2),i.Oqu(r.motivo_pausa),i.xp6(2),i.Oqu(r.observacion),i.xp6(2),i.Q6J("color","3"!=r.idestado?"warning":"dark"),i.xp6(1),i.Oqu(r.Nsemanaofmes)}}function e(s,l){if(1&s&&(i.TgZ(0,"ion-item-group")(1,"ion-item-divider",31),i._UZ(2,"ion-icon",32),i.TgZ(3,"div",33),i._uU(4),i.qZA()(),i.YNc(5,o,36,18,"ion-item",34),i.qZA()),2&s){const r=l.$implicit,a=i.oxw();i.Udp("--background",a.scanActive?"#00000000":"#fff"),i.xp6(1),i.Q6J("hidden",a.scanActive),i.xp6(3),i.Oqu(r.key),i.xp6(1),i.Q6J("ngForOf",r.values)}}let n=(()=>{var s;class l{constructor(a,d,c,h,P){let _;this.loadingController=a,this.prodGestionServicioService=d,this.storage=c,this.navCtrl=h,this.router=P,this.TituloDinamico="Registro de Orden de Fabricacion",this.NgModInputSearch="",this.scanActive=!1,this.navParams=this.router.getCurrentNavigation().extras.state,console.log("this.navParams::>",this.navParams),console.log(this.idMenu),this.idMenu="0",this.menu="",this.storage.get("USER_INFO").then(m=>{_=m,this.NombresUsuarioLocal=_.user_name,this.IdUsuarioLocal=_.user_id}),this.storage.get("DEVICE_INFO").then(m=>{_=m,this.NombreDispositivo=_.name,this.IdDispositivo=_.uuid})}ngOnInit(){this.FFindRows()}ionViewDidLoad(){}ionViewDidEnter(){}ngOnDestroy(){}FSelectedItem(a){console.log(a);let d={state:a};console.log(d),this.navCtrl.navigateForward(["prod-ate-serv-inicia-actividad"],d)}FReporteFalla(){console.log("row"),this.navCtrl.navigateForward(["prod-ate-serv-reporte-falla"],{state:{idmenu:this.idMenu,menu:this.menu}})}FRelevo(){this.navCtrl.navigateForward(["prod-ate-serv-relevo"],{state:{idmenu:this.idMenu,menu:this.menu}})}FIniciarActvividad(){let a;a={},a.CONCOMPONENTE=1,this.navCtrl.navigateForward(["addserviciostodet"],{state:a})}FFindRows(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(d=>{d.present(),this.prodGestionServicioService.ListFindActividadesHistorico(this.NgModInputSearch,this.IdUsuarioLocal,this.IdDispositivo).then(c=>{this.MultiArrayServicios=c,this.MultiArrayServicios=this.groupByArray(this.MultiArrayServicios,"maquina","hora_ini_acti_otd")}).finally(()=>{this.loadingController.dismiss()})})}groupByArray(a,d,c){return a.reduce(function(h,P){let _=d instanceof Function?d(P):P[d],m=h.find(S=>S&&S.key===_);return m?m.values.push(P):h.push({key:_,values:[P]}),h},[])}sortArray(a,d,c){return c=c||1,a.sort(function(P,_){let m=0;return P[d]>_[d]?m=1*c:P[d]<_[d]&&(m=-1*c),m}),a}FListarActvidades(){this.navCtrl.navigateForward(["prod-ate-serv-list-actividades"],{state:{idmenu:this.idMenu,menu:this.TituloDinamico}})}}return(s=l).\u0275fac=function(a){return new(a||s)(i.Y36(u.HT),i.Y36(g.Z),i.Y36(O.K),i.Y36(C.SH),i.Y36(T.F0))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-prod-list-acti-historico"]],viewQuery:function(a,d){if(1&a&&i.Gf(t,5),2&a){let c;i.iGM(c=i.CRH())&&(d.idInputSearch=c.first)}},standalone:!0,features:[i.jDz],decls:74,vars:3,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],[3,"titulo"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar par\xe1metros",3,"ngModel","ngModelChange","ionChange"],["IdHtmlInputSearch",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["scroll-x","true"],[1,"",2,"width","150% !important"],[2,"width","100% !important"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],[2,"color","black"],["size-sm","0.3","size-md","0.3","size-xl","0.3",1,"headgrid"],["size-sm","0.5","size-md","0.5","size-xl","0.5",1,"headgrid"],["size-sm","0.4","size-md","0.4","size-xl","0.4",1,"headgrid"],["size-sm","0.5","size-md","0.4","size-xl","0.4",1,"headgrid"],["size-sm","2","size-md","2","size-xl","2",1,"headgrid"],[3,"--background",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["title","REPORTE FALLA EQUIPO",3,"click"],["name","build-outline"],["title","RELEVO",3,"click"],["name","log-out-outline"],["title","Nueva Actividad",3,"click"],["name","grid-outline"],["mode","ios",2,"align-items","center"],["fill","clear","expand","block",2,"width","30%",3,"click"],["color","primary",2,"font","size 6px"],["color","light",2,"height","30px !important",3,"hidden"],["name","ellipse","color","dark","slot","start"],[1,"ion-text-uppercase"],["button","",3,"hidden","click",4,"ngFor","ngForOf"],["button","",3,"hidden","click"],["fixed","false",2,"width","150% !important"],[2,"width","100% !important","font-size","0.7em"],["size-sm","1","size-md","1","size-xl","1"],["size-sm","0.3","size-md","0.3","size-xl","0.3"],["size-sm","0.5","size-md","0.5","size-xl","0.5"],["size-sm","0.4","size-md","0.4","size-xl","0.4"],["size-sm","0.5","size-md","0.4","size-xl","0.4"],[3,"color"],[1,"ion-text-wrap"],["size-sm","2","size-md","2","size-xl","2"],["size-sm","1.1","size-md","1.1","size-xl","1.1"]],template:function(a,d){1&a&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()(),i.TgZ(7,"ion-item")(8,"ion-searchbar",6,7),i.NdJ("ngModelChange",function(h){return d.NgModInputSearch=h})("ionChange",function(){return d.FFindRows()}),i.qZA(),i.TgZ(10,"ion-icon",8,9),i.NdJ("click",function(){return d.FFindRows()}),i.qZA()()(),i.TgZ(12,"ion-content",10)(13,"ion-list",11)(14,"ion-row",12)(15,"ion-col",13)(16,"ion-label",14),i._uU(17,"Operario"),i.qZA()(),i.TgZ(18,"ion-col",15)(19,"ion-label",14),i._uU(20,"Tipo"),i.qZA()(),i.TgZ(21,"ion-col",16)(22,"ion-label",14),i._uU(23,"Nro. OT/OF"),i.qZA()(),i.TgZ(24,"ion-col",17)(25,"ion-label",14),i._uU(26,"Cantidad Total"),i.qZA()(),i.TgZ(27,"ion-col",18)(28,"ion-label",14),i._uU(29,"Cantidad Terminada"),i.qZA()(),i.TgZ(30,"ion-col",16)(31,"ion-label",14),i._uU(32,"Equipo"),i.qZA()(),i.TgZ(33,"ion-col",13)(34,"ion-label",14),i._uU(35,"Pieza"),i.qZA()(),i.TgZ(36,"ion-col",19)(37,"ion-label",14),i._uU(38,"Servicio"),i.qZA()(),i.TgZ(39,"ion-col",13)(40,"ion-label",14),i._uU(41,"F. Inicio"),i.qZA()(),i.TgZ(42,"ion-col",13)(43,"ion-label",14),i._uU(44,"F. Fin"),i.qZA()(),i.TgZ(45,"ion-col",16)(46,"ion-label",14),i._uU(47,"Duracion"),i.qZA()(),i.TgZ(48,"ion-col",16)(49,"ion-label",14),i._uU(50,"Tiempo Pausa Min."),i.qZA()(),i.TgZ(51,"ion-col",13)(52,"ion-label",14),i._uU(53,"Motivo Pausa"),i.qZA()(),i.TgZ(54,"ion-col",13)(55,"ion-label",14),i._uU(56,"Observacion"),i.qZA()(),i.TgZ(57,"ion-col",16)(58,"ion-label",14),i._uU(59,"Semana"),i.qZA()()(),i.YNc(60,e,6,5,"ion-item-group",20),i.qZA(),i.TgZ(61,"ion-fab",21)(62,"ion-fab-button",22),i.NdJ("click",function(){return d.FReporteFalla()}),i._UZ(63,"ion-icon",23),i.qZA(),i.TgZ(64,"ion-fab-button",24),i.NdJ("click",function(){return d.FRelevo()}),i._UZ(65,"ion-icon",25),i.qZA(),i.TgZ(66,"ion-fab-button",26),i.NdJ("click",function(){return d.FIniciarActvividad()}),i._UZ(67,"ion-icon",27),i.qZA()()(),i.TgZ(68,"ion-footer")(69,"ion-card",28)(70,"ion-button",29),i.NdJ("click",function(){return d.FListarActvidades()}),i.TgZ(71,"ion-label",30),i._UZ(72,"ion-icon",27),i._uU(73," Orden de Fabricacion en Proceso "),i.qZA()()()()),2&a&&(i.xp6(4),i.s9C("titulo",d.TituloDinamico),i.xp6(4),i.Q6J("ngModel",d.NgModInputSearch),i.xp6(52),i.Q6J("ngForOf",d.MultiArrayServicios))},dependencies:[u.Pc,u.YG,u.PM,u.wI,u.W2,u.IJ,u.W4,u.fr,u.jY,u.gu,u.Ie,u.rH,u.Ub,u.Q$,u.q_,u.Nd,u.VI,u.sr,u.j9,f.ez,f.sg,v.u5,v.JJ,v.On,Z.G]}),l})()}}]);