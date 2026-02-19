export const formatter = (valor: number) => {
  return `R$${valor.toFixed(2).replace(".", ",")}`;
};
