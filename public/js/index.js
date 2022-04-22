function showPassword(arg, target) {
  let show = document.getElementById(target);
  if (arg.checked) {
    show.type = "text";
  } else show.type = "password";
  if (target == "pass-reg") document.getElementById("pass-conf-reg").type = show.type;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".showpass").forEach((e) => {
    e.checked = false;
  });
});
