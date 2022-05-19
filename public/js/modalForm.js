const btn = document.querySelectorAll(".btn-del");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalAdjust(e.target);
  });
});

function modalAdjust(e) {
  const id = e.dataset.sqlid;
  const form = document.getElementById("form_del");

  form.innerHTML = `
  <input type="submit" class="btn btn-primary secundary-bg-color" name="delete" value="Excluir" />
  <input type="hidden" name="id" value="${id}" />
  `;
}
