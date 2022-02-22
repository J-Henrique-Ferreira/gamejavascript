var erros = [];
var sorteado = Math.floor(Math.random() * 100);
const chances = 6;

function apostarNumero() {
    var inNumero = document.getElementById("inNumero");
var numero = Number(inNumero.value);

if (isNaN(numero) || numero <= 0 || numero > 100 || numero == "") {
    alert("INSIRA APENAS NÚMEROS VÁLIDOS")
    inNumero.value = "";
    inNumero.focus()
    return;
}

var outErros = document.getElementById("outErros");
var outChances = document.getElementById("outChances");
var outDica = document.getElementById("outDica");

if (numero == sorteado) {
    alert(`Parabêns, você acertou!`);
    btApostar.disabled = true;
    btJogar.className = "exibe";
    outDica.textContent = `Parabêns! Número sorteado: ${sorteado}`;
} else {
    if (erros.indexOf(numero) >= 1) {
        alert(`O número ${numero} já foi apostado`);
        inNumero.value = "";
        inNumero.focus()
    } else {
        erros.push(numero);
        var numErros = erros.length;
        var numChances = chances - numErros;
        outErros.textContent = `${numErros} (${erros.join(", ")})`
        outChances.textContent = numChances;
        inNumero.value = "";
        inNumero.focus()
    }
    if (numChances == 0) {
        alert("Game-Over!");
        btApostar.disabled = true;
        btJogar.className = "exibe";
    } else if (numero > sorteado) {
        outDica.textContent = `Menor que ${numero}`;
    } else {
        outDica.textContent = `Maior que ${numero}`;
    }
}
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
    location.reload();
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);