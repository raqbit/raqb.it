const submitButton = document.getElementById("submitBtn");
const nameInput = document.getElementById("newName");

/* 
    See ../lib.js for the code actually sending commands (sendFahCommands)
*/

submitButton.addEventListener("click", () => {
  // Set "user" option to name input value
  sendFahCommands([`option user ${nameInput.value}`]);
});
