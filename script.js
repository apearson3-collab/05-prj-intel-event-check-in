//get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//track attendance
let count = 0;
const maxCount = 50;

//handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  //increment count
  count++;

  //update progress bar
  document.getElementById("attendeeCount").textContent = count;
  const percentage = Math.round((count / maxCount) * 100) + "%";
  document.getElementById("progressBar").style.width = percentage;

  //update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //show welcome message
  const message = "Welcome, " + name + " from " + teamName;
  const greetingMessage = document.getElementById("greeting");
  greetingMessage.textContent = "" + message;
  console.log(message);

  form.reset();
});
