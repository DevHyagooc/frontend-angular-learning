# Roadmap Oficial — Jornada Frontend Angular

## Objetivo da jornada

Desenvolver autonomia suficiente para atuar como **Desenvolvedor Frontend Angular Júnior**, sendo capaz de:

- compreender uma tarefa;
- decompor o problema;
- identificar componentes e responsabilidades;
- implementar interfaces;
- trabalhar com HTML, CSS, JavaScript e TypeScript;
- desenvolver aplicações Angular;
- integrar APIs REST;
- trabalhar com formulários, rotas, services e estado;
- investigar erros;
- escrever e revisar testes;
- utilizar Git de forma consciente;
- explicar decisões técnicas;
- consultar documentação e utilizar IA como ferramenta de apoio, não como substituta do raciocínio.

---

# Diagnóstico de partida

| Área | Estado inicial |
|---|---|
| Lógica e fundamentos | 🟢 Bom domínio para nível Júnior |
| JavaScript | 🔴 Precisa revisar |
| TypeScript | 🟡 Compreende, mas precisa praticar |
| HTML | 🟡 Compreende, mas precisa praticar |
| CSS | 🟡 Compreende, mas precisa praticar |
| HTTP / APIs REST | 🟢 Bom domínio para nível Júnior |
| Git | 🟡 Compreende, mas precisa praticar |
| Debugging / investigação | 🟢 Bom domínio para nível Júnior |

## Impacto do diagnóstico no roadmap

O principal ponto de atenção é **JavaScript fundamental**.

Foram identificadas lacunas em:

- referências de objetos;
- mutabilidade;
- iteração;
- escolha de métodos de arrays;
- coerção de tipos.

Por isso, JavaScript será o primeiro módulo formal.

HTTP/APIs e debugging não serão ignorados, mas poderão avançar mais rapidamente, porque já existe uma base profissional aproveitável.

HTML, CSS, TypeScript e Git terão reforço estruturado, sem tratá-los como conhecimentos já dominados.

---

# Classificação de prioridade

## 1 — Essencial para Frontend Angular Júnior

Deve ser dominado durante esta jornada principal.

- lógica de programação;
- HTML semântico;
- CSS;
- Box Model;
- Flexbox;
- Grid;
- responsividade;
- DOM;
- eventos;
- formulários HTML;
- JavaScript;
- arrays e objetos;
- funções;
- transformação de dados;
- promises;
- async/await;
- tratamento de erros;
- TypeScript;
- Angular;
- components;
- templates;
- bindings;
- comunicação entre componentes;
- componentização;
- Services;
- Dependency Injection;
- organização básica de projeto;
- HttpClient;
- APIs REST;
- tratamento de loading e erro;
- Router;
- Reactive Forms;
- RxJS fundamental;
- estado local;
- Signals;
- UI e feedback ao usuário;
- acessibilidade básica;
- testes;
- Git;
- debugging.

## 2 — Importante depois de dominar o essencial

Será introduzido depois que a base estiver funcional.

- rotas filhas;
- guards;
- lazy loading;
- interceptors;
- autenticação;
- FormArray;
- validações customizadas;
- formulários dinâmicos;
- operadores RxJS como `switchMap`, `combineLatest`, `debounceTime` e `distinctUntilChanged`;
- estado compartilhado;
- `computed`;
- effects quando apropriado;
- paginação;
- filtros;
- skeleton loading;
- Design Systems;
- bibliotecas de componentes;
- testes HTTP;
- organização `shared` / `core`;
- utility types;
- generics básicos;
- ESLint;
- análise estática;
- performance básica;
- Conventional Commits.

## 3 — Pode ficar para uma etapa futura

Não deve atrasar a preparação inicial para uma vaga Júnior.

- gerenciamento de estado complexo com bibliotecas externas;
- patterns arquiteturais avançados;
- otimizações avançadas de performance;
- CI/CD aprofundado;
- configuração avançada de Sonar;
- SOLID aprofundado;
- abstrações avançadas de RxJS;
- Design Systems avançados;
- arquitetura frontend de grande escala;
- uso aprofundado de enums quando não forem necessários;
- tópicos avançados da vaga Pleno que não apareçam como necessidade prática durante os projetos.

