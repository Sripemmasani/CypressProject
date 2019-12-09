
describe ('Create account and ',function() {

    it('Gets,types and asserts',function(){

cy.visit('http://www.newtours.demoaut.com/')

cy.location('protocol').should('eq','http:')

cy.contains('REGISTER').click();

cy.url().should('include','mercuryregister')

cy.url().should('include','mercuryregiste')

  })
it('To create account',function(){

    cy.get('input[name="firstName"]').type('Abc1')

    cy.get('input[name="lastName"]').type('Xyz1')

    cy.get('input[name="phone"]').type('123456')
    
    cy.get('input[name="userName"]').type('Lathapemmasani@gmail.com')

    cy.get('input[name="address1"]').type('Address1')

    cy.get('input[name="city"]').type('Hyd')

    cy.get('input[name="state"]').type('Hyd')

    cy.get('input[name="postalCode"]').type('123456')

    cy.wait(1000)

    //cy.get('select#country > option').eq(1).click()

    cy.get('input[name="email"]').type('Abc')

    cy.get('input[name="password"]').type('Hab')

    cy.get('input[name="confirmPassword"]').type('Hab')

   cy.get('input[name="register"]').click()

   cy.contains('Dear Abc1 Xyz1').should('be.visible')

   
})

})