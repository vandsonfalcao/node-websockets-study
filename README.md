# Projeto de estudo para Websockets, Typescript

## Estruntura

## Inspiração

Veio a partir de uma live do @maykbrito onde o proprio estava tentando aprender websockets na "marra", nao assiti toda live pois estava trabalhando.

## Anotações

- iniciado repositório

```terminhal
git init
git branch -m main 
```

modificado o nome da branch principal para main.

- iniciado o projeto

```terminhal
npm init -y
```

Especificado, nome do projeto, descrição e autor, na propriedade ```main``` do ```package.json``` especificado arquivo principal do projeto, na propriedade ```type``` serve para indicar o tipo de modulos que será usado, por default vem ```commonjs```, descobri da pior forma que se você for usar typescript que é o meu caso devo utilizar essa definição, ```module```,optei pela mais recente que é mais performatica e usa importações usando os comandos:

```ts
import { inspect } from "utils";
export 
```

- instalado typescript como ferramenta de desenvolvimento

```terminhal
npm i typescript -D
```

Optei por usar typescript pela tipagem forte que a ferramenta disponibiliza. Algumas customizações foram feitas no ```tsconfig.json```.

```json
{
  "include": ["src/**/*", "node_modules"], // Definido quais arquivos typescript serão compilados para javascript. 
  "exclude": ["**/*.spec.ts"], // Definido quais arquivos typescript NÃO serão compilados para javascript. 
  "compilerOptions": {
    "rootDir": "./", // Determina o diretório(raíz) inicial do projeto. 
    "outDir": "./dist", // Determina o diretório onde seram salvos os arquivos javascript que foram compilados apartir dos arquivos typescripts.
    "module": "ES6", // Optei por usar uma mais recente.
  }
}
```

- Instalando compilador automático

Não há muitas opções aqui, instalei o ```ts-node-dev```(<https://github.com/wclr/ts-node-dev>) como dependência de desenvolvimento, essa ferramenta serve para compilar (_gerar codigo javascript apartir dos arquivos typescript_) rodar a aplicação e monitorar alterações para repetir o processo e reiniciar a aplicação.

```terminal
npm i ts-node-dev --save-dev
```

Agora precisamos definir alguns **scripts** no ```package.json``` da aplicação.

```json
"scripts": {
    "dev": "tsnd --respawn --transpile-only src/app.ts"
  },
```