---

# Módulo 1 — JavaScript Fundamental

**Prioridade:** 1 — Essencial

## Objetivo

Consolidar os fundamentos da linguagem que sustenta TypeScript e Angular.

O objetivo não é memorizar sintaxe, mas compreender como os dados se comportam e conseguir resolver pequenas tarefas sem depender de IA.

## Por que é importante

O diagnóstico mostrou boa lógica, mas lacunas importantes no comportamento do JavaScript.

Avançar diretamente para Angular poderia permitir utilizar recursos do framework sem compreender corretamente o que acontece por baixo.

## Conhecimentos a aprender

- `let` e `const`;
- tipos primitivos;
- operadores;
- coerção de tipos;
- comparação;
- condicionais;
- funções;
- parâmetros e retorno;
- arrow functions;
- escopo;
- arrays;
- objetos;
- referência versus valor;
- mutabilidade;
- `for`;
- `for...of`;
- diferenças relevantes de `for...in`;
- callbacks;
- `map`;
- `filter`;
- `find`;
- `reduce`;
- destructuring;
- spread;
- rest;
- módulos;
- tratamento de erros;
- promises;
- `async/await`.

## Pode percorrer mais rapidamente

- condições;
- operadores lógicos;
- decomposição de problemas;
- loops básicos;
- regras de negócio.

Sua lógica inicial já demonstrou uma base útil nesses pontos.

## Exercícios sugeridos

Local:

`02-javascript/exercicios/`

Exemplos:

- filtrar números;
- transformar listas;
- buscar elementos;
- calcular totais;
- transformar arrays de objetos;
- manipular clientes/produtos fictícios;
- encontrar bugs de tipos;
- prever resultados de pequenos códigos;
- comparar mutação versus criação de novos objetos.

## Desafio prático

Receber uma lista de clientes contendo nome, idade, status e produtos contratados e gerar diferentes informações a partir dela:

- clientes ativos;
- nomes dos clientes;
- cliente por identificador;
- totalizações;
- criação de novos objetos sem modificar os originais.

## Mini projeto

Não haverá projeto completo neste momento.

Primeiro é necessário consolidar a linguagem.

## Critérios para concluir

Você deve conseguir:

- explicar diferença entre primitivo e referência;
- prever corretamente efeitos de alteração em objetos;
- distinguir `for...in` e `for...of` em situações simples;
- utilizar `map`, `filter` e `find` conscientemente;
- resolver transformações básicas de arrays;
- explicar callbacks;
- escrever funções pequenas sem auxílio;
- explicar coerção de tipos em exemplos básicos;
- utilizar `async/await`;
- tratar uma Promise rejeitada;
- explicar o próprio código.

## Pré-requisito para avançar

Conseguir resolver exercícios pequenos de transformação de dados sem precisar que a solução seja estruturada pela IA.

---

# Módulo 2 — Fundamentos da Web: HTML, CSS e DOM

**Prioridade:** 1 — Essencial

## Objetivo

Construir uma interface Web corretamente estruturada, estilizada e responsiva, entendendo a relação entre HTML, CSS, DOM e navegador.

## Por que é importante

Angular não substitui HTML nem CSS.

Um componente Angular continua produzindo interface Web e exige compreensão dessas tecnologias.

## Conhecimentos a aprender

### HTML

- estrutura de uma página;
- HTML semântico;
- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- listas;
- formulários;
- labels;
- botões;
- tabelas quando apropriadas;
- acessibilidade básica.

### CSS

- seletores;
- cascade;
- especificidade básica;
- herança;
- Box Model;
- `box-sizing`;
- unidades;
- display;
- Flexbox;
- Grid;
- responsividade;
- media queries.

### Navegador

- DOM;
- eventos;
- seleção e alteração de elementos;
- formulários;
- DevTools básico.

## Pode percorrer mais rapidamente

- estrutura HTML básica;
- reconhecimento de elementos semânticos;
- Box Model inicial;
- investigação pelo navegador.

## Exercícios sugeridos

Local:

`01-fundamentos-web/html/`

`01-fundamentos-web/css/`

`01-fundamentos-web/exercicios/`

Atividades:

