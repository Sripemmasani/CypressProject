
describe ('My first Test',function() {

    it('Gets,types and asserts',function(){

cy.visit('https://opensource-demo.orangehrmlive.com/')

cy.contains('txtUsername').type('Admin')


cy.get('input[name=txtPassword]').type('admin123')

//cy.contains('txtPassword').type('admin123') - works sometimes only

     
cy.get('#btnLogin').contains('LOGIN') .click();

cy.url().should('include','https://opensource-demo.orangehrmlive.com/index.php/dashboard')

cy.get('#welcome').contains('Welcome Admin').click()

cy.wait(2000)

cy.contains('Logout').click()

cy.url().should('include','login')

})
})