(window.webpackJsonp=window.webpackJsonp||[]).push([[1656],{"rP++":function(n,e,t){"use strict";t.r(e),e.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <label\n        i18n-label\n        tuiLabel\n        label="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue2"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Set a password"\n    >\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to\n        type something, subscribe on form value changes and call markAsTouched\n        on control on first value change\n    </p>\n</form>\n'}}]);