/// <reference types="cypress"> />


import buscaZe from '/AUTOMAÇÃO/cypress/support/zeDelivery/açoes'


    it.only('Realizar buscar e validar nome e preço', () => {
        

    
     buscaZe.acessarsite();
     buscaZe.acessarLogin();
     buscaZe.preencherDados();
     buscaZe.guiaBuscar();
     buscaZe.validarNomeePreço();
    });
///})
