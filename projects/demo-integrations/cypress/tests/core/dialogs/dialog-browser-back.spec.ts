import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    DIALOG_PAGE_URL,
} from '../../../support/shared.entities';

describe('Dialogs + browser back navigation', () => {
    /**
     * Alternative to cy.go('back', {timeout: 0}), which doesn't wait page load event
     */
    const goBack = (): void => {
        cy.window().then(win => win.history.back());
    };

    const getFullUrl = (path: string): string =>
        `${Cypress.config().baseUrl || ''}/${path}`.replace(
            new RegExp('([^:]/)/+', 'g'),
            '$1',
        );

    beforeEach(() => {
        cy.visit('/'); // need to check that browser back navigation is not broken after closing all dialogs
    });

    describe('feature is enabled', () => {
        beforeEach(() => {
            cy.tuiVisit(DIALOG_PAGE_URL, {inIframe: false});
        });

        it('closes dialog on browser back navigation', () => {
            cy.get('#data')
                .findByAutomationId('tui-doc-example')
                .find('button')
                .first()
                .tuiScrollIntoView()
                .click();
            cy.tuiWaitKitDialog();

            cy.get('tui-dialog').get('button').contains('Show one more dialog').click();
            cy.tuiWaitKitDialog();

            cy.matchImageSnapshot('4-1-opened-all-dialogs', {
                capture: 'viewport',
                blackout: ['tui-doc-navigation'],
            });
            goBack();
            cy.matchImageSnapshot('4-2-after-first-back-nav', {
                capture: 'viewport',
                blackout: ['tui-doc-navigation'],
            });
            goBack();
            cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION) // wait for scrollbar
                .matchImageSnapshot('4-3-after-second-back-nav', {
                    capture: 'viewport',
                    blackout: ['tui-doc-navigation'],
                });
            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });

        it('doesnt break browser back navigation after closing dialog in the usual way (without back button)', () => {
            /* open dialog */
            cy.getByAutomationId('tui-doc-example')
                .first()
                .find('button')
                .first()
                .click();

            cy.tuiWaitKitDialog();

            /* close dialog */
            cy.get('tui-dialog').find('button').first().click();

            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });
    });

    describe('feature is disabled', () => {
        beforeEach(() => {
            cy.tuiVisit(DIALOG_PAGE_URL, {inIframe: true});
        });

        it('does not depend on browser back navigation: no history changes on back button', () => {
            /* open dialog */
            cy.getByAutomationId('tui-doc-example')
                .first()
                .find('button')
                .first()
                .click();

            cy.tuiWaitKitDialog();

            cy.url().should('equal', getFullUrl(DIALOG_PAGE_URL));
            goBack();
            cy.url().should('equal', getFullUrl('/'));
        });
    });
});
