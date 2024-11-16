"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1897],{1897:(u,c,a)=>{a.r(c),a.d(c,{ComunidadesPageModule:()=>F});var l=a(177),U=a(4341),i=a(3819),S=a(8465),o=a(3953),d=a(9437),K=a(6354),C=a(8810),Q=a(5312),m=a(1626);const B=Q.c.urlApi;let J=(()=>{var t;class n{constructor(A){this.http=A}obtenerComunidades(){return this.http.get(`${B}/comunidades`,{responseType:"json",observe:"response"}).pipe((0,d.W)(this.handleError),(0,K.T)(A=>A))}handleError(A){return console.log("Error servicio ",A),0===A.status?(console.log("Error servicio ",A),(0,C.$)({mensajes:[{tipo:"error",descripcion:"No tienes conexi\xf3n a internet"}]})):(0,C.$)(A.error)}}return(t=n).\u0275fac=function(A){return new(A||t)(o.KVO(m.Qq))},t.\u0275prov=o.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),n})();function r(t,n){1&t&&(o.j41(0,"ion-text"),o.EFF(1,"Cargando..."),o.k0s())}function E(t,n){if(1&t&&(o.j41(0,"ion-card"),o.nrm(1,"img",10),o.j41(2,"ion-card-header")(3,"ion-card-title"),o.EFF(4),o.k0s(),o.j41(5,"ion-card-subtitle"),o.EFF(6),o.k0s()(),o.j41(7,"ion-card-content"),o.EFF(8),o.k0s(),o.j41(9,"ion-button",11),o.EFF(10,"Ver mas..."),o.k0s()()),2&t){const e=n.$implicit;o.R7$(4),o.JRh(e.nombre),o.R7$(2),o.JRh(e.direccion),o.R7$(2),o.JRh(e.descripcion)}}function p(t,n){if(1&t&&(o.j41(0,"div"),o.nrm(1,"ion-searchbar",8),o.DNE(2,E,11,3,"ion-card",9),o.k0s()),2&t){const e=o.XpG();o.R7$(2),o.Y8G("ngForOf",e.comunidades)}}const h=[{path:"",component:(()=>{var t;class n{constructor(A){this.comunidadesService=A,this.comunidades=[],this.loading=!0}ngOnInit(){this.getComunidades()}getComunidades(){this.comunidadesService.obtenerComunidades().subscribe(A=>{console.log("comunidades",A.body),this.comunidades=A.body,this.loading=!1},A=>{console.log("error comunidades",A)})}}return(t=n).\u0275fac=function(A){return new(A||t)(o.rXU(J))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-comunidades"]],decls:15,vars:4,consts:[[3,"translucent"],[1,"volver"],["slot","start"],["defaultHref","/"],[3,"fullscreen"],[1,"contenedor-centrado"],["color","light",1,"titulo"],[4,"ngIf"],["color","light","placeholder","Buscar..."],[4,"ngFor","ngForOf"],["alt","Silhouette of mountains","width","100%","src","data:image/jpeg;base64,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"],["fill","clear"]],template:function(A,s){1&A&&(o.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o.nrm(3,"ion-back-button",3),o.k0s(),o.nrm(4,"ion-title"),o.k0s()(),o.j41(5,"ion-content",4)(6,"div",5)(7,"ion-card",6)(8,"ion-card-header"),o.nrm(9,"ion-card-title"),o.k0s(),o.j41(10,"ion-card-content")(11,"P"),o.EFF(12," Comunidades "),o.k0s()()()(),o.DNE(13,r,2,0,"ion-text",7)(14,p,3,1,"div",7),o.k0s()),2&A&&(o.Y8G("translucent",!0),o.R7$(5),o.Y8G("fullscreen",!0),o.R7$(8),o.Y8G("ngIf",s.loading),o.R7$(),o.Y8G("ngIf",!s.loading))},dependencies:[l.Sq,l.bT,i.Jm,i.QW,i.b_,i.I9,i.ME,i.HW,i.tN,i.W9,i.eU,i.S1,i.IO,i.BC,i.ai,i.Gw,i.el],styles:[".contenedor-centrado[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.titulo[_ngcontent-%COMP%]{width:100%;text-align:center}.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:x-large;font-weight:700}.volver[_ngcontent-%COMP%]{background:#fff}"]}),n})()}];let g=(()=>{var t;class n{}return(t=n).\u0275fac=function(A){return new(A||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[S.iI.forChild(h),S.iI]}),n})(),F=(()=>{var t;class n{}return(t=n).\u0275fac=function(A){return new(A||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[l.MD,U.YN,i.bv,g]}),n})()}}]);