(window.webpackJsonp=window.webpackJsonp||[]).push([[754],{UxtR:function(e,n,i){"use strict";i.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {combineLatest, Observable, Subject, timer} from 'rxjs';\nimport {\n    filter,\n    map,\n    mapTo,\n    mergeScan,\n    pairwise,\n    scan,\n    share,\n    startWith,\n    switchMap,\n    takeUntil,\n    tap,\n} from 'rxjs/operators';\n\nclass RejectedFile {\n    constructor(readonly file: TuiFileLike, readonly reason: string) {}\n}\n\nfunction isFile(file: unknown): file is File {\n    return file instanceof File;\n}\n\nfunction isRejectedFile(file: unknown): file is RejectedFile {\n    return file instanceof RejectedFile;\n}\n\nfunction convertRejected({file, reason}: RejectedFile): TuiFileLike {\n    return {\n        name: file.name,\n        size: file.size,\n        type: file.type,\n        content: reason,\n    };\n}\n\n@Component({\n    selector: 'tui-input-file-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFileExample2 {\n    private readonly files = new FormControl([]);\n\n    private readonly rejectedFiles$ = new Subject<readonly TuiFileLike[]>();\n\n    private readonly files$ = this.files.valueChanges.pipe(\n        // We start with empty array for pairwise to work immediately\n        startWith<readonly File[]>([]),\n        pairwise(),\n        // We map each emit to newly added files\n        map(([prev, cur]) => cur.filter(item => !prev.includes(item))),\n        // We use mergeScan + combineLatest to accumulate results in one array\n        mergeScan(\n            (acc: ReadonlyArray<RejectedFile | File>, cur) =>\n                combineLatest(\n                    cur.map(file =>\n                        this.serverRequest(file).pipe(\n                            startWith(file),\n                            takeUntil(\n                                // Cancel upload if file is removed from control\n                                this.files.valueChanges.pipe(\n                                    filter(files => !files.includes(file)),\n                                ),\n                            ),\n                        ),\n                    ),\n                    // Filtering out `null` as successfully uploaded files\n                ).pipe(map(files => [...acc, ...files.filter(isPresent)])),\n            [],\n        ),\n        // Now we have a shared Observable of currently loading Files and server-rejects\n        share(),\n    );\n\n    readonly loading$: Observable<readonly TuiFileLike[]> = this.files$.pipe(\n        // We filter out RejectedFiles to remove errors from loading array\n        map(files => files.filter(isFile)),\n        switchMap(loading =>\n            this.files.valueChanges.pipe(\n                startWith(this.files.value),\n                // We filter out loading items that were removed from control before server responded\n                map(value => loading.filter(file => value.includes(file))),\n            ),\n        ),\n        startWith([]),\n    );\n\n    // We start with internal changes (i.e. wrong format or size found or user removed existing error message)\n    readonly rejected$: Observable<readonly TuiFileLike[]> = this.rejectedFiles$.pipe(\n        switchMap(rejectedFiles =>\n            this.files$.pipe(\n                // We filter out Files to ignore loading files\n                map(files => files.filter(isRejectedFile)),\n                // We collect all newly rejected files and previously rejected since we switch mapped\n                scan<RejectedFile[]>(\n                    (previous, current) => [\n                        ...previous,\n                        ...current.filter(({file}) => this.files.value.includes(file)),\n                    ],\n                    [],\n                ),\n                // We remove server errored files from control **SIDE EFFECT**\n                tap(files => this.removeRejected(files)),\n                // Map new RejectedFiles to TuiFileLike with rejection reason\n                map(files => files.map(convertRejected)),\n                // Combine with currently present rejected files\n                map(filtered => [...rejectedFiles, ...filtered]),\n            ),\n        ),\n        startWith([]),\n    );\n\n    readonly form = new FormGroup({\n        files: this.files,\n    });\n\n    onRejectedFilesChange(rejectedFiles: readonly TuiFileLike[]): void {\n        this.rejectedFiles$.next(rejectedFiles);\n    }\n\n    private removeRejected(rejectedFiles: readonly RejectedFile[]): void {\n        const filtered = this.files.value.filter((file: File) =>\n            rejectedFiles.every(rejectedFile => rejectedFile.file !== file),\n        );\n\n        if (filtered.length !== this.files.value.length) {\n            this.files.setValue(filtered);\n        }\n    }\n\n    private serverRequest(file: File): Observable<RejectedFile | File | null> {\n        const delay = Math.round(Math.random() * 5000 + 500);\n        const result =\n            delay % 2\n                ? null\n                : new RejectedFile(file, 'Server responded for odd number of time');\n\n        return timer(delay).pipe(mapTo(result));\n    }\n}\n"}}]);