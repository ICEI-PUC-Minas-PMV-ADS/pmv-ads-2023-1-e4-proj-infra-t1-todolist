# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

<p align="justify">A definição precisa do problema e dos pontos mais relevantes deste
projeto foi feita a partir de entrevistas realizadas pelos membros da
equipe com pessoas de sexos distintos, englobando universitários, profissionais na área autônoma e formal e também pais que precisam listar tarefas do dia a dia.
Os principais pontos levantados durante o processo foram consolidados na forma de personas e histórias de usuário.</p>

## Personas

<p align="justify">As personas elaboradas durante o processo de definição do problema são apresentadas nas figuras a seguir:</p>

| Rafaela Miranda                                                                                                                                                                                  | Informações:                                                                                                                                |                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![RM](https://user-images.githubusercontent.com/74699119/157868822-a1647845-d66c-4cfc-8007-2a560dddf4de.png)                                                                                     | **Idade:** 35 <br> **Ocupação:** Gerente de RH                                                                                             | **Aplicativos:**<br><ul>● Facebook<br>● Netflix<br>● Twitter<br>● Instagram</ul>                 |
| **Motivações para listar as tarefas:**<br><ul>● Não esquecer das metas diárias no trabalho. <br>● Focar somente nas atividades do dia. <br>● Não esquecer dos compromissos do dia.</ul> | **Frustrações:**<br><ul>● Dificuldade na organização das listas. <br>● Falta de praticidade.</ul> | **Hobbies:**<br><ul>● Ler livros<br>● Viajar com a família <br>● Sair com amigos e família.</ul> |

| Sebastião Silva                                                                                                                                      | Informações:                                                                                                      |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| ![SS](https://user-images.githubusercontent.com/74699119/157877912-ab54615f-ec08-4ea7-ad39-353bc9e81a72.png)                                         | **Idade:** 40 <br> **Ocupação:** Empresário                                                                       | **Aplicativos:**<br><ul>● Whatsapp<br>● E-mail</ul>                           |
| **Motivações para listar as tarefas:**<br><ul>● Facilitar a dinâmica de trabalho. <br>● Melhorar a produtividade.</ul> | **Frustrações:**<br><ul>● Não manter o foco em uma única tarefa. <br>● Deixar tarefas incompletas<br>● Metas não cumpridas</ul> | **Hobbies:**<br><ul>● Assistir futebol<br>● Assistir filmes <br>● Pescar</ul> |

| Flávia de Souza                                                                                                                   | Informações:                                                                    |                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![FS](https://user-images.githubusercontent.com/74699119/157870593-47e85e52-7a86-4f5f-9795-62976f2056ae.png)                      | **Idade:** 50 <br> **Ocupação:** Dona de casa                             | **Aplicativos:**<br><ul>● Facebook<br>● Whatsapp<br>● Gmail</ul> |
| **Motivações para listar as tarefas:**<br><ul>● Lembrar das atividades de casa.<br>● Lembrar dos compromissos dos filhos.</ul> | **Frustrações:**<br><ul>●  Fazer as anotações no papel.<br>● Demora na elaboração da lista.</ul> | **Hobbies:**<br><ul>● Brincar com os filhos<br>● Jardinagem <br>● Yoga</ul>     |

| Renato Moreira                                                                                                                                               | Informações:                                                      |                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![RMo](https://user-images.githubusercontent.com/74699119/157868671-7e07ce9b-638b-47b9-8118-ba1a6359eb90.png)                                                | **Idade:** 25 <br> **Ocupação:** Desenvolvedor de Sistemas        | **Aplicativos:**<br><ul>● Facebook<br>● Twitter<br>● Instagram <br>● Zé Delivery</ul> |
| **Motivações para listar as tarefas:**<br><ul>● Programar a agenda da semana. <br>● Otimizar o fluxo de trabalho.</ul> | **Frustrações:**<br><ul>● Falta de controle das horas gastas em cada tarefa.</ul> | **Hobbies:**<br><ul>● Ler livros<br>● Jogar futebol <br>● Ver séries</ul>             |

| Mariana Rezende                                                                                                                      | Informações:                                                                                |                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![MR](https://user-images.githubusercontent.com/74699119/157870547-f569bef9-c35f-4894-a846-0c8a56ffdb01.png)                         | **Idade:** 25 <br> **Ocupação:** Universitária                            | **Aplicativos:**<br><ul>● Youtube<br>● Gmail<br>● Instagram</ul>    |
| **Motivações para listar as tarefas:**<br><ul>● Lembrar dos trabalhos da faculdade<br>● Conciliar tarefas da vida acadêmica, profissional e pessoal.</ul> | **Frustrações:**<br><ul>● Dificuldade em controlar minha agenda do dia.<br>● Dificuldade em intercalar as tarefas pessoais e acadêmicas.</ul> | **Hobbies:**<br><ul>● Assistir séries<br>● Passeios com amigos</ul> |

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rafaela Miranda     | Organizar minhas tarefas por categorias e sub-categorias | Manter o controle das atividades principais e secundárias |
|Rafaela Miranda     | Poder copiar uma lista que foi elaborada anteriormente   | Reaproveitar um modelo e, assim, otimizar a criação da lista |
|Sebastião Silva     | Controlar as metas de cada tarefa                        | Manter o controle das datas de inicio e finalização da atividade | 
|Renato Moreira      | Definir minha rotina semanal                             | Eu consiga otimizar o meu tempo |
|Flávia de Souza     | Listar os meus afazeres e compromissos do dia a dia      | Que eu consiga diferenciar as tarefas que já foram feitas das que ainda preciso fazer e, assim, me organizar melhor. |
|Mariana Rezende     | Anotar as minhas tarefas e trabalhos                     | Lembrar do que preciso fazer no meu dia  |



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente embora exista diversos sistemas especializados para a organização de tarefas, as opções de aplicações são mais voltadas para área corporativa.
Com isso, muitas dessas plataformas têm funções mais robustas e, assim, podendo não trazer uma praticidade para o dia a dia de quem deseja organizar tarefas pessoais.

Observado esses nichos que são pouco explorados pelas plataformas existentes, decidimos criar uma aplicação que se encaixa na realidade dessas pessoas. 

### Descrição Geral da Proposta

Nossa aplicação vai atuar onde as presentes no mercado atual tem pouco alcance, colocando o foco principal no desenvolvimento de algo que atenda a necessidade descrita acima, porém procurando também manter a plataforma aberta para as pessoas que desejam utilizar no âmbito profissional.

### Processo 1 – USUÁRIO ACESSA A APLICAÇÃO E EFETUA O CADASTRO

Nesse processo a pessoa irá acessar a plataforma e criar seu usuário, inserindo seus dados de login e senha.

### Processo 2 – USUÁRIO ACESSA A TELA INICIAL

Nessa tela, o usuário já poderá visualizar suas listagens criadas com suas devidas tarefas e ter o controle de status da atividade, edição de datas e categorias, exclusão, o usuário poderá restaurar uma listagem e entre outras funções.

### Processo 3 – USUÁRIO ACESSA A TELA DE CRIAÇÃO DE LISTAGEM E TAREFAS

Nessa tela, o usuário poderá criar uma nova listagem com tarefas de categoria principal e subcategorias, datando cada atividade, justamente para ter o controle de prazos.

![Diagrama - Lista de tarefas - PUC (2)](https://user-images.githubusercontent.com/89323922/235320948-d64eeca5-320d-4ff9-8b6c-7b59c57043e4.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário crie uma conta e faça login | ALTA | 
|RF-002| Permitir que o usuário cadastre novas tarefas | ALTA | 
|RF-003| Permitir que o usuário remova as tarefas que o mesmo precisar selecionar   | ALTA |
|RF-004| Permitir que o usuário insira a data na tarefa que precisa realizar   | ALTA |
|RF-005| Permitir que o usuário categorize(realizada/não realizadas) as tarefas   | MÉDIA |
|RF-006| Permitir que o usuário marque as tarefas como concluídas   | ALTA |
|RF-007| Permitir que o usuário salve e restaure suas listas   | ALTA |
|RF-008| Permitir que o usuário edite as tarefas criadas  | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve ser responsivo para rodar na web | MÉDIA | 
|RNF-004| O sistema deveser de fácil acesso e uso| ALTA |
|RNF-005| O sistema deve estar disponível em 99% do tempo | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o dia 25/06/2023 |
|02| O projeto deve ser compatível com várias plataformas, como iOS, Android, Google Chrome, Microsoft Edge, entre outros |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho|


## Diagrama de Casos de Uso

|ATOR|	Descrição|
|----|-----------|
|Usuário| Ator que faz o cadastro e alteração de suas tarefas, marca suas tarefas como concluídas e restaura suas listas, além de emitir o relatório mensal. |


|CASO DE USO|	DESCRIÇÃO|	RF|
|-|-|-|
|Realizar login no sistema|	O usuário deve conseguir realizar o cadastro e login no sistema.| RF-001 |
|Criar Tarefas|	O usuário deve conseguir criar suas tarefas.| RF-002 |
|Remover Tarefas| O sistema deve permitir que o usuário remova suas tarefas| RF-003 |
|Adicionar Data | O sistema dever permitir ao usuário a inserção da data em determinada tarefa que precisa ser realizada| RF-004 | 
|Categorizar Tarefas| O sistema deve permitir que o usuário categorize suas tarefas | RF-005 | 
|Marcar como Pronta| O sistema deve permitir ao usuário marcar suas tarefas como concluídas. | RF-006| 
|Salvar e Restaurar| O sistema deve permitir que o usuário salve e restaure suas listas. | RF-007| 
|Editar Tarefas| O sistema deve permitir que o usuário edite suas listas. | RF-008| 



 ## Representação Visual
 Diagrama de Caso de Uso

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](/docs/img/matriz_de_rastreabilidade.png)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![Gerenciamento de tempo)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/Gerenciamento%20de%20tempo%20-%20Planilha%20Excel.png)

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/Gerenciamento%20de%20tempo%20-%20Grafico%20Gantt.png)

## Gerenciamento de Equipe

![Gerenciamento de Equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-todolist/blob/main/docs/img/Gerenciamento%20de%20equipe.png)

## Gestão de Orçamento

<p align="justify">Os valores dos custos do projeto foram calculados com a estimativa de tempo de quatro meses, utilizando sete profissionais. Qualquer alteração de custos que ultrapassar a estimativa da linha de base deverá ser avaliada pelo cliente e gerente do projeto.</p>

| Recursos Necessários | Valor         |
| -------------------- | ------------- |
| Recursos Humanos     | R$ 268.800,00 |
| Hardware             | R$ 7.000,00   |
| Rede                 | R$ 2.800,00   |
| Software             | R$ 560,00     |
| Serviços             | R$ 14.000,00  |
| Total                | R$ 293.160,00 |

<p align="justify">Cálculo:

Recursos Humanos = 7 Profissionais x R$ 60,00/hora x 640 horas (4 meses) = R$ 268.800,00
 
Hardware = 7 locações Notebooks x R$ 250,00/Mês x 4 Meses = R$ 7.000,00
 
Rede = 7 internet banda larga x R$ 100,00/Mês x 4 Meses = R$ 2.800,00
 
Softwares = 7 locações (windows, office) x R$ 20,00/Mês x 4 Meses = R$ 560,00
 
Serviços = 7 despesas (energia, hospedagem) x R$ 500,00/Mês x 4 Meses = R$ 14.000,00.
