let valorAtual = "";
let operador = "";
let resultado = 0;

function adicionarNumero(numero) {
    valorAtual += numero;
    atualizarDisplay();
}

function operacao(op) {
    operador = op;
    resultado = parseFloat(valorAtual);
    valorAtual = "" + operador;
    atualizarDisplay();
}

function calcular() {
    if (operador === '+') {
        resultado += parseFloat(valorAtual);
    } else if (operador === '-') {
        resultado -= parseFloat(valorAtual);
    } else if (operador === '*') {
        resultado *= parseFloat(valorAtual);
    } else if (operador === '/') {
        resultado /= parseFloat(valorAtual);
    }
    valorAtual = resultado.toString();
    operador = "";
    atualizarDisplay();
}

function limpar() {
    valorAtual = "";
    operador = "";
    resultado = 0;
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').value = valorAtual;
}
