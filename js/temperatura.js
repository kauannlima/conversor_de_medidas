let temperatura = document.querySelector("#temperatura");
let tempraturaResultado = document.querySelector("#tempraturaResultado")
let selecttemperatura1 = document.querySelector("#selecttemperatura1");
let selecttemperatura2 = document.querySelector("#selecttemperatura2");
let valortemperatura;

const limparTemperatura = document.querySelector("#temperaturaLimpar");

selecttemperatura1.addEventListener("change", calculoTemp);
selecttemperatura2.addEventListener("change", calculoTemp);
temperatura.addEventListener("keyup", calculoTemp);
window.addEventListener("load", calculoTemp);

limparTemperatura.addEventListener("click", function () {
    temperatura.value = ""
    tempraturaResultado.value = ""
});

function calculoTemp() {
  switch (selecttemperatura1.value) {
    case "grac":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR GRAUSCELSIUS PARA GRAUSCELSIUS*/
        tempraturaResultado.value = temperatura.value.toString();
          break;
        case "graf":/*SE VALOR FOR GRAUSCELSIUS PARA GRAUSFAHRENHEIT*/
        valortemperatura = (temperatura.value*9/5)+32
          tempraturaResultado.value = valortemperatura.toString();
          break;
        case "kel":/*SE VALOR FOR GRAUSCELSIUS PARA KELVIN*/
        valortemperatura = (temperatura.value*1)+273.15
          tempraturaResultado.value = valortemperatura.toString();
          break;
      }
      break;
    case "graf":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR GRAUSFAHRENHEIT PARA GRAUS CELSIUS*/
        valortemperatura = ((temperatura.value*1)-32)*5/9
          tempraturaResultado.value = valortemperatura.toFixed(6).toString();
          break;
        case "graf":/*SE VALOR FOR GRAUS FAHRENHEIT PARA GRAUS FAHRENHEIT*/
        tempraturaResultado.value = temperatura.value.toString();
          break;
        case "kel":/*SE VALOR FOR GRAUSFAHRENHEIT PARA KELVIN*/
        valortemperatura = (((temperatura.value*1)-32)*5/9)+273.15
        tempraturaResultado.value = valortemperatura.toFixed(6).toString();
          break;
      }
      break;
    case "kel":
      switch (selecttemperatura2.value) {
        case "grac":/*SE VALOR FOR KELVIN PARA GRAUS CELSIUS*/
        valortemperatura = temperatura.value-273.15
          tempraturaResultado.value = valortemperatura.toString();
          break;
        case "graf":/*SE VALOR FOR KELVIN PARA GRAUS FAHRENHEIT*/
        valortemperatura = (temperatura.value-273.15)*9/5 + 32
          tempraturaResultado.value = valortemperatura.toString();
          break;
        case "kel":/*SE VALOR FOR KELVIN PARA KELVIN*/
        tempraturaResultado.value = temperatura.value.toString();
          break;
      }
      break;
  }
}