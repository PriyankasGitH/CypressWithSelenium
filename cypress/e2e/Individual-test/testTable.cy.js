describe('Test Table Value',()=>{

    it("",()=>{
        cy.visit("https://the-internet.herokuapp.com/tables")
        let email = "jsmith@gmail.com"
        getDue(email)
       
    })

    function getDue(email){
        
        cy.contains(email).next().then($ele=>{
            cy.wrap($ele).invoke('text').then(data=>{
                cy.log('data::'+data)
            })
        })
    } 

})