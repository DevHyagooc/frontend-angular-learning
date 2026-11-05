# Parte 1 — Conceitos

**Instrução:** Responder com minhas próprias palavras, sem executar os códigos antes de analisar.

---

## 1. Referência

**Código para análise:**

```js
const clienteA = {
  nome: 'Ana',
  ativo: true
};

const clienteB = clienteA;

clienteB.ativo = false;
```

**1.1. Qual será o valor de `clienteA.ativo`?**

Minha resposta: false

**1.2. Por que isso acontece?**

Minha resposta: porque o código está usando o clienteA como referência, ambos utilizam o mesmo objeto

**1.3. Trocar `const clienteB` por `let clienteB` resolveria o compartilhamento? Por quê?**

Minha resposta: não, pois ainda continuariam utilizando o mesmo objeto

---

## 2. `const`

**Código para análise:**

```js
const cliente = {
  nome: 'Ana'
};

cliente.nome = 'Mariana';
```

**2.1. Por que a alteração acima funciona?**

Minha resposta: porque o código está alterando apenas a propriedade nome chamando o objeto cliente

**Agora considere:**

```js
cliente = {
  nome: 'Carlos'
};
```

**2.2. Por que essa segunda operação não funciona?**

Minha resposta: porque o código está tentando criar a mesma variável passando um objeto ao invés de passar apenas a propriedade

---

## 3. Comparação

**Código para análise:**

```js
const idDaUrl = '10';

const cliente = {
  id: 10
};
```

**3.1. Qual abordagem utilizaria para comparar os IDs?**

Minha resposta: seguindo exatamente esse modelo eu utilizaria o "=="

**3.2. Por que escolheria essa abordagem?**

Minha resposta: porque ele não valida estritamente, não tenta converter a string para number

---

## 4. Callback

**4.1. O que é uma callback?**

Minha resposta: é uma função que retorna algo

**4.2. Dê um exemplo de algo estudado neste módulo que recebe uma callback.**

Minha resposta: uma função assíncrona

---

## 5. Spread

**Código A:**

```js
const copia = original;
```

**Código B:**

```js
const copia = {
  ...original
};
```

**5.1. Qual é a diferença entre as duas abordagens?**

Minha resposta: a primeira está utilizando referência, ambas apontam pra um mesmo objeto, já o código B, utiliza spread pra criar um nobo objeto com as propriedades do original

**5.2. O que significa dizer que spread faz uma cópia rasa?**

Minha resposta: ele cria uma cópia apenas das propriedades externas, caso haja um objeto dentro do objeto, as propriedades internas permanecerão referenciando o objeto original

---

## 6. `return` × `throw`

**Código A:**

```js
return valor;
```

**Código B:**

```js
throw new Error('Falha');
```

**6.1. Qual é a intenção do `return`?**

Minha resposta: retornar um valor, objeto, lista, mensagem etc... pra uma função

**6.2. Qual é a intenção do `throw`?**

Minha resposta: lançar uma mensagem, nesse caso de erro

**6.3. Como cada um afeta o fluxo da função?**

Minha resposta: caso a função tenha ocorrido com sucesso o valor será retornado, caso falhe, será enviado a mensagem de erro do throw

---

## 7. Promise

**7.1. Explique os três estados de uma Promise.**

- **`pending`:**
a função está em andamento, aguardando ser finalizada com sucesso ou falha

- **`fulfilled`:**
função foi finalizada com sucesso

- **`rejected`:**
função foi finalizada com falha

**7.2. Qual é o papel de `resolve`?**

Minha resposta: retornar o valor de sucesso da função, seja ela um objeto, mensagem etc..

**7.3. Qual é o papel de `reject`?**

Minha resposta: retornar o valor de falha da função, normalmente uma mensagem de erro

---

## 8. `async/await`

**Código para análise:**

```js
const buscar = async () => {
  return 10;
};
```

**8.1. Por que `buscar()` não retorna diretamente o número `10`?**

Minha resposta: porque ela é uma função assíncrona, ela retorna uma Promise

**8.2. O que a chamada `buscar()` retorna?**

Minha resposta: Promise [10]

---

## Autoavaliação da Parte 1

**Qual questão tive mais dificuldade para responder?**

Minha resposta: a 2

**Precisei consultar alguma documentação? Qual e por quê?**

Minha resposta: não

**Existe algum conceito que ainda não consigo explicar com segurança?**

Minha resposta: fico um pouco na dúvida do throw
