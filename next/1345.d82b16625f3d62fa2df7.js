(window.webpackJsonp=window.webpackJsonp||[]).push([[1345],{"D1r+":function(e,n,o){"use strict";o.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-text-area-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('A field', Validators.required),\n        testValue2: new FormControl('This one can be expanded', Validators.required),\n    });\n}\n"}}]);