import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    QueryList,
    Renderer2,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {
    EMPTY_QUERY,
    moveFocus,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiDestroyService,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {TUI_MOBILE_AWARE, TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {TuiTabComponent} from '../tab/tab.component';
import {TUI_TAB_ACTIVATE} from '../tab/tab.providers';
import {TUI_TABS_OPTIONS, TuiTabsOptions} from '../tabs-options';

const TAB_ACTIVE_CLASS = '_active';

// TODO: 3.0 remove in ivy compilation
export const OBSERVER_INIT = {
    childList: true,
};

// @dynamic
@Component({
    selector: 'tui-tabs, nav[tuiTabs]',
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: OBSERVER_INIT,
        },
    ],
    host: {
        '[style.--tui-tab-margin.px]': 'margin',
    },
})
export class TuiTabsComponent implements AfterViewChecked {
    @ContentChildren(forwardRef(() => TuiTabComponent))
    readonly children: QueryList<unknown> = EMPTY_QUERY;

    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = this.options.underline;

    @Input('activeItemIndex')
    set activeItemIndexSetter(index: number) {
        this.activeItemIndex = index;
        this.scrollTo(this.tabs[index]);
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @HostBinding('class._ios')
    readonly isIos: boolean;

    @HostBinding('class._android')
    readonly isAndroid: boolean;

    activeItemIndex = 0;

    constructor(
        @Inject(TUI_TABS_OPTIONS) private readonly options: TuiTabsOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiResizeService) resize$: Observable<void>,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
        @Inject(TUI_TAB_MARGIN) readonly margin: number,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;

        resize$.pipe(filter(() => this.underline)).subscribe(() => {
            changeDetectorRef.detectChanges();
        });
    }

    get tabs(): readonly HTMLElement[] {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[tuiTab]'),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    @HostListener(`${TUI_TAB_ACTIVATE}.stop`, ['$event.target'])
    onActivate(element: HTMLElement): void {
        const index = this.tabs.findIndex(tab => tab === element);

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexSetter = index;
        this.activeItemIndexChange.emit(index);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        const {tabs} = this;

        moveFocus(tabs.indexOf(current), tabs, step);
    }

    ngAfterViewChecked(): void {
        const {tabs, activeElement} = this;

        tabs.forEach(nativeElement => {
            this.renderer.removeClass(nativeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(nativeElement, 'tabIndex', '-1');
        });

        if (activeElement) {
            this.renderer.addClass(activeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(activeElement, 'tabIndex', '0');
        }
    }

    private scrollTo(element?: HTMLElement): void {
        if (!element) {
            return;
        }

        const {offsetLeft, offsetWidth} = element;
        const {nativeElement} = this.elementRef;

        if (offsetLeft < nativeElement.scrollLeft) {
            nativeElement.scrollLeft = offsetLeft;
        }

        if (
            offsetLeft + offsetWidth >
            nativeElement.scrollLeft + nativeElement.offsetWidth
        ) {
            nativeElement.scrollLeft =
                offsetLeft + offsetWidth - nativeElement.offsetWidth;
        }
    }
}
