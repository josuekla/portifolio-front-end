function soma(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a / b;
}

const OPSOMA = 1;
const OPSUBTRA = 2;
const OPMULTI = 3;
const OPDIVISAO = 4;

function calcular(calcular){
    let valorOp1 = Number(document.querySelector("#Area1").value)
    let valorOp2 = Number(document.querySelector("#Area2").value)
    let resultadoOp = document.querySelector("#Resultado")


    switch (calcular){
        case OPSOMA:
            resultadoOp.innerHTML = soma(valorOp1, valorOp2)
        break;
        case (OPSUBTRA):
        resultadoOp.innerHTML = subtracao(valorOp1, valorOp2)
        break;
        case (OPMULTI):
            resultadoOp.innerHTML = multiplicacao(valorOp1, valorOp2)
            break;
        case (OPDIVISAO):
            resultadoOp.innerHTML = divisao(valorOp1, valorOp2)
        break;

        default:
            resultadoOp.innerHTML = "Valor inválido."
            break;
    }
}