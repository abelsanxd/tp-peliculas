function cargarPeliculasEnIndex() {
    const pelis = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];
    const contenedorPeliculas = document.querySelector("#contenedorPeliculas");
  
    pelis.forEach(peli => {
      const article = document.createElement("article");
      article.classList.add("col-md-4", "col-lg-3", "mb-3");
      article.innerHTML = `
        <div class="card h-100">
          <img src="${peli.imagen}" alt="${peli.titulo}" />
          <div class="card-body">
            <h5 class="card-title display-6">${peli.titulo}</h5>
          </div>
          <div class="card-footer">
            <a href="./pages/detallePelicula.html?id=${peli.id}">
              <button class="btn btn-primary fs-4 my-3">ver detalle</button>
            </a>
          </div>
        </div>
      `;
      contenedorPeliculas.appendChild(article);
    });
  }
  
  document.addEventListener("DOMContentLoaded", cargarPeliculasEnIndex);