class contactUs{
    
    fillConatctUsForm(formData){

        cy.get('[data-qa="name"]').type(formData.name);
        cy.get('[data-qa="email"]').type(formData.email[1]);
        cy.get('[data-qa="subject"]').type(formData.subject);
        cy.get('[data-qa="message"]').type(formData.message);
    
        cy.get('[name="upload_file"]').selectFile(
        {             
            contents: formData.filePath,
            fileName:'randomscreenshot.png',
            lastModified:new Date() 
    
        });
    
    }


}

export default new contactUs()