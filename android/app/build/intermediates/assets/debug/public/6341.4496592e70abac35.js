"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6341],{4160:(S,C,p)=>{p.d(C,{J:()=>F});var g=p(5861),A=p(2519),l=p(6242),t=p(9862),D=p(2014);let F=(()=>{var P;class O{constructor(o,i){this.httpClient=o,this.storage=i,this.urlApiProd=A.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTecnico.php",this.urlApiInf=A.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTablero.php",this.confirmRequest=""}ListFindOts(o,i,n){let e=JSON.stringify({acc:1,s:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}SaveCheckListCab(o,i,n){let e=JSON.stringify({acc:2,id_orden_trab_cab:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FormFindPaso1(o,i,n){let e=JSON.stringify({acc:3,idchecklistcab:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FLoadPiezasAcordion(o,i,n){let e=JSON.stringify({acc:7,id:o,p2:i,cod_inf:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FLoadServiciosxPiezas(o,i){let n=JSON.stringify({acc:8,id:o,p2:i});return this.httpClient.post(this.urlApiProd,n).toPromise().then(e=>e)}GuardarFormPaso1(o){var i=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",o);let e=i.urlApiProd,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=4",r).toPromise()})()}GuardarinfPaso1(o){var i=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",o);let e=i.urlApiInf,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=2",r).toPromise()})()}GuardarinfPaso2(o){var i=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",o);let e=i.urlApiInf,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=3",r).toPromise()})()}GuardarinfPaso3(o){var i=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",o);let e=i.urlApiInf,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=4",r).toPromise()})()}GuardarinfPaso4(o){var i=this;return(0,g.Z)(function*(){console.log("Dentro::GuardarFormulario::>",o);let e=i.urlApiInf,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=5",r).toPromise()})()}GuardarinfPaso5(o){var i=this;return(0,g.Z)(function*(){let e=i.urlApiInf,r=JSON.stringify(o);return console.log("datos enviados",r),i.httpClient.post(e+"?acc=6",r).toPromise()})()}GuardarFormPaso2(o,i,n,e,r,c,m){var d=this;return(0,g.Z)(function*(){let s,h=d.urlApiProd,_=JSON.stringify({idservicio:o,idpapa:i,idhijo:n,idusuario:e,acc:9,idclase:r,ck:c,cod_material:m});return d.httpClient.post(h+"?acc=6",_).toPromise().then(u=>{console.log(u),s=u,d.confirmSaveBd=s[0].o_nres,d.confirmRequest=s},u=>{console.log(u,"Error- something is wrong!")})})()}FormFindPaso3(o,i,n){let e=JSON.stringify({acc:7,idchecklistcab:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso3(o){var i=this;return(0,g.Z)(function*(){let n,e=i.urlApiProd,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=8",r).toPromise().then(c=>{console.log(c),n=c,i.confirmSaveBd=n[0].o_nres,i.confirmRequest=n},c=>{console.log(c,"Error- something is wrong!")})})()}FormFindPaso5(o,i,n){let e=JSON.stringify({acc:10,id:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso5(o){var i=this;return(0,g.Z)(function*(){let e=i.urlApiProd,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=11",r).toPromise()})()}FormFindPaso6(o,i,n){let e=JSON.stringify({acc:12,idchecklistcab:o,idusu:i,iddevice:n});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso6(o){var i=this;return(0,g.Z)(function*(){let e=i.urlApiProd,r=JSON.stringify(o);return i.httpClient.post(e+"?acc=13",r).toPromise()})()}GuardarAplicaPaso(o,i,n){var e=this;return(0,g.Z)(function*(){let r,m,c=e.urlApiProd;m={idchecklistcab:o,numeroPaso:i,ck:n};let d=JSON.stringify(m);return e.httpClient.post(c+"?acc=15",d).toPromise().then(s=>{console.log(s),r=s,e.confirmSaveBd=r[0].o_nres,e.confirmRequest=r},s=>{console.log(s,"Error- something is wrong!")})})()}getImages(o){return this.httpClient.get(`${this.urlApiProd}?acc=5&id=`+o)}uploadImage(o,i,n){let e=new FormData;return e.append("file",o,"myimage."+n),e.append("id",i),e.append("acc","6"),e.append("type","image/png"),this.httpClient.post(this.urlApiProd,e)}UpLoadImageMultiple(o,i,n){try{let e=new FormData;e.append("id",i),e.append("acc","15"),e.append("type","image/png");for(let r=0;r<o.length;r++)console.log("image::ruta=>::>",o[r]),e.append("images[]",o[r],`image_${r}.jpg`);return this.httpClient.post(this.urlApiProd,e)}catch(e){console.error("Error al enviar im\xe1genes al API:",e)}}LoadPdfInformeTecnico(o){let i=JSON.stringify({acc:14,idchecklistcab:o});return this.httpClient.post(this.urlApiProd,i).toPromise().then(n=>n)}deleteImage(o){return this.httpClient.delete(`${this.urlApiProd}?acc=16&id=${o}`)}}return(P=O).\u0275fac=function(o){return new(o||P)(l.LFG(t.eN),l.LFG(D.K))},P.\u0275prov=l.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),O})()},6341:(S,C,p)=>{p.r(C),p.d(C,{MttoWinInformeTecnico3Page:()=>r});var g=p(6814),A=p(95),l=p(6728),t=p(6242),D=p(5472),F=p(4160),P=p(2014),O=p(4248),I=p(6172);const o=["popover"];function i(c,m){1&c&&(t.TgZ(0,"ion-content",4),t._uU(1,"No existe servicios!"),t.qZA())}function n(c,m){if(1&c){const d=t.EpF();t.TgZ(0,"ion-item")(1,"ion-toggle",8),t.NdJ("ionChange",function(a){const _=t.CHM(d).$implicit,u=t.oxw().$implicit,v=t.oxw();return t.KtG(v.FasignaServicio(a,_.seqmaserv_is,_.corre_inf_cab_is,_.idinformeservicio,u.idclase,u.SEQMA04))}),t.TgZ(2,"ion-label",9),t._uU(3),t.qZA()()()}if(2&c){const d=m.$implicit;t.xp6(1),t.Q6J("checked","1"===d.idestado_is),t.xp6(2),t.Oqu(d.Y04002)}}function e(c,m){if(1&c){const d=t.EpF();t.TgZ(0,"ion-item-group")(1,"ion-item-divider",6),t.NdJ("click",function(a){const _=t.CHM(d).$implicit,u=t.oxw();return t.KtG(u.accordionGroupChange(a,_.idclase))}),t.TgZ(2,"ion-label"),t._uU(3,"\xa0"),t.TgZ(4,"strong"),t._uU(5),t.qZA()(),t._UZ(6,"ion-icon",7),t.qZA(),t.YNc(7,n,4,2,"ion-item",5),t.qZA()}if(2&c){const d=m.$implicit,s=t.oxw();t.xp6(5),t.AsE("",d.nomclase,",",d.SEQMA04,""),t.xp6(2),t.Q6J("ngForOf",s.DsServiciosxPieza[d.idclase])}}let r=(()=>{var c;class m{constructor(s,a,h,_,u,v,M,E,T){let f;this.navCtrl=s,this.loadingController=a,this.ApiService=h,this.storage=_,this.alertController=u,this.router=v,this.globalVal=M,this.ref=E,this.actionSheetCtrl=T,this.isOpen=!1,this.DsServiciosxPieza={},this.storage.get("USER_INFO").then(N=>{f=N,this.NombresUsuarioLocal=f.user_name,this.IdUsuarioLocal=f.user_id,this.storage.get("DEVICE_INFO").then(y=>{f=y,this.NombreDispositivo=f.name,this.IdDispositivo=f.uuid})})}ngOnInit(){}ionViewWillEnter(){this.FLoadPiezasAcordion()}FLoadPiezasAcordion(){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(a=>{a.present(),console.log(this.corre_inf_cab),this.ApiService.FLoadPiezasAcordion("2","",this.globalVal.corre_inf_cab).then(h=>{console.log(h),this.EditDataRest=h,this.EditDataRest.forEach(_=>{console.log(_),console.log(_.idclase)})}).finally(()=>{this.loadingController.dismiss()})})}FasignaServicio(s,a,h,_,u,v){console.log(s),this.ApiService.GuardarFormPaso2(a,h,_,this.IdUsuarioLocal,u,s.detail.checked?"1":"0",v).then(E=>{}).finally(()=>{}).catch(E=>{console.log("errror:::>>>>>>>>>",E)})}FLoadServiciosxPiezas(s,a){this.loadingController.create({message:"Cargando lista....",translucent:!0}).then(_=>{_.present(),console.log(this.corre_inf_cab),this.ApiService.FLoadServiciosxPiezas(s,this.globalVal.corre_inf_cab).then(u=>{console.log(u),console.log(this.DsServiciosxPieza),console.log(s.length),s.length>0&&(this.DsServiciosxPieza[s]=u,console.log("ingresooo 23222,",this.DsServiciosxPieza[s].lenth),console.log(this.DsServiciosxPieza[s]),console.log(u.length),console.log(u.length),0==u.length&&(console.log("ingresoooooo"),this.presentPopover(a)))}).finally(()=>{this.loadingController.dismiss()})})}presentPopover(s){this.popover.event=s,this.isOpen=!0}accordionGroupChange(s,a){console.log(a),a.length>0&&(console.log("ingreso carga detalles"),this.FLoadServiciosxPiezas(a,s))}}return(c=m).\u0275fac=function(s){return new(s||c)(t.Y36(D.SH),t.Y36(l.HT),t.Y36(F.J),t.Y36(P.K),t.Y36(l.Br),t.Y36(O.F0),t.Y36(I.X),t.Y36(t.sBO),t.Y36(l.BX))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-mtto-win-informe-tecnico3"]],viewQuery:function(s,a){if(1&s&&t.Gf(o,5),2&s){let h;t.iGM(h=t.CRH())&&(a.popover=h.first)}},standalone:!0,features:[t.jDz],decls:13,vars:2,consts:[["mode","ios"],["text-capitalize",""],[3,"isOpen","didDismiss"],["popover",""],[1,"ion-padding"],[4,"ngFor","ngForOf"],["button","true",1,"divider",3,"click"],["name","refresh-circle-outline","slot","end"],["mode","ios","labelPlacement","start",2,"width","80%",3,"checked","ionChange"],[2,"font-size","small"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-item")(3,"ion-title",1)(4,"ion-label"),t._uU(5,"MECANICA Y ESTANQUEIDAD "),t.qZA(),t.TgZ(6,"ion-popover",2,3),t.NdJ("didDismiss",function(){return a.isOpen=!1}),t.YNc(8,i,2,0,"ng-template"),t.qZA()()()()(),t.TgZ(9,"ion-content",4)(10,"ion-list"),t.YNc(11,e,8,3,"ion-item-group",5),t.qZA()(),t._UZ(12,"ion-footer")),2&s&&(t.xp6(6),t.Q6J("isOpen",a.isOpen),t.xp6(5),t.Q6J("ngForOf",a.EditDataRest))},dependencies:[l.Pc,l.W2,l.fr,l.Gu,l.gu,l.Ie,l.rH,l.Ub,l.Q$,l.q_,l.wd,l.ho,l.sr,l.d8,l.w,g.ez,g.sg,A.u5],styles:[".divider[_ngcontent-%COMP%]{color:#000;font-weight:700;background-color:#d7d8da;padding:0!important;border-radius:5px;border-width:2px;font-weight:bolder}"]}),m})()}}]);