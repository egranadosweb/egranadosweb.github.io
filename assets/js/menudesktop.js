//seleccionamos el menu oculto del dom
var menu = document.getElementById("menuoculto");
//cada vez que se haga scroll valiamos si hicimos scroll hacia abajo mas de 300 px para mostrar el menu fijo en el top de la pagina
window.addEventListener("scroll", function () {
    const y = window.scrollY;
    const w = window.innerWidth;
    /*
    var posicion = banner.getBoundingClientRect()
    console.log(posicion.bottom);
    if (posicion.top < 30) {
        console.log("ESTAMOS EN EL BANNER");
    }*/

    //validamos si el scroll supero los 300 pixeles
    if (y > 300) {
        //agregamos la clase .menufixed al menu oculto si se cumple el if
        menu.classList.add("menufixed");
    } else if (y < 300 || y == 0) {
        //eliminamos la clase .menufixed al menu oculto si se cumple el else if
        menu.classList.remove("menufixed");
    }
});





