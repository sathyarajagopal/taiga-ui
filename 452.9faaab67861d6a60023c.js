(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{"1vcn":function(n,o,t){"use strict";t.r(o),o.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-month-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample1 {\n    value: TuiMonth | null = null;\n    hoveredMonth: TuiMonth | null = null;\n\n    onMonthClick(month: TuiMonth): void {\n        this.value = month;\n    }\n\n    onMonthHovered(month: TuiMonth | null): void {\n        this.hoveredMonth = month;\n    }\n}\n"}}]);