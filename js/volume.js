let volume = document.querySelector("#volume");
let volumeResultado = document.querySelector("#volumeResultado")
let selectvolume1 = document.querySelector("#selectvolume1");
let selectvolume2 = document.querySelector("#selectvolume2");
let valorVolume;

const limparVolume = document.querySelector("#volumeLimpar");

selectvolume1.addEventListener("change", calculoVolume);
selecttvolume2.addEventListener("change", calculoVolume);
volume.addEventListener("keyup", calculoVolume);
window.addEventListener("load", calculoVolume);

limparVolume.addEventListener("click", function () {
    volume.value = ""
    volumeResultado.value = ""
});

