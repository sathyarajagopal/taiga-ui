(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{"3a12":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-range-example-2',\n    templateUrl: './index.html',\n    styles: ['tui-input-range {max-width: 30rem}'],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {\n                decimalSeparator: '.',\n                thousandSeparator: ',',\n                zeroPadding: true,\n            },\n        },\n    ],\n})\nexport class TuiInputRangeExample2 {\n    readonly max = 50_000_001;\n    readonly min = 5_001;\n\n    readonly control = new FormControl([this.min, this.max / 2]);\n}\n"}}]);