- reconstruir layouts simples;
- identificar problemas semânticos;
- exercícios de Box Model;
- layouts com Flexbox;
- layouts com Grid;
- páginas responsivas;
- formulário acessível;
- manipulação simples do DOM.

## Desafio prático

Construir uma página de listagem de clientes contendo:

- cabeçalho;
- navegação;
- conteúdo principal;
- tabela ou cards;
- filtro visual;
- formulário simples;
- estados de interface;
- comportamento responsivo.

## Mini projeto

Ainda não será o Projeto 1 oficial.

Pode existir uma pequena página estática para consolidar HTML e CSS.

## Critérios para concluir

Você deve conseguir:

- escolher elementos HTML semanticamente;
- explicar por que semântica importa;
- prever dimensões usando Box Model;
- construir layout com Flexbox;
- construir layout simples com Grid;
- adaptar layout para telas menores;
- criar formulário corretamente associado a labels;
- explicar DOM;
- reagir a eventos com JavaScript;
- investigar estilos utilizando DevTools.

## Pré-requisito para avançar

Conseguir construir uma página simples e responsiva sem copiar uma estrutura pronta.

---

# Módulo 3 — TypeScript para Frontend

**Prioridade:** 1 — Essencial

## Objetivo

Transformar sua experiência de TypeScript em automação em domínio suficiente para modelar dados e código de uma aplicação frontend.

## Por que é importante

Angular utiliza TypeScript intensamente.

O objetivo é sair de “sei escrever código TypeScript” para “sei utilizar o sistema de tipos para representar o domínio da aplicação”.

## Conhecimentos a aprender

### Essenciais

- tipos;
- inferência;
- interfaces;
- `type`;
- union types;
- propriedades opcionais;
- `null`;
- `undefined`;
- optional chaining;
- `readonly`;
- narrowing;
- tipagem de funções;
- arrays tipados;
- modelagem de respostas de API.

### Depois do essencial

- generics básicos;
- utility types;
- classes;
- modifiers.

### Futuro / quando necessário

- enums;
- construções genéricas mais avançadas.

## Pode percorrer mais rapidamente

- tipos primitivos;
- interfaces simples;
- identificação de incompatibilidade entre `string` e `number`.

Esses conceitos apareceram corretamente no diagnóstico.

## Exercícios sugeridos

Local:

`03-typescript/exercicios/`

- modelar cliente;
- modelar produto;
- tipar funções;
- propriedades opcionais;
- union types;
- narrowing;
- respostas de APIs;
- corrigir códigos com erros de tipagem.

## Desafio prático

Criar os tipos necessários para representar:

- cliente;
- endereço;
- produto;
- resposta paginada;
- status de cadastro;
- funções de transformação desses dados.

## Mini projeto

Não necessário.

## Critérios para concluir

Você deve conseguir:

- distinguir `interface` e `type` em casos básicos;
- criar modelos corretamente tipados;
- utilizar unions;
- trabalhar conscientemente com `null` e `undefined`;
- realizar narrowing;
- tipar funções;
- modelar dados de API;
- explicar onde TypeScript ajuda e onde não garante validação em runtime.

## Pré-requisito para avançar

Conseguir modelar sozinho um pequeno domínio utilizando TypeScript.

---

# Módulo 4 — Projeto Web Fundamental

**Prioridade:** 1 — Essencial

## Objetivo

Combinar HTML, CSS, JavaScript, DOM e consumo de API em uma aplicação pequena sem framework.

## Local

`projects/01-projeto-web`

## Por que é importante

Antes de Angular, você precisa experimentar diretamente problemas que posteriormente o framework ajudará a resolver.

## Conhecimentos aplicados

- HTML;
- CSS;
- responsividade;
- JavaScript;
- DOM;
- eventos;
- formulários;
- `fetch`;
- promises;
- `async/await`;
- loading;
- sucesso;
- erro;
- consumo de API.

## Pode percorrer mais rapidamente

HTTP e interpretação de respostas podem receber menos tempo, porque o diagnóstico demonstrou uma boa base de APIs REST.

## Exercícios / tickets

O projeto será dividido em tarefas pequenas.

Exemplos futuros:

