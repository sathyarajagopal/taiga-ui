(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{OwDB:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiBadgedContentModule",(function(){return F}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),c=n("Qq0t"),l=n("dvRg"),d=n("kZht"),u=n("OZlg"),p=n("e0eB"),m=n("iyc4"),s=n("X//V"),g=n("cweO");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-badged-content-example-1"]],decls:14,vars:6,consts:[[1,"row"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","c d","size","l",3,"rounded"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","a b","size","l"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","e","size","l"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"tui-badged-content",1),d["\u0275\u0275element"](2,"tui-avatar",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-badged-content",3),d["\u0275\u0275element"](4,"tui-avatar",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-badged-content",5),d["\u0275\u0275element"](6,"tui-avatar",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",7),d["\u0275\u0275elementStart"](8,"tui-badged-content",8),d["\u0275\u0275element"](9,"tui-avatar",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"tui-badged-content",10),d["\u0275\u0275element"](11,"tui-avatar",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"tui-badged-content",12),d["\u0275\u0275element"](13,"tui-avatar",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0))},directives:[s.a,g.a],encapsulation:2,changeDetection:0}),e})();var f=n("GdrL"),b=n("71sB"),h=n("zV1d");function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",6),d["\u0275\u0275text"](1,"... and nothing happened"),d["\u0275\u0275elementEnd"]())}let T=(()=>{class e{constructor(){this.value="",this.contentTop=0}get badgeValue(){return this.value.length}get color(){return 50===this.contentTop?"tuiIconCheck":"var(--tui-error-fill)"}get contentBottom(){return""}onClick(){this.contentTop++}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-badged-content-example-2"]],decls:9,vars:6,consts:[["colorTop","var(--tui-support-01)",3,"contentTop"],[1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_top-5"],[3,"contentTop","contentBottom","colorTop"],["tuiButton","","type","button","appearance","secondary","size","xl",3,"disabled","click"],["customBadge",""],[1,"template"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-badged-content",0),d["\u0275\u0275elementStart"](1,"tui-input",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),d["\u0275\u0275text"](2," Input text "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",2),d["\u0275\u0275elementStart"](4,"tui-badged-content",3),d["\u0275\u0275elementStart"](5,"button",4),d["\u0275\u0275listener"]("click",(function(){return t.onClick()})),d["\u0275\u0275text"](6," Let's click 50 times ... "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](7,v,2,0,"ng-template",null,5,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](8);d["\u0275\u0275property"]("contentTop",t.badgeValue),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngModel",t.value),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("contentTop",t.contentTop)("contentBottom",50===t.contentTop?e:"")("colorTop",t.color),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("disabled",50===t.contentTop)}},directives:[s.a,f.a,b.a,a.NgControlStatus,a.NgModel,h.a],styles:[".template[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text);padding:0 .375rem}"],changeDetection:0}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-badged-content-example-3"]],decls:14,vars:10,consts:[[1,"row"],["contentTop","tuiIconCheckCircleLarge","colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"contentBottom","rounded"],["text","c d","size","l",3,"rounded"],["contentBottom","tuiIconSettings","colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop","rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","a b","size","l"],["contentBottom","tuiIconSettings","colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["contentBottom","tuiIconCheckCircleLarge","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","e","size","l"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"tui-badged-content",1),d["\u0275\u0275element"](2,"tui-avatar",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-badged-content",3),d["\u0275\u0275element"](4,"tui-avatar",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-badged-content",5),d["\u0275\u0275element"](6,"tui-avatar",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",7),d["\u0275\u0275elementStart"](8,"tui-badged-content",8),d["\u0275\u0275element"](9,"tui-avatar",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"tui-badged-content",10),d["\u0275\u0275element"](11,"tui-avatar",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"tui-badged-content",12),d["\u0275\u0275element"](13,"tui-avatar",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("contentBottom",64)("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("contentTop",64)("rounded",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("contentTop",64),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("contentTop",64))},directives:[s.a,g.a],encapsulation:2,changeDetection:0}),e})();var z,S=n("EPR0"),C=n("yHor"),E=n("zGJC"),P=n("u8jZ");z=$localize`:␟955141bd8a279601d271380dab8e72db391b8cbc␟5350008780160113262: BadgedContent is a wrapper for other components to add badges and notifications to them. `;const V=["heading",$localize`:␟2cafd3774163dbba7bfd8f323d1ec5e5daf29370␟5069453316184338315:with notification`],B=["heading",$localize`:␟09a7c1494df8e6916cbb3701edb1684ab3dc87bb␟929436895344517188:with different components`],w=["heading",$localize`:␟911b7fce6f9839becf82349838934c39f049a9bd␟4352677288238793646:with a badge and icon`];function _(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,z),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,V),d["\u0275\u0275element"](4,"tui-badged-content-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,B),d["\u0275\u0275element"](7,"tui-badged-content-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,w),d["\u0275\u0275element"](10,"tui-badged-content-example-3"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3)}}function M(e,t){1&e&&d["\u0275\u0275element"](0,"tui-avatar",14),2&e&&d["\u0275\u0275property"]("rounded",!0)}var I,$,L,k,O,D,A,N;function X(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,I),d["\u0275\u0275element"](1,"b"),d["\u0275\u0275i18nEnd"]())}function R(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,$),d["\u0275\u0275element"](1,"b"),d["\u0275\u0275i18nEnd"]())}function H(e,t){1&e&&d["\u0275\u0275i18n"](0,L)}function j(e,t){1&e&&d["\u0275\u0275i18n"](0,k)}function G(e,t){1&e&&d["\u0275\u0275i18n"](0,O)}function J(e,t){1&e&&d["\u0275\u0275i18n"](0,D)}function W(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-badged-content",5),d["\u0275\u0275element"](2,"tui-avatar",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,M,1,1,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-documentation"),d["\u0275\u0275template"](6,X,2,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().contentBottom=t})),d["\u0275\u0275template"](7,R,2,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().contentTop=t})),d["\u0275\u0275template"](8,H,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().colorBottom=t})),d["\u0275\u0275template"](9,j,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().colorTop=t})),d["\u0275\u0275template"](10,G,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().size=t})),d["\u0275\u0275template"](11,J,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().rounded=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275reference"](4),t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("contentTop","Template"===t.contentTop?e:t.contentTop)("contentBottom","Template"===t.contentBottom?e:t.contentBottom)("rounded",t.rounded)("colorTop",t.colorTop)("colorBottom",t.colorBottom)("size",t.size),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("rounded",t.rounded)("size",t.size),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.contentBottom),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.contentTop),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",t.colorBottom),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",t.colorTop),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",t.rounded)}}function q(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",15),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,A),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,N),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}I=$localize`:␟f7b141c8e74dba7316d16136643abac488fcddb5␟932985549614577710: Bottom right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\ufffd#1\ufffd"}:START_BOLD_TEXT:Warning:${"\ufffd/#1\ufffd"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `,$=$localize`:␟9ba0c6486b55335258d65d9dee344b7e600d5af9␟5899109405640997746: Top right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\ufffd#1\ufffd"}:START_BOLD_TEXT:Warning:${"\ufffd/#1\ufffd"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `,L=$localize`:␟dfb01c41c9e72b0c7cd50ee2c10464b9c4c9384a␟6293557483223795355: Bottom right content color. If there is no content, shows a small circle of this color. `,k=$localize`:␟28f5361172f173bd0b8879082e6dd777dc7f7cc8␟4344708617084344520: Top right content color. If there is no content, shows a small circle of this color. `,O=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,D=$localize`:␟6f3bd0a381b0f06876aa2784116206982c42c257␟8720720071780904257: Rounded mode `,A=$localize`:␟c4c036235fe0d58089ec47e1c5874ba94a02284e␟7293437017109719147: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBadgedContentModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,N=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Z=(()=>{class e{constructor(){this.exampleModule=n.e(428).then(n.bind(null,"VDzn")),this.exampleHtml=n.e(429).then(n.bind(null,"8waH")),this.example1={TypeScript:n.e(422).then(n.bind(null,"jEsu")),HTML:n.e(421).then(n.bind(null,"iWhD"))},this.example2={TypeScript:n.e(425).then(n.bind(null,"lmlG")),LESS:n.e(424).then(n.bind(null,"w9/E")),HTML:n.e(423).then(n.bind(null,"7TCX"))},this.example3={TypeScript:n.e(427).then(n.bind(null,"q7cY")),HTML:n.e(426).then(n.bind(null,"3ch+"))},this.rounded=!1,this.sizeVariants=["xs","s","m","l","xl","xxl"],this.size=this.sizeVariants[2],this.colorTop="",this.colorBottom="",this.contentTop="",this.contentBottom="",this.contentVariants=["",1,5,155,"tuiIconCheck","Template","tuiIconCheckCircleLarge"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-avatar"]],decls:4,vars:0,consts:[["header","BadgedContent","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","components",3,"content",6,"heading"],["id","badge",3,"content",6,"heading"],[3,"contentTop","contentBottom","rounded","colorTop","colorBottom","size"],["text","daenerys targaryen",3,"rounded","size"],["example",""],["documentationPropertyName","contentBottom","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","contentTop","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorBottom","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorTop","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","TuiSizeXS | TuiSizeXXL","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rounded","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["text","Example","size","s","avatarUrl","https://ng-web-apis.github.io/dist/assets/images/web-api.svg",3,"rounded"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,_,11,3,"ng-template",1),d["\u0275\u0275template"](2,W,12,17,"ng-template",1),d["\u0275\u0275template"](3,q,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,m.a,y,T,x,S.a,s.a,g.a,C.a,E.a,P.a],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,l.z,l.B,l.bb,c.ab,i.j,r.f.forChild(Object(i.q)(Z))]]}),e})()}}]);