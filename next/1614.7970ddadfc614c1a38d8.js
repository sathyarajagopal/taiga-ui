(window.webpackJsonp=window.webpackJsonp||[]).push([[1614],{"i+HD":function(n,o,i){"use strict";i.r(o),o.default="```ts\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  // ...\n  providers: [\n    // ...\n    {\n      provide: TUI_ANIMATIONS_DURATION,\n      useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),\n    },\n  ],\n})\nexport class AppModule {}\n```\n"}}]);