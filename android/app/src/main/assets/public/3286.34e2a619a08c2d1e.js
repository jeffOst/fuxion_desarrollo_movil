"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3286],{3286:(F,p,l)=>{l.r(p),l.d(p,{ProdListActiHistoricoPage:()=>x});var m=l(6814),h=l(95),a=l(6728),Z=l(6471),i=l(6242),A=l(5472),v=l(6485),T=l(2014),f=l(4248),P=l(6172);const U=["IdHtmlInputSearch"],q=(s,d)=>({"text-green":s,"text-black":d});function O(s,d){if(1&s){const e=i.EpF();i.TgZ(0,"ion-item",36),i.NdJ("click",function(){const n=i.CHM(e).$implicit,c=i.oxw(2);return i.KtG(c.FSelectedItem(n))}),i.TgZ(1,"ion-grid",37)(2,"ion-row",38)(3,"ion-col",39),i._uU(4),i.qZA(),i.TgZ(5,"ion-col",40),i._uU(6),i.qZA(),i.TgZ(7,"ion-col",40),i._uU(8),i.qZA(),i.TgZ(9,"ion-col",41),i._uU(10),i.qZA(),i.TgZ(11,"ion-col",39),i._uU(12),i.qZA(),i.TgZ(13,"ion-col",39),i._uU(14),i.qZA(),i.TgZ(15,"ion-col",42),i._uU(16),i.qZA(),i.TgZ(17,"ion-col",43),i._uU(18),i.qZA(),i.TgZ(19,"ion-col",44),i._uU(20),i.qZA(),i.TgZ(21,"ion-col",40),i._uU(22),i.qZA(),i.TgZ(23,"ion-col",40),i._uU(24),i.qZA(),i.TgZ(25,"ion-col",45),i._uU(26),i.qZA(),i.TgZ(27,"ion-col",39),i._uU(28),i.qZA(),i.TgZ(29,"ion-col",42),i._uU(30),i.qZA(),i.TgZ(31,"ion-col",40),i._uU(32),i.qZA(),i.TgZ(33,"ion-col",40),i._uU(34),i.qZA(),i.TgZ(35,"ion-col",39),i._uU(36),i.qZA(),i.TgZ(37,"ion-col",40),i._uU(38),i.qZA(),i.TgZ(39,"ion-col",40),i._uU(40),i.qZA()()()()}if(2&s){const e=d.$implicit,o=i.oxw(2);i.Q6J("hidden",o.scanActive)("ngClass",i.WLB(21,q,!e.fecha_fin,e.fecha_fin)),i.xp6(4),i.Oqu(e.maquina),i.xp6(2),i.Oqu(e.fecha_inicio_sesion),i.xp6(2),i.Oqu(e.horometro_inicio),i.xp6(2),i.Oqu(e.avatar),i.xp6(2),i.Oqu(e.correorden),i.xp6(2),i.Oqu(e.codigo_pt),i.xp6(2),i.Oqu(e.descripcion_pt),i.xp6(2),i.Oqu(e.secuencia_hru),i.xp6(2),i.Oqu(e.Y04002),i.xp6(2),i.Oqu(e.fecha_inicio),i.xp6(2),i.Oqu(e.fecha_fin),i.xp6(2),i.Oqu(e.cantidad_revisada),i.xp6(2),i.Oqu(e.tiempo),i.xp6(2),i.Oqu(e.motivo_pausa),i.xp6(2),i.Oqu(e.fch_inicio_pausa_maquina),i.xp6(2),i.Oqu(e.fch_fin_pausa_maquina),i.xp6(2),i.Oqu(e.hora_parada_maquina),i.xp6(2),i.Oqu(e.horometro_fin),i.xp6(2),i.Oqu(e.fecha_fin_sesion)}}function b(s,d){if(1&s&&(i.TgZ(0,"ion-item-group")(1,"ion-item-divider",32),i._UZ(2,"ion-icon",33),i.TgZ(3,"div",34),i._uU(4),i.qZA()(),i.YNc(5,O,41,24,"ion-item",35),i.qZA()),2&s){const e=d.$implicit,o=i.oxw();i.Udp("--background",o.scanActive?"#00000000":"#fff"),i.xp6(1),i.Q6J("hidden",o.scanActive),i.xp6(3),i.Oqu(e.key),i.xp6(1),i.Q6J("ngForOf",e.values)}}let x=(()=>{var s;class d{constructor(o,t,n,c,_,u){let r;this.loadingController=o,this.prodGestionServicioService=t,this.storage=n,this.navCtrl=c,this.router=_,this.globalVal=u,this.TituloDinamico="Registro de Orden de Fabricacion",this.NgModInputSearch="",this.scanActive=!1,this.navParams=this.router.getCurrentNavigation().extras.state,console.log("this.navParams::>",this.navParams),console.log(this.idMenu),this.idMenu="0",this.menu="",this.storage.get("USER_INFO").then(g=>{r=g,this.NombresUsuarioLocal=r.user_name,this.IdUsuarioLocal=r.user_id}),this.storage.get("DEVICE_INFO").then(g=>{r=g,this.NombreDispositivo=r.name,this.IdDispositivo=r.uuid})}ngOnInit(){this.FFindRows(),console.log("entra ngOnInit")}ngOnDestroy(){}ionViewDidLoad(){console.log("entra ionViewDidLoad")}ionViewDidEnter(){console.log("entra ionViewDidEnter"),this.autoUpdateInterval=setInterval(()=>{this.FFindRows()},1e4)}ionViewWillLeave(){console.log("sale ionViewWillLeave"),this.autoUpdateInterval&&(clearInterval(this.autoUpdateInterval),this.autoUpdateInterval=null)}FSelectedItem(o){console.log(o);let t={state:o};o.flag_historico_actividad=1,this.navCtrl.navigateForward(["prod-ate-serv-inicia-actividad"],t)}FReporteFalla(){console.log("row"),this.navCtrl.navigateForward(["prod-ate-serv-reporte-falla"],{state:{idmenu:this.idMenu,menu:this.menu}})}FRelevo(){this.navCtrl.navigateForward(["prod-ate-serv-relevo"],{state:{idmenu:this.idMenu,menu:this.menu}})}FIniciarActvividad(){let o;o={},o.CONCOMPONENTE=1,this.navCtrl.navigateForward(["addserviciostodet"],{state:o})}FFindRows(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(t=>{t.present(),this.prodGestionServicioService.ListFindActividadesHistorico(this.NgModInputSearch,this.IdUsuarioLocal,this.IdDispositivo,this.globalVal.global_user_maquina).then(n=>{this.MultiArrayServicios=n,this.MultiArrayServicios=this.groupByArray(this.MultiArrayServicios,"nombres_tecnico","hora_ini_acti_otd")}).finally(()=>{this.loadingController.dismiss()})})}groupByArray(o,t,n){return o.reduce(function(c,_){let u=t instanceof Function?t(_):_[t],r=c.find(g=>g&&g.key===u);return r?r.values.push(_):c.push({key:u,values:[_]}),c},[])}sortArray(o,t,n){return n=n||1,o.sort(function(_,u){let r=0;return _[t]>u[t]?r=1*n:_[t]<u[t]&&(r=-1*n),r}),o}FListarActvidades(){this.navCtrl.navigateForward(["prod-ate-serv-list-actividades"],{state:{idmenu:this.idMenu,menu:this.TituloDinamico}})}}return(s=d).\u0275fac=function(o){return new(o||s)(i.Y36(a.HT),i.Y36(v.Z),i.Y36(T.K),i.Y36(A.SH),i.Y36(f.F0),i.Y36(P.X))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-prod-list-acti-historico"]],viewQuery:function(o,t){if(1&o&&i.Gf(U,5),2&o){let n;i.iGM(n=i.CRH())&&(t.idInputSearch=n.first)}},standalone:!0,features:[i.jDz],decls:86,vars:3,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],[3,"titulo"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar par\xe1metros",3,"ngModel","ngModelChange","ionChange"],["IdHtmlInputSearch",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["scroll-x","true"],[1,"",2,"width","150% !important"],[2,"width","100% !important"],["size-sm","0.4","size-md","0.4","size-xl","0.4",1,"headgrid"],[2,"color","black"],["size-sm","0.6","size-md","0.6","size-xl","0.6",1,"headgrid"],["size-sm","0.3","size-md","0.3","size-xl","0.3",1,"headgrid"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],["size-sm","0.5","size-md","0.5","size-xl","0.5",1,"headgrid"],["size-sm","1.5","size-md","1.5","size-xl","1.5",1,"headgrid"],["size-sm","0.5","size-md","0.4","size-xl","0.4",1,"headgrid"],[3,"--background",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["title","REPORTE FALLA EQUIPO",3,"click"],["name","build-outline"],["title","RELEVO",3,"click"],["name","log-out-outline"],["title","Nueva Actividad",3,"click"],["name","grid-outline"],["mode","ios",2,"align-items","center"],["fill","clear","expand","block",2,"width","30%",3,"click"],["color","primary",2,"font","size 6px"],["color","light",2,"height","30px !important",3,"hidden"],["name","ellipse","color","dark","slot","start"],[1,"ion-text-uppercase"],["button","",3,"hidden","ngClass","click",4,"ngFor","ngForOf"],["button","",3,"hidden","ngClass","click"],["fixed","false",2,"width","150% !important"],[2,"width","100% !important","font-size","0.7em"],["size-sm","0.4","size-md","0.4","size-xl","0.4"],["size-sm","0.6","size-md","0.6","size-xl","0.6"],["size-sm","0.3","size-md","0.3","size-xl","0.3"],["size-sm","1","size-md","1","size-xl","1"],["size-sm","0.5","size-md","0.5","size-xl","0.5"],["size-sm","1.5","size-md","1.5","size-xl","1.5"],["size-sm","0.5","size-md","0.4","size-xl","0.4"]],template:function(o,t){1&o&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()(),i.TgZ(7,"ion-item")(8,"ion-searchbar",6,7),i.NdJ("ngModelChange",function(c){return t.NgModInputSearch=c})("ionChange",function(){return t.FFindRows()}),i.qZA(),i.TgZ(10,"ion-icon",8,9),i.NdJ("click",function(){return t.FFindRows()}),i.qZA()()(),i.TgZ(12,"ion-content",10)(13,"ion-list",11)(14,"ion-row",12)(15,"ion-col",13)(16,"ion-label",14),i._uU(17,"Maquina"),i.qZA()(),i.TgZ(18,"ion-col",15)(19,"ion-label",14),i._uU(20,"Ini. Sesion"),i.qZA()(),i.TgZ(21,"ion-col",15)(22,"ion-label",14),i._uU(23,"Horometro Ini."),i.qZA()(),i.TgZ(24,"ion-col",16)(25,"ion-label",14),i._uU(26,"Tipo"),i.qZA()(),i.TgZ(27,"ion-col",13)(28,"ion-label",14),i._uU(29,"Nro."),i.qZA()(),i.TgZ(30,"ion-col",13)(31,"ion-label",14),i._uU(32,"Cod P.T"),i.qZA()(),i.TgZ(33,"ion-col",17)(34,"ion-label",14),i._uU(35,"Pieza"),i.qZA()(),i.TgZ(36,"ion-col",18)(37,"ion-label",14),i._uU(38,"Secuencia"),i.qZA()(),i.TgZ(39,"ion-col",19)(40,"ion-label",14),i._uU(41,"Proceso"),i.qZA()(),i.TgZ(42,"ion-col",15)(43,"ion-label",14),i._uU(44,"F. Inicio"),i.qZA()(),i.TgZ(45,"ion-col",15)(46,"ion-label",14),i._uU(47,"F. Fin"),i.qZA()(),i.TgZ(48,"ion-col",20)(49,"ion-label",14),i._uU(50,"Terminado"),i.qZA()(),i.TgZ(51,"ion-col",20)(52,"ion-label",14),i._uU(53,"Horas"),i.qZA()(),i.TgZ(54,"ion-col",17)(55,"ion-label",14),i._uU(56,"Motivo Pausa"),i.qZA()(),i.TgZ(57,"ion-col",15)(58,"ion-label",14),i._uU(59,"F. Inicio Pausa"),i.qZA()(),i.TgZ(60,"ion-col",15)(61,"ion-label",14),i._uU(62,"F. Fin pausa"),i.qZA()(),i.TgZ(63,"ion-col",13)(64,"ion-label",14),i._uU(65,"Horas."),i.qZA()(),i.TgZ(66,"ion-col",15)(67,"ion-label",14),i._uU(68,"Horometro Fin."),i.qZA()(),i.TgZ(69,"ion-col",15)(70,"ion-label",14),i._uU(71,"Fin. Sesion"),i.qZA()()(),i.YNc(72,b,6,5,"ion-item-group",21),i.qZA(),i.TgZ(73,"ion-fab",22)(74,"ion-fab-button",23),i.NdJ("click",function(){return t.FReporteFalla()}),i._UZ(75,"ion-icon",24),i.qZA(),i.TgZ(76,"ion-fab-button",25),i.NdJ("click",function(){return t.FRelevo()}),i._UZ(77,"ion-icon",26),i.qZA(),i.TgZ(78,"ion-fab-button",27),i.NdJ("click",function(){return t.FIniciarActvividad()}),i._UZ(79,"ion-icon",28),i.qZA()()(),i.TgZ(80,"ion-footer")(81,"ion-card",29)(82,"ion-button",30),i.NdJ("click",function(){return t.FListarActvidades()}),i.TgZ(83,"ion-label",31),i._UZ(84,"ion-icon",28),i._uU(85," Orden de Fabricacion en Proceso "),i.qZA()()()()),2&o&&(i.xp6(4),i.s9C("titulo",t.TituloDinamico),i.xp6(4),i.Q6J("ngModel",t.NgModInputSearch),i.xp6(64),i.Q6J("ngForOf",t.MultiArrayServicios))},dependencies:[a.Pc,a.YG,a.PM,a.wI,a.W2,a.IJ,a.W4,a.fr,a.jY,a.gu,a.Ie,a.rH,a.Ub,a.Q$,a.q_,a.Nd,a.VI,a.sr,a.j9,m.ez,m.mk,m.sg,h.u5,h.JJ,h.On,Z.G],styles:[".text-green[_ngcontent-%COMP%]{color:#15b422!important}.text-black[_ngcontent-%COMP%]{color:#000!important}"]}),d})()}}]);