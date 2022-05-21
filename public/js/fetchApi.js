const buttonApiButton = document.querySelectorAll("button.button-api");

buttonApiButton.forEach((e) => {
  e.addEventListener("click", () => {
    fetchFromAPI(e.dataset.sqlid, "pc");
  });
});

async function fetchFromAPI(query, type) {
  let body;
  if (type == "pc") body = document.getElementById("bairros-body");
  else body = document.getElementById("bairros-body-mobile");
  body.innerHTML = `
  <div class="spinner-border text-info" role="status">
    <span class="sr-only"></span>
  </div>
  <span>Carregando anuncios...</span>`;
  await fetch("/api?id=" + query)
    .then((res) => res.json())
    .then((res) => renderPage(res, body));
}

function renderPage(res, target) {
  target.innerHTML = "";

  if (res.length == 0) {
    target.innerHTML = "<h5 class='text-center mt-5 w-100'>Não temos anuncios nesse bairro, volte mais tarde</h5>";
    return;
  }
  if (target.attributes.id.value == "bairros-body") {
    for (i in res) {
      target.innerHTML += `
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
  } else {
    for (i in res) {
      target.innerHTML += `
              <div class="card-mobile d-flex p-1 my-2">
                      <div class="w-50 img">
                        <img src="${res[i].image_path}" width="280" class="card-img-top" alt="..." />
                      </div>
                      <div class="w-50 ms-2 text d-flex flex-column">
                        <h5 class="card-title">${res[i].title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Coleta em: ${res[i].address.name}</h6>
                        <p style="word-wrap: break-word;" class="w-100 h-50 card-text">${res[i].description}</p>
                        <div class="contato">
                          <a href="https://api.whatsapp.com/send?phone=+55${res[i].user.phone}&text=Olá! Estou%20interessado%20na%20sua%20doação" target="_blank"
                            ><button type="button" id="btn" class="btn btn-primary btn-sm secundary-bg-color"><i class="bi bi-whatsapp"></i>Contatar doador</button>
                          </a>
                        </div>
                      </div>
                    </div>
              `;
    }
  }
}
