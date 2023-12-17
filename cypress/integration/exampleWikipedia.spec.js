// <reference types="cypress" />

context('Wikipedia', () => {
    beforeEach(() => {
        cy.visit('/');  //navegar a la pagina ppal
    });

    it('Test 1 - BddExpectation', () => {   //Nombre del test
        cy.get('#wwwwikipedia-org #searchInput').type("Globant {enter}")

        cy.get(".mediawiki #firstHeading").should("be.visible")

        cy.get(".mediawiki #firstHeading").should("contain", "Globant")
        
    });
});
