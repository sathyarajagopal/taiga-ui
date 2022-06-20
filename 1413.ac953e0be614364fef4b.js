(window.webpackJsonp=window.webpackJsonp||[]).push([[1413],{rztI:function(e,n,r){"use strict";r.r(n),n.default="import {Injectable} from '@angular/core';\nimport {TuiTreeLoader} from '@taiga-ui/kit';\nimport {Observable, timer} from 'rxjs';\nimport {mapTo} from 'rxjs/operators';\n\nimport {Item} from './index';\n\n@Injectable()\nexport class TreeLoader implements TuiTreeLoader<Item> {\n    loadChildren({text}: Item): Observable<Item[]> {\n        return timer(3000).pipe(\n            mapTo([\n                {text: `${text} 1`, children: Math.random() > 0.5},\n                {text: `${text} 2`, children: Math.random() > 0.5},\n                {text: `${text} 3`, children: Math.random() > 0.5},\n            ]),\n        );\n    }\n\n    hasChildren({children}: Item): boolean {\n        return !!children;\n    }\n}\n"}}]);