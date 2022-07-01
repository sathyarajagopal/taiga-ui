import {Renderer2} from '@angular/core';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    LAZY_EDITOR_EXTENSIONS,
    LAZY_TIPTAP_EDITOR,
    TIPTAP_EDITOR,
    TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor/tokens';
import type {Extension, Mark, Node} from '@tiptap/core';
import {Editor} from '@tiptap/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {map, shareReplay, take} from 'rxjs/operators';

import {TuiEditorPortalService} from './portal/editor-portal.service';

export const TUI_EDITOR_NEW_PROVIDERS = [
    {
        provide: LAZY_EDITOR_EXTENSIONS,
        deps: [TUI_EDITOR_EXTENSIONS],
        useFactory: extensionsFactory,
    },
    {
        provide: INITIALIZATION_TIPTAP_CONTAINER,
        deps: [Renderer2],
        useFactory: initializationTipTapContainer,
    },
    {
        provide: TIPTAP_EDITOR,
        deps: [
            INITIALIZATION_TIPTAP_CONTAINER,
            LAZY_EDITOR_EXTENSIONS,
            LAZY_TIPTAP_EDITOR,
        ],
        useFactory: editorFactory,
    },
    TuiTiptapEditorService,
    TuiEditorPortalService,
];

/**
 * @deprecated: use {@link tuiExtensionsFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function extensionsFactory(
    extensions: Array<Promise<Extension>>,
): Observable<ReadonlyArray<Extension | Mark | Node>> {
    const extensions$ = new ReplaySubject<ReadonlyArray<Extension | Mark | Node>>(1);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all(extensions).then(extensions => extensions$.next(extensions));

    return extensions$;
}

export const tuiExtensionsFactory = extensionsFactory;

/**
 * @deprecated: use {@link tuiInitializationTipTapContainer} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function initializationTipTapContainer(renderer: Renderer2): HTMLElement {
    return renderer.createElement('div');
}

export const tuiInitializationTipTapContainer = initializationTipTapContainer;

/**
 * @deprecated: use {@link tuiEditorFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function editorFactory(
    element: HTMLElement,
    extensions: Observable<Array<Extension | Mark | Node>>,
    editor: Observable<typeof Editor>,
): Observable<Editor> {
    return combineLatest([editor, extensions]).pipe(
        take(1),
        map(
            ([LazyEditor, extensions]) =>
                new LazyEditor({
                    element,
                    extensions,
                }),
        ),
        shareReplay({bufferSize: 1, refCount: true}),
    );
}

export const tuiEditorFactory = editorFactory;
