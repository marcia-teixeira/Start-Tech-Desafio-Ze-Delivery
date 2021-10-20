//Elementos da página

export const ELEMENTS = {
    //Acessar e fazer login no site com usuário válido:
    
    URL: 'https://www.ze.delivery/',
    COOKIES: '#onetrust-accept-btn-handler',
    BUTTONLOGIN: '#welcome-button-sign-in',
    CAMPOEMAIL: '#login-mail-input-email',
    CAMPOSENHA: '#login-mail-input-password',
    BUTOONLOGON: '#login-mail-button-sign-in',
    VALIDARMAIORIDADE: '#age-gate-button-yes',


    //Dado que Cliente quer adiciona um produto no carinho
    
    CAMPOBUSCA: '#search-product-input',
    PRODBUSCADO: '.css-kzmtws-productCard > :nth-child(2) > :nth-child(1)',
    NOMEPRODUTO: 'Vinho Tinto Vivant 269ml',
    CARTAODOPRODUTONABUSCA: '.css-kzmtws-productCard',
    PREÇOPROD: '.css-1jqrnd2-priceText',
    BUTTONADICIONARASACOLA:'#add-product',

    //Quando o cliente adiciona mais 1 und do produto no carrinho
    MSGVALORMÍNIMOREQUERIDO: '.css-6y6jxv-minimumOrderValueBarText',
    BUTOONCONTINUARCOMPRA: '#finish-order',
    BUTTOADICIONARMAISUNIDDOPROD: '#product-plus-button',

    //Quando o cliente clica no botão continuar a compra e é direcionado para tela de checkout do pedido.
    //Então o botões de "Alterar produto", "Selecionar a forma de pagamento", "Adicionar cupom de desconto" devem está disponíveis.
    BUTTONEDITPROD: '#edit-products',
    SELECIONARFORMDEPAG: '#finish-order',
    BUTTONADDCUMPOM: '#checkout-card-coupon-details',
    CAMPOINSTRUCOESAODISTRIBUIDOR: '#checkout-textarea-checkout-comment',


    //Dado que o cliente chega na tela de checkout do pedido e deseja remover os produtos do carinho.
    BUTTONEXCLUIRPRODDASACOLA: '#product-delete-button',
    BUTTONADDMAISPRODASACOLA: '#add-more-products',
    POPUPCONFIRMAREXCLUSAODOPROD: '.css-ckrbdp-title',
    BUTTONCONFIRMAREXCLUSAODOPROD: '#primary-modal-button',
    MSGDESACOLAVAZIA: '.css-1nann0y-container > :nth-child(4)',



}