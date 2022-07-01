import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {ChangeDetectorRef, InjectionToken, Optional, Provider} from '@angular/core';
import {
    TUI_IS_IOS,
    TuiDayRange,
    TuiDestroyService,
    TuiScrollService,
    watch,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';
import {EMPTY, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiMobileCalendarStrategy} from './mobile-calendar.strategy';

export const TUI_VALUE_STREAM = new InjectionToken<Observable<TuiDayRange | null>>(
    'Stream for updating value',
);
export const TUI_MOBILE_CALENDAR_PROVIDERS: Provider[] = [
    TuiDestroyService,
    TuiScrollService,
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        deps: [TUI_IS_IOS, TuiScrollService],
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [
            [new Optional(), TUI_CALENDAR_DATA_STREAM],
            TuiDestroyService,
            ChangeDetectorRef,
        ],
        useFactory: valueStreamFactory,
    },
];

/**
 * @deprecated: use {@link tuiValueStreamFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function valueStreamFactory(
    value$: Observable<TuiDayRange | null> | null,
    destroy$: Observable<void>,
    changeDetectorRef: ChangeDetectorRef,
): Observable<TuiDayRange | null> {
    return (value$ || EMPTY).pipe(watch(changeDetectorRef), takeUntil(destroy$));
}

export const tuiValueStreamFactory = valueStreamFactory;
