///<reference types ="cypress" />

export function logonusuariovalido() {
      
    cy.viewport(1250, 800)
    cy.visit('https://www.ze.delivery/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#welcome-button-sign-in').click()
    cy.get('#login-mail-input-email').type('testezedelivery@teste.com')
    cy.get('#login-mail-input-password').type('teste@1234')
    cy.get('#login-mail-button-sign-in').click()
    //Validar maioridade
    cy.get('#age-gate-button-yes',{timeout:30000}).click()


}
  