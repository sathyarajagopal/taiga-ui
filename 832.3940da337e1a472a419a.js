(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{LeDF:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-phone-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl('+77777777777', Validators.required),\n    });\n\n    setValue(): void {\n        this.testForm.get('testValue')!.setValue('+79926775676');\n    }\n}\n"}}]);