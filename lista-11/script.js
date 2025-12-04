function func() {
    var genero = (document.getElementById("genero").value)
    var idade = parseFloat(document.getElementById("idade").value)

    if (genero == "F" && idade >= 40) {
        document.getElementById("res").textContent = "Você tem direito de desconto"
    } else if (genero == "M" && idade >= 50){
        document.getElementById("res").textContent = "Você tem direito a desconto";
    } else {
        document.getElementById("res").textContent = "Você não tem direito a desconto";

    }
}