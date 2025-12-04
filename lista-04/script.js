function desconto(){
    var produto = parseFloat(document.getElementById("valor").value)
    var resposta = document.getElementById("res")

    var conta = produto - (produto / 10)
    resposta.textContent = conta
}