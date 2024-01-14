Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Bruna')
    cy.get('#lastName').type('Caciatori')
    cy.get('#email').type('brunacaciatorisilva@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})