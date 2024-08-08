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
