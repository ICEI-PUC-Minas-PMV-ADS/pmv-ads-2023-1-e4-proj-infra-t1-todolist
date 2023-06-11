# Status Kanban Atualizado

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/9d787b1d-567a-42fd-8f1e-bf331ec6a751)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/66f9058b-2265-4619-8b85-e03309bce9ee)


# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Back-End

Desenvolvimento da API Rest que irá servir a aplicação com os dados a serem consumidos pelo cliente. Criada utilizando a linguagem de programação C# com o framework ASP .Net e Entity Framework da Microsoft, a aplicação persiste os dados de forma relacional no banco de dados . Abaixo está o passo a passo para rodar a API de forma local, após a finalização do projeto a mesma será hospedada na nuvem. 

### Requisitos 

- Visual Studio 2022 na sua ultima versão. (<a href="https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false">Fazer o download para Windows 64bits</a>)

- SDK .NET 7.0. (<a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-7.0.203-windows-x64-installer">Fazer o download para Windows 64bits</a>)

- Insomnia. (<a href="https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website">Fazer o download para Windows 64bits</a>)

- Pepositório do projeto (<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/archive/refs/heads/api.zip">Fazer o download</a>)

### Como utilizar

1. Instalar todos os softwares listados acima e certificar que o SDK .NET 7.0 está instalado via prompt de comando executando o seguinte comando: `dotnet --list-sdks`.

2. Abrir com o Visual Studio o projeto contido no diretório API, através do arquivo Todo.sln.

![Abrir projeto](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/906dd2ec459e28b96db2d8f18ea56fada97abed9/docs/img/1%20passo.png)

3. Definir o projeto de inicialização como Todo.Domain.Api.

![Definir arquivo de inicialização](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/906dd2ec459e28b96db2d8f18ea56fada97abed9/docs/img/2%20passo.png)

4. Definir a string de conexão com o banco de dados, a mesma foi disponibilizada através do Canvas, juntamente com o carregamento do arquivo.

- String de conexão no arquivo `appsettings.json`
![Definir string no appsettings.json](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/906dd2ec459e28b96db2d8f18ea56fada97abed9/docs/img/3%20passo%201.png)

- String de conexão no arquivo `appsettings.Development.json`

![Definir string no appsettings.Development.json](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/906dd2ec459e28b96db2d8f18ea56fada97abed9/docs/img/3%20passo%202.png)

5. Executar o projeto apertando `ctrl + F5`.

6. Abrir o Insomnia, clicar em New Collection e defina um nome para a coleção de requisições.

![Criando um novo projeto Insomnia](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/a2b351b2a500925145da5ca2ffa6acafe4fa353a/docs/img/4%20passo.png)

7. Aperte `ctrl + N` para criar uma nova requisição, selecione o tipo de requisição e passe o link da requisição e clique no botão Send.

Exemplo:
`https://localhost:7000/v1/todos`

8. O resultado da requisição é exibido na tela.

### Lista de end-points

![endpoints](https://user-images.githubusercontent.com/69054000/235229588-e22e601e-01e0-41ec-9473-2f1eb94062c7.png)

## Front End WEB

Desenvolvido com HTML5, CSS3 e Javascript, não foi utilizado nenhum framework na aplicação.

### Funcionalidades

- Login: Desenvolvido utilizando a plataforma Firebase da Google para autenticação de usuário.
- Cadastro de usuário: Desenvolvido utilizando a plataforma Firebase da Google.
- Validações inputs: realizado via Regex, por exemplo, a senha de conter 1 letra maiuscula, 1 minuscula, 8 ou mais caracteres e 1 caracter especial.
- Inclusão de tarefas: Realizado o consumo da Api Back end, utilizando métodos fetch, onde é feita a validação de cada requisição através do JWT gerado pelo Firebase, esse JWT é armazenado como cookie no navegador e tem validade de 1 hora, após isso é nescessário um novo login.
- Listagem de tarefas: realiza a listagem geral de todas as tarefas que o usuário logado possui.

### Desenvolvimento

O desenvolvimento do layout é feito seguindo a metodologia mobile first, ou seja, é pensado primeiramente em um layout para dispositivos com tela pequena e em seguida é adaptado a responsividade da aplicação para telas grandes.

## Front End Mobile

Desenvolvimento realizado atráves da ferramenta Expo, baseada na linguagem de programação React Native. A aplicação faz o uso de algumas bibliotecas e componentes externos, listados abaixo:

### Bibliotecas e componenete

- Axios: usada na execução das requisições HTTP.
- DateTimePicker: utilizada para lidar com a captura de data e hora.
- Expo vecto-icons: biblioteca de icones.
- React Navigation: solução para navegação entre telas.
- Async Storage: usado para armazenamento local dos tokens de autenticação, simulando o funcionamento de cookies.

### Funcionalidades

- Login: Desenvolvido utilizando a plataforma Firebase da Google para autenticação de usuário.
- Cadastro de usuário: Desenvolvido utilizando a plataforma Firebase da Google.
- Validações inputs: realizado via Regex, por exemplo, a senha de conter 1 letra maiuscula, 1 minuscula, 8 ou mais caracteres e 1 caracter especial.
- Inclusão de tarefas: Realizado o consumo da Api Back end, utilizando métodos fetch, onde é feita a validação de cada requisição através do JWT gerado pelo Firebase, esse JWT é armazenado como cookie no navegador e tem validade de 1 hora, após isso é nescessário um novo login.
- Edição de tarefa: permite o usuário editar os dados de uma tarefa.
- Exclusão de tarefa: realiza a exclusão da tarefa selecionada.
- Listagem de tarefas: realiza a listagem geral de todas as tarefas que o usuário logado possui.
- Filtros: realizada a listagem de tarefas feitas, não feitas e todas as tarefas.

### Desenvolvimento

Desenvolvimento realizado seguindo os padrões de projeto e as convenções de código da atualizadade, com foco no sistema operacional Android.

