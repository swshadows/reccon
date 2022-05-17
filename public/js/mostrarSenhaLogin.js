var btn = document.getElementById("btnLogin");

btn.addEventListener("click", function () {
  let password = document.getElementById("passwordlogin");

  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
