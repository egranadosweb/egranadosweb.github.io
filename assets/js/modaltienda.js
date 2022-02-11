//CAMBIAR SRC DE LA IMAGEN DEL MODAL
window.onload = function () {

    var anchoDelaPantalla = screen.width;

    if (anchoDelaPantalla > 450) {
        
        console.log(anchoDelaPantalla);
        //CAMBIAR SRC DE LA IMAGEN DEL MODAL
        var productos = document.querySelectorAll("article");
        var imagenes = document.getElementsByClassName("imagenes");
        var contenedorModal = document.querySelector(".contenedorModal");
        var cerrar = document.querySelector(".cerrar");

        console.log(imagenes);

        for (var q = 0; q < imagenes.length; q++) {

            imagenes[q].addEventListener("click", function () {

                var newSrc = this.childNodes[1].childNodes[1].getAttribute("src");
                console.log(newSrc);

                var imagenModal = document.getElementById("imagenModal");
                imagenModal.setAttribute("src", newSrc);

                //MOSTRAR VENTANA MODAL CON EL CONTENIDO
                contenedorModal.style.display = "flex";

                //BLOQUEAR SCROLL DEL BODY
                document.body.style.position = "static";
                document.body.style.height = "100%";
                document.body.style.overflow = "hidden";
                console.log("llego hasta aqui");

            })
        }

        console.log("llego hasta aqui");
        //cerrar modal cuando den click en la x
        cerrar.addEventListener("click", function () {
            contenedorModal.style.display = "none";

            document.body.style.position = "inherit";
            document.body.style.height = "auto";
            document.body.style.overflow = "visible";
        });

        //cerrar modal cuando den click en la ventana modal
        window.addEventListener("click", function (event) {
            //si el click es dentro de la ventana modal
            if (event.target == contenedorModal) {
                contenedorModal.style.display = "none";

                document.body.style.position = "inherit";
                document.body.style.height = "auto";
                document.body.style.overflow = "visible";
            }

        });

    } //FIN DE LA VALIDACION DEL ANCHO DE LA PANTALLA

} //FIN DE LA FUNCION ONLOAD