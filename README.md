# API REST com Node.js, Express e Sequelize

Projeto acadêmico que constrói uma **API REST** em Node.js, abordando HTTP, criação de endpoints, **validação**, **tratamento de erros**, **buscas, filtros, paginação** e persistência com **ORM Sequelize**.

## ✨ Funcionalidades

* CRUD básico (ex.: `matriculas`, `pessoas`)
* Validação de entrada (middleware/Sequelize)
* Tratamento de erros com respostas padronizadas
* Busca, filtros e **paginação** em listagens
* Persistência com Sequelize (SQLite por padrão; fácil trocar para Postgres/MySQL)

## 🧰 Stack

* **Node.js**, **Express**
* **Sequelize** (CLI)
* Banco padrão: **SQLite** (arquivo local). Suporte a Postgres/MySQL.

## 🚀 Como rodar

```bash
# 1) Dependências
npm install

# 2) Banco/migrações (ajuste config.json se trocar de DB)
npx sequelize-cli db:migrate
# (opcional) popular dados
npx sequelize-cli db:seed:all

# 3) Subir a API
npm run dev    # se usar nodemon
# ou
node src/server.js
```

API disponível em: **[http://localhost:3000](http://localhost:3000)**

## ⚙️ Configuração do banco (`src/config/config.json`)

SQLite (padrão):

```json
{
  "development": {
    "dialect": "sqlite",
    "storage": "src/database/dev.sqlite",
    "logging": false
  }
}
```

> Para **Postgres** ou **MySQL**, troque `dialect`, `username`, `password`, `database`, `host` e **garanta a instância rodando**.

## 🛤️ Rotas de exemplo

### Matriculas

* **GET** `/matriculas?pagina=1&limite=10&status=ativa`
* **POST** `/matriculas`

```json
{ "aluno": "Maria", "curso": "Node.js", "status": "ativa" }
```

* **GET** `/matriculas/:id`
* **PUT** `/matriculas/:id`
* **DELETE** `/matriculas/:id`

### Pessoas (se existir)

* **GET** `/pessoas?nome=ana`
* **POST** `/pessoas`

```json
{ "nome":"Ana", "email":"ana@exemplo.com", "cpf":"000.000.000-00", "ativo": true, "role": "aluna" }
```

## ✅ Validação & Erros

* Validações de campos obrigatórios/tipos no model ou via middleware.
* Respostas padronizadas:

```json
{ "erro": "Mensagem amigável ao usuário" }
```

* Logs no servidor para diagnóstico.

## 🔎 Filtros & Paginação

* Query params como `?pagina=1&limite=10&status=ativa&nome=ana`
* Retorno inclui `total`, `pagina`, `limite` quando aplicável.

## 🧪 Comandos úteis

```bash
# Gerar model/migration
npx sequelize-cli model:generate --name Pessoa \
  --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

# Aplicar/Desfazer migrações
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all

# Seeders
npx sequelize-cli seed:generate --name demo-pessoa
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
```

## 🗺️ O que foi estudado

* **HTTP e REST**; criação de API com Express
* **Resiliência**, **validação**, **tratamento de erros**
* **Buscas, filtros e paginação**
* **ORM Sequelize**: models, migrations, seeders, CLI


> Inclua um **`.env.example`** (se usar variáveis) e uma coleção do **Postman** no repositório para facilitar testes.
