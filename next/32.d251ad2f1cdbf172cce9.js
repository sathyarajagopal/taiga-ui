(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{gpkK:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLegendItemModule",(function(){return X}));var a=n("An66"),o=n("1VvW"),i=n("UTYu"),r=n("T8fS"),l=n("SVIu"),c=n("l4xa"),d=n("Qq0t"),m=n("cWK9"),u=n("kZht"),s=n("OZlg"),p=n("e0eB"),g=n("iyc4"),f=n("pdBE"),h=n("0/K7"),y=n("MyvS"),v=n("TYom");function x(e,t){if(1&e&&(u["\u0275\u0275element"](0,"tui-money",5),u["\u0275\u0275elementStart"](1,"div"),u["\u0275\u0275text"](2,"Total"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("singleColor",!0)("value",e.sum)}}function b(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-legend-item",6),u["\u0275\u0275listener"]("tuiHoveredChange",(function(n){u["\u0275\u0275restoreView"](e);const a=t.index;return u["\u0275\u0275nextContext"]().onHover(a,n)})),u["\u0275\u0275element"](1,"tui-money",5),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,a=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("color",a.getColor(n))("text",e)("active",a.isItemActive(n)),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("singleColor",!0)("value",a.value[n])}}let C=(()=>{class e{constructor(){this.activeItemIndex=NaN,this.value=[13769,12367,10172,3018,2592],this.sum=Object(c.ad)(...this.value),this.labels=["Food","Cafe","Open Source","Taxi","Other"]}isItemActive(e){return this.activeItemIndex===e}onHover(e,t){this.activeItemIndex=t?e:0}getColor(e){return`var(--tui-chart-${e})`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-legend-item-example-1"]],decls:6,vars:4,consts:[[1,"wrapper"],[3,"value","content","activeItemIndex","activeItemIndexChange"],["content",""],[1,"legend"],["size","s","class","item",3,"color","text","active","tuiHoveredChange",4,"ngFor","ngForOf"],[3,"singleColor","value"],["size","s",1,"item",3,"color","text","active","tuiHoveredChange"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-ring-chart",1),u["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](2,x,3,2,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementStart"](4,"div",3),u["\u0275\u0275template"](5,b,2,5,"tui-legend-item",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275reference"](3);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("value",t.value)("content",e)("activeItemIndex",t.activeItemIndex),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngForOf",t.labels)}},directives:[f.a,a.s,h.a,y.a,v.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (max-width:37.4375em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem}@media screen and (max-width:37.4375em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),e})();var P=n("D57K"),V=n("aPft"),S=n("e+JZ"),E=n("ONKv");function O(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-legend-item",4,5),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.index;return u["\u0275\u0275nextContext"]().onClick(n)}))("keydown.delete",(function(){u["\u0275\u0275restoreView"](e);const n=t.index;return u["\u0275\u0275nextContext"]().toggle(n)})),u["\u0275\u0275element"](2,"tui-primitive-checkbox",6),u["\u0275\u0275element"](3,"tui-money",7),u["\u0275\u0275elementStart"](4,"tui-svg",8),u["\u0275\u0275listener"]("click.stop",(function(){u["\u0275\u0275restoreView"](e);const n=t.index;return u["\u0275\u0275nextContext"]().toggle(n)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,a=u["\u0275\u0275reference"](1),o=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("color",o.getColor(n))("text",e)("disabled",!o.isEnabled(n)),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("value",!a.disabled),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("singleColor",!0)("value",o.data[n]),u["\u0275\u0275advance"](1),u["\u0275\u0275classProp"]("disable_rotated",a.disabled)}}let w=(()=>{class e{constructor(e){this.alertService=e,this.enabled=Array(5).fill(!0),this.data=[13769,12367,10172,3018,2592],this.sum=Object(c.ad)(...this.data),this.labels=["Axes","Faxes","Taxes","Saxes","Other"]}get value(){return this.getValue(this.data,this.enabled)}isEnabled(e){return this.enabled[e]}toggle(e){this.enabled=this.enabled.map((t,n)=>n===e?!t:t)}onClick(e){this.isEnabled(e)?this.alertService.open(`Category spendings: ${Object(d.hc)(this.data[e])} \u20bd`,{label:this.labels[e]}).subscribe():this.toggle(e)}getColor(e){return`var(--tui-chart-${e})`}getValue(e,t){return e.map((e,n)=>t[n]?e:0)}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](d.Y))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-legend-item-example-2"]],decls:6,vars:2,consts:[[1,"wrapper"],["size","s",1,"chart",3,"value"],[1,"legend"],["class","item",3,"color","text","disabled","click","keydown.delete",4,"ngFor","ngForOf"],[1,"item",3,"color","text","disabled","click","keydown.delete"],["item",""],[3,"value"],[3,"singleColor","value"],["src","tuiIconCloseLarge",1,"disable",3,"click.stop"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-notification"),u["\u0275\u0275text"](1," In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275element"](3,"tui-ring-chart",1),u["\u0275\u0275elementStart"](4,"div",2),u["\u0275\u0275template"](5,O,5,8,"tui-legend-item",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("value",t.value),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.labels))},directives:[V.a,f.a,a.s,y.a,S.a,h.a,E.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}.chart[_ngcontent-%COMP%]{pointer-events:none}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}@media screen and (max-width:37.4375em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.disable[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;margin-left:.25rem;will-change:transform;color:var(--tui-text-02);pointer-events:auto}.disable[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.disable_rotated[_ngcontent-%COMP%]{transform:rotate(45deg)}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;justify-content:center}@media screen and (max-width:37.4375em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),Object(P.b)([c.jd],e.prototype,"getValue",null),e})();var T=n("EPR0"),z=n("yHor"),I=n("zGJC"),M=n("u8jZ");const _=["header",$localize`:␟c3d93006062f75d305b66685eaedb021d62229ea␟1570614066977040018:LegendItem`];var $;$=$localize`:␟a984adcd40e5ae696a4b3641b5ebd09b4e409959␟6137055992947046886:A button for a legend of ring or pie charts`;const A=["heading",$localize`:␟c5f83f5f1db2e4c97d30936845035e24a84e150c␟1963043015047934208:With a ring chart`],k=["heading",$localize`:␟5abc3c7f09f347eb78d681bbc90e16a25693d41b␟5802298788264875787:Toggling`];function D(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,$),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](3,A),u["\u0275\u0275element"](4,"tui-legend-item-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,k),u["\u0275\u0275element"](7,"tui-legend-item-example-2"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2)}}var j,H,L,N,F,G,R,J;function K(e,t){1&e&&u["\u0275\u0275i18n"](0,H)}function q(e,t){1&e&&u["\u0275\u0275i18n"](0,L)}function B(e,t){1&e&&u["\u0275\u0275i18n"](0,N)}function Y(e,t){1&e&&u["\u0275\u0275i18n"](0,F)}function Z(e,t){1&e&&u["\u0275\u0275i18n"](0,G)}function Q(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"tui-legend-item",4),u["\u0275\u0275element"](2,"tui-money",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"p"),u["\u0275\u0275i18nStart"](4,j),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation"),u["\u0275\u0275template"](7,K,1,0,"ng-template",6),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().active=t})),u["\u0275\u0275template"](8,q,1,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().color=t})),u["\u0275\u0275template"](9,B,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().disabled=t})),u["\u0275\u0275template"](10,Y,1,0,"ng-template",9),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().size=t})),u["\u0275\u0275template"](11,Z,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().text=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("active",e.active)("disabled",e.disabled)("color",e.color)("text",e.text)("size",e.size),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("value",123456)("singleColor",!0),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("documentationPropertyValue",e.active),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.disabled),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.text)}}function W(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",11),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,R),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,J),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}j=$localize`:␟40d57b3cc3417571e6bc8c7bf65f54c61f261bd0␟4646256599536584910:${"\ufffd#5\ufffd"}:START_TAG_CODE:tui-money${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: is used to format currency and fraction `,H=$localize`:␟341b67b8b895f827a618e320d690de69209958c9␟4436855227670865152: Active state from outside `,L=$localize`:␟a6f48a1d27dd6e40e08f07ea7d1c2c39684112e5␟3329374499952540134: Indicator color `,N=$localize`:␟59f0d21ea503569692512c570b231cddeb9cd489␟4151472353635131004: Disabled item (i.e. hidden from the related chart) `,F=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,G=$localize`:␟998a01f32aef31a3065d9bfa168ba0a037f2ce0a␟7702365343132985223: Text inside `,R=$localize`:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,J=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let U=(()=>{class e{constructor(){this.exampleModule=n.e(334).then(n.bind(null,"F/LP")),this.exampleHtml=n.e(335).then(n.bind(null,"ODJQ")),this.example1={TypeScript:n.e(330).then(n.bind(null,"8GlR")),HTML:n.e(328).then(n.bind(null,"x6kq")),LESS:n.e(329).then(n.bind(null,"rOeD"))},this.example2={TypeScript:n.e(333).then(n.bind(null,"P4Qi")),HTML:n.e(331).then(n.bind(null,"zOBq")),LESS:n.e(332).then(n.bind(null,"d/sY"))},this.text="Text inside",this.active=!1,this.sizeVariants=["s","m"],this.colorVariants=["var(--tui-support-04)","var(--tui-primary)","var(--tui-secondary)"],this.size=this.sizeVariants[0],this.disabled=!1,this.color=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-legend-item"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","ring",3,"content",6,"heading"],["id","toggle",3,"content",6,"heading"],[3,"active","disabled","color","text","size"],[3,"value","singleColor"],["documentationPropertyName","active","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","TuiColor | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,_),u["\u0275\u0275template"](2,D,8,2,"ng-template",1),u["\u0275\u0275template"](3,Q,12,14,"ng-template",1),u["\u0275\u0275template"](4,W,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,g.a,C,w,T.a,y.a,h.a,z.a,I.a,M.a],encapsulation:2,changeDetection:0}),e})(),X=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.i,i.m,r.g,d.Lb,d.Vb,d.Gb,m.c,c.ub,l.j,o.f.forChild(Object(l.q)(U))]]}),e})()}}]);