"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5329],{719:(S,v,n)=>{n.d(v,{G:()=>g});const g={FRONT:"front",BACK:"back"}},947:(S,v,n)=>{n.d(v,{mR:()=>g});var h=n(7423);n(719);const g=(0,h.fo)("BarcodeScanner",{web:()=>n.e(2155).then(n.bind(n,2155)).then(a=>new a.BarcodeScannerWeb)})},5329:(S,v,n)=>{n.r(v),n.d(v,{WinprincipalPage:()=>q});var h=n(5861),C=n(6895),g=n(433),a=n(5562),I=n(9899),y=n(9769),b=n(2653),D=n(947),e=n(8256),Z=n(1456),T=n(849),f=n(1407);const E=["idInputSearch"],P=["idinputsearch_equipo"];function M(u,A){if(1&u){const i=e.EpF();e.TgZ(0,"ion-item",24),e.NdJ("click",function(){const r=e.CHM(i).$implicit,o=e.oxw();return e.KtG(o.listado_solse(r.idotsolse_otd))}),e.TgZ(1,"ion-label")(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"p")(5,"ion-chip",25),e._uU(6,"Cantidad:\xa0"),e.TgZ(7,"strong"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-chip",25),e._uU(10,"Pieza:\xa0"),e.TgZ(11,"strong"),e._uU(12),e.qZA()(),e.TgZ(13,"ion-chip",25),e._uU(14,"Codigo:\xa0"),e.TgZ(15,"strong"),e._uU(16),e.qZA()(),e.TgZ(17,"ion-chip",26),e._uU(18,"QR:\xa0"),e.TgZ(19,"strong"),e._uU(20),e.qZA()()()()()}if(2&u){const i=A.$implicit;e.xp6(3),e.Oqu(i.Y040022),e.xp6(5),e.Oqu(i.cantidad2),e.xp6(4),e.Oqu(i.nompieza2),e.xp6(4),e.Oqu(i.Y040012),e.xp6(1),e.Q6J("color",""==i.codigo_qr_os?"danger":"primary"),e.xp6(3),e.Oqu(i.codigo_qr_os)}}function O(u,A){if(1&u){const i=e.EpF();e.TgZ(0,"ion-item-sliding")(1,"ion-item-group")(2,"ion-grid")(3,"ion-row")(4,"ion-col",27),e._uU(5," Servicio: "),e.qZA(),e.TgZ(6,"ion-col",28)(7,"ion-item")(8,"ion-searchbar",29),e.NdJ("click",function(){const r=e.CHM(i).index,o=e.oxw();return e.KtG(o.open_popup_servicios(r))})("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.Y04002=s)}),e.qZA()()()(),e.TgZ(9,"ion-row")(10,"ion-col",27),e._uU(11," Pieza: "),e.qZA(),e.TgZ(12,"ion-col",28)(13,"ion-input",30),e.NdJ("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.pieza_nombre=s)}),e.qZA()()(),e.TgZ(14,"ion-row")(15,"ion-col",27),e._uU(16," Cantidad: "),e.qZA(),e.TgZ(17,"ion-col",28)(18,"ion-input",31),e.NdJ("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.cantidad=s)}),e.qZA()()(),e.TgZ(19,"ion-row")(20,"ion-col",27),e._uU(21," Unidad: "),e.qZA(),e.TgZ(22,"ion-col",28)(23,"ion-input",32),e.NdJ("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.unidad=s)}),e.qZA()()(),e.TgZ(24,"ion-row")(25,"ion-col",27),e._uU(26," Codigo QR: "),e.qZA(),e.TgZ(27,"ion-col",33)(28,"ion-input",34),e.NdJ("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.codigo_qr_os=s)}),e.qZA()(),e.TgZ(29,"ion-col",35)(30,"ion-button",36),e.NdJ("click",function(){const r=e.CHM(i).index,o=e.oxw();return e.KtG(o.start_scan_qr(r))}),e.TgZ(31,"ion-text",13),e._uU(32,"Scaneo Q.R."),e.qZA(),e._UZ(33,"ion-icon",22),e.qZA()()(),e.TgZ(34,"ion-row")(35,"ion-col",27),e._uU(36," Nota: "),e.qZA(),e.TgZ(37,"ion-col",37)(38,"ion-input",38),e.NdJ("ngModelChange",function(s){const o=e.CHM(i).$implicit;return e.KtG(o.nota_hvot=s)}),e.qZA()()()()(),e.TgZ(39,"ion-item-options",39),e.NdJ("ionSwipe",function(){const r=e.CHM(i).$implicit,o=e.oxw();return e.KtG(o.quitar_vale_selected(r))}),e.TgZ(40,"ion-item-option",40),e._uU(41,"Quitar"),e.qZA()(),e.TgZ(42,"ion-button",41),e.NdJ("click",function(){const r=e.CHM(i).index,o=e.oxw();return e.KtG(o.eliminar_item_servicio(r))}),e.TgZ(43,"ion-chip",25)(44,"strong"),e._uU(45),e.qZA()(),e._uU(46," \xa0Eliminar Item \xa0 "),e._UZ(47,"ion-icon",42),e.qZA()()}if(2&u){const i=A.$implicit,t=A.index,s=e.oxw();e.xp6(8),e.s9C("value",i.Y04002),e.Q6J("ngModel",i.Y04002),e.xp6(5),e.s9C("value",i.pieza_nombre),e.Q6J("ngModel",i.pieza_nombre),e.xp6(5),e.s9C("value",i.cantidad),e.Q6J("ngModel",i.cantidad),e.xp6(5),e.s9C("value",i.unidad),e.Q6J("ngModel",i.unidad),e.xp6(5),e.s9C("value",i.codigo_qr_os),e.Q6J("ngModel",i.codigo_qr_os),e.xp6(2),e.Q6J("hidden",s.scanActive),e.xp6(8),e.s9C("value",i.nota_hvot),e.Q6J("ngModel",i.nota_hvot),e.xp6(7),e.Oqu(t+1)}}let q=(()=>{class u{constructor(i,t,s,r,o,m,c,d,_){let l;this.navCtrl=i,this.loadingController=t,this.serviceApi=s,this.storage=r,this.route=o,this.router=m,this.alertController=c,this.modalCtrl=d,this.navParams=_,this.IdFromModule=0,this.flg_from_que_windows="",this.i_row=-1,this.avatar_tv="",this.idtablet_="",this.ArrayItemsSelectedDesti=[],this.searchTerm="",this.search_term_equipo="",this.selected_equipo="",this.hide_div_equipo=[!1],this.hide_div_pt=[!1],this.switchButtonSegmento="",this.ItemsSelectedServ="array_selected_det_np",this.NroOtHtml="",this.CodEquipoHtml="",this.FchCreaOtHtml="",this.IdOtHtml="",this.scanActive=!1,console.log("::::navParams::::::::::::"),console.log("::::navParams",_),console.log(this.router.getCurrentNavigation().extras.state),console.log(this.router.getCurrentNavigation().extras.state.nroot),console.log("navParams",_),this.router.getCurrentNavigation().extras.state&&(this.NroOtHtml=this.router.getCurrentNavigation().extras.state.nroot,this.CodEquipoHtml=this.router.getCurrentNavigation().extras.state.codequipo,this.FchCreaOtHtml=this.router.getCurrentNavigation().extras.state.fcreaot,this.IdOtHtml=this.router.getCurrentNavigation().extras.state.idot),this.storage.get("USER_INFO").then(p=>{l=p,this.NomUsuario=l.user_name,this.idtablet_=l.imei})}ngOnInit(){this.agregar_item_servicio(),this.storage.get("DEVICE_INFO").then(i=>{this.id_device=i.uuid,console.log("this.id_device::>",this.id_device)})}ionViewDidEnter(){this.load_lista_servicios(this.IdOtHtml)}listado_solse(i){let t={state:{NroOtHtml:this.NroOtHtml,CodEquipoHtml:this.CodEquipoHtml,FchCreaOtHtml:this.FchCreaOtHtml,IdOtHtml:this.IdOtHtml,idotsolse_otd:i}};console.log(t),this.navCtrl.navigateForward(["mtto-genera-solse"],t)}select_change_marca(i,t){for(const s of this.rest_marcas)s.codigo==i.detail.value&&(this.ArrayItemsSelectedDesti[t].marca_nombre=s.nombre)}select_change_potencia(i,t){for(const s of this.rest_potencias)s.codigo==i.detail.value&&(this.ArrayItemsSelectedDesti[t].potencia_nombre=s.nombre)}select_change_tipo(i,t){for(const s of this.rest_tipos)s.codigo==i.detail.value&&(this.ArrayItemsSelectedDesti[t].tipo_nombre=s.nombre)}select_change_pieza(i,t){for(const s of this.rest_pieza)s.codigo_pb==i.detail.value&&(this.ArrayItemsSelectedDesti[t].pieza_nombre=s.nombre_pb)}actualizar_lista_servicios(){let i=this.ArrayItemsSelectedDesti;this.ArrayItemsSelectedDesti=[];let t=0;for(const s of i)console.log(s),s.idvaleservidetot=t,this.ArrayItemsSelectedDesti.push(s),t++}eliminar_item_servicio(i){this.alertSiNo=this.alertController.create({header:"Agregar Servicios",subHeader:"",mode:"ios",backdropDismiss:!0,cssClass:"alertHeader",message:"Confirmar que desea eliminar este item?",buttons:[{text:"Aceptar",cssClass:"alertButton",role:"A",handler:()=>{console.log(this.ArrayItemsSelectedDesti),this.ArrayItemsSelectedDesti.splice(i,1),console.log(this.ArrayItemsSelectedDesti),this.actualizar_lista_servicios(),console.log(this.ArrayItemsSelectedDesti)}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(t=>{t.present(),t.onDidDismiss().then(s=>{})})}agregar_item_servicio(){this.i_row++,this.ArrayItemsSelectedDesti.push({idvaleservidetot_i:0,idvaleservidetot:this.i_row,cantidad:1,nrosolse_ot:"",fchvalesrv:"",SEQMASERV:"",Y04002:"",Y04001:"",codsmg:"",nombres:"",idtablet:this.idtablet_,idtecnico:"",imei:"",coloravatar:"",avatar:"",nombre_avatar:"",finicio_hvot_cab:"",ffin_hvot_cab:"",hora_finicio_hvot_cab:"",hora_ffin_hvot_cab:"",idhorasxvueltaotcab:"",nota_hvot:"",corre_hvot:"",nombres_ejecutor:"",ma00estado_nombre:"",resumen_Y04002:"",horas_ejecutadas:"",ma00estado_replicated:"",pieza_nombre:"",cntvueltas:0,marca_nombre:"",marca:"",potencia_nombre:"",potencia:"",tipo_nombre:"",tipo:""}),this.actualizar_lista_servicios()}cancelar_ejecucion(){this.navCtrl.navigateForward("listaprincipal")}open_popup_servicios(i){var t=this;return(0,h.Z)(function*(){let s,r,o,c,d=!1;for(const l of t.ArrayItemsSelectedDesti){if(console.log("::::::::::::::>>>>>>>>>>>"),console.log(t.ArrayItemsSelectedDesti),console.log(i),console.log(t.i_row),console.log(t.ArrayItemsSelectedDesti[i].idvaleservidetot),t.ArrayItemsSelectedDesti[i].idvaleservidetot==i){s="4"!=t.ArrayItemsSelectedDesti[i].avatar?t.ArrayItemsSelectedDesti[i].ma00estado_replicated:"0",r=t.ArrayItemsSelectedDesti[i].avatar,o=t.ArrayItemsSelectedDesti[i].idtablet;break}i++}if(""==t.idtablet_&&(c=" Tablet",d=!0),d)return void t.alertController.create({header:"Servicios",cssClass:"danger",subHeader:"",mode:"ios",message:"Seleccionar  "+c+", en el item: ("+(i+1)+")",buttons:[{text:"Aceptar",cssClass:"bgcolor:danger",handler:()=>{}}]}).then(p=>{p.present()});const _=yield t.modalCtrl.create({component:I.MttoSolsePopupserviciosPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idvaleservidetot_p:t.i_row,idpieza:s,idtablet:t.idtablet_,avatar:r}});return _.onDidDismiss().then(l=>{if(null!==l){t.dataReturned=l.data;let p=0;for(const x of t.ArrayItemsSelectedDesti){if(t.ArrayItemsSelectedDesti[p].idvaleservidetot==i){t.ArrayItemsSelectedDesti[p].Y04002=l.data.Y04002,t.ArrayItemsSelectedDesti[p].nombres=l.data.SEQMASERV,t.ArrayItemsSelectedDesti[p].Y04001=l.data.Y04001,t.ArrayItemsSelectedDesti[p].pieza_nombre=l.data.pieza,t.ArrayItemsSelectedDesti[p].unidad=l.data.unidad;break}p++}}}),yield _.present()})()}open_popup_pterminado(i){var t=this;return(0,h.Z)(function*(){let s,r,o,m,c=!1;for(const _ of t.ArrayItemsSelectedDesti){if(t.ArrayItemsSelectedDesti[i].idvaleservidetot==t.i_row){s=t.ArrayItemsSelectedDesti[i].marca,r=t.ArrayItemsSelectedDesti[i].potencia,o=t.ArrayItemsSelectedDesti[i].tipo;break}i++}if(""==s&&(m=" Marca",c=!0),""==r&&(m=" ,Potencia",c=!0),""==o&&(m=" y Tipo",c=!0),c)return void t.alertController.create({header:"Servicios No Programados",cssClass:"danger",subHeader:"",mode:"ios",message:"Seleccionar  "+m+", en el item: ("+(i+1)+")",buttons:[{text:"Aceptar",cssClass:"bgcolor:danger",handler:()=>{}}]}).then(l=>{l.present()});const d=yield t.modalCtrl.create({component:b.PopUpPtPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idvaleservidetot_p:t.i_row,idmarca:s,idpotencia:r,idtipo:o}});return d.onDidDismiss().then(_=>{if(null!==_){t.dataReturned=_.data;let l=0;for(const p of t.ArrayItemsSelectedDesti){if(t.ArrayItemsSelectedDesti[l].idvaleservidetot==t.i_row){t.ArrayItemsSelectedDesti[l].resumen_Y04002=_.data.idequipo,t.ArrayItemsSelectedDesti[l].SEQMASERV=_.data.idmarca,t.ArrayItemsSelectedDesti[l].ma00estado_replicated=_.data.idtipo;break}l++}}}),yield d.present()})()}open_popup_equipos(){var i=this;return(0,h.Z)(function*(){const t=yield i.modalCtrl.create({component:y.PopUpEquiposPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idvaleservidetot_p:i.i_row}});return t.onDidDismiss().then(s=>{if(null!==s){i.dataReturned=s.data;let r=0;for(const o of i.ArrayItemsSelectedDesti){if(i.ArrayItemsSelectedDesti[r].idvaleservidetot==i.i_row){i.ArrayItemsSelectedDesti[r].codsmg=s.data.idequipo,i.ArrayItemsSelectedDesti[r].marca=s.data.idmarca,i.ArrayItemsSelectedDesti[r].potencia=s.data.idpotencia,i.ArrayItemsSelectedDesti[r].tipo=s.data.idtipo;break}r++}}}),yield t.present()})()}quitar_vale_selected(i){this.loadingController.create({message:"Porfavor espere...",translucent:!0}).then(s=>{s.present(),this.serviceApi.EjServQuitarItemSelected(i).then(()=>{this.loadingController.dismiss()})})}segmento_cambiado(i,t,s){let r;switch(i.detail.value){case"1":this.hide_div_equipo[s]=!0,this.hide_div_pt[s]=!1,r="Servicios Taller";break;case"2":this.hide_div_equipo[s]=!1,this.hide_div_pt[s]=!0,r="Fabricacion Bomba";break;case"3":this.hide_div_equipo[s]=!1,this.hide_div_pt[s]=!0,r="Fabricacion Repuesto";break;case"4":this.hide_div_equipo[s]=!1,this.hide_div_pt[s]=!1,r="Costos Taller"}let o=0;for(const m of this.ArrayItemsSelectedDesti)this.ArrayItemsSelectedDesti[o].idvaleservidetot==s&&(this.ArrayItemsSelectedDesti[o].avatar=i.detail.value,this.ArrayItemsSelectedDesti[o].nombre_avatar=r),o++;o=s,this.ArrayItemsSelectedDesti[o].cantidad=1,this.ArrayItemsSelectedDesti[o].nrosolse_ot="",this.ArrayItemsSelectedDesti[o].fchvalesrv="",this.ArrayItemsSelectedDesti[o].SEQMASERV="",this.ArrayItemsSelectedDesti[o].Y04002="",this.ArrayItemsSelectedDesti[o].Y04001="",this.ArrayItemsSelectedDesti[o].codsmg="",this.ArrayItemsSelectedDesti[o].nombres="",this.ArrayItemsSelectedDesti[o].idtecnico="",this.ArrayItemsSelectedDesti[o].imei="",this.ArrayItemsSelectedDesti[o].coloravatar="",this.ArrayItemsSelectedDesti[o].finicio_hvot_cab="",this.ArrayItemsSelectedDesti[o].ffin_hvot_cab="",this.ArrayItemsSelectedDesti[o].hora_finicio_hvot_cab="",this.ArrayItemsSelectedDesti[o].hora_ffin_hvot_cab="",this.ArrayItemsSelectedDesti[o].idhorasxvueltaotcab="",this.ArrayItemsSelectedDesti[o].nota_hvot="",this.ArrayItemsSelectedDesti[o].corre_hvot="",this.ArrayItemsSelectedDesti[o].nombres_ejecutor="",this.ArrayItemsSelectedDesti[o].ma00estado_nombre="",this.ArrayItemsSelectedDesti[o].resumen_Y04002="",this.ArrayItemsSelectedDesti[o].horas_ejecutadas="",this.ArrayItemsSelectedDesti[o].ma00estado_replicated="",this.ArrayItemsSelectedDesti[o].pieza_nombre="",this.ArrayItemsSelectedDesti[o].cntvueltas=0,this.ArrayItemsSelectedDesti[o].marca_nombre="",this.ArrayItemsSelectedDesti[o].marca="",this.ArrayItemsSelectedDesti[o].potencia_nombre="",this.ArrayItemsSelectedDesti[o].potencia="",this.ArrayItemsSelectedDesti[o].tipo_nombre="",this.ArrayItemsSelectedDesti[o].tipo=""}listServiciosNuevos(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(t=>{t.present(),this.serviceApi.llamarMaestroServicios(this.searchTerm,this.switchButtonSegmento,"11","H",this.id_device).then(s=>{this.results=s}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{this.idInputSearch.setFocus()},600)})})}agregar_vale(i){this.loadingController.create({message:"Agregando servicio...",translucent:!0}).then(s=>{s.present()}).finally(()=>{i.avatar=this.avatar_tv,i.idvaleservidetot=this.idvaleservidetot_param,this.storage.set(this.ItemsSelectedServ,i).then(s=>{this.storage.get(this.ItemsSelectedServ).then(r=>{this.ArrayItemsSelectedDesti.push(r),this.loadingController.dismiss()})})}).catch(()=>{})}guardar_selected(){let r="",o=0,m=0;for(const c of this.ArrayItemsSelectedDesti){if(null==this.ArrayItemsSelectedDesti[o].Y04002||""==this.ArrayItemsSelectedDesti[o].Y04002){m=2,r=" Fala agregar servicio";break}o++}1==m||2==m?this.alertController.create({header:"Servicios Seleccionados",cssClass:"success",subHeader:"",mode:"ios",message:r+", en el item: ("+(o+1)+")",buttons:[{text:"Aceptar",cssClass:"bgcolor:danger",handler:()=>{}}]}).then(d=>{d.present()}):this.alertSiNo=this.alertController.create({header:"Servicios Seleccionados",subHeader:"",mode:"ios",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(d=>{d.present()}).finally(()=>{}),this.serviceApi.guardar_servicios_selected_ot(this.ArrayItemsSelectedDesti,this.IdOtHtml).then(d=>{console.log("res::::::>",d),this.results=d,console.log(this.results[0]),0!=this.results[0].o_nres?(this.load_lista_servicios(this.IdOtHtml),this.loadingController.dismiss(),alert(this.results[0].o_msj),this.ArrayItemsSelectedDesti=[]):alert(this.results[0].o_msj)}).finally(()=>{})}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(c=>{c.present(),c.onDidDismiss().then(d=>{})})}lista_equipos(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(t=>{t.present(),this.serviceApi.listado_equipos_service(this.search_term_equipo,this.switchButtonSegmento,"17","H").then(s=>{this.results_equipos=s}).finally(()=>{this.loadingController.dismiss(),setTimeout(()=>{this.idinputsearch_equipo.setFocus()},600)})})}load_lista_servicios(i){this.loadingController.create({message:"Cargando servicios...",translucent:!0}).then(s=>{s.present(),this.serviceApi.load_lista_servicios(i).then(r=>{this.ds_ot_servicios=r}).finally(()=>{this.loadingController.dismiss()})})}start_scan_qr(i){var t=this;return(0,h.Z)(function*(){if(yield t.checkPermiso()){t.scanActive=!0;const r=yield D.mR.startScan();r.hasContent&&(console.log(r),t.ArrayItemsSelectedDesti[i].codigo_qr_os=r.content,console.log(t.ArrayItemsSelectedDesti[i]),console.log(t.ArrayItemsSelectedDesti),console.log("result.hasContent:::",r.hasContent),t.scanActive=!1)}})()}checkPermiso(){var i=this;return(0,h.Z)(function*(){return new Promise(function(){var t=(0,h.Z)(function*(s,r){const o=yield D.mR.checkPermission({force:!0});o.granted?s(!0):o.denied?yield(yield i.alertController.create({header:"No Permiso",message:"Por favor dar permiso al acceso de camara en configuraciones",buttons:[{text:"No",role:"Cancelar"},{text:"Abrir Configuracions",handler:()=>{D.mR.openAppSettings(),s(!1)}}]})).present():s(!1)});return function(s,r){return t.apply(this,arguments)}}())})()}stopScanner(){D.mR.stopScan(),this.scanActive=!1}}return u.\u0275fac=function(i){return new(i||u)(e.Y36(a.SH),e.Y36(a.HT),e.Y36(Z.k),e.Y36(T.K),e.Y36(f.gz),e.Y36(f.F0),e.Y36(a.Br),e.Y36(a.IN),e.Y36(a.X1))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-winprincipal"]],viewQuery:function(i,t){if(1&i&&(e.Gf(E,5),e.Gf(P,5)),2&i){let s;e.iGM(s=e.CRH())&&(t.idInputSearch=s.first),e.iGM(s=e.CRH())&&(t.idinputsearch_equipo=s.first)}},standalone:!0,features:[e._Bn([a.X1]),e.jDz],decls:64,vars:16,consts:[["mode","ios"],["text-capitalize",""],["slot","start"],["color","danger",3,"disabled","click"],["name","close"],["slot","end"],[3,"scrollEvents"],["idContent",""],[3,"hidden"],["size-sm","6","size-md","2","size-xl","1"],[1,"text-align:","right"],["size-sm","6","size-md","2","size-xl","2"],[1,"text-align:","left"],["color","primary"],["outline","true","mode","ios",3,"click"],["mode","ios","button","",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["align-items-start",""],["color","success","expand","full",3,"hidden","click"],[1,"scan-box",3,"hidden"],[2,"text-align","center"],["color","success","fill","outline",3,"click"],["ios","ios-add-circle","md","md-add-circle"],["color","primary","fill","outline",3,"click"],["mode","ios","button","",3,"click"],["outline","true","mode","ios"],["outline","true","mode","ios",3,"color"],["size","2"],["size","10"],["type","text","placeholder","Buscar Servicio","mode","ios","readonly","",3,"ngModel","value","click","ngModelChange"],["type","text","disabled","",3,"ngModel","value","ngModelChange"],["required","true","color","primary","type","number","mode","ios",3,"ngModel","value","ngModelChange"],["required","true","color","primary","type","text","mode","ios",3,"ngModel","value","ngModelChange"],["size","7",2,"padding","1px"],["type","text","placeholder","Ingrese Codigo Q.R.",3,"ngModel","value","ngModelChange"],["size","3"],["color","light","expand","full",3,"hidden","click"],["size","10",2,"padding","1px"],["type","text","placeholder","Ingrese Observacion",3,"ngModel","value","ngModelChange"],["side","start",3,"ionSwipe"],["color","danger","expandable",""],["color","danger","expand","full","fill","outline",3,"click"],["ios","ios-del-circle","md","md-del-circle"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3,"Generar Servicios"),e.qZA(),e.TgZ(4,"ion-buttons",2)(5,"ion-button",3),e.NdJ("click",function(){return t.cancelar_ejecucion()}),e._UZ(6,"ion-icon",4),e._uU(7," Cancelar "),e.qZA()(),e._UZ(8,"ion-buttons",5),e.qZA()(),e.TgZ(9,"ion-content",6,7)(11,"ion-item",8)(12,"ion-grid")(13,"ion-row")(14,"ion-col",9)(15,"div",10),e._uU(16,"Nro. O.T.:"),e.qZA()(),e.TgZ(17,"ion-col",11)(18,"div",12)(19,"strong"),e._uU(20),e.qZA()()(),e.TgZ(21,"ion-col",9),e._uU(22,"Equipo: "),e.qZA(),e.TgZ(23,"ion-col",11)(24,"strong"),e._uU(25),e.qZA()(),e.TgZ(26,"ion-col",11),e._uU(27,"F.Creacion O.T.:"),e.qZA(),e.TgZ(28,"ion-col",11)(29,"strong"),e._uU(30),e.qZA()()()()(),e.TgZ(31,"ion-list",8)(32,"ion-list-header",13)(33,"ion-title"),e._uU(34,"Lista de Servicios Registrados "),e.TgZ(35,"ion-chip",14),e.NdJ("click",function(){return t.listado_solse("0")}),e._uU(36,"Ver Todas Solses"),e.qZA()()(),e.YNc(37,M,21,6,"ion-item",15),e.qZA(),e.TgZ(38,"ion-list",8)(39,"ion-list",8)(40,"ion-list-header",13)(41,"ion-title"),e._uU(42,"Lista Servicios por Registrar: "),e.qZA()(),e.YNc(43,O,48,14,"ion-item-sliding",16),e.qZA(),e._UZ(44,"ion-item"),e.TgZ(45,"ion-row",17),e._UZ(46,"ion-col"),e.qZA()(),e.TgZ(47,"ion-button",18),e.NdJ("click",function(){return t.stopScanner()}),e._uU(48," \xa0Detener\n"),e.qZA(),e._UZ(49,"div",19),e.qZA(),e.TgZ(50,"ion-footer")(51,"ion-grid",8)(52,"ion-row"),e._UZ(53,"ion-col"),e.TgZ(54,"ion-col",20)(55,"ion-buttons")(56,"ion-button",21),e.NdJ("click",function(){return t.agregar_item_servicio()}),e._uU(57," Agregar Items \xa0 "),e._UZ(58,"ion-icon",22),e.qZA(),e._uU(59," \xa0\xa0\xa0\xa0 "),e.TgZ(60,"ion-button",23),e.NdJ("click",function(){return t.guardar_selected()}),e._uU(61," Guardar Detalle \xa0 "),e._UZ(62,"ion-icon",22),e.qZA()()(),e._UZ(63,"ion-col"),e.qZA()()()),2&i&&(e.xp6(5),e.Q6J("disabled",t.disableButton),e.xp6(4),e.Udp("--background",t.scanActive?"#00000000":"#fff"),e.Q6J("scrollEvents",!0),e.xp6(2),e.Q6J("hidden",t.scanActive),e.xp6(9),e.Oqu(t.NroOtHtml),e.xp6(5),e.Oqu(t.CodEquipoHtml),e.xp6(5),e.Oqu(t.FchCreaOtHtml),e.xp6(1),e.Q6J("hidden",t.scanActive),e.xp6(6),e.Q6J("ngForOf",t.ds_ot_servicios),e.xp6(1),e.Q6J("hidden",t.scanActive),e.xp6(1),e.Q6J("hidden",t.scanActive),e.xp6(4),e.Q6J("ngForOf",t.ArrayItemsSelectedDesti),e.xp6(4),e.Q6J("hidden",!t.scanActive),e.xp6(2),e.Q6J("hidden",!t.scanActive),e.xp6(2),e.Q6J("hidden",t.scanActive))},dependencies:[a.Pc,a.YG,a.Sm,a.hM,a.wI,a.W2,a.fr,a.jY,a.Gu,a.gu,a.pK,a.Ie,a.Ub,a.u8,a.IK,a.td,a.Q$,a.q_,a.yh,a.Nd,a.VI,a.yW,a.wd,a.sr,a.as,a.j9,C.ez,C.sg,g.u5,g.JJ,g.Q7,g.On]}),u})()}}]);