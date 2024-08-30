describe("download image file", () =>{

    it.skip("file download from ui", ()=>{

        cy.visit("https://the-internet.herokuapp.com/download")
        cy.contains("LambdaTest.txt")
    })


    it("download file using api", ()=>{
       cy.request({
        url: 'https://the-internet.herokuapp.com/download/LambdaTest.txt',
        encoding: 'base64',
      }).then((response) => {
        const base64Content = response.body
        const mime = response.headers['content-type'] 
        const imageDataUrl = `data:${mime};base64,${base64Content}`
        cy.writeFile('cypress/fixtures/fileDownload/LambdaTest.txt', base64Content)
      })
    })



} )