"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4939,8654,4028,9485,6172,7152,7779,1902,6039,7016,8553,1490,5494,7007,5932,3475,3605,7756,6400,7969,6041,3541],{3984:(f,h,a)=>{a.d(h,{L:()=>_});var l=a(5861),P=a(2519),n=a(6242),d=a(9862),m=a(2014);let _=(()=>{var c;class p{constructor(r,t){this.httpClient=r,this.storage=t,this.urlApiProd=P.N.UrlDomainLocal+"aw_modulos/mante/api/CApiCheckListMontaje.php",this.confirmRequest=""}ListFindOts(r,t,o){let e=JSON.stringify({acc:1,s:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}SaveCheckListCab(r,t,o){let e=JSON.stringify({acc:2,id_orden_trab_cab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}FormFindPaso1(r,t,o){let e=JSON.stringify({acc:3,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}FormFindPaso2(r,t,o){let e=JSON.stringify({acc:5,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}GuardarFormPaso1(r){var t=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",r);let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=4",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}GuardarFormPaso2(r){var t=this;return(0,l.Z)(function*(){console.log("Dentro::GuardarFormulario::>",r);let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=6",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}FormFindPaso3(r,t,o){let e=JSON.stringify({acc:7,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}GuardarFormPaso3(r){var t=this;return(0,l.Z)(function*(){let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=8",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}FormFindPaso4(r,t,o){let e=JSON.stringify({acc:9,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}GuardarFormPaso4(r){var t=this;return(0,l.Z)(function*(){let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=10",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}FormFindPaso5(r,t,o){let e=JSON.stringify({acc:11,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}GuardarFormPaso5(r){var t=this;return(0,l.Z)(function*(){let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=12",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}FormFindPaso6(r,t,o){let e=JSON.stringify({acc:13,idchecklistcab:r,idusu:t,iddevice:o});return this.httpClient.post(this.urlApiProd,e).toPromise().then(i=>i)}GuardarFormPaso6(r){var t=this;return(0,l.Z)(function*(){let o,e=t.urlApiProd,i=JSON.stringify(r);return t.httpClient.post(e+"?acc=14",i).toPromise().then(s=>{console.log(s),o=s,t.confirmSaveBd=o[0].o_nres,t.confirmRequest=o},s=>{console.log(s,"Error- something is wrong!")})})()}GuardarAplicaPaso(r,t,o){var e=this;return(0,l.Z)(function*(){let i,g,s=e.urlApiProd;g={idchecklistcab:r,numeroPaso:t,ck:o};let C=JSON.stringify(g);return e.httpClient.post(s+"?acc=15",C).toPromise().then(u=>{console.log(u),i=u,e.confirmSaveBd=i[0].o_nres,e.confirmRequest=i},u=>{console.log(u,"Error- something is wrong!")})})()}}return(c=p).\u0275fac=function(r){return new(r||c)(n.LFG(d.eN),n.LFG(m.K))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),p})()},6172:(f,h,a)=>{a.d(h,{X:()=>P});var l=a(6242);let P=(()=>{var n;class d{constructor(){console.log("UserProfileService.Constructor invoked.")}}return(n=d).\u0275fac=function(_){return new(_||n)},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),d})()}}]);