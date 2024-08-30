describe('Login Test', ()=>{

    it('check first checkbox', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.contains('Checkboxes').should('be.visible')
        cy.get('#checkboxes input').first().should('not.be.checked')
        cy.get('#checkboxes input').first().check().should('be.checked')
        cy.wait(10000)
        cy.get('#checkboxes input').last().check()
        cy.wait(5000)
        cy.get('#checkboxes input').last().uncheck().should('not.be.checked')
    })

})