import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_LABEL_OUTSIDE =
    new InjectionToken<TuiTextfieldLabelOutsideDirective>('tuiTextfieldLabelOutside', {
        factory: labelOutsideDirectiveFactory,
    });

@Directive({
    selector: '[tuiTextfieldLabelOutside]',
    providers: [
        {
            provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
            useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective),
        },
    ],
})
export class TuiTextfieldLabelOutsideDirective extends TuiController {
    @Input('tuiTextfieldLabelOutside')
    labelOutside = false;
}

/**
 * @deprecated: use {@link tuiLabelOutsideDirectiveFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function labelOutsideDirectiveFactory(): TuiTextfieldLabelOutsideDirective {
    return new TuiTextfieldLabelOutsideDirective();
}

export const tuiLabelOutsideDirectiveFactory = labelOutsideDirectiveFactory;
