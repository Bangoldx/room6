
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

window.onload = (event) => {
  document.getElementById("date").innerHTML = currentYear;
};