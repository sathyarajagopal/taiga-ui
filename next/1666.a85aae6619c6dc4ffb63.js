(window.webpackJsonp=window.webpackJsonp||[]).push([[1666],{"ir+3":function(n,t,i){"use strict";i.r(t),t.default='<table\n    tuiTable\n    class="table"\n    [columns]="columns"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                tuiTh\n                [resizable]="true"\n            >\n                Name\n            </th>\n            <th tuiTh>Price</th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]="data"\n    >\n        <tr\n            *tuiRow="let item of data; let i = index"\n            tuiTr\n        >\n            <td\n                *tuiCell="\'name\'"\n                tuiTd\n            >\n                {{ item.name }}\n            </td>\n            <td\n                *tuiCell="\'price\'"\n                tuiTd\n            >\n                <tui-input-number\n                    tuiHintDirection="right"\n                    [postfix]="\'UGX\' | tuiCurrency"\n                    [formControl]="controls[i]"\n                    [tuiHint]="[] | tuiFieldErrorContent"\n                >\n                    Price\n                </tui-input-number>\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);