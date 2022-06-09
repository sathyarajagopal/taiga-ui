(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{"5HA+":function(e,n,t){"use strict";t.r(n),n.default="import {ChangeDetectorRef, Component, Inject, NgZone, OnInit} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiDestroyService, tuiZoneOptimized, watch} from '@taiga-ui/cdk';\nimport {Observable, timer} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-input-inline-example-3',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample3 implements OnInit {\n    count = '0';\n\n    constructor(\n        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,\n        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,\n        @Inject(NgZone) private readonly zone: NgZone,\n        @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,\n    ) {}\n\n    ngOnInit(): void {\n        if (this.isCypress) {\n            return;\n        }\n\n        timer(0, 3000)\n            .pipe(tuiZoneOptimized(this.zone), watch(this.cd), takeUntil(this.destroy$))\n            .subscribe(value => {\n                this.count = String(value);\n            });\n    }\n}\n"}}]);