"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2219],{76:(T,p,l)=>{l.d(p,{GW:()=>m,dk:()=>r,oK:()=>d});var d=(()=>{return(_=d||(d={})).Prompt="PROMPT",_.Camera="CAMERA",_.Photos="PHOTOS",d;var _})(),m=(()=>{return(_=m||(m={})).Rear="REAR",_.Front="FRONT",m;var _})(),r=(()=>{return(_=r||(r={})).Uri="uri",_.Base64="base64",_.DataUrl="dataUrl",r;var _})()},6388:(T,p,l)=>{l.d(p,{V1:()=>r,dk:()=>m.dk,oK:()=>m.oK});var d=l(7423),m=l(76);const r=(0,d.fo)("Camera",{web:()=>l.e(3954).then(l.bind(l,3954)).then(_=>new _.CameraWeb)})},1443:(T,p,l)=>{l.d(p,{ez:()=>m,tP:()=>d});var d=(()=>{return(g=d||(d={})).Documents="DOCUMENTS",g.Data="DATA",g.Library="LIBRARY",g.Cache="CACHE",g.External="EXTERNAL",g.ExternalStorage="EXTERNAL_STORAGE",d;var g})(),m=(()=>{return(g=m||(m={})).UTF8="utf8",g.ASCII="ascii",g.UTF16="utf16",m;var g})()},1067:(T,p,l)=>{l.d(p,{fy:()=>r,tP:()=>m.tP});var d=l(7423),m=l(1443);const r=(0,d.fo)("Filesystem",{web:()=>l.e(6364).then(l.bind(l,6364)).then(_=>new _.FilesystemWeb)})},6090:(T,p,l)=>{function r(){const _=new FileReader;return _.__zone_symbol__originalInstance||_}l.d(p,{y3:()=>r})},2219:(T,p,l)=>{l.r(p),l.d(p,{MttoWinRecinadoPage:()=>L});var d=l(5861),m=l(6895),r=l(5562),_=l(6090),g=l(6388),F=(l(7423),l(5702)),a=l(433),v=l(1067),e=l(8256),U=l(1407),y=l(6929),w=l(849),O=l(529);const q=["filePicker"],J=["fileInput"];function W(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"ion-datetime",49),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.fchregistro=i)}),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("preferWheel",!0)("showDefaultButtons",!0)("ngModel",t.fchregistro)}}function S(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function B(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function K(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function Q(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function k(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function j(s,u){if(1&s&&(e.TgZ(0,"ion-select-option",50),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t.codigo),e.xp6(1),e.hij(" ",t.nombre,"")}}function G(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-thumbnail",2),e._UZ(2,"ion-img",51),e.qZA(),e._UZ(3,"ion-img",51),e.TgZ(4,"ion-label"),e._uU(5),e.qZA(),e.TgZ(6,"ion-button",52),e.NdJ("click",function(){const i=e.CHM(t),n=i.$implicit,c=i.index,b=e.oxw();return e.KtG(b.deleteImage(n.idadjunto,c))}),e._UZ(7,"ion-icon",53),e.qZA()()}if(2&s){const t=u.$implicit,o=e.oxw();e.xp6(2),e.Q6J("src",o.DirectorioFotos+t.idnomadjunto),e.xp6(1),e.Q6J("src",t.webviewPath),e.xp6(2),e.Oqu(t.name)}}const h=function(s){return{"is-invalid":s}};let L=(()=>{class s{constructor(t,o,i,n,c,b,f,R,E,M,C,Y,V,x){this.navCtrl=t,this.formBuilder=o,this.loadingController=i,this.route=n,this.api=c,this.modalCtrl=b,this.plt=f,this.alertController=R,this.toastController=E,this.actionSheetController=M,this.actionSheetCtrl=C,this.ref=Y,this.storage=V,this.http=x,this.rest_estados=[{codigo:"1",nombre:"Operativo"},{codigo:"2",nombre:"Inoperativo"}],this.images=[],this.photos=[],this.PHOTO_STORAGE="photos",this.correlativo="000000",this.fchactual=(new Date).toISOString(),this.DirectorioFotos="../aw_file/adjuntos/img_recinado/",this.convertBlobToBase64=H=>new Promise((te,ie)=>{this.popLodingMenaje=this.loadingController.create({message:"Guardando foto...",translucent:!0}).then(P=>{P.present()}),new FileReader;let I=(0,_.y3)();I.readAsDataURL(H),I.onload=P=>{let Z,N=P.target.result;console.log("url__;;",N),Z=N,console.log("filePath::",Z),Z=this.dataURLtoBlob(Z),console.log("correctPath::<<<<<>>>>",void 0),this.api.uploadImage(Z,this.FormRecinado.value.idrecinadocablecab,"png").subscribe(D=>{this.loadingController.dismiss(),this.loadImages(this.FormRecinado.value.idrecinadocablecab),console.log("salio okkkk::",D)},D=>{console.log("error__::>",D)})}}).finally(()=>{console.log("convertBlobToBase64:::",this.convertBlobToBase64)}),this.FormRecinado=this.formBuilder.group({correlativo:new a.NI("",a.kI.required),fchregistro:new a.NI("",a.kI.required),codsmg:new a.NI("",a.kI.required),idestadoinspeccion:new a.NI("",a.kI.required),idrecinadocablecab:new a.NI("0",a.kI.required),metraje_inspeccion1:new a.NI("",a.kI.required),metraje_inspeccion2:new a.NI(""),detalle_rcd1:new a.NI(""),detalle_rcd2:new a.NI(""),reclamo_rcd1:new a.NI("0",a.kI.required),reclamo_rcd2:new a.NI("0"),idestadocable_rcd1:new a.NI("",a.kI.required),idestadocable_rcd2:new a.NI(""),ca1_mts_pp1:new a.NI("0",a.kI.required),ca1_mts_pp2:new a.NI("0"),fch_reg_ot_rcc:new a.NI("",a.kI.required),tipo_cable1:new a.NI("",a.kI.required),tipo_cable2:new a.NI(""),nroot:new a.NI("",a.kI.required),aislamiento1:new a.NI("",a.kI.required),aislamiento2:new a.NI(""),termistor_m1:new a.NI("",a.kI.required),termistor_m2:new a.NI(""),termistor_t1:new a.NI("",a.kI.required),termistor_t2:new a.NI(""),diagnostico1:new a.NI("",a.kI.required),diagnostico2:new a.NI(""),ca1_codigo_rcc:new a.NI("",a.kI.required),ca2_codigo_rcc:new a.NI("")}),this.DirectorioFotos=this.api.DirectorioImg,this.ClsId=this.route.snapshot.paramMap.get("id"),this.fchregistro=(new Date).toISOString()}ngOnInit(){var t=this;return(0,d.Z)(function*(){let o;(t.plt.is("mobile")&&t.plt.is("hybrid")||t.plt.is("desktop"))&&(t.isDesktop=!0),t.api.list_tipo_cable().subscribe(i=>{console.log("ingreso lista cables",i),t.rest_tipo_cables=i.tcable,t.rest_diagnosticos=i.diagnostico,t.ref.detectChanges()}),t.fchactual=(new Date).toISOString(),console.log("this.fchactual::",t.fchactual),t.storage.get("USER_INFO").then(i=>{o=i,t.NomUsuario=o.user_name,console.log("localStorage.user_id;:::",o.user_id),t.api.load_form_insp_cable(t.ClsId,o.user_id).then(n=>{console.log("this.ClsId",t.ClsId),"0"==t.ClsId?t.NewInspeccionLoad(n):(t.EditarInspeccionLoad(n),t.selectedTextTCable1(1),t.selectedTextTCable2(1),t.selectedTextDiagnostico1(1),t.selectedTextDiagnostico2(1))})}).finally(()=>{console.log("localStorage.user_id;:::finally:::",o.user_id)}),t.plt.ready().then(()=>{})})()}SaveFormInsp(){if(this.FormRecinado.valid)this.alertSiNo=this.alertController.create({header:"Agregar Inspeccion Cable",subHeader:"",mode:"ios",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(t=>{t.present(),t.onDidDismiss().then(o=>{console.log("aceptaPop::::>>",o),"A"==o.role&&this.api.GuardarFormulario(this.FormRecinado.value).then(i=>{console.log("res:::>>>>>>>>>",i)}).finally(()=>{this.navCtrl.navigateForward(["mtto-list-recinado"])}).catch(i=>{console.log("errror:::>>>>>>>>>",i)})})});else{console.log(this.FormRecinado.valid),console.log(this.FormRecinado);for(let t in this.FormRecinado.controls)this.FormRecinado.controls[t].setValue(this.FormRecinado.controls[t].value),this.FormRecinado.controls[t].markAsTouched();this.alertSiNo=this.alertController.create({header:"Agregar Recinado Cable",subHeader:"",mode:"ios",backdropDismiss:!0,message:"Falta seleccionar todos los datos",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}}]}).then(t=>{t.present(),t.onDidDismiss().then(o=>{})})}}NewInspeccionLoad(t){this.EditDataRest=t,console.log("newinspeccion",this.EditDataRest[0]),console.log("newinspeccion",this.EditDataRest),this.idrecinadocablecab=this.EditDataRest[0].idrecinadocablecab,this.FormRecinado.value.idrecinadocablecab=this.EditDataRest[0].idrecinadocablecab,this.correlativo=this.EditDataRest[0].correlativo_rcc,this.fchregistro=new Date(this.EditDataRest[0].fchregistro_rcc).toISOString(),this.ref.detectChanges()}EditarInspeccionLoad(t){this.EditDataRest=t,console.log("this.EditDataRest ",this.EditDataRest);try{this.FormRecinado.setValue({idrecinadocablecab:this.EditDataRest[0].idrecinadocablecab,correlativo:this.EditDataRest[0].correlativo_rcc,fchregistro:new Date(this.EditDataRest[0].fchregistro_rcc).toISOString(),codsmg:this.EditDataRest[0].codsmg,idestadoinspeccion:this.EditDataRest[0].idestado_rcc,ca1_mts_pp1:this.EditDataRest[0].metraje_pp_rcd,ca1_mts_pp2:this.EditDataRest[1].metraje_pp_rcd,metraje_inspeccion1:this.EditDataRest[0].metraje_rcd,metraje_inspeccion2:this.EditDataRest[1].metraje_rcd,tipo_cable1:this.EditDataRest[0].tipocable_rcd,tipo_cable2:this.EditDataRest[1].tipocable_rcd,idestadocable_rcd1:this.EditDataRest[0].idestadocable_rcd,idestadocable_rcd2:this.EditDataRest[1].idestadocable_rcd,reclamo_rcd1:this.EditDataRest[0].reclamo_rcd,reclamo_rcd2:this.EditDataRest[1].reclamo_rcd,detalle_rcd1:this.EditDataRest[0].detalle_rcd,detalle_rcd2:this.EditDataRest[1].detalle_rcd,fch_reg_ot_rcc:new Date(this.EditDataRest[0].fch_reg_ot_rcc).toISOString(),nroot:this.EditDataRest[1].nroot,aislamiento1:this.EditDataRest[0].aislamiento,aislamiento2:this.EditDataRest[1].aislamiento,termistor_m1:this.EditDataRest[0].thermistor_m,termistor_m2:this.EditDataRest[1].thermistor_m,termistor_t1:this.EditDataRest[0].thermistor_n,termistor_t2:this.EditDataRest[1].thermistor_n,diagnostico1:this.EditDataRest[0].diagnostico,diagnostico2:this.EditDataRest[1].diagnostico,ca1_codigo_rcc:this.EditDataRest[1].ca1_codigo_rcc,ca2_codigo_rcc:this.EditDataRest[1].ca2_codigo_rcc})}catch(o){console.log("error:::>",o)}console.log(":::this.FormRecinado.value.idrecinadocablecab:::::::::::::::>>"),this.loadImages(this.FormRecinado.value.idrecinadocablecab),console.log("<<<<::::::::::::::::::>>")}selectedTextTCable1(t){let o=null;return 1==t&&this.rest_tipo_cables.forEach(i=>{this.FormRecinado.get("tipo_cable1").value==i.id&&(o=i.nombre)}),o}selectedTextTCable2(t){let o=null;return 1==t&&(console.log("this.rest_tipo_cables",this.rest_tipo_cables),this.rest_tipo_cables.forEach(i=>{this.FormRecinado.get("tipo_cable2").value==i.id&&(o=i.nombre)})),o}selectedTextDiagnostico1(t){let o=null;return 1==t&&this.rest_diagnosticos.forEach(i=>{console.log("this.FormRecinado.get(diagnostico1).value",this.FormRecinado.get("diagnostico1").value),this.FormRecinado.get("diagnostico1").value==i.id&&(o=i.nombre)}),o}selectedTextDiagnostico2(t){let o=null;return 1==t&&this.rest_diagnosticos.forEach(i=>{this.FormRecinado.get("diagnostico2").value==i.id&&(o=i.nombre)}),o}open_popup_equipos(){var t=this;return(0,d.Z)(function*(){const o=yield t.modalCtrl.create({component:F.PopUpEquRecinadoPage,backdropDismiss:!0,showBackdrop:!0,mode:"ios",componentProps:{idvaleservidetot_p:0}});return o.onDidDismiss().then(i=>{null!==i&&(t.dataReturned=i.data,t.fch_reg_ot_rcc=i.data.fch_inicio_ot,t.nroot=i.data.id_orden_trab_fis_cab,t.codsmg1=i.data.idequipo)}),yield o.present()})()}loadImages(t){this.api.getImages(t).subscribe(o=>{this.images=o,this.ref.detectChanges()})}selectImageSource(){var t=this;return(0,d.Z)(function*(){const o=[{text:"Tome una Foto",icon:"camera",handler:()=>{console.log(g.oK.Camera),t.addNewToGallery(1)}},{text:"Elegir desde las fotos",icon:"image",handler:()=>{console.log("Photos",g.oK.Photos),t.addNewToGallery(2)}}];yield(yield t.actionSheetCtrl.create({header:"Selecionar Image",buttons:o})).present()})()}addNewToGallery(t){var o=this;return(0,d.Z)(function*(){let i;console.log("addNewToGallery::::"),1==t?i=yield g.V1.getPhoto({resultType:g.dk.Uri,source:g.oK.Camera,quality:100}).finally(()=>{console.log("capturedPhoto::::",i)}):2==t&&(i=yield g.V1.getPhoto({resultType:g.dk.Uri,source:g.oK.Photos,quality:100}).finally(()=>{console.log("capturedPhoto::::",i)})),console.log("LN {140}::::"),yield o.savePicture(i)})()}savePicture(t){var o=this;return(0,d.Z)(function*(){const i=yield o.readAsBase64(t),n=(new Date).getTime()+".jpeg";return yield v.fy.writeFile({path:n,data:i,directory:v.tP.Data}),{filepath:n,webviewPath:t.webPath}})()}readAsBase64(t){var o=this;return(0,d.Z)(function*(){const n=yield(yield fetch(t.webPath)).blob();return yield o.convertBlobToBase64(n)})()}dataURLtoBlob(t){for(var o=t.split(","),i=o[0].match(/:(.*?);/)[1],n=atob(o[1]),c=n.length,b=new Uint8Array(c);c--;)b[c]=n.charCodeAt(c);return new Blob([b],{type:i})}base64ToArrayBuffer(t){for(var o=window.atob(t),i=o.length,n=new Uint8Array(i),c=0;c<i;c++)n[c]=o.charCodeAt(c);return n.buffer}dataURLtoFile(t,o){let i=t.split(","),n=i[0].match(/:(.*?);/)[1],c=atob(i[1]),b=c.length,f=new Uint8Array(b);for(;b--;)f[b]=c.charCodeAt(b);return new File([f],o,{type:n})}loadSaved(){var t=this;return(0,d.Z)(function*(){for(let o of t.photos){const i=yield v.fy.readFile({path:o.path,directory:v.tP.Data});o.webPath=`data:image/jpeg;base64,${i.data}`}})()}uploadFile(t){}deleteImage(t,o){this.alertSiNo=this.alertController.create({header:"Agregar Inspeccion Cable",subHeader:"",mode:"ios",backdropDismiss:!0,message:"Confirmar que desea eliminar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(i=>{i.present(),i.onDidDismiss().then(n=>{console.log("aceptaPop::::>>",n),"A"==n.role&&this.api.deleteImage(t).subscribe(c=>{this.images.splice(o,1)})})})}b64toBlob(t,o="",i=512){const n=atob(t),c=[];for(let f=0;f<n.length;f+=i){const R=n.slice(f,f+i),E=new Array(R.length);for(let C=0;C<R.length;C++)E[C]=R.charCodeAt(C);const M=new Uint8Array(E);c.push(M)}return new Blob(c,{type:o})}cancelar_ejecucion(){this.navCtrl.navigateForward("mtto-list-recinado")}load_datos(){this.loadingController.create({message:"Porfavor espere...",translucent:!0}).then(o=>{let i,n;o.present(),this.storage.get("USER_INFO").then(c=>{i=c,n=i.idtecnico}).finally(()=>{this.api.load_form_insp_cable(this.ClsId,n).then(c=>{this.ClsArForm=c,console.log(this.ClsArForm),this.loadingController.dismiss()})})})}segmentChanged(t){}select_change_estado(t){}onFileChoose(t){const o=t.target.files[0],n=new FileReader;o.type.match(/image-*/)?(n.onload=()=>{this.images.push(n.result.toString())},n.readAsDataURL(o)):console.log("File format not supported")}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(r.SH),e.Y36(a.qu),e.Y36(r.HT),e.Y36(U.gz),e.Y36(y.o),e.Y36(r.IN),e.Y36(r.t4),e.Y36(r.Br),e.Y36(r.yF),e.Y36(r.BX),e.Y36(r.BX),e.Y36(e.sBO),e.Y36(w.K),e.Y36(O.eN))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-mtto-win-recinado"]],viewQuery:function(t,o){if(1&t&&(e.Gf(q,5),e.Gf(J,5)),2&t){let i;e.iGM(i=e.CRH())&&(o.filePickerRef=i.first),e.iGM(i=e.CRH())&&(o.fileInput=i.first)}},standalone:!0,features:[e.jDz],decls:156,vars:62,consts:[["mode","ios"],["text-capitalize",""],["slot","start"],["color","danger",3,"click"],["name","close"],[3,"formGroup"],["f","ngForm"],["color","primary"],["mode","ios","label","Correlativo:","label-placement","fixed","readonly","","formControlName","correlativo",3,"ngModel","ngModelChange"],[2,"display","none"],["hidden","","formControlName","idrecinadocablecab",3,"ngModel","ngModelChange"],["label","F.Registro:","locale","es-ES","datetime","datetime"],["trigger","popover-button","animated","true","arrow","true","mode","ios",3,"keepContentsMounted"],["label","Equipo:","label-placement","fixed","readonly","","formControlName","codsmg",3,"ngModel","ngClass","ngModelChange"],["slot","end","color","primary",3,"click"],["name","search-outline"],["label","Nro O.T.:","label-placement","fixed","type","text","readonly","","formControlName","nroot",3,"ngModel","ngClass","ngModelChange"],["label","Estado:","placeholder","Seleccionar uno","formControlName","idestadoinspeccion","mode","ios","interface","action-sheet",3,"ngClass"],["value","1"],["value","2"],["label","F.Reg.O.T:","label-placement","fixed","readonly","","formControlName","fch_reg_ot_rcc",3,"ngModel","ngModelChange"],["label","Tipo Cable.:","formControlName","tipo_cable1","mode","ios","placeholder","Seleccionar Tipo","interface","action-sheet",3,"selectedText","ngClass","ionChange"],[3,"value",4,"ngFor","ngForOf"],["label","Metraje Inspeccion:","label-placement","floating","type","number","formControlName","metraje_inspeccion1","required","",1,"form-control",3,"ngClass"],["label","Metraje Final:","label-placement","floating","type","number","formControlName","ca1_mts_pp1",3,"ngClass"],["label","Aislamiento:","label-placement","floating","type","number","formControlName","aislamiento1",3,"ngClass"],["formControlName","termistor_m1","mode","ios",3,"ngClass","ionChange"],["formControlName","termistor_t1","mode","ios",3,"ngClass","ionChange"],["label","Estado Cable:","formControlName","idestadocable_rcd1","placeholder","Seleccionar estado","mode","ios","interface","action-sheet",3,"selectedText","ngClass","ionChange"],["label","Diagnostico:","formControlName","diagnostico1","placeholder","Seleccionar diagnostico","mode","ios","interface","action-sheet",3,"selectedText","ngClass","ionChange"],["formControlName","reclamo_rcd1","mode","ios",3,"ngClass","ionChange"],["label","Codigo:","label-placement","floating","type","text","formControlName","ca1_codigo_rcc",3,"ngClass"],["label","Observaciones:","labelPlacement","floating","fill","solid","formControlName","detalle_rcd1",3,"autoGrow"],["label","Tipo Cable:","formControlName","tipo_cable2","mode","ios","placeholder","Seleccionar Tipo","interface","action-sheet",3,"selectedText","ionChange"],["label","Metraje Inspeccion:","label-placement","floating","type","number","formControlName","metraje_inspeccion2"],["label","Metraje Final:","label-placement","floating","type","number","formControlName","ca1_mts_pp2"],["label","Aislamiento:","label-placement","floating","type","number","formControlName","aislamiento2"],["formControlName","termistor_m2","mode","ios",3,"ionChange"],["formControlName","termistor_t2","mode","ios",3,"ionChange"],["label","Estado Cable:","formControlName","idestadocable_rcd2","placeholder","Seleccionar estado","mode","ios","interface","action-sheet",3,"selectedText","ionChange"],["label","Diagnostico:","formControlName","diagnostico2","placeholder","Seleccionar diagnostico","mode","ios","interface","action-sheet",3,"selectedText","ionChange"],["formControlName","reclamo_rcd2","mode","ios",3,"ionChange"],["label","Codigo:","label-placement","floating","type","text","formControlName","ca2_codigo_rcc",3,"ngClass"],["label","Observaciones:","labelPlacement","floating","fill","solid","formControlName","detalle_rcd2",3,"autoGrow"],["expand","block"],["slot","end",3,"click"],["name","camera"],[4,"ngFor","ngForOf"],["type","button","expand","block",3,"click"],["locale","es-ES","id","datetime","mode","ios","displayFormat","YYYY-MM-DD","presentation","date","formControlName","fchregistro",3,"preferWheel","showDefaultButtons","ngModel","ngModelChange"],[3,"value"],[3,"src"],["slot","end","fill","clear",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3,"Resinado de Cable"),e.qZA(),e.TgZ(4,"ion-buttons",2)(5,"ion-button",3),e.NdJ("click",function(){return o.cancelar_ejecucion()}),e._UZ(6,"ion-icon",4),e._uU(7," Cancelar "),e.qZA()()()(),e.TgZ(8,"ion-content")(9,"form",5,6)(11,"ion-list")(12,"ion-item-group")(13,"ion-item-divider",7)(14,"ion-label"),e._uU(15,"General"),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-input",8),e.NdJ("ngModelChange",function(n){return o.correlativo=n}),e.qZA(),e.TgZ(18,"div",9)(19,"ion-input",10),e.NdJ("ngModelChange",function(n){return o.idrecinadocablecab=n}),e.qZA()()(),e.TgZ(20,"ion-item")(21,"ion-label"),e._uU(22,"F.Registro:"),e.qZA(),e._UZ(23,"ion-datetime-button",11),e.TgZ(24,"ion-popover",12),e.YNc(25,W,1,3,"ng-template"),e.qZA()(),e.TgZ(26,"ion-item")(27,"ion-input",13),e.NdJ("ngModelChange",function(n){return o.codsmg1=n}),e.qZA(),e.TgZ(28,"ion-button",14),e.NdJ("click",function(){return o.open_popup_equipos()}),e._UZ(29,"ion-icon",15),e.qZA()(),e.TgZ(30,"ion-item")(31,"ion-input",16),e.NdJ("ngModelChange",function(n){return o.nroot=n}),e.qZA()(),e.TgZ(32,"ion-item")(33,"ion-select",17)(34,"ion-select-option",18),e._uU(35,"Borrador"),e.qZA(),e.TgZ(36,"ion-select-option",19),e._uU(37,"Terminado"),e.qZA()()(),e.TgZ(38,"ion-item")(39,"ion-input",20),e.NdJ("ngModelChange",function(n){return o.fch_reg_ot_rcc=n}),e.qZA()()(),e.TgZ(40,"ion-item-group")(41,"ion-item-divider",7)(42,"ion-label"),e._uU(43,"Cable 1"),e.qZA()(),e.TgZ(44,"ion-item")(45,"ion-select",21),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(46,S,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(47,"ion-item"),e._UZ(48,"ion-input",23),e.qZA(),e.TgZ(49,"ion-item"),e._UZ(50,"ion-input",24),e.qZA(),e.TgZ(51,"ion-item"),e._UZ(52,"ion-input",25),e.qZA(),e.TgZ(53,"ion-item")(54,"ion-label"),e._uU(55,"Thermistor M: "),e.TgZ(56,"ion-segment",26),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(57,"ion-segment-button",18)(58,"ion-label"),e._uU(59,"SI"),e.qZA()(),e.TgZ(60,"ion-segment-button",19)(61,"ion-label"),e._uU(62,"NO"),e.qZA()()()()(),e.TgZ(63,"ion-item")(64,"ion-label"),e._uU(65,"Thermistor T: "),e.TgZ(66,"ion-segment",27),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(67,"ion-segment-button",18)(68,"ion-label"),e._uU(69,"SI"),e.qZA()(),e.TgZ(70,"ion-segment-button",19)(71,"ion-label"),e._uU(72,"NO"),e.qZA()()()()(),e.TgZ(73,"ion-item")(74,"ion-select",28),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(75,B,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(76,"ion-item")(77,"ion-select",29),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(78,K,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(79,"ion-item")(80,"ion-label"),e._uU(81," Reclamo: "),e.TgZ(82,"ion-segment",30),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(83,"ion-segment-button",18)(84,"ion-label"),e._uU(85,"SI"),e.qZA()(),e.TgZ(86,"ion-segment-button",19)(87,"ion-label"),e._uU(88,"NO"),e.qZA()()()()(),e.TgZ(89,"ion-item"),e._UZ(90,"ion-input",31),e.qZA(),e.TgZ(91,"ion-item"),e._UZ(92,"ion-textarea",32),e.qZA()(),e.TgZ(93,"ion-item-group")(94,"ion-item-divider",7)(95,"ion-label"),e._uU(96,"Cable 2"),e.qZA()(),e.TgZ(97,"ion-item")(98,"ion-select",33),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(99,Q,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(100,"ion-item"),e._UZ(101,"ion-input",34),e.qZA(),e.TgZ(102,"ion-item"),e._UZ(103,"ion-input",35),e.qZA(),e.TgZ(104,"ion-item"),e._UZ(105,"ion-input",36),e.qZA(),e.TgZ(106,"ion-item")(107,"ion-label"),e._uU(108," Thermistor M: "),e.TgZ(109,"ion-segment",37),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(110,"ion-segment-button",18)(111,"ion-label"),e._uU(112,"SI"),e.qZA()(),e.TgZ(113,"ion-segment-button",19)(114,"ion-label"),e._uU(115,"NO"),e.qZA()()()()(),e.TgZ(116,"ion-item")(117,"ion-label"),e._uU(118," Thermistor T: "),e.TgZ(119,"ion-segment",38),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(120,"ion-segment-button",18)(121,"ion-label"),e._uU(122,"SI"),e.qZA()(),e.TgZ(123,"ion-segment-button",19)(124,"ion-label"),e._uU(125,"NO"),e.qZA()()()()(),e.TgZ(126,"ion-item")(127,"ion-select",39),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(128,k,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(129,"ion-item")(130,"ion-select",40),e.NdJ("ionChange",function(n){return o.select_change_estado(n)}),e.YNc(131,j,2,2,"ion-select-option",22),e.qZA()(),e.TgZ(132,"ion-item")(133,"ion-label"),e._uU(134," Reclamo: "),e.TgZ(135,"ion-segment",41),e.NdJ("ionChange",function(n){return o.segmentChanged(n)}),e.TgZ(136,"ion-segment-button",18)(137,"ion-label"),e._uU(138,"SI"),e.qZA()(),e.TgZ(139,"ion-segment-button",19)(140,"ion-label"),e._uU(141,"NO"),e.qZA()()()()(),e.TgZ(142,"ion-item"),e._UZ(143,"ion-input",42),e.qZA(),e.TgZ(144,"ion-item"),e._UZ(145,"ion-textarea",43),e.qZA()()(),e.TgZ(146,"ion-item",44),e._uU(147,"Fotos: "),e.TgZ(148,"ion-fab-button",45),e.NdJ("click",function(){return o.selectImageSource()}),e._UZ(149,"ion-icon",46),e.qZA()(),e.TgZ(150,"ion-list"),e.YNc(151,G,8,3,"ion-item",47),e.qZA(),e._UZ(152,"ion-item"),e.qZA()(),e.TgZ(153,"ion-footer")(154,"ion-button",48),e.NdJ("click",function(){return o.SaveFormInsp()}),e._uU(155,"Guardar Formulario"),e.qZA()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.FormRecinado),e.xp6(8),e.Q6J("ngModel",o.correlativo),e.xp6(2),e.Q6J("ngModel",o.idrecinadocablecab),e.xp6(5),e.Q6J("keepContentsMounted",!0),e.xp6(3),e.Q6J("ngModel",o.codsmg1)("ngClass",e.VKq(34,h,o.FormRecinado.get("codsmg").touched&&o.FormRecinado.get("codsmg").invalid)),e.xp6(4),e.Q6J("ngModel",o.nroot)("ngClass",e.VKq(36,h,o.FormRecinado.get("nroot").touched&&o.FormRecinado.get("nroot").invalid)),e.xp6(2),e.Q6J("ngClass",e.VKq(38,h,o.FormRecinado.get("idestadoinspeccion").touched&&o.FormRecinado.get("idestadoinspeccion").invalid)),e.xp6(6),e.Q6J("ngModel",o.fch_reg_ot_rcc),e.xp6(6),e.Q6J("selectedText",o.selectedTextTCable1(0))("ngClass",e.VKq(40,h,o.FormRecinado.get("tipo_cable1").touched&&o.FormRecinado.get("tipo_cable1").invalid)),e.xp6(1),e.Q6J("ngForOf",o.rest_tipo_cables),e.xp6(2),e.Q6J("ngClass",e.VKq(42,h,o.FormRecinado.get("metraje_inspeccion1").touched&&o.FormRecinado.get("metraje_inspeccion1").invalid)),e.xp6(2),e.Q6J("ngClass",e.VKq(44,h,o.FormRecinado.get("ca1_mts_pp1").touched&&o.FormRecinado.get("ca1_mts_pp1").invalid)),e.xp6(2),e.Q6J("ngClass",e.VKq(46,h,o.FormRecinado.get("aislamiento1").touched&&o.FormRecinado.get("aislamiento1").invalid)),e.xp6(4),e.Q6J("ngClass",e.VKq(48,h,o.FormRecinado.get("termistor_m1").touched&&o.FormRecinado.get("termistor_m1").invalid)),e.xp6(10),e.Q6J("ngClass",e.VKq(50,h,o.FormRecinado.get("termistor_t1").touched&&o.FormRecinado.get("termistor_t1").invalid)),e.xp6(8),e.Q6J("ngClass",e.VKq(52,h,o.FormRecinado.get("idestadocable_rcd1").touched&&o.FormRecinado.get("idestadocable_rcd1").invalid)),e.xp6(1),e.Q6J("ngForOf",o.rest_estados),e.xp6(2),e.Q6J("selectedText",o.selectedTextDiagnostico1(0))("ngClass",e.VKq(54,h,o.FormRecinado.get("diagnostico1").touched&&o.FormRecinado.get("diagnostico1").invalid)),e.xp6(1),e.Q6J("ngForOf",o.rest_diagnosticos),e.xp6(4),e.Q6J("ngClass",e.VKq(56,h,o.FormRecinado.get("reclamo_rcd1").touched&&o.FormRecinado.get("reclamo_rcd1").invalid)),e.xp6(8),e.Q6J("ngClass",e.VKq(58,h,o.FormRecinado.get("ca1_codigo_rcc").touched&&o.FormRecinado.get("ca1_codigo_rcc").invalid)),e.xp6(2),e.Q6J("autoGrow",!0),e.xp6(6),e.Q6J("selectedText",o.selectedTextTCable2(0)),e.xp6(1),e.Q6J("ngForOf",o.rest_tipo_cables),e.xp6(29),e.Q6J("ngForOf",o.rest_estados),e.xp6(2),e.Q6J("selectedText",o.selectedTextDiagnostico2(0)),e.xp6(1),e.Q6J("ngForOf",o.rest_diagnosticos),e.xp6(12),e.Q6J("ngClass",e.VKq(60,h,o.FormRecinado.get("ca2_codigo_rcc").touched&&o.FormRecinado.get("ca2_codigo_rcc").invalid)),e.xp6(2),e.Q6J("autoGrow",!0),e.xp6(6),e.Q6J("ngForOf",o.images))},dependencies:[r.Pc,r.YG,r.Sm,r.W2,r.x4,r.Mj,r.W4,r.fr,r.Gu,r.gu,r.Xz,r.pK,r.Ie,r.rH,r.Ub,r.Q$,r.q_,r.cJ,r.GO,r.t9,r.n0,r.g2,r.Bs,r.wd,r.sr,r.d8,r.as,r.QI,r.j9,m.ez,m.mk,m.sg,a.u5,a._Y,a.JJ,a.JL,a.Q7,a.UX,a.sg,a.u],styles:["ion-select[_ngcontent-%COMP%]{width:100%;justify-content:center}"]}),s})()}}]);