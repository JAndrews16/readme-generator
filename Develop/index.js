//const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
        // {
        //     type: "input",
        //     name: "contents",
        //     message: "List out the table of contents, separated by periods(.)"
        // },
        {
            type: "input",
            name: "installation",
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
    ]);
}

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
    ${installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    ${data.license}
    
    ## Contributors
    ${data.contributors}
    
    ## Tests
    ${data.test}`;
    
    fs.writeFile(fileName, readMeInfo, "utf8");
}

async function init() {
    console.log("Let's make a README!")
    try {
        const data = await questionsPrompt();
        
        writeToFile("README.md", data);

        //await fs.writeFileAsync("README.md", readMeInfo, "utf8");
        console.log("Your README is complete!");
    } catch(error) {
        console.log(error);
    }
}

init();
