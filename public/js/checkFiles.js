const file = document.getElementById("file");

file.addEventListener("change", () => {
  const fileW = document.getElementById("file-warning");
  if (file.files.length > 0) fileW.innerHTML = `Arquivo selecionado: ${file.files[0].name}`;
  else fileW.innerHTML = "Nenhum arquivo selecionado";
});
