# Workshop Resilia

## Objetivo
Construir uma aplicação web com algumas funções essenciais relacionadas ao gerenciamento de contas bancárias.

## Requisitos

* Possibilitar abertura de uma conta;
  * Os dados necessárioos são: Nome completo e CPF;
  * Só é permitido uma conta por pessoa;
* Com essa conta deve ser possível realizar transações;
  * Transferências para outras contas;
  * Depósito em conta existente;
* As contas não podem ter valor negativo;
* Por questão de segurança, cada transação de depósito não pode ser maior do que R$5.000;

## O que será Avaliado

* Aplicação funcional, ou seja, cumprindo os requisitos;
* Utilização de boas práticas (princípios SOLID, code-smells, etc)
* Estrutura e organização (componentização, uso de camadas, etc)
* Legibilidade do código (nomenclatura de classes, métodos e variáveis, lint, etc)
* Implementação de testes que garantam que o código está atendendo os requisitos
* Documentação (histórico de commits no git, readme, diagramas, etc)

## Stack

[Create React App](https://github.com/facebook/create-react-app).

## Scripts
### `npm start`

Executa o aplicativo em modo de desenvolvimento.\
[http://localhost:3000](http://localhost:3000)

### `npm test`

Executa os testes de modo iterativo\
[Executa os testes](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
[Executa o build](https://facebook.github.io/create-react-app/docs/deployment)

```
/src              #diretorio principal
/dependencias atualizadas 
```