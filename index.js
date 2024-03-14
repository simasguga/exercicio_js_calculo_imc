function calculoImc(peso, altura) {
    const calculo = peso / (altura * altura);
    return calculo;
}

function respostaImc(imc) {
    let condicao = "Indefinido";
    if(imc < 18.5) {
        condicao = "de abaixo do peso!";
    } else if (imc <= 25) {
        condicao = "de peso normal!";
    } else if (imc <= 30) {
        condicao = "acima do peso!";
    } else if (imc <= 40) {
        condicao = "de obeso!";
    } else {
        condicao = "de obesidade grave!";
    }
    return condicao;
}

const pessoa = {
    nome : 'Jaime',
    peso : 85,
    altura : 1.72
}

const calculoImcPessoa = calculoImc(pessoa.peso, pessoa.altura);

const respostaCondicaoPessoa = respostaImc(calculoImcPessoa);

console.log(`${pessoa.nome} com ${pessoa.peso}kg e ${pessoa.altura} de altura está em uma condição ${respostaCondicaoPessoa}`);
