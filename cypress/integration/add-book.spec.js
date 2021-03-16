const faker = require('faker').random;
const bookName = faker.words(1)
const bookAuthor = "FelipeCastillo"
describe("When the user want to register a new book", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
        cy.get('.table-button.ant-btn.ant-btn-primary').click()
        cy.get('#name').type(bookName)
        cy.get('#author').type(bookAuthor)
        cy.get('.ant-btn.ant-btn-primary.ng-star-inserted').click()
    });
    it("The the book should be listed with the right name and author", () => {
        cy.get('table').contains('td', 'a').should('be.visible')
    });
});