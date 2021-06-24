const Intern = require('../lib/Intern');

test('creates and employee object', () => {
    const intern = new Intern('Jane', 205, 'hello@email.com', 'University of Toronto');

    expect(intern.name).toBe('Jane');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toMatch('@');
    expect(intern.email).toMatch('.');
    expect(intern.school).toEqual(expect.any(String));
});