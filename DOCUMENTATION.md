# Indice

- [Indice](#indice)
  - [Equipe](#equipe)
  - [Objetivo do Projeto](#objetivo-do-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Backend](#backend)
      - [Node.js](#nodejs)
      - [NPM](#npm)
      - [MariaDB](#mariadb)
    - [Frontend](#frontend)
      - [Bootstrap](#bootstrap)

## Equipe

---

A equipe foi subdividida em vários setores para facilitar tanto o desenvolvimento da aplicação, quanto as requsições dos orientadores e da feira de tecnologia Inovatec

| Nome            | Função                 | Equipe                       |
| --------------- | ---------------------- | ---------------------------- |
| Natanael Falcão | Organização Geral      | Organização Geral            |
| Joelson Lima    | Dev Backend / Design   | Desenvolvimento da Aplicação |
| David Teixeira  | Suporte ao Backend     | Desenvolvimento da Aplicação |
| Leonardo Chagas | Dev Frontend           | Desenvolvimento da Aplicação |
| Endrew Diaz     | Dev Frontend           | Desenvolvimento da Aplicação |
| Iderlan Lira    | Articulação do Artigo  | Documentações e Arquivos     |
| Fernando Cosme  | Articulação do Artigo  | Documentações e Arquivos     |
| Samuel Gomes    | Articulação do Artigo  | Documentações e Arquivos     |
| Oscar Oliveira  | Design de Arquivos     | Documentações e Arquivos     |
| Thiago Leão     | Confecção das Camisas  | Camisas                      |
| Rafael Pereira  | Confecção das Camisas  | Camisas                      |
| Denner Pantoja  | Confecção de Brindes   | Causas Sociais               |
| Stefanny Lohany | Causas Sociais         | Causas Sociais               |
| Jerônimo Rabelo | Apresentação no Evento | Evento                       |

## Objetivo do Projeto

---

O projeto **Reccon**, que foi construido na temática da Inovatec 2022 da FAMETRO, têm como objetivos

- **_Reciclar_**: O projeto conta com uma plataforma integrada que instrui as boas práticas na coleta e tratamento de resíduos sólidos, de forma intuitiva e fácil de entender
- **_Conectar_**: O projeto também é uma plataforma 100% funcional de conexão entre catadores e doadores de resíduos sólidos, sendo esse sua principal função
- **_Conscientizar_**: O projeto também tem a função de conscientizar as pessoas, apresentando trabalhos na comunidade e integrando ideias uteis ao meio ambiente através da plataforma

No geral, a equipe **Reccon** trabalhou ativamente no projeto para criar uma plataforma geral relacionada à área da reciclagem

## Tecnologias Utilizadas

---

<div align=center>

### Backend

</div>

#### Node.js

---

- Descrição: [Node.js](https://nodejs.org/pt-br/) é uma plataforma e interpretador de código Javascript que funciona fora do navegador.
- Uso: O uso desta tecnologia foi implementado para criar os **serviços backend** da aplicação, criando um servidor para a comunicação dos usuários com a base de dados, para a entrega de arquivos, gerenciamento de formulários, execução de tarefas e etc.
- Justificativa: O uso se dá pela praticidade do JavaScript, fazendo a integração do mesmo no frontend e backend da aplicação e não deviando a equipe com multiplas tecnologias e linguagens, sendo JavaScript a tecnologia cujo os desenvolvedores da equipe tem amplo conhecimento. A simplicidade de se criar uma aplicação utilizando Node.js também é notável, agilizando e facilitando o processo de desenvolvimento.

#### NPM

---

- Descrição: [NPM](https://www.npmjs.com/) (ou Node Package Manager) é o gerenciador de pacotes utilizado com o Node.js por padrão.
- Uso: sendo usado para **instalar pacotes e módulos** criados por outros programadores experientes na área, para agilizar a criação e modularizar as funçoes da aplicação.
- Justificativa: O uso do NPM se deve ao fato de que o mesmo é suficiente para o Node.js, vindo com o mesmo por padrão para gerenciar os pacotes da aplicação.

Os pacotes utilizados foram os seguintes:

- Pacotes do App
  - [bcrypt](https://www.npmjs.com/package/bcrypt) - Bcrypt é um pacote que possibilita a [encriptação e decriptação](https://www.voitto.com.br/blog/artigo/o-que-e-hash-e-como-funciona) segura de senhas a partir de algoritmo.
  - [cookie-session](https://www.npmjs.com/package/cookie-session) - Cookie-session é um [middleware](https://www.redhat.com/pt-br/topics/middleware/what-is-middleware) para o Express, que permite criar sessões persistentes no como cookies no navegador do usuário para um sistema de login, como exemplo.
  - [ejs](https://www.npmjs.com/package/ejs) - EJS (ou Embedded JavaScript Templates) é um pacote que fornece uma [template engine](https://www.treinaweb.com.br/blog/o-que-e-template-engine) para o Node.js, permitindo a criação de [páginas dinâmicas](https://www.agenciamacan.com.br/blog/site-dinamico-vs-estatico-qual-a-diferenca-entre-eles).
  - [express](https://www.npmjs.com/package/express) - Express é um framework para Node.js para facilitar o desenvolvimento de [servidores Web](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_is_a_web_server).
  - [mariadb](https://www.npmjs.com/package/mariadb) - Mariadb é um pacote que possibilita a conexão com o bancos de dados SQL MariaDB em uma aplicação Node.js.
  - [method-override](https://www.npmjs.com/package/method-override) - Method-Override é um pacote utilizado para enviar [requisições PUT e DELETE](http://protocoloti.blogspot.com/2012/11/http-requisicao-e-resposta.html) através de formulários no frontend para o backend
  - [multer](https://www.npmjs.com/package/multer) - Multer é um pacote que permite o armazenamento de arquivos enviados por formulários no servidor, por várias razões, a principal sendo armazenar o caminho de imagens no banco de dados
  - [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize é um pacote que automatiza o [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) em um banco de dados, a partir de [modelos e funções predefinidas](https://www.lewagon.com/pt-BR/blog/o-que-e-padrao-mvc).
- Pacotes Usados para Desenvolvimento
  - [nodemon](https://www.npmjs.com/package/nodemon) - Nodemon é um pacote que possibilita a abrir um servidor Node.js/Express na máquina local que se atualiza automaticamente com mudanças, utilizado para [debuggar e testar mudanças](https://www.hostgator.com.br/blog/debug-desenvolvimento-web/).
  - [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv é um pacote que possibilita utilizar [variáveis de ambiente](https://pt.wikipedia.org/wiki/Vari%C3%A1vel_de_ambiente) em um arquivo `.env`, facilitando a definição das mesmas e adaptando a aplicação para múltiplos programadores.
  - [mysql2](https://www.npmjs.com/package/mysql2) - MySQL2 que permite a conexão com o banco de dados MySQL. Foi utilizado como dependencia dev pelo motivo de alguns devs do time necessitarem do MySQL e não poderem trocar por MariaDB.

#### MariaDB

---

- Descrição: [MariaDB](https://mariadb.org/) é um banco de dados que utiliza a [Sequel Query Language](https://www.alura.com.br/artigos/o-que-e-sql) (ou SQL) para gerenciamento dos dados. O mesmo é baseado no MySQL original.
- Uso: A tecnologia foi utilizada para gerenciar um banco de dados, para armazenamento e controle dos dados do usuário final.
- Justificativa: O uso do banco MariaDB se deve ao fato da facilidade da aplicação da linguagem SQL pelos desenvolvedores, pela performance mais elevada comparada ao MySQL e devido ao fato de não termos a necessidade de utilizar, por hora, um banco de dados [NoSQL](https://blog.geekhunter.com.br/banco-de-dados-nosql-um-manual-pratico-e-didatico/).

<div align=center>

### Frontend

</div>

#### Bootstrap

---

- Descrição: [BootstrapCSS](https://getbootstrap.com/) (ou simplesmente Bootstrap) é um framework CSS voltado para agilizar a criação de páginas Web através de estilos e componentes pré-prontos, sendo direcionado para **serviços frontend**.
- Uso: Foram utilizadas as suas funções JavaScript e componentes e estilos CSS em conjunto para criar a componentes, estilos e modelos para a aplicação.
- Justificativa: O uso do Bootstrap se dá às sugestões dos devs frontend da equipe, tanto no fator tempo quanto conhecimento dos mesmos, sendo adequado na aplicação por sua praticidade, facilidade e agilidade de desenvolvimento.
