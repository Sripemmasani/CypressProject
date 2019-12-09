
describe("Orange HRM", function () {

it('OrangeHRM login',function(){


    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.location('protocol').should('eq','https:')

    cy.contains('txtUsername').type('Admin')

    cy.get('input[name=txtPassword]').type('admin123')

    cy.get('#btnLogin').contains('LOGIN') .click();

    cy.contains('Dashboard').should('be.visible')

    cy.wait(1000)

    cy.get('[id="menu_admin_viewAdminModule"]').contains('Admin').click() 

    cy.get('[id="btnAdd"]').click()

    cy.get('[id="systemUser_userType"]').select('Admin').should('have.value','1')
    
    cy.get('[id="systemUser_employeeName_empName"]').clear().type('Linda Anderson')

    cy.get(' [id="systemUser_userName"]').clear().type('LindaAd1')

    cy.get('[id="systemUser_status"]').select('Enabled').should('have.value','1')

    cy.get('[id="systemUser_password"]').type('LindaAd1234')

    cy.get('[id="systemUser_confirmPassword"]').type('LindaAd1234')

    cy.get('[id="btnSave"]').click()    
 
   
    
 
   
}) 


})