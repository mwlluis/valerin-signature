const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const position = document.getElementById("position");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let signature = document.getElementById("output");
let execButton = document.getElementById("execButton");




execButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  signature.innerHTML = `
  <p>${firstName.value}</p>
  <p>${lastName.value}</p>
  <p>${position.value}</p>
  <p>${email.value}</p>
  <p>${phone.value}</p>
  `;
});
