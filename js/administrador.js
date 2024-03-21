import Pelicula from "./classPelicula.js";

//Variables
const botonAgregarPelicula = document.querySelector("#btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.querySelector("#formPelicula");
const codigo = document.querySelector("#codigo");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const anio = document.querySelector("#anio");
const reparto = document.querySelector("#reparto");
const director = document.querySelector("#director");
const imagen = document.querySelector("#imagen");
const genero = document.querySelector("#genero");
const pais = document.querySelector("#pais");
const duracion = document.querySelector("#duracion");
const pelis = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

//Funciones
function mostrarModalPelicula() {
  crearPelicula = true;
  modalPelicula.show();
}

function administrarFormularioPelicula(e) {
  e.preventDefault();

  if (crearPelicula) {
    creandoPelicula();
  } else {
  }
}

function creandoPelicula() {
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
  console.log(peliculaNueva);
  pelis.push(peliculaNueva);
  guardarLocalStorage();
  limpiarFormularioPelicula();
  dibujarFila(peliculaNueva);

  //mostrar msj al usuario
  Swal.fire({
    title: "Pelicula creada",

    text: `La pelicula ${peliculaNueva.titulo} esta agregada`,

    icon: "success",
  });
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(pelis));
}

function limpiarFormularioPelicula() {
  formularioPelicula.reset();
}

function cargaInicial() {
  //verificar si tengo pelis
  if (pelis.length > 0) {
    pelis.map((peli) => dibujarFila(peli));
  }
}

function dibujarFila(peli) {
  console.log(peli);
  const tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `
  <tr>
              <th scope="row">${peli.id}</th>
              <td>${peli.titulo}</td>
              <td>${peli.descripcion}</td>
              <td>${peli.imagen}</td>
              <td>${peli.genero}</td>
              <td>
                <a href=""><i class="bi bi-pencil-square text-warning"></i></a>
                <a href=""><i class="bi bi-x-square text-danger"></i></a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>All of Us Stranger</td>
              <td>Una noche, en su tor...</td>
              <td>https://pics.filmaffini...</td>
              <td>Drama</td>
              <td>
                <a href=""><i class="bi bi-pencil-square text-warning"></i></a>
                <a href=""><i class="bi bi-x-square text-danger"></i></a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Duna: Parte Dos</td>
              <td>Tras los sucesos de l...</td>
              <td>https://pics.filmaffini...</td>
              <td>Accion</td>
              <td>
                <a href=""><i class="bi bi-pencil-square text-warning"></i></a>
                <a href=""><i class="bi bi-x-square text-danger"></i></a>
              </td>
            </tr>
  `;
}
//Logica
botonAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
cargaInicial();
Swal.fire({
  title: "Good job!",

  text: "You clicked the button!",

  icon: "success",
});
