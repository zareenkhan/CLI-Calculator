#! /usr/bin/env node
import inquirer from "inquirer";
async function askQuestion() {
    var answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "which type of calculation you want to perform?\n",
            choices: ["Addition", "Substration", "Devision", "Multiplication"],
        },
        { type: "Number", name: "Num1", message: "Enter Number 1" },
        { type: "Number", name: "Num2", message: "Enter Number 2" },
    ]);
    if (answer.operator == "Addition") {
        console.log(`${answer.Num1} + ${answer.Num2}=${answer.Num1 + answer.Num2}`);
    }
    else if (answer.operator == "Substration") {
        console.log(`${answer.Num1}-${answer.Num2}=${answer.Num1 - answer.Num2}`);
    }
    else if (answer.operator == "Devision") {
        console.log(`${answer.Num1}/${answer.Num2}=${answer.Num1 / answer.Num2}`);
    }
    else if (answer.operator == "Multiplication") {
        console.log(`${answer.Num1}*${answer.Num2}=${answer.Num1 * answer.Num2}`);
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue? Press Y or N",
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "Yes");
}
startAgain();
