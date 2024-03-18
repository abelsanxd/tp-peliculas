import {Pelicula} from "./classPelicula.js"
//variables globales

const btnAgregarPelicula = document.getElementById("btnCrearPelicula");

const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.getElementById('formPelicula');
// funciones
function monstrarModalPelicula() {
  modalPelicula.show();
  crearPelicula = true;
}

function administrarFormularioPelicula(e){
//aqui decidimos si estamos creando o editando una pelicula
e.preventDefault()
if(crearPelicula === true){
    //estoy creando la peli
    creandoPeliculas()
}else{
    //estoy editando la peli
}
}

function creandoPeliculas(){
  console.log("aqui tengo que crear la peli")
  //todo: validar los datos
  //crear un objeto pelicula
  //almacenar el objeto en el array de peliculas
  //guardar el array en el localstorage
}


//logica

btnAgregarPelicula.addEventListener("click", monstrarModalPelicula);
formularioPelicula.addEventListener('submit', administrarFormularioPelicula)