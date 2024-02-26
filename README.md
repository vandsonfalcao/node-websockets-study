# Projeto de estudo para Websockets, NodeJS 20

## Estruntura

## Inspiração

Veio a partir de uma live do @maykbrito onde o proprio estava tentando aprender websockets na "marra", nao assisti toda live pois estava trabalhando.

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
