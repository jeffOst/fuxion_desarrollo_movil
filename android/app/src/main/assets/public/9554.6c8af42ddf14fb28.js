"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9554],{4160:(S,C,u)=>{u.d(C,{J:()=>F});var g=u(5861),A=u(2519),l=u(6242),t=u(9862),D=u(2014);let F=(()=>{var P;class O{constructor(i,o){this.httpClient=i,this.storage=o,this.urlApiProd=A.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTecnico.php",this.urlApiInf=A.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTablero.php",this.confirmRequest=""}ListFindOts(i,o,n){let e=JSON.stringify({acc:1,s:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}SaveCheckListCab(i,o,n){let e=JSON.stringify({acc:2,id_orden_trab_cab:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FormFindPaso1(i,o,n){let e=JSON.stringify({acc:3,idchecklistcab:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FLoadPiezasAcordion(i,o,n){let e=JSON.stringify({acc:7,id:i,p2:o,cod_inf:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FLoadServiciosxPiezas(i,o){let n=JSON.stringify({acc:8,id:i,p2:o});return this.httpClient.post(this.urlApiProd,n).toPromise().then(e=>e)}GuardarFormPaso1(i){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=o.urlApiProd,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=4",r).toPromise()})()}GuardarinfPaso1(i){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=o.urlApiInf,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=2",r).toPromise()})()}GuardarinfPaso2(i){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=o.urlApiInf,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=3",r).toPromise()})()}GuardarinfPaso3(i){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=o.urlApiInf,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=4",r).toPromise()})()}GuardarinfPaso4(i){var o=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=o.urlApiInf,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=5",r).toPromise()})()}GuardarinfPaso5(i){var o=this;return(0,g.Z)(function*(){let e=o.urlApiInf,r=JSON.stringify(i);return console.log("datos enviados",r),o.httpClient.post(e+"?acc=6",r).toPromise()})()}GuardarFormPaso2(i,o,n,e,r,c,m){var d=this;return(0,g.Z)(function*(){let s,_=d.urlApiProd,h=JSON.stringify({idservicio:i,idpapa:o,idhijo:n,idusuario:e,acc:9,idclase:r,ck:c,cod_material:m});return d.httpClient.post(_+"?acc=6",h).toPromise().then(p=>{console.log(p),s=p,d.confirmSaveBd=s[0].o_nres,d.confirmRequest=s},p=>{console.log(p,"Error- something is wrong!")})})()}FormFindPaso3(i,o,n){let e=JSON.stringify({acc:7,idchecklistcab:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso3(i){var o=this;return(0,g.Z)(function*(){let n,e=o.urlApiProd,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=8",r).toPromise().then(c=>{console.log(c),n=c,o.confirmSaveBd=n[0].o_nres,o.confirmRequest=n},c=>{console.log(c,"Error- something is wrong!")})})()}FormFindPaso5(i,o,n){let e=JSON.stringify({acc:10,id:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso5(i){var o=this;return(0,g.Z)(function*(){let e=o.urlApiProd,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=11",r).toPromise()})()}FormFindPaso6(i,o,n){let e=JSON.stringify({acc:12,idchecklistcab:i,idusu:o,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso6(i){var o=this;return(0,g.Z)(function*(){let e=o.urlApiProd,r=JSON.stringify(i);return o.httpClient.post(e+"?acc=13",r).toPromise()})()}GuardarAplicaPaso(i,o,n){var e=this;return(0,g.Z)(function*(){let r,m,c=e.urlApiProd;m={idchecklistcab:i,numeroPaso:o,ck:n};let d=JSON.stringify(m);return e.httpClient.post(c+"?acc=15",d).toPromise().then(s=>{console.log(s),r=s,e.confirmSaveBd=r[0].o_nres,e.confirmRequest=r},s=>{console.log(s,"Error- something is wrong!")})})()}getImages(i){return this.httpClient.get(`${this.urlApiProd}?acc=5&id=`+i)}uploadImage(i,o,n){let e=new FormData;return e.append("file",i,"myimage."+n),e.append("id",o),e.append("acc","6"),e.append("type","image/png"),this.httpClient.post(this.urlApiProd,e)}UpLoadImageMultiple(i,o,n){try{let e=new FormData;e.append("id",o),e.append("acc","15"),e.append("type","image/png");for(let r=0;r<i.length;r++)console.log("image::ruta=>::>",i[r]),e.append("images[]",i[r],`image_${r}.jpg`);return this.httpClient.post(this.urlApiProd,e)}catch(e){console.error("Error al enviar im\xe1genes al API:",e)}}LoadPdfInformeTecnico(i){let o=JSON.stringify({acc:14,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,o).toPromise().then(n=>n)}deleteImage(i){return this.httpClient.delete(`${this.urlApiProd}?acc=16&id=${i}`)}}return(P=O).\u0275fac=function(i){return new(i||P)(l.LFG(t.eN),l.LFG(D.K))},P.\u0275prov=l.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),O})()},9554:(S,C,u)=>{u.r(C),u.d(C,{MttoWinInformeTecnico4Page:()=>r});var g=u(6814),A=u(95),l=u(6728),t=u(6242),D=u(5472),F=u(4160),P=u(2014),O=u(4248),I=u(6172);const i=["popover"];function o(c,m){1&c&&(t.TgZ(0,"ion-content",4),t._uU(1,"No existe servicios!"),t.qZA())}function n(c,m){if(1&c){const d=t.EpF();t.TgZ(0,"ion-item")(1,"ion-toggle",8),t.NdJ("ionChange",function(a){const h=t.CHM(d).$implicit,p=t.oxw().$implicit,f=t.oxw();return t.KtG(f.FasignaServicio(a,h.seqmaserv_is,f.globalVal.corre_inf_cab,h.idinformeservicio,p.idclase,p.SEQMA04))}),t.TgZ(2,"ion-label",9),t._uU(3),t.qZA()()()}if(2&c){const d=m.$implicit;t.xp6(1),t.Q6J("checked","1"===d.idestado_is),t.xp6(2),t.Oqu(d.Y04002)}}function e(c,m){if(1&c){const d=t.EpF();t.TgZ(0,"ion-item-group")(1,"ion-item-divider",6),t.NdJ("click",function(a){const h=t.CHM(d).$implicit,p=t.oxw();return t.KtG(p.accordionGroupChange(a,h.idclase))}),t.TgZ(2,"ion-label"),t._uU(3,"\xa0"),t.TgZ(4,"strong"),t._uU(5),t.qZA()(),t._UZ(6,"ion-icon",7),t.qZA(),t.YNc(7,n,4,2,"ion-item",5),t.qZA()}if(2&c){const d=m.$implicit,s=t.oxw();t.xp6(5),t.AsE("",d.nomclase,",",d.SEQMA04,""),t.xp6(2),t.Q6J("ngForOf",s.DsServiciosxPieza[d.idclase])}}let r=(()=>{var c;class m{constructor(s,a,_,h,p,f,M,E,T){let v;this.navCtrl=s,this.loadingController=a,this.ApiService=_,this.storage=h,this.alertController=p,this.router=f,this.globalVal=M,this.ref=E,this.actionSheetCtrl=T,this.isOpen=!1,this.DsServiciosxPieza={},this.storage.get("USER_INFO").then(y=>{v=y,this.NombresUsuarioLocal=v.user_name,this.IdUsuarioLocal=v.user_id,this.storage.get("DEVICE_INFO").then(N=>{v=N,this.NombreDispositivo=v.name,this.IdDispositivo=v.uuid})})}ngOnInit(){}ionViewWillEnter(){this.FLoadPiezasAcordion()}FLoadPiezasAcordion(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(a=>{a.present(),console.log(this.corre_inf_cab),this.ApiService.FLoadPiezasAcordion("3","",this.globalVal.corre_inf_cab).then(_=>{console.log(_),this.EditDataRest=_,this.EditDataRest.forEach(h=>{console.log(h),console.log(h.idclase)})}).finally(()=>{this.loadingController.dismiss()})})}FasignaServicio(s,a,_,h,p,f){console.log(s),this.ApiService.GuardarFormPaso2(a,_,h,this.IdUsuarioLocal,p,s.detail.checked?"1":"0",f).then(E=>{}).finally(()=>{}).catch(E=>{console.log("errror:::>>>>>>>>>",E)})}FLoadServiciosxPiezas(s,a){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(h=>{h.present(),console.log(this.corre_inf_cab),this.ApiService.FLoadServiciosxPiezas(s,this.globalVal.corre_inf_cab).then(p=>{console.log(p),console.log(this.DsServiciosxPieza),console.log(s.length),s.length>0?(this.DsServiciosxPieza[s]=p,console.log("ingresooo 23222"),console.log(this.DsServiciosxPieza)):this.presentPopover(a)}).finally(()=>{this.loadingController.dismiss()})})}presentPopover(s){this.popover.event=s,this.isOpen=!0}accordionGroupChange(s,a){console.log(a),a.length>0&&(console.log("ingreso carga detalles"),this.FLoadServiciosxPiezas(a,s))}}return(c=m).\u0275fac=function(s){return new(s||c)(t.Y36(D.SH),t.Y36(l.HT),t.Y36(F.J),t.Y36(P.K),t.Y36(l.Br),t.Y36(O.F0),t.Y36(I.X),t.Y36(t.sBO),t.Y36(l.BX))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-mtto-win-informe-tecnico4"]],viewQuery:function(s,a){if(1&s&&t.Gf(i,5),2&s){let _;t.iGM(_=t.CRH())&&(a.popover=_.first)}},standalone:!0,features:[t.jDz],decls:13,vars:2,consts:[["mode","ios"],["text-capitalize",""],[3,"isOpen","didDismiss"],["popover",""],[1,"ion-padding"],[4,"ngFor","ngForOf"],["button","true",1,"divider",3,"click"],["name","refresh-circle-outline","slot","end"],["mode","ios","labelPlacement","start",2,"width","80%",3,"checked","ionChange"],[2,"font-size","small"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-item")(3,"ion-title",1)(4,"ion-label"),t._uU(5,"HIDRAULICA "),t.qZA(),t.TgZ(6,"ion-popover",2,3),t.NdJ("didDismiss",function(){return a.isOpen=!1}),t.YNc(8,o,2,0,"ng-template"),t.qZA()()()()(),t.TgZ(9,"ion-content",4)(10,"ion-list"),t.YNc(11,e,8,3,"ion-item-group",5),t.qZA()(),t._UZ(12,"ion-footer")),2&s&&(t.xp6(6),t.Q6J("isOpen",a.isOpen),t.xp6(5),t.Q6J("ngForOf",a.EditDataRest))},dependencies:[l.Pc,l.W2,l.fr,l.Gu,l.gu,l.Ie,l.rH,l.Ub,l.Q$,l.q_,l.wd,l.ho,l.sr,l.d8,l.w,g.ez,g.sg,A.u5],styles:[".divider[_ngcontent-%COMP%]{color:#000;font-weight:700;background-color:#d7d8da;padding:0!important;border-radius:5px;border-width:2px;font-weight:bolder}"]}),m})()}}]);