(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"+XZ6":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAutoFocusModule",(function(){return $}));var o=n("An66"),a=n("3kIJ"),l=n("1VvW"),c=n("SVIu"),i=n("l4xa"),u=n("Qq0t"),d=n("dvRg"),r=n("kZht"),s=n("OZlg"),p=n("e0eB"),m=n("iyc4"),f=n("zV1d"),b=n("GdrL"),h=n("71sB"),g=n("oW5P");function C(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tui-input",2),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().model=t})),r["\u0275\u0275text"](1," Focusable tui-input\n"),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngModel",e.model)}}let x=(()=>{class e{constructor(){this.showInput=!1,this.model="Focused after its appearance"}onClick(){this.showInput=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-auto-focus-example-1"]],decls:3,vars:1,consts:[["tuiButton","","type","button",1,"tui-space_bottom-5",3,"click"],["tuiAutoFocus","",3,"ngModel","ngModelChange",4,"ngIf"],["tuiAutoFocus","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"button",0),r["\u0275\u0275listener"]("click",(function(){return t.onClick()})),r["\u0275\u0275text"](1," Show input\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,C,2,1,"tui-input",1)),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.showInput))},directives:[f.a,o.t,b.a,h.a,g.a,a.NgControlStatus,a.NgModel],encapsulation:2,changeDetection:0}),e})();var S=n("u8jZ");const w=["header",$localize`:␟f9edaaf6c41c9cded402e1e3a7d560f335226273␟2512553398889197442:AutoFocus`],E=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var v;v=$localize`:␟4fd9ee3925d4f6cd90b8857aa8c26c7226380f1e␟6813366651971663120:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiAutoFocus${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components `;const A=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function T(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,v),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](4,A),r["\u0275\u0275element"](5,"tui-auto-focus-example-1"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example1)}}var y,M;function I(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,y),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,M),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",e.exampleHtml)}}y=$localize`:␟6eb38541c615c02bbbaa2361faeb207881234045␟1923648485573346644: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAutoFocus${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let k=(()=>{class e{constructor(){this.exampleModule=n.e(1454).then(n.bind(null,"7JRZ")),this.exampleHtml=n.e(1455).then(n.bind(null,"9vSP")),this.example1={TypeScript:n.e(1453).then(n.bind(null,"oOeH")),HTML:n.e(1452).then(n.bind(null,"HaVf"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-auto-focus"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,w),r["\u0275\u0275template"](2,T,6,1,"ng-template",1),r["\u0275\u0275template"](3,I,10,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](4,E),r["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,m.a,x,S.a],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,d.bb,i.X,u.ab,c.j,l.f.forChild(Object(c.q)(k))]]}),e})()}}]);