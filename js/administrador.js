//variables globales

const btnAgregarPelicula = document.getElementById("btnCrearPelicula");

const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);

// funciones
function monstrarModalPelicula() {
  modalPelicula.show();
}

//logica

btnAgregarPelicula.addEventListener("click", monstrarModalPelicula);
