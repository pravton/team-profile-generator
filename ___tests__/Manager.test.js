const Manager = require('../lib/Manager');

test('creates an employee object and check the name', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com',123456789);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.getName()).toEqual('Jane');
});

test('creates an employee object and check the id', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com',123456789);

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.getId()).toEqual(205);
});

test('creates an employee object and check the email', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com',123456789);

    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toMatch('@');
    expect(manager.email).toMatch('.');
    expect(manager.getEmail()).toEqual('hello@email.com');
});

test('creates an employee object and check the email', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com',123456789);

    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.getOffice()).toEqual(123456789);
});

test('get the correct role of the employee', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com');

    expect(manager.getRole()).toEqual('Manager');
});