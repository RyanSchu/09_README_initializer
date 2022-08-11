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
    },
  ])
  .then((response) =>
    createREADME(response)
  );

function createREADME(input) {
    const textArray = processInput(input)
    for (el in textArray) {
        fs.append(el,target)
    }
}

function processInput(input) {
    let title = getTitle(input)
    let desc = getDescription(input)
    let toc = makeTOC(input)
    let inst = getInstall(input)
    let use = getUse(input)
    let lic = license(input)
    let cont = getContributing(input)
    let test = getTests(input)
    let question = getQuestion(input)
    return [title,desc,toc,inst,use,lic,cont,test,question]
}

