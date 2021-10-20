///<reference types ="cypress" />

//Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados
//sensíveis. No caso de reprodução do teste, recomenda-se a utilização de uma conta válida para realizar o logon no site.

const { and } = require("ramda")

    // Treinamento Trilha QA
    //Desafio Zé Delivery - Márcia Teixeira

    
   
    import {
        logonusuariovalido
    } from"../support/Page Objects/fuctions"

    import Fluxosacolacompras from '../support/Page Objects/index'

  describe('Validar fluxo sacola de compras', () =>{

    before(() =>{

        logonusuariovalido()
    
    })


    it('Adicionar 1 un de produto a Sacola / Aumentar QTD do produto para o pedido mínimo / Continuar Compra / Remover Produto da Sacola', () =>{

               
        //Dado que Cliente quer adiciona um produto na Sacola 
        
        //Quando o cliente adiciona o produtos na sacola e não atinge o valor mínimo de compra.

        Fluxosacolacompras.Adicionarproduoasacola();
  

        //Dado que o cliente quer adicionar mais do produto no carinho para atingindo ou superando o valor mínimo  de compra.

        Fluxosacolacompras.Adicionarmaisprodutosnasacola();

        //Dado que o cliente quer continuar a compra

        Fluxosacolacompras.Continuarcompra();

        //Dado que o cliente chega na tela de checkout do pedido e deseja remover os produtos da sacola.

        Fluxosacolacompras.TeladeCheckoutRemoverProd();
      
                   
    })     


  })