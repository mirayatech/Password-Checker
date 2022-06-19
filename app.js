const widthChecker = document.querySelector(".password-checker");
const password = document.querySelector("#password-input");
const eye = document.querySelector(".fa-eye");

eye.addEventListener("click", showPassword);

password.addEventListener("input", checkPassword);

function showPassword() {
  eye.classList.toggle("fa-eye-slash");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function checkPassword() {
  const value = password.value;
  if (value.length < 1) {
    widthChecker.style.width = "none";
    widthChecker.style.background = "none";
  } else if (value.length <= 4) {
    widthChecker.style.width = "25%";
    widthChecker.style.background = "#E44F4E";
  } else if (value.length <= 8) {
    widthChecker.style.width = "50%";
    widthChecker.style.background = "#F7D455";
  } else if (value.length <= 12) {
    widthChecker.style.width = "100%";
    widthChecker.style.background = "#72C06B";
  }
}
