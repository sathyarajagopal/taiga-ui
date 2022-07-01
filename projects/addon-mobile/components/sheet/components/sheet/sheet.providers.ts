import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, NgZone, Provider} from '@angular/core';
import {TUI_IS_IOS, tuiZonefree, typedFromEvent} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {merge, Observable} from 'rxjs';
import {map, mapTo, share} from 'rxjs/operators';

import {iosScrollFactory} from '../../ios.hacks';

export const TUI_SHEET_SCROLL = new InjectionToken<number>(
    'Current scrollTop of a sheet',
);

export const TUI_SHEET_DRAGGED = new InjectionToken<boolean>(
    'The sheet is being dragged',
);

/** @deprecated use option argument for each Sheet */
export const TUI_SHEET_OFFSET = new InjectionToken<number>(
    'Offset from the top at which the sheet stops',
    {
        factory: () => 16,
    },
);

export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_DRAGGED,
        deps: [ElementRef],
        useFactory: sheetDraggedFactory,
    },
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
        useFactory: sheetScrollFactory,
    },
    {
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef,
    },
];

/**
 * @deprecated: use {@link tuiSheetDraggedFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function sheetDraggedFactory({
    nativeElement,
}: ElementRef<HTMLElement>): Observable<boolean> {
    return merge(
        typedFromEvent(nativeElement, 'touchstart', {passive: true}).pipe(mapTo(true)),
        typedFromEvent(nativeElement, 'touchend').pipe(mapTo(false)),
    );
}

export const tuiSheetDraggedFactory = sheetDraggedFactory;

/**
 * @deprecated: use {@link tuiSheetScrollFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function sheetScrollFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    ngZone: NgZone,
    documentRef: Document,
    isIos: boolean,
): Observable<number> {
    return isIos
        ? iosScrollFactory(nativeElement, documentRef, ngZone)
        : merge(
              typedFromEvent(nativeElement, 'scroll'),
              typedFromEvent(nativeElement, 'load', {capture: true}),
          ).pipe(
              map(() => nativeElement.scrollTop),
              tuiZonefree(ngZone),
              share(),
          );
}

export const tuiSheetScrollFactory = sheetScrollFactory;
