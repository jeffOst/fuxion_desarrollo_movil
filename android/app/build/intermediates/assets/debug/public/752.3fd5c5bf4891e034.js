"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[752,1456],{1456:(S,p,l)=>{l.d(p,{k:()=>m});var u=l(5861),P=l(4053),n=l(8256),s=l(529),_=l(849);let m=(()=>{class c{constructor(i,t,r){this.httpClient=i,this.http=t,this.storage=r,this.urlApiProd=P.N.UrlDomainLocal+"aw_modulos/mante/api/CApiOrdenTrabajo.php",this.DirectorioImg=P.N.UrlDomainLocal+"aw_file/img_tablet/",this.confirmRequest="",this.key="123456",this.counts_rows=0,this.ArrayItemsSelected=[],this.EditArItemsSelected=[],this.o_nres="",this.o_msj="",this.idhorasxVueltaOtCab="",this.radioRevisionSelected=""}load_lista_solse(i,t){let r=this.urlApiProd,e=JSON.stringify({idot:i,acc:5,idtablet:"this.device.uuid",idotsolse_otd:t});return this.http.post(r,e).toPromise().then(o=>o)}FListOtPorSolsePieza(i,t,r,e){let o=this.urlApiProd,a=JSON.stringify({s:i,acc:r,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(o,a).toPromise().then(d=>d)}listado_principal_ot(i,t,r,e){let o=this.urlApiProd,a=JSON.stringify({s:i,acc:r,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(o,a).toPromise().then(d=>d)}listado_servicio_popup(i,t,r,e,o){let a=this.urlApiProd,d=JSON.stringify({s:i,acc:t,avatar:r,idpieza:e,idtablet:"this.device.uuid",idtablet2:o});return this.http.post(a,d).toPromise().then(h=>h)}guardar_servicios_selected_ot(i,t){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=4&idot="+t,r).toPromise().then(o=>o)}update_solse_ot(i,t){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=6&idot="+t,r).toPromise().then(o=>o)}update_solse_ot_qr(i,t){let r=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=7&idsolse="+t,r).toPromise().then(o=>o)}listado_equipos_service(i,t,r,e){let o=this.urlApiProd,a=JSON.stringify({s:i,acc:r,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.http.post(o,a).toPromise().then(d=>d)}load_lista_servicios(i){let t=this.urlApiProd,r=JSON.stringify({idot:i,acc:3,idtablet:"this.device.uuid"});return this.http.post(t,r).toPromise().then(e=>e)}llamarMaestroServicios(i,t,r,e,o){let a=this.urlApiProd,d=JSON.stringify({s:i,acc:r,tipo:t,idtablet:o,madre_hija:e});return this.http.post(a,d).toPromise().then(h=>h)}EjServQuitarItemSelected(i){var t=this;return(0,u.Z)(function*(){let r=t.urlApiProd,e={id:i.idvaleservidetot,avatar:i.avatar,acc:6};t.ArrayItemsSelectedPivot=i,t.http.post(r,e).subscribe(o=>{},o=>{console.log("Error- something is wrong!")}),t.CntAgregado=t.EjeSerQuitarStorage(t.ArrayItemsSelectedPivot)})()}EjeSerQuitarStorage(i){let t=this.ArrayItemsSelected.indexOf(i);return t>-1&&this.ArrayItemsSelected.splice(t,1),this.storage.set("my-items",this.ArrayItemsSelected),this.ArrayItemsSelected.length}FListCbosDejarEje(i){let t=this.urlApiProd,r=JSON.stringify({idot:i,acc:9,idtablet:"this.device.uuid"});return this.http.post(t,r).toPromise().then(e=>e)}SaveRecojerPieza(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(r=>r)}ListFindTecnico(i,t,r){let e=JSON.stringify({acc:11,s:i,idusu:t,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(o=>o)}ListFindEquipo(i,t,r){let e=JSON.stringify({acc:12,s:i,idusu:t,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(o=>o)}load_cbo_site(){let i=JSON.stringify({acc:13});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}SaveOtNoProgramada(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(r=>r)}ListFindOts(i,t,r){let e=JSON.stringify({acc:15,s:i,idusu:t,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(o=>o)}FormFindPaso1(i,t,r){let e=JSON.stringify({acc:16,id_orden_trab_cab:i,idusu:t,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(o=>o)}GuardarFormPaso1(i){var t=this;return(0,u.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,o=JSON.stringify(i);return t.httpClient.post(e+"?acc=17",o).toPromise()})()}LoadPdfInformeTecnico(i){let t=JSON.stringify({acc:14,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(r=>r)}ListBombasxFabTableros(i,t,r){let e=JSON.stringify({acc:18,s:i,idusu:t,familia:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(o=>o)}GuardarNuevoEquipo(i){var t=this;return(0,u.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,o=JSON.stringify(i);return t.httpClient.post(e+"?acc=19",o).toPromise()})()}ListRepuestosxBomba(i,t){let r=JSON.stringify({acc:20,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}GuardarFormPaso2(i,t){var r=this;return(0,u.Z)(function*(){let o=r.urlApiProd,a=JSON.stringify(i);return r.httpClient.post(o+"?acc=21&idusu="+t,a).toPromise()})()}listadoArticulos(i,t,r,e,o){console.log(i);let a=this.urlApiProd,d=JSON.stringify({s:i,idpieza:t,cantidad:r,toggle:e,acc:o});return this.http.post(a,d).toPromise().then(h=>h)}GuardarArticulo(i){var t=this;return(0,u.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,o=JSON.stringify(i);return t.httpClient.post(e+"?acc=23",o).toPromise()})()}ListServiciosxBomba(i,t){let r=JSON.stringify({acc:24,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListFindSolse(i,t){let r=JSON.stringify({acc:26,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}GuardarOtTerminado(i,t){var r=this;return(0,u.Z)(function*(){let o=r.urlApiProd,a=JSON.stringify({acc:27,idot:i,idusuario:t});return r.httpClient.post(o,a).toPromise()})()}LoadPdfOrdentrabajo(i){let t=JSON.stringify({acc:28,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(r=>r)}FLoadMotivoAdicional(i,t){let r=JSON.stringify({acc:29,idusu:i,iddevice:t});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}FQuitarItem(i){var t=this;return(0,u.Z)(function*(){let r=t.urlApiProd,e=JSON.stringify(i);return t.httpClient.post(r,e).toPromise()})()}ListaPartList(i,t,r,e,o,a,d){let h=this.urlApiProd,A=JSON.stringify({s:i,pd:t,ot:r,im:e,it:o,acc:a,idot:d});return this.http.post(h,A).toPromise().then(O=>O)}GuardarPartList(i){var t=this;return(0,u.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,o=JSON.stringify(i);return t.httpClient.post(e+"?acc=32",o).toPromise()})()}}return c.\u0275fac=function(i){return new(i||c)(n.LFG(s.eN),n.LFG(s.eN),n.LFG(_.K))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},752:(S,p,l)=>{l.r(p),l.d(p,{MttoWinOrdenTrabajo4Page:()=>i});var u=l(6895),P=l(433),n=l(5562),s=l(8256),_=l(1456),g=l(849),m=l(7883);const c=["IdHtmlInputSearch"];function f(t,r){if(1&t&&(s.TgZ(0,"ion-item",1)(1,"ion-item",5)(2,"ion-label")(3,"strong"),s._uU(4),s.qZA(),s.TgZ(5,"p"),s._uU(6," Nro. SOLSE.:\xa0"),s.TgZ(7,"ion-text",6),s._uU(8),s.qZA(),s._uU(9," Cantidad:\xa0"),s.TgZ(10,"ion-text",7),s._uU(11),s.qZA(),s._uU(12," F.Creacion:\xa0"),s.TgZ(13,"ion-text",8),s._uU(14),s.qZA()()()()()),2&t){const e=r.$implicit;s.xp6(4),s.Oqu(e.nomclase_os),s.xp6(4),s.hij("",e.corre_otss," \xa0"),s.xp6(3),s.hij("",e.cantidad_otss," \xa0"),s.xp6(3),s.hij("",e.fcreacion_otss," \xa0")}}let i=(()=>{class t{constructor(e,o,a,d,h,A,O){this.navCtrl=e,this.loadingController=o,this.ApiService=a,this.storage=d,this.alertController=h,this.globalVal=A,this.modalCtrl=O,this.estaCargando=!1,this.scanActive=!0}ngOnInit(){let e;this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{e=o,this.NombresUsuarioLocal=e.user_name,this.IdUsuarioLocal=e.user_id,console.log(e),this.FListaEquipos()})}FListaEquipos(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(o=>{o.present(),this.ApiService.ListFindSolse(this.globalVal.id_orden_trab_cab,this.IdUsuarioLocal).then(a=>{this.DataSetGrid=a,this.loadingController.dismiss(),this.estaCargando=!1}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{},600)}).catch(()=>{}).then(a=>{console.log("thennnnn",a),o.dismiss()})})}ionViewWillEnter(){let e;this.estaCargando=!0,this.storage.get("USER_INFO").then(o=>{e=o,this.NombresUsuarioLocal=e.user_name,this.IdUsuarioLocal=e.user_id,0==this.estaCargando&&this.FListaEquipos()})}ngAfterContentChecked(){console.log("ngAfterContentChecked")}ngAfterViewInit(){console.log("ngAfterViewInit")}ngAfterViewChecked(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.SH),s.Y36(n.HT),s.Y36(_.k),s.Y36(g.K),s.Y36(n.Br),s.Y36(m.X),s.Y36(n.IN))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-mtto-win-orden-trabajo4"]],viewQuery:function(e,o){if(1&e&&s.Gf(c,5),2&e){let a;s.iGM(a=s.CRH())&&(o.IdHtmlInputSearch=a.first)}},standalone:!0,features:[s.jDz],decls:8,vars:3,consts:[[3,"translucent"],["mode","ios"],["text-capitalize",""],[3,"fullscreen"],["mode","ios",4,"ngFor","ngForOf"],["button","","mode","ios",2,"width","100%"],["color","danger"],["color","secondary"],["color","success"]],template:function(e,o){1&e&&(s.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-item")(3,"ion-title",2)(4,"ion-label"),s._uU(5,"LISTA DE SOLSE "),s.qZA()()()()(),s.TgZ(6,"ion-content",3),s.YNc(7,f,15,4,"ion-item",4),s.qZA()),2&e&&(s.Q6J("translucent",!0),s.xp6(6),s.Q6J("fullscreen",!0),s.xp6(1),s.Q6J("ngForOf",o.DataSetGrid))},dependencies:[n.Pc,n.W2,n.Gu,n.Ie,n.Q$,n.yW,n.wd,n.sr,u.ez,u.sg,P.u5]}),t})()}}]);