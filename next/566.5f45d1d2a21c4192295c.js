(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{fFB1:function(n,e,i){"use strict";i.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-dialog-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent1 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(): void {\n        this.dialogService\n            .open('This is a plain string dialog', {label: 'Heading', size: 's'})\n            .subscribe();\n    }\n}\n"}}]);