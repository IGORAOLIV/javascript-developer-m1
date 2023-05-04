// Notas do semetre
let nota1 = 6; // Primeira nota do semestre
let nota2 = 0; // Segunda nota do semestre
let nota3 = 7; // Terceira nota do semestre

// Calcula média semestre
const media = (nota1 + nota2 + nota3) / 3;

// Exibe nota semestre
console.log(media.toFixed(1))

// Exibe status semestre
if (media < 5){
    console.log('Reprovado')
} else if (media >= 5 && media <= 7){
    console.log('Recuperação')
} else {
    console.log('Aprovado!')
}