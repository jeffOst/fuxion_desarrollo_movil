"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9899,1456],{1456:(O,P,u)=>{u.d(P,{k:()=>g});var c=u(5861),_=u(4053),h=u(8256),l=u(529),r=u(849);let g=(()=>{class p{constructor(i,t,o){this.httpClient=i,this.http=t,this.storage=o,this.urlApiProd=_.N.UrlDomainLocal+"aw_modulos/mante/api/CApiOrdenTrabajo.php",this.DirectorioImg=_.N.UrlDomainLocal+"aw_file/img_tablet/",this.confirmRequest="",this.key="123456",this.counts_rows=0,this.ArrayItemsSelected=[],this.EditArItemsSelected=[],this.o_nres="",this.o_msj="",this.idhorasxVueltaOtCab="",this.radioRevisionSelected=""}load_lista_solse(i,t){let o=this.urlApiProd,e=JSON.stringify({idot:i,acc:5,idtablet:"this.device.uuid",idotsolse_otd:t});return this.http.post(o,e).toPromise().then(s=>s)}FListOtPorSolsePieza(i,t,o,e){let s=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(s,a).toPromise().then(n=>n)}listado_principal_ot(i,t,o,e){let s=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.httpClient.post(s,a).toPromise().then(n=>n)}listado_servicio_popup(i,t,o,e,s){let a=this.urlApiProd,n=JSON.stringify({s:i,acc:t,avatar:o,idpieza:e,idtablet:"this.device.uuid",idtablet2:s});return this.http.post(a,n).toPromise().then(d=>d)}guardar_servicios_selected_ot(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=4&idot="+t,o).toPromise().then(s=>s)}update_solse_ot(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=6&idot="+t,o).toPromise().then(s=>s)}update_solse_ot_qr(i,t){let o=JSON.stringify(i);return console.log("paramsToBd:::>",i),this.httpClient.post(this.urlApiProd+"?acc=7&idsolse="+t,o).toPromise().then(s=>s)}listado_equipos_service(i,t,o,e){let s=this.urlApiProd,a=JSON.stringify({s:i,acc:o,tipo:t,idtablet:"this.device.uuid",madre_hija:e});return this.http.post(s,a).toPromise().then(n=>n)}load_lista_servicios(i){let t=this.urlApiProd,o=JSON.stringify({idot:i,acc:3,idtablet:"this.device.uuid"});return this.http.post(t,o).toPromise().then(e=>e)}llamarMaestroServicios(i,t,o,e,s){let a=this.urlApiProd,n=JSON.stringify({s:i,acc:o,tipo:t,idtablet:s,madre_hija:e});return this.http.post(a,n).toPromise().then(d=>d)}EjServQuitarItemSelected(i){var t=this;return(0,c.Z)(function*(){let o=t.urlApiProd,e={id:i.idvaleservidetot,avatar:i.avatar,acc:6};t.ArrayItemsSelectedPivot=i,t.http.post(o,e).subscribe(s=>{},s=>{console.log("Error- something is wrong!")}),t.CntAgregado=t.EjeSerQuitarStorage(t.ArrayItemsSelectedPivot)})()}EjeSerQuitarStorage(i){let t=this.ArrayItemsSelected.indexOf(i);return t>-1&&this.ArrayItemsSelected.splice(t,1),this.storage.set("my-items",this.ArrayItemsSelected),this.ArrayItemsSelected.length}FListCbosDejarEje(i){let t=this.urlApiProd,o=JSON.stringify({idot:i,acc:9,idtablet:"this.device.uuid"});return this.http.post(t,o).toPromise().then(e=>e)}SaveRecojerPieza(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindTecnico(i,t,o){let e=JSON.stringify({acc:11,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}ListFindEquipo(i,t,o){let e=JSON.stringify({acc:12,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}load_cbo_site(){let i=JSON.stringify({acc:13});return this.httpClient.post(this.urlApiProd,i).toPromise().then(t=>t)}SaveOtNoProgramada(i){let t=JSON.stringify(i);return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListFindOts(i,t,o){let e=JSON.stringify({acc:15,s:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}FormFindPaso1(i,t,o){let e=JSON.stringify({acc:16,id_orden_trab_cab:i,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}GuardarFormPaso1(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,s=JSON.stringify(i);return t.httpClient.post(e+"?acc=17",s).toPromise()})()}LoadPdfInformeTecnico(i){let t=JSON.stringify({acc:14,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}ListBombasxFabTableros(i,t,o){let e=JSON.stringify({acc:18,s:i,idusu:t,familia:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(s=>s)}GuardarNuevoEquipo(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,s=JSON.stringify(i);return t.httpClient.post(e+"?acc=19",s).toPromise()})()}ListRepuestosxBomba(i,t){let o=JSON.stringify({acc:20,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}GuardarFormPaso2(i,t){var o=this;return(0,c.Z)(function*(){let s=o.urlApiProd,a=JSON.stringify(i);return o.httpClient.post(s+"?acc=21&idusu="+t,a).toPromise()})()}listadoArticulos(i,t,o,e,s){console.log(i);let a=this.urlApiProd,n=JSON.stringify({s:i,idpieza:t,cantidad:o,toggle:e,acc:s});return this.http.post(a,n).toPromise().then(d=>d)}GuardarArticulo(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,s=JSON.stringify(i);return t.httpClient.post(e+"?acc=23",s).toPromise()})()}ListServiciosxBomba(i,t){let o=JSON.stringify({acc:24,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}ListFindSolse(i,t){let o=JSON.stringify({acc:26,idot:i,idusu:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}GuardarOtTerminado(i,t){var o=this;return(0,c.Z)(function*(){let s=o.urlApiProd,a=JSON.stringify({acc:27,idot:i,idusuario:t});return o.httpClient.post(s,a).toPromise()})()}LoadPdfOrdentrabajo(i){let t=JSON.stringify({acc:28,idchecklistcab:i});return this.httpClient.post(this.urlApiProd,t).toPromise().then(o=>o)}FLoadMotivoAdicional(i,t){let o=JSON.stringify({acc:29,idusu:i,iddevice:t});return this.httpClient.post(this.urlApiProd,o).toPromise().then(e=>e)}FQuitarItem(i){var t=this;return(0,c.Z)(function*(){let o=t.urlApiProd,e=JSON.stringify(i);return t.httpClient.post(o,e).toPromise()})()}ListaPartList(i,t,o,e,s,a,n){let d=this.urlApiProd,f=JSON.stringify({s:i,pd:t,ot:o,im:e,it:s,acc:a,idot:n});return this.http.post(d,f).toPromise().then(S=>S)}GuardarPartList(i){var t=this;return(0,c.Z)(function*(){console.log("Dentro::GuardarFormulario::>",i);let e=t.urlApiProd,s=JSON.stringify(i);return t.httpClient.post(e+"?acc=32",s).toPromise()})()}GuardarCargarDetalleOT(i,t){var o=this;return(0,c.Z)(function*(){let s=o.urlApiProd,a=JSON.stringify({acc:33,idot:i,idusuario:t});return o.httpClient.post(s,a).toPromise()})()}}return p.\u0275fac=function(i){return new(i||p)(h.LFG(l.eN),h.LFG(l.eN),h.LFG(r.K))},p.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},9899:(O,P,u)=>{u.r(P),u.d(P,{MttoSolsePopupserviciosPage:()=>i});var c=u(5861),_=u(6895),h=u(433),l=u(5562),r=u(8256),m=u(1456),g=u(1407);const p=["idinputsearch_equipo"];function v(t,o){if(1&t){const e=r.EpF();r.TgZ(0,"ion-list",13)(1,"ion-item",14),r.NdJ("click",function(){const n=r.CHM(e).$implicit,d=r.oxw();return r.KtG(d.seleccionar_servicio(n.Y04002,n.Y04001,n.SEQMASERV,n.nomclase,n.nombre))}),r.TgZ(2,"ion-grid")(3,"ion-row")(4,"ion-col",15),r._uU(5),r.qZA(),r.TgZ(6,"ion-col",16),r._uU(7),r.qZA(),r.TgZ(8,"ion-col",17),r._uU(9),r.qZA()()()()()}if(2&t){const e=o.$implicit,a=o.even;r.ekj("odd",o.odd)("even",a),r.xp6(5),r.Oqu(e.Y04001),r.xp6(2),r.Oqu(e.Y04002),r.xp6(2),r.Oqu(e.nomclase)}}let i=(()=>{class t{constructor(e,s,a,n,d){this.loadingController=e,this.serviceProduccion=s,this.modalCtrl=a,this.route=n,this.navParams=d,this.idvaleservidetot_param=0,this.search_term_equipo="",this.idpieza_=d.get("idpieza"),this.idtablet_=d.get("idtablet"),this.avatar_=d.get("avatar")}ngOnInit(){}ionViewDidEnter(){this.lista_servicios()}cancelar_listaservicios(e,s,a,n,d){var f=this;return(0,c.Z)(function*(){const S={Y04001:s,Y04002:e,SEQMASERV:a,pieza:n,unidad:d};yield f.modalCtrl.dismiss(S)})()}lista_servicios(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(s=>{s.present(),this.serviceProduccion.listado_servicio_popup(this.search_term_equipo,"2",this.avatar_,this.idpieza_,this.idtablet_).then(a=>{this.results_equipos=a}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{this.idinputsearch_equipo.setFocus()},600)})})}seleccionar_servicio(e,s,a,n,d){this.cancelar_listaservicios(e,s,a,n,d)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(l.HT),r.Y36(m.k),r.Y36(l.IN),r.Y36(g.gz),r.Y36(l.X1))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-mtto-solse-popupservicios"]],viewQuery:function(e,s){if(1&e&&r.Gf(p,5),2&e){let a;r.iGM(a=r.CRH())&&(s.idinputsearch_equipo=a.first)}},standalone:!0,features:[r.jDz],decls:25,vars:2,consts:[["mode","ios"],["slot","start"],["color","danger",3,"click"],["name","close"],["mode","ios","debounce","2500","cancelButtonText","Cancelar","enterkeyhint","done","placeholder","Filtrar Servicios",2,"width","80%",3,"ngModel","ngModelChange","ionChange"],["idinputsearch_equipo",""],["slot","end","name","sync-outline",3,"click"],["idIconButtonSync",""],["size-sm","3","size-md","3","size-xl","4",1,"headgrid"],["color","dark"],["size-sm","5","size-md","5","size-xl","4",1,"headgrid"],["size-sm","4","size-md","4","size-xl","4",1,"headgrid"],["lines","full","inset","true",3,"odd","even",4,"ngFor","ngForOf"],["lines","full","inset","true"],["button","",3,"click"],["size-sm","3","size-md","3","size-xl","2"],["size-sm","5","size-md","5","size-xl","6"],["size-sm","4","size-md","4","size-xl","4"]],template:function(e,s){1&e&&(r.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),r._uU(3,"Lista de Servicios::"),r.qZA(),r.TgZ(4,"ion-buttons",1)(5,"ion-button",2),r.NdJ("click",function(){return s.cancelar_listaservicios(0,0,0,0,0)}),r._UZ(6,"ion-icon",3),r._uU(7," Cancelar "),r.qZA()()(),r.TgZ(8,"ion-item")(9,"ion-searchbar",4,5),r.NdJ("ngModelChange",function(n){return s.search_term_equipo=n})("ionChange",function(){return s.lista_servicios()}),r.qZA(),r.TgZ(11,"ion-icon",6,7),r.NdJ("click",function(){return s.lista_servicios()}),r.qZA()(),r.TgZ(13,"ion-item")(14,"ion-grid")(15,"ion-row")(16,"ion-col",8)(17,"ion-label",9),r._uU(18,"Codigo"),r.qZA()(),r.TgZ(19,"ion-col",10),r._uU(20,"Descripcion"),r.qZA(),r.TgZ(21,"ion-col",11),r._uU(22,"Pieza"),r.qZA()()()()(),r.TgZ(23,"ion-content"),r.YNc(24,v,10,7,"ion-list",12),r.qZA()),2&e&&(r.xp6(9),r.Q6J("ngModel",s.search_term_equipo),r.xp6(15),r.Q6J("ngForOf",s.results_equipos))},dependencies:[l.Pc,l.YG,l.Sm,l.wI,l.W2,l.jY,l.Gu,l.gu,l.Ie,l.Q$,l.q_,l.Nd,l.VI,l.wd,l.sr,l.j9,_.ez,_.sg,h.u5,h.JJ,h.On]}),t})()}}]);