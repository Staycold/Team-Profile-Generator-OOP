const Engineer = require("../Employees/Engineer.js")





it("should return Engineer name", () => {
    const obj = new Engineer("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.name).toEqual("Joe");
  });

  
it("should return Engineer id", () => {
    const obj = new Engineer("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.id).toEqual(3);
  });

  
it("should return Engineer email", () => {
    const obj = new Engineer("Joe", 3, "Joe@gmail.com" , "cold");

    expect(obj.email).toEqual("Joe@gmail.com");
  });

it("should return Engineer github", () => {
    const obj = new Engineer("Joe", 3, "Joe@gmail.com" , 'cold');

    expect(obj.github).toEqual("cold");
  });