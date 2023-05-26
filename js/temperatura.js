let temperatura = document.querySelector("#temperatura");
let temperaturaValor = document.querySelector("#temperaturaValor")
let selecttemperatura1 = document.querySelector("#selecttemperatura1");
let selecttemperatura2 = document.querySelector("#selecttemperatura2");
let valortemperatura;
const calcularTemperatura = document.querySelector("#temperaturaCalcular");
const limparTemperatura = document.querySelector("#temperaturaLimpar");

calcularTemperatura.addEventListener("click", calculoMass);
limparTemperatura.addEventListener("click", function () {
    temperatura.value = ""
    temperaturaValor.value = ""
});

function calculoMass() {
  switch (selecttemperatura1.value) {
    case "grac":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR GRAUSCELSIUS PARA GRAUSCELSIUS*/
        temperaturaValor.value = temperatura.value.toString();
          break;
        case "graf":/*SE VALOR FOR GRAUSCELSIUS PARA GRAUSFAHRENHEIT*/
        valortemperatura = (temperatura.value*9/5)+32
          temperaturaValor.value = valortemperatura.toString();
          break;
        case "kel":/*SE VALOR FOR GRAUSCELSIUS PARA KELVIN*/
        valortemperatura = (temperatura.value*1)+273.15
          temperaturaValor.value = valortemperatura.toString();
          break;
      }
      break;
    case "graf":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR GRAUSFAHRENHEIT PARA GRAUS CELSIUS*/
        valortemperatura = ((temperatura.value*1)-32)*5/9
          temperaturaValor.value = valortemperatura.toFixed(6).toString();
          break;
        case "graf":/*SE VALOR FOR GRAUS FAHRENHEIT PARA GRAUS FAHRENHEIT*/
        temperaturaValor.value = temperatura.value.toString();
          break;
        case "kel":/*SE VALOR FOR GRAUSFAHRENHEIT PARA KELVIN*/
        valortemperatura = (((temperatura.value*1)-32)*5/9)+273.15
        temperaturaValor.value = valortemperatura.toFixed(6).toString();
          break;
      }
      break;
    case "kel":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR KELVIN PARA GRAUS CELSIUS*/
        valortemperatura = temperatura.value-273.15
          temperaturaValor.value = valortemperatura.toString();
          break;
        case "graf":/*SE VALOR FOR KELVIN PARA GRAUS FAHRENHEIT*/
        valortemperatura = (temperatura.value-273.15)*9/5 + 32
          temperaturaValor.value = valortemperatura.toString();
          break;
        case "kel":/*SE VALOR FOR KELVIN PARA KELVIN*/
        temperaturaValor.value = temperatura.value.toString();
          break;
      }
      break;
  }
}