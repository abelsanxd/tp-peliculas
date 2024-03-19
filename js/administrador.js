import Pelicula from "./classPelicula.js";
//variables globales

const btnAgregarPelicula = document.getElementById("btnCrearPelicula");

const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.getElementById("formPelicula");
const codigo = document.getElementById("codigo");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const anio = document.getElementById("anio");
const reparto = document.getElementById("reparto");
const imagen = document.getElementById("imagen");
const genero = document.getElementById("genero");
const pais = document.getElementById("pais");
const duracion = document.getElementById("duracion");
const peliculas = []

// funciones
function monstrarModalPelicula() {
  modalPelicula.show();
  crearPelicula = true;
}

function administrarFormularioPelicula(e) {
  //aqui decidimos si estamos creando o editando una pelicula
  e.preventDefault();
  if (crearPelicula === true) {
    //estoy creando la peli
    creandoPeliculas();
  } else {
    //estoy editando la peli
  }
}

function creandoPeliculas() {
  console.log("aqui tengo que crear la peli");
  //todo: validar los datos
  //crear un objeto pelicula
  //almacenar el objeto en el array de peliculas
  //guardar el array en el localstorage
  const peliculaNueva = new Pelicula(
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value,
    anio.value,
    duracion.value,
    pais.value,
    reparto.value,
    director.value
  );
  console.log(peliculaNueva)
  peliculas.push(peliculaNueva);

}

//logica

btnAgregarPelicula.addEventListener("click", monstrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
