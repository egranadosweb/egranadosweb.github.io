var banner = document.getElementById("segundo");

    
    window.addEventListener("scroll",function(){
        const y = window.scrollY;
        const w = window.innerWidth;
        var posicion = banner.getBoundingClientRect();
        console.log(posicion.bottom);
        if(posicion.top < 30){
            console.log("ESTAMOS EN EL BANNER");
        }
        
    });


var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


var image = document.getElementById('segundo');
window.addEventListener('scroll', function (event) {
	if (isInViewport(image)) {
		console.log("Esta visible la seccion");
	}
}, false);