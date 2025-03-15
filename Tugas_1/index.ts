// Library Import
import * as readline from "node:readline/promises";

// Modules Import
import {
  areaOfRect,
  circleMeasurement,
  triangleAngleMeasurement,
  dateDifference,
  nameInitial,
} from "./modules";

import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const testedModules = await rl.question(
    `Enter module you would like to test!
    \n 1. Area of Reactangle
    \n 2. Circle Measurement
    \n 3. Triangle Angle
    \n 4. Date Differences
    \n 5. Name Initial
    \n I choose: `
  );
  const parsedTestedModules = parseInt(testedModules);

  switch (parsedTestedModules) {
    case 1:
      const length = parseInt(await rl.question("Enter length: "));
      const width = parseInt(await rl.question("Enter width: "));
      if (isNaN(length) || isNaN(width)) {
        console.log("Length or width you entered is invalid.");
        break;
      }
      const area = areaOfRect(length, width);
      console.log(`Area of Rectangle: ${area}`);
      break;

    case 2:
      const radius = parseInt(await rl.question("Enter radius: "));
      if (isNaN(radius)) {
        console.log("Radius you entered is invalid.");
        break;
      }
      const circle = circleMeasurement(radius);
      console.log(`Diameter: ${circle.diameter}`);
      console.log(`Circumference: ${circle.circumference}`);
      console.log(`Area: ${circle.area}`);
      break;

    case 3:
      const angleA = parseInt(await rl.question("Enter angle A: "));
      const angleB = parseInt(await rl.question("Enter angle B: "));
      if (isNaN(angleA) || isNaN(angleB)) {
        console.log("Angle you entered is invalid.");
        break;
      }
      const angle = triangleAngleMeasurement(angleA, angleB);
      console.log(`Angle: ${angle}`);
      break;

    case 4:
      const dateA = await rl.question("Enter date A: ");
      const dateB = await rl.question("Enter date B: ");
      const dateDiff = dateDifference(dateA, dateB);
      if (dateDiff === "Invalid Date") {
        console.log("Date you entered is invalid.");
        break;
      }
      console.log(`Date Difference: ${dateDiff}`);
      break;

    case 5:
      const name = await rl.question("Enter your name: ");
      const initial = nameInitial(name);
      console.log(`Initial: ${initial}`);
      break;

    default:
      console.error("Invalid input. Please enter a number between 1 and 5.");
      break;
  }

  rl.close();
}

main();
