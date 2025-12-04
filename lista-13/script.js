function func(){
    var numero = parseFloat(document.getElementById("numero").value)

    if(numero % 5 === 0){
        document.getElementById("res").textContent = "O número " + numero + " é múltiplo de 5"
    }else{
        document.getElementById("res").textContent = "O número " + numero + " não é múltiplo de 5"

    }
}