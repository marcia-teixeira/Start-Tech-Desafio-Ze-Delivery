Funcionalidade: Sacola de compras
 A fim de realizar buscas de produtos para adicionar a sacola de compras do site Zé Delivery,
 Como usuário com conta válida e logon realizado no site, 
 Eu quero poder ter acesso as funcionalidades de busca, adição e exclusão de produtos e checkout do pedido.
 De modo que eu possa visualizar quantidade, preço dos produtos, detalhe dos produtos e detalhes do pedido.
Contexto: O Usuário precisa estar logado no site do Zé Delivery com uma conta válida.
  |             Conta usuário          |   Senha    | 
  |      testezedelivery@teste.com     | teste@1234 | 
 
Cenario: Buscar o produto
 
    Dado que o usuário possui uma conta de usuário
    E realiza o logon no site
    E está na página inicial do sistema e deseja buscar um produto e adicionar a sacola
    Quando o usuário digitar o nome de um produto válido no campo de busca
    Entao o usuário deve visualizar uma lista suspensa ao campo de busca com o produto com nome igual ao texto buscado.
 
Cenario: Detalhe do produto
 
    E o usuário clica sobre o nome do produto na lista suspensa do campo de busca
    Quando ele é direcionado para página de detalhe do produto
    Entao ele deve ter visivel nome e preço do produto.
 
Cenario: Adicionar o produto a sacola

    E o usuário clica no botão adicionar produto a sacola
    Quando a quantidade do produto adicionado não atingir o valor mínimo para pedido
    Entao a mensagem de "Faltam R$** para o valor mínimo do pedido" deve ser exibida
    e o botão "Continuar compra" não deve estar habilitado.

Cenario: Adicionar mais do produto a sacola atingindo o valor mínimo do pedido.
 
    E o usuário clicar no botão "Adicionar mais quantidade do produto" que está na sacola
    afim de atingir o valor mínimo do pedido
    Quando o usuário atingir ou superar o valor mínimo do pedido
    Entao a mensagem "Faltam R$** para o valor mínimo do pedido" deixa de ser exibida e
    o botão "Continuar compra" deve ser habilitado.

Cenario: Continuar compra
  
    E o usuário clicar no botão "Continuar compra"
    Quando o usuário for direcionado para página de checkout do pedido
    Entao os botões "Alterar Produto", "Selecionar forma de pagamento", "Adicionar cupom de desconto"
    e o campo "Instruções para o distribuidor" devem estar habilitados.

Cenario: Alterar produtos da sacola pela página de checkout do pedido
 
    E o usuário clicar no botão "Alterar produtos"
    Quando o usuário for direcionado para a aba da sacola de compras
    Entao os botões "Lixeira" e "Adicionar mais produtos" devem estar habilitados.

Cenario: Excluir produto da sacola
 
    E o usuário está na aba da sacola de compras
    Quando o usuário clica no botão "Lixeira" do produto na sacola
    Entao um Pop-up com a mensagem "Você deseja remover este produto?" deve ser exibida.


Cenario: Confirmação de exclusão do produto da sacola de compras

    E o usuário está na tela Pop-up da mensagem "Você deseja remover este produto?"
    Quando o usuário clica no botão "OK"
    Entao a aba da sacola de compras deve ser exibido com a seguinte mensagem 
    "Putz, está vazia! Você não possui nenhum produto na sua sacola" confirmando a
    remoção do produto da sacola de compras.