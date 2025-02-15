import {InjectionToken} from '@angular/core';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {Observable} from 'rxjs';

export const TUI_ALERTS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>('A stream of alerts', {
    factory: () => [],
});
