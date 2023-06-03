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
    tempo.value = ""
    tempoResultado.value = ""
});

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
                case "mes":/*SE VALOR FOR MILISEGUNDO PARA JARDAS*/
                    valortempo = tempo.value / 2.628e+9
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR MILISEGUNDO PARA PE*/
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
                case "mes":/*SE VALOR FOR SEGUNDO PARA JARDAS*/
                    valortempo = tempo.value / 604800
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR SEGUNDO PARA PE*/
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
                case "mes":/*SE VALOR FOR MINUTO PARA JARDAS*/
                    valortempo = tempo.value / 43800
                    tempoResultado.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR MINUTO PARA PE*/
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
                    valortempo = tempo.value *3.6e+6
                    tempoResultado.value = valortempo.toExponential(4);
                    break;
                case "seg":/*SE VALOR FOR HORA PARA SEGUNDO*/
                    valortempo = tempo.value *3600
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR HORA PARA MINUTO*/
                    valortempo = tempo.value *60
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR HORA PARA HORA*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "day":/*SE VALOR FOR HORA PARA DIA*/
                    valortempo = tempo.value /24
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR HORA PARA JARDAS*/
                    valortempo = tempo.value / 730
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR HORA PARA PE*/
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
                case "mes":/*SE VALOR FOR DIA PARA JARDAS*/
                    valortempo = tempo.value / 30.417
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR DIA PARA PE*/
                    valortempo = tempo.value /365
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR DIA PARA POLEGADA*/
                valortempo = tempo.value /3650
                tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "sec":/*SE VALOR FOR DIA PARA DIAS NAUTICAS*/
                valortempo = tempo.value /36500
                tempoResultado.value = valortempo.toExponential(4);
                    break;
            }
            break;
        case "mes":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR JARDAS PARA MILISEGUNDO*/
                    valortempo = tempo.value / 1094
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR JARDAS PARA SEGUNDO*/
                    valortempo = tempo.value / 1.094
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR JARDAS PARA MINUTO*/
                    valortempo = tempo.value * 91.44
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR JARDAS PARA HORA*/
                    valortempo = tempo.value * 914.4
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR JARDAS PARA DIA*/
                    valortempo = tempo.value / 1760
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR JARDAS PARA JARDAS*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "ano":/*SE VALOR FOR JARDAS PARA PE*/
                    valortempo = tempo.value * 3
                    tempoResultado.value = valortempo.toString();
                    break;
                case "dec":/*SE VALOR FOR JARDAS PARA POLEGADA*/
                    valortempo = tempo.value * 36
                    tempoResultado.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR JARDAS PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 2025
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "ano":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR PE PARA MILISEGUNDO*/
                    valortempo = tempo.value / 3281
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR PE PARA SEGUNDO*/
                    valortempo = tempo.value / 3.281
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR PE PARA MINUTO*/
                    valortempo = tempo.value * 30.48
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR PE PARA HORA*/
                    valortempo = tempo.value * 304.8
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR PE PARA DIA*/
                    valortempo = tempo.value / 5280
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR PE PARA JARDAS*/
                    valortempo = tempo.value / 3
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR PE PARA PE*/
                    tempoResultado.value = tempo.value.toString();
                    break;
                case "dec":/*SE VALOR FOR PE PARA POLEGADA*/
                    valortempo = tempo.value * 12
                    tempoResultado.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR PE PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 6076
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "dec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR PO PARA MILISEGUNDO*/
                    valortempo = tempo.value / 39370
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR PO PARA SEGUNDO*/
                    valortempo = tempo.value / 39.37
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR PO PARA MINUTO*/
                    valortempo = tempo.value * 2.54
                    tempoResultado.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR PO PARA HORA*/
                    valortempo = tempo.value * 25.4
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR PO PARA DIA*/
                    valortempo = tempo.value / 63360
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR PO PARA JARDAS*/
                    valortempo = tempo.value / 36
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR PO PARA PE*/
                    valortempo = tempo.value / 12
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR PO PARA POLEGADA*/
                    tempoResultado.value = tempo.value.toString()
                    break;
                case "sec":/*SE VALOR FOR PO PARA DIAS NAUTICAS*/
                    valortempo = tempo.value / 72910
                    tempoResultado.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "sec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR DIAS NAUTICAS PARA MILISEGUNDO*/
                    valortempo = tempo.value * 1.852
                    tempoResultado.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR DIAS NAUTICAS PARA SEGUNDO*/
                    valortempo = tempo.value * 1852
                    tempoResultado.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR DIAS NAUTICAS PARA MINUTO*/
                    valor = tempo.value * 185200
                    tempoResultado.value = valor.toString();
                    break;
                case "hr":/*SE VALOR FOR DIAS NAUTICAS PARA HORA*/
                    valortempo = tempo.value * 1.852e+6
                    tempoResultado.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR DIAS NAUTICAS PARA DIA*/
                    valortempo = tempo.value * 1.151
                    tempoResultado.value = valortempo.toString();
                    break;
                case "mes":/*SE VALOR FOR DIAS NAUTICAS PARA JARDAS*/
                    valor = tempo.value * 2025
                    tempoResultado.value = valor.toString();
                    break;
                case "ano":/*SE VALOR FOR DIAS NAUTICAS PARA PE*/
                    valortempo = tempo.value * 6076
                    tempoResultado.value = valortempo.toString();
                    break;
                case "dec":/*SE VALOR FOR DIAS NAUTICAS PARA POLEGADA*/
                    valortempo = tempo.value * 72910
                    tempoResultado.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR DIAS NAUTICAS PARA DIAS NAUTICAS*/
                    tempoResultado.value = tempo.value.toString();
                    break;
            }
            break;
    }
}