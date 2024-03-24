#! /usr/bin/env node
// SHABANK this line is called 
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subraction", "multiplication", "division"],
  },
]);

//conditional statement
if (answer.operator === "addition") {
  console.log("your value is "+`${answer.firstNumber + answer.secondNumber}`);
}
else if(answer.operator === "subraction"){
  console.log("your value is "+`${answer.firstNumber - answer.secondNumber}`);
}
else if(answer.operator === "multilplication"){

  console.log("your value is "+`${answer.firstNumber * answer.secondNumber}`);
}
else if(answer.operator === "division"){
  console.log("your value is "+`${answer.firstNumber / answer.secondNumber}`);
}
else{
  console.log("please select valid operator");
}
console.log("calculator created");