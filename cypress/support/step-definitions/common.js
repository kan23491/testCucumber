import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^open browser Test login$/i, () => {
    cy.visit("https://qa-practice.razvanvancea.ro/auth_ecommerce.html");
})