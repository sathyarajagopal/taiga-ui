(window.webpackJsonp=window.webpackJsonp||[]).push([[1311],{"9mKQ":function(t,n,i){"use strict";i.r(n),n.default='<tui-tabs\n    tuiMobileTabs\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <button\n        *ngFor="let item of items"\n        tuiTab\n        (click)="onClick(item.text)"\n    >\n        <tui-svg\n            class="tui-space_right-2"\n            [src]="item.icon"\n        ></tui-svg>\n        {{item.text}}\n    </button>\n</tui-tabs>\n<tui-input-count\n    class="tui-space_top-4"\n    [max]="2"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-count>\n'}}]);