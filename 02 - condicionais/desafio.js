const precoEtanol = 5.79; // preço por litro de etanol
const precoGasolina = 6.66; // preço por litro de gasolina
const tipoCombustivel = 'gasolina'; // tipo de combustível usado no carro
const gastoMedio = 10; // gasto médio de combustível do carro em KM/L
const distancia = 100; // distância da viagem em KM

let valorTotal = 0;
if (tipoCombustivel === 'etanol') {
  valorTotal = (distancia / gastoMedio) * precoEtanol;
} else {
  valorTotal = (distancia / gastoMedio) * precoGasolina;
}

console.log(`O valor total da viagem será de R$${valorTotal.toFixed(2)}.`);
