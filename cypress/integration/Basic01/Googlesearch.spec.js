describe ('Google search',function(){


    it('Searching for Cypress', function(){

        cy.visit('http://www.google.com')
       
        cy.get('[type=text]').type('www.guru.com')
               
        cy.wait(2000)

        cy.get('.gNO89b').contains('Google Search').click()

              cy.url().should('include','/search')
    })


})