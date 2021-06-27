const Employee = require('../lib/Employee');

test('creates an employee object and check the name', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('Jane');
});

test('creates an employee object and check the id', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId()).toEqual(205);
    
});

test('creates an employee object and check the email', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toMatch('@');
    expect(employee.email).toMatch('.');
    expect(employee.getEmail()).toEqual('hello@email.com');
});

test('get the role of Employee', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.getRole()).toEqual('Employee');
});

