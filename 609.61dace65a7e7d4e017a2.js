(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{BuWd:function(n,o,t){"use strict";t.r(o),o.default='<tui-hosted-dropdown\n    #dropdown\n    tuiDropdownAlign="left"\n    class="t-wrapper"\n    [content]="smileDropdown"\n>\n    <button\n        tuiIconButton\n        type="button"\n        size="s"\n        icon="tuiIconStarLarge"\n        appearance="icon"\n        automation-id="smiles-tool__button"\n        class="tool-button"\n        [pseudoPressed]="dropdown.open"\n        [focusable]="dropdown.open"\n    ></button>\n    <ng-template\n        #smileDropdown\n        let-activeZone\n    >\n        <div\n            class="smiles"\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                *ngFor="let smile of smiles"\n                class="smile"\n                [innerHTML]="smile"\n                (click)="insertSmile(smile)"\n            ></button>\n        </div>\n    </ng-template>\n</tui-hosted-dropdown>\n'}}]);