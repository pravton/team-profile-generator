const Manager = require('../lib/Manager');

test('creates and employee object', () => {
    const manager = new Manager('Jane', 205, 'hello@email.com',123456789);

    expect(manager.name).toBe('Jane');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toMatch('@');
    expect(manager.email).toMatch('.');
    expect(manager.office).toEqual(expect.any(Number));
});