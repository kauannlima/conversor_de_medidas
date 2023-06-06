let comprimento = document.querySelector("#comprimento")
let comprimentoResultado = document.querySelector("#comprimentoResultado");
let selectComprimento1 = document.querySelector("#selectComprimento1");
let selectComprimento2 = document.querySelector("#selectComprimento2");
let valorComprimento;
const limparComprimento = document.querySelector("#comprimentoLimpar");

comprimento.addEventListener("keyup", calculoCompri);
selectComprimento2.addEventListener("change", calculoCompri);
selectComprimento2.addEventListener("change", calculoCompri);
window.addEventListener("load", calculoCompri);

limparComprimento.addEventListener("click", function(){
  clear(comprimento, comprimentoResultado);
} )

function calculoCompri() {
  switch (selectComprimento1.value) {
    case "km":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR QUILOMETRO PARA QUILOMETRO*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "m":/*SE VALOR FOR QUILOMETRO PARA METRO*/
          valorComprimento = comprimento.value * 1000
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR QUILOMETRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 100000
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR QUILOMETRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * (10 ** 6)
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR QUILOMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 1.609344
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR QUILOMETRO PARA JARDAS*/
          valorComprimento = comprimento.value * 1093.61
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR QUILOMETRO PARA PE*/
          valorComprimento = comprimento.value * 3280.84
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR QUILOMETRO PARA POLEGADA*/
          valorComprimento = comprimento.value * 39370.08
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mn":/*SE VALOR FOR QUILOMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.852
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "m":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR METRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1000
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR METRO PARA METRO*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "cm":/*SE VALOR FOR METRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 100
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR METRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1000
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR METRO PARA MILHA*/
          valorComprimento = comprimento.value / 1609
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR METRO PARA JARDAS*/
          valorComprimento = comprimento.value * 1.094
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR METRO PARA PE*/
          valorComprimento = comprimento.value * 3.281
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR METRO PARA POLEGADA*/
          valorComprimento = comprimento.value * 39.37
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mn":/*SE VALOR FOR METRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1852
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "cm":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR CENTIMETRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 100000
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR CENTIMETRO PARA METRO*/
          valorComprimento = comprimento.value / 100
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR CENTIMETRO PARA CENTIMETRO*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "ml":/*SE VALOR FOR CENTIMETRO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 10
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR CENTIMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 160934.4
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR CENTIMETRO PARA JARDAS*/
          valorComprimento = comprimento.value / 91.44
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR CENTIMETRO PARA PE*/
          valorComprimento = comprimento.value / 30.48
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR CENTIMETRO PARA POLEGADA*/
          valorComprimento = comprimento.value / 2.54
          comprimentoResultado.value = valorComprimento.toFixed(6).toString()
          break;
        case "mn":/*SE VALOR FOR CENTIMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 185200
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "ml":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MELIMETRO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1000000
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR MELIMETRO PARA METRO*/
          valorComprimento = comprimento.value / 1000
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR MELIMETRO PARA CENTIMETRO*/
          valorComprimento = comprimento.value / 10
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ml":/*SE VALOR FOR MELIMETRO PARA MELIMETRO*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "mi":/*SE VALOR FOR MELIMETRO PARA MILHA*/
          valorComprimento = comprimento.value / 1.609e+6
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR MELIMETRO PARA JARDAS*/
          valorComprimento = comprimento.value / 914.4
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR MELIMETRO PARA PE*/
          valorComprimento = comprimento.value / 304.8
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR MELIMETRO PARA POLEGADA*/
        valorComprimento = comprimento.value / 25.4
          comprimentoResultado.value = valorComprimento.toFixed(6).toString()
          break;
        case "mn":/*SE VALOR FOR MELIMETRO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.852e+6
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "mi":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MILHA PARA QUILOMETRO*/
          valorComprimento = comprimento.value * 1.609
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "m":/*SE VALOR FOR MILHA PARA METRO*/
          valorComprimento = comprimento.value * 1609
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR MILHA PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 1609
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR MILHA PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1.609e+6
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR MILHA PARA MILHA*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "ja":/*SE VALOR FOR MILHA PARA JARDAS*/
          valorComprimento = comprimento.value * 1760
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "pe":/*SE VALOR FOR MILHA PARA PE*/
          valorComprimento = comprimento.value * 5280
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR MILHA PARA POLEGADA*/
          valorComprimento = comprimento.value * 63360
          comprimentoResultado.value = valor.toString()
          break;
        case "mn":/*SE VALOR FOR MILHA PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 1.151
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "ja":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR JARDAS PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 1094
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR JARDAS PARA METRO*/
          valorComprimento = comprimento.value / 1.094
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR JARDAS PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 91.44
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR JARDAS PARA MELIMETRO*/
          valorComprimento = comprimento.value * 914.4
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR JARDAS PARA MILHA*/
          valorComprimento = comprimento.value / 1760
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR JARDAS PARA JARDAS*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "pe":/*SE VALOR FOR JARDAS PARA PE*/
          valorComprimento = comprimento.value * 3
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR JARDAS PARA POLEGADA*/
          valorComprimento = comprimento.value * 36
          comprimentoResultado.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR JARDAS PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 2025
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "pe":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR PE PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 3281
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR PE PARA METRO*/
          valorComprimento = comprimento.value / 3.281
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR PE PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 30.48
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR PE PARA MELIMETRO*/
          valorComprimento = comprimento.value * 304.8
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR PE PARA MILHA*/
          valorComprimento = comprimento.value / 5280
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR PE PARA JARDAS*/
          valorComprimento = comprimento.value / 3
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR PE PARA PE*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
        case "po":/*SE VALOR FOR PE PARA POLEGADA*/
          valorComprimento = comprimento.value * 12
          comprimentoResultado.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR PE PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 6076
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "po":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR PO PARA QUILOMETRO*/
          valorComprimento = comprimento.value / 39370
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "m":/*SE VALOR FOR PO PARA METRO*/
          valorComprimento = comprimento.value / 39.37
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "cm":/*SE VALOR FOR PO PARA CENTIMETRO*/
          valorComprimento = comprimento.value * 2.54
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ml":/*SE VALOR FOR PO PARA MELIMETRO*/
          valorComprimento = comprimento.value * 25.4
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR PO PARA MILHA*/
          valorComprimento = comprimento.value / 63360
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "ja":/*SE VALOR FOR PO PARA JARDAS*/
          valorComprimento = comprimento.value / 36
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "pe":/*SE VALOR FOR PO PARA PE*/
          valorComprimento = comprimento.value / 12
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
        case "po":/*SE VALOR FOR PO PARA POLEGADA*/
          comprimentoResultado.value = comprimento.value.toString()
          break;
        case "mn":/*SE VALOR FOR PO PARA MILHAS NAUTICAS*/
          valorComprimento = comprimento.value / 72910
          comprimentoResultado.value = valorComprimento.toFixed(6).toString();
          break;
      }
      break;
    case "mn":
      switch (selectComprimento2.value) {
        case "km":/*SE VALOR FOR MILHAS NAUTICAS PARA QUILOMETRO*/
          valorComprimento = comprimento.value * 1.852
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "m":/*SE VALOR FOR MILHAS NAUTICAS PARA METRO*/
          valorComprimento = comprimento.value * 1852
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "cm":/*SE VALOR FOR MILHAS NAUTICAS PARA CENTIMETRO*/
          valor = comprimento.value * 185200
          comprimentoResultado.value = valor.toString();
          break;
        case "ml":/*SE VALOR FOR MILHAS NAUTICAS PARA MELIMETRO*/
          valorComprimento = comprimento.value * 1.852e+6
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "mi":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHA*/
          valorComprimento = comprimento.value * 1.151
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "ja":/*SE VALOR FOR MILHAS NAUTICAS PARA JARDAS*/
          valor = comprimento.value * 2025
          comprimentoResultado.value = valor.toString();
          break;
        case "pe":/*SE VALOR FOR MILHAS NAUTICAS PARA PE*/
          valorComprimento = comprimento.value * 6076
          comprimentoResultado.value = valorComprimento.toString();
          break;
        case "po":/*SE VALOR FOR MILHAS NAUTICAS PARA POLEGADA*/
          valorComprimento = comprimento.value * 72910
          comprimentoResultado.value = valorComprimento.toString()
          break;
        case "mn":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHAS NAUTICAS*/
          comprimentoResultado.value = comprimento.value.toString();
          break;
      }
      break;
  }}

