/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros {
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }
  calculaCusto(distanciaEmKm, valorCombustivel) {
    return distanciaEmKm * this.gastoMedio * valorCombustivel;
  }
}

const corsa = new Carros("Volkswagen", "Azul", 1 / 10);

console.log(corsa.calculaCusto(100, 5.4));
console.log(corsa);
