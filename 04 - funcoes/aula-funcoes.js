function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome);
}
escrevaMeuNome('Igor');
escrevaMeuNome('Vitor');

function verificaIdade(idade){
    if (idade >= 18){
        return 'Maior de idade';
    } else return 'Menor de idade';
}

console.log(verificaIdade(35));