Médio — o que deve ser exportado?

Considere conceitualmente:
const validarValor = (valor) => {
  return valor > 0;
};

const calcularDesconto = (valor) => {
  if (!validarValor(valor)) {
    return 0;
  }

  return valor * 0.1;
};

Imagine que outro arquivo só precisa chamar:
calcularDesconto

Responda antes de implementar qualquer coisa:
1. validarValor obrigatoriamente precisa ser exportada?
2. Se somente calcularDesconto usa validarValor, onde você deixaria essa função?
3. Qual vantagem existe em não exportar tudo indiscriminadamente?

Depois organize isso em:
desconto.js
app.js