"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1991],{1991:(y,_,d)=>{d.d(_,{k:()=>S});var l=d(5861),c=d(2519),h=d(6242),P=d(9862),f=d(2014);let S=(()=>{var u;class m{constructor(t,i,r){this.httpClient=t,this.http=i,this.storage=r,this.urlApiProd=c.N.UrlDomainLocal+"aw_modulos/mante/api/CApiOrdenTrabajo.php",this.urlApiInf=c.N.UrlDomainLocal+"aw_modulos/mante/api/CApiInformeTablero.php",this.DirectorioImg=c.N.UrlDomainLocal+"aw_file/img_tablet/",this.confirmRequest="",this.key="123456",this.counts_rows=0,this.ArrayItemsSelected=[],this.EditArItemsSelected=[],this.o_nres="",this.o_msj="",this.idhorasxVueltaOtCab="",this.radioRevisionSelected=""}CreateOtiAtencionCab(t,i,r,e){let s=JSON.stringify({acc:t,id_oti:i,id_usu:r,id_block:e});return this.http.post(this.urlApiProd,s).toPromise().then(o=>o)}ListFindOtsMantoDet(t,i,r){let e=JSON.stringify({acc:t,id_block:i,s:r});return this.http.post(this.urlApiProd,e).toPromise().then(s=>s)}ListFindOtsManto(t,i){let r=JSON.stringify({acc:t,s:i});return this.http.post(this.urlApiProd,r).toPromise().then(e=>e)}load_lista_solse(t,i){let r=this.urlApiProd,e=JSON.stringify({idot:t,acc:5,idtablet:"this.device.uuid",idotsolse_otd:i});return this.http.post(r,e).toPromise().then(s=>s)}FormFindinftab1(t){let i=this.urlApiInf,r=JSON.stringify({acc:1,id:t});return this.http.post(i,r).toPromise().then(e=>e)}Formtoggtab1(t){let i=this.urlApiInf,r=JSON.stringify({acc:7,id:t});return this.http.post(i,r).toPromise().then(e=>e)}FListOtPorSolsePieza(t,i,r,e){let s=this.urlApiProd,o=JSON.stringify({s:t,acc:r,tipo:i,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(s,o).toPromise().then(a=>a)}listado_principal_ot(t,i,r,e){let s=this.urlApiProd,o=JSON.stringify({s:t,acc:r,tipo:i,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(s,o).toPromise().then(a=>a)}listado_servicio_popup(t,i,r,e,s){let o=this.urlApiProd,a=JSON.stringify({s:t,acc:i,avatar:r,idpieza:e,idtablet:"this.device.uuid",idtablet2:s});return this.http.post(o,a).toPromise().then(n=>n)}guardar_servicios_selected_ot(t,i){let r=JSON.stringify(t);return console.log("paramsToBd:::>",t),this.httpClient.post(this.urlApiProd+"?acc=4&idot="+i,r).toPromise().then(s=>s)}update_solse_ot(t,i){let r=JSON.stringify(t);return console.log("paramsToBd:::>",t),this.httpClient.post(this.urlApiProd+"?acc=6&idot="+i,r).toPromise().then(s=>s)}update_solse_ot_qr(t,i){let r=JSON.stringify(t);return console.log("paramsToBd:::>",t),this.httpClient.post(this.urlApiProd+"?acc=7&idsolse="+i,r).toPromise().then(s=>s)}listado_equipos_service(t,i,r,e){let s=this.urlApiProd,o=JSON.stringify({s:t,acc:r,tipo:i,idtablet:"this.device.uuid",madre_hija:e});return this.http.post(s,o).toPromise().then(a=>a)}load_lista_servicios(t){let i=this.urlApiProd,r=JSON.stringify({idot:t,acc:3,idtablet:"this.device.uuid"});return this.http.post(i,r).toPromise().then(e=>e)}llamarMaestroServicios(t,i,r,e,s){let o=this.urlApiProd,a=JSON.stringify({s:t,acc:r,tipo:i,idtablet:s,madre_hija:e});return this.http.post(o,a).toPromise().then(n=>n)}EjServQuitarItemSelected(t){var i=this;return(0,l.Z)(function*(){let r=i.urlApiProd,e={id:t.idvaleservidetot,avatar:t.avatar,acc:6};i.ArrayItemsSelectedPivot=t,i.http.post(r,e).subscribe(s=>{},s=>{console.log("Error- something is wrong!")}),i.CntAgregado=i.EjeSerQuitarStorage(i.ArrayItemsSelectedPivot)})()}EjeSerQuitarStorage(t){let i=this.ArrayItemsSelected.indexOf(t);return i>-1&&this.ArrayItemsSelected.splice(i,1),this.storage.set("my-items",this.ArrayItemsSelected),this.ArrayItemsSelected.length}FListCbosDejarEje(t){let i=this.urlApiProd,r=JSON.stringify({idot:t,acc:9,idtablet:"this.device.uuid"});return this.http.post(i,r).toPromise().then(e=>e)}SaveRecojerPieza(t){let i=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}ListFindTecnico(t,i,r){let e=JSON.stringify({acc:11,s:t,idusu:i,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}ListFindEquipo(t,i,r){let e=JSON.stringify({acc:12,s:t,idusu:i,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}load_cbo_site(){let t=JSON.stringify({acc:13});return this.httpClient.post(this.urlApiProd,t).toPromise().then(i=>i)}SaveOtNoProgramada(t){let i=JSON.stringify(t);return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}ListFindInftab(t,i,r,e,s){let o=JSON.stringify({acc:1,s:t,idusu:i,iddevice:r,SelectFiltra:e,SelectFiltra2:s});return this.httpClient.post(this.urlApiInf,o).toPromise().then(a=>a)}ListFindOts(t,i,r,e,s){let o=JSON.stringify({acc:15,s:t,idusu:i,iddevice:r,SelectFiltra:e,SelectFiltra2:s});return this.httpClient.post(this.urlApiProd,o).toPromise().then(a=>a)}ListFindMot(t,i,r,e){let s=JSON.stringify({acc:39,s:t,idusu:i,iddevice:r,SelectFiltra2:e});return this.httpClient.post(this.urlApiProd,s).toPromise().then(o=>o)}FormFindPaso1(t,i,r){let e=JSON.stringify({acc:16,id_orden_trab_cab:t,idusu:i,iddevice:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}FormFindPaso2(t){let i=JSON.stringify({acc:37,id_orden_trab_cab_2:t});return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}FormFindPaso6(){let t=JSON.stringify({acc:38});return this.httpClient.post(this.urlApiProd,t).toPromise().then(i=>i)}FormFindPaso61(t){let i=JSON.stringify({acc:41,id_orden_trab_cab:t});return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}FormFindPaso3(){let t=JSON.stringify({acc:38});return this.httpClient.post(this.urlApiProd,t).toPromise().then(i=>i)}GuardarFormPaso1(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=17",s).toPromise()})()}GuardarFormPaso5(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=36",s).toPromise()})()}GuardarFormPaso6(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=40",s).toPromise()})()}ElminarlistPaso6(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=42",s).toPromise()})()}GuardarInfPaso1(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiInf,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=2",s).toPromise()})()}LoadPdfInformeTecnico(t){let i=JSON.stringify({acc:14,idchecklistcab:t});return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}ListBombasxFabTableros(t,i,r){let e=JSON.stringify({acc:18,s:t,idusu:i,familia:r});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}GuardarNuevoEquipo(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=19",s).toPromise()})()}ListRepuestosxBomba(t,i){let r=JSON.stringify({acc:20,idot:t,idusu:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}GuardarFormPaso2(t,i){var r=this;return(0,l.Z)(function*(){let s=r.urlApiProd,o=JSON.stringify(t);return r.httpClient.post(s+"?acc=21&idusu="+i,o).toPromise()})()}listadoArticulos(t,i,r,e,s,o){console.log(t),console.log("final",o);let a=this.urlApiProd,n=JSON.stringify({s:t,idpieza:i,cantidad:r,toggle:e,acc:s,param:o});return this.http.post(a,n).toPromise().then(p=>p)}GuardarArticulo(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=23",s).toPromise()})()}ListServiciosxBomba(t,i){let r=JSON.stringify({acc:24,idot:t,idusu:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListFindSolse(t,i){let r=JSON.stringify({acc:26,idot:t,idusu:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}GuardarOtTerminado(t,i){var r=this;return(0,l.Z)(function*(){let s=r.urlApiProd,o=JSON.stringify({acc:27,idot:t,idusuario:i});return r.httpClient.post(s,o).toPromise()})()}LoadPdfOrdentrabajo(t){let i=JSON.stringify({acc:28,idchecklistcab:t});return this.httpClient.post(this.urlApiProd,i).toPromise().then(r=>r)}FLoadMotivoAdicional(t,i){let r=JSON.stringify({acc:29,idusu:t,iddevice:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}ListBombasDisponible(t,i){let r=JSON.stringify({acc:35,s:t,id_orden_trab_cab2:i});return this.httpClient.post(this.urlApiProd,r).toPromise().then(e=>e)}FQuitarItem(t){var i=this;return(0,l.Z)(function*(){let r=i.urlApiProd,e=JSON.stringify(t);return i.httpClient.post(r,e).toPromise()})()}ListaPartList(t,i,r,e,s,o,a){let n=this.urlApiProd,p=JSON.stringify({s:t,pd:i,ot:r,im:e,it:s,acc:o,idot:a});return this.http.post(n,p).toPromise().then(A=>A)}GuardarPartList(t){var i=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",t);let e=i.urlApiProd,s=JSON.stringify(t);return i.httpClient.post(e+"?acc=32",s).toPromise()})()}GuardarCargarDetalleOT(t,i,r){var e=this;return(0,l.Z)(function*(){let o=e.urlApiProd,a=JSON.stringify({acc:33,idot:t,idusuario:i,val:r});return e.httpClient.post(o,a).toPromise()})()}}return(u=m).\u0275fac=function(t){return new(t||u)(h.LFG(P.eN),h.LFG(P.eN),h.LFG(f.K))},u.\u0275prov=h.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),m})()}}]);