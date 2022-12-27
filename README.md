# Info Tab
Projeto da Info Tab

# Índice
- [1. Requisitos para compilar](#requisitos-para-compilar)
- [2. Como instalar dependências](#como-instalar-dependências)
- [3. Como rodar/compilar o projeto](#como-rodarcompilar-o-projeto)
- [4. O básico de TypeScript](#o-básico-de-typescript)
- [5. O arquivo de entrada da aplicação](#o-arquivo-de-entrada-da-aplicação)

---

## Requisitos para compilar
[Node.js](https://nodejs.org/en/)

## Como instalar dependências
Para instalar todas as dependências referenciadas em "package.json", usa-se:
```
npm i
```

Para instalar uma dependência normal, utiliza-se:
```
npm i bootstrap
```

Para instalar uma dependência no modo de desenvolvedor, utiliza-se:
```
npm i bootstrap --save-dev
```

### Qual a diferença de uma dependência normal (produção) e uma de desenvolvimento?
Uma dependência de produção é uma dependência na qual irá para o site em seu estado final, como por exemplo o "Bootstrap", o "Font Awesome", o "jQuery", etc. Já uma dependência de desenvolvimento é uma dependência que apenas serve para utilizar na hora da compilação, como por exemplo o "TypeScript", o "Vite", tipos do TypeScript (referenciados no "package.json" com a inicial "@types/..."), etc.

## Como rodar/compilar o projeto
Para rodar o projeto no modo de desenvolvimento, basta rodar o comando "npm run dev" no Terminal. Com isso, para acessar o ambiente de desenvolvimento, basta entrar em "*localhost:5173*".

Para compilar o projeto para sua versão final, basta rodar o comando "npm run build" no Terminal. O resultado final aparecerá na pasta "dist".

---
## O básico de TypeScript
TypeScript é um superset de JavaScript, ou seja, TypeScript possui tudo o que JavaScript possui e introduz várias novidades, sendo a principal a forte tipagem. Tipagem essa que é referênciada utilizando ":" (dois pontos), veja:
```ts
let nome // <- Isso está errado, pois o TypeScript precisa saber o tipo da variável para compilar
let nome: string // <- Isso está correto, pois o tipo é passado á variável

nome = 2 // <- Isso está errado, pois "2" é do tipo "number"
nome = "João" // <- Isso está correto, pois "João" é do tipo "string"
```

Os tipos primitivos do TypeScript/JavaScript são:
- "bigint": Valores inteiros enormes;
- "boolean": *true* e *false*;
- "function": Uma função, seja ela anônima ou não;
- "number": Valores númericos, sejam eles inteiros ou não;
- "object": Objetos;
- "string": Valores textuais;
- "symbol": Expressões regulares;
- "undefined": O típico *undefined* do JavaScript.

### Tipando um objeto
Haverá ocasiões em que você irá querer tipar um objeto (ex.: tipar para se enquadrar ao tipo de de resposta de uma API). Para isso, usa-se:
```ts
type ApiResposta = {
    id: number
    nome: string
    idade: number
}

const objetoTipado: ApiResposta = {
    id: 1,
    nome: "Pedro",
    idade: 20
}
```
No código acima, percebe-se que todos os atributos de "ApiResposta" estão preenchidos. Caso você preencha um com o tipo errado ou não preencha, o código não irá compilar.

Caso você queira que um desses atributos seja opcional, utiliza-se "?", veja:
```ts
type ApiResposta = {
    id: number
    nome: string
    idade?: number // O tipo pode ser "number" ou "undefined"
}

const objetoTipado: ApiResposta = {
    id: 1,
    nome: "Pedro",
}
```

### Tipando uma função
Para tipar uma função, a sintaxe fica a seguinte:
```ts
//                param.     param.   retorno
function somar(a: number, b: number): number {
    return a + b;
}
```
Nota-se que os parâmetros e o tipo de retorno estão tipados. Todos os parâmetros em uma função no TypeScript precisam estar tipados, porém não há a necessidade de tipar o tipo de retorno, mas caso você queira, basta seguir a sintaxe acima.

### O tipo "any"
Caso você não saiba que tipo inferir á um valor, pode-se usar o "any", veja:
```ts
let nome: any // <- Aceita qualquer valor de qualquer tipo

nome = "João" // Válido
nome = 2      // Válido
nome = {      // Válido
    idade: 20
}
```

### Importações e exportações
Com o TypeScript você possui a vantagem de dividir um código em múltiplos arquivos e juntá-los utilizando as importações. Para exportar um código, utiliza-se a palavra-chave "export", veja:
```ts
export function somar(a: number, b: number) {
    return a + b;
}
```

Já em outro arquivo, para importar essa função, utiliza-se a palavra-chave "import", veja:
```ts
import { somar } from "./b";

somar(1, 1)
```

O Visual Studio Code já possui a IntelliSense de referenciar a função "somar()", com isso, não há a necessidade de escrever manualmente *import { somar } from "./b";*

## O arquivo de entrada da aplicação
O arquivo de entrada da aplicação (também chamado de "Entrypoint") localiza-se em "[src/main.ts](./src/main.ts)", e por padrão vem assim:
```ts
import "./styles/index.css";
import * as bootstrap from "bootstrap";

bootstrap;

console.log("Olá, mundo!");

export {}
```

Vamos analisar o arquivo em partes:

### As importações
O arquivo começa importando as seguintes coisas:
```ts
import "./styles/index.css";
import * as bootstrap from "bootstrap";
```

Na primeira linha nós temos o CSS principal da aplicação sendo importado. Isso é possível de se realizar utilizando o Vite (o nosso compilador de projeto). Na próxima linha nós temos a importação de todo o JavaScript do Bootstrap, através do asterisco ("*"). Caso nós quisessemos apenas importar um componente do Bootstrap, a sintaxe ficaria a seguinte:
```ts
import { Toast } from "bootstrap";
```
Também é importante observar que estamos importando diretamente do módulo NPM do Bootstrap. Isso se demonstra em `from "bootstrap"`, na qual a importação está sendo chamada do caminho absoluto "bootstrap", ao invés de um caminho relativo como "./bootstrap".

### O referênciamento do Bootstrap
Na linha seguinte temos:
```ts
bootstrap;
```
Caso nós apenas importassemos o Bootstrap sem referencia-lo em algum lugar no código, o mesmo não seria carregado no compilador e toda a lógica JavaScript do Bootstrap ficaria de fora da aplicação, causando vários bugs na versão final. Por isso, eu apenas chamei o "Bootstrap importado" dessa maneira.

### A exportação do módulo
Na última linha temos:
```ts
export {}
```

Por mais estranho que isso pareça, é necessário exportar ao menos algo em todo arquivo TypeScript no Vite. Como no nosso arquivo de entrada da aplicação nós não iremos exportar nada, apenas exportamos um vazio utilizando `export {}`.