- criar estrutura da página;
- renderizar lista;
- filtrar resultados;
- buscar dados;
- exibir loading;
- tratar erro;
- formulário simples.

## Desafio prático

Investigar um bug real introduzido propositalmente no fluxo da aplicação.

## Critérios para concluir

Você deve conseguir:

- construir uma pequena aplicação sem framework;
- consumir uma API;
- transformar os dados recebidos;
- atualizar a interface;
- tratar loading e erro;
- utilizar DevTools/Network para investigar problemas;
- explicar o fluxo completo navegador → API → JavaScript → DOM.

## Pré-requisito para avançar

Conseguir construir e explicar a aplicação sem depender de código completo gerado por IA.

---

# Módulo 5 — Angular Fundamental

**Prioridade:** 1 — Essencial

## Objetivo

Aprender os elementos fundamentais de uma aplicação Angular.

## Local

`04-angular-fundamentos/`

## Por que é importante

Este módulo inicia efetivamente a especialização Angular após a construção dos fundamentos necessários.

## Conhecimentos a aprender

- estrutura do projeto;
- Angular CLI;
- componentes;
- templates;
- interpolation;
- property binding;
- event binding;
- two-way binding quando aplicável;
- diretivas;
- controle de fluxo;
- lifecycle básico;
- Input;
- Output;
- comunicação entre componentes;
- reutilização;
- componentização.

## Questão central do módulo

Você deve aprender a responder:

> Isso deveria ser um componente?

e:

> Por que esse componente existe?

## Exercícios sugeridos

Local:

`04-angular-fundamentos/exercicios/`

- contador;
- cards;
- lista de produtos;
- filtro local;
- componente pai/filho;
- Input;
- Output;
- renderização condicional;
- listas.

## Desafio prático

Receber uma interface simples e definir sozinho:

- quais componentes existem;
- quem recebe dados;
- quem emite eventos;
- quais responsabilidades pertencem a cada componente.

## Mini projeto

Local:

`projects/02-primeiro-angular`

Aplicação pequena focada em:

- components;
- templates;
- bindings;
- services básicos posteriormente;
- models.

## Critérios para concluir

Você deve conseguir:

- criar componentes;
- explicar template e classe;
- utilizar bindings conscientemente;
- comunicar pai e filho;
- decidir quando dividir componentes;
- explicar lifecycle básico;
- construir uma aplicação pequena sem arquitetura excessiva.

## Pré-requisito para avançar

Conseguir decompor uma interface em componentes e justificar as decisões.

---

# Módulo 6 — Arquitetura Angular, Services e Dependency Injection

**Prioridade:** 1 — Essencial

## Objetivo

Separar responsabilidades e organizar uma aplicação Angular de maneira sustentável.

## Por que é importante

Criar componentes é apenas o começo.

Uma aplicação profissional precisa separar interface, regras, acesso a dados e modelos.

## Conhecimentos a aprender

### Essenciais

- pages;
- components;
- services;
- models;
- interfaces;
- Dependency Injection;
- separação de responsabilidades;
- organização por domínio/feature.

### Depois do essencial

- shared;
- core;
- estruturas maiores de projeto.

## Pode percorrer mais rapidamente

Modelagem de dados simples poderá aproveitar o módulo de TypeScript.

## Exercícios sugeridos

Local:

`04-angular-fundamentos/exercicios/`

e posteriormente:

`05-angular-intermediario/services/`

- identificar responsabilidades erradas;
- extrair lógica de componentes;
- criar services;
- utilizar injeção de dependência;
- organizar pequenas features.

## Desafio prático

Receber um componente propositalmente sobrecarregado e indicar o que deveria permanecer nele e o que deveria ser extraído.

## Critérios para concluir

Você deve conseguir:

- explicar por que services existem;
- utilizar Dependency Injection;
- separar page e component quando necessário;
- evitar lógica excessiva no template;
- organizar código por feature;
- justificar responsabilidades.

## Pré-requisito para avançar

Conseguir desenhar a estrutura básica de uma feature antes de implementá-la.

---

# Módulo 7 — Angular + APIs REST

**Prioridade:** 1 — Essencial

## Objetivo

Transferir sua experiência de APIs em QA para implementação de integração frontend/backend.

