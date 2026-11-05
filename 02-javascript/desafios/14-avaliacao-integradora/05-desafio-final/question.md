# Avaliação Integradora — JavaScript Fundamental

## Parte 5 — Desafio final: propostas

**Contexto:** este desafio simula uma tarefa próxima de um cenário real de desenvolvimento.

### Estrutura dos arquivos

```text
05-desafio-final/
├── propostas.js
└── app.js
```

### Dados iniciais

No arquivo `app.js`, utilize:

```js
const propostas = [
  {
    id: 1,
    cliente: 'Ana',
    status: 'aprovada',
    valor: 1000
  },
  {
    id: 2,
    cliente: 'Carlos',
    status: 'pendente',
    valor: 2500
  },
  {
    id: 3,
    cliente: 'Mariana',
    status: 'aprovada',
    valor: 3000
  }
];
```

### Planejamento — antes de programar

Responda no topo do arquivo ou registre aqui, antes de implementar.

**1. Quais responsabilidades ficarão em `propostas.js`?**

**Minha resposta: Funções de filtrar propostas ativas, somar valores de propostas aprovadas, e todas as outras funcionalidades**


**2. Quais responsabilidades ficarão em `app.js`?**

**Minha resposta: O app.js será responsável por consumir as funções do propostas.js**


**3. Quais operações serão síncronas?**

**Minha resposta: Propostas aprovadas, Total aprovado e Atualização sem mutação**


**4. Qual operação será assíncrona?**

**Minha resposta: buscarPropostaPorId**


**5. Quais situações considero erro?**

**Minha resposta: id <= 0 e proposta não encontrada**


---

### Requisito 1 — Propostas aprovadas

No arquivo `propostas.js`, crie e exporte uma função que:

- Receba uma lista de propostas.
- Retorne somente as propostas com status `aprovada`.

**Importante:** escolha o método por conta própria e justifique sua decisão.

**Método/estratégia escolhida:**

**Por quê?**


### Requisito 2 — Total aprovado

Crie outra função que retorne o **valor total das propostas aprovadas**.

**Resultado esperado para os dados fornecidos:** `4000`.

**Estratégia escolhida:**

**Por quê?**


### Requisito 3 — Atualização sem mutação

Crie a função `atualizarStatusProposta`, que deve receber:

- `id` — identificador da proposta;
- `novoStatus` — novo status;
- `lista` — lista de propostas.

**Comportamento esperado:** devolver uma **nova lista** com a proposta correspondente atualizada, sem modificar a lista original nem a proposta original.

**Exemplo conceitual:**

```text
id: 2
novoStatus: "aprovada"
```

A proposta de ID `2` deve aparecer com o novo status **apenas na nova lista**.

Este requisito avalia referências, mutabilidade e criação de novos objetos/arrays.

**Como pretendo evitar a mutação:**


**Como vou verificar que o original não mudou:**


### Requisito 4 — Busca assíncrona

Crie e exporte a função `buscarPropostaPorId`.

**Contrato esperado:**

1. Receber `id` e `lista`.
2. Retornar uma `Promise`.
3. Simular uma espera de aproximadamente `500ms`.
4. Informar sucesso ou falha de acordo com as regras abaixo.

| Situação | Resultado esperado |
|---|---|
| `id <= 0` | Falha |
| Proposta não encontrada | Falha |
| Proposta encontrada | Sucesso |

Decida como sinalizar sucesso e falha com os conceitos estudados.

**Como pretendo representar sucesso:**


**Como pretendo representar falha:**


### Requisito 5 — Consumo da busca assíncrona

No `app.js`, crie uma função responsável por consumir `buscarPropostaPorId`.

Ela deve:

- Tratar o sucesso.
- Tratar o erro.
- Executar uma ação final, independentemente do resultado.

**Não há palavras-chave obrigatórias indicadas no enunciado:** decida quais recursos usar.

**Cenários obrigatórios para testar:**

- [ ] `id = 2` — proposta existente.
- [ ] `id = 10` — proposta inexistente.
- [ ] `id = 0` — ID inválido.

**Como vou observar o comportamento nos três cenários:**