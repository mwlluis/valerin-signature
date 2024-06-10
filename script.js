document
  .getElementById("execButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //these have to be in the scope of the function
    //i think you need to create an array with the values
    //what other event listeners are there
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let position = document.getElementById("position").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("output").innerHTML = `
<p>${firstName}</p>
<p>${lastName}</p>
<p>${position}</p>
<p>${email}</p>
<p>${phone}</p>
`;
  });

//trying to create a variable and adding an event listener did not work, using doc getelement etc did work
