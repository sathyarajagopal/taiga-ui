(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{LA0d:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiZoomModule",(function(){return O}));var o=n("An66"),a=n("1VvW"),l=n("SVIu"),i=n("l4xa"),c=n("kZht"),m=n("OZlg"),d=n("e0eB"),r=n("iyc4"),p=n("ZTXN"),s=n("SrNW"),u=n("jIqt"),b=n("YtkY"),f=n("GsCX");let h=(()=>{class e{constructor(){this.delta$=new p.a,this.scale$=this.delta$.pipe(Object(s.a)((e,t)=>Object(i.jc)(e+t,.5,3),1),Object(u.a)(1)),this.transform$=this.scale$.pipe(Object(b.a)(e=>`scale(${e})`))}onZoom({delta:e}){this.delta$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-zoom-example-1"]],decls:7,vars:10,consts:[[1,"t-container",3,"tuiZoom"],[1,"t-zoomable"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275listener"]("tuiZoom",(function(e){return t.onZoom(e)})),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275pipe"](2,"async"),c["\u0275\u0275elementStart"](3,"span"),c["\u0275\u0275text"](4),c["\u0275\u0275pipe"](5,"number"),c["\u0275\u0275pipe"](6,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275styleProp"]("transform",c["\u0275\u0275pipeBind1"](2,3,t.transform$)),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](5,5,c["\u0275\u0275pipeBind1"](6,8,t.scale$),"1.0-3")))},directives:[f.a],pipes:[o.b,o.g],styles:[".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.t-container[_ngcontent-%COMP%]{width:12rem;height:12rem;background-color:var(--tui-secondary)}.t-zoomable[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--tui-primary);border-radius:var(--tui-radius-l)}"],changeDetection:0}),e})();var g=n("u8jZ");const v=["header",$localize`:␟e76cd6dbaa898f85934f363fef654b29e44d004b␟6421460271971606186:Zoom`];var x;x=$localize`:␟8b02657b209c7003ad6767912739abaeba8c40e0␟4091126478260922324:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiZoom${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below `;const y=["heading",$localize`:␟1ea31081e50390f86dac9d44f30ce6d662d9b486␟8227596913155490392:Simple`];function C(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,x),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,y),c["\u0275\u0275element"](5,"tui-zoom-example-1"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1)}}var S,E;function w(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,S),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,E),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275element"](10,"tui-doc-code",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("code",e.exampleComponent)}}S=$localize`:␟b353d913cbd741c6c16613accf378b4da1d7201a␟2830324911231252653: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiZoomModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,E=$localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;let $=(()=>{class e{constructor(){this.exampleModule=n.e(1615).then(n.bind(null,"bX8R")),this.exampleHtml=n.e(1616).then(n.bind(null,"e0HG")),this.exampleComponent=n.e(1614).then(n.bind(null,"XaQT")),this.example1={TypeScript:n.e(1613).then(n.bind(null,"e108")),HTML:n.e(1612).then(n.bind(null,"+JAB0"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-zoom"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","multiple",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,v),c["\u0275\u0275template"](2,C,6,1,"ng-template",1),c["\u0275\u0275template"](3,w,11,3,"ng-template",2),c["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,r.a,h,g.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.fc,l.j,a.f.forChild(Object(l.q)($))]]}),e})()}}]);