## Local

`05-angular-intermediario/http/`

## Por que é importante

É uma das competências mais importantes para aplicações corporativas Angular.

Também é uma área em que seu conhecimento atual pode acelerar bastante a evolução.

## Conhecimentos a aprender

- HttpClient;
- GET;
- POST;
- PUT;
- PATCH;
- DELETE;
- query params;
- headers;
- models;
- DTOs;
- services de API;
- loading;
- sucesso;
- erro;
- códigos HTTP;
- integração frontend/backend.

## Importante depois

- interceptors;
- autenticação;
- tokens.

## Pode percorrer mais rapidamente

- significado dos métodos HTTP;
- leitura de status;
- request;
- response;
- payload;
- investigação pelo Network;
- contratos de APIs.

## Exercícios sugeridos

- implementar GET;
- criar cadastro com POST;
- edição;
- exclusão;
- query params;
- tratamento de `400`, `404` e `500`;
- loading;
- estado vazio.

## Mini projeto

Local:

`projects/03-crud-angular`

Aplicação CRUD contendo:

- listagem;
- criação;
- edição;
- exclusão;
- detalhes;
- filtros;
- integração com API.

## Critérios para concluir

Você deve conseguir:

- criar um service HTTP;
- tipar request e response;
- consumir endpoints;
- separar integração do componente;
- tratar loading;
- tratar erro;
- diferenciar problema frontend, contrato e backend;
- investigar uma chamada pelo Network.

## Pré-requisito para avançar

Implementar e explicar um CRUD básico integrado a uma API.

---

# Módulo 8 — Angular Router

**Prioridade:** 1 no básico / 2 nos recursos intermediários

## Local

`05-angular-intermediario/routing/`

## Objetivo

Construir aplicações Angular com múltiplas páginas e navegação organizada.

## Conhecimentos essenciais

- definição de rotas;
- `routerLink`;
- parâmetros;
- query params;
- `ActivatedRoute`;
- navegação programática;
- página 404.

## Importante depois

- rotas filhas;
- guards;
- lazy loading.

## Exercícios sugeridos

- lista → detalhes;
- rota por ID;
- filtros via query params;
- página inexistente;
- navegação após uma ação.

## Desafio prático

Criar o fluxo:

`/clientes`

→ `/clientes/novo`

→ `/clientes/:id`

→ `/clientes/:id/editar`

## Critérios para concluir

Você deve conseguir:

- definir rotas;
- recuperar parâmetros;
- utilizar query params;
- navegar programaticamente;
- explicar quando uma informação deve estar na URL;
- implementar rota 404.

## Pré-requisito para avançar

Conseguir estruturar sozinho as rotas básicas de uma feature CRUD.

---

# Módulo 9 — Reactive Forms

**Prioridade:** 1 — Essencial

## Local

`05-angular-intermediario/forms/`

## Objetivo

Construir formulários profissionais e previsíveis.

## Conhecimentos essenciais

- FormControl;
- FormGroup;
- Validators;
- required;
- mensagens de erro;
- touched;
- dirty;
- disabled;
- submit;
- integração com API.

## Importante depois

- FormArray;
- validações customizadas;
- formulários dinâmicos.

## Exercícios sugeridos

- login;
- cadastro de cliente;
- edição;
- campos obrigatórios;
- validações;
- mensagens condicionais;
- submit para API.

## Desafio prático

Formulário de cliente contendo múltiplos campos, validações e comportamento correto de erros.

## Critérios para concluir

Você deve conseguir:

- montar um FormGroup;
- acessar valores;
- validar;
- controlar mensagens de erro;
- diferenciar touched e dirty;
- desabilitar campos;
- enviar dados;
- carregar dados para edição;
- integrar formulário com service.

## Pré-requisito para avançar

Implementar cadastro e edição sem precisar de estrutura pronta fornecida pela IA.

---

# Módulo 10 — RxJS e Fluxo Assíncrono

**Prioridade:** 1 no fundamental / 2 nos operadores intermediários

## Local

`05-angular-intermediario/rxjs/`

## Objetivo

Compreender RxJS em vez de decorar operadores.

## Conhecimentos essenciais

