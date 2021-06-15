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


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }
    
    getRole = () => {return "Manager"};
    getOfficeNuber = () => {return this.officeNumber};
}

class Engineer extends Employee{
  constructor(name, id, email, github){
      super(name, id, email)
    this.github = github;
  
    getRole = () => {return "Engineer"};
    getGithub = () => { return this.github}
        }
    
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
       
        this.getRole = () => { return "Intern"}
        this.getSchool = () => {return this.school}
        }
}

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


module.exports = {Intern, Engineer, Manager, Employee}



