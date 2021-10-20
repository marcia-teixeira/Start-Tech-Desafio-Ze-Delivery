![Logo](https://github.com/Ingrid2110rj/DesafioZe/blob/main/logocorreta.jpeg)
---
<h1 align="center">
Start Tech | Desafio Zé Delivery
</h1>

>*Este projeto foi elaborado e desenvolvido no âmbito do treinamento do Start Tech 2021.
O grupo escolheu a plataforma do Zé Delivery [https://www.ze.delivery/] para a realização dos testes, baseados no desafio proposto pela empresa [https://github.com/ZXVentures/ze-code-challenges/blob/master/qa.md].*

### Atividades

- Criação de 10 a 30 cenários de teste, de tema livre;
- Utilização das ferramentas utilizadas durante o treinamento;
- Relatório de Problemas (Caixa Preta - Caixa Branca);
- Hospedar projeto no repositório do GitHub;
- Testar os projetos das outras equipes do treinamento.

### Entregas solicitadas

+ Caderno de testes (Excel)
+ Testes automatizados (Visual Studio Code e Cypress)
+ Teste de API (Postman)
+ Teste de performance (Apache JMeter)

### Teste de automação de IU
>*Fluxo crítico selecionado: Fluxo de compra*

Ferramentas utilizadas:
+ JavaScript
+ Cypress
+ Hooks
+ Page Objects
+ BDD

### Pré-Requisitos 
+ nodeJS e npm
+ vscode 
+ cypress
+ postman
+ jmeter

### Instalação

>######  Clonar projeto
- Clonar este repositório usando _ssh_ ou _https_.

>###### Exemplo:
```js
$ git clone https://github.com/raquelcassia/zedelivery-challenge.git
```

- Através de um terminal, navegue até o diretório do projeto e instale as dependências npm com o comando:

```js
$ npm install
```
-----------------------

---
# 🚩 *O desafio*

>Após análise do grupo, foram selecionadas quatro entre as principais funcionalidades existentes no Zé Delivery, que representam um possível fluxo de compra de produtos, desde o acesso ao site, passando pelo cadastro, login e seleção de produtos, até a finalização da compra. O processo de seleção resultou na elaboração de 20 cenários.
Os cenários de teste foram representados no respectivo caderno de testes e nos scripts automatizados pelo Visual Studio Code e executados no software de automação de testes Cypress. A aplicação de boas práticas foi priorizada, resultando na utilização de Page Objects e Hooks e da linguagem Gherkin para construção dos casos de teste apresentados, estes disponíveis no projeto nos arquivos .feature. Durante a realização dos testes, não foram encontradas falhas, portanto não foi elaborado relatório de erros.


## 1. Teste de Performance

Já para analisar a performance do site, foram realizados testes com 1 e 100 acessos de usuários em duas das páginas de principais fluxos: página inicial e busca de produtos.



## 2. Teste de API

Optamos por utilizar o Postman para realização do teste automatizado no site Postmon.
A API utilizada foi de busca de CEP dos Correios, como é uma API baseada em REST, 
basta fazer a seguinte chamada para consultar um CEP: 
+ URL: https://api.postmon.com.br/v1/cep/*cep_a_consultar*

Onde cep_a_consultar é o número do CEP que deseja consultar as informações, o resultado é retornado em formato JSON.
Para obter o retorno em formato XML, basta acrescentar: “?format=xml” no final da requisição GET no postman.

## 🚩 Identificação dos Fluxos Críticos:

### 1. Cadastro

A funcionalidade de cadastro permite que o usuário se registre na plataforma para que possa utilizar os produtos e serviços ofertados pelo Zé Delivery.
A interface da área de cadastro deve ser clara e objetiva e atender critérios para que o usuário crie contas reais dentro do site.
Importante ressaltar que parte do público alvo do Zé Delivery é composto por usuários maiores de 18 anos, já que bebidas alcoólicas são os principais produtos comercializados no site. Por isso, é de extrema importância que essa verificação seja feita de forma assertiva. 
O usuário pode se registrar por meio do preenchimento dos dados pessoais ou conectar-se às contas do Facebook ou da Apple.

### 2. Login

Considerando a pré-condição de usuário cadastrado na plataforma, o login é o próximo passo para viabilizar as compras no Zé Delivery. Ao conectar às contas do Facebook/Apple ou informar e-mail e senha previamente cadastrados na plataforma, o usuário será redirecionado a uma mensagem de confirmação de idade e, em seguida, poderá acessar a lista de produtos disponíveis para a localidade informada naquela data e horário.

### 3. Busca

O campo de buscas no site Zé Delivery identificado como “Pesquise sua bebida favorita” tem como objetivo principal fazer com que o usuário busque e encontre os produtos que deseja comprar.  A funcionalidade é de extrema importância, já que atua como uma torre que liga o que o usuário deseja com o que a empresa fornece.
O campo de busca deve ser sempre acessível, visível e preferencialmente no header. Deve também ser corretamente identificado e levar em consideração os termos mais comuns buscados pelos usuários no site. As seguintes variáveis são importantes na realização de  uma busca: horário de funcionamento dos parceiros na região demandada e se o produto se encontra disponível.
A busca do site é bastante voltada para a parte de localização, o que o torna variável de usuário para usuário, já que depende da localidade na qual ele se encontra  no momento da busca e da realização do pedido. 

### 4. Sacola

Já na Sacola de compras, o usuário pode separar os produtos que deseja comprar, desde que disponíveis na região do seu endereço, ter acesso à edição e à exclusão de produtos da sacola, visualizar o preço dos produtos selecionados, o frete e o valor total do pedido. Ao acessar a página de checkout do pedido, o usuário pode antes de concluir a compra,  alterar os produtos, selecionar a forma de pagamento, adicionar cupom de desconto e sinalizar informações de orientação ao distribuidor.
Na sacola de compras o usuário deve ter a indicação clara do valor mínimo de pedido para sua região.

### :pushpin: Observações importantes

1. A disponibilidade do produto utilizado para realizar o teste da funcionalidade da sacola de compras depende do estoque disponível nos parceiros da sua região, podendo haver a necessidade de substituição do produto para que o teste seja executado.

2. Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados sensíveis. No caso de reprodução do teste, recomenda-se a utilização de uma conta real para realizar o login no site.

### :pushpin: Sugestões

1. A mensagem de erro exibida na criação de uma nova conta com uma senha que não segue os pré-requisitos exigidos poderia utilizar uma mensagem como “A senha não corresponde aos pré-requisitos”, pois atualmente a mensagem apenas diz que “o campo senha não pode ficar vazio”, mesmo o usuário tendo preenchido algo.

2. Ao digitar uma idade menor que 18 anos, o site apenas informa uma mensagem “sua idade deve ser maior que 18 anos”. Ou seja,  mesmo sendo menor de idade, o usuário pode alterar a idade e prosseguir com a compra.

3. Ainda no campo de verificação da idade, o site não pede um registro formal, como a data de nascimento do usuário. Apenas que o usuário digite sua idade.

4. Oferecer a opção de pagamento pelo site ou aplicativo poderia aumentar a segurança da compra tanto para o estabelecimento quanto para o usuário, já que o pedido já estaria pago no momento da entrega.

5. Oferecer a possibilidade do usuário editar a quantidade do produto na Sacola digitando o número desejado de unidades do produto ao invés de apenas o botão “Mais” como opção, no qual é necessário clicar várias vezes até atingir a quantidade desejada do produto.

6. Durante nossos testes, em um dos nossos cenários, inserimos um endereço inexistente e o sistema permitiu o acesso aos produtos e ao fluxo inteiro de compra. Logo, sugere-se solicitar ao usuário o preenchimento do CEP no momento do cadastro e utilizar o recurso de autocomplete para evitar o registro de endereços inválidos.


### Documentações

+ [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
+ [Documentação Gherkin](https://cucumber.io/docs/gherkin/reference/)
+ [Link Auxiliar - Gherkin](https://blog.onedaytesting.com.br/gherkin/)
+ [Jmeter](https://jmeter.apache.org/usermanual/index.html)
+ [Documentação API](https://postmon.com.br/)

### Membros do grupo

### :rocket: Gabrielle dos Santos Alvim
### :rocket: Marcela Holanda Jataí
### :rocket: Márcia Maria Teixeira Barbosa
### :rocket: Marília Abreu de Lima











