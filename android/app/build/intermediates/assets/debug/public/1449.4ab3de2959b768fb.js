"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1449],{1449:(U,d,_)=>{_.r(d),_.d(d,{MttoChecklistWinMontaje6Page:()=>E});var h=_(6895),t=_(433),o=_(5562),e=_(8256),b=_(2449),Z=_(849),v=_(1407),A=_(7883);let E=(()=>{class l{constructor(i,n,a,s,C,T,O,g){this.formBuilder=i,this.navCtrl=n,this.loadingController=a,this.ApiService=s,this.storage=C,this.alertController=T,this.router=O,this.globalVal=g,this.disableButtonPaso1=!0,this.tituloAlert="PRUEBA EN POZA Y REVISION FINAL",this.checklist_paso6_apli_ck=!0,this.FormCheckListPaso6=this.formBuilder.group({idchecklistpaso6:[""],idchecklistcab_paso6:[""],idestado_revi_paso6_cp6:[""],idsuper_respsble_cp6:[""],fch_revi_respsble_cp6:[""],idesta_revi_respsble_cp6:[""],revi_respsble_obs_cp6:[""],ins_bor_aj_rev_cp6:["",t.kI.required],ins_bor_me_val_cp6:["",t.kI.required],ins_bor_me_rev_cp6:["",t.kI.required],ins_cab_aj_rev_cp6:["",t.kI.required],ins_cab_me_val_cp6:["",t.kI.required],ins_cab_me_rev_cp6:["",t.kI.required],ins_ent_ve1_rev_cp6:["",t.kI.required],ins_ent_ve2_rev_cp6:["",t.kI.required],pru_rea_gi_rev_cp6:["",t.kI.required],pru_rea_co_val_cp6:["",t.kI.required],pru_rea_co_rev_cp6:["",t.kI.required],ban_pru_pr_rev_cp6:["",t.kI.required],rev_fin_rev_rev_cp6:["",t.kI.required],rev_fin_med_val_cp6:["",t.kI.required],rev_fin_med_rev_cp6:["",t.kI.required],rev_fin_ins_rev_cp6:["",t.kI.required],rev_fin_revaju_rev_cp6:["",t.kI.required],rev_fin_pint_rev_cp6:["",t.kI.required],rev_fin_inst_rev_cp6:["",t.kI.required],ins_bor_apl:[""],ins_cab_apl:[""],checklist_paso6_apli:[""]}),this.idchecklistcab=g.idchecklistcab,this.FormCheckListPaso6.controls.idchecklistcab_paso6.setValue(this.idchecklistcab);var u=this;let r;this.storage.get("USER_PERMISO").then(c=>{c.forEach(function(m){u.disableButtonPaso1=32!=m.Nivel})}),this.storage.get("USER_INFO").then(c=>{r=c,this.NombresUsuarioLocal=r.user_name,this.IdUsuarioLocal=r.user_id,this.storage.get("DEVICE_INFO").then(m=>{r=m,this.NombreDispositivo=r.name,this.IdDispositivo=r.uuid})})}ngOnInit(){}FLoadForms(){this.loadingController.create({message:"Cargando lista...",translucent:!0}).then(n=>{n.present(),this.ApiService.FormFindPaso6(this.idchecklistcab,"1","H").then(a=>{this.EditDataRest=a;try{let s;this.FormCheckListPaso6.setValue({idchecklistpaso6:this.EditDataRest[0].idchecklistpaso6,idchecklistcab_paso6:this.EditDataRest[0].idchecklistcab_paso6,idestado_revi_paso6_cp6:this.EditDataRest[0].idestado_revi_paso6_cp6,idsuper_respsble_cp6:this.EditDataRest[0].idsuper_respsble_cp6,fch_revi_respsble_cp6:this.EditDataRest[0].fch_revi_respsble_cp6,idesta_revi_respsble_cp6:this.EditDataRest[0].idesta_revi_respsble_cp6,revi_respsble_obs_cp6:this.EditDataRest[0].revi_respsble_obs_cp6,ins_bor_aj_rev_cp6:this.EditDataRest[0].ins_bor_aj_rev_cp6,ins_bor_me_val_cp6:this.EditDataRest[0].ins_bor_me_val_cp6,ins_bor_me_rev_cp6:this.EditDataRest[0].ins_bor_me_rev_cp6,ins_cab_aj_rev_cp6:this.EditDataRest[0].ins_cab_aj_rev_cp6,ins_cab_me_val_cp6:this.EditDataRest[0].ins_cab_me_val_cp6,ins_cab_me_rev_cp6:this.EditDataRest[0].ins_cab_me_rev_cp6,ins_ent_ve1_rev_cp6:this.EditDataRest[0].ins_ent_ve1_rev_cp6,ins_ent_ve2_rev_cp6:this.EditDataRest[0].ins_ent_ve2_rev_cp6,pru_rea_gi_rev_cp6:this.EditDataRest[0].pru_rea_gi_rev_cp6,pru_rea_co_val_cp6:this.EditDataRest[0].pru_rea_co_val_cp6,pru_rea_co_rev_cp6:this.EditDataRest[0].pru_rea_co_rev_cp6,ban_pru_pr_rev_cp6:this.EditDataRest[0].ban_pru_pr_rev_cp6,rev_fin_rev_rev_cp6:this.EditDataRest[0].rev_fin_rev_rev_cp6,rev_fin_med_val_cp6:this.EditDataRest[0].rev_fin_med_val_cp6,rev_fin_med_rev_cp6:this.EditDataRest[0].rev_fin_med_rev_cp6,rev_fin_ins_rev_cp6:this.EditDataRest[0].rev_fin_ins_rev_cp6,rev_fin_revaju_rev_cp6:this.EditDataRest[0].rev_fin_revaju_rev_cp6,rev_fin_pint_rev_cp6:this.EditDataRest[0].rev_fin_pint_rev_cp6,rev_fin_inst_rev_cp6:this.EditDataRest[0].rev_fin_inst_rev_cp6,ins_bor_apl:"1"!=this.EditDataRest[0].ins_bor_apl,ins_cab_apl:"1"!=this.EditDataRest[0].ins_cab_apl,checklist_paso6_apli:this.globalVal.checklist_paso6_apli}),s={detail:{checked:this.FormCheckListPaso6.controls.ins_bor_apl.value}},this.toggle1(s),s={detail:{checked:this.FormCheckListPaso6.controls.ins_cab_apl.value}},this.toggle2(s)}catch(s){console.log("error:::>",s),this.loadingController.dismiss()}}).finally(()=>{this.loadingController.dismiss()})})}SaveFormTerminadoPaso1(){if(this.FormCheckListPaso6.valid)this.alertSiNo=this.alertController.create({header:this.tituloAlert,subHeader:"",mode:"ios",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(i=>{i.present(),i.onDidDismiss().then(n=>{console.log("aceptaPop::::>>",n),"A"==n.role&&(0==this.disableButtonPaso1&&this.FormCheckListPaso6.controls.idsuper_respsble_cp6.setValue(this.IdUsuarioLocal),this.loadingController.create({message:"Guardando Paso 6...",translucent:!0}).then(s=>{s.present()}),this.ApiService.GuardarFormPaso6(this.FormCheckListPaso6.value).then(s=>{console.log("res:::>>>>>>>>>",s),console.log(this.ApiService.confirmSaveBd),this.FormCheckListPaso6.controls.idchecklistpaso6.setValue(this.ApiService.confirmSaveBd),this.loadingController.dismiss(),alert("Guardado correctamente.")}).finally(()=>{}).catch(s=>{console.log("errror:::>>>>>>>>>",s)}))})});else{for(let i in this.FormCheckListPaso6.controls)this.FormCheckListPaso6.controls[i].setValue(this.FormCheckListPaso6.controls[i].value),this.FormCheckListPaso6.controls[i].markAsTouched();this.alertSiNo=this.alertController.create({header:this.tituloAlert,subHeader:"",mode:"ios",backdropDismiss:!0,message:"Falta seleccionar todos los datos",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}}]}).then(i=>{i.present(),i.onDidDismiss().then(n=>{})})}}SaveFormBorradorPaso1(){this.alertSiNo=this.alertController.create({header:this.tituloAlert,subHeader:"",mode:"ios",backdropDismiss:!0,message:"Confirmar que desea guardar?",buttons:[{text:"Aceptar",cssClass:"alert-button-group",role:"A",handler:()=>{}},{text:"Cancelar",role:"F",handler:()=>{}}]}).then(i=>{i.present(),i.onDidDismiss().then(n=>{"A"==n.role&&(this.loadingController.create({message:"Guardando Paso 6...",translucent:!0}).then(s=>{s.present()}),this.ApiService.GuardarFormPaso6(this.FormCheckListPaso6.value).then(s=>{this.FormCheckListPaso6.controls.idchecklistpaso6.setValue(this.ApiService.confirmSaveBd),this.loadingController.dismiss(),alert("Guardado correctamente.")}).finally(()=>{}).catch(s=>{console.log("errror:::>>>>>>>>>",s)}))})})}SaveCheckNoAplicaPaso(i){this.loadingController.create({message:"Guardando Paso 5...",translucent:!0}).then(a=>{a.present()}),this.FormCheckListPaso6.controls.idchecklistcab_paso6.setValue(this.idchecklistcab),this.globalVal.checklist_paso6_apli=i.detail.checked?"0":"1",this.ApiService.GuardarAplicaPaso(this.idchecklistcab,6,i.detail.checked).then(a=>{this.NoAplicaPaso(i),this.loadingController.dismiss()}).finally(()=>{}).catch(a=>{console.log("errror:::>>>>>>>>>",a)})}NoAplicaPaso(i){i.detail.checked?(this.FormCheckListPaso6.get("ins_bor_apl").setValue(!0),this.FormCheckListPaso6.get("ins_bor_apl").enable(),this.FormCheckListPaso6.get("ins_cab_apl").enable(),this.FormCheckListPaso6.get("ins_cab_apl").setValue(!0),this.FormCheckListPaso6.get("idestado_revi_paso6_cp6").enable()):(this.FormCheckListPaso6.get("ins_bor_apl").disable(),this.FormCheckListPaso6.get("ins_bor_apl").setValue(!0),this.FormCheckListPaso6.get("ins_cab_apl").disable(),this.FormCheckListPaso6.get("ins_cab_apl").setValue(!0),this.FormCheckListPaso6.get("idestado_revi_paso6_cp6").disable()),this.toggle1(i),this.toggle2(i)}toggle1(i){i.detail.checked?(this.FormCheckListPaso6.get("ins_bor_aj_rev_cp6").enable(),this.FormCheckListPaso6.get("ins_bor_me_val_cp6").enable(),this.FormCheckListPaso6.get("ins_bor_me_rev_cp6").enable()):(this.FormCheckListPaso6.get("ins_bor_aj_rev_cp6").disable(),this.FormCheckListPaso6.get("ins_bor_me_val_cp6").disable(),this.FormCheckListPaso6.get("ins_bor_me_rev_cp6").disable())}toggle2(i){i.detail.checked?(this.FormCheckListPaso6.get("ins_cab_aj_rev_cp6").enable(),this.FormCheckListPaso6.get("ins_cab_me_val_cp6").enable(),this.FormCheckListPaso6.get("ins_cab_me_rev_cp6").enable()):(this.FormCheckListPaso6.get("ins_cab_aj_rev_cp6").disable(),this.FormCheckListPaso6.get("ins_cab_me_val_cp6").disable(),this.FormCheckListPaso6.get("ins_cab_me_rev_cp6").disable())}ionViewWillEnter(){let i;this.checklist_paso6_apli_ck="0"==this.globalVal.checklist_paso6_apli,this.FLoadForms(),i={detail:{checked:this.checklist_paso6_apli_ck,jc:0}},this.NoAplicaPaso(i),this.FormCheckListPaso6.controls.checklist_paso6_apli.setValue(this.checklist_paso6_apli_ck)}}return l.\u0275fac=function(i){return new(i||l)(e.Y36(t.QS),e.Y36(o.SH),e.Y36(o.HT),e.Y36(b.L),e.Y36(Z.K),e.Y36(o.Br),e.Y36(v.F0),e.Y36(A.X))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-mtto-checklist-win-montaje6"]],standalone:!0,features:[e.jDz],decls:323,vars:6,consts:[["mode","ios"],["text-capitalize",""],[3,"formGroup"],["f","ngForm"],["justify","end","mode","ios","formControlName","checklist_paso6_apli",3,"ionChange"],[1,"ion-padding"],["mode","ios",1,"ion-no-padding"],["mode","ios","formControlName","ins_bor_apl",2,"width","50%",3,"ionChange"],[1,"nested_divider"],["color","medium",1,"nested_divider"],["mode","ios","formControlName","ins_bor_aj_rev_cp6"],["value","1"],["value","2"],["type","text","maxlength","80","formControlName","ins_bor_me_val_cp6"],["mode","ios","formControlName","ins_bor_me_rev_cp6"],["mode","ios","formControlName","ins_cab_apl",2,"width","50%",3,"ionChange"],["mode","ios","formControlName","ins_cab_aj_rev_cp6"],["type","text","maxlength","80","formControlName","ins_cab_me_val_cp6"],["mode","ios","formControlName","ins_cab_me_rev_cp6"],["mode","ios","formControlName","ins_ent_ve1_rev_cp6"],["mode","ios","formControlName","ins_ent_ve2_rev_cp6"],["mode","ios","formControlName","pru_rea_gi_rev_cp6"],["type","text","maxlength","80","formControlName","pru_rea_co_val_cp6"],["type","text","maxlength","80","formControlName","pru_rea_co_rev_cp6"],["mode","ios","formControlName","ban_pru_pr_rev_cp6"],["mode","ios","formControlName","rev_fin_rev_rev_cp6"],["type","text","maxlength","80","formControlName","rev_fin_med_val_cp6"],["mode","ios","formControlName","rev_fin_med_rev_cp6"],["mode","ios","formControlName","rev_fin_ins_rev_cp6"],["mode","ios","formControlName","rev_fin_revaju_rev_cp6"],["mode","ios","formControlName","rev_fin_pint_rev_cp6"],["mode","ios","formControlName","rev_fin_inst_rev_cp6"],["formControlName","revi_respsble_obs_cp6",2,"width","100%","height","30px",3,"disabled"],[2,"text-align","center"],["mode","ios","formControlName","idestado_revi_paso6_cp6",1,"ion_segment_3d",2,"width","110%"],["value","1","layout","icon-end",3,"click"],["name","close","color","danger"],["color","danger"],["value","2","layout","icon-end",3,"click"],["color","success","name","checkmark"],["color","success"],["value","3","layout","icon-end",3,"disabled","click"],["name","star"],["color","secondary"],["value","4","layout","icon-end",3,"disabled","click"],["color","warning","name","alert"],["color","warning"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-item")(3,"ion-title",1)(4,"ion-label"),e._uU(5,"PRUEBA EN POZA Y REVISION FINAL "),e.TgZ(6,"p"),e._uU(7,"CONEXI\xd3N Y PRUEBA"),e.qZA()()(),e.TgZ(8,"form",2,3)(10,"ion-toggle",4),e.NdJ("ionChange",function(s){return n.SaveCheckNoAplicaPaso(s)}),e._uU(11,"Aplica Paso? "),e.qZA()()()()(),e.TgZ(12,"ion-content",5)(13,"form",2,3)(15,"ion-list",6)(16,"ion-item-divider")(17,"ion-toggle",7),e.NdJ("ionChange",function(s){return n.toggle1(s)}),e._uU(18," INSTALACION DE BORNERA A CABLES DEL MOTOR "),e.qZA()(),e.TgZ(19,"ion-item",8),e._UZ(20,"ion-label"),e.qZA(),e.TgZ(21,"ion-item-divider",9)(22,"ion-label"),e._uU(23," AJUSTE DE BORNERAS "),e.qZA()(),e.TgZ(24,"ion-item",8)(25,"ion-label")(26,"p"),e._uU(27,"REVISION"),e.qZA(),e.TgZ(28,"ion-segment",10)(29,"ion-segment-button",11)(30,"ion-label"),e._uU(31,"SI"),e.qZA()(),e.TgZ(32,"ion-segment-button",12)(33,"ion-label"),e._uU(34,"NO"),e.qZA()()()()(),e.TgZ(35,"ion-item-divider",9)(36,"ion-label"),e._uU(37," MEDICION DE AISLAMIENTO ( M\u2126) "),e.qZA()(),e.TgZ(38,"ion-item",8)(39,"ion-label")(40,"p"),e._uU(41,"VALOR"),e.qZA(),e._UZ(42,"ion-input",13),e.qZA()(),e.TgZ(43,"ion-item",8)(44,"ion-label")(45,"p"),e._uU(46,"REVISION"),e.qZA(),e.TgZ(47,"ion-segment",14)(48,"ion-segment-button",11)(49,"ion-label"),e._uU(50,"CONFORME"),e.qZA()(),e.TgZ(51,"ion-segment-button",12)(52,"ion-label"),e._uU(53,"NO CONFORME"),e.qZA()()()()(),e.TgZ(54,"ion-item",8),e._UZ(55,"ion-label"),e.qZA(),e.TgZ(56,"ion-item-divider")(57,"ion-toggle",15),e.NdJ("ionChange",function(s){return n.toggle2(s)}),e._uU(58," INSTALACION DE CABLES DE FUERZA A BORNERA "),e.qZA()(),e.TgZ(59,"ion-item",8),e._UZ(60,"ion-label"),e.qZA(),e.TgZ(61,"ion-item-divider",9)(62,"ion-label"),e._uU(63," AJUSTE DE BORNERAS "),e.qZA()(),e.TgZ(64,"ion-item",8)(65,"ion-label")(66,"p"),e._uU(67,"REVISION"),e.qZA(),e.TgZ(68,"ion-segment",16)(69,"ion-segment-button",11)(70,"ion-label"),e._uU(71,"SI"),e.qZA()(),e.TgZ(72,"ion-segment-button",12)(73,"ion-label"),e._uU(74,"NO"),e.qZA()()()()(),e.TgZ(75,"ion-item-divider",9)(76,"ion-label"),e._uU(77," MEDICION DE AISLAMIENTO ( M\u2126) "),e.qZA()(),e.TgZ(78,"ion-item",8)(79,"ion-label")(80,"p"),e._uU(81,"VALOR"),e.qZA(),e._UZ(82,"ion-input",17),e.qZA()(),e.TgZ(83,"ion-item",8)(84,"ion-label")(85,"p"),e._uU(86,"REVISION"),e.qZA(),e.TgZ(87,"ion-segment",18)(88,"ion-segment-button",11)(89,"ion-label"),e._uU(90,"CONFORME"),e.qZA()(),e.TgZ(91,"ion-segment-button",12)(92,"ion-label"),e._uU(93,"NO CONFORME"),e.qZA()()()()(),e.TgZ(94,"ion-item",8),e._UZ(95,"ion-label"),e.qZA(),e.TgZ(96,"ion-item-divider")(97,"ion-label"),e._uU(98,"AJUSTE DE ENTRADAS DE CABLE 1"),e.qZA()(),e.TgZ(99,"ion-item"),e._UZ(100,"ion-label"),e.qZA(),e.TgZ(101,"ion-item-divider",9)(102,"ion-label"),e._uU(103,"VERIFICACION DE AJUSTE"),e.qZA()(),e.TgZ(104,"ion-item",8)(105,"ion-label")(106,"p"),e._uU(107,"REVISION"),e.qZA(),e.TgZ(108,"ion-segment",19)(109,"ion-segment-button",11)(110,"ion-label"),e._uU(111,"SI"),e.qZA()(),e.TgZ(112,"ion-segment-button",12)(113,"ion-label"),e._uU(114,"NO"),e.qZA()()()()(),e.TgZ(115,"ion-item",8),e._UZ(116,"ion-label"),e.qZA(),e.TgZ(117,"ion-item-divider")(118,"ion-label"),e._uU(119,"AJUSTE DE ENTRADAS DE CABLE 2"),e.qZA()(),e.TgZ(120,"ion-item"),e._UZ(121,"ion-label"),e.qZA(),e.TgZ(122,"ion-item-divider",9)(123,"ion-label"),e._uU(124,"VERIFICACION DE AJUSTE"),e.qZA()(),e.TgZ(125,"ion-item",8)(126,"ion-label")(127,"p"),e._uU(128,"REVISION"),e.qZA(),e.TgZ(129,"ion-segment",20)(130,"ion-segment-button",11)(131,"ion-label"),e._uU(132,"SI"),e.qZA()(),e.TgZ(133,"ion-segment-button",12)(134,"ion-label"),e._uU(135,"NO"),e.qZA()()()()(),e.TgZ(136,"ion-item-divider")(137,"ion-label"),e._uU(138,"PRUEBA DE REACCION DE GIRO (VACIO)"),e.qZA()(),e.TgZ(139,"ion-item",8),e._UZ(140,"ion-label"),e.qZA(),e.TgZ(141,"ion-item-divider",9)(142,"ion-label"),e._uU(143,"GIRO ANTI HORARIO"),e.qZA()(),e.TgZ(144,"ion-item",8)(145,"ion-label")(146,"p"),e._uU(147,"REVISION"),e.qZA(),e.TgZ(148,"ion-segment",21)(149,"ion-segment-button",11)(150,"ion-label"),e._uU(151,"SI"),e.qZA()(),e.TgZ(152,"ion-segment-button",12)(153,"ion-label"),e._uU(154,"NO"),e.qZA()()()()(),e.TgZ(155,"ion-item-divider",9)(156,"ion-label"),e._uU(157," CONTROL "),e.qZA()(),e.TgZ(158,"ion-item",8)(159,"ion-label")(160,"p"),e._uU(161,"VALOR"),e.qZA(),e._UZ(162,"ion-input",22),e.qZA()(),e.TgZ(163,"ion-item",8)(164,"ion-label")(165,"p"),e._uU(166,"REVISION"),e.qZA(),e._UZ(167,"ion-input",23),e.qZA()(),e.TgZ(168,"ion-item",8),e._UZ(169,"ion-label"),e.qZA(),e.TgZ(170,"ion-item-divider")(171,"ion-label"),e._uU(172,"BANCO DE PRUEBA"),e.qZA()(),e.TgZ(173,"ion-item"),e._UZ(174,"ion-label"),e.qZA(),e.TgZ(175,"ion-item-divider",9)(176,"ion-label"),e._uU(177,"PROTOCOLO APROBADO"),e.qZA()(),e.TgZ(178,"ion-item",8)(179,"ion-label")(180,"p"),e._uU(181,"REVISION"),e.qZA(),e.TgZ(182,"ion-segment",24)(183,"ion-segment-button",11)(184,"ion-label"),e._uU(185,"SI"),e.qZA()(),e.TgZ(186,"ion-segment-button",12)(187,"ion-label"),e._uU(188,"NO"),e.qZA()()()()(),e.TgZ(189,"ion-item",8),e._UZ(190,"ion-label"),e.qZA(),e.TgZ(191,"ion-item-divider")(192,"ion-label"),e._uU(193," REVISION FINAL"),e.qZA()(),e.TgZ(194,"ion-item",8),e._UZ(195,"ion-label"),e.qZA(),e.TgZ(196,"ion-item-divider",9)(197,"ion-label"),e._uU(198," REVISION DE GIRO LIBRE (ARRANQUE EN VACIO) "),e.qZA()(),e.TgZ(199,"ion-item",8)(200,"ion-label")(201,"p"),e._uU(202,"REVISION"),e.qZA(),e.TgZ(203,"ion-segment",25)(204,"ion-segment-button",11)(205,"ion-label"),e._uU(206,"GIRA LIBRE"),e.qZA()(),e.TgZ(207,"ion-segment-button",12)(208,"ion-label"),e._uU(209,"TRABADO"),e.qZA()()()()(),e.TgZ(210,"ion-item-divider",9)(211,"ion-label"),e._uU(212,"MEDICION DE CORRIENTE (AMP)"),e.qZA()(),e.TgZ(213,"ion-item",8)(214,"ion-label")(215,"p"),e._uU(216,"VALOR"),e.qZA(),e._UZ(217,"ion-input",26),e.qZA()(),e.TgZ(218,"ion-item",8)(219,"ion-label")(220,"p"),e._uU(221,"REVISION"),e.qZA(),e.TgZ(222,"ion-segment",27)(223,"ion-segment-button",11)(224,"ion-label"),e._uU(225,"CONFORME"),e.qZA()(),e.TgZ(226,"ion-segment-button",12)(227,"ion-label"),e._uU(228,"NO CONFORME"),e.qZA()()()()(),e.TgZ(229,"ion-item",8),e._UZ(230,"ion-label"),e.qZA(),e.TgZ(231,"ion-item",8),e._UZ(232,"ion-label"),e.qZA(),e.TgZ(233,"ion-item-divider",9)(234,"ion-label"),e._uU(235,"INSPECCION DE ESTANQUEDAD DE TAPA DE BORNERA"),e.qZA()(),e.TgZ(236,"ion-item",8)(237,"ion-label")(238,"p"),e._uU(239,"REVISION"),e.qZA(),e.TgZ(240,"ion-segment",28)(241,"ion-segment-button",11)(242,"ion-label"),e._uU(243,"CONFORME"),e.qZA()(),e.TgZ(244,"ion-segment-button",12)(245,"ion-label"),e._uU(246,"NO CONFORME"),e.qZA()()()()(),e.TgZ(247,"ion-item-divider",9)(248,"ion-label"),e._uU(249,"REVISION DE AJUSTE DE TAPAS Y CONEXIONES DE CABLES"),e.qZA()(),e.TgZ(250,"ion-item",8)(251,"ion-label")(252,"p"),e._uU(253,"REVISION"),e.qZA(),e.TgZ(254,"ion-segment",29)(255,"ion-segment-button",11)(256,"ion-label"),e._uU(257,"CONFORME"),e.qZA()(),e.TgZ(258,"ion-segment-button",12)(259,"ion-label"),e._uU(260,"NO CONFORME"),e.qZA()()()()(),e.TgZ(261,"ion-item",8),e._UZ(262,"ion-label"),e.qZA(),e.TgZ(263,"ion-item-divider",9)(264,"ion-label"),e._uU(265,"PINTURA"),e.qZA()(),e.TgZ(266,"ion-item",8)(267,"ion-label")(268,"p"),e._uU(269,"REVISION"),e.qZA(),e.TgZ(270,"ion-segment",30)(271,"ion-segment-button",11)(272,"ion-label"),e._uU(273,"CONFORME"),e.qZA()(),e.TgZ(274,"ion-segment-button",12)(275,"ion-label"),e._uU(276,"NO CONFORME"),e.qZA()()()()(),e.TgZ(277,"ion-item-divider",9)(278,"ion-label"),e._uU(279,"INSTALACION DE DESCARGA"),e.qZA()(),e.TgZ(280,"ion-item",8)(281,"ion-label")(282,"p"),e._uU(283,"REVISION"),e.qZA(),e.TgZ(284,"ion-segment",31)(285,"ion-segment-button",11)(286,"ion-label"),e._uU(287,"CONFORME"),e.qZA()(),e.TgZ(288,"ion-segment-button",12)(289,"ion-label"),e._uU(290,"NO CONFORME"),e.qZA()()()()(),e.TgZ(291,"ion-item-divider"),e._uU(292," SUPERVISOR RESPONSABLE\n"),e.qZA(),e.TgZ(293,"ion-item")(294,"ion-label")(295,"p"),e._uU(296,"OBSERVACIONES:"),e.qZA(),e._UZ(297,"ion-textarea",32),e.qZA()()()()(),e.TgZ(298,"ion-footer")(299,"form",2,3)(301,"ion-grid")(302,"ion-row"),e._UZ(303,"ion-col"),e.TgZ(304,"ion-col",33)(305,"ion-segment",34)(306,"ion-segment-button",35),e.NdJ("click",function(){return n.SaveFormBorradorPaso1()}),e._UZ(307,"ion-icon",36),e.TgZ(308,"ion-label",37),e._uU(309,"BORRADOR"),e.qZA()(),e.TgZ(310,"ion-segment-button",38),e.NdJ("click",function(){return n.SaveFormTerminadoPaso1()}),e._UZ(311,"ion-icon",39),e.TgZ(312,"ion-label",40),e._uU(313,"TERMINADO"),e.qZA()(),e.TgZ(314,"ion-segment-button",41),e.NdJ("click",function(){return n.SaveFormTerminadoPaso1()}),e._UZ(315,"ion-icon",42),e.TgZ(316,"ion-label",43),e._uU(317,"VERIFICADO"),e.qZA()(),e.TgZ(318,"ion-segment-button",44),e.NdJ("click",function(){return n.SaveFormTerminadoPaso1()}),e._UZ(319,"ion-icon",45),e.TgZ(320,"ion-label",46),e._uU(321,"RECHAZADO"),e.qZA()()()(),e._UZ(322,"ion-col"),e.qZA()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",n.FormCheckListPaso6),e.xp6(5),e.Q6J("formGroup",n.FormCheckListPaso6),e.xp6(284),e.Q6J("disabled",n.disableButtonPaso1),e.xp6(2),e.Q6J("formGroup",n.FormCheckListPaso6),e.xp6(15),e.Q6J("disabled",n.disableButtonPaso1),e.xp6(4),e.Q6J("disabled",n.disableButtonPaso1))},dependencies:[o.Pc,o.wI,o.W2,o.fr,o.jY,o.Gu,o.gu,o.pK,o.Ie,o.rH,o.Q$,o.q_,o.Nd,o.cJ,o.GO,o.g2,o.wd,o.ho,o.sr,o.w,o.QI,o.j9,h.ez,t.u5,t._Y,t.JJ,t.JL,t.nD,t.UX,t.sg,t.u],styles:["ion-segment[_ngcontent-%COMP%]{width:75%}.nested_divider[_ngcontent-%COMP%]{width:80%;margin-left:40px}"]}),l})()}}]);