- Observable;
- Observer;
- subscribe;
- pipe;
- fluxo de dados;
- diferença entre Promise e Observable;
- `map`;
- `tap`;
- `filter`;
- `catchError`;
- `finalize`.

## Importante depois

- `switchMap`;
- `combineLatest`;
- `debounceTime`;
- `distinctUntilChanged`.

## Pode percorrer mais rapidamente

Promises e `async/await`, desde que tenham sido consolidados no Módulo 1.

## Exercícios sugeridos

Cada exercício deverá começar pela pergunta:

> Qual problema preciso resolver?

Somente depois escolheremos o operador.

Exemplos:

- transformar resposta;
- loading;
- erro;
- busca digitada;
- chamadas dependentes;
- combinação de dados.

## Desafio prático

Implementar busca de clientes com fluxo assíncrono e evitar chamadas desnecessárias.

## Critérios para concluir

Você deve conseguir:

- explicar Observable;
- explicar diferenças fundamentais para Promise;
- interpretar um `pipe`;
- escolher operador baseado no problema;
- tratar erros;
- controlar loading;
- explicar `switchMap` em um caso real.

## Pré-requisito para avançar

Conseguir ler e explicar um fluxo RxJS comum de aplicação Angular.

---

# Módulo 11 — Estado e Angular Moderno

**Prioridade:** 1 no estado local / 2 no compartilhado

## Objetivo

Aprender a representar e derivar estado sem introduzir complexidade prematuramente.

## Conhecimentos

### Essenciais

- conceito de estado;
- estado local;
- Signals;
- valores derivados.

### Importante depois

- estado compartilhado;
- `computed`;
- effects quando apropriado;
- escolha entre Signals e RxJS.

### Futuro

Bibliotecas complexas de gerenciamento de estado.

## Exercícios sugeridos

- contador;
- filtros;
- estado de seleção;
- dados derivados;
- compartilhar estado simples.

## Desafio prático

Analisar diferentes situações e decidir:

- variável comum;
- Signal;
- Observable.

A decisão deverá ser justificada.

## Critérios para concluir

Você deve conseguir:

- explicar o problema que estado resolve;
- utilizar Signals em casos simples;
- criar valor derivado;
- distinguir estado local e compartilhado;
- justificar escolha entre Signal e Observable em situações básicas.

## Pré-requisito para avançar

Conseguir escolher uma estratégia simples sem introduzir abstrações desnecessárias.

---

# Módulo 12 — UI Profissional, Responsividade e Acessibilidade

**Prioridade:** 1 no básico / 2 em Design Systems

## Objetivo

Transformar telas tecnicamente funcionais em interfaces adequadas a aplicações profissionais.

## Conhecimentos essenciais

- responsividade;
- componentização visual;
- reutilização;
- loading;
- estado vazio;
- mensagens de erro;
- feedback;
- tabelas;
- filtros;
- modais;
- acessibilidade básica.

## Importante depois

- skeleton;
- paginação;
- bibliotecas de componentes;
- Design Systems.

## Exercícios sugeridos

Melhorar telas construídas anteriormente adicionando:

- loading;
- erro;
- vazio;
- responsividade;
- navegação por teclado;
- labels;
- feedback após ações.

## Desafio prático

Receber uma tela funcional porém ruim e realizar uma análise de UX técnica:

- o que falta;
- que estados não foram tratados;
- problemas de acessibilidade;
- problemas de reutilização.

## Critérios para concluir

Você deve conseguir:

- identificar estados da interface;
- tornar páginas responsivas;
- criar feedback adequado;
- utilizar HTML semanticamente;
- considerar teclado e tecnologias assistivas;
- explicar por que acessibilidade não é apenas um atributo adicional.

## Pré-requisito para avançar

Aplicar essas práticas a uma feature já construída.

---

# Módulo 13 — Testes, Git, Debugging e Qualidade

**Prioridade:** 1 no fundamental / 2 nas ferramentas de qualidade

## Local

`06-testes/`

## Objetivo

Aproveitar sua experiência de QA e transformá-la em capacidade de testar, depurar e revisar software como desenvolvedor.

## Conhecimentos essenciais

### Testes

