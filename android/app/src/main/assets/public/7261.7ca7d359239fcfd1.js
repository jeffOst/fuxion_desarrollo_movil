"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7261],{7261:(N,f,l)=>{l.r(f),l.d(f,{ProdListActiProgramadaPage:()=>w});var m=l(5861),p=l(6814),v=l(95),a=l(6728),h=l(6466),P=l(6471),i=l(6242),A=l(5472),C=l(6485),x=l(4248),E=l(2014);const T=["idinputsearch_equipo"];function M(r,_){1&r&&i._UZ(0,"ion-icon",22)}function L(r,_){1&r&&i._UZ(0,"ion-icon",23)}function O(r,_){1&r&&i._UZ(0,"ion-icon",24)}function y(r,_){if(1&r){const s=i.EpF();i.TgZ(0,"ion-item",25)(1,"ion-card",26)(2,"ion-item",25)(3,"ion-item",27),i.NdJ("click",function(){const o=i.CHM(s).$implicit,n=i.oxw(2);return i.KtG(n.FSetEstado(o,o.idrevisionofd,o.idmaquina))}),i.TgZ(4,"ion-label",25)(5,"strong")(6,"div"),i._uU(7),i.qZA()(),i.TgZ(8,"p"),i._uU(9),i.TgZ(10,"ion-text",28),i._uU(11),i.qZA(),i.TgZ(12,"ion-text",29),i._uU(13),i.qZA(),i._uU(14),i.qZA()()(),i.TgZ(15,"ion-item")(16,"ion-button",30),i.NdJ("click",function(){const o=i.CHM(s).$implicit,n=i.oxw(2);return i.KtG(n.FIniciarActvividad(o,0))}),i._UZ(17,"ion-icon",31),i.qZA()()()()()}if(2&r){const s=_.$implicit,t=i.oxw(2);i.Q6J("hidden",t.scanActive),i.xp6(1),i.Q6J("hidden",t.scanActive),i.xp6(1),i.Q6J("hidden",t.scanActive),i.xp6(2),i.Q6J("hidden",t.scanActive),i.xp6(2),i.Jzz("color:",s.color_reproceso,";"),i.xp6(1),i.Oqu(s.descripcion_pt),i.xp6(2),i.hij(" ",s.EQUIPOID," "),i.xp6(2),i.AsE("Cantidad: ",s.cantidad," | Cnt. Pendiente: ",s.cantidad_pendiente," \xa0"),i.xp6(2),i.Oqu(s.correorden),i.xp6(1),i.hij(" ",s.avatar," "),i.xp6(3),i.Q6J("hidden",t.scanActive)}}function D(r,_){if(1&r&&(i.TgZ(0,"ion-item-group")(1,"ion-item-divider",17),i.YNc(2,M,1,0,"ion-icon",18)(3,L,1,0,"ion-icon",19)(4,O,1,0,"ion-icon",20),i._uU(5),i.qZA(),i.YNc(6,y,18,14,"ion-item",21),i.qZA()),2&r){const s=_.$implicit,t=i.oxw();i.xp6(1),i.Q6J("hidden",t.scanActive),i.xp6(1),i.Q6J("ngIf","ASIGNADO"==s.key),i.xp6(1),i.Q6J("ngIf","EN PROCESO"==s.key),i.xp6(1),i.Q6J("ngIf","COMPLETADO"==s.key),i.xp6(1),i.hij(" ",s.key," "),i.xp6(1),i.Q6J("ngForOf",s.values)}}let w=(()=>{var r;class _{constructor(t,e,o,n,c,u,g){this.loadingController=t,this.prodGestionServicioService=e,this.router=o,this.navCtrl=n,this.changeRef=c,this.alertController=u,this.storage=g,this.switchButtonSegmento="",this.search_term_equipo="",this.TituloDinamico="",this.idMenu="",this.scanActive=!1;try{let d=this.router.getCurrentNavigation().extras.queryParams;console.log("navParams 00",this.router.getCurrentNavigation()),console.log("navParams 1",d),d&&(console.log("navParams 2",d[0]),this.TituloDinamico=d[1],this.idMenu=d[0])}catch{}}ngOnInit(){let t;this.changeRef.detectChanges(),this.storage.get("USER_INFO").then(e=>{t=e,console.log("localStorage_user",t),this.NombresUsuarioLocal=t.user_name,this.IdUsuarioLocal=t.user_id,console.log("ngoninit",this.NombresUsuarioLocal),""==this.NombresUsuarioLocal&&this.navCtrl.navigateForward("login")}).catch(e=>{console.log("errrr",e)})}asigna_titulo(t){this.TituloDinamico=t,this.load_list_principal(),console.log("asigna_titulo",this.TituloDinamico)}ionViewDidLoad(){let t=this.router.getCurrentNavigation();console.log("ionViewDidLoad::",t)}ionViewWillLeave(){let t=this.router.getCurrentNavigation();console.log("ionViewWillLeave::",t)}ionViewDidLeave(){let t=this.router.getCurrentNavigation();console.log("ionViewDidLeave::",t)}ionViewWillUnload(){let t=this.router.getCurrentNavigation();console.log("ionViewWillUnload::",t)}ionViewCanLeave(){let t=this.router.getCurrentNavigation();console.log("ionViewCanLeave::",t)}ionViewDidEnter(){console.log(this.TituloDinamico);let t=this.router.getCurrentNavigation();console.log("ionViewDidEnter",t)}ionViewWillEnter(){this.changeRef.detectChanges(),this.load_list_principal()}ionViewCanEnter(){let t=this.router.getCurrentNavigation();console.log("ionViewCanEnter",t)}start_scan_qr(t){var e=this;return(0,m.Z)(function*(){if(e.idinputsearch_equipo.getInputElement().then(n=>{n.blur()}),yield e.checkPermiso()){e.scanActive=!0;const n=yield h.mR.startScan();n.hasContent&&(console.log(n),e.search_term_equipo=n.content,console.log("result.hasContent:::",n.hasContent),e.scanActive=!1,e.idinputsearch_equipo.readonly=!1)}})()}checkPermiso(){var t=this;return(0,m.Z)(function*(){return new Promise(function(){var e=(0,m.Z)(function*(o,n){const c=yield h.mR.checkPermission({force:!0});c.granted?o(!0):c.denied?yield(yield t.alertController.create({header:"No Permiso",message:"Por favor dar permiso al acceso de camara en configuraciones",buttons:[{text:"No",role:"Cancelar"},{text:"Abrir Configuracions",handler:()=>{h.mR.openAppSettings(),o(!1)}}]})).present():o(!1)});return function(o,n){return e.apply(this,arguments)}}())})()}stopScanner(){h.mR.stopScan(),this.scanActive=!1}load_list_principal(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(e=>{e.present(),this.prodGestionServicioService.ListDatos(this.search_term_equipo,this.switchButtonSegmento,"1",this.idMenu).then(o=>{this.MultiArrayServicios=o;let n=this.MultiArrayServicios;console.log(n),this.MultiArrayServicios=this.groupByArray(n,"estado","estado"),console.log(this.MultiArrayServicios)}).finally(()=>{this.loadingController.dismiss()})})}FIniciarActvividad(t,e){t.flag_mostrar_opciones=e,this.navCtrl.navigateForward(["addserviciostodet"],{state:t})}FNuevaActvividadNp(t){let e;e={},e.maquina=this.TituloDinamico,e.idmaquina=this.idMenu,e.CONCOMPONENTE=1,e.flag_mostrar_opciones=t,this.navCtrl.navigateForward(["addserviciostodet"],{state:e})}FListarActvidades(){this.navCtrl.navigateForward(["prod-ate-serv-list-actividades"],{state:{idmenu:this.idMenu,menu:this.TituloDinamico}})}FSetEstado(t,e,o){var n=this;return(0,m.Z)(function*(){t.maquina=n.TituloDinamico,t.idmaquina=n.idMenu,t.idrevisionofd=e;let c={state:t};0!=e?yield(yield n.alertController.create({header:"Atenci\xf3n",message:"Este registro est\xe1 en Proceso de Revisi\xf3n. Termine de finalizar la actividad anterior para registrar una Nueva Actividad.",buttons:[{text:"Aceptar",handler:()=>{n.navCtrl.navigateForward(["prod-ate-serv-list-actividades"],c)}}]})).present():n.navCtrl.navigateForward(["prod-ate-serv-asigna-estado"],c)})()}groupByArray(t,e,o){return t.reduce(function(n,c){let u=e instanceof Function?e(c):c[e],g=n.find(d=>d&&d.key===u);return g?(g.values.push(c),g.values.sort(function(d,Z){return d[o].toLowerCase().localeCompare(Z[o].toLowerCase())})):n.push({key:u,values:[c]}),n},[])}sortArray(t,e,o){return o=o||1,t.sort(function(c,u){let g=0;return c[e]>u[e]?g=1*o:c[e]<u[e]&&(g=-1*o),g}),t}}return(r=_).\u0275fac=function(t){return new(t||r)(i.Y36(a.HT),i.Y36(C.Z),i.Y36(x.F0),i.Y36(A.SH),i.Y36(i.sBO),i.Y36(a.Br),i.Y36(E.K))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-prod-list-acti-programada"]],viewQuery:function(t,e){if(1&t&&i.Gf(T,5),2&t){let o;i.iGM(o=i.CRH())&&(e.idinputsearch_equipo=o.first)}},standalone:!0,features:[i.jDz],decls:23,vars:3,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],[3,"titulo"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Parametros",3,"ngModel","ngModelChange","ionChange"],["idinputsearch_equipo",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["title","Nueva Actividad",3,"click"],["name","grid-outline"],["mode","ios",2,"align-items","center"],["fill","clear","expand","block",2,"width","50%",3,"click"],["color","primary",2,"font","size 6px"],["color","light",3,"hidden"],["name","ellipse","color","warning","slot","start",4,"ngIf"],["name","ellipse","color","tertiary","slot","start",4,"ngIf"],["name","ellipse","color","success","slot","start",4,"ngIf"],[3,"hidden",4,"ngFor","ngForOf"],["name","ellipse","color","warning","slot","start"],["name","ellipse","color","tertiary","slot","start"],["name","ellipse","color","success","slot","start"],[3,"hidden"],["expand","full","color","light","size","large","button","true",3,"hidden"],[2,"width","100%",3,"click"],["color","secondary"],["color","primary"],["expand","block","color","white","size","small","slot","end","title","Iniciar Actividad",3,"click"],["expand","block","color","dark","size","small","name","play-forward",3,"hidden"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()()(),i.TgZ(7,"ion-content")(8,"ion-item")(9,"ion-searchbar",6,7),i.NdJ("ngModelChange",function(n){return e.search_term_equipo=n})("ionChange",function(){return e.load_list_principal()}),i.qZA(),i.TgZ(11,"ion-icon",8,9),i.NdJ("click",function(){return e.load_list_principal()}),i.qZA()(),i.YNc(13,D,7,6,"ion-item-group",10),i.TgZ(14,"ion-fab",11)(15,"ion-fab-button",12),i.NdJ("click",function(){return e.FNuevaActvividadNp(1)}),i._UZ(16,"ion-icon",13),i.qZA()()(),i.TgZ(17,"ion-footer")(18,"ion-card",14)(19,"ion-button",15),i.NdJ("click",function(){return e.FListarActvidades()}),i.TgZ(20,"ion-label",16),i._UZ(21,"ion-icon",13),i._uU(22," Orden de Fabricacion en Proceso "),i.qZA()()()()),2&t&&(i.xp6(4),i.MGl("titulo","Trabajos Programados ",e.TituloDinamico,""),i.xp6(5),i.Q6J("ngModel",e.search_term_equipo),i.xp6(4),i.Q6J("ngForOf",e.MultiArrayServicios))},dependencies:[a.Pc,a.YG,a.PM,a.wI,a.W2,a.IJ,a.W4,a.fr,a.jY,a.gu,a.Ie,a.rH,a.Ub,a.Q$,a.Nd,a.VI,a.yW,a.sr,a.j9,p.ez,p.sg,p.O5,v.u5,v.JJ,v.On,P.G],styles:['ion-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.scanner-buttons[_ngcontent-%COMP%]{margin:0;position:absolute;bottom:100px;width:100vw;height:50px;z-index:11}.scan-box[_ngcontent-%COMP%]{border:2px solid #fff;box-shadow:0 0 0 100vmax #00000080;content:"";display:block;left:50%;height:300px;position:absolute;top:50%;transform:translate(-50%,-50%);width:300px}']}),r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),_})()}}]);