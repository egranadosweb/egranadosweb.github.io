var productos = document.querySelectorAll("article");
var aplicar = document.querySelector("#aplicar");
var limpiar = document.querySelector("#limpiar");

console.log("Productos = " + productos);
/*console.log("Valor del procesador = "+ valorProcesador);*/

limpiar.addEventListener("click", function () {
    for (var i = 0; i < productos.length; i++) {
        productos[i].style.display = "block";
    }
    setTimeout(function () {
        for (var i = 0; i < productos.length; i++) {
            productos[i].style.opacity = "1";
        }
    }, 500);
});

aplicar.addEventListener("click", function () {

    var procesador = document.querySelector("#procesador");
    var valorProcesador = procesador.value;
    var esconder = [];

    console.log("Valor del procesador = " + valorProcesador);

    if (valorProcesador == "0") {
        console.log("El valor del procesador es igual a " + valorProcesador);
        for (var z = 0; z < productos.length; z++) {
            productos[z].style.display = "block";
        }
        setTimeout(function () {
            for (var c = 0; c < productos.length; c++) {
                productos[c].style.opacity = "1";
            }
        }, 500);
    }

    if (valorProcesador != "0") {
        vacios = [];
        for (var i = 0; i < productos.length; i++) {
            productos[i].style.display = "block";
            productos[i].style.opacity = "1";
        }

        for (var x = 0; x < productos.length; x++) {
            if (!productos[x].classList.contains(valorProcesador)) {
                productos[x].style.opacity = "0";
                esconder.push(productos[x]);

                /*productos[i].style.display = "none";*/
            }
        }

        setTimeout(function () {
            for (var y = 0; y < esconder.length; y++) {
                esconder[y].style.display = "none";
            }
        }, 500);


    }



});