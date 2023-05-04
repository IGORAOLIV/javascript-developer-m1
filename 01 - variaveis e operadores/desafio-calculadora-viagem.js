// Define as variáveis
let precoCombustivel = 4.50; // Preço por litro
let consumoCarro = 12; // Quilômetros por litro
let distanciaViagem = 200; // Quilômetros

// Calcula o valor gasto em combustível
const litrosConsumidos = distanciaViagem / consumoCarro;
const valorGasto = litrosConsumidos * precoCombustivel;

// Imprime o resultado
console.log("O valor gasto em combustível será de R$" + valorGasto.toFixed(2));
