console.log("Advent of code solver");

const form = document.querySelector(".form");
const textArea = document.querySelector("textarea");

let rawData = undefined;
const testData = `199
200
208
210
200
207
240
269
260
263`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  rawData = textArea.value;
  textArea.value = "";
  solver(rawData);
});

function solver(data) {
  part1(testData);
  part2(testData);
}

function part1(data) {
  const dataArray = data.split("\n");
  const increments = dataArray.reduce((increment, measurement, i, list) => {
    if (!list[i + 1]) return increment;
    increment += measurement < list[i + 1] ? 1 : 0;
    return increment;
  }, 0);
  console.log(`Part1 ${increments}`);
}

function part2(data) {
  const dataArray = data.split("\n").map((it) => +it);
  console.log(dataArray);
  const sumValues = dataArray
    .reduce((result, _, i, list) => {
      // if (!list[i + 2]) return;
      const sum = list[i] + list[i + 1] + list[i + 2];
      if (sum) result.push(sum);
      return result;
    }, [])
    .reduce((increment, measurement, i, list) => {
      if (!list[i + 1]) return increment;
      increment += measurement < list[i + 1] ? 1 : 0;
      return increment;
    }, 0);

  console.log(`part2 : ${sumValues}`);
}
