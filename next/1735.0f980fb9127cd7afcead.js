(window.webpackJsonp=window.webpackJsonp||[]).push([[1735],{"7EBq":function(e,n,i){"use strict";i.r(n),n.default="```ts\nimport {TuiAlertService} from '@taiga-ui/core';\n//...\n\nexport class MyComponent {\n  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {\n    //...\n\n    this.alertService.open('Notification').subscribe({\n      complete: () => {\n        console.log('Notification is closed');\n      },\n    });\n  }\n}\n```\n"}}]);