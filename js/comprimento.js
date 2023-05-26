let comprimento = document.querySelector("#comprimento");
let comprimentoValor = document.querySelector("#comprimentoValor");
let selectComprimento1 = document.querySelector("#selectComprimento1");
let selectComprimento2 = document.querySelector("#selectComprimento2");
let valorComprimento;
const calcularComprimento = document.querySelector("#comprimentoCalcular");
const limparComprimento = document.querySelector("#comprimentoLimpar");

calcularComprimento.addEventListener("click", calculoCompri);
limparComprimento.addEventListener("click", function () {
  comprimento.value = ""
  comprimentoValor.value = ""
});

function calculoCompri() {
  switch (selectComprimento1.value) {
    case "km":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR QUILOMETRO PARA QUILOMETRO*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "m":/*SE VALOR FOR QUILOMETRO PARA METRO*/
          valorComprimento = comprimento.value * 1000
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR QUILOMETRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 100000
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR QUILOMETRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * (10 ** 6)
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR QUILOMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 1.609344
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR QUILOMETRO PARA JARDAS*/
          valorComprimento = comprimento.value * 1093.61
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR QUILOMETRO PARA PE*/
          valorComprimento = comprimento.value * 3280.84
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR QUILOMETRO PARA POLEGADA*/
          valorComprimento = comprimento.value * 39370.08
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mn":/*SE VALOR FOR QUILOMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.852
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "m":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR METRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1000
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR METRO PARA METRO*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "cm":/*SE VALOR FOR METRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 100
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR METRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1000
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR METRO PARA MILHA*/
          valorComprimento = comprimento.value / 1609
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR METRO PARA JARDAS*/
          valorComprimento = comprimento.value * 1.094
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR METRO PARA PE*/
          valorComprimento = comprimento.value * 3.281
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR METRO PARA POLEGADA*/
          valorComprimento = comprimento.value * 39.37
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mn":/*SE VALOR FOR METRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1852
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "cm":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR CENTIMETRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 100000
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR CENTIMETRO PARA METRO*/
          valorComprimento = comprimento.value / 100
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR CENTIMETRO PARA CENTIMETRO*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "ml":/*SE VALOR FOR CENTIMETRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 10
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR CENTIMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 160934.4
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR CENTIMETRO PARA JARDAS*/
          valorComprimento = comprimento.value / 91.44
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR CENTIMETRO PARA PE*/
          valorComprimento = comprimento.value / 30.48
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR CENTIMETRO PARA POLEGADA*/
          valorComprimento = comprimento.value / 2.54
          comprimentoValor.value = valorComprimento.toFixed(6).toString()
          break;
        case "mn":/*SE VALOR FOR CENTIMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 185200
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "ml":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MELIMETRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1000000
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR MELIMETRO PARA METRO*/
          valorComprimento = comprimento.value / 1000
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR MELIMETRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value / 10
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ml":/*SE VALOR FOR MELIMETRO PARA MELIMETRO*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "mi":/*SE VALOR FOR MELIMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 1.609e+6
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR MELIMETRO PARA JARDAS*/
          valorComprimento = comprimento.value / 914.4
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR MELIMETRO PARA PE*/
          valorComprimento = comprimento.value / 304.8
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR MELIMETRO PARA POLEGADA*/
          valor = comprimento.value / 25.4
          comprimentoValor.value = valorComprimento.toFixed(6).toString()
          break;
        case "mn":/*SE VALOR FOR MELIMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.852e+6
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "mi":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MILHA PARA QUILOMETRO*/
          valorComprimento = comprimento.value * 1.609
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "m":/*SE VALOR FOR MILHA PARA METRO*/
          valorComprimento = comprimento.value * 1609
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR MILHA PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 1609
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR MILHA PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1.609e+6
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR MILHA PARA MILHA*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "ja":/*SE VALOR FOR MILHA PARA JARDAS*/
          valorComprimento = comprimento.value * 1760
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR MILHA PARA PE*/
          valorComprimento = comprimento.value * 5280
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR MILHA PARA POLEGADA*/
          valorComprimento = comprimento.value * 63360
          comprimentoValor.value = valor.toString()
          break;
        case "mn":/*SE VALOR FOR MILHA PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.151
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "ja":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR JARDAS PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1094
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR JARDAS PARA METRO*/
          valorComprimento = comprimento.value / 1.094
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR JARDAS PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 91.44
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR JARDAS PARA MELIMETRO*/
          valorComprimento = comprimento.value * 914.4
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR JARDAS PARA MILHA*/
          valorComprimento = comprimento.value / 1760
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR JARDAS PARA JARDAS*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "pe":/*SE VALOR FOR JARDAS PARA PE*/
          valorComprimento = comprimento.value * 3
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR JARDAS PARA POLEGADA*/
          valorComprimento = comprimento.value * 36
          comprimentoValor.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR JARDAS PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 2025
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "pe":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR PE PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 3281
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR PE PARA METRO*/
          valorComprimento = comprimento.value / 3.281
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR PE PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 30.48
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR PE PARA MELIMETRO*/
          valorComprimento = comprimento.value * 304.8
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR PE PARA MILHA*/
          valorComprimento = comprimento.value / 5280
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR PE PARA JARDAS*/
          valorComprimento = comprimento.value / 3
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR PE PARA PE*/
          comprimentoValor.value = comprimento.value.toString();
          break;
        case "po":/*SE VALOR FOR PE PARA POLEGADA*/
          valorComprimento = comprimento.value * 12
          comprimentoValor.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR PE PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 6076
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "po":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR PO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 39370
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR PO PARA METRO*/
          valorComprimento = comprimento.value / 39.37
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR PO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 2.54
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR PO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 25.4
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR PO PARA MILHA*/
          valorComprimento = comprimento.value / 63360
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR PO PARA JARDAS*/
          valorComprimento = comprimento.value / 36
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR PO PARA PE*/
          valorComprimento = comprimento.value / 12
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR PO PARA POLEGADA*/
          comprimentoValor.value = comprimento.value.toString()
          break;
        case "mn":/*SE VALOR FOR PO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 72910
          comprimentoValor.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "mn":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MILHAS NAUTICAS PARA QUILOMETRO*/
          valorComprimento = comprimento.value * 1.852
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "m":/*SE VALOR FOR MILHAS NAUTICAS PARA METRO*/
          valorComprimento = comprimento.value * 1852
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR MILHAS NAUTICAS PARA CENTIMETRO*/
          valor = comprimento.value * 185200
          comprimentoValor.value = valor.toString();
          break;
        case "ml":/*SE VALOR FOR MILHAS NAUTICAS PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1.852e+6
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHA*/
          valorComprimento = comprimento.value * 1.151
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "ja":/*SE VALOR FOR MILHAS NAUTICAS PARA JARDAS*/
          valor = comprimento.value * 2025
          comprimentoValor.value = valor.toString();
          break;
        case "pe":/*SE VALOR FOR MILHAS NAUTICAS PARA PE*/
          valorComprimento = comprimento.value * 6076
          comprimentoValor.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR MILHAS NAUTICAS PARA POLEGADA*/
          valorComprimento = comprimento.value * 72910
          comprimentoValor.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHAS NAUTICAS*/
          comprimentoValor.value = comprimento.value.toString();
          break;
      }
      break;
  }
}

