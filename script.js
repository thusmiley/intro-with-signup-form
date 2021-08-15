const form = document.getElementsByClassName("form");
const inputs = [...form.getElementByTagName("input")];
//   regex = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (input.value == "") {
      input.classList.add("show-icon");
      input.nextElementSibling.classList.add("show-error");
      input.nextElementSibling.classList.remove("error");
    } else {
      input.classList.remove("show-icon");
      input.nextElementSibling.classList.remove("show-error");
      input.nextElementSibling.classList.add("error");
    }
    // if (input.name === "email" && !regex.test(input.value)) {
    // ...}
  });
});
