const faker = require('faker').random;
const bookName = faker.words(1)
const bookAuthor = "FelipeCastillo"
describe("When the user want to register a new book", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary .ng-star-inserted').click()
    });
    describe("When the user trye to register a new book succesfully", () => {
        before(() => {
            cy.wait(1000);
            cy.get('#name').type(bookName)
            cy.wait(1000);
            cy.get('#author').type(bookAuthor)
            cy.get('.ant-btn.ant-btn-primary.ng-star-inserted').click()
            cy.contains('10 / page').click();
            cy.contains('50 / page').click();
        });
        it("Then the book should be listed with the right name and author", () => {
            cy.get('table').contains('td', bookName).should('be.visible')
            cy.get('table').contains('td', bookAuthor).should('be.visible')
        });
    });
    describe("When the user failed at register a new book", () => {
        before(() => {
            cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
            cy.get('.table-button.ant-btn.ant-btn-primary').click()
            cy.get('#name').type(bookName)
        });
        it("Then the Save button should be disabled", () => {
            cy.get('.ant-modal-footer .ant-btn-primary').should('be.disabled')
        });
    });
});
