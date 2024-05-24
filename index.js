#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright(">>>>>>>>>>>>>>>>>>>===============>>>>>>>>>>>>>>>>>>>>\n\t=============WELCOM TO MY PROJECTS==========\t\n>>>>>>>>>>>>>>>>>===================>>>>>>>>>>>>>>>>>"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("\t\nEnter your sentence to count the word"),
    }
]);
const words = answer.sentence.trim().split(" ");
//print the word in arry
console.log(chalk.yellowBright([words]));
//print the word count in the sentence
console.log(chalk.greenBright `\n\tyour sentence word count is ${words.length}\t\n`);
console.log(chalk.red("\n\t===========THANK YOU=========\t\n"));
console.log("~".repeat(50));
