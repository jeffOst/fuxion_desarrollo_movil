"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2437],{2437:(H,u,s)=>{s.r(u),s.d(u,{RrhhWinHorasExtrasPage:()=>L});var d=s(5861),m=s(6814),n=s(95),a=s(6728),f=s(5483),v=s(5547),P=s(7766),C=s(5259),E=s(7904),A=s(1756),e=s(6242),Z=s(4248),D=s(5472),k=s(8715),R=s(2014);const p=()=>({standalone:!0});function T(l,h){if(1&l){const c=e.EpF();e.TgZ(0,"ion-datetime",35),e.NdJ("ngModelChange",function(o){e.CHM(c);const i=e.oxw();return e.KtG(i.fechaini_he=o)})("ionChange",function(o){e.CHM(c);const i=e.oxw();return e.KtG(i.onFechaChangeInicio(o))}),e.qZA()}if(2&l){const c=e.oxw();e.Q6J("preferWheel",!0)("showDefaultButtons",!0)("ngModel",c.fechaini_he)("ngModelOptions",e.DdM(4,p))}}function M(l,h){if(1&l){const c=e.EpF();e.TgZ(0,"ion-datetime",36),e.NdJ("ngModelChange",function(o){e.CHM(c);const i=e.oxw();return e.KtG(i.fechafin_he=o)})("ionChange",function(o){e.CHM(c);const i=e.oxw();return e.KtG(i.onFechaChangeFin(o))}),e.qZA()}if(2&l){const c=e.oxw();e.Q6J("preferWheel",!0)("showDefaultButtons",!0)("ngModel",c.fechafin_he)("ngModelOptions",e.DdM(4,p))}}function b(l,h){if(1&l){const c=e.EpF();e.TgZ(0,"ion-button",37),e.NdJ("click",function(){e.CHM(c);const o=e.oxw();return e.KtG(o.SaveFormTerminadoPaso1(1))}),e._UZ(1,"ion-icon",38),e._uU(2,"\xa0 Registrar "),e.qZA()}}function F(l,h){if(1&l){const c=e.EpF();e.TgZ(0,"ion-button",39),e.NdJ("click",function(){e.CHM(c);const o=e.oxw();return e.KtG(o.SaveFormTerminadoPaso1(2))}),e._UZ(1,"ion-icon",38),e._uU(2,"\xa0 Actualizar "),e.qZA()}}let L=(()=>{var l;class h{constructor(t,o,i,r,_,g,x,U){this.router=t,this.modalCtrl=o,this.formBuilder=i,this.ApiService=r,this.loadingController=_,this.alertController=g,this.navCtrl=x,this.storage=U,this.Cancelar="Cancelar",this.scanActive=!1,this.estaCargando=!1,this.filteredSubAreas=[],this.FormCheckListPaso1=this.formBuilder.group({nom_tecni:["",n.kI.required],nom_serv:["",n.kI.required],actividad:["",n.kI.required],motivo:["",n.kI.required],supervisor:["",n.kI.required],area:["",n.kI.required],descrip:["",n.kI.required],maquina:[""],tip_horas:["",n.kI.required],button:[""],cantidad:[""],idtecni:[""],idactivi:[""],idprogra:[""],idmaquina:[""],idmotivo:[""],idarea:[""],idsuper:[""],id_documento:[""],fch_ini:[""],fch_fin:[""]}),this.FormCheckListPaso1.get("idarea").valueChanges.subscribe(y=>{this.updateSubAreas(y)}),this.updateSubAreas(this.FormCheckListPaso1.get("idarea").value)}updateSubAreas(t){console.log("area",t)}ngOnInit(){let t;this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{t=o,this.NombresUsuarioLocal=t.user_name,this.IdUsuarioLocal=t.user_id,console.log("localStorage",this.NombresUsuarioLocal),console.log("localStorage",this.IdUsuarioLocal),this.FormCheckListPaso1.controls.nom_tecni.setValue(this.NombresUsuarioLocal),this.FormCheckListPaso1.controls.idtecni.setValue(this.IdUsuarioLocal),this.FormCheckListPaso1.controls.tip_horas.setValue("1")}),this.navParamsAny=this.router.getCurrentNavigation().extras.state.Row,console.log("this.navParamsAny",this.navParamsAny.idreghoex),this.disabledbuton=this.navParamsAny.estado_reg_hhee,2==this.disabledbuton?(this.disableButton=!0,this.disableButton1=!0):0==this.disabledbuton?(this.disableButton=!0,this.disableButton1=!1):(this.disableButton=!1,this.disableButton1=!0),this.FormCheckListPaso1.controls.id_documento.setValue(this.navParamsAny.idreghoex)}ionViewWillEnter(){const t=new Date;t.setHours(t.getHours()-5),this.fechaini_he=t.toISOString(),this.fechafin_he=t.toISOString(),this.FormCheckListPaso1.controls.fch_ini.setValue(this.fechaini_he),this.FormCheckListPaso1.controls.fch_fin.setValue(this.fechafin_he),0!=this.navParamsAny.idreghoex&&this.FLoadForms(),console.log("carga mas lento?",this.NombresUsuarioLocal),this.FormCheckListPaso1.controls.nom_tecni.setValue(this.NombresUsuarioLocal),this.FormCheckListPaso1.controls.idtecni.setValue(this.IdUsuarioLocal)}FOpenModalTecnico(t){var o=this;return(0,d.Z)(function*(){const i=yield o.modalCtrl.create({component:v.RrhhPopupTecnicoPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{id_maquina:t}});return i.onDidDismiss().then(r=>{null!=r.data&&(o.dataReturned=r.data,console.log("dataReturned::206",r),o.FormCheckListPaso1.controls.maquina.setValue(o.dataReturned.nombres),o.FormCheckListPaso1.controls.idmaquina.setValue(o.dataReturned.id))}),yield i.present()})()}open_popup_servicios(t){var o=this;return(0,d.Z)(function*(){const i=yield o.modalCtrl.create({component:P.RrhhPopupServiciosPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{id_area:t}});return i.onDidDismiss().then(r=>{null!=r.data&&(o.dataReturned1=r.data,console.log("dataReturned::207",r),o.FormCheckListPaso1.controls.nom_serv.setValue(o.dataReturned1.nombres),o.FormCheckListPaso1.controls.idprogra.setValue(o.dataReturned1.id))}),yield i.present()})()}open_popup_motivo(t){var o=this;return(0,d.Z)(function*(){const i=yield o.modalCtrl.create({component:C.RrhhPopupMotivoPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{id_motivo:t}});return i.onDidDismiss().then(r=>{null!=r.data&&(o.dataReturned3=r.data,console.log("dataReturned::207",r),o.FormCheckListPaso1.controls.motivo.setValue(o.dataReturned3.nombres),o.FormCheckListPaso1.controls.idmotivo.setValue(o.dataReturned3.id))}),yield i.present()})()}open_popup_supervisor(t){var o=this;return(0,d.Z)(function*(){const i=yield o.modalCtrl.create({component:A.RrhhPopupSupervisorPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{id_supervisor:t}});return i.onDidDismiss().then(r=>{null!=r.data&&(o.dataReturned4=r.data,console.log("dataReturned::207",r),o.FormCheckListPaso1.controls.supervisor.setValue(o.dataReturned4.nombres),o.FormCheckListPaso1.controls.idsuper.setValue(o.dataReturned4.id))}),yield i.present()})()}open_popup_area(){var t=this;return(0,d.Z)(function*(){const o=yield t.modalCtrl.create({component:E.RrhhPopupAreaPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{}});return o.onDidDismiss().then(i=>{null!=i.data&&(t.dataReturned4=i.data,console.log("dataReturned::207",i),t.FormCheckListPaso1.controls.area.setValue(t.dataReturned4.nombres),t.FormCheckListPaso1.controls.idarea.setValue(t.dataReturned4.id))}),yield o.present()})()}FOpenModalActividad(t){var o=this;return(0,d.Z)(function*(){const i=yield o.modalCtrl.create({component:f.RrhhPopupActividadPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{id_categoria:t}});return i.onDidDismiss().then(r=>{null!=r.data&&(o.dataReturned2=r.data,console.log("dataReturned::206",r),o.FormCheckListPaso1.controls.actividad.setValue(o.dataReturned2.nombres),o.FormCheckListPaso1.controls.idactivi.setValue(o.dataReturned2.id))}),yield i.present()})()}cancelar_ejecucion(){this.navCtrl.navigateForward("rrhh-horas-extras")}SaveFormTerminadoPaso1(t){var o=this;return(0,d.Z)(function*(){o.FormCheckListPaso1.valid?(o.FormCheckListPaso1.controls.button.setValue(t),yield o.ApiService.GuardarInfPaso1(o.FormCheckListPaso1.value).then(function(){var i=(0,d.Z)(function*(r){o.loadingController.dismiss();let _="0"==r[0].o_nres?"alerta-error":"alerta-ok";yield(yield o.alertController.create({header:"ALERTA",subHeader:"Confirmacion",cssClass:_,mode:"ios",animated:!0,message:r[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada"),"1"==r[0].o_nres&&o.navCtrl.navigateForward(["rrhh-horas-extras"])}}]})).present()});return function(r){return i.apply(this,arguments)}}()).finally(()=>{console.log("finally:::>>LN:394")}).catch(i=>{console.log("errror:::>>>>>>>>>",i)})):(console.log("entraaaaa al elseeee"),o.showAlert())})()}showAlert(){var t=this;return(0,d.Z)(function*(){yield(yield t.alertController.create({header:"ALERTA",subHeader:"Confirmacion",cssClass:"alerta-error",mode:"ios",animated:!0,message:"Error falta completar datos",buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada")}}]})).present()})()}onFechaChangeInicio(t){console.log("Fecha cambiada:",t.detail.value),this.FormCheckListPaso1.controls.fch_ini.setValue(t.detail.value)}onFechaChangeFin(t){console.log("Fecha cambiada:",t.detail.value),this.FormCheckListPaso1.controls.fch_fin.setValue(t.detail.value)}consult_sub_area(){var t=this;return(0,d.Z)(function*(){yield t.ApiService.GuardarInfPaso1(t.FormCheckListPaso1.controls.idarea.value)})()}FLoadForms(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(o=>{o.present(),this.ApiService.FormFindinftab1(this.navParamsAny.idreghoex).then(i=>{console.log(this.navParamsAny.idreghoex),this.EditDataRest=i.form,console.log("hrlppp",this.EditDataRest);try{this.FormCheckListPaso1.setValue({nom_serv:this.EditDataRest[0].program,actividad:this.EditDataRest[0].actividad,motivo:this.EditDataRest[0].motivo,supervisor:this.EditDataRest[0].supervisor,area:this.EditDataRest[0].area,descrip:this.EditDataRest[0].descrip_he,cantidad:this.EditDataRest[0].cantidad,tip_horas:this.EditDataRest[0].tip_horahe,button:this.EditDataRest[0].estado_reg_hhee,nom_tecni:this.NombresUsuarioLocal,idtecni:this.IdUsuarioLocal,idactivi:this.EditDataRest[0].actividad_he,idprogra:this.EditDataRest[0].idprogram_prod,idmotivo:this.EditDataRest[0].idmotivo_he,idarea:this.EditDataRest[0].idarea_he,idsuper:this.EditDataRest[0].idsupervisor_he,id_documento:this.EditDataRest[0].idreghoex,maquina:this.EditDataRest[0].maquina,idmaquina:this.EditDataRest[0].idmaquina_he,fch_ini:this.EditDataRest[0].fech_registro_ini,fch_fin:this.EditDataRest[0].fech_registro_fin}),this.fechaini_he=this.EditDataRest[0].fech_registro_ini,this.fechafin_he=this.EditDataRest[0].fech_registro_fin}catch(r){console.log("error:::>",r)}}).finally(()=>{this.loadingController.dismiss()})})}}return(l=h).\u0275fac=function(t){return new(t||l)(e.Y36(Z.F0),e.Y36(a.IN),e.Y36(n.QS),e.Y36(k.z),e.Y36(a.HT),e.Y36(a.Br),e.Y36(D.SH),e.Y36(R.K))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-rrhh-win-horas-extras"]],standalone:!0,features:[e.jDz],decls:107,vars:11,consts:[["mode","ios"],["text-capitalize",""],["slot","start"],["defaultHref","prod-list-acti-programada",3,"text"],[3,"formGroup"],["f","ngForm"],[3,"hidden"],[1,"ion-align-items-center"],["size","3",1,"ion-text-end"],["size","9"],["required","true","color","primary","mode","ios","formControlName","nom_tecni","readonly",""],["size","9",1,"ion-text-start"],["type","text","placeholder","Seleccionar Area","mode","ios","formControlName","area",3,"click"],["type","text","placeholder","Seleccionar Sub-Area","mode","ios","formControlName","nom_serv",3,"click"],["type","text","placeholder","Seleccionar Maquina","mode","ios","formControlName","maquina",3,"click"],["type","text","placeholder","Buscar Actividad","mode","ios","formControlName","actividad",3,"click"],["hidden","",1,"ion-align-items-center"],["type","text","placeholder","Seleccionar Motivo","mode","ios","formControlName","motivo",3,"click"],["type","text","placeholder","Ingrese su Detalle","mode","ios","formControlName","descrip"],["color","primary","type","number","mode","ios","formControlName","cantidad"],["type","text","placeholder","Seleccionar Supervisor","mode","ios","formControlName","supervisor",3,"click"],["size","2"],["locale","es-PE","datetime","datetime1",1,"custom-datetime"],["trigger","popover-button","animated","true","arrow","true","mode","ios",3,"keepContentsMounted"],["size","1",1,"ion-text-end"],["locale","es-PE","datetime","datetime2"],["placeholder","Seleccionar el tipo de Horas","formControlName","tip_horas"],["value","1"],["value","2"],[2,"text-align","center"],[3,"click"],["color","danger",3,"click"],["name","close-outline"],["color","primary",3,"click",4,"ngIf"],["color","success",3,"click",4,"ngIf"],["locale","es-ES","id","datetime1","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelOptions","ngModelChange","ionChange"],["locale","es-ES","id","datetime2","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons","ngModel","ngModelOptions","ngModelChange","ionChange"],["color","primary",3,"click"],["name","save-outline"],["color","success",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3,"Formulario Horas Extras"),e.qZA(),e.TgZ(4,"ion-buttons",2),e._UZ(5,"ion-back-button",3),e.qZA()()(),e.TgZ(6,"ion-content")(7,"form",4,5)(9,"ion-list")(10,"ion-item",6)(11,"ion-grid",6)(12,"ion-row",7)(13,"ion-col")(14,"ion-grid")(15,"ion-row",7)(16,"ion-col",8),e._uU(17," Tecnico: "),e.qZA(),e.TgZ(18,"ion-col",9)(19,"ion-item"),e._UZ(20,"ion-input",10),e.qZA(),e._UZ(21,"div"),e.qZA()(),e.TgZ(22,"ion-row",7)(23,"ion-col",8),e._uU(24,"Area Solicitante: "),e.qZA(),e.TgZ(25,"ion-col",11)(26,"ion-item")(27,"ion-searchbar",12),e.NdJ("click",function(){return o.open_popup_area()}),e.qZA()()()(),e.TgZ(28,"ion-row",7)(29,"ion-col",8),e._uU(30,"Sub-Area: "),e.qZA(),e.TgZ(31,"ion-col",11)(32,"ion-item")(33,"ion-searchbar",13),e.NdJ("click",function(){return o.open_popup_servicios(o.FormCheckListPaso1.get("idarea").value)}),e.qZA()()()(),e.TgZ(34,"ion-row",7)(35,"ion-col",8),e._uU(36,"Maquina/Puesto: "),e.qZA(),e.TgZ(37,"ion-col",11)(38,"ion-item")(39,"ion-searchbar",14),e.NdJ("click",function(){return o.FOpenModalTecnico(o.FormCheckListPaso1.get("idprogra").value)}),e.qZA()()()(),e.TgZ(40,"ion-row",7)(41,"ion-col",8),e._uU(42," Categoria: "),e.qZA(),e.TgZ(43,"ion-col",9)(44,"ion-item")(45,"ion-searchbar",15),e.NdJ("click",function(){return o.FOpenModalActividad(o.FormCheckListPaso1.get("idarea").value)}),e.qZA()(),e._UZ(46,"div"),e.qZA()()()()(),e.TgZ(47,"ion-row",16)(48,"ion-col",8),e._uU(49," Motivo: "),e.qZA(),e.TgZ(50,"ion-col",9)(51,"ion-item")(52,"ion-searchbar",17),e.NdJ("click",function(){return o.open_popup_motivo(o.FormCheckListPaso1.get("idarea").value)}),e.qZA()()()(),e.TgZ(53,"ion-row",16)(54,"ion-col",8),e._uU(55," Tarea Especifica: "),e.qZA(),e.TgZ(56,"ion-col",9)(57,"ion-item"),e._UZ(58,"ion-input",18),e.qZA()()(),e.TgZ(59,"ion-row",16)(60,"ion-col",8),e._uU(61," Cantidad: "),e.qZA(),e.TgZ(62,"ion-col",9)(63,"ion-item"),e._UZ(64,"ion-input",19),e.qZA()()(),e.TgZ(65,"ion-row",7)(66,"ion-col",8),e._uU(67,"Supervisor: "),e.qZA(),e.TgZ(68,"ion-col",11)(69,"ion-item")(70,"ion-searchbar",20),e.NdJ("click",function(){return o.open_popup_supervisor(o.FormCheckListPaso1.get("idarea").value)}),e.qZA()()()(),e.TgZ(71,"ion-row",7)(72,"ion-col",8),e._uU(73,"Inicio: "),e.qZA(),e.TgZ(74,"ion-col",21),e._UZ(75,"ion-datetime-button",22),e.TgZ(76,"ion-popover",23),e.YNc(77,T,1,5,"ng-template"),e.qZA()(),e.TgZ(78,"ion-col",24),e._uU(79,"Fin: "),e.qZA(),e.TgZ(80,"ion-col",21),e._UZ(81,"ion-datetime-button",25),e.TgZ(82,"ion-popover",23),e.YNc(83,M,1,5,"ng-template"),e.qZA()()(),e.TgZ(84,"ion-row",7)(85,"ion-col",8),e._uU(86,"Tipo de Horas: "),e.qZA(),e.TgZ(87,"ion-col",11)(88,"ion-item")(89,"ion-select",26)(90,"ion-select-option",27),e._uU(91,"H. Extras"),e.qZA(),e.TgZ(92,"ion-select-option",28),e._uU(93,"H. Compensada"),e.qZA()()()()()()()()()(),e.TgZ(94,"ion-footer")(95,"ion-grid",6)(96,"ion-row"),e._UZ(97,"ion-col"),e.TgZ(98,"ion-col",29)(99,"ion-buttons",30),e.NdJ("click",function(){return o.cancelar_ejecucion()}),e.TgZ(100,"ion-button",31),e.NdJ("click",function(){return o.cancelar_ejecucion}),e._UZ(101,"ion-icon",32),e._uU(102,"\xa0 Cancelar "),e.qZA(),e._uU(103," \xa0\xa0\xa0\xa0 "),e.YNc(104,b,3,0,"ion-button",33)(105,F,3,0,"ion-button",34),e.qZA()(),e._UZ(106,"ion-col"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("text",o.Cancelar),e.xp6(2),e.Q6J("formGroup",o.FormCheckListPaso1),e.xp6(2),e.Udp("--background",o.scanActive?"#00000000":"#fff"),e.xp6(1),e.Q6J("hidden",o.scanActive),e.xp6(1),e.Q6J("hidden",o.scanActive),e.xp6(65),e.Q6J("keepContentsMounted",!0),e.xp6(6),e.Q6J("keepContentsMounted",!0),e.xp6(13),e.Q6J("hidden",o.scanActive),e.xp6(9),e.Q6J("ngIf",!o.disableButton1),e.xp6(1),e.Q6J("ngIf",!o.disableButton))},dependencies:[a.Pc,a.YG,a.Sm,a.wI,a.W2,a.x4,a.Mj,a.fr,a.jY,a.Gu,a.gu,a.pK,a.Ie,a.q_,a.Nd,a.VI,a.t9,a.n0,a.wd,a.sr,a.d8,a.as,a.QI,a.j9,a.oU,m.ez,m.O5,n.u5,n._Y,n.JJ,n.JL,n.Q7,n.On,n.UX,n.sg,n.u],styles:[".custom-datetime[_ngcontent-%COMP%]   .datetime-text[_ngcontent-%COMP%]{color:red!important}ion-datetime.custom-datetime[_ngcontent-%COMP%]{--ion-text-color: red;--color: red}"]}),h})()}}]);