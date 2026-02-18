import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

When(/^Fill (.+) as "(.+)" on (Login|Shipping Details)$/i, (action, value) => {
    switch (action) {
        case "Email":
            cy.get("input[name='emailAddress']").type(value)
            break;
        case "Password":
            cy.get("input[name='password']").type(value)
            break
        case "Phone number":
            cy.get("input[name='phone']").type(value)
            
            break
        case "Street":
            cy.get("input[name='street']").type(value)
            sessionStorage.setItem("Street", value)
            break
        case "City":
            cy.get("input[name='city']").type(value)
            sessionStorage.setItem("city", value)
            break
    
        default:
            break;
    }
});

And(/^Click (Submit|Proceed to checkout|Submit Order) button$/i, (button) => {
    switch (button) {
      case "Submit":
        cy.get("#submitLoginBtn").click();
        break;
      case "Proceed to checkout":
        cy.get(".btn-purchase").click();
        break;
      case "Submit Order":
        cy.get("#submitOrderBtn").click();
        break;
      default:
        break;
    }
});

Then(/^System can login Success$/i, () => {
    cy.get("h2.section-header").should("have.text", "SHOPPING CART");
})

Then(/^System should show warning message "(.+)"$/i, () => {
    cy.get("#message").should(
      "have.text",
      "Bad credentials! Please try again! Make sure that you've registered."
    );
})