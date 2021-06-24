const Employee = require('../lib/Employee');

test('creates and employee object', () => {
    const employee = new Employee('Jane', 205, 'hello@email.com');

    expect(employee.name).toBe('Jane');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toMatch('@');
    expect(employee.email).toMatch('.');
});