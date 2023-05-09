const numeros = [1, 2, 3, 4, 5, 6, 7, 8,];

let numPar = [];
let numImpar = [];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0){
        numero.push(numPar[]);
    }
    if (numero % 2 !== 0){
        numero.push(numImpar[]);
    }    
}

console.log(numPar);
console.log(numImpar);
