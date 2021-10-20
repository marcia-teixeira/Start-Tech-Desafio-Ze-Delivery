Funcionalidade: Barra de busca(Pesquise sua bebida favorita)
 A fim de verificar se a barra buscar está realizando as buscas de forma adeuqada e eficiente
 Como usuário do site Zé delivery
 Eu quero testar a barra de busca, verificando as possibilidades na mesma
 De modo a proporcionar um busca no site mais eficiente e objetiva


 Contexto: 
  | Conta Exemplo | Senha Exemplo | 
  | testeQA@hotmail.com |   QA12345  | 


Cenario: Buscar caracteres inválidos
 Dado que o usuário esta devidamente cadastrado no site Zé do delivery
 E com uma conta ativa e devidamente validada 
 E já esta logado no site
 E deseja realizar uma busca por produto no site
 Quando entrar no campo de buscar descrito como Pesquise sua bebida favorita e ira informar três caracteres na guia
 Entao irá aparecer uma mensagem de erro "Putz, não conseguimos encontrar o produto"
 
Cenario: Buscar palavra aleatórias que estejam no dicionário
 Dado que o usuário esta devidamente cadastrado no site Zé do delivery
 E com uma conta ativa e devidamente validada 
 E já esta logado no site
 E deseja realizar uma busca por produto no site
 Quando entrar no campo de buscar descrito como "Pesquise sua bebida favorita", irá digitar uma palavra aleatória que não tenha relação com os produtos e que exista no dicionártio
 Entao irá aparecer uma mensagem de erro "Putz, não conseguimos encontrar o produto"
 
Cenario: Buscar por um número inteiro
 Dado que o usuário esta devidamente cadastrado no site Zé do delivery
 E com uma conta ativa e devidamente validada 
 E já esta logado no site
 E deseja realizar uma busca por produto no site
 Quando entrar no campo de buscar descrito como  "Pesquise sua bebida favorita", irá digitar um número qualquer que seja inteiro
 Entao irá aparecer todos os produtos do site que tem alguma relação com o número, podendo ser preço, peso ou nome
 
Cenario: Buscar por uma sílaba e aguardar sugestão de palavras
 Dado que o usuário esta devidamente cadastrado no site Zé do delivery
 E com uma conta ativa e devidamente validada 
 E já esta logado no site
 E deseja realizar uma busca por produto no site
 Quando entrar no campo de buscar descrito como "Pesquise sua bebida favorita", irá digitar duas siglas do nome de algum produto do site
 Entao irá aparecer todos os produtos do site que tem relação com as sílabas digitadas na pesquisa
 
Cenario: Buscar cerveja com nome e peso completos
 Dado que o usuário esta devidamente cadastrado no site Zé do delivery
 E com uma conta ativa e devidamente validada 
 E já esta logado no site
 E deseja realizar uma busca por produto no site
 Quando entrar no campo de buscar descrito como "Pesquise sua bebida favorita", irá digitar a marca da cerveja desejada e as ml desajadas da mesma
 Entao irá aparecer exatamente o produto descrito na barra de pesquisa
 


 