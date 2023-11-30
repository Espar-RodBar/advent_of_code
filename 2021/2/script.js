console.log("Advent of code solver");

const form = document.querySelector(".form");
const textArea = document.querySelector("textarea");

let rawData = undefined;
const dataTest = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  rawData = textArea.value;
  textArea.value = "";
  solver(dataTest.split("\n"));
});

function solver(data) {
  const coor = { xPos: 0, yPos: 0, aim: 0 };

  const instructionsAr = data.map((strItem) => {
    const item = strItem.split(" ");
    return { [item[0]]: item[1] };
  });

  function movement(instruction, coor) {
    const direction = Object.keys(instruction)[0];
    const value = +instruction[`${direction}`];

    if (direction === "forward") coor.xPos += value;
    if (direction === "down") coor.yPos += value;
    if (direction === "up") coor.yPos -= value;
  }

  instructionsAr.forEach((instruction) => movement(instruction, coor));

  console.log("result1:", coor.xPos * coor.yPos);

  /////////////////////////////////////////////////
  coor.xPos = coor.yPos = 0;

  function movementAim(instruction, coor) {
    const direction = Object.keys(instruction)[0];
    const value = +instruction[`${direction}`];

    if (direction === "forward") {
      coor.xPos += value;
      coor.yPos += value * coor.aim;
    }
    if (direction === "down") {
      coor.aim += value;
    }
    if (direction === "up") {
      coor.aim -= value;
    }
  }
  instructionsAr.forEach((instruction) => movementAim(instruction, coor));

  console.log("result2:", coor.xPos * coor.yPos);
}