- testes unitários;
- testes de componentes;
- mocks;
- spies;
- testes de services;
- diferenças entre unitário, integração e E2E.

### Git

- working tree;
- staging;
- commits;
- branches;
- merge;
- conflitos;
- fetch;
- pull;
- `status`;
- `diff`;
- histórico;
- Pull Requests.

### Debugging

- console;
- breakpoints;
- DevTools;
- Network;
- stack traces;
- investigação sistemática.

## Importante depois

- testes HTTP;
- Conventional Commits;
- ESLint;
- análise estática;
- Sonar;
- performance básica.

## Pode percorrer mais rapidamente

- E2E;
- Playwright;
- raciocínio de investigação;
- análise de bugs;
- Network;
- regras de negócio.

O foco será aprender a perspectiva do desenvolvedor.

## Exercícios sugeridos

- testar função;
- testar componente;
- mockar dependência;
- testar service;
- localizar bug;
- interpretar stack trace;
- resolver conflito Git;
- identificar alterações com `status` e `diff`;
- revisar Pull Request simulado.

## Desafio prático

Receber uma feature com:

- um bug funcional;
- um problema de API;
- um teste quebrado;
- uma alteração Git conflitante.

Investigar cada situação sem solução pronta.

## Critérios para concluir

Você deve conseguir:

- escolher o tipo de teste adequado;
- escrever testes básicos;
- utilizar mock e spy conscientemente;
- investigar bugs;
- utilizar DevTools;
- compreender `git status` e `git diff`;
- atualizar sua branch conscientemente;
- explicar conflito;
- revisar código simples.

## Pré-requisito para avançar

Demonstrar autonomia razoável de investigação e manutenção.

---

# Módulo 14 — Projeto Angular Intermediário

**Prioridade:** 1 e 2 combinados

## Local

`projects/04-angular-intermediario`

## Objetivo

Integrar os conhecimentos Angular adquiridos em uma aplicação maior antes do projeto final.

## Conteúdos integrados

- Router;
- services;
- Dependency Injection;
- APIs;
- Reactive Forms;
- autenticação;
- guards;
- interceptors;
- RxJS;
- Signals quando apropriado;
- componentes reutilizáveis;
- validações;
- loading;
- erros;
- responsividade;
- testes.

## Forma de trabalho

O projeto será conduzido como tickets.

Antes de implementar cada tarefa, será necessário explicar:

1. o que precisa ser feito;
2. quais componentes serão utilizados;
3. quais responsabilidades existirão;
4. como os dados irão circular;
5. quais possíveis estados de erro existem.

## Critérios para concluir

Você deve conseguir receber uma tarefa intermediária e elaborar uma proposta de implementação antes de escrever código.

Também deverá conseguir justificar:

- componentes;
- services;
- models;
- rotas;
- formulários;
- chamadas HTTP;
- fluxo RxJS/Signals;
- tratamento de erros.

## Pré-requisito para avançar

Autonomia suficiente para implementar features sem receber previamente a arquitetura da solução.

---

# Módulo 15 — Projeto Final: Portal de Seguros

**Prioridade:** consolidação

## Local

`final-project/portal-seguros`

## Objetivo

Simular o tipo de aplicação corporativa que poderá ser encontrada em uma atuação profissional como Frontend Angular.

Não serão utilizadas informações, código ou propriedade intelectual da empresa real.

## Possíveis módulos

- login;
- dashboard;
- clientes;
- produtos;
- simulações;
- propostas;
- usuários.

## Possíveis rotas

- `/login`
- `/dashboard`
- `/clientes`
- `/clientes/novo`
- `/clientes/:id`
- `/clientes/:id/editar`
- `/produtos`
- `/produtos/:id`
- `/simulacoes`
- `/simulacoes/nova`

## Conhecimentos consolidados

- components;
- pages;
- services;
- models;
- API REST;
- autenticação;
- guards;
- interceptors;
- Reactive Forms;
- validações;
- RxJS;
- Signals;
- paginação;
- filtros;
- busca;
- loading;
- estados vazios;
- tratamento de erros;
- responsividade;
- acessibilidade;
- testes;
- Git;
- debugging.

## Forma de desenvolvimento

