
# Arquitetura da Solução

<span  style="color:red">Pré-requisitos: <a  href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A aplicação é desenvolvida com base no modelo de aplicação distribuida, ou seja, contém um backend e frontend independentes. A integração entre cliente e servidor é realizada através de requisições HTTP, seguindo a padronização REST para o desenvolvimento da API.

O backend foi desenvolvido utilizando a linguagem Asp .Net através da IDE Visual Studio 2022, é o módulo responsavel pelo controle das regras de negócio, comunicação com o banco de dados, autenticação e autorização, constituindo a API que será consumida pelo cliente através do frontend.

A aplicação é disponibilizada para o usuário final através de duas plataformas, Web e Mobile(Android), dessa forma o frontend é desenvolvido utilizando as seguintes linguagens:

-React Native(Expo) / Mobile.

-HTML5, CSS3, Javascript / Web.

A persistência dos dados é feita de forma relacional utilizando o banco de dados SQL Server. A imagem abaixo mostra um resumo da arquitetura da aplicação e a integração entre seus módulos:
![Arquitetura da aplicação](https://static.imasters.com.br/wp-content/uploads/2016/05/Figura7-620x332.png)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de classes](https://static.imasters.com.br/wp-content/uploads/2016/05/Figura7-620x332.png)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Diagrama ER](https://static.imasters.com.br/wp-content/uploads/2016/05/Figura7-620x332.png)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Esquema Relacional](https://static.imasters.com.br/wp-content/uploads/2016/05/Figura7-620x332.png)


## Tecnologias Utilizadas

As técnologias e ferramentas utilizadas no projeto estâo listadas abaixo:
### Backend

 - Asp .Net
 - SQL Server

### Frontend Mobile

 - React Native.
 - React Native Navigation.
 - Expo.
 - Axios.


### Frontend Web

 - HTML 5.
 - CSS 3.
 - Javascript.
 - Axios.
## Hospedagem

A aplicação durante o desenvolvimento será rodada em servidor local, após a conclusão do projeto a mesma será hospedada na plataforma gratuita Heroku.
