# WA project - Server

Servidor com uma API Rest que prove dados de filmes.

A API prove três end-ponts que permitem popular a base de dados, contabilizar a quantidade de filmes e retornar a relação de todos os filmes cadastrados.

## Principais Tech'S

* Node - Linguagem de programação
* Express - Prover as rotas da API
* Axios - Acessar a API externa
* Prisma - Gravar e recuperar dados
* Typescript - Melhorar a legibilidade, a produtividade e a segurança do código
* Swagger (swagger-ui-express) - Documentar a API

## Implantação e Execução

1. [Clonar](#ancora1)
2. [Instalar dependencies](#ancora2)
3. [Configurar bando de dados](#ancora3)
4. [Rodar o generate](#ancora4)
5. [Rodar as migrations](#ancora5)
6. [Inicia o servidor](#ancora6)
7. [Documentação da API](#ancora7)

<a id="ancora1"></a>
### Clonar

Em uma pasta de preferências, rode o comando:
```
git clone https://github.com/esbnet/waproject-server.git
```
<a id="ancora2"></a>
### Instalar dependencies

Entre na pasta do projeto e instale as dependência com os comandos abaixo:
```
cd waproject-server
yarn install
```
<a id="ancora3"></a>
### Configurar bando de dados

Para a configurar o bando de dados é altamente recomendado a consulta na documentação do Prisma em <https://www.prisma.io/docs/concepts/components/prisma-migrate> para entender as migrations, e também o link <https://www.prisma.io/docs/concepts/components/prisma-cli> para a utilização do PRISMA CLI.

A primeira configuração necessária é a variável de ambiente (detalhes em <https://www.prisma.io/docs/concepts/database-connectors/mysql>). Renomeie o arquivo `.env.sample` para `.env` e configure a variável de ambiente `DATABASE_URL` com as informações do seu bando de dados. 
~~~
DATABASE_URL="mysql://<user>:<password>@<host:port>/<database>"
~~~

**Obs.:** *O bando de dados deve estar previamente criado antes de rodar o servidor.*

<a id="ancora4"></a>
### Rodar o generate

Nesta etapa é criado a biblioteca para manipulação das migrations conforme suas congiuraçõs.

Execute o comando: `npx prisma generate`; ou siga a documentação.

<a id="ancora5"></a>
### Gerar as migrations

Em desenvolvimento:
~~~ 
npx prisma migrate dev
~~~

Em Produção:
~~~
npx prisma migrate deploy
~~~



<a id="ancora6"></a>
### Iniciar o servidor 
Para iniciar o projeto basta rodar o comando:
~~~javascript
yarn start ou npm run start 
~~~


<a id="ancora7"></a>
## Documentação da API

Também existe uma documentação da API com as principais informações dos recursos disponiveis. 

Para acessar utilize o endereço: https://esbnetwaproject.herokuapp.com/v1/api-docs e será apresntado a tela abaixo.

![Tela da documentação da API](./src/assets/images/api-doc.png)