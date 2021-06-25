const Intern = require('../lib/Intern');

test('creates an intern object and check the name', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.name).toBe('Jane');
    expect(intern.name).toEqual(expect.any(String));
});

test('creates an intern object and check the id', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.id).toEqual(expect.any(Number));
});

test('creates an intern object and check the email', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toMatch('@');
    expect(intern.email).toMatch('.');
});

test('creates an intern object and check the school', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.school).toEqual(expect.any(String));
});

test('get the correct role of the employee', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com');
    const role = 'Intern';

    expect(intern.role).toEqual(role);
});