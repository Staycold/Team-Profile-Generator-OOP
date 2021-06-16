// class Employee {
//     constructor(name, id, email,){
//     this.name=name;
//     this.id=id;
//     this.email=email;
//     }

//     getName = () => { return this.name};
//     getEmail = () => { return this.email};
//     getRole = () => {return "Employee"};

// }


// class Manager extends Employee{
//     constructor(name, id, email, officeNumber){
//     super(name, id, email)
//     this.officeNumber = officeNumber;
//     }
    
//     getRole = () => {return "Manager"};
//     getOfficeNuber = () => {return this.officeNumber};
// }

// class Engineer extends Employee{
//   constructor(name, id, email, github){
//       super(name, id, email)
//     this.github = github;
  
//     getRole = () => {return "Engineer"};
//     getGithub = () => { return this.github}
//         }
    
// }

// class Intern extends Employee{
//     constructor(name, id, email, school){
//         super(name, id, email)
//         this.school = school
       
//         this.getRole = () => { return "Intern"}
//         this.getSchool = () => {return this.school}
//         }
// }

// function hireEmployee(employee) {
//     switch (employee) {
//       case "manager":
//         return ``
//       case "engineer":
//         return ``
//       case "intern":
//         return ``
//         case "Done hiring":
//             return ``
//       default:
//         return "";
  
//     }
// }

// function hireManager (new Manager){
//     let manager = document.createElement('div')
//     manager.innerHTML = ``

// }


// let info = "";

// info = info + hireManager(new Manager(response.name, response.id, repsonse.email, response.officeNumber))
// info = info + hireManager(new Engineer(response.name, response.id, repsonse.email, response.github))
// info = info + (new Intern(response.name, response.id, repsonse.email, response.school))





const makeEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>💻Engineer👓</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <i class="bi bi-github"></i> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

const makeInternCard = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern📁</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

const makeManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager👔</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

module.exports=
   { makeEngineerCard,
    makeManagerCard,
    makeInternCard
}