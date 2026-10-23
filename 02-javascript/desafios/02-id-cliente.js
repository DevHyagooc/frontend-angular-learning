// 2. Desafio — bug de frontend

// Imagine que recebemos:
const idDaUrl = '42';

const cliente = {
  id: 42,
  nome: 'Mariana'
};

// Um desenvolvedor escreveu:
if (idDaUrl === cliente.id) {
  console.log('Cliente encontrado');
} else {
  console.log('Cliente não encontrado');
}

// Quero que você investigue conceitualmente.

// Responda em comentários:
// 1. Qual mensagem será exibida? R: Será exibido "Cliente não encontrado"
// 2. Por que a comparação falha? R: Pois ele realizou uma comparação estrita com o "===", fazendo validar valor e tipagem
// 3. Qual é o tipo de idDaUrl? R: String
// 4. Qual é o tipo de cliente.id? R: Number
// 5. Em vez de trocar simplesmente === por ==, qual seria uma abordagem conceitualmente mais explícita? R: Utilizar o idDaUrl como Number
// 6. Por que essa abordagem poderia tornar o código mais previsível? R: Pois mantendo tudo no mesmo padrão de tipagem evitaria erros durante a execução do sistema