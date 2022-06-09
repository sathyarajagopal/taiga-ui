(window.webpackJsonp=window.webpackJsonp||[]).push([[1594],{"8b0E":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-swipe-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample2 {\n    readonly open$ = new Subject<boolean>();\n\n    toggle(open: boolean): void {\n        this.open$.next(open);\n    }\n\n    onSwipe(swipe: TuiSwipe): void {\n        console.info(swipe.direction);\n\n        if (swipe.direction === 'left') {\n            this.toggle(true);\n        }\n\n        if (swipe.direction === 'right') {\n            this.toggle(false);\n        }\n    }\n}\n"}}]);