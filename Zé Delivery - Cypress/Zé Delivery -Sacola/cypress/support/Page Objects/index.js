//Ações de interação com a página para buscar produtos

const el = require('./Elements').ELEMENTS;

class Fluxosacolacompras{

    Adicionarproduoasacola(){
        
        //Dado que Cliente quer adiciona um produto no carrinho 
        
        //Quando o cliente adiciona o produtos no carrinho e não atinge o valor mínimo de compra.
        cy.get(el.CAMPOBUSCA).type('Vinho Tinto Vivant 269ml')
        cy.get(el.PRODBUSCADO,{timeout:50000}).should('have.text', 'Vinho Tinto Vivant 269ml')
        cy.get(el.CARTAODOPRODUTONABUSCA).click()
        cy.get(el.PREÇOPROD,{timeout:60000}).contains('R$ 14,49')
        cy.get(el.BUTTONADICIONARASACOLA,{timeout:60000}).click({forte:true})
        //Então a mensagem: Faltam R$ para o valor mínimo do pedido, deve ser exibida na aba do carrinho de compras.
        cy.get(el.MSGVALORMÍNIMOREQUERIDO).should('be.visible')
        cy.get(el.MSGVALORMÍNIMOREQUERIDO,{timeout:60000}).should('contain','para o valor mínimo do pedido')
        //E o botão "Continuar Compra" estará desabilitado.
        cy.get(el.BUTOONCONTINUARCOMPRA,{timeout:10000}).should('not.be.enabled')
    
        }
    Adicionarmaisprodutosnasacola(){
        //Dado que o cliente quer adicionar mais do produto no carrinho para atingindo ou superando o valor mínimo  de compra.

        //Quando o cliente adiciona mais 1 und do produto no carrinho
        cy.get(el.BUTTOADICIONARMAISUNIDDOPROD,{timeout:10000}).dblclick({force:true})
        //cy.get(el.BUTTOADICIONARMAISUNIDDOPROD,{timeout:10000}).click({force:true})
        
        //Então a mensagem de valor faltante para compra mínima desaparece e o botão de "Continuar Compra" será habilitado.
        cy.get(el.BUTOONCONTINUARCOMPRA,{timeout:50000}).should('be.enabled')
        cy.get(el.MSGVALORMÍNIMOREQUERIDO,{timeout:50000}).should('not.exist')


    }
    
    Continuarcompra(){

         //Dado que o cliente quer continuar a compra

        //Quando o cliente clica no botão continuar a compra e é direcionado para tela de checkout do pedido.
        cy.get(el.BUTOONCONTINUARCOMPRA,{timeout:60000}).click({force:true})
        //Então o botões de "Alterar produto", "Selecionar a forma de pagamento", "Adicionar cupom de desconto" devem está disponíveis.
        cy.get(el.BUTTONEDITPROD,{timeout:60000}).should('be.visible')
        cy.get(el.SELECIONARFORMDEPAG).should('be.enabled')
        cy.get(el.BUTTONADDCUMPOM).should('be.visible')
        //E o campo "Instruções para o distribuidor" deve estar disponível.
        cy.get(el.CAMPOINSTRUCOESAODISTRIBUIDOR,{timeout:60000}).should('be.visible')


    }

    TeladeCheckoutRemoverProd(){

        //Quando o cliente clica no botão "Alterar produtos"
        cy.get(el.BUTTONEDITPROD).click()
        //Então as opções de Remover produtos adicionados ao carrinho e adicionar mais produtos devem estar disponíveis.
        cy.get(el.BUTTONEXCLUIRPRODDASACOLA,{timeout:50000}).should('be.visible')
        cy.get(el.BUTTONADDMAISPRODASACOLA,{timeout:50000}).should('be.visible')
        //E quando o cliente clica no botão lixeira do produto.
        cy.get(el.BUTTONEXCLUIRPRODDASACOLA).click()
        //Surgir o pop-up "Você deseja remover este produto?" e clica no botão "OK"
        cy.get(el.POPUPCONFIRMAREXCLUSAODOPROD,{timeout:50000}).should('contain','Você deseja remover este produto?')
        cy.get(el.BUTTONCONFIRMAREXCLUSAODOPROD).click()
        //Então a mensagem "Putz, está vazia! Você não possui nenhum produto na sua sacola" deve ser exibida confirmando a remoção do produto.
        cy.get(el.MSGDESACOLAVAZIA).should('be.visible')


    }
       
    
    
    

}
export default new Fluxosacolacompras();