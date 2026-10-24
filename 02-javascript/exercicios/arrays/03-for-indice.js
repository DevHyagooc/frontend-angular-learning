// Médio — for tradicional

// Use:
// const valores = [10, 20, 30, 40];

// Com for tradicional, exiba:
// Índice 0: 10
// Índice 1: 20
// Índice 2: 30
// Índice 3: 40

// Quero que você use conscientemente:
// array.length

// Depois explique:
// 1. Por que começamos com índice 0? R: porque todo array se inicia com índice 0 e nesse caso eu queria somar todos os valores sem deixar passar nenhum
// 2. Por que a condição normalmente usa < valores.length e não <= valores.length? R: Porque se usarmos <= valores.length o loop fará uma rota a mais pra um indíce que não existe pois ja ultrapassou o tamanho máximo

const valores = [10, 20, 30, 40];

for(let i = 0; i < valores.length; i++) {
   console.log(`Índice ${i}: ${valores[i]}`)
}