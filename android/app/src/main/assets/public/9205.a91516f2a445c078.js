"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9205],{6429:(E,v,l)=>{l.r(v),l.d(v,{ProdAteServListActividadesPage:()=>z});var Z=l(5861),g=l(6814),m=l(95),a=l(6728),p=l(4248),f=l(6471),i=l(6242),h=l(5472),P=l(6485),T=l(2014);const b=["IdHtmlInputSearch"];function q(s,u){1&s&&i._UZ(0,"ion-icon",35)}function U(s,u){if(1&s&&i._UZ(0,"ion-icon",49),2&s){const n=i.oxw().$implicit;i.Q6J("color","2"==n.idestado?"danger":"success")}}function O(s,u){if(1&s){const n=i.EpF();i.TgZ(0,"ion-item",36),i.NdJ("click",function(){const t=i.CHM(n).$implicit,r=i.oxw(2);return i.KtG(r.FSelectedItem(t))}),i.TgZ(1,"ion-grid",37)(2,"ion-row",38)(3,"ion-col",39),i.YNc(4,U,1,1,"ion-icon",40),i.qZA(),i.TgZ(5,"ion-col",41),i._uU(6),i.qZA(),i.TgZ(7,"ion-col",42),i._uU(8),i.qZA(),i.TgZ(9,"ion-col",39),i._uU(10),i.qZA(),i.TgZ(11,"ion-col",39),i._uU(12),i.qZA(),i.TgZ(13,"ion-col",43)(14,"ion-label",44),i._uU(15),i.qZA()(),i.TgZ(16,"ion-col",41)(17,"ion-label",45),i._uU(18),i.qZA()(),i.TgZ(19,"ion-col",46),i._uU(20),i.qZA(),i.TgZ(21,"ion-col",47),i._uU(22),i.qZA(),i.TgZ(23,"ion-col",47),i._uU(24),i.qZA(),i.TgZ(25,"ion-col",43),i._uU(26),i.qZA(),i.TgZ(27,"ion-col",48),i._uU(28),i.qZA(),i.TgZ(29,"ion-col",47),i._uU(30),i.qZA(),i.TgZ(31,"ion-col",47),i._uU(32),i.qZA(),i.TgZ(33,"ion-col",43),i._uU(34),i.qZA(),i.TgZ(35,"ion-col",41),i._uU(36),i.qZA(),i.TgZ(37,"ion-col",42)(38,"ion-label",44),i._uU(39),i.qZA()()()()()}if(2&s){const n=u.$implicit,e=i.oxw().$implicit,o=i.oxw();i.Q6J("hidden",o.scanActive),i.xp6(4),i.Q6J("ngIf",1==e.values[0].orden_actividad),i.xp6(2),i.Oqu(n.nombres_tecnico),i.xp6(2),i.Oqu(n.correorden),i.xp6(2),i.Oqu(n.avatar),i.xp6(2),i.Oqu(n.cantidad_total),i.xp6(2),i.Q6J("color","dark"),i.xp6(1),i.Oqu(n.codsmg),i.xp6(3),i.Oqu(n.nomclase),i.xp6(2),i.Oqu(n.Y04002),i.xp6(2),i.Oqu(n.fecha_inicio),i.xp6(2),i.Oqu(n.fecha_fin),i.xp6(2),i.Oqu(n.tiempo),i.xp6(2),i.Oqu(n.motivo_pausa),i.xp6(2),i.Oqu(n.fecha_inicio_pausa),i.xp6(2),i.Oqu(n.fecha_fin_pausa),i.xp6(2),i.Oqu(n.tiempo_pausa),i.xp6(2),i.Oqu(n.observacion),i.xp6(2),i.Q6J("color","dark"),i.xp6(1),i.Oqu(n.Nsemanaofmes)}}function x(s,u){if(1&s&&(i.TgZ(0,"ion-item-group")(1,"ion-item-divider",31)(2,"div",32)(3,"b"),i._uU(4),i.qZA(),i._uU(5," \xa0 "),i.YNc(6,q,1,0,"ion-icon",33),i.qZA()(),i.YNc(7,O,40,20,"ion-item",34),i.qZA()),2&s){const n=u.$implicit,e=i.oxw();i.Udp("--background",e.scanActive?"#00000000":"#fff"),i.xp6(1),i.Q6J("hidden",e.scanActive),i.xp6(3),i.Oqu(n.key),i.xp6(2),i.Q6J("ngIf",2==n.values[0].orden_actividad),i.xp6(1),i.Q6J("ngForOf",n.values)}}let z=(()=>{var s;class u{constructor(e,o,t,r,d){let c;this.loadingController=e,this.prodGestionServicioService=o,this.storage=t,this.navCtrl=r,this.router=d,this.TituloDinamico="Orden de Fabricacion en Proceso",this.NgModInputSearch="",this.scanActive=!1,this.navParams=this.router.getCurrentNavigation().extras.state,console.log("this.navParams::>",this.navParams),this.idMenu=this.navParams.idmenu,this.menu=this.navParams.menu,this.storage.get("USER_INFO").then(_=>{c=_,this.NombresUsuarioLocal=c.user_name,this.IdUsuarioLocal=c.user_id}),this.storage.get("DEVICE_INFO").then(_=>{c=_,this.NombreDispositivo=c.name,this.IdDispositivo=c.uuid})}ngOnInit(){this.routerSubscription=this.router.events.subscribe(e=>{e instanceof p.m2&&"/prod-ate-serv-list-actividades"===e.url&&this.FFindRows(0)})}ngOnDestroy(){this.routerSubscription&&this.routerSubscription.unsubscribe()}ionViewDidLoad(){}ionViewDidEnter(){}FSelectedItem(e){console.log(e);let o={state:e};console.log(o),this.navCtrl.navigateForward(["prod-ate-serv-inicia-actividad"],o)}FReporteFalla(){console.log("row"),this.navCtrl.navigateForward(["prod-ate-serv-reporte-falla"],{state:{idmenu:this.idMenu,menu:this.menu}})}FRelevo(){this.navCtrl.navigateForward(["prod-ate-serv-relevo"],{state:{idmenu:this.idMenu,menu:this.menu}})}FIniciarActvividad(e){let o;o={},o.CONCOMPONENTE=1,o.flag_mostrar_opciones=e,this.navCtrl.navigateForward(["addserviciostodet"],{state:o})}FFindRows(e){var o=this;return(0,Z.Z)(function*(){"1"==e&&(o.navParams.maquina="",o.navParams.idmaquina=""),console.log("jeffrey aqyiuuiii"),console.log(o.navParams.maquina),console.log(o.navParams.idmaquina);const t=yield o.loadingController.create({message:"Cargando lista...",translucent:!0});yield t.present();try{const r=yield o.prodGestionServicioService.ListFindActividades(o.NgModInputSearch,o.IdUsuarioLocal,o.IdDispositivo,o.navParams.idmaquina);o.MultiArrayServicios=r,o.MultiArrayServicios=o.groupByArray(o.MultiArrayServicios,"maquina","hora_ini_acti_otd")}catch(r){console.error("Error al cargar las actividades:",r)}finally{yield t.dismiss()}})()}groupByArray(e,o,t){return e.reduce(function(r,d){let c=o instanceof Function?o(d):d[o],_=r.find(A=>A&&A.key===c);return _?_.values.push(d):r.push({key:c,values:[d]}),r},[])}sortArray(e,o,t){return t=t||1,e.sort(function(d,c){let _=0;return d[o]>c[o]?_=1*t:d[o]<c[o]&&(_=-1*t),_}),e}}return(s=u).\u0275fac=function(e){return new(e||s)(i.Y36(a.HT),i.Y36(P.Z),i.Y36(T.K),i.Y36(h.SH),i.Y36(p.F0))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-prod-ate-serv-list-actividades"]],viewQuery:function(e,o){if(1&e&&i.Gf(b,5),2&e){let t;i.iGM(t=i.CRH())&&(o.idInputSearch=t.first)}},standalone:!0,features:[i.jDz],decls:80,vars:3,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],[3,"titulo"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar par\xe1metros",3,"ngModel","ngModelChange","ionChange"],["IdHtmlInputSearch",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["scroll-x","true"],[1,"",2,"width","150% !important"],[2,"width","100% !important"],["size-sm","0.3","size-md","0.3","size-xl","0.3",1,"headgrid"],[2,"color","black"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],["size-sm","0.4","size-md","0.4","size-xl","0.4",1,"headgrid"],["size-sm","0.5","size-md","0.5","size-xl","0.5",1,"headgrid"],["size-sm","2","size-md","2","size-xl","2",1,"headgrid"],["size-sm","0.6","size-md","0.6","size-xl","0.6",1,"headgrid"],[3,"--background",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["title","REPORTE FALLA EQUIPO",3,"click"],["name","build-outline"],["title","RELEVO",3,"click"],["name","log-out-outline"],["title","Nueva Actividad",3,"click"],["name","grid-outline"],["mode","ios",2,"align-items","center"],["fill","clear","expand","block",2,"width","30%",3,"click"],["color","primary",2,"font","size 6px"],["color","light",2,"height","30px !important",3,"hidden"],[1,"ion-text-uppercase"],["name","ellipse","color","danger","slot","start","style","font-size: 1.2rem;",4,"ngIf"],["button","",3,"hidden","click",4,"ngFor","ngForOf"],["name","ellipse","color","danger","slot","start",2,"font-size","1.2rem"],["button","",3,"hidden","click"],["fixed","false",2,"width","150% !important"],[2,"width","100% !important","font-size","0.7em"],["size-sm","0.3","size-md","0.3","size-xl","0.3"],["name","ellipse","style","font-size: 2em; transform: scale(1);",3,"color",4,"ngIf"],["size-sm","1","size-md","1","size-xl","1"],["size-sm","0.4","size-md","0.4","size-xl","0.4"],["size-sm","0.5","size-md","0.5","size-xl","0.5"],[3,"color"],[1,"ion-text-wrap"],["size-sm","2","size-md","2","size-xl","2"],["size-sm","0.6","size-md","0.6","size-xl","0.6"],["size-sm","1.1","size-md","1.1","size-xl","1.1"],["name","ellipse",2,"font-size","2em","transform","scale(1)",3,"color"]],template:function(e,o){1&e&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()(),i.TgZ(7,"ion-item")(8,"ion-searchbar",6,7),i.NdJ("ngModelChange",function(r){return o.NgModInputSearch=r})("ionChange",function(){return o.FFindRows(0)}),i.qZA(),i.TgZ(10,"ion-icon",8,9),i.NdJ("click",function(){return o.FFindRows(0)}),i.qZA()()(),i.TgZ(12,"ion-content",10)(13,"ion-list",11)(14,"ion-row",12)(15,"ion-col",13)(16,"ion-label",14),i._uU(17,"Estado"),i.qZA()(),i.TgZ(18,"ion-col",15)(19,"ion-label",14),i._uU(20,"Operario"),i.qZA()(),i.TgZ(21,"ion-col",16)(22,"ion-label",14),i._uU(23,"Nro. OT/OF"),i.qZA()(),i.TgZ(24,"ion-col",13)(25,"ion-label",14),i._uU(26,"Tipo"),i.qZA()(),i.TgZ(27,"ion-col",13)(28,"ion-label",14),i._uU(29,"Cantidad Total"),i.qZA()(),i.TgZ(30,"ion-col",17)(31,"ion-label",14),i._uU(32,"Equipo"),i.qZA()(),i.TgZ(33,"ion-col",15)(34,"ion-label",14),i._uU(35,"Pieza"),i.qZA()(),i.TgZ(36,"ion-col",18)(37,"ion-label",14),i._uU(38,"Servicio"),i.qZA()(),i.TgZ(39,"ion-col",19)(40,"ion-label",14),i._uU(41,"F. Inicio"),i.qZA()(),i.TgZ(42,"ion-col",19)(43,"ion-label",14),i._uU(44,"F. Fin"),i.qZA()(),i.TgZ(45,"ion-col",17)(46,"ion-label",14),i._uU(47,"Duracion"),i.qZA()(),i.TgZ(48,"ion-col",15)(49,"ion-label",14),i._uU(50,"Motivo Pausa"),i.qZA()(),i.TgZ(51,"ion-col",19)(52,"ion-label",14),i._uU(53,"F. Inicio Pausa"),i.qZA()(),i.TgZ(54,"ion-col",19)(55,"ion-label",14),i._uU(56,"F. Fin Pausa"),i.qZA()(),i.TgZ(57,"ion-col",17)(58,"ion-label",14),i._uU(59,"Tiempo Pausa Min."),i.qZA()(),i.TgZ(60,"ion-col",15)(61,"ion-label",14),i._uU(62,"Observacion"),i.qZA()(),i.TgZ(63,"ion-col",16)(64,"ion-label",14),i._uU(65,"Semana"),i.qZA()()(),i.YNc(66,x,8,6,"ion-item-group",20),i.qZA(),i.TgZ(67,"ion-fab",21)(68,"ion-fab-button",22),i.NdJ("click",function(){return o.FReporteFalla()}),i._UZ(69,"ion-icon",23),i.qZA(),i.TgZ(70,"ion-fab-button",24),i.NdJ("click",function(){return o.FRelevo()}),i._UZ(71,"ion-icon",25),i.qZA(),i.TgZ(72,"ion-fab-button",26),i.NdJ("click",function(){return o.FIniciarActvividad(1)}),i._UZ(73,"ion-icon",27),i.qZA()()(),i.TgZ(74,"ion-footer")(75,"ion-card",28)(76,"ion-button",29),i.NdJ("click",function(){return o.FFindRows(1)}),i.TgZ(77,"ion-label",30),i._UZ(78,"ion-icon",27),i._uU(79," Orden de Fabricacion en Proceso "),i.qZA()()()()),2&e&&(i.xp6(4),i.s9C("titulo",o.TituloDinamico),i.xp6(4),i.Q6J("ngModel",o.NgModInputSearch),i.xp6(58),i.Q6J("ngForOf",o.MultiArrayServicios))},dependencies:[a.Pc,a.YG,a.PM,a.wI,a.W2,a.IJ,a.W4,a.fr,a.jY,a.gu,a.Ie,a.rH,a.Ub,a.Q$,a.q_,a.Nd,a.VI,a.sr,a.j9,g.ez,g.sg,g.O5,m.u5,m.JJ,m.On,f.G],styles:[".forecast_container[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:scroll!important;overflow-y:hidden;overflow-x:visible!important}"]}),u})()}}]);