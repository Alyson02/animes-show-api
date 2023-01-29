>## Api para gerenciar animes

Crud simples para gerenciar animes e suas caracteristicas

# tecnologias
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
</p>

# Doc
> Use a extenção do vscode thunder-client e importe o arquivo thunder-collection_show_animes.json através dela, ou consuma usando a ferramenta de sua preferencia com a doc a baixo.
<details>
  <summary>Animes</summary>
  
  ## Criar anime

```http
POST /animes
```

## Body
```javascript
{
  "name": "Islime Shintara 2",
  "episodes": 44,
  "finished": false,
  "imageUrl": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lBhvBqYtR9J8mQPDdnpRcMcte0a.jpg",
  "categoryId": 2
}
```
---

## Atualizar anime

```http
PUT /animes/id
```

## Body
```javascript
{
  "name": "Islime Shintara 2",
  "episodes": 44,
  "finished": false,
  "imageUrl": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lBhvBqYtR9J8mQPDdnpRcMcte0a.jpg",
  "categoryId": 2
}
```
---

## Listar animes

```http
GET /animes
```

---

## Pesquisar anime

```http
GET /animes/id
```

---

## Excluir anime

```http
DELETE /animes/id
```

</details>


<details>
  <summary>Nationality</summary>

## Criar nationality

```http
POST /nationalities
```

## Body
```javascript
{
  "country": "Coréia do sul",
  "state": "Seul"
}
```
---

## Atualizar nationality

```http
PUT /nationalities/id
```

## Body
```javascript
{
  "country": "Coréia do sul",
  "state": "Seul"
}
```
---

## Listar nationalities

```http
GET /nationalities
```

---

## Pesquisar nationality

```http
GET /nationalities/id
```

---

## Excluir nationality

```http
DELETE /nationalities/id
```
</details>


<details>
  <summary>Category</summary>

## Criar category

```http
POST /categories
```

## Body
```javascript
{
  "description": "romance"
}
```
---

## Atualizar category

```http
PUT /categories/id
```

## Body
```javascript
{
  "description": "romance"
}
```
---

## Listar categories

```http
GET /categories
```

---

## Pesquisar category

```http
GET /categories/id
```

---

## Excluir category

```http
DELETE /categories/id
```
</details>


<details>
  <summary>Authors</summary>

## Criar author

```http
POST /authors
```

## Body
```javascript
{
  "name": "Masashi Kishimoto",
  "nationalityId": 1
}
```
---

## Atualizar author

```http
PUT /authors/id
```

## Body
```javascript
{
  "name": "Masashi Kishimoto",
  "nationalityId": 1
}
```
---

## Listar authors

```http
GET /authors
```

---

## Pesquisar author

```http
GET /authors/id
```

---

## Excluir author

```http
DELETE /authors/id
```
</details>

>## Para executar:

1. Clone esse repositorio
2. Instale as dependencias

```bash
npm i
```

3. Crie um banco de dados PostgreSQL com o nome que quiser
4. Configure o arquivo `.env` usando o arquivo `.env.example`
5. Rode as migrations

```bash
npx prisma migrate
```

6. Seed db

```bash
npm run prisma:seed
```

6. Rode em modo de desenvolvimento:

```bash
npm run dev
```
