let massa = document.querySelector("#massa");
let massaResultado = document.querySelector("#massaResultado");
let selectmassa1 = document.querySelector("#selectmassa1");
let selectmassa2 = document.querySelector("#selectmassa2");
let valorMassa;
const limparMassa = document.querySelector("#massaLimpar");

selectmassa1.addEventListener("change", calculoMass);
selectmassa2.addEventListener("change", calculoMass);
massa.addEventListener("keyup", calculoMass);
window.addEventListener("load", calculoMass);

limparMassa.addEventListener("click", function(){
  clear(massa, massaResultado);
} )


function calculoMass() {
  let inputMassa = massa.value;
  let parsedMassa = parseFloat(inputMassa);
  if (isNaN(parsedMassa)) {
      alerta(massa)
      clear(massa, massaResultado);}
else {
  switch (selectmassa1.value) {
    case "tm":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR TONELADASMETRICAS PARA TONELADASMETRICAS*/
          massaResultado.value = massa.value.toString();
          break;
        case "q":/*SE VALOR FOR TONELADASMETRICAS PARA QUILOGRAMA*/
          valorMassa = massa.value*1000
          massaResultado.value = valorMassa.toString();
          break;
        case "gr":/*SE VALOR FOR TONELADASMETRICAS PARA GRAMA*/
          valorMassa = massa.value*1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "mlgr":/*SE VALOR FOR TONELADASMETRICAS PARA MILIGRAMA*/
          valorMassa = massa.value*1e+9
          massaResultado.value = valorMassa.toString();
          break;
        case "micro":/*SE VALOR FOR TONELADASMETRICAS PARA MICROGRAMA*/
          valorMassa = massa.value*1e+12
          massaResultado.value = valorMassa.toString();
          break;
        case "lr":/*SE VALOR FOR TONELADASMETRICAS PARA LIBRA*/
          valorMassa = massa.value*2205
          massaResultado.value = valorMassa.toString();
          break;
      }
      break;
    case "q":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR QUILOGRAMA PARA TONELADASMETRICAS*/
          valorMassa = massa.value/1000
          massaResultado.value = valorMassa.toString();
          break;
        case "q":/*SE VALOR FOR QUILOGRAMA PARA QUILOGRAMA*/
          massaResultado.value = massa.value.toString();
          break;
        case "gr":/*SE VALOR FOR QUILOGRAMA PARA GRAMA*/
          valorMassa = massa.value*1000
          massaResultado.value = valorMassa.toString();
          break;
        case "mlgr":/*SE VALOR FOR QUILOGRAMA PARA MILIGRAMA*/
          valorMassa = massa.value*1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "micro":/*SE VALOR FOR QUILOGRAMA PARA MICROGRAMA*/
          valorMassa = massa.value*1e+9
          massaResultado.value = valorMassa.toString();
          break;
        case "lr":/*SE VALOR FOR QUILOGRAMA PARA LIBRA*/
          valorMassa = massa.value*2.205
          massaResultado.value = valorMassa.toString();
          break;
      }
      break;
    case "gr":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR GRAMA PARA TONELADASMETRICAS*/
          valorMassa = massa.value/1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "q":/*SE VALOR FOR GRAMA PARA QUILOGRAMA*/
          valorMassa = massa.value/1000
          massaResultado.value = valorMassa.toString();
          break;
        case "gr":/*SE VALOR FOR GRAMA PARA GRAMA*/
          massaResultado.value = massa.value.toString();
          break;
        case "mlgr":/*SE VALOR FOR GRAMA PARA MILIGRAMA*/
          valorMassa = massa.value*1000
          massaResultado.value = valorMassa.toString();
          break;
        case "micro":/*SE VALOR FOR GRAMA PARA MICROGRAMA*/
          valorMassa = massa.value*1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "lr":/*SE VALOR FOR GRAMA PARA LIBRA*/
          valorMassa = massa.value/453.6
          massaResultado.value = valorMassa.toFixed(6).toString();
          break;
      }
      break;
    case "mlgr":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR MILIGRAMA PARA TONELADASMETRICAS*/
          valorMassa = massa.value/1e+9
          massaResultado.value = valorMassa.toString();
          break;
        case "q":/*SE VALOR FOR MILIGRAMA PARA QUILOGRAMA*/
          valorMassa = massa.value/1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "gr":/*SE VALOR FOR MILIGRAMA PARA GRAMA*/
          valorMassa = massa.value/1000
          massaResultado.value = valorMassa.toString();
          break;
        case "mlgr":/*SE VALOR FOR MILIGRAMA PARA MILIGRAMA*/
          massaResultado.value = massa.value.toString();
          break;
        case "micro":/*SE VALOR FOR MILIGRAMA PARA MICROGRAMA*/
          valorMassa = massa.value*1000
          massaResultado.value = valorMassa.toString();
          break;
        case "lr":/*SE VALOR FOR MILIGRAMA PARA LIBRA*/
          valorMassa = massa.value/453600
          massaResultado.value = valorMassa.toFixed(6).toString();
          break;
      }
      break;
    case "micro":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR MICROGRAMA PARA TONELADASMETRICAS*/
          valorMassa = massa.value/ 1e+12
          massaResultado.value = valorMassa.toString();
          break;
        case "q":/*SE VALOR FOR MICROGRAMA PARA QUILOGRAMA*/
          valorMassa = massa.value/1e+9
          massaResultado.value = valorMassa.toString();
          break;
        case "gr":/*SE VALOR FOR MICROGRAMA PARA GRAMA*/
          valorMassa = massa.value/1e+6
          massaResultado.value = valorMassa.toString();
          break;
        case "mlgr":/*SE VALOR FOR MICROGRAMA PARA MILIGRAMA*/
          valorMassa = massa.value/1000
          massaResultado.value = valorMassa.toString();
          break;
        case "micro":/*SE VALOR FOR MICROGRAMA PARA MICROGRAMA*/
          massaResultado.value = massa.value.toString();
          break;
        case "lr":/*SE VALOR FOR MICROGRAMA PARA LIBRA*/
          valorMassa = massa.value/4.536e+8
          massaResultado.value = valorMassa.toString();
          break;
      }
      break;
    case "lr":
      switch (selectmassa2.value) {
        case "tm":/*SE VALOR FOR LIBRA PARA TONELADASMETRICAS*/
          valorMassa = massa.value/ 2205
          massaResultado.value = valorMassa.toFixed(6).toString();
          break;
        case "q":/*SE VALOR FOR LIBRA PARA QUILOGRAMA*/
          valorMassa = massa.value/2.205
          massaResultado.value = valorMassa.toFixed(6).toString();
          break;
        case "gr":/*SE VALOR FOR LIBRA PARA GRAMA*/
          valorMassa = massa.value*453.6
          massaResultado.value = valorMassa.toString();
          break;
        case "mlgr":/*SE VALOR FOR LIBRA PARA MILIGRAMA*/
          valorMassa = massa.value*453600
          massaResultado.value = valorMassa.toString();
          break;
        case "micro":/*SE VALOR FOR LIBRA PARA MICROGRAMA*/
          valorMassa = massa.value*4.536e+8
          massaResultado.value = valorMassa.toString();
          break;
        case "lr":/*SE VALOR FOR LIBRA PARA LIBRA*/
          massaResultado.value = massa.value.toString();
          break;
      }
      break;
  }}
}