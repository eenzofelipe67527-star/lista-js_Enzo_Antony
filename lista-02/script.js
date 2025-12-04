function area(){
    var base = parseFloat(document.getElementById("b1").value)
    var altura = parseFloat(document.getElementById("a1").value)

    var resposta = document.getElementById("res")
    var conta = base * altura

    resposta.textContent = "A Área do retângulo é " + conta
}