/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

// Classe de carros.
class Carros {
    marca;
    cor;
    gastoMedioComb;

    constructor(marca, cor, gastoMedioComb){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioComb = gastoMedioComb;
    }

    calculaGasto (distanciaViagemEmKm, valorCombustivel){
        return distanciaViagemEmKm * this.gastoMedioComb * valorCombustivel;
    }
}

const montana = new Carros('Chevrolet', 'preto', 1 / 12);

console.log(montana.calculaGasto(70, 5.40));

const palio = new Carros('Fiat', "Azul", 1 / 10)

console.log(palio.calculaGasto(70, 5.40));