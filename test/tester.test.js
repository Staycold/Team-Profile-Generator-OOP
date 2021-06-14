const Engineer = require("../team.js")
const Intern = require("../Employees/Intern.js")
const Manager = require("../team.js")


it("should return intern name", () => {
    const obj = new Intern("Joe", 3, "Joe@gmail.com" , "TAMU");

    expect(obj.name).toEqual("Joe");
  });

  
it("should return intern id", () => {
    const obj = new Intern("Joe", 3, "Joe@gmail.com" , "TAMU");

    expect(obj.id).toEqual(3);
  });

  
it("should return intern email", () => {
    const obj = new Intern("Joe", 3, "Joe@gmail.com" , "TAMU");

    expect(obj.email).toEqual("Joe@gmail.com");
  });

it("should return intern school", () => {
    const obj = new Intern("Joe", 3, "Joe@gmail.com" , "TAMU");

    expect(obj.school).toEqual("TAMU");
  });