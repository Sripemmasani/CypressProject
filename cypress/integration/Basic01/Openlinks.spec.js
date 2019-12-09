describe ('My first Test',function() {

    it('Gets,types and asserts',function(){

cy.visit('https://www.cypress.io/')

 cy.contains('features').click()
 cy.url().should('include','features')

 cy.go('back')

 cy.url().should('include','cypress')

 cy.contains('How it works').click()

 cy.url().should('include','/how-it-works')
 cy.go('back')

  



    })

    })