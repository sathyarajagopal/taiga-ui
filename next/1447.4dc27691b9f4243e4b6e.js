(window.webpackJsonp=window.webpackJsonp||[]).push([[1447],{"Af/k":function(n,e,t){"use strict";t.r(e),e.default='<p>Parent zone: {{parentActive}}</p>\n<p>Child zone: {{childActive}}</p>\n<p>\n    <input placeholder="input outside a zone" />\n</p>\n<div\n    #parent="tuiActiveZone"\n    class="active-zone"\n    [class.active-zone_active]="parentActive"\n    (tuiActiveZoneChange)="onParentActiveZone($event)"\n>\n    <h2>Parent zone</h2>\n    <button\n        tuiButton\n        type="button"\n    >\n        A button inside zone\n    </button>\n</div>\n<p>\n    <button>A button outside of zone</button>\n</p>\n<div\n    class="active-zone"\n    [class.active-zone_active]="childActive"\n    [tuiActiveZoneParent]="parent"\n    (tuiActiveZoneChange)="onChildActiveZone($event)"\n>\n    <h2>Child zone</h2>\n    <tui-input #input>Input inside zone</tui-input>\n    <p i18n>\n        You can bind different elements with\n        <code>[tuiActiveZoneParent]</code>\n        directive\n    </p>\n</div>\n<p>\n    <input placeholder="input outside zone" />\n    <button (click)="onClick(input)">Focus input in zone</button>\n</p>\n<p i18n>Zone keeps active after browser tab change</p>\n'}}]);