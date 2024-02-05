/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { EFormItem, FORM_CONFIGS, IFormItem } from "components/core-ui/form";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
const fillField = (testId, field: IFormItem, value) => {
  if ([EFormItem.INPUT, EFormItem.PASSWORD].includes(field.component)) {
    cy.get(`[${FORM_CONFIGS.DATA_TEST_ID}=${testId}]`).type(value);
  }
};
Cypress.Commands.addAll({
  fillForm(fields, values) {
    for (let testId in fields) {
      fillField(testId, fields[testId], values[testId]);
    }
  },
  typeToTestId(testId, value) {
    cy.get(`[${FORM_CONFIGS.DATA_TEST_ID}=${testId}]`).type(value);
  },
  submitForm() {
    cy.get(
      `[${FORM_CONFIGS.DATA_TEST_ID}=${FORM_CONFIGS.BUTTON_TEST_ID}]`
    ).click();
  },
  requestPostSuccess(url, body) {
    cy.intercept("POST", url, {
      statusCode: 200,
      body,
    });
  },
  requestPostInternalError(url, body) {
    cy.intercept("POST", url, {
      statusCode: 500,
      body,
    });
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      fillForm(fields, values): Chainable<void>;
      submitForm(): Chainable<void>;
      requestPostSuccess(url, body): Chainable<void>;
      requestPostInternalError(url, body): Chainable<void>;
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      dismiss(
        subject: string,
        options?: Partial<TypeOptions>
      ): Chainable<Element>;
      visit(
        originalFn: CommandOriginalFn<any>,
        url: string,
        options: Partial<VisitOptions>
      ): Chainable<Element>;
    }
  }
}
