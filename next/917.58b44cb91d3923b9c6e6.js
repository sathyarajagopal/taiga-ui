(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{WfsQ:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-example-7',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample7 {\n    readonly control = new FormControl(null, [\n        Validators.required,\n        Validators.minLength(5),\n    ]);\n}\n"}}]);