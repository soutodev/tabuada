const button = document.querySelector("div.container button")
var tabuada = document.querySelector("div.container div.tabuada")
var multiply = document.getElementById("multiply")
var tabLength = document.getElementById("tabLength")

button.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(multiply.value) < 1 ){        

        tabuada.innerHTML = "INSIRA UM VALOR A PARTIR DE 1"

    }else{

        for(i = 1; i <= Number(tabLength.value); i++){

            var calc = String(i) + " x " + multiply.value + " = " + i * Number(multiply.value);

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