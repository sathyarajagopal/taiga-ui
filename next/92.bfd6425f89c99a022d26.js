(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"j+7j":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPdfViewerModule",(function(){return B}));var i=n("An66"),o=n("1VvW"),c=n("SVIu"),r=n("Qq0t"),a=n("dvRg"),l=n("kZht"),s=n("OZlg"),p=n("e0eB"),u=n("aPft"),d=n("iyc4"),m=n("ENSU"),f=n("zV1d");function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"a",3),l["\u0275\u0275text"](1," Download "),l["\u0275\u0275elementEnd"]()),2&e&&l["\u0275\u0275property"]("href",t.content,l["\u0275\u0275sanitizeUrl"])}let v=(()=>{class e{constructor(e,t){this.sanitizer=e,this.pdfService=t}show(e){this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf"),{label:"Taiga UI",actions:e}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.DomSanitizer),l["\u0275\u0275directiveInject"](a.tb))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pdf-viewer-example-1"]],decls:6,vars:0,consts:[[1,"tui-space_bottom-3"],["tuiButton","",3,"click"],["actions",""],["tuiButton","","shape","rounded","size","s","download","",3,"href"]],template:function(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tui-notification",0),l["\u0275\u0275text"](1," Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"button",1),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=l["\u0275\u0275reference"](5);return t.show(n)})),l["\u0275\u0275text"](3," Taiga\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,h,2,1,"ng-template",null,2,l["\u0275\u0275templateRefExtractor"])}},directives:[u.a,f.a],encapsulation:2,changeDetection:0}),e})();var g=n("cWK9"),x=n("TLy2");function b(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",1),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit,i=l["\u0275\u0275nextContext"]();return n.onClick(i.context)})),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let w=(()=>{class e{constructor(e){this.context=e}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["tuiButton","","size","s","shape","rounded","class","tui-space_left-3",3,"click",4,"ngFor","ngForOf"],["tuiButton","","size","s","shape","rounded",1,"tui-space_left-3",3,"click"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,b,2,1,"button",0),2&e&&l["\u0275\u0275property"]("ngForOf",t.context.data)},directives:[i.s,f.a],encapsulation:2}),e})();var S=n("8lHc"),y=n("7SLS"),C=n("HUEM");function E(e,t){1&e&&l["\u0275\u0275element"](0,"iframe",2),2&e&&l["\u0275\u0275property"]("src",t.ngIf,l["\u0275\u0275sanitizeResourceUrl"])}function k(e,t){1&e&&l["\u0275\u0275element"](0,"tui-loader",3)}let I=(()=>{class e{constructor(e){this.sanitizer=e,this.src$=Object(S.a)(3e3).pipe(Object(y.a)(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf")))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.DomSanitizer))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:4,vars:4,consts:[[3,"src",4,"ngIf","ngIfElse"],["loading",""],[3,"src"],["size","xl"]],template:function(e,t){if(1&e&&(l["\u0275\u0275template"](0,E,1,1,"iframe",0),l["\u0275\u0275pipe"](1,"async"),l["\u0275\u0275template"](2,k,1,0,"ng-template",null,1,l["\u0275\u0275templateRefExtractor"])),2&e){const e=l["\u0275\u0275reference"](3);l["\u0275\u0275property"]("ngIf",l["\u0275\u0275pipeBind1"](1,2,t.src$))("ngIfElse",e)}},directives:[i.t,C.a],pipes:[i.b],styles:["[_nghost-%COMP%] { display: flex; height: 100% } [_nghost-%COMP%]    > *[_ngcontent-%COMP%] { flex: 1 }"]}),e})(),T=(()=>{class e{constructor(e,t){this.alertService=e,this.pdfService=t}show(){const e={label:"Taiga UI",actions:new g.b(w),data:[{text:"Sign",onClick:e=>e.completeWith("Document signed")},{text:"Deny",onClick:e=>e.completeWith("Document denied")}]};this.pdfService.open(new g.b(I),e).pipe(Object(x.a)(e=>this.alertService.open(e))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](r.Y),l["\u0275\u0275directiveInject"](a.tb))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pdf-viewer-example-2"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"button",0),l["\u0275\u0275listener"]("click",(function(){return t.show()})),l["\u0275\u0275text"](1," Taiga\n"),l["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var j=n("kSYu");function M(e,t){1&e&&l["\u0275\u0275element"](0,"iframe",2)}let z=(()=>{class e{constructor(){this.open=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pdf-viewer-example-3"]],decls:3,vars:1,consts:[["tuiButton","",3,"click"],[3,"tuiPdfViewer","tuiPdfViewerChange"],["src","assets/media/taiga.pdf",1,"iframe"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"button",0),l["\u0275\u0275listener"]("click",(function(){return t.open=!0})),l["\u0275\u0275text"](1," Taiga\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](2,M,1,0,"ng-template",1),l["\u0275\u0275listener"]("tuiPdfViewerChange",(function(e){return t.open=e}))),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("tuiPdfViewer",t.open))},directives:[f.a,j.a],styles:[".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),e})();var V=n("u8jZ");function O(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1,"Custom dialog to preview PDF"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-notification",3),l["\u0275\u0275text"](3," Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on "),l["\u0275\u0275elementStart"](4,"code"),l["\u0275\u0275text"](5,"TUI_IS_MOBILE"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](6," token to provide suitable alternative behavior "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-doc-example",4),l["\u0275\u0275element"](8,"tui-pdf-viewer-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"tui-doc-example",5),l["\u0275\u0275element"](10,"tui-pdf-viewer-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",6),l["\u0275\u0275element"](12,"tui-pdf-viewer-example-3"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example3)}}function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",7),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275text"](2," Import "),l["\u0275\u0275elementStart"](3,"code"),l["\u0275\u0275text"](4,"TuiPdfViewerModule"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](5," to your main app module: "),l["\u0275\u0275element"](6,"tui-doc-code",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"li"),l["\u0275\u0275text"](8," Show preview with a service: "),l["\u0275\u0275element"](9,"tui-doc-code",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("code",e.exampleModule),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("code",e.exampleService)}}let D=(()=>{class e{constructor(){this.exampleService=n.e(1065).then(n.bind(null,"HL60")),this.exampleModule=n.e(1064).then(n.bind(null,"d4Ml")),this.example1={TypeScript:n.e(1056).then(n.bind(null,"dwLb")),HTML:n.e(1055).then(n.bind(null,"COnf"))},this.example2={TypeScript:n.e(1059).then(n.bind(null,"BMaj")),HTML:n.e(1058).then(n.bind(null,"QQkl")),"actions-content.component.ts":n.e(1057).then(n.bind(null,"RrOu")),"pdf-content.component.ts":n.e(1060).then(n.bind(null,"N6b9"))},this.example3={TypeScript:n.e(1063).then(n.bind(null,"bogk")),HTML:n.e(1061).then(n.bind(null,"Ccep")),LESS:n.e(1062).then(n.bind(null,"juV8"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pdf-viewer"]],decls:3,vars:0,consts:[["header","PdfViewer","package","KIT"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","base","heading","Basic",3,"content"],["id","component","heading","Component",3,"content"],["id","directive","heading","Directive",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,O,13,3,"ng-template",1),l["\u0275\u0275template"](2,P,10,2,"ng-template",2),l["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,u.a,d.a,v,T,z,V.a],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,a.sb,r.zb,r.ab,r.Gb,c.j,o.f.forChild(Object(c.q)(D))]]}),e})()}}]);