let tempo = document.querySelector("#tempo");
let tempoResultado = document.querySelector("#tempoResultado")
let selecttempo1 = document.querySelector("#selecttempo1");
let selecttempo2 = document.querySelector("#selecttempo2");
let valortempo;
const limparTempo = document.querySelector("#tempoLimpar");

selecttempo1.addEventListener("change", calculoTempo);
selecttempo2.addEventListener("change", calculoTempo);
tempo.addEventListener("keyup", calculoTempo);
window.addEventListener("load", calculoTempo);


limparTempo.addEventListener("click", function () {
    clear(tempo, tempoResultado);
})
function calculoTempo() {
    switch (selecttempo1.value) {
        case "miliseg":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MILISEGUNDO PARA MILISEGUNDO*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "seg":/*SE VALOR FOR MILISEGUNDO PARA SEGUNDO*/
                    valortempo = tempo.value / 1000
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR MILISEGUNDO PARA MINUTO*/
                    valortempo = tempo.value / 60000
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "hr":/*SE VALOR FOR MILISEGUNDO PARA HORA*/
                    valortempo = tempo.value / 3.6e+6
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "day":/*SE VALOR FOR MILISEGUNDO PARA DIA*/
                    valortempo = tempo.value / 8.64e+7
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "mes":/*SE VALOR FOR MILISEGUNDO PARA MES*/
                    valortempo = tempo.value / 2.628e+9
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR MILISEGUNDO PARA ANO*/
                    valortempo = tempo.value / 3.154e+10
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "dec":/*SE VALOR FOR MILISEGUNDO PARA POLEGADA*/
                    valortempo = tempo.value / 3.154e+11
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "sec":/*SE VALOR FOR MILISEGUNDO PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 3.154e+12
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
            }
            break;
        case "seg":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR SEGUNDO PARA MILISEGUNDO*/
                    valortempo = tempo.value * 1000
                    tempoResultado.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR SEGUNDO PARA SEGUNDO*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "min":/*SE VALOR FOR SEGUNDO PARA MINUTO*/
                    valortempo = tempo.value / 60
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "hr":/*SE VALOR FOR SEGUNDO PARA HORA*/
                    valortempo = tempo.value / 360
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "day":/*SE VALOR FOR SEGUNDO PARA DIA*/
                    valortempo = tempo.value / 86400
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "mes":/*SE VALOR FOR SEGUNDO PARA MES*/
                    valortempo = tempo.value / 604800
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR SEGUNDO PARA ANO*/
                    valortempo = tempo.value / 3.154e+7
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "dec":/*SE VALOR FOR SEGUNDO PARA POLEGADA*/
                    valortempo = tempo.value / 3.154e+8
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "sec":/*SE VALOR FOR SEGUNDO PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 3.154e+9
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
            }
            break;
        case "min":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MINUTO PARA MILISEGUNDO*/
                    valortempo = tempo.value * 60000
                    tempoResultado.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR MINUTO PARA SEGUNDO*/
                    valortempo = tempo.value * 60
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR MINUTO PARA MINUTO*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "hr":/*SE VALOR FOR MINUTO PARA HORA*/
                    valortempo = tempo.value / 60
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "day":/*SE VALOR FOR MINUTO PARA DIA*/
                    valortempo = tempo.value / 1440
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR MINUTO PARA MES*/
                    valortempo = tempo.value / 43800
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR MINUTO PARA ANO*/
                    valortempo = tempo.value / 525600
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "dec":/*SE VALOR FOR MINUTO PARA POLEGADA*/
                    valortempo = tempo.value / 5.256e+6
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "sec":/*SE VALOR FOR MINUTO PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 5.256e+7
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
            }
            break;
        case "hr":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR HORA PARA MILISEGUNDO*/
                    valortempo = tempo.value * 3.6e+6
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR HORA PARA SEGUNDO*/
                    valortempo = tempo.value * 3600
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR HORA PARA MINUTO*/
                    valortempo = tempo.value * 60
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR HORA PARA HORA*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "day":/*SE VALOR FOR HORA PARA DIA*/
                    valortempo = tempo.value / 24
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR HORA PARA MES*/
                    valortempo = tempo.value / 730
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR HORA PARA ANO*/
                    valortempo = tempo.value / 8760
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR HORA PARA POLEGADA*/
                    valortempo = tempo.value / 87600
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "sec":/*SE VALOR FOR HORA PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 876000
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
            }
            break;
        case "day":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR DIA PARA MILISEGUNDO*/
                    valortempo = tempo.value * 8.64e7
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR DIA PARA SEGUNDO*/
                    valortempo = tempo.value * 86400
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR DIA PARA MINUTO*/
                    valortempo = tempo.value * 1440
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR DIA PARA HORA*/
                    valortempo = tempo.value * 24
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR DIA PARA DIA*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "mes":/*SE VALOR FOR DIA PARA MES*/
                    valortempo = tempo.value / 30.417
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR DIA PARA ANO*/
                    valortempo = tempo.value / 365
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR DIA PARA POLEGADA*/
                    valortempo = tempo.value / 3650
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "sec":/*SE VALOR FOR DIA PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 36500
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
            }
            break;
        case "mes":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MES PARA MILISEGUNDO*/
                    valortempo = tempo.value * 2.628e+9
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR MES PARA SEGUNDO*/
                    valortempo = tempo.value * 2.628e+6
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "min":/*SE VALOR FOR MES PARA MINUTO*/
                    valortempo = tempo.value * 43800
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR MES PARA HORA*/
                    valortempo = tempo.value * 730.001
                    tempoResultado.value = valortempo.toFixed(3).toString();
                    break;
                case "day":/*SE VALOR FOR MES PARA DIA*/
                    valortempo = tempo.value * 30.417
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR MES PARA MES*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "ano":/*SE VALOR FOR MES PARA ANO*/
                    valortempo = tempo.value / 12
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR MES PARA POLEGADA*/
                    valortempo = tempo.value / 120
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "sec":/*SE VALOR FOR MES PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 1200
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "ano":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR ANO PARA MILISEGUNDO*/
                    valortempo = tempo.value * 3.154e+10
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR ANO PARA SEGUNDO*/
                    valortempo = tempo.value * 3.154e+7
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "min":/*SE VALOR FOR ANO PARA MINUTO*/
                    valortempo = tempo.value * 525600
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR ANO PARA HORA*/
                    valortempo = tempo.value * 8760
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR ANO PARA DIA*/
                    valortempo = tempo.value * 365
                    tempoResultado.value = valortempo.toString();
                    break;
                case "mes":/*SE VALOR FOR ANO PARA MES*/
                    valortempo = tempo.value * 12
                    tempoResultado.value = valortempo.toString();
                    break;
                case "ano":/*SE VALOR FOR ANO PARA ANO*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "dec":/*SE VALOR FOR ANO PARA DECADA*/
                    valortempo = tempo.value / 10
                    tempoResultado.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR ANO PARA DIAS SECULO*/
                    valortempo = tempo.value / 100
                    tempoResultado.value = valortempo.toString();
                    break;
            }
            break;
        case "dec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR DECADA PARA MILISEGUNDO*/
                    valortempo = tempo.value * 3.154e+11
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR DECADA PARA SEGUNDO*/
                    valortempo = tempo.value * 3.154e+8
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "min":/*SE VALOR FOR DECADA PARA MINUTO*/
                    valortempo = tempo.value * 5.256e+6
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR DECADA PARA HORA*/
                    valortempo = tempo.value * 87600
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR DECADA PARA DIA*/
                    valortempo = tempo.value * 3650
                    tempoResultado.value = valortempo.toString();
                    break;
                case "mes":/*SE VALOR FOR DECADA PARA MES*/
                    valortempo = tempo.value * 120
                    tempoResultado.value = valortempo.toString();
                    break;
                case "ano":/*SE VALOR FOR DECADA PARA DECADA*/
                    valortempo = tempo.value * 10
                    tempoResultado.value = valortempo.toString()
                    break;
                case "dec":/*SE VALOR FOR DECADA PARA DECADA*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "sec":/*SE VALOR FOR DECADA PARA DIAS SECULO*/
                    valortempo = tempo.value / 10
                    tempoResultado.value = valortempo.toString();
                    break;
            }
            break;
        case "sec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR SECULO PARA MILISEGUNDO*/
                    valortempo = tempo.value * 3.154e+12
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR SECULO PARA SEGUNDO*/
                    valortempo = tempo.value * 3.154e+9
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "min":/*SE VALOR FOR SECULO PARA MINUTO*/
                    valortempo = tempo.value * 5.256e+7
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "hr":/*SE VALOR FOR SECULO PARA HORA*/
                    valortempo = tempo.value * 876000
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR SECULO PARA DIA*/
                    valortempo = tempo.value * 36500
                    tempoResultado.value = valortempo.toString();
                    break;
                case "mes":/*SE VALOR FOR SECULO PARA MES*/
                    valortempo = tempo.value * 1200
                    tempoResultado.value = valortempo.toString();
                    break;
                case "ano":/*SE VALOR FOR SECULO PARA DECADA*/
                    valortempo = tempo.value * 100
                    tempoResultado.value = valortempo.toString()
                    break;
                case "dec":/*SE VALOR FOR DECADA PARA SECULO*/
                    valortempo = tempo.value * 10
                    tempoResultado.value = valortempo.toString();
                    break;
                case "sec":/*SE VALOR FOR SECULO PARA DIAS SECULO*/
                    tempoResultado.value = tempo.value.toString()
                    break;
            }
            break;
    }

}