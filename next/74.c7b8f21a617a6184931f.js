(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{eeyG:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputPhoneInternationalModule",(function(){return q}));var o=n("An66"),r=n("3kIJ"),a=n("1VvW"),i=n("SVIu"),u=n("Qq0t"),c=n("dvRg"),l=n("Piem"),d=n("kZht"),s=n("RyoY"),p=n("LusI"),m=n("K/iL"),y=n("OZlg"),h=n("e0eB"),C=n("iyc4"),f=n("J+bq"),b=n("gEyt"),g=n("zV1d");let x=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("+77777777777",r.Validators.required)}),this.countries=[s.a.RU,s.a.KZ,s.a.UA,s.a.BY],this.countryIsoCode=s.a.RU,this.contact={phone:"+375123456789",phoneCountryCode:s.a.BY}}patchValue(){var e;this.countryIsoCode=this.contact.phoneCountryCode,null===(e=this.testForm.get("testValue"))||void 0===e||e.patchValue(this.contact.phone)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-international-example-1"]],decls:4,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],["tuiButton","",1,"tui-space_top-4",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"tui-input-phone-international",1),d["\u0275\u0275listener"]("countryIsoCodeChange",(function(e){return t.countryIsoCode=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"button",2),d["\u0275\u0275listener"]("click",(function(){return t.patchValue()})),d["\u0275\u0275text"](3," Patch value\n"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("countries",t.countries)("tuiTextfieldLabelOutside",!0)("countryIsoCode",t.countryIsoCode))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,f.a,r.NgControlStatus,r.FormControlName,b.b,g.a],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),e})(),I=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("",r.Validators.minLength(12))}),this.countries=Object.values(s.a),this.countryIsoCode=s.a.US}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-international-example-2"]],decls:3,vars:3,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","countryIsoCode","countryIsoCodeChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"tui-input-phone-international",1),d["\u0275\u0275listener"]("countryIsoCodeChange",(function(e){return t.countryIsoCode=e})),d["\u0275\u0275text"](2," Type your number "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("countries",t.countries)("countryIsoCode",t.countryIsoCode))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,f.a,r.NgControlStatus,r.FormControlName],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),e})();var S,V=n("EPR0"),v=n("yHor"),E=n("zGJC"),w=n("FSyC"),T=n("eB8V"),P=n("SUM+"),D=n("RlDx"),O=n("u8jZ");S=$localize`:␟e6a9c5f8ed29fc6385948897fb5c70e1822bb9ed␟5478561261855774640:Allows to input phone number in international format`;const F=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],_=["heading",$localize`:␟c150954294b192344cd8128f107d0609281e937e␟6100465147963561455:All available countries`];function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,S),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,F),d["\u0275\u0275element"](4,"tui-input-phone-international-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,_),d["\u0275\u0275element"](7,"tui-input-phone-international-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}function A(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-input-phone-international",8),d["\u0275\u0275listener"]("countryIsoCodeChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).countryIsoCode=t})),d["\u0275\u0275text"](1," Type a phone number "),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("countries",e.countries)("readOnly",e.readOnly)("tuiTextfieldCleaner",e.cleaner)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("pseudoHovered",e.pseudoHovered)("pseudoFocused",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("tuiTextfieldLabelOutside",e.labelOutside)("countryIsoCode",e.countryIsoCode)}}var H,G,L,$,R,N;function z(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,H),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function k(e,t){1&e&&d["\u0275\u0275i18n"](0,G)}function j(e,t){1&e&&d["\u0275\u0275i18n"](0,L)}function U(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo",4),d["\u0275\u0275template"](1,A,2,16,"ng-template"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,z,2,0,"ng-template",5),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](4,k,1,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().countries=t})),d["\u0275\u0275template"](5,j,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().countryIsoCode=t})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](6,"inherited-documentation")}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("control",e.control),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.countriesVariants)("documentationPropertyValue",e.countries),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.countryIsoCodeVariants)("documentationPropertyValue",e.countryIsoCode)}}function B(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",9),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,$),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18nStart"](8,R),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275element"](10,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](11,"tui-doc-code",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"li"),d["\u0275\u0275elementStart"](13,"p"),d["\u0275\u0275i18n"](14,N),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](15,"tui-doc-code",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",e.exampleForm),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}H=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,G=$localize`:␟2605436fc68fe6f28c38cc283c805404c1c4fe7d␟3337127772712145540: Array of ISO-codes of countries to choose `,L=$localize`:␟86063816038d414b35c237ad8c8a46b14e169a07␟1487566375988482708: ISO-code of selected country `,$=$localize`:␟2c3923c6968ec5417c5a5e45ba3645399d72f3c3␟7217508107343995741: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneInternationalModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,R=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,R=d["\u0275\u0275i18nPostprocess"](R),N=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Y=(()=>{class e extends p.a{constructor(){super(...arguments),this.exampleForm=n.e(830).then(n.bind(null,"Ps31")),this.exampleModule=n.e(831).then(n.bind(null,"v/nV")),this.exampleHtml=n.e(832).then(n.bind(null,"k3LD")),this.example1={TypeScript:n.e(826).then(n.bind(null,"PrAY")),HTML:n.e(824).then(n.bind(null,"l8L7")),LESS:n.e(825).then(n.bind(null,"p5mT"))},this.example2={TypeScript:n.e(829).then(n.bind(null,"HTce")),HTML:n.e(827).then(n.bind(null,"Prjc")),LESS:n.e(828).then(n.bind(null,"zQNM"))},this.cleaner=!1,this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownMinHeight=u.c,this.dropdownMaxHeight=u.b,this.control=new r.FormControl("",[r.Validators.required,r.Validators.minLength(9)]),this.countriesVariants=[[s.a.RU,s.a.KZ,s.a.UA,s.a.BY],Object.values(s.a)],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=[s.a.RU,s.a.KZ,s.a.UA,s.a.BY],this.countryIsoCode=this.countryIsoCodeVariants[0],this.labelOutside=!0}}return e.\u0275fac=function(t){return Z(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-phone-international"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(d.forwardRef)(()=>e)}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","all-countries",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countries","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryIsoCode","documentationPropertyMode","input-output","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","countries","readOnly","tuiTextfieldCleaner","tuiDropdownDirection","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","pseudoHovered","pseudoFocused","pseudoInvalid","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,M,8,2,"ng-template",1),d["\u0275\u0275template"](2,U,7,6,"ng-template",1),d["\u0275\u0275template"](3,B,16,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[y.a,h.a,C.a,x,I,V.a,v.a,E.a,w.a,f.a,r.NgControlStatus,r.FormControlDirective,T.b,P.a,D.a,b.b,O.a],encapsulation:2,changeDetection:0}),e})();const Z=d["\u0275\u0275getInheritedFactory"](Y);let q=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.FormsModule,r.ReactiveFormsModule,c.hb,l.a,u.Yb,u.lb,u.tb,i.j,u.ab,a.f.forChild(Object(i.q)(Y))]]}),e})()}}]);