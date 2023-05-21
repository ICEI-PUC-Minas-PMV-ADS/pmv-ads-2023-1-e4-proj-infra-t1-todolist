# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Teste de unidade

Os testes de unidade foram realizados na API.

## Teste de funcionalidade

### Cadastro de novo usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/2b3637ae-e2cd-4295-8a94-38536d1ba515)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/e1a68325-77ec-46fd-a949-6559ab8f1064)

Esperado: é esperado que o usuário consiga entrar com as informações de nome, nascimento, senha e email e seja feita a validação destes campos e caso esteja correto os dados é realizada a requisição para consumo da API Back end.

Resultado: funcionalidade trabalhando de forma correta.

## Inclusão de novas tarefas

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/15da6898-e827-42f6-b4fe-518692783fd1)

Esperado: ao clicar no botão de inclusão, é aberto um modal com um formulário para captura dos dados como descrição, data e hora, feita a validação dos dados é então enviado via POST Http para o back end.

Resultado: funcionalidade trabalhando de forma correta.


## Teste de usabilidade

### Tela Login 

- Tela login versão mobile:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/07cba77f-0302-4cc1-b162-4240feaab557)

- Tela login versão Web:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/9f28bb26-e794-4956-851d-b8f839f00d06)

Resultado: A usabilidade da tela é boa em ambas as plataformas, não atrapalhando a utilização de nenhuma função pelo usuário.

### Tela principal

- Tela principal versão mobile: 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/cabb58f1-4ca3-457f-a3ef-bdf6b84501de)

- Tela principal versão web: 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/768b4499-5c66-4038-b7ad-3254f9438fea)

Resultado: A usabilidade é melhor na versão mobile, apresentado pontos de mnelhoria na versão web, serão implementadas até a proxima entrega.
