const Employee = require('../lib/Employee');

test('creates an employee object and check the name', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.name).toBe('Jane');
    expect(employee.name).toEqual(expect.any(String));
});

test('creates an employee object and check the id', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.id).toEqual(expect.any(Number));
    
});

test('creates an employee object and check the email', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toMatch('@');
    expect(employee.email).toMatch('.');
});

