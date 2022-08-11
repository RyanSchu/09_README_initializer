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
        type: 'list',
        message: 'License:',
        name: 'lic',
        choices: ['MIT','GPLv2','Apache','GPLv3','ISC','Unlicensed']
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
    {    
        type: 'input',
        message: 'Email:',
        name: 'email'
    }
  ])
  .then((response) =>
    createREADME(response)
  );

function createREADME(input) {
    const textArray = processInput(input)
    let stream = fs.createWriteStream("./test/README.md", {flags:'a'});
    textArray.forEach( (index) =>{stream.write(index + "\n\n");});
    stream.end();
}

function processInput(input) {
    let title = getTitle(input)
    let lic = getLicense(input)
    let desc = getDescription(input)
    let toc = makeTOC(input)
    let inst = getInstall(input)
    let use = getUse(input)

    let cont = getContributing(input)
    let test = getTests(input)
    let git = getGit(input)
    let email = getEmail(input)
    return [title,lic,toc,desc,inst,use,cont,test,git,email]
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
    let dfault = "## Installation\n"
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
    let dfault = "## Contributing\n"
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

function getGit(input) {
    let dfault = "## Questions\n"
    if (input.git == '') return dfault
    let clean = dfault +  "Github: [" + input.git + "](https://github.com/" + input.git + ")"
    return clean
}

function getEmail(input) {
    let dfault = ""
    if (input.email == '') return dfault
    let clean = dfault +  "For further questions please contact " + input.email
    return clean
}

// license and table of contents are special cases
function getLicense(input) {
    let badges = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                  '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
                  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                  '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
                  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
    let index = ['MIT','GPLv2','Apache','GPLv3','ISC','Unlicensed'].findIndex((i) => i === input.lic)
    
    let clean = badges[index]
    return clean
}

function makeTOC() {
   let toc = "## Table of Contents\n" +
            "- [Description](#description)\n\n" +
            "- [Installation](#installation)\n\n" +
            "- [Useage](#useage)\n\n" +
            "- [Contributing](#contributing)\n\n" +
            "- [Tests](#tests)\n\n" +
            "- [Contact](#questions)\n\n"
    return toc
}
