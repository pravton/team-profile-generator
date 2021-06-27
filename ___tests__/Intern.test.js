const Intern = require('../lib/Intern');

test('creates an intern object and check the name', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.getName()).toEqual('Jane');
});

test('creates an intern object and check the id', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.getId()).toEqual(205);
});

test('creates an intern object and check the email', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toMatch('@');
    expect(intern.email).toMatch('.');
    expect(intern.getEmail()).toEqual('hello@email.com');
});

test('creates an intern object and check the school', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual('University of Toronto');
});

test('get the correct role of the employee', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com');

    expect(intern.getRole()).toEqual('Intern');
});