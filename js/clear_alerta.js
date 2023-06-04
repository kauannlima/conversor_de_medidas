function clear(valor, resultado) {
    valor.value = ""
    resultado.value = ""}

    function alerta(){
        Swal.fire({
            showConfirmButton: false,
            margin: "4em",
            width: '80%',
            padding: '0',
            icon: 'error',
            text:'Digite um valor válido!',
            background: "#ffffff",
            iconColor: "#2f58cd",
            color: "#2f58cd",
          })
    }