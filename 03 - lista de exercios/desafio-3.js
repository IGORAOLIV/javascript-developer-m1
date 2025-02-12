/* Algoritimo de descontos 
Código Condição de pagamento:
1 - A vista Débito, recebe de desconto de 10%;
2 - A vista no Dinheiro ou PIX, recebe de desconto de 15%;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais Juros de 10%;
*/

//Valor do precoEtiqueta
let precoEtiqueta = 100; // substitua pelo valor do produto

// Condições de pagamento
let fomarPagamento = 3; // substitua pela forma de pagamento escolhida

// Calcula valor final
if (fomarPagamento === 1){
    valorTotal = precoEtiqueta * 0.9;
} else if (fomarPagamento === 2){
    valorTotal = precoEtiqueta * 0.85;
} else if (fomarPagamento === 3){
    valorTotal = precoEtiqueta;
} else if (fomarPagamento === 4){
    valorTotal = precoEtiqueta * 1.1;
} else {
    console.log('Forma de pagamento inválida!');
}

// Exibe valor final
console.log('Valor do produto: R$ ' + precoEtiqueta.toFixed(2))
console.log('Preço a ser pago: R$ ' + valorTotal.toFixed(2))
