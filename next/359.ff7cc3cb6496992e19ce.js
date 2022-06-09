(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{LuBK:function(n,r,e){"use strict";e.r(r),r.default="import {Inject, Pipe, PipeTransform} from '@angular/core';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable, of} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Pipe({\n    name: 'labels',\n})\nexport class LabelsPipe implements PipeTransform {\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    transform({from, to}: TuiDayRange): Observable<readonly string[]> {\n        const length = TuiDay.lengthBetween(from, to);\n\n        if (length > 90) {\n            return this.months$.pipe(\n                map(months =>\n                    Array.from(\n                        {length: TuiMonth.lengthBetween(from, to) + 1},\n                        (_, i) => months[from.append({month: i}).month],\n                    ),\n                ),\n            );\n        }\n\n        const range = Array.from({length}, (_, day) => from.append({day}));\n        const mondays = onlyMondays(range);\n        const days = range.map(String);\n\n        if (length > 60) {\n            return of(even(mondays));\n        }\n\n        if (length > 14) {\n            return of(mondays);\n        }\n\n        if (length > 7) {\n            return of(even(days));\n        }\n\n        return of(days);\n    }\n}\n\nfunction onlyMondays(range: readonly TuiDay[]): readonly string[] {\n    return range.filter(day => !day.dayOfWeek()).map(String);\n}\n\nfunction even<T>(array: readonly T[]): readonly T[] {\n    return array.filter((_, i) => !(i % 2));\n}\n"}}]);