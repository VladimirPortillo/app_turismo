"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9687],{9687:(y,r,s)=>{s.r(r),s.d(r,{ActividadesPageModule:()=>$});var c=s(177),u=s(4341),n=s(3819),v=s(8465),t=s(3953),g=s(9437),f=s(6354),l=s(8810),h=s(5312),p=s(1626);const m=h.c.urlApi;let A=(()=>{var e;class o{constructor(i){this.http=i}obtenerActividades(){return this.http.get(`${m}/actividades`,{responseType:"json",observe:"response"}).pipe((0,g.W)(this.handleError),(0,f.T)(i=>i))}handleError(i){return console.log("Error servicio ",i),0===i.status?(console.log("Error servicio ",i),(0,l.$)({mensajes:[{tipo:"error",descripcion:"No tienes conexi\xf3n a internet"}]})):(0,l.$)(i.error)}}return(e=o).\u0275fac=function(i){return new(i||e)(t.KVO(p.Qq))},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),o})();function P(e,o){1&e&&(t.j41(0,"ion-text"),t.EFF(1,"Cargando..."),t.k0s())}function F(e,o){if(1&e&&(t.j41(0,"ion-card"),t.nrm(1,"img",7),t.j41(2,"ion-card-header")(3,"ion-card-title"),t.EFF(4),t.k0s(),t.j41(5,"ion-card-subtitle"),t.EFF(6),t.k0s()(),t.j41(7,"ion-card-content"),t.EFF(8),t.k0s()()),2&e){const a=o.$implicit;t.R7$(4),t.JRh(a.nombre),t.R7$(2),t.JRh(a.direccion),t.R7$(2),t.JRh(a.descripcion)}}function j(e,o){if(1&e&&(t.j41(0,"div"),t.nrm(1,"ion-searchbar",5),t.DNE(2,F,9,3,"ion-card",6),t.k0s()),2&e){const a=t.XpG();t.R7$(2),t.Y8G("ngForOf",a.actividades)}}const R=[{path:"",component:(()=>{var e;class o{constructor(i){this.actividadesService=i,this.actividades=[],this.loading=!0}ngOnInit(){this.getActividades()}getActividades(){this.actividadesService.obtenerActividades().subscribe(i=>{console.log("actividades",i.body),this.actividades=i.body,this.loading=!1},i=>{console.log("error actividades",i)})}}return(e=o).\u0275fac=function(i){return new(i||e)(t.rXU(A))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-actividades"]],decls:9,vars:4,consts:[[3,"translucent"],["slot","start"],["defaultHref","/"],[3,"fullscreen"],[4,"ngIf"],["color","light","placeholder","Buscar..."],[4,"ngFor","ngForOf"],["alt","Silhouette of mountains","width","100%","src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPz1LMXVoDPBhDxR31vTkmcIjOw79fTZFFw&s"]],template:function(i,d){1&i&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Actividades"),t.k0s()()(),t.j41(6,"ion-content",3),t.DNE(7,P,2,0,"ion-text",4)(8,j,3,1,"div",4),t.k0s()),2&i&&(t.Y8G("translucent",!0),t.R7$(6),t.Y8G("fullscreen",!0),t.R7$(),t.Y8G("ngIf",d.loading),t.R7$(),t.Y8G("ngIf",!d.loading))},dependencies:[c.Sq,c.bT,n.QW,n.b_,n.I9,n.ME,n.HW,n.tN,n.W9,n.eU,n.S1,n.IO,n.BC,n.ai,n.Gw,n.el]}),o})()}];let E=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[v.iI.forChild(R),v.iI]}),o})(),$=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[c.MD,u.YN,n.bv,E]}),o})()}}]);