Funcionalidade: Criar um novo cadastro
 A fim de testar as possibilidades de criação de um novo cadastro
 Como um usuário do site Zé Delivery
 Iremos testar diferentes cenários e possibilidades de cadastros inválidos e realizar um cadastro válido
 De modo a garantir que o cadastro está sendo validado de forma correta

 Contexto: O usuário deverá acessar o site Zé Delivery para criar uma nova conta de acesso
  |Conta Exemplo           |Senha Exemplo  | 
  |testezedelivery@teste.com|  teste@1234  | 
 
Cenario: Cadastro com um CPF inválido
 Dado Que o usuário acessa a página de cadastro do site Zé Delivery
  Quando Ele insere todos os seus dados corretamente, porém com um CPF inválido
  E Clica na caixa de seleção para aceitar os termos e condições
  E Clica na caixa de seleção para aceitar os e-mails e SMS de marketing
  E Tenta clicar no botão para criar a conta
  Entao O botão deverá estar indisponível, pois o site reconhece que o CPF não é um CPF válido e deverá deixar o botão impossibilitado de clicar.
  O site exibirá a mensagem "Seu CPF não parece correto"
Cenario: Cadastro com uma senha inválida
 Dado Que o usuário acessa a página de cadastro do site Zé Delivery
  Quando Ele insere todos os seus dados corretamente, porém com uma senha inválida
  (menos de 8 caracteres ou sem uma letra minúscula ou sem um número ou sem um caracter especial)
  E Clica na caixa de seleção para aceitar os termos e condições
  E Clica na caixa de seleção para aceitar os e-mails e SMS de marketing
  E Tenta clicar no botão para criar a conta
  Entao O botão deverá estar indisponível, pois o site reconhece que a senha não segue os padrões pré-estabelecidos e deverá deixar o botão impossibilitado de clicar.
  O site exibirá a mensagem "O campo senha não pode ficar vazio"
Cenario: Cadastro de um usuário menor de 18 anos
 Dado Que o usuário acessa a página de cadastro do site Zé Delivery
  Quando Ele insere todos os seus dados corretamente, porém com a idade menor de 18 anos
  E Clica na caixa de seleção para aceitar os termos e condições
  E Clica na caixa de seleção para aceitar os e-mails e SMS de marketing
  E Tenta clicar no botão para criar a conta
  Entao O botão deverá estar indisponível, pois o site reconhece que o usuário não preenche os requisitos de idade e deverá deixar o botão impossibilitado de clicar.
  O site exibirá a mensagem "Sua idade deve ser maior que 18 anos"
Cenario: Cadastro válido
 Dado Que o usuário acessa a página de cadastro do site Zé Delivery
  Quando Ele insere todos os seus dados corretamente
  E Clica na caixa de seleção para aceitar os termos e condições
  E Clica na caixa de seleção para aceitar os e-mails e SMS de marketing
  E Tenta clicar no botão para criar a conta
  Entao O usuário conseguirá finalizar o seu cadastro e será redirecionado para uma página de confirmação do cadastro através de um SMS que será enviado para o número
  de telefone informado