O projeto não será implementado de uma vez.

Cada funcionalidade será transformada em ticket.

Exemplo:

### [FRONT] Implementar listagem de clientes

**História**

Como usuário, quero visualizar clientes para consultar os clientes cadastrados.

**Critérios de aceite**

- exibir clientes;
- apresentar informações relevantes;
- possuir loading;
- possuir estado vazio;
- tratar erros.

Antes de implementar, deverá ser apresentada uma proposta técnica.

## Critério final da jornada

Diante de uma tarefa como:

> Implementar cadastro e listagem de clientes utilizando a API.

Você deverá conseguir pensar autonomamente em uma estrutura semelhante a:

```text
Page
  ↓
Components
  ↓
Reactive Forms
  ↓
Service
  ↓
HttpClient
  ↓
API
  ↓
loading / sucesso / erro
```

Sem precisar que uma IA desenhe toda a solução.

---

# Ordem oficial dos módulos

1. **JavaScript Fundamental**
2. **Fundamentos da Web: HTML, CSS e DOM**
3. **TypeScript para Frontend**
4. **Projeto Web Fundamental**
5. **Angular Fundamental**
6. **Arquitetura Angular, Services e Dependency Injection**
7. **Angular + APIs REST**
8. **Angular Router**
9. **Reactive Forms**
10. **RxJS e Fluxo Assíncrono**
11. **Estado e Angular Moderno**
12. **UI Profissional, Responsividade e Acessibilidade**
13. **Testes, Git, Debugging e Qualidade**
14. **Projeto Angular Intermediário**
15. **Projeto Final — Portal de Seguros**

---

# Primeiro módulo

## Módulo 1 — JavaScript Fundamental

Este será o ponto de partida porque o diagnóstico mostrou uma combinação importante:

- sua lógica de programação está em bom nível inicial;
- você já consegue decompor problemas;
- porém existem lacunas fundamentais específicas de JavaScript.

Entre elas:

- referência de objetos;
- mutabilidade;
- iteração;
- métodos de arrays;
- coerção de tipos.

Esses conhecimentos aparecem constantemente em TypeScript e Angular.

Portanto, o objetivo não será estudar programação desde o início, nem passar semanas revendo condicionais simples.

O foco será:

> **usar sua lógica já existente para consolidar o comportamento da linguagem JavaScript.**

Somente depois dessa base estar suficientemente segura avançaremos para as próximas etapas.

---

# Regra de progressão

A conclusão de um módulo não será determinada apenas por “ter visto” os assuntos.

Para avançar, será necessário demonstrar capacidade de:

1. explicar os conceitos;
2. resolver exercícios;
3. interpretar código;
4. encontrar erros;
5. implementar pequenas soluções;
6. justificar decisões;
7. pesquisar quando não souber;
8. utilizar IA sem terceirizar o raciocínio.

Quando uma lacuna fundamental aparecer, ela será revisada antes da progressão.

---

# Uso da documentação

Durante a jornada haverá momentos em que a primeira tarefa será consultar documentação oficial e explicar o que foi compreendido.

A mentoria complementará ou corrigirá a interpretação posteriormente.

O objetivo é desenvolver autonomia de pesquisa, e não apenas capacidade de perguntar à IA.

---

# Uso da IA durante a jornada

IA será incentivada para:

- explicações;
- pistas;
- revisão;
- debugging;
- comparação de abordagens;
- code review;
- geração de exercícios;
- apoio na leitura de documentação.

Será evitada como substituta para:

- pensar na solução;
- implementar automaticamente uma feature;
- corrigir qualquer erro sem investigação;
- gerar código que não possa ser explicado.

Ao utilizar código fornecido por IA, as perguntas de controle serão:

1. O que esse código faz?
2. Por que funciona?
3. O que cada parte importante faz?
4. Eu conseguiria recriar algo semelhante?
5. Existe alguma parte que ainda não compreendo?

Se uma dessas respostas não puder ser explicada, o conceito ainda não será considerado aprendido.

---

# Estado atual

**Roadmap:** aguardando aprovação.

**Próximo módulo após aprovação:** JavaScript Fundamental.

Nenhuma aula deve ser iniciada antes da aprovação deste roadmap.