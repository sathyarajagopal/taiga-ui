(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{"+0UB":function(n,t,o){"use strict";o.r(t),t.default='<p>\n    <button\n        tuiButton\n        type="button"\n        (click)="onClick()"\n    >\n        Set value\n    </button>\n</p>\n\n<tui-editor\n    new\n    exampleText="exampleText"\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{control.value}}</p>\n'}}]);