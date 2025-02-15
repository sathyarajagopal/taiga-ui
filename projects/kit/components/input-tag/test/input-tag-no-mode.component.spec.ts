import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TUI_TAG_STATUS, TuiInputTagComponent, TuiInputTagModule} from '@taiga-ui/kit';

describe('InputTag [TUI_TAG_STATUS=neutral]', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-tag
                    [ngModel]="tags"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                ></tui-input-tag>
            </tui-root>
        `,
        providers: [{provide: TUI_TAG_STATUS, useValue: 'neutral'}],
    })
    class TestComponent {
        @ViewChild(TuiInputTagComponent)
        component!: TuiInputTagComponent;

        tags = ['Tag1', 'Tag2'];

        labelOutside = true;
        exampleText = 'Example';
        size: TuiSizeS | TuiSizeL = 's';
    }

    let fixture: ComponentFixture<TestComponent>;

    it(`correct status for tag when tuiMode emitted null`, async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                TuiRootModule,
                TuiInputTagModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        expect(
            fixture.nativeElement
                .querySelector('[data-tui-host-status]')
                ?.getAttribute('data-tui-host-status'),
        ).toEqual('neutral');
    });
});
