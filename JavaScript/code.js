const imagenPrincipal = document.getElementById("img-princ");
const miniaturas = document.querySelectorAll(".imagenes");
const miniaturasArray = [
    {imagen: "img/arboles.jpg", altImagen: "arboles"},
    {imagen: "img/escaleras.jpg", altImagen: "escaleras"},
    {imagen: "img/pasillo.jpg", altImagen: "pasillo"},
    {imagen: "img/vistas.jpg", altImagen: "vistas"},
    {imagen: "img/teide.jpg", altImagen: "teide"}
];

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", function(e){
        console.log(e);
        let idImagen = e.currentTarget.id;
        console.log(idImagen);
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
})