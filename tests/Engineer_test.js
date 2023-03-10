const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Mohamed";
    const employeeInstance = new Engineer("Mohamed", 2, "mohamedbarreh8@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Mohamed";
    const employeeInstance = new Engineer("James", 2, "mohamedbarreh8@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Mohamed", 2, "mohamedbarreh8@gmail.com", "Mohamed");
    expect(employeeInstance.getRole()).toBe(returnValue);
});