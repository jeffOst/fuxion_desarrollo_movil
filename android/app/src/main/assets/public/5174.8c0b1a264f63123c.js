"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5174],{4160:(N,v,m)=>{m.d(v,{J:()=>x});var g=m(5861),D=m(2519),p=m(6242),c=m(9862),e=m(2014);let x=(()=>{var C;class I{constructor(t,o){this.httpClient=t,this.storage=o,this.urlApiProd=D.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTecnico.php",this.urlApiInf=D.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTablero.php",this.confirmRequest=""}ListFindOts(t,o,l){let a=JSON.stringify({acc:1,s:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}SaveCheckListCab(t,o,l){let a=JSON.stringify({acc:2,id_orden_trab_cab:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}FormFindPaso1(t,o,l){let a=JSON.stringify({acc:3,idchecklistcab:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}FLoadPiezasAcordion(t,o,l){let a=JSON.stringify({acc:7,id:t,p2:o,cod_inf:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}FLoadServiciosxPiezas(t,o){let l=JSON.stringify({acc:8,id:t,p2:o});return this.httpClient.post(this.urlApiProd,l).toPromise().then(a=>a)}GuardarFormPaso1(t){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let a=o.urlApiProd,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=4",n).toPromise()})()}GuardarinfPaso1(t){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let a=o.urlApiInf,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=2",n).toPromise()})()}GuardarinfPaso2(t){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let a=o.urlApiInf,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=3",n).toPromise()})()}GuardarinfPaso3(t){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let a=o.urlApiInf,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=4",n).toPromise()})()}GuardarinfPaso4(t){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let a=o.urlApiInf,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=5",n).toPromise()})()}GuardarinfPaso5(t){var o=this;return(0,g.Z)(function*(){let a=o.urlApiInf,n=JSON.stringify(t);return console.log("datos enviados",n),o.httpClient.post(a+"?acc=6",n).toPromise()})()}GuardarFormPaso2(t,o,l,a,n,f,P){var _=this;return(0,g.Z)(function*(){let d,s=_.urlApiProd,r=JSON.stringify({idservicio:t,idpapa:o,idhijo:l,idusuario:a,acc:9,idclase:n,ck:f,cod_material:P});return _.httpClient.post(s+"?acc=6",r).toPromise().then(i=>{console.log(i),d=i,_.confirmSaveBd=d[0].o_nres,_.confirmRequest=d},i=>{console.log(i,"Error- something is wrong!")})})()}FormFindPaso3(t,o,l){let a=JSON.stringify({acc:7,idchecklistcab:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}GuardarFormPaso3(t){var o=this;return(0,g.Z)(function*(){let l,a=o.urlApiProd,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=8",n).toPromise().then(f=>{console.log(f),l=f,o.confirmSaveBd=l[0].o_nres,o.confirmRequest=l},f=>{console.log(f,"Error- something is wrong!")})})()}FormFindPaso5(t,o,l){let a=JSON.stringify({acc:10,id:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}GuardarFormPaso5(t){var o=this;return(0,g.Z)(function*(){let a=o.urlApiProd,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=11",n).toPromise()})()}FormFindPaso6(t,o,l){let a=JSON.stringify({acc:12,idchecklistcab:t,idusu:o,iddevice:l});return this.httpClient.post(this.urlApiProd,a).toPromise().then(n=>n)}GuardarFormPaso6(t){var o=this;return(0,g.Z)(function*(){let a=o.urlApiProd,n=JSON.stringify(t);return o.httpClient.post(a+"?acc=13",n).toPromise()})()}GuardarAplicaPaso(t,o,l){var a=this;return(0,g.Z)(function*(){let n,P,f=a.urlApiProd;P={idchecklistcab:t,numeroPaso:o,ck:l};let _=JSON.stringify(P);return a.httpClient.post(f+"?acc=15",_).toPromise().then(d=>{console.log(d),n=d,a.confirmSaveBd=n[0].o_nres,a.confirmRequest=n},d=>{console.log(d,"Error- something is wrong!")})})()}getImages(t){return this.httpClient.get(`${this.urlApiProd}?acc=5&id=`+t)}uploadImage(t,o,l){let a=new FormData;return a.append("file",t,"myimage."+l),a.append("id",o),a.append("acc","6"),a.append("type","image/png"),this.httpClient.post(this.urlApiProd,a)}UpLoadImageMultiple(t,o,l){try{let a=new FormData;a.append("id",o),a.append("acc","15"),a.append("type","image/png");for(let n=0;n<t.length;n++)console.log("image::ruta=>::>",t[n]),a.append("images[]",t[n],`image_${n}.jpg`);return this.httpClient.post(this.urlApiProd,a)}catch(a){console.error("Error al enviar im\xe1genes al API:",a)}}LoadPdfInformeTecnico(t){let o=JSON.stringify({acc:14,idchecklistcab:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(l=>l)}deleteImage(t){return this.httpClient.delete(`${this.urlApiProd}?acc=16&id=${t}`)}}return(C=I).\u0275fac=function(t){return new(t||C)(p.LFG(c.eN),p.LFG(e.K))},C.\u0275prov=p.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),I})()},5174:(N,v,m)=>{m.r(v),m.d(v,{MttoWinInformeTecnico5Page:()=>P});var g=m(5861),D=m(6814),p=m(95),c=m(6728),e=m(6242),x=m(5472),C=m(4160),I=m(2014),O=m(4248),t=m(6172);function o(_,d){if(1&_&&(e.TgZ(0,"ion-select-option",42),e._uU(1),e.qZA()),2&_){const u=d.$implicit;e.Q6J("value",u.codigo),e.xp6(1),e.hij("",u.nombre," ")}}function l(_,d){if(1&_&&(e.TgZ(0,"ion-select-option",42),e._uU(1),e.qZA()),2&_){const u=d.$implicit;e.Q6J("value",u.codigo),e.xp6(1),e.hij("",u.nombre," ")}}function a(_,d){if(1&_&&(e.TgZ(0,"ion-select-option",42),e._uU(1),e.qZA()),2&_){const u=d.$implicit;e.Q6J("value",u.codigo),e.xp6(1),e.hij("",u.nombre," ")}}function n(_,d){if(1&_&&(e.TgZ(0,"ion-select-option",42),e._uU(1),e.qZA()),2&_){const u=d.$implicit;e.Q6J("value",u.codigo),e.xp6(1),e.hij("",u.nombre," ")}}function f(_,d){if(1&_&&(e.TgZ(0,"ion-select-option",42),e._uU(1),e.qZA()),2&_){const u=d.$implicit;e.Q6J("value",u.codigo),e.xp6(1),e.hij("",u.nombre," ")}}let P=(()=>{var _;class d{constructor(s,r,i,h,b,T,E,A,F,U){let Z;if(this.formBuilder=s,this.navCtrl=r,this.loadingController=i,this.ApiService=h,this.storage=b,this.alertController=T,this.router=E,this.globalVal=A,this.ref=F,this.actionSheetCtrl=U,this.FormInformeTecPaso2=this.formBuilder.group({cable_prin_m:["",[p.kI.required,p.kI.pattern("[0-9]+")]],cable_prin_c:[""],cable_prin_tipo:["",p.kI.required],cable_prin_ope:["",p.kI.required],cable_prin_cambio:[""],cable_prin_seccionado:[""],cable_prin_repara_det:[""],cable_2da_m:[""],cable_2da_c:[""],cable_2da_tipo:[""],cable_2da_ope:[""],cable_2da_cambio:[""],cable_2da_seccionado:[""],cable_2da_repara_det:[""],cable_aux_m:[""],cable_aux_c:[""],cable_aux_tipo:[""],cable_aux_ope:[""],cable_aux_cambio:[""],cable_aux_seccionado:[""],cable_aux_repara_det:[""],b_con_descarga:["",p.kI.required],b_con_des_diametro:["",p.kI.required],b_con_des_tipo:["",p.kI.required],b_dano_fisico_ext:[""],b_dano_fisico_ext_det:[""],b_partes_faltante:[""],b_parte_faltante_ext:[""],b_otros:[""],corre_inf_cab:[""],idtipo_campana_it:[""],idtipodiametro_it:[""],idestado_campana:[""],b_con_reclamo_it:[""]}),this.images=[],this.DirectorioFotos="../aw_file/adjuntos/",this.storage.get("USER_INFO").then(S=>{Z=S,this.NombresUsuarioLocal=Z.user_name,this.IdUsuarioLocal=Z.user_id,this.storage.get("DEVICE_INFO").then(R=>{Z=R,this.NombreDispositivo=Z.name,this.IdDispositivo=Z.uuid})}),""==this.globalVal.checklist_paso_pivot)try{this.navParamsAny=this.router.getCurrentNavigation().extras.state.Row,A.corre_inf_cab=this.navParamsAny.corre_inf_cab}catch(S){console.log(S),this.corre_inf_cab=A.corre_inf_cab}else this.corre_inf_cab=A.corre_inf_cab}onTouched(s){console.log(s)}FLoadForms(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(r=>{r.present(),this.corre_inf_cab=this.globalVal.corre_inf_cab,console.log(this.corre_inf_cab),this.FormInformeTecPaso2.controls.corre_inf_cab.setValue(this.corre_inf_cab),this.ApiService.FormFindPaso5(this.corre_inf_cab,"1","H").then(i=>{this.EditDataRest=i.form,this.DsTipoCable=i.tipo_cable,this.DsTipoCampana=i.tipo_campana,this.DsDiametroCampana=i.tipo_diametro,this.DsEstadoCampana=i.estado_campana;try{this.FormInformeTecPaso2.setValue({cable_prin_m:this.EditDataRest[0].cable_prin_m,cable_prin_c:this.EditDataRest[0].cable_prin_c,cable_prin_tipo:this.EditDataRest[0].cable_prin_tipo,cable_prin_ope:"1"==this.EditDataRest[0].cable_prin_ope,cable_prin_cambio:"1"==this.EditDataRest[0].cable_prin_cambio,cable_prin_seccionado:"1"==this.EditDataRest[0].cable_prin_seccionado,cable_prin_repara_det:this.EditDataRest[0].cable_prin_repara_det,cable_2da_m:this.EditDataRest[0].cable_2da_m,cable_2da_c:this.EditDataRest[0].cable_2da_c,cable_2da_tipo:this.EditDataRest[0].cable_2da_tipo,cable_2da_ope:"1"==this.EditDataRest[0].cable_2da_ope,cable_2da_cambio:"1"==this.EditDataRest[0].cable_2da_cambio,cable_2da_seccionado:"1"==this.EditDataRest[0].cable_2da_seccionado,cable_2da_repara_det:this.EditDataRest[0].cable_2da_repara_det,cable_aux_m:this.EditDataRest[0].cable_aux_m,cable_aux_c:this.EditDataRest[0].cable_aux_c,cable_aux_tipo:this.EditDataRest[0].cable_aux_tipo,cable_aux_ope:"1"==this.EditDataRest[0].cable_aux_ope,cable_aux_cambio:"1"==this.EditDataRest[0].cable_aux_cambio,cable_aux_seccionado:"1"==this.EditDataRest[0].cable_aux_seccionado,cable_aux_repara_det:this.EditDataRest[0].cable_aux_repara_det,b_con_descarga:this.EditDataRest[0].b_con_descarga,b_con_des_diametro:this.EditDataRest[0].b_con_des_diametro,b_con_des_tipo:this.EditDataRest[0].b_con_des_tipo,b_dano_fisico_ext:this.EditDataRest[0].b_dano_fisico_ext,b_dano_fisico_ext_det:this.EditDataRest[0].b_dano_fisico_ext_det,b_partes_faltante:this.EditDataRest[0].b_partes_faltante,b_otros:this.EditDataRest[0].b_otros,b_parte_faltante_ext:this.EditDataRest[0].b_parte_faltante_ext,corre_inf_cab:this.EditDataRest[0].corre_inf_cab,idtipo_campana_it:this.EditDataRest[0].idtipo_campana_it,idtipodiametro_it:this.EditDataRest[0].idtipodiametro_it,idestado_campana:this.EditDataRest[0].idestado_campana,b_con_reclamo_it:this.EditDataRest[0].b_con_reclamo_it}),this.TipoCblePivotSelectedText=this.EditDataRest[0].tipocable_1,this.TipoCble2PivotSelectedText=this.EditDataRest[0].tipocable_2,this.TipoCampanaPivotSelectedText=this.EditDataRest[0].idtipo_campana_it2,this.DiametroCampanaPivotSelectedText=this.EditDataRest[0].idtipodiametro_it2,this.EstadoCampanaPivotSelectedText=this.EditDataRest[0].idestado_campana2}catch(h){console.log("error:::>",h)}}).finally(()=>{this.loadingController.dismiss()})})}SaveFormTerminadoPaso1(){var s=this;if(this.FormInformeTecPaso2.valid)this.alertSiNo=this.alertController.create({header:"INFORME TECNICO",subHeader:"ANTES DEL DESMONTAJE",mode:"ios",cssClass:"alerta-ok",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(r=>{r.present(),r.onDidDismiss().then(i=>{console.log("aceptaPop::::>>",i),"A"==i.role&&(this.corre_inf_cab=this.globalVal.corre_inf_cab,this.loadingController.create({message:"Guardando Antes del..",translucent:!0}).then(b=>{b.present()}),this.ApiService.GuardarFormPaso5(this.FormInformeTecPaso2.value).then(function(){var b=(0,g.Z)(function*(T){s.loadingController.dismiss();let E="0"==T[0].o_nres?"alerta-error":"alerta-ok";yield(yield s.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"DATOS GENERALES",cssClass:E,mode:"ios",animated:!0,message:T[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada")}}]})).present()});return function(T){return b.apply(this,arguments)}}()).finally(()=>{}).catch(b=>{console.log("errror:::>>>>>>>>>",b)}))})});else{for(let r in this.FormInformeTecPaso2.controls)this.FormInformeTecPaso2.controls[r].setValue(this.FormInformeTecPaso2.controls[r].value),this.FormInformeTecPaso2.controls[r].markAsTouched();this.alertSiNo=this.alertController.create({header:"CONTROL DE MOTOR ELECTRICO",subHeader:"",mode:"ios",backdropDismiss:!0,message:"Falta seleccionar todos los datos",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}}]}).then(r=>{r.present(),r.onDidDismiss().then(i=>{})})}}SaveFormBorradorPaso2(){var s=this;this.alertSiNo=this.alertController.create({header:"INFORME TECNICO",subHeader:"ANTES DEL DESMONTAJE",mode:"ios",cssClass:"alerta-ok",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(r=>{r.present(),r.onDidDismiss().then(i=>{"A"==i.role&&(this.loadingController.create({message:"Guardando datos generales...",translucent:!0}).then(b=>{b.present()}),this.corre_inf_cab=this.globalVal.corre_inf_cab,this.ApiService.GuardarFormPaso5(this.FormInformeTecPaso2.value).then(function(){var b=(0,g.Z)(function*(T){s.loadingController.dismiss();let E="0"==T[0].o_nres?"alerta-error":"alerta-ok";yield(yield s.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"DATOS GENERALES",cssClass:E,mode:"ios",animated:!0,message:T[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada")}}]})).present()});return function(T){return b.apply(this,arguments)}}()).finally(()=>{}).catch(b=>{console.log("errror:::>>>>>>>>>",b)}))})})}ionViewWillEnter(){this.FLoadForms()}ngOnInit(){}FSelectChangeTipoCable(s,r){console.log("select_change_material::",this.DsTipoCable);for(const i of this.DsTipoCable)console.log(i.codigo,s.detail.value),i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.cable_prin_tipo.setValue(i.codigo),this.TipoCblePivotSelectedText=i.nombre)}FSelectChangeTipoCable2(s,r){console.log("select_change_material::",this.DsTipoCable);for(const i of this.DsTipoCable)console.log(i.codigo,s.detail.value),i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.cable_2da_tipo.setValue(i.codigo),this.TipoCble2PivotSelectedText=i.nombre)}FSelectChangeIsla(s,r){for(const i of this.DsIsla)console.log(i.codigo,s.detail.value),i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.idisla_ic.setValue(i.codigo),this.islaPivotSelectedText=i.nombre)}FSelectChangeTipoCampana(s,r){console.log("select_change_material::",this.DsTipoCable);for(const i of this.DsTipoCampana)i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.idtipo_campana_it.setValue(i.codigo),this.TipoCampanaPivotSelectedText=i.nombre)}FSelectChangeDiametroCampana(s,r){console.log("select_change_material::",this.DsTipoCable);for(const i of this.DsDiametroCampana)i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.idtipodiametro_it.setValue(i.codigo),this.DiametroCampanaPivotSelectedText=i.nombre)}FSelectChangeEstadoCampana(s,r){console.log("select_change_material::",this.DsTipoCable);for(const i of this.DsEstadoCampana)i.codigo==s.detail.value&&(this.FormInformeTecPaso2.controls.idestado_campana.setValue(i.codigo),this.EstadoCampanaPivotSelectedText=i.nombre)}}return(_=d).\u0275fac=function(s){return new(s||_)(e.Y36(p.QS),e.Y36(x.SH),e.Y36(c.HT),e.Y36(C.J),e.Y36(I.K),e.Y36(c.Br),e.Y36(O.F0),e.Y36(t.X),e.Y36(e.sBO),e.Y36(c.BX))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-mtto-win-informe-tecnico5"]],standalone:!0,features:[e.jDz],decls:210,vars:17,consts:[["mode","ios",1,"ion-no-padding"],["text-capitalize",""],[1,"ion-padding"],[3,"formGroup"],["f","ngForm"],["button","true",1,"divider"],[1,"ion-color-disabled"],["type","text","formControlName","cable_prin_m",3,"clearInput"],["type","text","formControlName","cable_prin_c",3,"clearInput"],["cancelText","Cancelar","placeholder","Seleccionar Tipo Cable","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","cable_prin_ope","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],[2,"color","#92949c"],["formControlName","cable_prin_cambio","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["formControlName","cable_prin_seccionado","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["position","floating"],["mode","ios","formControlName","cable_prin_repara_det",3,"autoGrow"],["type","text","formControlName","cable_2da_m"],["type","text","formControlName","cable_2da_c"],["formControlName","cable_2da_ope","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["formControlName","cable_2da_cambio","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["formControlName","cable_2da_seccionado","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["mode","ios","formControlName","cable_2da_repara_det",3,"autoGrow"],["type","text","formControlName","cable_aux_m"],["type","text","formControlName","cable_aux_c"],["type","text","formControlName","cable_aux_tipo"],["formControlName","cable_aux_ope","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["formControlName","cable_aux_cambio","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["formControlName","cable_aux_seccionado","mode","ios","labelPlacement","start",2,"width","60%",3,"checked"],["mode","ios","formControlName","cable_aux_repara_det",3,"autoGrow"],["mode","ios","formControlName","b_con_descarga"],["value","1"],["value","0"],["cancelText","Cancelar","placeholder","Seleccionar Tipo Campana","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Tipo Diametro","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["cancelText","Cancelar","placeholder","Seleccionar Estado","color","primary","interface","action-sheet","mode","ios",3,"selectedText","ionChange"],["mode","ios","formControlName","b_con_reclamo_it"],["mode","ios","formControlName","b_dano_fisico_ext"],["mode","ios","formControlName","b_parte_faltante_ext"],["type","text","formControlName","b_partes_faltante"],["mode","ios","formControlName","b_otros",3,"autoGrow"],["expand","full",3,"click"],[3,"value"]],template:function(s,r){1&s&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1)(3,"ion-label"),e._uU(4,"ANTES DEL DESMONTAJE "),e.qZA()()()(),e.TgZ(5,"ion-content",2)(6,"form",3,4)(8,"ion-list",0)(9,"ion-item-group")(10,"ion-item-divider",5)(11,"ion-label"),e._uU(12,"\xa0"),e.TgZ(13,"strong"),e._uU(14,"PRINCIPAL"),e.qZA()()(),e.TgZ(15,"ion-item")(16,"ion-label",6),e._uU(17,"LONGITUD:"),e.qZA(),e._UZ(18,"ion-input",7),e.qZA(),e.TgZ(19,"ion-item")(20,"ion-label",6),e._uU(21," AISLAMIENTO:"),e.qZA(),e._UZ(22,"ion-input",8),e.qZA(),e.TgZ(23,"ion-item")(24,"ion-label")(25,"p"),e._uU(26,"M\u03a9 / TIPO:"),e.qZA(),e.TgZ(27,"ion-select",9),e.NdJ("ionChange",function(h){return r.FSelectChangeTipoCable(h,0)}),e.YNc(28,o,2,2,"ion-select-option",10),e.qZA()()(),e.TgZ(29,"ion-item")(30,"ion-toggle",11)(31,"label",12),e._uU(32,"Operativo:"),e.qZA()()(),e.TgZ(33,"ion-item")(34,"ion-toggle",13)(35,"label",12),e._uU(36,"Inoperativo:"),e.qZA()()(),e.TgZ(37,"ion-item")(38,"ion-toggle",14)(39,"label",12),e._uU(40,"Seccionado:"),e.qZA()()(),e.TgZ(41,"ion-item")(42,"ion-label",15),e._uU(43," Reparaci\xf3n/Detallar "),e.qZA(),e._UZ(44,"ion-textarea",16),e.qZA()(),e.TgZ(45,"ion-item-group")(46,"ion-item-divider",5)(47,"ion-label"),e._uU(48,"\xa0"),e.TgZ(49,"strong"),e._uU(50,"SEGUNDA TERNA"),e.qZA()()(),e.TgZ(51,"ion-item")(52,"ion-label",6),e._uU(53,"LONGITUD:"),e.qZA(),e._UZ(54,"ion-input",17),e.qZA(),e.TgZ(55,"ion-item")(56,"ion-label",6),e._uU(57,"AISLAMIENTO:"),e.qZA(),e._UZ(58,"ion-input",18),e.qZA(),e.TgZ(59,"ion-item")(60,"ion-label")(61,"p"),e._uU(62,"M\u03a9 / TIPO:"),e.qZA(),e.TgZ(63,"ion-select",9),e.NdJ("ionChange",function(h){return r.FSelectChangeTipoCable2(h,0)}),e.YNc(64,l,2,2,"ion-select-option",10),e.qZA()()(),e.TgZ(65,"ion-item")(66,"ion-toggle",19)(67,"label",12),e._uU(68,"Operativo:"),e.qZA()()(),e.TgZ(69,"ion-item")(70,"ion-toggle",20)(71,"label",12),e._uU(72,"Inoperativo:"),e.qZA()()(),e.TgZ(73,"ion-item")(74,"ion-toggle",21)(75,"label",12),e._uU(76,"Seccionado:"),e.qZA()()(),e.TgZ(77,"ion-item")(78,"ion-label",15),e._uU(79," Reparaci\xf3n/Detallar "),e.qZA(),e._UZ(80,"ion-textarea",22),e.qZA()(),e.TgZ(81,"ion-item-group")(82,"ion-item-divider",5)(83,"ion-label"),e._uU(84,"\xa0"),e.TgZ(85,"strong"),e._uU(86,"AUXILIAR"),e.qZA()()(),e.TgZ(87,"ion-item")(88,"ion-label",6),e._uU(89,"LONGITUD:"),e.qZA(),e._UZ(90,"ion-input",23),e.qZA(),e.TgZ(91,"ion-item")(92,"ion-label",6),e._uU(93,"AISLAMIENTO:"),e.qZA(),e._UZ(94,"ion-input",24),e.qZA(),e.TgZ(95,"ion-item")(96,"ion-label",6),e._uU(97,"M\u03a9 / TIPO:"),e.qZA(),e._UZ(98,"ion-input",25),e.qZA(),e.TgZ(99,"ion-item")(100,"ion-toggle",26)(101,"label",12),e._uU(102,"Operativo:"),e.qZA()()(),e.TgZ(103,"ion-item")(104,"ion-toggle",27)(105,"label",12),e._uU(106,"Inoperativo:"),e.qZA()()(),e.TgZ(107,"ion-item")(108,"ion-toggle",28)(109,"label",12),e._uU(110,"Seccionado:"),e.qZA()()(),e.TgZ(111,"ion-item")(112,"ion-label",15),e._uU(113," Reparaci\xf3n/Detallar "),e.qZA(),e._UZ(114,"ion-textarea",29),e.qZA()(),e.TgZ(115,"ion-item-group")(116,"ion-item-divider",5)(117,"ion-label"),e._uU(118,"\xa0"),e.TgZ(119,"strong"),e._uU(120,"LLEGO CON DESCARGA(CAMPANA)"),e.qZA()()(),e.TgZ(121,"ion-item")(122,"ion-label")(123,"p"),e._uU(124,"Seleccion:"),e.qZA(),e.TgZ(125,"ion-segment",30)(126,"ion-segment-button",31)(127,"ion-label"),e._uU(128,"SI"),e.qZA()(),e.TgZ(129,"ion-segment-button",32)(130,"ion-label"),e._uU(131,"NO"),e.qZA()()()()(),e.TgZ(132,"ion-item")(133,"ion-label")(134,"p"),e._uU(135,"Tipo de Campana:"),e.qZA(),e.TgZ(136,"ion-select",33),e.NdJ("ionChange",function(h){return r.FSelectChangeTipoCampana(h,0)}),e.YNc(137,a,2,2,"ion-select-option",10),e.qZA()()(),e.TgZ(138,"ion-item")(139,"ion-label")(140,"p"),e._uU(141,"Tipo de Diametro:"),e.qZA(),e.TgZ(142,"ion-select",34),e.NdJ("ionChange",function(h){return r.FSelectChangeDiametroCampana(h,0)}),e.YNc(143,n,2,2,"ion-select-option",10),e.qZA()()(),e.TgZ(144,"ion-item")(145,"ion-label")(146,"p"),e._uU(147,"Estado de Campana:"),e.qZA(),e.TgZ(148,"ion-select",35),e.NdJ("ionChange",function(h){return r.FSelectChangeEstadoCampana(h,0)}),e.YNc(149,f,2,2,"ion-select-option",10),e.qZA()()(),e.TgZ(150,"ion-item")(151,"ion-label")(152,"p"),e._uU(153,"Reclamo:"),e.qZA(),e.TgZ(154,"ion-segment",36)(155,"ion-segment-button",31)(156,"ion-label"),e._uU(157,"SI"),e.qZA()(),e.TgZ(158,"ion-segment-button",32)(159,"ion-label"),e._uU(160,"NO"),e.qZA()()()()()(),e.TgZ(161,"ion-item-group")(162,"ion-item-divider",5)(163,"ion-label"),e._uU(164,"\xa0"),e.TgZ(165,"strong"),e._uU(166,"DA\xd1O FISICO EXTERNO"),e.qZA()()(),e.TgZ(167,"ion-item")(168,"ion-label")(169,"p"),e._uU(170,"Seleccion:"),e.qZA(),e.TgZ(171,"ion-segment",37)(172,"ion-segment-button",31)(173,"ion-label"),e._uU(174,"SI"),e.qZA()(),e.TgZ(175,"ion-segment-button",32)(176,"ion-label"),e._uU(177,"NO"),e.qZA()()()()()(),e.TgZ(178,"ion-item-group")(179,"ion-item-divider",5)(180,"ion-label"),e._uU(181,"\xa0"),e.TgZ(182,"strong"),e._uU(183,"PARTES FALTANTES"),e.qZA()()(),e.TgZ(184,"ion-item")(185,"ion-label")(186,"p"),e._uU(187,"Seleccion:"),e.qZA(),e.TgZ(188,"ion-segment",38)(189,"ion-segment-button",31)(190,"ion-label"),e._uU(191,"SI"),e.qZA()(),e.TgZ(192,"ion-segment-button",32)(193,"ion-label"),e._uU(194,"NO"),e.qZA()()()()(),e.TgZ(195,"ion-item")(196,"ion-label"),e._uU(197," Nota:"),e.qZA(),e._UZ(198,"ion-input",39),e.qZA()(),e.TgZ(199,"ion-item-group")(200,"ion-item-divider",5)(201,"ion-label"),e._uU(202,"\xa0"),e.TgZ(203,"strong"),e._uU(204,"OTROS"),e.qZA()()(),e.TgZ(205,"ion-item"),e._UZ(206,"ion-textarea",40),e.qZA()()()()(),e.TgZ(207,"ion-footer")(208,"ion-button",41),e.NdJ("click",function(){return r.SaveFormBorradorPaso2()}),e._uU(209,"GUARDAR"),e.qZA()()),2&s&&(e.xp6(6),e.Q6J("formGroup",r.FormInformeTecPaso2),e.xp6(12),e.Q6J("clearInput",!0),e.xp6(4),e.Q6J("clearInput",!0),e.xp6(5),e.Q6J("selectedText",r.TipoCblePivotSelectedText),e.xp6(1),e.Q6J("ngForOf",r.DsTipoCable),e.xp6(16),e.Q6J("autoGrow",!0),e.xp6(19),e.Q6J("selectedText",r.TipoCble2PivotSelectedText),e.xp6(1),e.Q6J("ngForOf",r.DsTipoCable),e.xp6(16),e.Q6J("autoGrow",!0),e.xp6(34),e.Q6J("autoGrow",!0),e.xp6(22),e.Q6J("selectedText",r.TipoCampanaPivotSelectedText),e.xp6(1),e.Q6J("ngForOf",r.DsTipoCampana),e.xp6(5),e.Q6J("selectedText",r.DiametroCampanaPivotSelectedText),e.xp6(1),e.Q6J("ngForOf",r.DsDiametroCampana),e.xp6(5),e.Q6J("selectedText",r.EstadoCampanaPivotSelectedText),e.xp6(1),e.Q6J("ngForOf",r.DsEstadoCampana),e.xp6(57),e.Q6J("autoGrow",!0))},dependencies:[c.Pc,c.YG,c.W2,c.fr,c.Gu,c.pK,c.Ie,c.rH,c.Ub,c.Q$,c.q_,c.cJ,c.GO,c.t9,c.n0,c.g2,c.wd,c.ho,c.sr,c.w,c.QI,c.j9,D.ez,D.sg,p.u5,p._Y,p.JJ,p.JL,p.UX,p.sg,p.u],styles:[".ion-color-disabled[_ngcontent-%COMP%]{color:#9d9fa6}ion-segment[_ngcontent-%COMP%]{width:50%}"]}),d})()}}]);