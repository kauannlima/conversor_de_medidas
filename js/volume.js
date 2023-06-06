let volume = document.querySelector("#volume")
let volumeResultado = document.querySelector("#volumeResultado")
let selectvolume1 = document.querySelector("#selectvolume1");
let selectvolume2 = document.querySelector("#selectvolume2");
let valorVolume;

const limparVolume = document.querySelector("#volumeLimpar");

selectvolume1.addEventListener("change", calculoVolume);
selectvolume2.addEventListener("change", calculoVolume);
volume.addEventListener("keyup", calculoVolume);
window.addEventListener("load", calculoVolume);

limparVolume.addEventListener("click", function () {
    clear(volume, volumeResultado);
})
function calculoVolume() {
    switch (selectvolume1.value) {
        case "li":
            switch (selectvolume2.value) {
                case "li":/*SE VALOR FOR LITRO PARA LITRO*/
                    volumeResultado.value = volume.value.toString();
                    break;
                case "milili":/*SE VALOR FOR LITRO PARA MILILITRO*/
                    valorVolume = volume.value * 1000
                    volumeResultado.value = valorVolume.toString();
                    break;
                case "mcubic":/*SE VALOR FOR LITRO PARA METROS CUBICO*/
                    valorVolume = volume.value / 1000
                    volumeResultado.value = valorVolume.toString();
                    break;
            }
            break;
        case "milili":
            switch (selectvolume2.value) {
                case "li":/*SE VALOR FOR MILILITRO PARA LITRO*/
                    valorVolume = volume.value / 1000
                    volumeResultado.value = valorVolume.toString();
                    break;
                case "milili":/*SE VALOR FOR  MILILITRO PARA MILILITRO*/
                    volumeResultado.value = volume.value.toString();
                    break;
                case "mcubic":/*SE VALOR FOR MILILITRO PARA METROS CUBICO*/
                    valorVolume = volume.value / 1e+6
                    volumeResultado.value = valorVolume.toExponential(0);
                    break;
            }
            break;
        case "mcubic":
            switch (selectvolume2.value) {
                case "li":/*SE VALOR FOR METROS CUBICO PARA  LITRO*/
                    valorVolume = volume.value * 1000
                    volumeResultado.value = valorVolume.toString();
                    break;
                case "milili":/*SE VALOR FOR METROS CUBICO PARA  MILILITRO*/
                    valorVolume = volume.value * 1e+6
                    volumeResultado.value = valorVolume.toExponential(0);
                    break;
                case "mcubic":/*SE VALOR FOR METROS CUBICO PARA METROS CUBICO*/
                    volumeResultado.value = volume.value.toString();
                    break;
            }
            break;
    }
}
