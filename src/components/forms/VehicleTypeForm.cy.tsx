import { VehicleTypeForm } from "./VehicleTypeForm";

describe("<VehicleTypeForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VehicleTypeForm />);
  });
});
