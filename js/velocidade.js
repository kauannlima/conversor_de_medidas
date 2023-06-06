let velocidade = document.querySelector("#velocidade");
let velocidadeResultado = document.querySelector("#velocidadeResultado")
let selectvelocidade1 = document.querySelector("#selectvelocidade1");
let selectvelocidade2 = document.querySelector("#selectvelocidade2");
let valorvelocidade;
const limparVelocidade = document.querySelector("#velocidadeLimpar");

selectvelocidade1.addEventListener("change", calculoMass);
selectvelocidade2.addEventListener("change", calculoMass);
velocidade.addEventListener("keyup", calculoMass);
window.addEventListener("load", calculoMass);

limparVelocidade.addEventListener("click", function () {
    clear(velocidade, velocidadeResultado);
})

function calculoMass() {

    switch (selectvelocidade1.value) {
        case "mlh":
            switch (selectvelocidade2.value) {
                case "mlh":/*SE VALOR FOR MILHA POR HORA PARA MILHA POR HORA*/
                    velocidadeResultado.value = velocidade.value.toString();
                    break;
                case "ms":/*SE VALOR FOR MILHA POR HORA PARA METRO POR SEGUNDO*/
                    valorvelocidade = velocidade.value / 2.237
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
                case "qh":/*SE VALOR FOR MILHA POR HORA PARA QUILOMETRO POR HORA*/
                    valorvelocidade = velocidade.value * 1.609
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
                case "no":/*SE VALOR FOR MILHA POR HORA PARA NO*/
                    valorvelocidade = velocidade.value / 1.151
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
            }
            break;
        case "ms":
            switch (selectvelocidade2.value) {
                case "mlh":/*SE VALOR FOR METRO POR SEGUNDO PARA MILHA POR HORA*/
                    valorvelocidade = velocidade.value * 2.237
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
                case "ms":/*SE VALOR FOR METRO POR SEGUNDO PARA METRO POR SEGUNDO*/
                    velocidadeResultado.value = velocidade.value.toString();
                    break;
                case "qh":/*SE VALOR FOR METRO POR SEGUNDO PARA QUILOMETRO POR HORA*/
                    valorvelocidade = velocidade.value * 3.6
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
                case "no":/*SE VALOR FOR METRO POR SEGUNDO PARA NO*/
                    valorvelocidade = velocidade.value * 1.944
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
            }
            break;
        case "qh":
            switch (selectvelocidade2.value) {
                case "mlh":/*SE VALOR FOR QUILOMETRO POR HORA PARA MILHA POR HORA*/
                    valorvelocidade = velocidade.value / 1.609
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
                case "ms":/*SE VALOR FOR QUILOMETRO POR HORA PARA METRO POR SEGUNDO*/
                    valorvelocidade = velocidade.value / 3.6
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
                case "qh":/*SE VALOR FOR QUILOMETRO POR HORA PARA QUILOMETRO POR HORA*/
                    velocidadeResultado.value = velocidade.value.toString();
                    break;
                case "no":/*SE VALOR FOR QUILOMETRO POR HORA PARA NO*/
                    valorvelocidade = velocidade.value / 1.852
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
            }
            break;
        case "no":
            switch (selectvelocidade2.value) {
                case "mlh":/*SE VALOR FOR NO PARA MILHA POR HORA*/
                    valorvelocidade = velocidade.value * 1.151
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
                case "ms":/*SE VALOR FOR NO PARA METRO POR SEGUNDO*/
                    valorvelocidade = velocidade.value / 1.944
                    velocidadeResultado.value = valorvelocidade.toFixed(6).toString();
                    break;
                case "qh":/*SE VALOR FOR NO PARA QUILOMETRO POR HORA*/
                    valorvelocidade = velocidade.value * 1.852
                    velocidadeResultado.value = valorvelocidade.toString();
                    break;
                case "no":/*SE VALOR FOR NO PARA NO*/
                    velocidadeResultado.value = velocidade.value.toString();
                    break;
            }
            break;
    }
}
