// helper function for getting radio selection
function getPronouns() {
  for (const option of document.getElementsByName("pronouns")) {
    if (option.checked) {
      return option.labels[0].textContent;
    }
  }
}

// listener function for attempted form submission
function submitForm() {
  let formdata = [
    ["Name", document.getElementById("name").value],
    ["Username", document.getElementById("username").value],
    ["Email", document.getElementById("email").value],
    ["Password", document.getElementById("password").value],
    [
      "Date of Birth",
      new Date(document.getElementById("birthdate").value).toLocaleDateString(),
    ],
    ["Preferred Pronouns", getPronouns()],
  ];

  let missingresponses = [];
  let printresponses = [];
  for (const field of formdata) {
    if (field[1] == "" || field[1] == undefined) {
      // field is not filled out
      missingresponses.push(field[0]);
    } else {
      // field contains a response
      printresponses.push(field[0] + ": " + field[1]);
    }
  }

  if (missingresponses.length) {
    console.log(
      "Can't submit form, answer the following fields: " +
        missingresponses.toString()
    );
  } else {
    for (const printableresponse of printresponses) {
      console.log(printableresponse);
    }
  }
}

// apply listener to document (& override reloading the page so that it stays in the console and I can actually see it printed)
document.addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm();
});
