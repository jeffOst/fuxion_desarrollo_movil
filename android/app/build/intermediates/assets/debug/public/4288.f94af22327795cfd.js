"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4288,4083],{4083:(Z,p,s)=>{s.d(p,{Z:()=>g});const g=(0,s(2726).fo)("Network",{web:()=>s.e(516).then(s.bind(s,516)).then(d=>new d.NetworkWeb)})},4288:(Z,p,s)=>{s.r(p),s.d(p,{MttoWinChecklistHerraPage:()=>y});var c=s(5861),g=s(6814),d=s(95),a=s(6728),P=s(4083),k=s(9828),v=s(5490),A=s(5284),e=s(6242),D=s(5472),M=s(2014),b=s(4248),S=s(4771);function E(n,_){if(1&n&&(e.TgZ(0,"ion-select-option",30),e._uU(1),e.qZA()),2&n){const l=_.$implicit;e.Q6J("value",l.codigo),e.xp6(1),e.hij("",l.nombre," ")}}function x(n,_){if(1&n&&(e.TgZ(0,"ion-select-option",30),e._uU(1),e.qZA()),2&n){const l=_.$implicit;e.Q6J("value",l.codigo),e.xp6(1),e.hij("",l.nombre," ")}}function F(n,_){1&n&&e._UZ(0,"ion-datetime",31),2&n&&e.Q6J("preferWheel",!0)("showDefaultButtons",!0)}function U(n,_){if(1&n){const l=e.EpF();e.TgZ(0,"ion-item")(1,"ion-badge",32),e._uU(2),e.qZA(),e.TgZ(3,"ion-label",33)(4,"div",34)(5,"p",35),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA()(),e.TgZ(9,"div",36)(10,"ion-segment",37),e.NdJ("ionChange",function(o){const r=e.CHM(l).$implicit,h=e.oxw();return e.KtG(h.FBlourInput(o,r))}),e.TgZ(11,"ion-segment-button",38)(12,"ion-label"),e._uU(13,"B"),e.qZA()(),e.TgZ(14,"ion-segment-button",39)(15,"ion-label"),e._uU(16,"R"),e.qZA()(),e.TgZ(17,"ion-segment-button",40)(18,"ion-label"),e._uU(19,"M"),e.qZA()(),e.TgZ(20,"ion-segment-button",41)(21,"ion-label"),e._uU(22,"E"),e.qZA()(),e.TgZ(23,"ion-segment-button",42)(24,"ion-label"),e._uU(25,"NE"),e.qZA()()()()(),e.TgZ(26,"div",43),e._UZ(27,"label"),e.qZA()()}if(2&n){const l=_.$implicit;e.xp6(2),e.hij("",l.fila,".-"),e.xp6(4),e.hij(" ",l.Y04002," "),e.xp6(2),e.Oqu("Serie: "+l.serie_hd),e.xp6(2),e.s9C("value",l.idestado_hd)}}let y=(()=>{var n;class _{constructor(t,o,i,r,h,u,m,T,f){this.navCtrl=t,this.storage=o,this.router=i,this.formBuilder=r,this.loadingController=h,this.ApiService=u,this.modalCtrl=m,this.alertController=T,this.toastController=f,this.tituloTollBar="CheckList Herramientas",this.Cancelar="Cancelar",this.disableButton=!1,this.estaCargando=!1,this.selectedSegment=null,this.toggleValue=!1,this.checklist_paso1_apli_ck=!1,this.toggleState=!0,this.FormCheckListPaso1=this.formBuilder.group({nomusuario:[""],idmesa:[""],idisla:[""],idusuario:[""],idestado_hd:[""],obser:[""],correlativo:[""],tipo_ckl:[""],fch_inspec_ch:[""]});try{this.navParamsAny=this.router.getCurrentNavigation().extras.state.Row,console.log("this.navParamsAny",this.navParamsAny),this.idregistro=this.navParamsAny.id_check_ch,console.log("this.idregistro",this.navParamsAny)}catch(C){console.log(C)}}ngOnInit(){let t;P.Z&&P.Z.getStatus().then(o=>{this.networkStatus=o}),P.Z.addListener("networkStatusChange",o=>{this.networkStatus=o,this.tituloTollBar=this.networkStatus&&this.networkStatus.connected?"CheckList de Herramientas":"Sin conexion a internet"}),this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{t=o,this.IdUsuarioLocal=t.user_id,this.NombresUsuarioLocal=t.user_name,console.log(t)})}ionViewWillEnter(){let t;this.FLoadmot(),t={detail:{checked:this.checklist_paso1_apli_ck,jc:0}}}FLoadmot(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(o=>{o.present(),this.ApiService.cargawin1(this.IdUsuarioLocal,this.idregistro).then(i=>{this.DataSetGrid=i.form,this.DataSetGrid1=i.cab;try{this.FormCheckListPaso1.controls.nomusuario.setValue(this.DataSetGrid1[0].tec_res_ch),this.FormCheckListPaso1.controls.idusuario.setValue(this.DataSetGrid1[0].id_personal),this.FormCheckListPaso1.controls.idisla.setValue(this.DataSetGrid1[0].idisla),this.FormCheckListPaso1.controls.idmesa.setValue(this.DataSetGrid1[0].idmesa),this.FormCheckListPaso1.controls.obser.setValue(this.DataSetGrid1[0].observ_ch),this.FormCheckListPaso1.controls.correlativo.setValue(this.DataSetGrid1[0].corre_ch),this.FormCheckListPaso1.controls.tipo_ckl.setValue(this.DataSetGrid1[0].tipo_doc_ch1),this.FormCheckListPaso1.controls.fch_inspec_ch.setValue(this.DataSetGrid1[0].fch_inspec_ch),this.IslaPivotSelectedText=this.DataSetGrid1[0].ubi_isla_ch,this.MesaPivotSelectedText=this.DataSetGrid1[0].mesa_trab_ch}catch(r){console.log("error:::>",r)}this.DsIsla=i.isla,this.DsMesa=i.mesa,this.DsTecnico=i.tecnico}).finally(()=>{this.loadingController.dismiss()})})}FSelectChangeIsla(t,o){console.log("select_change_material::",this.DsIsla);for(const i of this.DsIsla)console.log(i.codigo,t.detail.value,"valor isla"),i.codigo==t.detail.value&&(this.FormCheckListPaso1.controls.idisla.setValue(i.codigo),this.IslaPivotSelectedText=i.nombre),o>0&&(this.FormCheckListPaso1.controls.idisla.setValue(o),this.IslaPivotSelectedText=i.nombre)}FSelectChangeMesa(t,o){console.log("select_change_material::",this.DsMesa);for(const i of this.DsMesa)console.log(t.detail.value,"valor mesaaa"),i.codigo==t.detail.value&&(this.FormCheckListPaso1.controls.idmesa.setValue(i.codigo),this.MesaPivotSelectedText=i.nombre),o>0&&(this.FormCheckListPaso1.controls.idmesa.setValue(o),this.MesaPivotSelectedText=i.nombre)}open_popup_herra(){var t=this;return(0,c.Z)(function*(){const o=yield t.modalCtrl.create({component:A.PopUpAddHerraPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idregistro:t.idregistro}});return o.onDidDismiss().then(i=>{null!==i&&(t.dataReturned=i.data,console.log("datos",t.dataReturned))}),yield o.present()})()}FLoadmot1(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(o=>{o.present(),this.ApiService.cargawin1(this.IdUsuarioLocal,this.idregistro).then(i=>{try{this.DataSetGrid=i.form}catch(r){console.log("error:::>",r)}}).finally(()=>{this.loadingController.dismiss()})})}open_popup_tecni(){var t=this;return(0,c.Z)(function*(){const f=yield t.modalCtrl.create({component:k.PopUpTecChecklisthPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{}});return f.onDidDismiss().then(C=>{null!==C&&(t.dataReturned=C.data,console.log("datos",t.dataReturned),t.FormCheckListPaso1.controls.idusuario.setValue(t.dataReturned.id_personal),t.FormCheckListPaso1.controls.nomusuario.setValue(t.dataReturned.tecnico_cl))}),yield f.present()})()}mostrarConfirmacion(){var t=this;return(0,c.Z)(function*(){yield(yield t.alertController.create({header:"Confirmaci\xf3n",message:"\xbfDesea realizar esta acci\xf3n?",cssClass:"alerta-confirma",mode:"ios",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Acci\xf3n cancelada")}},{text:"Aceptar",handler:()=>{t.SaveFormTerminadoPaso1()}}]})).present()})()}SaveFormTerminadoPaso1(){var t=this;return(0,c.Z)(function*(){if(t.FormCheckListPaso1.valid)t.loadingController.create({message:"Guardando Paso 1...",translucent:!0}).then(i=>{i.present()}),yield t.ApiService.GuardarFormPaso1(t.FormCheckListPaso1.value,t.idregistro).then(function(){var i=(0,c.Z)(function*(r){console.log("ressssssssssssssssssssssssssssssssssssss",r),t.loadingController.dismiss();let h=0==r[0].o_nres?"alerta-error":"alerta-ok";yield(yield t.alertController.create({header:"CHECKLIST HERRAMIENTAS",subHeader:"CONFIRMAR",cssClass:h,mode:"ios",animated:!0,message:r[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada"),"1"==r[0].o_nres&&t.navCtrl.navigateForward(["mtto-list-checklist-herra"])}}]})).present()});return function(r){return i.apply(this,arguments)}}()).finally(()=>{console.log("finally:::>>LN:394")}).catch(i=>{console.log("errror:::>>>>>>>>>",i)});else{for(let o in t.FormCheckListPaso1.controls)t.FormCheckListPaso1.controls[o].setValue(t.FormCheckListPaso1.controls[o].value),t.FormCheckListPaso1.controls[o].markAsTouched();t.alertSiNo=t.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"GENERAL",mode:"ios",cssClass:"alerta-error",backdropDismiss:!0,message:"Falta seleccionar todos los datos",buttons:[{text:"Aceptar",role:"A",handler:()=>{}}]}).then(o=>{o.present(),o.onDidDismiss().then(i=>{})})}})()}presentToast(t){var o=this;return(0,c.Z)(function*(){console.log("ingreso toast"),yield(yield o.toastController.create({message:t,duration:1500,position:"bottom"})).present()})()}FBlourInput(t,o){var i=this;return(0,c.Z)(function*(){console.log(t);const h=t.detail.value;i.selectedSegment=i.selectedSegment===h?null:h,console.log("eventoooo",t.detail.value),yield i.ApiService.GuardarFormPaso2(o,i.IdUsuarioLocal,t.detail.value).then(function(){var u=(0,c.Z)(function*(m){console.log(m),i.presentToast(m[0].o_msj)});return function(m){return u.apply(this,arguments)}}()).finally(()=>{}).catch(u=>{console.log("errror:::>>>>>>>>>",u)}),t.preventDefault()})()}toggleSegment(t){this.selectedSegment=this.selectedSegment===t?null:t}open_popupimages(){var t=this;return(0,c.Z)(function*(){return yield(yield t.modalCtrl.create({component:v.PopUpImagenHerraPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idregistro:t.idregistro}})).present()})()}}return(n=_).\u0275fac=function(t){return new(t||n)(e.Y36(D.SH),e.Y36(M.K),e.Y36(b.F0),e.Y36(d.QS),e.Y36(a.HT),e.Y36(S.Q),e.Y36(a.IN),e.Y36(a.Br),e.Y36(a.yF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mtto-win-checklist-herra"]],standalone:!0,features:[e.jDz],decls:60,vars:16,consts:[[3,"translucent"],["mode","ios",3,"color"],["text-capitalize",""],["slot","start"],["defaultHref","mtto-list-checklist-herra",3,"text","disabled"],[1,"ion-padding"],[3,"formGroup"],["f","ngForm"],["mode","ios",1,"ion-no-padding"],["formControlName","tipo_ckl","readonly","",1,"ion-text-center"],["label","Correlativo:\xa0","formControlName","correlativo","readonly",""],["type","text","placeholder","Seleccionar Tecnico","mode","ios","readonly","","formControlName","nomusuario",3,"click"],["cancelText","Cancelar","placeholder","Seleccionar mesa de Trabajo","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],[3,"value",4,"ngFor","ngForOf"],["cancelText","Cancelar","placeholder","Seleccionar Isla","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["label","F.Registro Guia:","locale","es-PE","datetime","datetime",3,"disabled"],["trigger","popover-button","animated","true","arrow","true","mode","ios",3,"keepContentsMounted"],["position","floating"],["mode","ios","formControlName","obser",3,"autoGrow","autofocus"],["color","primary"],[2,"padding","0px","border","0px"],["slot","end","mode","ios","color","primary",3,"click"],["name","add"],["slot","end","color","primary",3,"click"],["name","refresh-outline"],[4,"ngFor","ngForOf"],["expand","full","color","primary",3,"click"],["vertical","bottom","horizontal","end","slot","fixed",2,"margin-bottom","40px",3,"click"],["color","primary","mode","ios","title","Item Formulario"],["name","camera-outline"],[3,"value"],["locale","es-PE","id","datetime","mode","ios","displayFormat","YYYY-MM-DD HH:mm","presentation","date-time","pickerFormat","YYYY-MM-DD HH:mm",3,"preferWheel","showDefaultButtons"],["slot","start","color","medium","no-padding",""],[2,"display","flex","justify-content","space-between"],[2,"display","flex","flex-direction","column"],[2,"width","250px","margin-right","10px","overflow","hidden","text-overflow","ellipsis","white-space","nowrap"],[2,"display","flex"],["mode","ios",2,"width","350px",3,"value","ionChange"],["color","success","value","1",2,"font-size","12px","padding","3px"],["color","warning","value","2",2,"font-size","12px","padding","3px"],["color","danger","value","3",2,"font-size","12px","padding","3px"],["color","dark","value","4",2,"font-size","12px","padding","3px"],["color","dark","value","5",2,"font-size","12px","padding","3px"],[2,"width","80px"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",3),e._UZ(5,"ion-back-button",4),e.qZA()()(),e.TgZ(6,"ion-content",5)(7,"form",6,7)(9,"ion-list",8)(10,"ion-item"),e._UZ(11,"ion-input",9),e.qZA(),e.TgZ(12,"ion-item"),e._UZ(13,"ion-input",10),e.qZA(),e.TgZ(14,"ion-item")(15,"ion-searchbar",11),e.NdJ("click",function(){return o.open_popup_tecni()}),e._uU(16," Tecnico:\xa0 "),e.qZA()(),e.TgZ(17,"ion-item")(18,"ion-label")(19,"p"),e._uU(20,"Mesa de Trabajo"),e.qZA(),e.TgZ(21,"ion-select",12),e.NdJ("ionChange",function(r){return o.FSelectChangeMesa(r,0)}),e.YNc(22,E,2,2,"ion-select-option",13),e.qZA()()(),e.TgZ(23,"ion-item")(24,"ion-label")(25,"p"),e._uU(26,"Isla"),e.qZA(),e.TgZ(27,"ion-select",14),e.NdJ("ionChange",function(r){return o.FSelectChangeIsla(r,0)}),e.YNc(28,x,2,2,"ion-select-option",13),e.qZA()()(),e.TgZ(29,"ion-item")(30,"ion-label"),e._uU(31,"Fecha y Hora:"),e.qZA(),e._UZ(32,"ion-datetime-button",15),e.TgZ(33,"ion-popover",16),e.YNc(34,F,1,2,"ng-template"),e.qZA()(),e.TgZ(35,"ion-item")(36,"ion-label",17),e._uU(37," Observacion: "),e.qZA(),e._UZ(38,"ion-textarea",18),e.qZA(),e.TgZ(39,"ion-item-divider",19),e._UZ(40,"ion-label"),e.qZA(),e.TgZ(41,"ion-item",20)(42,"ion-label",3),e._uU(43,"B: Bueno R: Regular M: Malo E: Extraviado NE: No entregado"),e.qZA(),e.TgZ(44,"ion-chip",21),e.NdJ("click",function(){return o.open_popup_herra()}),e.TgZ(45,"ion-label"),e._uU(46,"Agregar"),e.qZA(),e._UZ(47,"ion-icon",22),e.qZA(),e.TgZ(48,"ion-chip",23),e.NdJ("click",function(){return o.FLoadmot1()}),e._UZ(49,"ion-icon",24),e.TgZ(50,"ion-label"),e._uU(51,"Actualizar"),e.qZA()()()(),e.TgZ(52,"ion-list"),e.YNc(53,U,28,4,"ion-item",25),e.qZA()()(),e.TgZ(54,"ion-footer")(55,"ion-button",26),e.NdJ("click",function(){return o.mostrarConfirmacion()}),e._uU(56,"Terminado"),e.qZA()(),e.TgZ(57,"ion-fab",27),e.NdJ("click",function(){return o.open_popupimages()}),e.TgZ(58,"ion-fab-button",28),e._UZ(59,"ion-icon",29),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(1),e.Q6J("color",o.networkStatus&&o.networkStatus.connected?"primary":"danger"),e.xp6(2),e.hij("",o.tituloTollBar," "),e.xp6(2),e.Q6J("text",o.Cancelar)("disabled",o.disableButton),e.xp6(2),e.Q6J("formGroup",o.FormCheckListPaso1),e.xp6(14),e.Q6J("selectedText",o.MesaPivotSelectedText),e.xp6(1),e.Q6J("ngForOf",o.DsMesa),e.xp6(5),e.Q6J("selectedText",o.IslaPivotSelectedText),e.xp6(1),e.Q6J("ngForOf",o.DsIsla),e.xp6(4),e.Q6J("disabled",!0),e.xp6(1),e.Q6J("keepContentsMounted",!0),e.xp6(5),e.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),e.xp6(15),e.Q6J("ngForOf",o.DataSetGrid))},dependencies:[a.Pc,a.yp,a.YG,a.Sm,a.hM,a.W2,a.x4,a.Mj,a.IJ,a.W4,a.fr,a.Gu,a.gu,a.pK,a.Ie,a.rH,a.Q$,a.q_,a.VI,a.cJ,a.GO,a.t9,a.n0,a.g2,a.wd,a.sr,a.d8,a.QI,a.j9,a.oU,g.ez,g.sg,d.u5,d._Y,d.JJ,d.JL,d.UX,d.sg,d.u]}),_})()}}]);