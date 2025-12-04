function nota(){
    var nota = parseFloat(document.getElementById("nota").value)
    if(nota >= 6){
    res.textContent = "Aprovado"
    }else{
        res.textContent = "Reprovado"
    }
}