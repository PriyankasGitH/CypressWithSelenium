describe("api requests", ()=>{

   
    it('should get user details using GET API', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
          .then((response) => {
          cy.log('Response:', JSON.stringify(response.body));
          expect(response.status).to.eq(200);
          expect(response.body.data[0].first_name).to.eq('Michael');
        });
    });
     
 

    it('should register a user using POST API with data from fixture', () => {
        cy.fixture('api/register.json').then((data) => {
          const postData = data.postData; 
    
       
          cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: postData,
            headers: {
              'Accept': 'application/json'
            },
            failOnStatusCode: false 
          }).then((response) => {
          
            cy.log('Response:', JSON.stringify(response.body));
    
  
            if (response.status === 200) {

              expect(response.status).to.eq(200); 
              expect(response.body.token).to.exist; 
            } else {
 
              expect(response.status).to.not.eq(400); 
            }
          });
        });
      });
 
      it('should update user details using PUT API with data from fixture', () => {

        cy.fixture('api/register.json').then((data) => {
          const putData = data.putData; 
          const userId = 2; 
    
     
          cy.request({
            method: 'PUT',
            url: `https://reqres.in/api/users/${userId}`,
            body: putData,
            headers: {
              'Accept': 'application/json'
            }
          }).then((response) => {

            cy.log('PUT Response:', JSON.stringify(response.body));
    
            expect(response.status).to.eq(200); 
            expect(response.body.name).to.eq(putData.name); 
            expect(response.body.job).to.eq(putData.job);   
          });
        });
      });
      
      
      it('should delete a user and receive a 204 No Content response', () => {
        cy.request({
          method: 'DELETE',
          url: 'https://reqres.in/api/users/2',
          headers: {
            'Accept': 'application/json'
          },
          failOnStatusCode: false 
        }).then((response) => {
          cy.log('DELETE Response:', JSON.stringify(response.body));
    
          expect(response.status).to.eq(204);
          expect(response.body).to.be.empty; 
        });
      });    
         
});

