function func(){
    var idade = parseFloat(document.getElementById("idade").value)
    var idade2 = parseFloat(document.getElementById("idade2").value)

    if(idade > idade2){
document.getElementById("res").textContent = "A primeira pessoa tem " + idade + " e é a mais velha."
    }else if(idade2 > idade){
document.getElementById("res").textContent = "A segunda pessoa tem " + idade2 + " e é a mais velha."
    }else{
document.getElementById("res").textContent = "A duas pessoas tem " + idade2 + " anos."

    }

}