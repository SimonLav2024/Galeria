const modal = document.getElementById("imagenModal");
const modalImg = document.querySelector(".modal-image");
const thumbnail = document.querySelectorAll(".imagenes");
const closeBtn = document.querySelector(".close");

thumbnail.forEach(thumb => {
    thumb.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = thumb.getAttribute("data-full");
        modalImg.alt = thumb.alt;
    });
});

// esto es para cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
// esto tambien sirve para para cerrar el modal
// closeBtn.onclick = () => { modal.style.display = "none"};
//varias formas pero mismo resultado aunk la segunda tiene menos lineas de codigo

window.onclick = (event) => {
    if(event.target.classList.contains("modal-content")){
        modal.style.display = "none";
    }
}

//esto es la barra de navegacion que se aparece en la version movil pero en la version pc esta oculta por el css
document.getElementById("boton").addEventListener('click', function toggleMenu(){
    let myNav = document.getElementById("myNavbar");
    if(myNav.className === "navbar"){
        myNav.className += " responsive"
    }else{
        myNav.className = "navbar"
    }
});
// fin
