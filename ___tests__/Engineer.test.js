const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object and check the name', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual('Jane');
    
});
test('creates an engineer object and check the id', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.id).toEqual(expect.any(Number));  
    expect(engineer.getId()).toEqual(205);
});

test('creates an engineer object and check the email', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toMatch('@');
    expect(engineer.email).toMatch('.');
    expect(engineer.getEmail()).toEqual('hello@email.com');
    
});
test('creates an engineer object and check the github username', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual('engineerGitHub');
    
});

test('get the correct role of the employee', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com','engineerGitHub');

    expect(engineer.getRole()).toEqual('Engineer');
});