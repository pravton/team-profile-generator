const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object and check the name', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');
    expect(engineer.name).toBe('Jane');
    expect(engineer.name).toEqual(expect.any(String));
    
});
test('creates an engineer object and check the id', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.id).toEqual(expect.any(Number));  
});

test('creates an engineer object and check the email', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toMatch('@');
    expect(engineer.email).toMatch('.');
    
});
test('creates an engineer object and check the github username', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.github).toEqual(expect.any(String));
    
});

test('get the correct role of the employee', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com');
    const role = 'Engineer';

    expect(engineer.role).toEqual(role);
});