const validarValor = (valor) => {
  return valor > 0;
};

export const calcularDesconto = (valor) => {
  if (!validarValor(valor)) {
    return 0;
  }

  return valor * 0.1;
};