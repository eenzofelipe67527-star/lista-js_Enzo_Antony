function celsius() {
    var celsius = parseFloat(document.getElementById("c1").value)
    var resposta = document.getElementById("res")

    var conta = (celsius * 9 / 5) + 32
    resposta.textContent = conta + " - Temperatura em Fahrenheit"

}