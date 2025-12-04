function botaoMETROS(){
     var metros = parseFloat(document.getElementById("metros").value)

     var resultado = document.getElementById("res")
     var conta = metros * 100

     resultado.textContent = conta + " centímetros"

}