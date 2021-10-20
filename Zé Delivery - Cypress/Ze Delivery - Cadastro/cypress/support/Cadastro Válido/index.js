const el = require('../Common/elements').ELEMENTS;

class CadastroValido {
    
    preencherCadastro(){
        cy.get(el.nome).type('Teste Teste');
        cy.get(el.email).type('testezedelivery@teste.com');
        cy.get(el.senha).type('teste@1234');
        cy.get(el.cpf).type('00000000000');
        cy.get(el.celular).click({force: true}).type('99999999999');
        cy.get(el.idade).type('28');
        cy.get(el.aceitarcondicoes).click();
        cy.get(el.aceitarmarketing).click({force: true});
    }
    criarConta(){
    cy.get(el.botaocriarconta).should('be.visible');
    cy.get(el.botaocriarconta).click();
    cy.get(el.phonevalidation, {timeout: 60000}).click();
    }
}

export default new CadastroValido();