(window.webpackJsonp=window.webpackJsonp||[]).push([[1163],{KBu7:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-list-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioListExample1 {\n    readonly items = [\n        {\n            name: 'Simple',\n            description: 'Something usual',\n        },\n        {\n            name: 'Advanced',\n            description: 'Something better',\n        },\n        {\n            name: 'PRO',\n            description: 'Something cool',\n        },\n    ];\n\n    readonly testForm = new FormGroup({\n        tariff: new FormControl(this.items[0]),\n    });\n}\n"}}]);