console.log("Advent of code solver day3");

const form = document.querySelector(".form");
const textArea = document.querySelector("textarea");

let rawData = undefined;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  rawData = textArea.value;
  textArea.value = "";

  const testData = `00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`;

  // solver(testData);
  solver(rawData);
});

function solver(rawData) {
  const data = rawData.split("\n").map((elem) => elem.trim());
  const gammaRate = [];
  const maxPos = data[0].length;
  const halfList = data.length / 2;

  console.log(data);
  console.log(`maxPos: ${maxPos}`);

  for (let i = 0; i < maxPos; i++) {
    let oneCount = 0;
    data.forEach((item) => {
      if (item[i] === "1") oneCount++;
    });
    if (oneCount >= halfList) gammaRate.push(1);
    else gammaRate.push(0);
  }
  const epsilonRate = gammaRate.map((digit) => Math.abs(digit - 1));

  const powerConsumption =
    gammaRate
      .reverse()
      .reduce((gamma, value, i) => (gamma += value * 2 ** i), 0) *
    epsilonRate
      .reverse()
      .reduce((epsilon, value, i) => (epsilon += value * 2 ** i), 0);

  console.log("part1: ", powerConsumption);
  console.log("***********************\n");

  let oxygen = [...data];

  // Loop for all the positions of the binary numbers
  for (let i = 0; i < maxPos; i++) {
    let oneCount = 0;
    if (oxygen.length === 1) break;

    oxygen.forEach((item) => {
      if (item[i] === "1") oneCount++;
    });
    oxygen =
      oneCount >= oxygen.length / 2
        ? oxygen.filter((num) => num[i] === "1")
        : oxygen.filter((num) => num[i] === "0");
  }

  let co2 = [...data];
  for (let i = 0; i < maxPos; i++) {
    let oneCount = 0;
    if (co2.length === 1) break;
    co2.forEach((item) => {
      if (item[i] === "1") oneCount++;
    });
    co2 =
      oneCount >= co2.length / 2
        ? co2.filter((num) => num[i] === "0")
        : co2.filter((num) => num[i] === "1");
    console.log(co2);
  }
  console.log(data);
  console.log(oxygen);
  console.log(co2);

  const lifeSupport =
    oxygen[0]
      .split("")
      .reverse()
      .reduce((o2, value, i) => (o2 += value * 2 ** i), 0) *
    co2[0]
      .split("")
      .reverse()
      .reduce((c, value, i) => (c += value * 2 ** i), 0);

  console.log("part2: ", lifeSupport);
  console.log("***********************\n");
}
