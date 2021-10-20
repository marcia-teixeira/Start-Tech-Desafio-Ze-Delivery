const el = require('./elements').ELEMENTS

export function acessarpaginadecadastro() {
    cy.visit(el.site);
    cy.get(el.cookies).click();
    cy.get(el.entrar).click();
    cy.get(el.createaccount).click();
}