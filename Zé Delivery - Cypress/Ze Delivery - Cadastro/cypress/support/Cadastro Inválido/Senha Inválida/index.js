const el = require('../../Common/elements').ELEMENTS;

class SenhaInvalida {

    letraMinuscula() {
        cy.get(el.nome).type('Teste Teste');
        cy.get(el.email).type('testezedelivery@teste.com');
        cy.get(el.senha).type('TESTE@1234');
        cy.get(el.cpf).type('00000000000');
        cy.get(el.celular).click({force: true}).type('99999999999');
        cy.get(el.idade).type('25');
        cy.get(el.aceitarcondicoes).click();
        cy.get(el.aceitarmarketing).click({force: true});
    }

    mensagemErro() {
        cy.get(el.senhaerrormessage).should('be.visible')
    }

    botaoCriarconta() {
        cy.get(el.botaocriarconta).should('be.disabled')
    }

    semNumero() {
        cy.get(el.nome).type('Teste Teste');
        cy.get(el.email).type('testezedelivery@teste.com');
        cy.get(el.senha).type('teste@teste');
        cy.get(el.cpf).type('00000000000');
        cy.get(el.celular).click({force: true}).type('99999999999');
        cy.get(el.idade).type('25');
        cy.get(el.aceitarcondicoes).click();
        cy.get(el.aceitarmarketing).click({force: true});
    }
    semCaracterespecial() {
        cy.get(el.nome).type('Teste Teste');
        cy.get(el.email).type('testezedelivery@teste.com');
        cy.get(el.senha).type('teste1234');
        cy.get(el.cpf).type('00000000000');
        cy.get(el.celular).click({force: true}).type('99999999999');
        cy.get(el.idade).type('25');
        cy.get(el.aceitarcondicoes).click();
        cy.get(el.aceitarmarketing).click({force: true});
    }
    digitosInsuficientes() {
        cy.get(el.nome).type('Teste Teste');
        cy.get(el.email).type('testezedelivery@teste.com');
        cy.get(el.senha).type('teste@1');
        cy.get(el.cpf).type('00000000000');
        cy.get(el.celular).click({force: true}).type('99999999999');
        cy.get(el.idade).type('25');
        cy.get(el.aceitarcondicoes).click();
        cy.get(el.aceitarmarketing).click({force: true});
    }
}

export default new SenhaInvalida();