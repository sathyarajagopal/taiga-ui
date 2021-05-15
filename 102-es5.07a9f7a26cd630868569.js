function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4\u241f4928000514802786074:Material icons"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f07b0fda377cb363bc8afb4b8d1e27abcee0554db\u241f1461335396876223787: If you want to bundle your icons, you need to provide ",":START_TAG_CODE:TUI_ICONS",":CLOSE_TAG_CODE: token with a dictionary of name to source code. If you want to move your icons to assets you need to process them with ",":START_LINK:this script",":CLOSE_LINK:. Drop it to the folder with your icons and run ",":START_TAG_CODE:node process-icons.js",":CLOSE_TAG_CODE:. Then move your icons to the assets folder and provide ",":START_TAG_CODE:TUI_ICONS_PATH",":CLOSE_TAG_CODE: as seen in example below: "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f3c22b929ddcf326204f9e406b9e4f2c08f507152\u241f4191926846451272027: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ",':START_TAG_CODE:img src="xxx"',":CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ",":START_TAG_CODE:color",":CLOSE_TAG_CODE: style. "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fe2163c2ddba5bf475f2ed90897b3a496f7ba87c1\u241f1098592464017048252: These are keys of following dictionaries: ",":START_TAG_CODE:tuiCoreIcons",":CLOSE_TAG_CODE: and ",":START_TAG_CODE:tuiKitIcons",":CLOSE_TAG_CODE:. It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa323f6e1d7a5309b2fb7299c49581c594087dabb\u241f2310079324053037193: Taiga UI uses ",":START_LINK:",":START_TAG_CODE:tui-svg",":CLOSE_TAG_CODE:",":CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fc08189fb00c55f045ae49b6c01419138998d0e41\u241f8811200965267882277:Icons set"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{JSON:function(e,t,n){"use strict";n.r(t),n.d(t,"IconSetModule",(function(){return R}));var o=n("HHFY"),a=n("2kYt"),i=n("nIj0"),r=n("sEIs"),c=n("SVIu"),l=n("Qq0t"),s=n("dvRg"),d=n("4C5Q"),u=n("EM62"),p=n("OZlg"),m=n("yZWP"),f=n("zV1d"),_=n("fRC/"),g=n("aPft"),b=n("iyc4"),T=n("Yj6K"),C=n("RlDx"),h=n("eB8V"),y={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function x(e){return"assets/icons/".concat(y[e],".svg#").concat(y[e])}var O,S,E,v,I,w=((O=function e(){_classCallCheck(this,e),this.date=null}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=u["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-icon-set-example-1"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:l.TUI_ICONS_PATH,useValue:x}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-notification"),u["\u0275\u0275text"](2," As usual with the DI this is hierarchical. Meaning you can provide different "),u["\u0275\u0275elementStart"](3,"code"),u["\u0275\u0275text"](4,"TUI_ICONS_PATH"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](5," and use different icons across your app. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-input-date-range",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e})),u["\u0275\u0275text"](7," Pick your favorite date range "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[g.a,T.a,C.a,h.b,i.NgControlStatus,i.NgModel],encapsulation:2}),O),A=n("ER+R"),k=["header",$localize(_templateObject())];S=$localize(_templateObject2(),"\ufffd#4\ufffd","\ufffd#5\ufffd","\ufffd/#5\ufffd","\ufffd/#4\ufffd"),E=$localize(_templateObject3(),"[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]","[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"),E=u["\u0275\u0275i18nPostprocess"](E),v=$localize(_templateObject4(),"[\ufffd#18\ufffd|\ufffd#19\ufffd]","[\ufffd/#18\ufffd|\ufffd/#19\ufffd]","[\ufffd#18\ufffd|\ufffd#19\ufffd]","[\ufffd/#18\ufffd|\ufffd/#19\ufffd]"),v=u["\u0275\u0275i18nPostprocess"](v),I=$localize(_templateObject5(),"[\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]","\ufffd#31\ufffd","\ufffd/#31\ufffd","[\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]","[\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"),I=u["\u0275\u0275i18nPostprocess"](I);var L=["heading",$localize(_templateObject6())];function j(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-copy",9),u["\u0275\u0275elementStart"](1,"code"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("cdkCopyToClipboard",n),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](n)}}var P,M,D=((M=function(){function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {TUI_ICONS_PATH} from '@taiga-ui/core';\n\nconst MAPPER: Record<string, string> = {\n    tuiIconCalendarLarge: 'date_range-24px',\n    tuiIconTooltipLarge: 'help-24px',\n    tuiIconInfo: 'info-16px',\n    tuiIconCloseLarge: 'clear-24px',\n    tuiIconChevronLeftLarge: 'keyboard_arrow_left-24px',\n    tuiIconChevronRightLarge: 'keyboard_arrow_right-24px',\n    // and so on\n};\n\n// This assumes that icons were properly processed\nexport function iconsPath(name: string): string {\n    return `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`;\n}\n\n@Component({\n    selector: 'tui-icon-set-example-1',\n    templateUrl: './index.html',\n    providers: [\n        {\n            provide: TUI_ICONS_PATH,\n            useValue: iconsPath,\n        },\n    ],\n})\nexport class TuiIconSetExample1 {\n    date = null;\n}\n",HTML:'<div class="b-form">\n    <tui-notification>\n        As usual with the DI this is hierarchical. Meaning you can provide\n        different <code>TUI_ICONS_PATH</code> and use different icons across\n        your app.\n    </tui-notification>\n    <tui-input-date-range\n        class="tui-space_top-4"\n        tuiHintContent="You can use any icons you want"\n        [tuiTextfieldCleaner]="true"\n        [(ngModel)]="date"\n    >\n        Pick your favorite date range\n    </tui-input-date-range>\n</div>\n'},this.names=Object.keys(d.tuiKitIcons),this.expanded=!1}return _createClass(e,[{key:"toggle",value:function(){this.expanded=!this.expanded}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=u["\u0275\u0275defineComponent"]({type:M,selectors:[["icon-set"]],decls:37,vars:3,consts:[[6,"header"],["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],["status","warning"],["tuiLink","","download","process-icons.js","href","assets/process-icons.js"],["id","material",3,"content",6,"heading"],[3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,k),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,S),u["\u0275\u0275elementStart"](4,"a",1),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"p"),u["\u0275\u0275elementStart"](7,"button",2),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](8,"Show names"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"tui-expand",3),u["\u0275\u0275elementStart"](10,"div",4),u["\u0275\u0275template"](11,j,3,2,"tui-doc-copy",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"p"),u["\u0275\u0275i18nStart"](13,E),u["\u0275\u0275element"](14,"code"),u["\u0275\u0275element"](15,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275i18nStart"](17,v),u["\u0275\u0275element"](18,"code"),u["\u0275\u0275element"](19,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"tui-notification",6),u["\u0275\u0275text"](21," Make sure you mark regions in your icons that need to be colored with "),u["\u0275\u0275elementStart"](22,"code"),u["\u0275\u0275text"](23,'fill="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](24," or "),u["\u0275\u0275elementStart"](25,"code"),u["\u0275\u0275text"](26,'stroke="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](27,". "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](28,"p"),u["\u0275\u0275i18nStart"](29,I),u["\u0275\u0275element"](30,"code"),u["\u0275\u0275element"](31,"a",7),u["\u0275\u0275element"](32,"code"),u["\u0275\u0275element"](33,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](34,"tui-doc-example",8),u["\u0275\u0275i18nAttributes"](35,L),u["\u0275\u0275element"](36,"tui-icon-set-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](9),u["\u0275\u0275property"]("expanded",t.expanded),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.names),u["\u0275\u0275advance"](23),u["\u0275\u0275property"]("content",t.example1))},directives:[p.a,m.a,r.e,f.a,_.a,a.s,g.a,b.a,w,A.a,o.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}"],changeDetection:0}),M),R=((P=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||P)},imports:[[a.c,i.FormsModule,o.c,c.j,l.TuiLinkModule,l.TuiExpandModule,l.TuiButtonModule,s.TuiInputDateRangeModule,l.TuiNotificationModule,l.TuiTextfieldControllerModule,l.TuiHintControllerModule,c.h,r.f.forChild(Object(c.o)(D))]]}),P)}}]);