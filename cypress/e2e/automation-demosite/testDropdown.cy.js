describe('Handle dropdown', () => {

    it('Select skills', () => {

        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('#Skills').should('be.visible')
        cy.get('#Skills option:first').should('have.text', 'Select Skills')
        cy.get('#Skills').should('have.value', '')
        cy.get('#Skills').select('Client Server')
        cy.get('#Skills').should('have.value', 'Client Server')
    })
})