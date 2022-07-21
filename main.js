const button = document.querySelector("div.container button")
var tabuada = document.querySelector("div.container div.tabuada")
var valor = document.querySelector("div.container input")

button.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 12){        

        tabuada.innerHTML = "INSIRA UM VALOR ENTRE 1 E 12"

    }else{

        for(i = 1; i <= 12; i++){

            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);

            var resultado = document.createElement("p")

            resultado.innerText = calc

            tabuada.appendChild(resultado)

        }

    }

})
















/* var m = 6;
var tamanho = 10;
console.log(`TABUADA DO ${m}`)
for(var i = 1; i < (tamanho + 1); i++) {
    console.log (`${m} X ${i} = ` + m*i);
} */