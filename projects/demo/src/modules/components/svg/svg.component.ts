import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {default as imageUrl} from '!!file-loader!../../../assets/images/ts.svg';

import {TuiThemeService} from '../../app/theme.service';

@Component({
    selector: 'example-tui-svg',
    templateUrl: './svg.template.html',
    changeDetection,
})
export class ExampleTuiSvgComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly iconVariants: readonly string[] = [
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg',
        'tuiIconTooltip',
        `<svg xmlns="http://www.w3.org/2000/svg"
             width="24px"
             height="24px"
             viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
        </svg>`,
        `${imageUrl}#ts`,
    ];

    icon = this.iconVariants[0];

    constructor(@Inject(TuiThemeService) readonly themeService: TuiThemeService) {}
}
