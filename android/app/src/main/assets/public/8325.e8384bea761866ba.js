"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8325],{8325:(f,h,n)=>{n.r(h),n.d(h,{RrhhListHorasCompensadasPage:()=>I});var d=n(6814),_=n(95),e=n(6728),g=n(6471),i=n(6242),m=n(5472),u=n(2014),p=n(8715);const C=["IdHtmlInputSearch"];function T(r,c){if(1&r){const s=i.EpF();i.TgZ(0,"ion-item",21),i.NdJ("click",function(){const a=i.CHM(s).$implicit,l=i.oxw();return i.KtG(l.FSelectedItem(a))}),i.TgZ(1,"ion-grid",22)(2,"ion-row",23)(3,"ion-col",24),i._uU(4),i.qZA(),i.TgZ(5,"ion-col",25),i._uU(6),i.qZA(),i.TgZ(7,"ion-col",26)(8,"ion-label",27),i._uU(9),i.qZA()(),i.TgZ(10,"ion-col",26)(11,"ion-label",27),i._uU(12),i.qZA()(),i.TgZ(13,"ion-col",25),i._uU(14),i.qZA(),i.TgZ(15,"ion-col",26),i._uU(16),i.qZA()()()()}if(2&r){const s=c.$implicit,t=i.oxw();i.Q6J("hidden",t.scanActive),i.xp6(4),i.Oqu(s.nomb_apell),i.xp6(2),i.Oqu(s.actividad_he),i.xp6(3),i.Oqu(s.fech_registro_ini),i.xp6(3),i.Oqu(s.cantidad),i.xp6(2),i.Oqu(s.DESCRIPCION),i.xp6(2),i.Oqu(s.tipo_horas)}}let I=(()=>{var r;class c{constructor(t,o,a,l,Z){this.navCtrl=t,this.alertController=o,this.storage=a,this.loadingController=l,this.ApiService=Z,this.disableButton=!0,this.searchTerm="",this.estaCargando=!1,this.scanActive=!0}ngOnInit(){}ionViewWillEnter(){let t;this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{t=o,this.NombresUsuarioLocal=t.user_name,this.IdUsuarioLocal=t.user_id,this.FListaInicial()})}FListaInicial(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(o=>{o.present(),console.log("ingresa a realizar la consulta"),this.ApiService.ListFindOts(this.NgModInputSearch,this.IdUsuarioLocal,"H",this.SelectFiltra=this.SelectFiltra?this.SelectFiltra.toString():"",this.SelectFiltra2=this.SelectFiltra2?this.SelectFiltra2.toString():"",1).then(a=>{this.DataSetGrid=a,this.loadingController.dismiss(),this.estaCargando=!1}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{},600)}).catch(()=>{}).then(a=>{console.log("thennnnn",a),console.log(this.SelectFiltra),o.dismiss()})})}FListaFiltrado(t){this.searchTerm=t.target.value,console.log(t),console.log(t.inputType),this.disableButton=""===this.searchTerm.trim()||"deleteContentBackward"===t.inputType,this.searchTerm.trim().length>=6&&this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(a=>{a.present(),this.ApiService.ListFindOts(this.NgModInputSearch,this.IdUsuarioLocal,"H",this.SelectFiltra,this.SelectFiltra2,1).then(l=>{this.DataSetGrid=l,this.loadingController.dismiss(),this.estaCargando=!1}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{},600)}).catch(()=>{}).then(l=>{console.log("thennnnn",l),a.dismiss()})})}FSelectedItem(t){console.log("como pasa row",t),this.navCtrl.navigateForward(["rrhh-horas-compensadas"],{state:{Row:t}})}FNewwin(){this.navCtrl.navigateForward(["rrhh-horas-compensadas"]),this.navCtrl.navigateForward(["rrhh-horas-compensadas"],{state:{Row:{DESCRIPCION:"MANTENIMIENTO",actividad_he:"COSTO TALLER",cantidad:"3",estado_reg_hhee:"0",fech_registro_ini:"",idprogram_prod:"1",idreghoex:"0",nomb_apell:"REVOLLEDO CASTILLA, PEDRO CRISTOBAL"}}})}}return(r=c).\u0275fac=function(t){return new(t||r)(i.Y36(m.SH),i.Y36(e.Br),i.Y36(u.K),i.Y36(e.HT),i.Y36(p.z))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-rrhh-list-horas-compensadas"]],viewQuery:function(t,o){if(1&t&&i.Gf(C,5),2&t){let a;i.iGM(a=i.CRH())&&(o.IdHtmlInputSearch=a.first)}},standalone:!0,features:[i.jDz],decls:37,vars:1,consts:[[1,"ion-no-border"],[1,"ion-justify-content-start"],["size","10",1,"ion-align-self-start"],["titulo","Registro de Horas Compensadas"],["size","2",1,"ion-align-self-end"],["position","fixed","color","secondary",1,"label-nameusuario"],["mode","ios","animated","true","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Parametros","color","secondary","search-icon","search-circle"],["IdHtmlInputSearch",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["scroll-x","true"],[1,"",2,"width","100% !important"],[2,"width","100% !important"],["size-sm","3","size-md","3","size-xl","3",1,"headgrid"],[2,"color","black"],["size-sm","2","size-md","2","size-xl","2",1,"headgrid"],["size-sm","1","size-md","1","size-xl","1",1,"headgrid"],["button","",3,"hidden","click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","mode","ios","title","O.T. de Produccion",3,"click"],["name","add-outline"],["button","",3,"hidden","click"],["fixed","false",2,"width","150% !important"],[2,"width","100% !important","font-size","0.7em"],["size-sm","3","size-md","3","size-xl","3"],["size-sm","2","size-md","2","size-xl","2"],["size-sm","1","size-md","1","size-xl","1"],[1,"ion-text-wrap"]],template:function(t,o){1&t&&(i.TgZ(0,"ion-toolbar",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),i._UZ(4,"app-header",3),i.qZA(),i.TgZ(5,"ion-col",4),i._UZ(6,"ion-label",5),i.qZA()()(),i.TgZ(7,"ion-item"),i._UZ(8,"ion-searchbar",6,7),i.TgZ(10,"ion-icon",8,9),i.NdJ("click",function(){return o.FListaInicial()}),i.qZA()()(),i.TgZ(12,"ion-content",10)(13,"ion-list",11)(14,"ion-row",12)(15,"ion-col",13)(16,"ion-label",14),i._uU(17,"Usuario"),i.qZA()(),i.TgZ(18,"ion-col",15)(19,"ion-label",14),i._uU(20,"Motivo"),i.qZA()(),i.TgZ(21,"ion-col",16)(22,"ion-label",14),i._uU(23,"Fecha"),i.qZA()(),i.TgZ(24,"ion-col",16)(25,"ion-label",14),i._uU(26,"Horas"),i.qZA()(),i.TgZ(27,"ion-col",15)(28,"ion-label",14),i._uU(29,"Estado"),i.qZA()(),i.TgZ(30,"ion-col",15)(31,"ion-label",14),i._uU(32,"T. de Registro"),i.qZA()()(),i.YNc(33,T,17,7,"ion-item",17),i.qZA()(),i.TgZ(34,"ion-fab",18)(35,"ion-fab-button",19),i.NdJ("click",function(){return o.FNewwin()}),i._UZ(36,"ion-icon",20),i.qZA()()),2&t&&(i.xp6(33),i.Q6J("ngForOf",o.DataSetGrid))},dependencies:[e.Pc,e.wI,e.W2,e.IJ,e.W4,e.jY,e.gu,e.Ie,e.Q$,e.q_,e.Nd,e.VI,e.sr,e.j9,d.ez,d.sg,_.u5,g.G]}),c})()}}]);