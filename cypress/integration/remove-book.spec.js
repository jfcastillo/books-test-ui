const faker = require('faker').random;
const bookName = faker.words(1)
const bookAuthor = "FelipeCastillo"
let name = "";
describe("When the user want to register a new book", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
        cy.get('tbody .ant-table-cell input[type=checkbox]').eq(0).click()
        cy.get('tbody td.ant-table-cell').eq(1).then(($cellname) => {
            name = $cellname.text()
        })
        cy.get('[nztype="default"]').click()

    });
    it("Then the book removed shouldn't exist", () => {
        cy.get('table').contains('td', name).should('not.exist')
    });
});

