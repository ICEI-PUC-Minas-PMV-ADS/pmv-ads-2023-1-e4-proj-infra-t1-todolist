
# Arquitetura da Solução

<span  style="color:red">Pré-requisitos: <a  href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A aplicação é desenvolvida com base no modelo de aplicação distribuida, ou seja, contém um backend e frontend independentes. A integração entre cliente e servidor é realizada através de requisições HTTP, seguindo a padronização REST para o desenvolvimento da API.

O backend foi desenvolvido utilizando a linguagem Asp .Net através da IDE Visual Studio 2022, é o módulo responsavel pelo controle das regras de negócio, comunicação com o banco de dados, autenticação e autorização, constituindo a API que será consumida pelo cliente através do frontend.

A aplicação é disponibilizada para o usuário final através de duas plataformas, Web e Mobile(Android), dessa forma o frontend é desenvolvido utilizando as seguintes linguagens:

-React Native(Expo) / Mobile.

-HTML5, CSS3, Javascript / Web.

A persistência dos dados é feita de forma relacional utilizando o banco de dados SQL Server. A imagem abaixo mostra um resumo da arquitetura da aplicação e a integração entre seus módulos:
![Arquitetura da aplicação](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/Frame%201.png?raw=true)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/Classe%20UML.png?raw=true)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Diagrma ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/assets/69054000/947f24a1-2f7e-4004-af7d-08e1cee80f43)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Esquema Relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/ER.png?raw=true)


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
