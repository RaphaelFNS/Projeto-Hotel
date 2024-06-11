# ![Logo do Projeto](https://user-images.githubusercontent.com/73081443/182045950-f5f23ee8-6470-4e94-b0e9-0a195986b5bb.png) Api do Hotel App

## Sobre

O objetivo do projeto é facilitar o cotidiano de um hotel facilitando o cadastro de clientes e suas reservas, além de unificar todas as informações em um só lugar. Ele foi dividido em duas partes:

-   Front-end que consome uma API e permite realizar as operações de Create (Criar), Read (Ler), Update (Atualizar) e Delete (Deletar) de forma simplificada.

-   Back-end que é responsável por se comunicar com o banco de dados PostgreSQL.

## Ferramentas utilizadas

-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/pt-br/)

## Funcionalidades

-   Autenticação utilizando JWT, que permite apenas usuários autenticados utilizarem os seus recursos.
-   Senhas dos administradores são salvas encriptadas no banco de dados.
-   Permite realizar as operações de Create (Criar), Read (Ler), Update (Atualizar) e Delete (Deletar) nas tabelas atráves das suas rotas.

## Rotas

-   `/` - Única rota pública com as operações de cadastro e login.
-   `/clients` - Rota privada com as operações de CRUD dos dados dos clientes.
-   `/telephones` - Rota privada com as operações de CRUD dos dados dos números dos clientes.
-   `/room-status` - Rota privada com as operações de CRUD dos dados dos status dos quartos.
-   `/room-types` - Rota privada com as operações de CRUD dos dados dos tipos de quartos.
-   `/rooms` - Rota privada com as operações de CRUD dos dados dos quartos.
-   `/bookings` - Rota privada com as operaçoes de CRUD dos dados das reservas.
-   `/admins` - Rota privada com as operações de CRUD dos dados dos administradores.

## Estrutura

```
src
│
├─ api
│  └─ v1
│     └─ constants
│     └─ controllers
│     └─ helpers
│     └─ middlewares
│     └─ models
│     └─ routes
│     └─ types
├─ config
├─ scripts
└─ index.ts
```
