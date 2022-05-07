# Reccon - App de Reciclagem

Uma aplicação Web com backend e frontend funcionais desenvolvidas pela equipe da turma SIS201N01 do campus FAMETRO Manaus - Zona Leste com o intuito de unificar e conectar doadores e catadores de materiais para reciclagem

![Logo](/public/assets/banner.svg)

## Inicialização

- Use os comandos para clonar o repositório

  ```
    git clone https://github.com/swshadows/reccon.git
    cd reccon
  ```

- Insira o banco de dados em [/db/init.sql](db/init.sql)
- Crie as variáveis do projeto num arquivo `.env`

  ```
  DB_USER="usuário do banco"
  DB_PASS="senha do banco"
  SERVER_PORT="porta do servidor"
  ```

- Baixe as requisições do projeto com o comando `npm install`
- Inicialize o projeto com o comando `npm start`
- Acesse o endereço http://localhost:3000 no navegador
  - Caso você tenha definido SERVER_PORT em `.env`, acesse com a porta correspondente
