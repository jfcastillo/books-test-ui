describe("When the user want to list the books", () => {
    before(() => {
        cy.visit("https://librarycicd-ui.herokuapp.com/dashboard");
    });
    it("Then there should be a table with name and author ", () => {
        cy.get('.ant-table-thead > .ant-table-row > :nth-child(2)').contains("Name")
        cy.get('.ant-table-thead > .ant-table-row > :nth-child(3)').contains("Author")
    });
});
