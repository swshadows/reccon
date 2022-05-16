const buttonApi = document.querySelectorAll(".button-api");
const body = document.getElementById("bairros-body");

buttonApi.forEach((e) => {
  e.addEventListener("click", () => {
    fetchFromAPI(e.innerHTML);
  });
});

async function fetchFromAPI(query) {
  body.innerHTML = `
  <div class="spinner-border text-info" role="status">
    <span class="sr-only"></span>
  </div>
  <span>Carregando anuncios...</span>`;
  await fetch("/api?name=" + query)
    .then((res) => res.json())
    .then((res) => renderPage(res));
}

function renderPage(res) {
  body.innerHTML = "";
  if (res.length == 0) {
    body.innerHTML = "Não temos anuncios nesse bairro, volte mais tarde";
    return;
  }
  for (i in res) {
    body.innerHTML += `
    <div class="col d-flex justify-content-center py-2">
              <div class="card h-100">
                <img src="${res[i].image_path}" class="card-img-top" alt="..." />
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title">${res[i].title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Coleta em ${res[i].address.name}</h6>
                  <p class="card-text">${res[i].description}</p>
                  <div class="contato">
                    <a href="https://api.whatsapp.com/send?phone=${res[i].user.phone}&text=Olá! Estou%20interessado%20na%20sua%20doação%E2%80%9D" target="_blank"
                      ><button type="button" id="btn" class="btn btn-primary btn-sm secundary-bg-color"><i class="bi bi-whatsapp"></i>Contatar doador</button></a
                    >
                  </div>
                </div>
              </div>
            </div>
    `;
  }
}
