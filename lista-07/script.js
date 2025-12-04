function tabuada(){
    const num = Number(document.getElementById('numero').value)
    const resultado = document.getElementById('resultado')

   resultado.innerHTML = ""
for (let i = 0; i <= 10; i++) {
    resultado.innerHTML = resultado.innerHTML + `${num} + ${i} = ${num + i}<br>`
}
}