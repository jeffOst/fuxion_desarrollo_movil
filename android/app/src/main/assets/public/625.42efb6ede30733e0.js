"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[625],{4160:(b,_,n)=>{n.d(_,{J:()=>A});var d=n(5861),f=n(2519),m=n(6242),s=n(9862),t=n(2014);let A=(()=>{var h;class g{constructor(e,r){this.httpClient=e,this.storage=r,this.urlApiProd=f.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTecnico.php",this.urlApiInf=f.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTablero.php",this.confirmRequest=""}ListFindOts(e,r,i){let o=JSON.stringify({acc:1,s:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}SaveCheckListCab(e,r,i){let o=JSON.stringify({acc:2,id_orden_trab_cab:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}FormFindPaso1(e,r,i){let o=JSON.stringify({acc:3,idchecklistcab:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}FLoadPiezasAcordion(e,r,i){let o=JSON.stringify({acc:7,id:e,p2:r,cod_inf:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}FLoadServiciosxPiezas(e,r){let i=JSON.stringify({acc:8,id:e,p2:r});return this.httpClient.post(this.urlApiProd,i).toPromise().then(o=>o)}GuardarFormPaso1(e){var r=this;return(0,d.Z)(function*(){console.log("Dentro::GuardarFormulario::>",e);let o=r.urlApiProd,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=4",a).toPromise()})()}GuardarinfPaso1(e){var r=this;return(0,d.Z)(function*(){console.log("Dentro::GuardarFormulario::>",e);let o=r.urlApiInf,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=2",a).toPromise()})()}GuardarinfPaso2(e){var r=this;return(0,d.Z)(function*(){console.log("Dentro::GuardarFormulario::>",e);let o=r.urlApiInf,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=3",a).toPromise()})()}GuardarinfPaso3(e){var r=this;return(0,d.Z)(function*(){console.log("Dentro::GuardarFormulario::>",e);let o=r.urlApiInf,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=4",a).toPromise()})()}GuardarinfPaso4(e){var r=this;return(0,d.Z)(function*(){console.log("Dentro::GuardarFormulario::>",e);let o=r.urlApiInf,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=5",a).toPromise()})()}GuardarinfPaso5(e){var r=this;return(0,d.Z)(function*(){let o=r.urlApiInf,a=JSON.stringify(e);return console.log("datos enviados",a),r.httpClient.post(o+"?acc=6",a).toPromise()})()}GuardarFormPaso2(e,r,i,o,a,l,p){var u=this;return(0,d.Z)(function*(){let c,E=u.urlApiProd,Z=JSON.stringify({idservicio:e,idpapa:r,idhijo:i,idusuario:o,acc:9,idclase:a,ck:l,cod_material:p});return u.httpClient.post(E+"?acc=6",Z).toPromise().then(P=>{console.log(P),c=P,u.confirmSaveBd=c[0].o_nres,u.confirmRequest=c},P=>{console.log(P,"Error- something is wrong!")})})()}FormFindPaso3(e,r,i){let o=JSON.stringify({acc:7,idchecklistcab:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}GuardarFormPaso3(e){var r=this;return(0,d.Z)(function*(){let i,o=r.urlApiProd,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=8",a).toPromise().then(l=>{console.log(l),i=l,r.confirmSaveBd=i[0].o_nres,r.confirmRequest=i},l=>{console.log(l,"Error- something is wrong!")})})()}FormFindPaso5(e,r,i){let o=JSON.stringify({acc:10,id:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}GuardarFormPaso5(e){var r=this;return(0,d.Z)(function*(){let o=r.urlApiProd,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=11",a).toPromise()})()}FormFindPaso6(e,r,i){let o=JSON.stringify({acc:12,idchecklistcab:e,idusu:r,iddevice:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}GuardarFormPaso6(e){var r=this;return(0,d.Z)(function*(){let o=r.urlApiProd,a=JSON.stringify(e);return r.httpClient.post(o+"?acc=13",a).toPromise()})()}GuardarAplicaPaso(e,r,i){var o=this;return(0,d.Z)(function*(){let a,p,l=o.urlApiProd;p={idchecklistcab:e,numeroPaso:r,ck:i};let u=JSON.stringify(p);return o.httpClient.post(l+"?acc=15",u).toPromise().then(c=>{console.log(c),a=c,o.confirmSaveBd=a[0].o_nres,o.confirmRequest=a},c=>{console.log(c,"Error- something is wrong!")})})()}getImages(e){return this.httpClient.get(`${this.urlApiProd}?acc=5&id=`+e)}uploadImage(e,r,i){let o=new FormData;return o.append("file",e,"myimage."+i),o.append("id",r),o.append("acc","6"),o.append("type","image/png"),this.httpClient.post(this.urlApiProd,o)}UpLoadImageMultiple(e,r,i){try{let o=new FormData;o.append("id",r),o.append("acc","15"),o.append("type","image/png");for(let a=0;a<e.length;a++)console.log("image::ruta=>::>",e[a]),o.append("images[]",e[a],`image_${a}.jpg`);return this.httpClient.post(this.urlApiProd,o)}catch(o){console.error("Error al enviar im\xe1genes al API:",o)}}LoadPdfInformeTecnico(e){let r=JSON.stringify({acc:14,idchecklistcab:e});return this.httpClient.post(this.urlApiProd,r).toPromise().then(i=>i)}deleteImage(e){return this.httpClient.delete(`${this.urlApiProd}?acc=16&id=${e}`)}}return(h=g).\u0275fac=function(e){return new(e||h)(m.LFG(s.eN),m.LFG(t.K))},h.\u0275prov=m.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),g})()},625:(b,_,n)=>{n.r(_),n.d(_,{MttoWinInformeTablero2Page:()=>C});var d=n(5861),f=n(6814),m=n(95),s=n(6728),t=n(6242),A=n(6172),h=n(1991),g=n(4160);let C=(()=>{var e;class r{constructor(o,a,l,p,u,c){this.formBuilder=o,this.alertController=a,this.globalVal=l,this.loadingController=p,this.ApiService1=u,this.ApiService=c,this.disableButtonPaso1=!0,this.checklist_paso2_apli_ck=!1,this.FormCheckListPaso2=this.formBuilder.group({pulsador1:[""],lamparas1:[""],conmutadores:[""],horometro:[""],amper:[""],voltim:[""],keypad:[""],balsono:[""],prensaes:[""],gabmetal:[""],obser1:[""],corre_inf_cab:[""]})}ionViewWillEnter(){let o;this.checklist_paso2_apli_ck="0"==this.globalVal.checklist_paso1_apli,this.FLoadForms(),o={detail:{checked:this.checklist_paso2_apli_ck,jc:0}}}FLoadForms(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(a=>{a.present(),this.ApiService1.FormFindinftab1(this.globalVal.corre_inf_cab).then(l=>{console.log(this.globalVal.corre_inf_cab),this.EditDataRest1=l.list;try{this.FormCheckListPaso2.setValue({corre_inf_cab:this.globalVal.corre_inf_cab,pulsador1:this.EditDataRest1[0].pulsador1,lamparas1:this.EditDataRest1[0].lamparas1,conmutadores:this.EditDataRest1[0].conmutadores,horometro:this.EditDataRest1[0].horometro,amper:this.EditDataRest1[0].amper,voltim:this.EditDataRest1[0].voltim,keypad:this.EditDataRest1[0].keypad,balsono:this.EditDataRest1[0].balsono,prensaes:this.EditDataRest1[0].prensaes,gabmetal:this.EditDataRest1[0].gabmetal,obser1:this.EditDataRest1[0].obser1})}catch(p){console.log("error:::>",p)}}).finally(()=>{this.loadingController.dismiss()})})}SaveFormInfPaso1(){var o=this;this.alertSiNo=this.alertController.create({header:"INFORME TECNICO",subHeader:"DATOS GENERALES",mode:"ios",backdropDismiss:!0,cssClass:"alerta-ok",message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(a=>{a.present(),a.onDidDismiss().then(l=>{"A"==l.role&&(this.loadingController.create({message:"Guardando datos generales...",translucent:!0}).then(u=>{u.present()}),console.log(this.globalVal.corre_inf_cab),this.FormCheckListPaso2.controls.corre_inf_cab.setValue(this.globalVal.corre_inf_cab),this.ApiService.GuardarinfPaso2(this.FormCheckListPaso2.value).then(function(){var u=(0,d.Z)(function*(c){o.loadingController.dismiss();let v="0"==c[0].o_nres?"alerta-error":"alerta-ok";yield(yield o.alertController.create({header:"ORDEN DE TRABAJO",subHeader:"DATOS GENERALES",cssClass:v,mode:"ios",animated:!0,message:c[0].o_msj,buttons:[{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada")}}]})).present()});return function(c){return u.apply(this,arguments)}}()).finally(()=>{}).catch(u=>{console.log("errror:::>>>>>>>>>",u)}))})})}ngOnInit(){}}return(e=r).\u0275fac=function(o){return new(o||e)(t.Y36(m.QS),t.Y36(s.Br),t.Y36(A.X),t.Y36(s.HT),t.Y36(h.k),t.Y36(g.J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-mtto-win-informe-tablero2"]],standalone:!0,features:[t.jDz],decls:71,vars:34,consts:[["mode","ios"],["text-capitalize",""],[1,"ion-padding"],[3,"formGroup"],["mode","ios",1,"ion-no-padding"],["color","primary"],["slot","start","name","radio-button-on-outline","aria-hidden","true"],["position","floating"],["mode","ios","formControlName","pulsador1",3,"autoGrow","autofocus"],["mode","ios","formControlName","lamparas1",3,"autoGrow","autofocus"],["mode","ios","formControlName","conmutadores",3,"autoGrow","autofocus"],["slot","start","name","speedometer-outline","aria-hidden","true"],["mode","ios","formControlName","horometro",3,"autoGrow","autofocus"],["mode","ios","formControlName","amper",3,"autoGrow","autofocus"],["mode","ios","formControlName","voltim",3,"autoGrow","autofocus"],["mode","ios","formControlName","keypad",3,"autoGrow","autofocus"],["mode","ios","formControlName","balsono",3,"autoGrow","autofocus"],["name","cube-outline"],["mode","ios","formControlName","prensaes",3,"autoGrow","autofocus"],["mode","ios","formControlName","gabmetal",3,"autoGrow","autofocus"],["mode","ios","formControlName","obser1",3,"autoGrow","autofocus"],["expand","full",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-item")(3,"ion-title",1)(4,"ion-label"),t._uU(5,"INSPECCION VISUAL"),t.qZA()()()()(),t.TgZ(6,"ion-content",2)(7,"form",3)(8,"ion-list",4)(9,"ion-item-group")(10,"ion-item-divider",5)(11,"ion-label"),t._UZ(12,"ion-icon",6),t._uU(13," Botoneras "),t.qZA()(),t.TgZ(14,"ion-item")(15,"ion-label",7),t._uU(16," Pulsadores: "),t.qZA(),t._UZ(17,"ion-textarea",8),t.qZA(),t.TgZ(18,"ion-item")(19,"ion-label",7),t._uU(20," Lamparas: "),t.qZA(),t._UZ(21,"ion-textarea",9),t.qZA(),t.TgZ(22,"ion-item")(23,"ion-label",7),t._uU(24," Conmutadores: "),t.qZA(),t._UZ(25,"ion-textarea",10),t.qZA()(),t.TgZ(26,"ion-item-group")(27,"ion-item-divider",5)(28,"ion-label"),t._UZ(29,"ion-icon",11),t._uU(30," Dispositivos de Registro "),t.qZA()(),t.TgZ(31,"ion-item")(32,"ion-label",7),t._uU(33," Horometro: "),t.qZA(),t._UZ(34,"ion-textarea",12),t.qZA(),t.TgZ(35,"ion-item")(36,"ion-label",7),t._uU(37," Amperimetro: "),t.qZA(),t._UZ(38,"ion-textarea",13),t.qZA(),t.TgZ(39,"ion-item")(40,"ion-label",7),t._uU(41," Voltimetro: "),t.qZA(),t._UZ(42,"ion-textarea",14),t.qZA(),t.TgZ(43,"ion-item")(44,"ion-label",7),t._uU(45," key Pad/ Mando externo SOFT STARTER/ VDF: "),t.qZA(),t._UZ(46,"ion-textarea",15),t.qZA(),t.TgZ(47,"ion-item")(48,"ion-label",7),t._uU(49," Baliza Sonora: "),t.qZA(),t._UZ(50,"ion-textarea",16),t.qZA()(),t.TgZ(51,"ion-item-group")(52,"ion-item-divider",5)(53,"ion-label"),t._UZ(54,"ion-icon",17),t._uU(55," Estructura externa "),t.qZA()(),t.TgZ(56,"ion-item")(57,"ion-label",7),t._uU(58," Prensaestopas PG: "),t.qZA(),t._UZ(59,"ion-textarea",18),t.qZA(),t.TgZ(60,"ion-item")(61,"ion-label",7),t._uU(62," Gabinete Metalico (Estado de estructura): "),t.qZA(),t._UZ(63,"ion-textarea",19),t.qZA(),t.TgZ(64,"ion-item")(65,"ion-label",7),t._uU(66," Otras-observaciones: "),t.qZA(),t._UZ(67,"ion-textarea",20),t.qZA()()()()(),t.TgZ(68,"ion-footer")(69,"ion-button",21),t.NdJ("click",function(){return a.SaveFormInfPaso1()}),t._uU(70,"GUARDAR"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("formGroup",a.FormCheckListPaso2),t.xp6(10),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(9),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(9),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0),t.xp6(4),t.Q6J("autoGrow",!0)("autofocus",!0)("autoGrow",!0))},dependencies:[s.Pc,s.YG,s.W2,s.fr,s.Gu,s.gu,s.Ie,s.rH,s.Ub,s.Q$,s.q_,s.g2,s.wd,s.sr,s.j9,f.ez,m.u5,m._Y,m.JJ,m.JL,m.UX,m.sg,m.u]}),r})()}}]);