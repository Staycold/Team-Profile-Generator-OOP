const Manager = require("../Employees/Manager.js")





it("should return manager name", () => {
    const obj = new Manager("Joe", 3, "Joe@gmail.com" , 1);

    expect(obj.name).toEqual("Joe");
  });

  
it("should return manager id", () => {
    const obj = new Manager("Joe", 3, "Joe@gmail.com" , 1);

    expect(obj.id).toEqual(3);
  });

  
it("should return manager email", () => {
    const obj = new Manager("Joe", 3, "Joe@gmail.com" , 1);

    expect(obj.email).toEqual("Joe@gmail.com");
  });

it("should return manager office number", () => {
    const obj = new Manager("Joe", 3, "Joe@gmail.com" , 1);

    expect(obj.officeNumber).toEqual(1);
  });