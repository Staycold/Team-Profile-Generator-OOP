const inquirer = require('inquirer');
const fs = require("fs");
// this is the page wiht the class constructors
const team = require('./team.js')
// this is the page that holds the functions, and will create the elements
const hiring = require('./hiring.js')


const questions = [
    {
        type: 'input',
      message: 'What is the title of your company?',
      name: 'title',
    },
    {
        type: 'list',
        message: 'please hire an employee',
        name:'employee',
        choices: ['Manager', 'Engineer', 'Intern','Done Hiring']
      
      },
      {
        type: 'input',
        message: 'What is the assigned office number? ',
        name:'officeNumber',
        when: questions.employee == "Manager"
      
      },
      {
        type: 'input',
        message: 'What is their Github name? ',
        name:'gitHub',
        when: questions.employee == "Engineer"
      
      },
      {
        type: 'input',
        message: 'What school do they attend? ',
        name:'school',
        when: questions.employee == "Intern"
      
      },
      {
        type: 'list',
        message: 'would you like to hire another employee',
        name:'hireAgain',
        choices: ['Yes','No']
        
      },
      {
        type: 'list',
        message: 'please hire an employee',
        name:'employee',
        choices: ['Manager', 'Engineer', 'Intern','Done Hiring'],
        when: questions.hireAgain == "Yes"
      }



]

function internTemplate(data){
    return `
    <div>
    
    <h1>${data.name}</h1>
    <p>${data.id}</p>
    <p>${data.email}</p>
    
    </div>
    
    `
}

info = info + internTemplate(data);

let info = "";
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${info}
</body>
</html>`

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`,data,err=>{
  err?console.log(err):console.log('success')
    }
    )}
  
  
  function init() {
  
  
    inquirer.prompt(questions)
  .then((response) => {
    console.log(response)
  const result= writeToFile((response), `${response.title}.html`,result)
  })
  }
  

  init();