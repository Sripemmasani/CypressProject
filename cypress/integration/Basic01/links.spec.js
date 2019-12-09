describe('Checking links ', function(){

it('Links checking',function(){

 cy.visit('https://www.bing.com/')

 cy.location('protocol').should('eq','https:')


 cy.wait(20000)
 cy.contains('Images').click()
 cy.contains('Trending').should('be.visible')
 cy.go('back')

 cy.wait(20000)
 cy.contains('Videos').click()
 cy.contains('Bing video feed').should('be.visible')
 cy.go('back')
 
 cy.contains('Maps').click()
 cy.contains('Directions').should('be.visible')
 cy.go('back')
 

 cy.wait(10000)
 cy.contains('News').click()
 cy.contains('Top stories').should('be.visible')
 cy.go('back')

  })
 
  
})

it('Openes in new window',function(){

 cy.visit('https://www.bing.com/')  

 cy.contains('MSN').click()

 cy.contains('logo').should('be.visible')
})

it('openes office in a new window',function(){

    cy.visit('https://www.bing.com/')
 
       cy.get('ul.scopes').children().contains('Office').click({force:true})
         
          
        cy.contains('logo').should('be.visible')

   


})

it('openes outlook in a new window',function(){

    cy.visit('https://www.bing.com/')
 
     cy.get('ul.scopes').children().contains('Outlook.com').click({force:true})
         
     
        

})

