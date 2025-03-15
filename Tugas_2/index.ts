// Library Import
import * as readline from "node:readline/promises";

// Modules Import
import {
  temperatureConvertion,
  centimeterToKilometer,
  palindromeChecker,
  isEvenChecker,
  removeString,
} from "./modules";

import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  const testedModules = await rl.question(
    `Enter module you would like to test!
    \n 1. Temperature Convertion
    \n 2. Centimeter to Kilometer
    \n 3. Palindrome Checker
    \n 4. Even Checker
    \n 5. Remove String
    \n I choose: `
  );
  const parsedTestedModules = parseInt(testedModules);

  switch (parsedTestedModules) {
    case 1:
      const fahrenheit = parseInt(
        await rl.question("Enter temperature in fahrenheit: ")
      );
      if (isNaN(fahrenheit)) {
        console.log("Temperature you entered is invalid.");
        break;
      }
      const celcius = temperatureConvertion(fahrenheit);
      console.log(`Celcius: ${celcius}`);
      break;

    case 2:
      const centimeter = parseInt(await rl.question("Enter centimeter: "));
      if (isNaN(centimeter)) {
        console.log("Centimeter you entered is invalid.");
        break;
      }
      const kilometer = centimeterToKilometer(centimeter);
      console.log(`Kilometer: ${kilometer}`);
      break;

    case 3:
      const word = await rl.question("Enter word you want to check: ");
      const isPalindrome = palindromeChecker(word);
      console.log(`${word} ${isPalindrome ? "is" : "is not"} a palindrome`);
      break;

    case 4:
      const value = await rl.question("Enter value: ");
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue)) {
        console.log("Value you entered is invalid.");
        break;
      }
      const isEven = isEvenChecker(parsedValue);
      console.log(`Is the value even: ${isEven}`);
      break;

    case 5:
      const inputString = await rl.question("Enter the string: ");
      const removedString = await rl.question(
        "Enter the string you want to remove: "
      );
      const result = removeString(inputString, removedString);
      console.log(`New string: ${result}`);
      break;

    default:
      console.error("Invalid input. Please enter a number between 1 and 5.");
      break;
  }

  rl.close();
}

main();
