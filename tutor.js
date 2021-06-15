const { write } = require("fs");

const fs = require("fs");

let info = "";

class Employee {
    constructor(name, id, email,){
    this.name=name;
    this.id=id;
    this.email=email;
    }

   getName = () => { return this.name};
    getEmail = () => { return this.email};
    getRole = () => {return "Employee"};

}


info = info + internTemplate(new Employee("Jane Doe", 2, "janedoe@gmail.com"));

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

function internTemplate(data) {
    return `
    <div>
    
    <h1>${data.name}</h1>
    <p>${data.id}</p>
    <p>${data.email}</p>
    
    </div>
    
    `
}

console.log(info);
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('success')
    }
    )
}

writeToFile("tutor.html", htmlTemplate);











// function internTemplate(data){
//     return `
//     <div>
    
//     <h1>${data.name}</h1>
//     <p>${data.id}</p>
//     <p>${data.email}</p>
    
//     </div>
    
//     `
// }

// info = info + internTemplate(data);

// let info = "";
// const htmlTemplate = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     ${info}
// </body>
// </html>`

// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}`,data,err=>{
//   err?console.log(err):console.log('success')
//     }
//     )}
  
  
//   function init() {
  
  
//     inquirer.prompt(questions)
//   .then((response) => {
//     console.log(response)
//   const result= writeToFile((response), `${response.title}.html`,result)
//   })
//   }
  

//   init();