(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{QS1d:function(n,t,e){"use strict";e.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <tui-input-phone formControlName="testValue">\n        Type a phone number\n        <input\n            tuiTextfield\n            autocomplete="tel"\n        />\n    </tui-input-phone>\n    <pre class="tui-space_bottom-3">Form value: {{testForm.value | json}}</pre>\n</form>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="setValue()"\n>\n    Set value from outside: +79926775676\n</button>\n'}}]);