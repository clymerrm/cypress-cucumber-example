import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the to do page', () => {
    cy.navigateToPage()
});

Then('the to do entry input appears', () => {
    cy.get("input[data-test=new-todo]").should('be.visible');
});

Then('the to do entry input is hidden', () => {
    cy.get("input[data-test=new-todo]").should('not.be.visible');
});