window.onload = function () {
    setTimeout(function(){
        var modalpromocion = document.getElementById("modalpromocion");
        modalpromocion.style.display = "block";
        console.log("Se cargo la pagina");
    }, 8000);
    

}

var cerrarmodal = document.getElementById("cerrarmodal");
//console.log(cerrarmodal);
cerrarmodal.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    cerrarmodal.style.display = "none";
});