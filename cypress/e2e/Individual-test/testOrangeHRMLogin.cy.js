
// OrangeHRM login
describe('template spec',() =>{

    it('passes',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').type('Admin',{delay:2000})
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.url().should('include','dashboard/index')
    })

})



