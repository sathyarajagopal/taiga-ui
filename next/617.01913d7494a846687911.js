(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{"8x7P":function(n,o,i){"use strict";i.r(o),o.default="```typescript\nimport {tuiEditorOptionsProvider, TuiEditorOptions} from '@taiga-ui/addon-editor';\n\nconst YOUR_PARAMS: TuiEditorOptions = {\n  color: new Map([\n    ['red', 'rgba(244, 87, 37, 1)'],\n    ['blue', 'var(--tui-primary)'],\n  ]),\n  //...\n};\n\n@Component({\n  //...\n  providers: [tuiEditorOptionsProvider(YOUR_PARAMS)],\n})\nexport class YourComponent {}\n```\n"}}]);