//const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function questionsPrompt() {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your repository?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your application."
    },
    {
        type: "input",
        name: "install",
        message: "Describe the installation process for this application."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage of you application."
    },
    {
        type: "input",
        name: "license",
        message: "Provide any license information"
    },
    {
        type: "input",
        name: "contributors",
        message: "List the contributors for this application."
    },
    {
        type: "input",
        name: "test",
        message: "Describe tests run for this application."
    },
    {
        type: "input",
        name: "questions",
        message: "Type in your gitHub username."
    }
])};

function writeToFile(fileName, data) {
    const readMeInfo = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- Installation
- Usage
- License
- Contributors
- Tests

##Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.test}`;

        fs.writeFile(fileName, readMeInfo, function(error){
            if(error) {
                throw error;
            } 
            console.log("Your ReadMe is complete!");
        });
}

async function init() {
    const questions = await questionsPrompt();

    writeToFile("README.md", questions);
}

init();