const inquirer = require('inquirer');
const fs = require("fs");
const generateHtml =require('./generateHtml')


// These are the team members
const Intern = require("./Employees/Intern.js")
const Engineer = require("./Employees/Engineer.js")
const Manager = require("./Employees/Manager.js");


const teamMembers = [];



const addaWorker = () => {


  return inquirer.prompt ([
    
      {
         type: 'list',
         message: 'please hire an employee',
         name:'role',
         choices: ['Engineer', 'Intern','Done Hiring']
       
       },
       {
         type: 'input',
         message: `What is the employee's name ?`,
         name: 'name',
       },
       {
         type: 'input',
         message: 'Please enter and ID for the Employee',
         name: 'id',
       },
       {
         type: 'input',
         message: 'What is the email of the employee?',
         name: 'email',
       },
       {
         type: 'input',
         message: 'What is their Github name? ',
         name:'gitHub',
         when: (input) => input.role == "Engineer"
       
       },
       {
         type: 'input',
         message: 'What school do they attend? ',
         name:'school',
         when: (input) => input.role == "Intern"
       
       }
 ])

     .then(employeeAnswers => {
       console.log(employeeAnswers)
       let { name, id, email, role, gitHub, school} = employeeAnswers; 
 
     if (role === "Engineer") {
       let employee = new Engineer(name, id, email, gitHub);
 
       console.log(employee);
       teamMembers.push(employee); 
   } else if (role === "Intern") {
       let employee = new Intern(name, id, email, school);
 
      //  console.log(employee);
       teamMembers.push(employee); 
   }
 
  
 addMore()
  
 })
 
 };
 
function addMore(){
  inquirer.prompt([
    {
      type: 'list',
    message: 'Do you want to add another employee?',
    choices:['Yes','NO'],
    name: 'response',
  }
  ]).then(reponse=>{
    switch(reponse.response){
      case "Yes":
        addaWorker(); 
        break;

      case "NO":
        console.log('teammembers',teamMembers)

        
        const html= generateHtml(teamMembers)
       


          fs.writeFile(`index.html`,html,err=>{
        err?console.log(err):console.log('success')
          })
          

             break;

      default:
        break;
    }
  })
}

// Adding the manager
const addaManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: `What is the manager's name?`,
      name: 'managerName',
    },
    {
    type: 'input',
    message: 'Please choose and ID',
    name: 'managerId',
    },
    {
      type: 'input',
      message: 'What is the managers email?',
      name: 'managerEmail',
      },
      {
        type: 'input',
        message: 'Please choose an office number ',
        name: 'officeNumber',
        }
  ])
  .then(managerAnswers => {
    console.log(managerAnswers)

    const { managerName, managerId, managerEmail, officeNumber } = managerAnswers;
    const manager = new Manager(managerName, managerId, managerEmail, officeNumber)

    teamMembers.push(manager);

    addaWorker()

  })
}

// Adding the working class to the team. power to the people.
function init() {
  
  addaManager()
  }
  

  init();