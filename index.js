const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = [];

// prompt to collects roles from user
function employeeInformation() {
    inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to input",
        name: "name",
        choices: ["Manager", "Engineer", "Intern", "Show Summary"],
    }, ]).then(val => {
        if (val.name === "Manager") {
            managerInformation();
        } else if (val.name === "Engineer") {
            engineerInformation()
        } else if (val.name === "Intern") {
            internInformation();
        } else if (val.name === "Show Summary") {
            makeHTML();
        };
    });
};

employeeInformation();

// prompt to collect manager information
function managerInformation() {
    return inquirer.prompt([
        {
        type: "input",
        message: "what is your manager's name?",
        name: "name"
        },
        {
            type: "input",
            message: "What is your manager's id",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your manager's office number",
            name: "number",
        },
    ]).then(function() {
        employeeInformation()
    })
}; 

// prompt to collect engineer information
function engineerInformation() {
    return inquirer.prompt([{
            type: "input",
            message: "what is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's ID",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username",
            name: "GitHub",
        },
    ]).then(function () {
        employeeInformation()
    })
}; 


// prompt to collect intern information
function internInformation() {
    return inquirer.prompt([{
            type: "input",
            message: "what is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's ID",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school",
            name: "school",
        },
    ]).then(function () {
        employeeInformation()
    })
}; 