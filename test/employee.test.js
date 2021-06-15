const Employee = require("../Employees/Employee.js")





it("should return Employee name", () => {
    const obj = new Employee("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.name).toEqual("Joe");
  });

  
it("should return Employee id", () => {
    const obj = new Employee("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.id).toEqual(3);
  });

  
it("should return Employee email", () => {
    const obj = new Employee("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.email).toEqual("Joe@gmail.com");
  });

