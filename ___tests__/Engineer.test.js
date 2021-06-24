const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates and employee object', () => {
    const engineer = new Engineer('Jane', 205, 'hello@email.com', 'engineerGitHub');

    expect(engineer.name).toBe('Jane');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toMatch('@');
    expect(engineer.email).toMatch('.');
    expect(engineer.github).toEqual(expect.any(String));
});