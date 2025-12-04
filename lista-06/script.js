function format(){
    var nome = document.getElementById("nome").value
    var idade = parseFloat(document.getElementById("idade").value)

    var resposta = document.getElementById("res")
    resposta.textContent = "Seu nome é " + nome + ", e a sua idade é " + idade
}