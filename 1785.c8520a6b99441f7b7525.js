(window.webpackJsonp=window.webpackJsonp||[]).push([[1785],{"yrs+":function(n,t,e){"use strict";e.r(t),t.default='<tui-scrollbar>\n    <cdk-virtual-scroll-viewport\n        #viewport\n        tuiScrollable\n        class="viewport tui-zero-scrollbar"\n        [itemSize]="45"\n        [maxBufferPx]="500"\n        [minBufferPx]="400"\n    >\n        <table\n            tuiTable\n            [columns]="columns"\n        >\n            <thead>\n                <tr tuiThGroup>\n                    <th\n                        *tuiHead="\'name\'"\n                        tuiTh\n                        [sticky]="true"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Name\n                    </th>\n                    <th\n                        *tuiHead="\'dob\'"\n                        tuiTh\n                        [sticky]="true"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Date of Birth\n                    </th>\n                    <th\n                        *tuiHead="\'age\'"\n                        tuiTh\n                        [sticky]="true"\n                        [sorter]="ageSorter"\n                        [style.top.px]="-viewport[\'_renderedContentOffset\']"\n                    >\n                        Age\n                    </th>\n                </tr>\n            </thead>\n            <tbody tuiTbody>\n                <tr\n                    *cdkVirtualFor="let item of data | tuiTableSort"\n                    tuiTr\n                >\n                    <td\n                        *tuiCell="\'name\'"\n                        tuiTd\n                    >\n                        {{item.name}}\n                    </td>\n                    <td\n                        *tuiCell="\'dob\'"\n                        tuiTd\n                    >\n                        {{item.dob}}\n                    </td>\n                    <td\n                        *tuiCell="\'age\'"\n                        tuiTd\n                    >\n                        {{getAge(item)}}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </cdk-virtual-scroll-viewport>\n</tui-scrollbar>\n'}}]);