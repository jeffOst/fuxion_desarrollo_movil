"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8143],{8143:(I,h,s)=>{s.r(h),s.d(h,{RrhhHorasExtrasPage:()=>C});var d=s(6814),_=s(95),e=s(6728),g=s(6471),t=s(6242),u=s(5472),m=s(2014),p=s(8715);const T=["IdHtmlInputSearch"];function E(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"ion-item",21),t.NdJ("click",function(){const a=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.FSelectedItem(a))}),t.TgZ(1,"ion-grid",22)(2,"ion-row",23)(3,"ion-col",24),t._uU(4),t.qZA(),t.TgZ(5,"ion-col",25),t._uU(6),t.qZA(),t.TgZ(7,"ion-col",26)(8,"ion-label",27),t._uU(9),t.qZA()(),t.TgZ(10,"ion-col",26)(11,"ion-label",27),t._uU(12),t.qZA()(),t.TgZ(13,"ion-col",25),t._uU(14),t.qZA(),t.TgZ(15,"ion-col",26),t._uU(16),t.qZA()()()()}if(2&r){const n=c.$implicit,i=t.oxw();t.Q6J("hidden",i.scanActive),t.xp6(4),t.Oqu(n.nomb_apell),t.xp6(2),t.Oqu(n.actividad_he),t.xp6(3),t.Oqu(n.fech_registro_ini),t.xp6(3),t.Oqu(n.cantidad),t.xp6(2),t.Oqu(n.DESCRIPCION),t.xp6(2),t.Oqu(n.tipo_horas)}}let C=(()=>{var r;class c{constructor(i,o,a,l,x){this.navCtrl=i,this.alertController=o,this.storage=a,this.loadingController=l,this.ApiService=x,this.disableButton=!0,this.searchTerm="",this.estaCargando=!1,this.scanActive=!0}ngOnInit(){}ionViewWillEnter(){let i;this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{i=o,this.NombresUsuarioLocal=i.user_name,this.IdUsuarioLocal=i.user_id,this.FListaInicial()})}FListaInicial(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(o=>{o.present(),console.log("ingresa a realizar la consulta"),this.ApiService.ListFindOts(this.NgModInputSearch,this.IdUsuarioLocal,"H",this.SelectFiltra=this.SelectFiltra?this.SelectFiltra.toString():"",this.SelectFiltra2=this.SelectFiltra2?this.SelectFiltra2.toString():"").then(a=>{this.DataSetGrid=a,this.loadingController.dismiss(),this.estaCargando=!1}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{},600)}).catch(()=>{}).then(a=>{console.log("thennnnn",a),console.log(this.SelectFiltra),o.dismiss()})})}FListaFiltrado(i){this.searchTerm=i.target.value,console.log(i),console.log(i.inputType),this.disableButton=""===this.searchTerm.trim()||"deleteContentBackward"===i.inputType,this.searchTerm.trim().length>=6&&this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(a=>{a.present(),this.ApiService.ListFindOts(this.NgModInputSearch,this.IdUsuarioLocal,"H",this.SelectFiltra,this.SelectFiltra2).then(l=>{this.DataSetGrid=l,this.loadingController.dismiss(),this.estaCargando=!1}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{},600)}).catch(()=>{}).then(l=>{console.log("thennnnn",l),a.dismiss()})})}FSelectedItem(i){console.log("como pasa row",i),this.navCtrl.navigateForward(["rrhh-win-horas-extras"],{state:{Row:i}})}FNewwin(){this.navCtrl.navigateForward(["rrhh-win-horas-extras"]),this.navCtrl.navigateForward(["rrhh-win-horas-extras"],{state:{Row:{DESCRIPCION:"MANTENIMIENTO",actividad_he:"COSTO TALLER",cantidad:"3",estado_reg_hhee:"0",fech_registro_ini:"",idprogram_prod:"1",idreghoex:"0",nomb_apell:"REVOLLEDO CASTILLA, PEDRO CRISTOBAL"}}})}}return(r=c).\u0275fac=function(i){return new(i||r)(t.Y36(u.SH),t.Y36(e.Br),t.Y36(m.K),t.Y36(e.HT),t.Y36(p.z))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-rrhh-horas-extras"]],viewQuery:function(i,o){if(1&i&&t.Gf(T,5),2&i){let a;t.iGM(a=t.CRH())&&(o.IdHtmlInputSearch=a.first)}},standalone:!0,features:[t.jDz],decls:37,vars:1,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],["titulo","Lista de Horas Extras"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","animated","true","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Parametros","color","secondary","search-icon","search-circle"],["IdHtmlInputSearch",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["scroll-x","true"],[1,"",2,"width","100% !important"],[2,"width","100% !important"],["size-sm","3","size-md","3","size-xl","3",1,"headgrid"],[2,"color","black"],["size-sm","2","size-md","2","size-xl","2",1,"headgrid"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],["button","",3,"hidden","click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","mode","ios","title","O.T. de Produccion",3,"click"],["name","add-outline"],["button","",3,"hidden","click"],["fixed","false",2,"width","150% !important"],[2,"width","100% !important","font-size","0.7em"],["size-sm","3","size-md","3","size-xl","3"],["size-sm","2","size-md","2","size-xl","2"],["size-sm","1","size-md","1","size-xl","1"],[1,"ion-text-wrap"]],template:function(i,o){1&i&&(t.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),t._UZ(4,"app-header",3),t.qZA(),t.TgZ(5,"ion-col",4),t._UZ(6,"ion-label",5),t.qZA()()(),t.TgZ(7,"ion-item"),t._UZ(8,"ion-searchbar",6,7),t.TgZ(10,"ion-icon",8,9),t.NdJ("click",function(){return o.FListaInicial()}),t.qZA()()(),t.TgZ(12,"ion-content",10)(13,"ion-list",11)(14,"ion-row",12)(15,"ion-col",13)(16,"ion-label",14),t._uU(17,"Operario"),t.qZA()(),t.TgZ(18,"ion-col",15)(19,"ion-label",14),t._uU(20,"Actividad"),t.qZA()(),t.TgZ(21,"ion-col",16)(22,"ion-label",14),t._uU(23,"Fecha"),t.qZA()(),t.TgZ(24,"ion-col",16)(25,"ion-label",14),t._uU(26,"Cantidad"),t.qZA()(),t.TgZ(27,"ion-col",15)(28,"ion-label",14),t._uU(29,"Area solicitante"),t.qZA()(),t.TgZ(30,"ion-col",15)(31,"ion-label",14),t._uU(32,"T. horas"),t.qZA()()(),t.YNc(33,E,17,7,"ion-item",17),t.qZA()(),t.TgZ(34,"ion-fab",18)(35,"ion-fab-button",19),t.NdJ("click",function(){return o.FNewwin()}),t._UZ(36,"ion-icon",20),t.qZA()()),2&i&&(t.xp6(33),t.Q6J("ngForOf",o.DataSetGrid))},dependencies:[e.Pc,e.wI,e.W2,e.IJ,e.W4,e.jY,e.gu,e.Ie,e.Q$,e.q_,e.Nd,e.VI,e.sr,e.j9,d.ez,d.sg,_.u5,g.G]}),c})()}}]);