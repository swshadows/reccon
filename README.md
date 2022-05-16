# Reccon - App de Reciclagem

Uma aplicação Web com backend e frontend funcionais desenvolvidas pela equipe da turma SIS201N01 do campus FAMETRO Manaus - Zona Leste com o intuito de unificar e conectar doadores e catadores de materiais para reciclagem

![AppLogo](/public/assets/banner.svg)

## Equipe de Desenvolvimento

[@swshadows](https://github.com/swshadows) - Backend Node.js / Design

[@leonardosilva97](https://github.com/leonardosilva97) - Frontend Bootstrap

Sobre a equipe geral, veja a [documentação](DOCUMENTATION.md#equipe)

## Inicialização

<div align=center>

### Requisitos

[Node.js](https://nodejs.org/en/) | [MariaDB](https://mariadb.org/)

</div>

- Use os comandos para clonar o repositório

  ```
    git clone https://github.com/swshadows/reccon.git
    cd reccon
  ```

- Insira o banco de dados em [/database/init.sql](database/init.sql)
- Crie as variáveis do projeto num arquivo `.env`

  ```c
  DB_USER="usuário do banco"
  DB_PASS="senha do banco"
  DB_DIALECT="mysql ou mariadb"
  SERVER_PORT="porta do servidor"
  SESSION_SECRET="chave para sessões"
  ```

- Baixe as requisições do projeto com o comando `npm install`
- Inicialize o projeto com o comando `npm start`
- Acesse o endereço http://localhost:3000 no navegador
  - Caso você tenha definido SERVER_PORT em `.env`, acesse com a porta correspondente

### Outros Links

<div align="center">
  <a href="https://www.figma.com/file/BfEmE4YiZ0DSRzPSP4g5Kw/reccon?node-id=0%3A1">
    <img width=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg">
    <p>Templates no Figma</p>
  </a>
</div>
