let tempo = document.querySelector("#tempo");
let tempoValor = document.querySelector("#tempoValor")
let selecttempo1 = document.querySelector("#selecttempo1");
let selecttempo2 = document.querySelector("#selecttempo2");
let valortempo;
const limparTempo = document.querySelector("#tempoLimpar");

selecttempo1.addEventListener("change", calculoTempo);
selecttempo2.addEventListener("change", calculoTempo);
tempo.addEventListener("change", calculoTempo);
tempo.addEventListener("keyup", calculoTempo);
window.addEventListener("load", calculoTempo);

limparTempo.addEventListener("click", function () {
    tempo.value = ""
    tempoValor.value = ""
});

function calculoTempo() {
    switch (selecttempo1.value) {
        case "miliseg":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MILISEGUNDO PARA MILISEGUNDO*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "seg":/*SE VALOR FOR MILISEGUNDO PARA SEGUNDO*/
                    valortempo = tempo.value / 1000
                    tempoValor.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR MILISEGUNDO PARA CENTISEGUNDO*/
                    valortempo = tempo.value / 60000
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "hr":/*SE VALOR FOR MILISEGUNDO PARA MELISEGUNDO*/
                    valortempo = tempo.value / 3.6e+6
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "day":/*SE VALOR FOR MILISEGUNDO PARA MILHA*/
                    valortempo = tempo.value / 8.64e+7
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "mes":/*SE VALOR FOR MILISEGUNDO PARA JARDAS*/
                    valortempo = tempo.value / 2.628e+9
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR MILISEGUNDO PARA PE*/
                    valortempo = tempo.value / 3.154e+10
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "dec":/*SE VALOR FOR MILISEGUNDO PARA POLEGADA*/
                    valortempo = tempo.value / 3.154e+11
                    tempoValor.value = valortempo.toExponential(3);
                    break;
                case "sec":/*SE VALOR FOR MILISEGUNDO PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 3.154e+12
                    tempoValor.value = valortempo.toExponential(3);
                    break;
            }
            break;
        case "seg":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR SEGUNDO PARA MILISEGUNDO*/
                    valortempo = tempo.value * 1000
                    tempoValor.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR SEGUNDO PARA SEGUNDO*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "min":/*SE VALOR FOR SEGUNDO PARA CENTISEGUNDO*/
                    valortempo = tempo.value /60
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "hr":/*SE VALOR FOR SEGUNDO PARA MELISEGUNDO*/
                valortempo = tempo.value /360
                tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "day":/*SE VALOR FOR SEGUNDO PARA MILHA*/
                valortempo = tempo.value / 86400
                tempoValor.value = valortempo.toExponential(3);
                    break;
                case "mes":/*SE VALOR FOR SEGUNDO PARA JARDAS*/
                valortempo = tempo.value / 604800
                tempoValor.value = valortempo.toExponential(3);
                    break;
                case "ano":/*SE VALOR FOR SEGUNDO PARA PE*/
                valortempo = tempo.value / 3.154e+7
                tempoValor.value = valortempo.toExponential(3);
                    break;
                case "dec":/*SE VALOR FOR SEGUNDO PARA POLEGADA*/
                valortempo = tempo.value / 3.154e+8
                tempoValor.value = valortempo.toExponential(3);
                    break;
                case "sec":/*SE VALOR FOR SEGUNDO PARA MILHAS NAUTICAS*/
                valortempo = tempo.value / 3.154e+9
                tempoValor.value = valortempo.toExponential(3);
                    break;
            }
            break;
        case "min":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR CENTISEGUNDO PARA MILISEGUNDO*/
                    valortempo = tempo.value / 100000
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR CENTISEGUNDO PARA SEGUNDO*/
                    valortempo = tempo.value / 100
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR CENTISEGUNDO PARA CENTISEGUNDO*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "hr":/*SE VALOR FOR CENTISEGUNDO PARA MELISEGUNDO*/
                    valortempo = tempo.value * 10
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR CENTISEGUNDO PARA MILHA*/
                    valortempo = tempo.value / 160934.4
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR CENTISEGUNDO PARA JARDAS*/
                    valortempo = tempo.value / 91.44
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR CENTISEGUNDO PARA PE*/
                    valortempo = tempo.value / 30.48
                    valtempoValorortempo.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR CENTISEGUNDO PARA POLEGADA*/
                    valortempo = tempo.value / 2.54
                    tempoValor.value = valortempo.toFixed(6).toString()
                    break;
                case "sec":/*SE VALOR FOR CENTISEGUNDO PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 185200
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "hr":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MELISEGUNDO PARA MILISEGUNDO*/
                    valortempo = tempo.value / 1000000
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR MELISEGUNDO PARA SEGUNDO*/
                    valortempo = tempo.value / 1000
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR MELISEGUNDO PARA CENTISEGUNDO*/
                    valortempo = tempo.value / 10
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "hr":/*SE VALOR FOR MELISEGUNDO PARA MELISEGUNDO*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "day":/*SE VALOR FOR MELISEGUNDO PARA MILHA*/
                    valortempo = tempo.value / 1.609e+6
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR MELISEGUNDO PARA JARDAS*/
                    valortempo = tempo.value / 914.4
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR MELISEGUNDO PARA PE*/
                    valortempo = tempo.value / 304.8
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR MELISEGUNDO PARA POLEGADA*/
                    valor = tempo.value / 25.4
                    tempoValor.value = valortempo.toFixed(6).toString()
                    break;
                case "sec":/*SE VALOR FOR MELISEGUNDO PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 1.852e+6
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "day":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MILHA PARA MILISEGUNDO*/
                    valortempo = tempo.value * 1.609
                    tempoValor.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR MILHA PARA SEGUNDO*/
                    valortempo = tempo.value * 1609
                    tempoValor.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR MILHA PARA CENTISEGUNDO*/
                    valortempo = tempo.value * 1609
                    tempoValor.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR MILHA PARA MELISEGUNDO*/
                    valortempo = tempo.value * 1.609e+6
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR MILHA PARA MILHA*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "mes":/*SE VALOR FOR MILHA PARA JARDAS*/
                    valortempo = tempo.value * 1760
                    tempoValor.value = valortempo.toString();
                    break;
                case "ano":/*SE VALOR FOR MILHA PARA PE*/
                    valortempo = tempo.value * 5280
                    tempoValor.value = valortempo.toString();
                    break;
                case "dec":/*SE VALOR FOR MILHA PARA POLEGADA*/
                    valortempo = tempo.value * 63360
                    tempoValor.value = valor.toString()
                    break;
                case "sec":/*SE VALOR FOR MILHA PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 1.151
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "mes":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR JARDAS PARA MILISEGUNDO*/
                    valortempo = tempo.value / 1094
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR JARDAS PARA SEGUNDO*/
                    valortempo = tempo.value / 1.094
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR JARDAS PARA CENTISEGUNDO*/
                    valortempo = tempo.value * 91.44
                    tempoValor.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR JARDAS PARA MELISEGUNDO*/
                    valortempo = tempo.value * 914.4
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR JARDAS PARA MILHA*/
                    valortempo = tempo.value / 1760
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR JARDAS PARA JARDAS*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "ano":/*SE VALOR FOR JARDAS PARA PE*/
                    valortempo = tempo.value * 3
                    tempoValor.value = valortempo.toString();
                    break;
                case "dec":/*SE VALOR FOR JARDAS PARA POLEGADA*/
                    valortempo = tempo.value * 36
                    tempoValor.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR JARDAS PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 2025
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "ano":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR PE PARA MILISEGUNDO*/
                    valortempo = tempo.value / 3281
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR PE PARA SEGUNDO*/
                    valortempo = tempo.value / 3.281
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR PE PARA CENTISEGUNDO*/
                    valortempo = tempo.value * 30.48
                    tempoValor.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR PE PARA MELISEGUNDO*/
                    valortempo = tempo.value * 304.8
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR PE PARA MILHA*/
                    valortempo = tempo.value / 5280
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR PE PARA JARDAS*/
                    valortempo = tempo.value / 3
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR PE PARA PE*/
                    tempoValor.value = tempo.value.toString();
                    break;
                case "dec":/*SE VALOR FOR PE PARA POLEGADA*/
                    valortempo = tempo.value * 12
                    tempoValor.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR PE PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 6076
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "dec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR PO PARA MILISEGUNDO*/
                    valortempo = tempo.value / 39370
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "seg":/*SE VALOR FOR PO PARA SEGUNDO*/
                    valortempo = tempo.value / 39.37
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "min":/*SE VALOR FOR PO PARA CENTISEGUNDO*/
                    valortempo = tempo.value * 2.54
                    tempoValor.value = valortempo.toString();
                    break;
                case "hr":/*SE VALOR FOR PO PARA MELISEGUNDO*/
                    valortempo = tempo.value * 25.4
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR PO PARA MILHA*/
                    valortempo = tempo.value / 63360
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "mes":/*SE VALOR FOR PO PARA JARDAS*/
                    valortempo = tempo.value / 36
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "ano":/*SE VALOR FOR PO PARA PE*/
                    valortempo = tempo.value / 12
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
                case "dec":/*SE VALOR FOR PO PARA POLEGADA*/
                    tempoValor.value = tempo.value.toString()
                    break;
                case "sec":/*SE VALOR FOR PO PARA MILHAS NAUTICAS*/
                    valortempo = tempo.value / 72910
                    tempoValor.value = valortempo.toFixed(6).toString();
                    break;
            }
            break;
        case "sec":
            switch (selecttempo2.value) {
                case "miliseg":/*SE VALOR FOR MILHAS NAUTICAS PARA MILISEGUNDO*/
                    valortempo = tempo.value * 1.852
                    tempoValor.value = valortempo.toString();
                    break;
                case "seg":/*SE VALOR FOR MILHAS NAUTICAS PARA SEGUNDO*/
                    valortempo = tempo.value * 1852
                    tempoValor.value = valortempo.toString();
                    break;
                case "min":/*SE VALOR FOR MILHAS NAUTICAS PARA CENTISEGUNDO*/
                    valor = tempo.value * 185200
                    tempoValor.value = valor.toString();
                    break;
                case "hr":/*SE VALOR FOR MILHAS NAUTICAS PARA MELISEGUNDO*/
                    valortempo = tempo.value * 1.852e+6
                    tempoValor.value = valortempo.toString();
                    break;
                case "day":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHA*/
                    valortempo = tempo.value * 1.151
                    tempoValor.value = valortempo.toString();
                    break;
                case "mes":/*SE VALOR FOR MILHAS NAUTICAS PARA JARDAS*/
                    valor = tempo.value * 2025
                    tempoValor.value = valor.toString();
                    break;
                case "ano":/*SE VALOR FOR MILHAS NAUTICAS PARA PE*/
                    valortempo = tempo.value * 6076
                    tempoValor.value = valortempo.toString();
                    break;
                case "dec":/*SE VALOR FOR MILHAS NAUTICAS PARA POLEGADA*/
                    valortempo = tempo.value * 72910
                    tempoValor.value = valortempo.toString()
                    break;
                case "sec":/*SE VALOR FOR MILHAS NAUTICAS PARA MILHAS NAUTICAS*/
                    tempoValor.value = tempo.value.toString();
                    break;
            }
            break;
    }
}