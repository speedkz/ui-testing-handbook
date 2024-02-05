import { formSystem } from "components/core-ui/form";
import { AUTH_APIS } from "services/auth.service";
import { SAMPLE } from "../../src/sample-data";

describe("The login page success", () => {
  beforeEach(() => {
    cy.requestPostSuccess(`/${AUTH_APIS.login}`, SAMPLE.USER_INFORMATION);
  });
  it("Submit form", () => {
    cy.visit("http://localhost:6005/");
    cy.fillForm(formSystem().login, SAMPLE.USER_LOGIN);
    cy.submitForm();
    cy.url().should("equal", "http://localhost:6005/shipping-order");
  });
});

describe("The login page fail", () => {
  beforeEach(() => {
    cy.requestPostInternalError(`/${AUTH_APIS.login}`, SAMPLE.USER_INFORMATION);
  });
  it("Submit form", () => {
    cy.visit("http://localhost:6005");
    cy.fillForm(formSystem().login, SAMPLE.USER_LOGIN);
    cy.submitForm();
    cy.url().should("equal", "http://localhost:6005/");
  });
});
