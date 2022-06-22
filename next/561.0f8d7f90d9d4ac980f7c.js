(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{"OWe+":function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown\n    tuiDropdownLimitWidth="fixed"\n    class="example"\n    [content]="content"\n    [(open)]="dropdownOpen"\n>\n    <button\n        tuiButton\n        appearance="outline"\n        icon="tuiIconMoreVer"\n        type="button"\n        size="m"\n        class="example"\n    >\n        List of components\n    </button>\n</tui-hosted-dropdown>\n\n<ng-template\n    #content\n    let-activeZone\n>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [tuiActiveZoneParent]="activeZone"\n    >\n        <button\n            tuiOption\n            tuiDropdownAlign="right"\n            tuiDropdownDirection="top"\n            [tuiDropdown]="true"\n            [tuiDropdownContent]="money"\n            [tuiDropdownSided]="true"\n        >\n            \ud83d\udcb0 Money:\n        </button>\n        <button\n            automation-id="tui-data-list-calendar-option"\n            tuiOption\n            tuiDropdownAlign="right"\n            [tuiDropdown]="false"\n            [tuiDropdownContent]="calendar"\n            [tuiDropdownSided]="true"\n        >\n            \ud83d\udcc5 Calendar: {{ dateValue }}\n        </button>\n        <button\n            automation-id="tui-data-list-email-option"\n            tuiOption\n            tuiDropdownAlign="right"\n            [tuiDropdown]="false"\n            [tuiDropdownContent]="input"\n            [tuiDropdownSided]="true"\n        >\n            \ud83d\udce7 Email: {{ testValue }}\n        </button>\n        <button\n            automation-id="tui-data-list-range-option"\n            tuiOption\n            tuiDropdownAlign="right"\n            tuiDropdownDirection="top"\n            [tuiDropdown]="false"\n            [tuiDropdownContent]="range"\n            [tuiDropdownSided]="true"\n        >\n            \u231b Range: {{rangeValue}}\n        </button>\n    </tui-data-list>\n\n    <ng-template #money>\n        <form\n            class="form"\n            [formGroup]="moneyForm"\n        >\n            <tui-input\n                automation-id="tui-data-money-input"\n                formControlName="moneyValue"\n            >\n                RUB\n            </tui-input>\n        </form>\n\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                tuiOption\n                tuiDropdownDirection="bottom"\n                tuiDropdownAlign="right"\n                [tuiDropdown]="true"\n                [tuiDropdownContent]="currency"\n                [tuiDropdownSided]="true"\n            >\n                Exchange Rates:\n            </button>\n        </tui-data-list>\n    </ng-template>\n\n    <ng-template #calendar>\n        <tui-calendar\n            [value]="dateValue"\n            (mousedown.silent.prevent)="0"\n            (dayClick)="onDayClick($event)"\n        ></tui-calendar>\n    </ng-template>\n\n    <ng-template #input>\n        <form\n            class="form"\n            [formGroup]="testForm"\n        >\n            <tui-input\n                automation-id="tui-data-list-email-field"\n                formControlName="testValue"\n            >\n                Email\n            </tui-input>\n        </form>\n    </ng-template>\n\n    <ng-template #currency>\n        <div class="example">\n            <div\n                tuiGroup\n                class="group"\n            >\n                <tui-input [(ngModel)]="dollar">1 Rub = (X) Dollars</tui-input>\n                <tui-input [(ngModel)]="euro">1 Rub = (Y) Euros</tui-input>\n            </div>\n\n            <ul class="exchange tui-list tui-list_large">\n                <li class="tui-list__item">\n                    <tui-money\n                        currency="USD"\n                        [value]="moneyValue / dollar"\n                    ></tui-money>\n                </li>\n                <li class="tui-list__item">\n                    <tui-money\n                        currency="EUR"\n                        [value]="moneyValue / euro"\n                    ></tui-money>\n                </li>\n            </ul>\n        </div>\n    </ng-template>\n\n    <ng-template #range>\n        <tui-input-date-range\n            automation-id="tui-data-list-range-field"\n            class="form"\n            [(ngModel)]="rangeValue"\n        >\n            Range\n        </tui-input-date-range>\n    </ng-template>\n</ng-template>\n\n<div class="example">\n    <p>Email: {{testValue}}</p>\n    <p>Chosen date: {{dateValue}}</p>\n    <p>Range date: {{rangeValue}}</p>\n    <p>Dol - {{dollar}}, Eur - {{euro}}</p>\n</div>\n'}}]);