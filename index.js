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
    let stream = fs.createWriteStream("./test/append.md", {flags:'a'});
    textArray.forEach( (index) =>{stream.write(index + "\n\n");});
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
    let dfault = "# Title\n"
    if (input.title == '') return dfault
    let clean = "# " + input.title
    return clean
}

function getDescription(input) {
    let dfault = "## Description\n"
    if (input.desc == '') return dfault
    let clean = dfault + input.desc 
    return clean
}

function getInstall(input) {
    let dfault = "## Install\n"
    if (input.install == '') return dfault
    let clean = dfault + input.install
    return clean
}

function getUse(input) {
    let dfault = "## Useage\n"
    if (input.use == '') return dfault
    let clean = dfault + input.use
    return clean
}

function getContributing(input) {
    let dfault = "## Contribution\n"
    if (input.cont == '') return dfault
    let clean = dfault + input.cont
    return clean
}

function getTests(input) {
    let dfault = "## Tests\n"
    if (input.test == '') return dfault
    let clean = dfault + input.test
    return clean
}

function getQuestion(input) {
    let dfault = "## Questions\n"
    if (input.git == '') return dfault
    let clean = dfault + input.git
    return clean
}

// license and table of contents are special cases