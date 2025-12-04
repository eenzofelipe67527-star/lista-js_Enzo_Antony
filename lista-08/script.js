function mostrarTriplo() {
    let n = Number(document.getElementById("numero").value)
    let triplo = n * 3

    document.getElementById("res").innerText = "O triplo é " + triplo
}