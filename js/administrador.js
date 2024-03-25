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

  //probando
  guardarLocalStorage();
  agregarPeliculaAlIndex(peliculaNueva);
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(pelis));
}


//probando



function agregarPeliculaAlIndex(pelicula) {
  const contenedorPeliculas = document.querySelector("#contenedorPeliculas");

  const article = document.createElement("article");
  article.classList.add("col-md-4", "col-lg-3", "mb-3");
  article.innerHTML = `
    <div class="card h-100">
      <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
      <div class="card-body">
        <h5 class="card-title display-6">${pelicula.titulo}</h5>
      </div>
      <div class="card-footer">
        <a href="./pages/detallePelicula.html?id=${pelicula.id}">
          <button class="btn btn-primary fs-4 my-3">ver detalle</button>
        </a>
      </div>
    </div>
  `;
  contenedorPeliculas.appendChild(article);
}



//probando
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
              <td>
              <img
                class="img-thumbnail rounded img-fluid thumbnail"
                src=${peli.imagen}
                alt=${peli.titulo}
              />
            </td>
              <td>${peli.genero}</td>
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
