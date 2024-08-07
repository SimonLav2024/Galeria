const imagenPrincipal = document.getElementById("img-princ");
const miniaturas = document.querySelectorAll(".imagenes");
const miniaturasArray = [
    {imagen: "img/arboles.JPG", altImagen: "arboles"},
    {imagen: "img/escaleras.JPG", altImagen: "escaleras"},
    {imagen: "img/pasillo.JPG", altImagen: "pasillo"},
    {imagen: "img/vistas.JPG", altImagen: "vistas"},
    {imagen: "img/teide.JPG", altImagen: "teide"}
];

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", function(e){
        let idImagen = e.currentTarget.id;
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
});
