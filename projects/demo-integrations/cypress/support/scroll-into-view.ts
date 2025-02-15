import {DEFAULT_TIMEOUT_BEFORE_ACTION} from './shared.entities';

export const tuiScrollIntoView = (
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
): Cypress.Chainable<unknown> =>
    cy
        .wrap($subject, {log: false})
        .scrollIntoView({
            timeout: DEFAULT_TIMEOUT_BEFORE_ACTION,
            ensureScrollable: true,
            easing: 'linear',
            duration: 0,
        })
        .should('be.visible');
