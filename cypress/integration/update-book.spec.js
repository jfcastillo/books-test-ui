const faker = require('faker').random;
const bookName = faker.words(1)
const bookAuthor = "FelipeCastillo"
describe("When the user want to update an existen book", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
        cy.get('tbody .ant-table-cell input[type=checkbox]').eq(0).click()
        cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only').eq(0).click()
        cy.get('#name').clear()
        cy.get('#name').type("nombre actualizado")
        cy.get('.ant-modal.ng-tns-c57-2 button.ant-btn-primary').click()
        // cy.get('#author').then(($auth) => {
        //     const author = $auth.text()
        //     console.log("Autor " + author)
        // })
        // cy.get('#name').type(author)
    });
    it("The the book should be listed with the right name and author", () => {
        // cy.get('tbody td.ant-table-cell').eq(0).should("have.text", "nombre actualizado")
        cy.get('tbody td.ant-table-cell').eq(0).contains("nombre actualizado")
    });
});