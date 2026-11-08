Exercício 04 — Formulário com controles variados
Módulo 2 · Etapa 03
Médio

Contexto
Você recebeu uma tarefa para ampliar o formulário de suporte desenvolvido anteriormente.

Agora, além das informações básicas, o usuário precisa informar detalhes do chamado, selecionar sua categoria, definir uma prioridade e escolher se deseja receber notificações.

Critérios de aceite
1. Criar um documento HTML completo com estrutura semântica.
2. Criar um formulário contendo:
   - Nome completo — texto, obrigatório.
   - E-mail — tipo email, obrigatório.
   - Descrição do problema — campo de múltiplas linhas, obrigatório.
   - Categoria — seleção entre Sistema, Rede e Hardware.
   - Prioridade — três opções do tipo radio: Baixa, Média e Alta.
   - Receber notificações — um checkbox opcional.
3. Associar corretamente os labels aos controles.
4. Garantir que apenas uma prioridade possa estar selecionada por vez.
5. Utilizar id, name e value de maneira apropriada.
6. Adicionar um botão para enviar o formulário.
7. Não utilizar CSS, JavaScript ou Angular.
Não precisa integrar uma API. Queremos estudar exclusivamente os controles HTML.
Um conceito adicional: fieldset e legend
Quando temos controles relacionados, como as três opções de prioridade, podemos agrupá-los semanticamente utilizando:
- <fieldset> para representar o grupo de controles.
- <legend> para identificar o propósito desse grupo.
Esses elementos ajudam tecnologias assistivas a compreender o contexto das opções.

Quero que você pesquise como utilizá-los e tente aplicá-los ao grupo de prioridades.
Perguntas de compreensão
Responda em comentários no index.html, seguindo nosso padrão:
1. Qual é a diferença entre select e radio?
2. Por que os radios de prioridade precisam compartilhar o mesmo name?
3. Qual é a função do atributo value em um checkbox?
4. O que acontece no envio HTML padrão quando um checkbox está desmarcado?
5. Por que utilizar fieldset e legend pode melhorar a acessibilidade?