/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const valorEtanol = 3.5;
const valorGasolina = 4.5;
const kmPorLitro = 10;
const distanciaEmKm = 150;
const combustivelEscolhido = "Gasolina";
let custoTotal = 0;

if (combustivelEscolhido) {
  custoTotal = (distanciaEmKm / kmPorLitro) * valorGasolina;
  console.log(custoTotal.toFixed(2));
} else {
  custoTotal = (distanciaEmKm / kmPorLitro) * valorEtanol;
  console.log(custoTotal.toFixed(2));
}
