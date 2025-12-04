function peso(){
    var peso = parseFloat(document.getElementById("peso").value)
    var pesop = parseFloat(document.getElementById("peso2").value)

    var resposta = document.getElementById("res")
    var media = (peso + pesop) / 2

    resposta.textContent = "A média dos pesos é: " + media
}