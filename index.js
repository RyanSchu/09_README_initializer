const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'use',
    },
    {
        type: 'input',
        message: 'License:',
        name: 'lic',
    },
    {
        type: 'input',
        message: 'Contributions:',
        name: 'cont',
    },
    {
        type: 'input',
        message: 'tests:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Github:',
        name: 'git',
    }
  ])
  .then((response) =>
    createREADME(response)
  );

function createREADME(input) {
    const textArray = processInput(input)
    let stream = fs.createWriteStream("./append.md", {flags:'a'});
    textArray.forEach( (index) =>{stream.write(index + "\n");});
    stream.end();
}

function processInput(input) {
    let title = getTitle(input)
    let desc = getDescription(input)
    // let toc = makeTOC(input)
    let inst = getInstall(input)
    let use = getUse(input)
    // let lic = license(input)
    let cont = getContributing(input)
    let test = getTests(input)
    let question = getQuestion(input)
    return [title,desc,inst,use,cont,test,question]
    // return [title,desc,toc,inst,use,lic,cont,test,question]
}

function getTitle(input) {
    let dfault = "# Title"
    if (input.title == '') return dfault
    return input.title
}

function getDescription(input) {
    let dfault = "## Description"
    if (input.desc == '') return dfault
    return input.desc
}

function getInstall(input) {
    let dfault = "## Install"
    if (input.install == '') return dfault
    return input.install
}

function getUse(input) {
    let dfault = "## Useage"
    if (input.use == '') return dfault
    return input.use
}

function getContributing(input) {
    let dfault = "## Contribution"
    if (input.cont == '') return dfault
    return input.cont
}

function getTests(input) {
    let dfault = "## Tests"
    if (input.test == '') return dfault
    return input.test
}

function getQuestion(input) {
    let dfault = "## Questions"
    if (input.git == '') return dfault
    return input.git
}