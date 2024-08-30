import 'dotenv/config'

class LoginPage{

    fillLoginform(loginDetails){

        if(loginDetails.hasOwnProperty('userName'))
            cy.get('[data-qa="login-email"]').type(loginDetails.userName);
        if(loginDetails.hasOwnProperty('password'))
            cy.get('[data-qa="login-password"]').type(loginDetails.password);
            cy.get("[data-qa='login-button']").click()
    }
    
    LoginAsValidUser(){ // we are here : will get updated
        let loginDetails = {

            userName: Cypress.env('userName'),
            password: Cypress.env('password'),
       
    };
       
        this.fillLoginform(loginDetails)
        // userHome page should be displayed
    

}
}

export default new LoginPage()