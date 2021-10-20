Funcionalidade: Login
 A fim de testar se o login está sendo realizado da forma esperada
 Como usuário do site Zé Delivery
 Eu quero testar possibilidades de login com email inválido, senha incorreta e dados corretos
 De modo a garantir que o login será realizado com sucesso

 Contexto: O usuário deverá acessar um navegador de sua preferência e visitar a página de login do site Zé Delivery
  | Conta | Senha  | 
  | desafiostarttech@teste.com.br |  teste@1234  | 

Cenario: Email inválido
 Dado que o cliente possui uma conta ativa no Zé Delivery
 E deseja realizar login na plataforma
 Quando informa endereço de e-mail inválido e não informa senha
 Entao visualiza mensagem de erro "Eita, esse e-mail não parece correto"

Cenario: Senha incorreta
 Dado que o cliente possui uma conta ativa no Zé Delivery
 E deseja realizar login na plataforma
 Quando informa endereço de e-mail correto, mas senha incorreta
 Entao visualiza mensagem de erro "Senha incorreta"

Cenario: Dados corretos
 Dado que o cliente possui uma conta ativa no Zé Delivery 
 E deseja realizar login na plataforma
 Quando informa endereço de e-mail e senha corretos
 Entao é redirecionado para a página inicial de usuário logado no Zé Delivery