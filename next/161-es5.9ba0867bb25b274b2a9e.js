function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f3b06b9633527e27b0a004a93f31a0d99acdf53b5\u241f1032108260146824709: Call ",":START_TAG_CODE:scroll$",":CLOSE_TAG_CODE: method and subscribe to returened ",":START_TAG_CODE:Observable",":CLOSE_TAG_CODE:: "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241fd75f7af257529fa13aec3f70fb1e06d52fd83dd9\u241f3696285066805987090: Inject ",":START_TAG_CODE:TuiScrollService",":CLOSE_TAG_CODE: into your component: "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241feb21efe1c6048b147dbd8b8a2e999f21f4b9c0ae\u241f8362795949308126709:",":START_TAG_STRONG:Optional",":CLOSE_TAG_STRONG:. Duration time in ms (0 for an instant scroll). "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f66b73d4f3242c9e09bfbb800c7470e5e74f4c561\u241f607229669815357867:",":START_TAG_STRONG:Optional",":CLOSE_TAG_STRONG:. Target position from left "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241ff1b6055ccf956ed74ee230f354dbfd6001c848ea\u241f4128706006600229434: Target position from top "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f1c588a396dbae7596fc24c0bb43376fa4c19f599\u241f8382346508948398477: Element to be scrolled "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f24f3df97f09eff7dadc94fd9b527ad64db03d695\u241f941049279682585203: Method ",":START_TAG_STRONG:",":START_TAG_CODE:scroll$: Observable<[number, number]>",":CLOSE_TAG_CODE:",":CLOSE_TAG_STRONG:",":START_EMPHASISED_TEXT:(emits a tuple tuple ",":START_TAG_CODE:[scrollTop, scrollLeft]",":CLOSE_TAG_CODE:)",":CLOSE_EMPHASISED_TEXT:"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa4a09c4b0d6af52311275a94f3004e2ecdf4d9ff\u241f125574219991762482:Interactive sample"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f5de0ed1a10693fe7bfcf452a4d062e7d6d4ef0d2\u241f7434814380312864429:A service for smooth scroll"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{"0qM5":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiScrollModule",(function(){return F}));var o,r,i=n("2kYt"),l=n("nIj0"),a=n("sEIs"),c=n("SVIu"),s=n("l4xa"),m=n("Qq0t"),d=n("dvRg"),u=n("EM62"),p=n("OZlg"),h=n("e0eB"),f=n("iyc4"),b=n("okGw"),g=n("zV1d"),y=n("3OZ8"),v=n("KAEk"),T=((o=function(){function e(t){_classCallCheck(this,e),this.scrollService=t,this.scrollTop=0,this.scrollLeft=0,this.duration=300}return _createClass(e,[{key:"onClick",value:function(e){var t=e.nativeElement;this.scrollService.scroll$(t,this.scrollTop,this.scrollLeft,this.duration).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||o)(u["\u0275\u0275directiveInject"](s.TuiScrollService))},o.\u0275cmp=u["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-scroll-example-1"]],decls:18,vars:3,consts:[[1,"flex"],[1,"element",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"element",3,"click"],["tuiElement","",1,"scrollbar"],["scrollRef","elementRef"],[1,"wrapper"]],template:function(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-input-count",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.scrollTop=e})),u["\u0275\u0275text"](2," scrollTop "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-input-count",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.scrollLeft=e})),u["\u0275\u0275text"](4," scrollLeft "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-count",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.duration=e})),u["\u0275\u0275text"](6," duration "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"button",2),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=u["\u0275\u0275reference"](10);return t.onClick(e)})),u["\u0275\u0275text"](8," Go! "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"tui-scrollbar",3,4),u["\u0275\u0275elementStart"](11,"div",5),u["\u0275\u0275elementStart"](12,"p"),u["\u0275\u0275text"](13," Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has been referred to as \"not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy\". "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"p"),u["\u0275\u0275text"](15," Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A self-contained comedy team responsible for both writing and performing their work, the Pythons had creative control which allowed them to experiment with form and content, discarding rules of television comedy. Following their television work, they began making films, which include Monty Python and the Holy Grail (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been apparent for years, while in North America, it has coloured the work of cult performers from the early editions of Saturday Night Live through to more recent absurdist trends in television comedy. \"Pythonesque\" has entered the English lexicon as a result. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275text"](17,' In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking world to find "The Comedian\'s Comedian", three of the six Pythons members were voted to be among the top 50 greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30. '),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngModel",t.scrollTop),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",t.scrollLeft),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",t.duration))},directives:[b.a,l.NgControlStatus,l.NgModel,g.a,y.a,v.a],styles:[".flex[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.element[_ngcontent-%COMP%]{width:10rem;margin:0 1rem 1rem 0}.scrollbar[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:25rem;max-height:18.75rem;background:var(--tui-secondary)}.wrapper[_ngcontent-%COMP%]{width:50rem;padding:0 1rem}"],changeDetection:0}),o),w=n("yHor"),S=n("zGJC"),_=n("u8jZ");r=$localize(_templateObject());var C,E,O,k,x,M,P,j=["heading",$localize(_templateObject2())];function L(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,r),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](3,j),u["\u0275\u0275element"](4,"tui-scroll-example-1"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",n.example1)}}function A(e,t){1&e&&u["\u0275\u0275i18n"](0,E)}function G(e,t){1&e&&u["\u0275\u0275i18n"](0,O)}function N(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,k),u["\u0275\u0275element"](1,"strong"),u["\u0275\u0275i18nEnd"]())}function B(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,x),u["\u0275\u0275element"](1,"strong"),u["\u0275\u0275i18nEnd"]())}function R(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",3),u["\u0275\u0275i18nStart"](1,C),u["\u0275\u0275elementStart"](2,"strong"),u["\u0275\u0275element"](3,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"em"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation",4),u["\u0275\u0275template"](7,A,1,0,"ng-template",5),u["\u0275\u0275template"](8,G,1,0,"ng-template",6),u["\u0275\u0275template"](9,N,2,0,"ng-template",7),u["\u0275\u0275template"](10,B,2,0,"ng-template",8),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("showValues",!1))}function I(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",9),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,M),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18nStart"](8,P),u["\u0275\u0275element"](9,"code"),u["\u0275\u0275element"](10,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](11,"tui-doc-code",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",n.exampleInjectService),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("code",n.exampleScroll)}}C=$localize(_templateObject3(),"\ufffd#2\ufffd","[\ufffd#3\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd/#2\ufffd","\ufffd#4\ufffd","[\ufffd#3\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd/#4\ufffd"),C=u["\u0275\u0275i18nPostprocess"](C),E=$localize(_templateObject4()),O=$localize(_templateObject5()),k=$localize(_templateObject6(),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),x=$localize(_templateObject7(),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),M=$localize(_templateObject8(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),P=$localize(_templateObject9(),"[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]","[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"),P=u["\u0275\u0275i18nPostprocess"](P);var D,$,z=(($=function e(){_classCallCheck(this,e),this.exampleImportModule="import {NgModule} from '@angular/core';\nimport {TuiScrollService} from '@taiga-ui/cdk';\n\n@NgModule({\n    ...\n    providers: [ TuiScrollService ],\n    ...\n",this.exampleInjectService="... \nconstructor(@Inject(TuiScrollService) private tuiScrollService: TuiScrollService) { }\n...\n",this.exampleScroll="this.tuiScrollService.scroll$( this.elementRef.nativeElement, 500 ).subscribe();\n",this.example1={TypeScript:"import {Component, ElementRef, Inject} from '@angular/core';\nimport {TuiScrollService} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-scroll-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollExample1 {\n    scrollTop = 0;\n    scrollLeft = 0;\n    duration = 300;\n\n    constructor(\n        @Inject(TuiScrollService) private readonly scrollService: TuiScrollService,\n    ) {}\n\n    onClick({nativeElement}: ElementRef<HTMLElement>) {\n        this.scrollService\n            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)\n            .subscribe();\n    }\n}\n",HTML:'<div class="flex">\n    <tui-input-count [(ngModel)]="scrollTop" class="element">\n        scrollTop\n    </tui-input-count>\n    <tui-input-count [(ngModel)]="scrollLeft" class="element">\n        scrollLeft\n    </tui-input-count>\n    <tui-input-count [(ngModel)]="duration" class="element">\n        duration\n    </tui-input-count>\n    <button\n        tuiButton\n        type="button"\n        class="element"\n        (click)="onClick(scrollRef)"\n    >\n        Go!\n    </button>\n</div>\n<tui-scrollbar #scrollRef="elementRef" tuiElement class="scrollbar">\n    <div class="wrapper">\n        <p>\n            Monty Python (also collectively known as the Pythons) were a British\n            surreal comedy group who created their sketch comedy show Monty\n            Python\'s Flying Circus, which first aired on the BBC in 1969.\n            Forty-five episodes were made over four series. The Python\n            phenomenon developed from the television series into something\n            larger in scope and impact, including touring stage shows, films,\n            numerous albums, several books, and musicals. The Pythons\' influence\n            on comedy has been compared to the Beatles\' influence on music.\n            Their sketch show has been referred to as "not only one of the more\n            enduring icons of 1970s British popular culture, but also an\n            important moment in the evolution of television comedy".\n        </p>\n        <p>\n            Broadcast by the BBC between 1969 and 1974, Monty Python\'s Flying\n            Circus was conceived, written, and performed by its members Graham\n            Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and\n            Michael Palin. Loosely structured as a sketch show, but with an\n            innovative stream-of-consciousness approach, aided by Gilliam\'s\n            animation, it pushed the boundaries of what was acceptable in style\n            and content. A self-contained comedy team responsible for both\n            writing and performing their work, the Pythons had creative control\n            which allowed them to experiment with form and content, discarding\n            rules of television comedy. Following their television work, they\n            began making films, which include Monty Python and the Holy Grail\n            (1975), Life of Brian (1979) and The Meaning of Life (1983). Their\n            influence on British comedy has been apparent for years, while in\n            North America, it has coloured the work of cult performers from the\n            early editions of Saturday Night Live through to more recent\n            absurdist trends in television comedy. "Pythonesque" has entered the\n            English lexicon as a result.\n        </p>\n        <p>\n            In a 2005 poll of over 300 comics, comedy writers, producers and\n            directors throughout the English-speaking world to find "The\n            Comedian\'s Comedian", three of the six Pythons members were voted to\n            be among the top 50 greatest comedians ever: Cleese at No. 2, Idle\n            at No. 21, and Palin at No. 30.\n        </p>\n    </div>\n</tui-scrollbar>\n',LESS:".flex {\n    display: flex;\n}\n\n.element {\n    width: 10rem;\n    margin: 0 1rem 1rem 0;\n}\n\n.scrollbar {\n    display: flex;\n    max-width: 25rem;\n    max-height: 18.75rem;\n    background: var(--tui-secondary);\n}\n\n.wrapper {\n    width: 50rem;\n    padding: 0 1rem;\n}\n"}}).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=u["\u0275\u0275defineComponent"]({type:$,selectors:[["example-tui-scrollbar"]],decls:4,vars:0,consts:[["header","ScrollService","package","CDK","path","cdk/services/scroll.service.ts"],["pageTab",""],["id","interactive",3,"content",6,"heading"],[1,"b-full-width"],[3,"showValues"],["documentationPropertyName","element","documentationPropertyType","Element"],["documentationPropertyName","scrollTop","documentationPropertyType","number"],["documentationPropertyName","scrollLeft","documentationPropertyType","number"],["documentationPropertyName","duration","documentationPropertyType","number"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,L,5,1,"ng-template",1),u["\u0275\u0275template"](2,R,11,1,"ng-template",1),u["\u0275\u0275template"](3,I,12,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[p.a,h.a,f.a,T,w.a,S.a,_.a],styles:[".wrapper[_ngcontent-%COMP%]{width:31.25rem;height:31.25rem;overflow:auto;padding:1.25rem;background-color:var(--tui-secondary)}@media (-webkit-min-device-pixel-ratio:0) and (min-resolution:0.001dpcm){.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar, .wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:6px solid transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.content[_ngcontent-%COMP%]{position:relative;width:62.5rem;height:62.5rem}"],changeDetection:0}),$),F=((D=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},providers:[s.TuiScrollService],imports:[[i.c,l.FormsModule,s.TuiElementModule,d.TuiInputCountModule,m.TuiButtonModule,m.TuiScrollbarModule,c.h,a.f.forChild(Object(c.o)(z))]]}),D)}}]);