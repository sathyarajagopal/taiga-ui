(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{gjbm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTableBarModule",(function(){return U}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),l=n("T8fS"),r=n("SVIu"),c=n("Qq0t"),s=n("dvRg"),d=n("cWK9"),m=n("vhpW"),u=n("ZTXN"),p=n("bwdy"),b=n("kuMc"),h=n("kZht"),f=n("OZlg"),y=n("e0eB"),S=n("iyc4"),v=n("zV1d"),T=n("TxeG");const E=["tableBarTemplate"];function C(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",2),h["\u0275\u0275elementStart"](1,"button",3),h["\u0275\u0275text"](2," Save "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"button",4),h["\u0275\u0275listener"]("click",(function(){return(0,t.$implicit)()})),h["\u0275\u0275text"](4," Cancel "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"button",5),h["\u0275\u0275text"](6," Delete "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}let x=(()=>{class e{constructor(e){this.tableBarsService=e,this.tableBarTemplate="",this.subscription=new p.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](E,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"button",0),h["\u0275\u0275listener"]("click",(function(){return t.showTableBar()})),h["\u0275\u0275text"](1," Show TableBar\n"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](2,C,7,0,"ng-template",null,1,h["\u0275\u0275templateRefExtractor"]))},directives:[v.a,T.a],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),e})();var g=n("yHor"),B=n("zGJC"),w=n("u8jZ");const V=["tableBarTemplate"];var P;P=$localize`:␟05d4df37c18ee658a26e40dcb633f2f1dd0fa7aa␟1919187952417466728: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `;const $=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function _(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"p"),h["\u0275\u0275i18n"](1,P),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](2,"tui-doc-example",2),h["\u0275\u0275i18nAttributes"](3,$),h["\u0275\u0275element"](4,"tui-table-bar-example-1"),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("content",e.example1)}}function O(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"p"),h["\u0275\u0275text"](1,"Some template"),h["\u0275\u0275elementEnd"]())}var z,A,D,k,L,M,G;function R(e,t){1&e&&h["\u0275\u0275i18n"](0,z)}function j(e,t){1&e&&h["\u0275\u0275i18n"](0,A)}function I(e,t){1&e&&h["\u0275\u0275i18n"](0,D)}function H(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"button",3),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().showTableBar()})),h["\u0275\u0275text"](2," Show tableBar "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"button",4),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().destroy()})),h["\u0275\u0275text"](4," Hide tableBar "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](5,O,2,0,"ng-template",null,5,h["\u0275\u0275templateRefExtractor"]),h["\u0275\u0275element"](7,"br"),h["\u0275\u0275elementStart"](8,"tui-doc-documentation"),h["\u0275\u0275template"](9,R,1,0,"ng-template",6),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().adaptive=t})),h["\u0275\u0275template"](10,j,1,0,"ng-template",7),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().hasCloseButton=t})),h["\u0275\u0275template"](11,I,1,0,"ng-template",8),h["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().mode=t})),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](9),h["\u0275\u0275property"]("documentationPropertyValue",e.adaptive),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValue",e.hasCloseButton),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode)}}function N(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ol",9),h["\u0275\u0275elementStart"](1,"li"),h["\u0275\u0275elementStart"](2,"p"),h["\u0275\u0275i18nStart"](3,k),h["\u0275\u0275element"](4,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](5,"tui-doc-code",10),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"li"),h["\u0275\u0275elementStart"](7,"p"),h["\u0275\u0275i18nStart"](8,L),h["\u0275\u0275element"](9,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](10,"tui-doc-code",10),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"li"),h["\u0275\u0275elementStart"](12,"p"),h["\u0275\u0275i18nStart"](13,M),h["\u0275\u0275element"](14,"code"),h["\u0275\u0275element"](15,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](16,"tui-doc-code",11),h["\u0275\u0275element"](17,"tui-doc-code",12),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"li"),h["\u0275\u0275elementStart"](19,"p"),h["\u0275\u0275i18nStart"](20,G),h["\u0275\u0275element"](21,"code"),h["\u0275\u0275i18nEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](22,"tui-doc-code",13),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleModule),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleHtml),h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("code",e.exampleServiceUsageHtml),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("code",e.exampleServiceUsage),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("code",e.exampleLazyModule)}}z=$localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `,A=$localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `,D=$localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `,k=$localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTableBarsHostModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,L=$localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-table-bars-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: into your app.template `,M=$localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:`,M=h["\u0275\u0275i18nPostprocess"](M),G=$localize`:␟943913395bbc8575620ded56eb7590932890b0e8␟4557069972581195317: If you use component in lazy loading modules, do not forget to pass into ${"\ufffd#21\ufffd"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\ufffd/#21\ufffd"}:CLOSE_TAG_CODE: of component where you open table bar `;let Q=(()=>{class e{constructor(e){this.tableBarsService=e,this.destroy$=new u.a,this.tableBarTemplate="",this.exampleServiceUsage=n.e(1755).then(n.bind(null,"cLb/")),this.exampleServiceUsageHtml=n.e(1754).then(n.bind(null,"CXUX")),this.exampleLazyModule=n.e(1752).then(n.bind(null,"zmd9")),this.exampleModule=n.e(1753).then(n.bind(null,"v5DE")),this.exampleHtml=n.e(1756).then(n.bind(null,"ENow")),this.example1={TypeScript:n.e(1751).then(n.bind(null,"Kt0U")),HTML:n.e(1749).then(n.bind(null,"bfyz")),LESS:n.e(1750).then(n.bind(null,"5E6D"))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new p.a}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe(Object(b.a)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](V,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.tableBarTemplate=n.first)},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],["id","base",3,"content",6,"heading"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"tui-doc-page",0),h["\u0275\u0275template"](1,_,5,1,"ng-template",1),h["\u0275\u0275template"](2,H,12,4,"ng-template",1),h["\u0275\u0275template"](3,N,23,5,"ng-template",1),h["\u0275\u0275elementEnd"]())},directives:[f.a,y.a,S.a,x,v.a,g.a,B.a,w.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),U=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.ab,l.g,d.c,s.zb,s.bb,c.yb,o.FormsModule,c.Db,r.j,i.f.forChild(Object(r.q)(Q))]]}),e})()}}]);