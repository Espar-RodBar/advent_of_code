console.log("Advent of code solver");

const form = document.querySelector(".form");
const textArea = document.querySelector("textarea");

let rawData = undefined;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  rawData = textArea.value;
  textArea.value = "";
  solver(rawData.split("\n"));
});

function solver(data) {}
