
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const numeros = gets();
let maiorPar = -Infinity;
let menorImpar = Infinity;

for (let i = 0; i < numeros; i++) {
  const numero = gets();

  if (numero % 2 === 0 && numero > maiorPar) {
    maiorPar = numero;
  }

  if (numero % 2 !== 0 && numero < menorImpar) {
    menorImpar = numero;
  }
}
console.log(`Maior número par: ${maiorPar}`);
console.log(`Menor número ímpar: ${menorImpar}`);
