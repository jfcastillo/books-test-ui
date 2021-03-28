const faker = require('faker').random;
const bookName = faker.words(1)
const bookAuthor = "FelipeCastillo"
describe("When the user wants to update an existent book", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");

    });
    describe("When the user failed at update a new book", () => {
        before(() => {
            cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only').eq(1).click()
            cy.wait(1000);
            cy.get('#name').clear()
            cy.wait(1000);
            cy.get('#author').clear()
        });
        it("Then the Save button should be disabled", () => {
            cy.get('.ant-modal-footer .ant-btn-primary').should('be.disabled')
        });
    });
    describe("When the user want to update an existen book succesfully", () => {
        before(() => {
            cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
            cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only').eq(0).click()
            cy.wait(1000);
            cy.get('#name').clear()
            cy.wait(1000);
            cy.get('#name').type("nombre actualizado")
            cy.get('.ant-modal.ng-tns-c57-2 button.ant-btn-primary').click()
            cy.wait(1000);
        });
        it("Then the book should be listed with the updated name", () => {
            cy.get('tbody td.ant-table-cell').eq(1).contains("nombre actualizado")
        });
    });

});