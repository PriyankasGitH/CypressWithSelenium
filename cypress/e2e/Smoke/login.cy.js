import 'dotenv/config'
import loginPage from "../../support/pages/loginPage";

describe("login page test",()=>{
    beforeEach('Open url and navigate to login page', ()=>{
        cy.visit('/')
        cy.contains("Signup / Login").click();

    })
    it("Login as valid user",()=>{  
        // User home page should be visible
        loginPage.LoginAsValidUser();
        let displayName = Cypress.env('displayName')
        cy.contains(`Logged in as ${displayName}`).should('be.visible')
        cy.contains('a', 'Logout').click();

        
    });

    it("Login with invalid credentials",()=>{
        let loginDetails={
            userName:"w23eqyffjcg@gmail.com",
            password:"Test1234", 
        };

    loginPage.fillLoginform(loginDetails)  
    cy.contains("Your email or password is incorrect!").should('be.visible')  
    })

    it("Login without entering the password",()=>{
        let loginDetails={
            userName:"w23eqcg@gmail.com"
        };
        loginPage.fillLoginform(loginDetails)
        cy.get('[data-qa="login-button"]').click();
        cy.get('[data-qa="login-password"]')
      .invoke('prop', 'validationMessage') 
      .should('equal', 'Please fill out this field.'); 
    })

    it("Login without username",()=>{
        let loginDetails={
            upassword:"Test1234"
        };
        loginPage.fillLoginform(loginDetails)
        cy.get('[data-qa="login-button"]').click();
        cy.get('[data-qa="login-email"]')
        .invoke('prop', 'validationMessage') 
        .should('equal', 'Please fill out this field.'); 
    })



})