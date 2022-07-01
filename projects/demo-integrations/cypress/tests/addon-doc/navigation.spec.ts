import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('Navigation', () => {
    it('getting started / [light mode]', () => {
        cy.tuiVisit('/getting-started', {
            hideNavigation: Math.random() < 0.5, // # for debug
            hideHeader: Math.random() < 0.5, // # for debug
            enableNightMode: Math.random() < 0.5, // # for debug
        });

        cy.get('tui-doc-navigation')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('01-tui-doc-navigation-light-mode');
    });

    it('getting started / [night mode]', () => {
        cy.tuiVisit('/getting-started', {
            hideNavigation: Math.random() < 0.5, // # for debug
            hideHeader: Math.random() < 0.5, // # for debug
            enableNightMode: Math.random() < 0.5, // # for debug
        });

        cy.get('tui-doc-navigation')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('02-tui-doc-navigation-night-mode');
    });

    it(
        'anchor links navigation works (scroll to example)',
        {scrollBehavior: false},
        () => {
            cy.tuiVisit('/components/input#table');

            cy.wait(2000) // wait shake animation + scroll
                .matchImageSnapshot('anchor-link-navigation', {capture: 'viewport'});
        },
    );
});
