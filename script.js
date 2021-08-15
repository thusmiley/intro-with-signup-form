const form = document.getElementsByClassName("form")[0];
const inputs = [...form.getElementsByTagName("input")];
const regex = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (
      input.value == "" ||
      (input.name === "email" && !regex.test(input.value))
    ) {
      input.classList.add("show-icon");
      input.nextElementSibling.classList.add("show-error");
      input.nextElementSibling.classList.remove("error");
    } else {
      input.classList.remove("show-icon");
      input.nextElementSibling.classList.remove("show-error");
      input.nextElementSibling.classList.add("error");
    }
  });
});
