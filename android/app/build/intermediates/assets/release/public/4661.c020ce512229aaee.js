"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4661,1456],{1456:(E,g,d)=>{d.d(g,{k:()=>f});var c=d(5861),P=d(4053),p=d(8256),l=d(529),s=d(849);let f=(()=>{class h{constructor(i,t,o){this.httpClient=i,this.http=t,this.storage=o,this.urlApiProd=P.N.UrlDomainLocal+"aw_modulos/mante/api/CApiOrdenTrabajo.php",this.DirectorioImg=P.N.UrlDomainLocal+"aw_file/img_tablet/",this.confirmRequest="",this.key="123456",this.counts_rows=0,this.ArrayItemsSelected=[],this.EditArItemsSelected=[],this.o_nres="",this.o_msj="",this.idhorasxVueltaOtCab="",this.radioRevisionSelected=""}load_lista_solse(i,t){let o=this.urlApiProd,e=JSON.stringify({idot:i,acc:5,idtablet:"this.device.uuid",idotsolse_otd:t});return this.http.post(o,e).toPromise().then(r=>r)}FListOtPorSolsePieza(i,t,o,e){let r=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(r,a).toPromise().then(n=>n)}listado_principal_ot(i,t,o,e){let r=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(r,a).toPromise().then(n=>n)}listado_servicio_popup(i,t,o,e,r){let a=this.urlApiProd,n=JSON.stringify({s:i,acc:t,avatar:o,idpieza:e,idtablet:"this.device.uuid",idtablet2:r});return this.http.post(a,n).toPromise().then(u=>u)}guardar_servicios_selected_ot(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=4&idot="+t,o).toPromise().then(r=>r)}update_solse_ot(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=6&idot="+t,o).toPromise().then(r=>r)}update_solse_ot_qr(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=7&idsolse="+t,o).toPromise().then(r=>r)}listado_equipos_service(i,t,o,e){let r=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.http.post(r,a).toPromise().then(n=>n)}load_lista_servicios(i){let t=this.urlApiProd,o=JSON.stringify({idot:i,acc:3,idtablet:"this.device.uuid"});return this.http.post(t,o).toPromise().then(e=>e)}llamarMaestroServicios(i,t,o,e,r){let a=this.urlApiProd,n=JSON.stringify({s:i,acc:o,tipo:t,idtablet:r,madre_hija:e});return this.http.post(a,n).toPromise().then(u=>u)}EjServQuitarItemSelected(i){var t=this;return(0,c.Z)(function*(){let o=t.urlApiProd,e={id:i.idvaleservidetot,avatar:i.avatar,acc:6};t.ArrayItemsSelectedPivot=i,t.http.post(o,e).subscribe(r=>{},r=>{console.log("Error- something is wrong!")}),t.CntAgregado=t.EjeSerQuitarStorage(t.ArrayItemsSelectedPivot)})()}EjeSerQuitarStorage(i){let t=this.ArrayItemsSelected.indexOf(i);return t>-1&&this.ArrayItemsSelected.splice(t,1),this.storage.set("my-items",this.ArrayItemsSelected),this.ArrayItemsSelected.length}FListCbosDejarEje(i){let t=this.urlApiProd,o=JSON.stringify({idot:i,acc:9,idtablet:"this.device.uuid"});return this.http.post(t,o).toPromise().then(e=>e)}SaveRecojerPieza(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindTecnico(i,t,o){let e=JSON.stringify({acc:11,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}ListFindEquipo(i,t,o){let e=JSON.stringify({acc:12,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}load_cbo_site(){let i=JSON.stringify({acc:13});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}SaveOtNoProgramada(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindOts(i,t,o){let e=JSON.stringify({acc:15,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}FormFindPaso1(i,t,o){let e=JSON.stringify({acc:16,id_orden_trab_cab:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarFormPaso1(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,r=JSON.stringify(i);return t.httpClient.post(e+"?acc=17",r).toPromise()})()}LoadPdfInformeTecnico(i){let t=JSON.stringify({acc:14,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListBombasxFabTableros(i,t,o){let e=JSON.stringify({acc:18,s:i,idusu:t,familia:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(r=>r)}GuardarNuevoEquipo(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,r=JSON.stringify(i);return t.httpClient.post(e+"?acc=19",r).toPromise()})()}ListRepuestosxBomba(i,t){let o=JSON.stringify({acc:20,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}GuardarFormPaso2(i,t){var o=this;return(0,c.Z)(function*(){let r=o.urlApiProd,a=JSON.stringify(i);return o.httpClient.post(r+"?acc=21&idusu="+t,a).toPromise()})()}listadoArticulos(i,t,o,e,r){console.log(i);let a=this.urlApiProd,n=JSON.stringify({s:i,idpieza:t,cantidad:o,toggle:e,acc:r});return this.http.post(a,n).toPromise().then(u=>u)}GuardarArticulo(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,r=JSON.stringify(i);return t.httpClient.post(e+"?acc=23",r).toPromise()})()}ListServiciosxBomba(i,t){let o=JSON.stringify({acc:24,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}ListFindSolse(i,t){let o=JSON.stringify({acc:26,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}GuardarOtTerminado(i,t){var o=this;return(0,c.Z)(function*(){let r=o.urlApiProd,a=JSON.stringify({acc:27,idot:i,idusuario:t});return o.httpClient.post(r,a).toPromise()})()}LoadPdfOrdentrabajo(i){let t=JSON.stringify({acc:28,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FLoadMotivoAdicional(i,t){let o=JSON.stringify({acc:29,idusu:i,iddevice:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}FQuitarItem(i){var t=this;return(0,c.Z)(function*(){let o=t.urlApiProd,e=JSON.stringify(i);return t.httpClient.post(o,e).toPromise()})()}ListaPartList(i,t,o,e,r,a,n){let u=this.urlApiProd,_=JSON.stringify({s:i,pd:t,ot:o,im:e,it:r,acc:a,idot:n});return this.http.post(u,_).toPromise().then(O=>O)}GuardarPartList(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,r=JSON.stringify(i);return t.httpClient.post(e+"?acc=32",r).toPromise()})()}GuardarCargarDetalleOT(i,t){var o=this;return(0,c.Z)(function*(){let r=o.urlApiProd,a=JSON.stringify({acc:33,idot:i,idusuario:t});return o.httpClient.post(r,a).toPromise()})()}}return h.\u0275fac=function(i){return new(i||h)(p.LFG(l.eN),p.LFG(l.eN),p.LFG(s.K))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},4661:(E,g,d)=>{d.r(g),d.d(g,{MttoOtisPopUpEquipoPage:()=>i});var c=d(5861),P=d(6895),p=d(433),l=d(5562),s=d(8256),v=d(1456),f=d(1407);const h=["idinputsearch_equipo"];function A(t,o){if(1&t){const e=s.EpF();s.TgZ(0,"ion-item",8),s.NdJ("click",function(){const n=s.CHM(e).$implicit,u=s.oxw();return s.KtG(u.cancelar_listaequipos(n.idactivos,n.idordenfabricab,n.idtipo,n.idpotencia))}),s.TgZ(1,"ion-badge",1),s._uU(2),s.qZA(),s.TgZ(3,"ion-label"),s._uU(4),s.qZA()()}if(2&t){const e=o.$implicit,r=o.index;s.xp6(2),s.Oqu(r+1),s.xp6(2),s.Oqu(e.codsmg)}}let i=(()=>{class t{constructor(e,r,a,n,u,_,O){this.loadingController=e,this.ApiService=r,this.modalCtrl=a,this.route=n,this.router=u,this.navCtrl=_,this.navParams=O,this.TipoEquipo="0",this.search_term_equipo="",this.switchButtonSegmento="",console.log("this.this.navParams::>",this.navParams),console.log("this.this.navParams::>",this.navParams.get("Row")),console.log("this.this.navParams::>",this.navParams.get("Row").familia),this.TipoEquipo=this.navParams.get("Row").familia,this.idusuario=this.navParams.get("Row").idusuario}ngOnInit(){}cancelar_listaequipos(e,r,a,n){var u=this;return(0,c.Z)(function*(){const _={idequipo:e,idofcab:r,idtipo:a,idpotencia:n};yield u.modalCtrl.dismiss(_)})()}FindEquipos(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(r=>{r.present(),this.ApiService.ListBombasxFabTableros(this.search_term_equipo,this.switchButtonSegmento,this.TipoEquipo).then(a=>{this.results_equipos=a}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{this.idinputsearch_equipo.setFocus()},600)})})}seleccionar_equipo(e,r,a,n){var u=this;return(0,c.Z)(function*(){let _;_={idequipo:e,familia:u.TipoEquipo,idusuario:u.idusuario,idofcab:r},u.loadingController.create({message:"Guardando Paso 1...",translucent:!0}).then(m=>{m.present()}),yield u.ApiService.GuardarNuevoEquipo(_).then(function(){var m=(0,c.Z)(function*(C){u.loadingController.dismiss(),console.log(C),u.navCtrl.navigateForward(["/mtto-win-orden-trabajo"],{state:{Row:C.form[0]}})});return function(C){return m.apply(this,arguments)}}()).finally(()=>{console.log("finally:::>>LN:394")}).catch(m=>{console.log("errror:::>>>>>>>>>",m)})})()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.HT),s.Y36(v.k),s.Y36(l.IN),s.Y36(f.gz),s.Y36(f.F0),s.Y36(l.SH),s.Y36(l.X1))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-mtto-otis-pop-up-equipo"]],viewQuery:function(e,r){if(1&e&&s.Gf(h,5),2&e){let a;s.iGM(a=s.CRH())&&(r.idinputsearch_equipo=a.first)}},standalone:!0,features:[s.jDz],decls:15,vars:2,consts:[["mode","ios"],["slot","start"],["color","danger",3,"click"],["name","chevron-back"],["mode","ios","debounce","1700","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Equipos","color","secondary","search-icon","search-circle",3,"ngModel","ngModelChange","ionInput"],["idinputsearch_equipo",""],[1,"sticky-header"],["lines","full","mode","ios","detail","true","button","",3,"click",4,"ngFor","ngForOf"],["lines","full","mode","ios","detail","true","button","",3,"click"]],template:function(e,r){1&e&&(s.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),s._uU(3,"Lista de Equipos"),s.qZA(),s.TgZ(4,"ion-buttons",1)(5,"ion-button",2),s.NdJ("click",function(){return r.cancelar_listaequipos(0,0,0,0)}),s._UZ(6,"ion-icon",3),s._uU(7," Cancelar "),s.qZA()()(),s.TgZ(8,"ion-searchbar",4,5),s.NdJ("ngModelChange",function(n){return r.search_term_equipo=n})("ionInput",function(){return r.FindEquipos()}),s.qZA(),s.TgZ(10,"ion-list-header",6)(11,"ion-label"),s._uU(12,"Equipo"),s.qZA()()(),s.TgZ(13,"ion-content"),s.YNc(14,A,5,2,"ion-item",7),s.qZA()),2&e&&(s.xp6(8),s.Q6J("ngModel",r.search_term_equipo),s.xp6(6),s.Q6J("ngForOf",r.results_equipos))},dependencies:[l.Pc,l.yp,l.YG,l.Sm,l.W2,l.Gu,l.gu,l.Ie,l.Q$,l.yh,l.VI,l.wd,l.sr,l.j9,P.ez,P.sg,p.u5,p.JJ,p.On],styles:["ion-list-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10}"]}),t})()}}]);