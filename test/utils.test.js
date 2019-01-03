const expect = require('expect');
const utils = require('../src/utils');

it('should add two numbers', () => {
    let rlt = utils.add(11, 22);
    expect(rlt).toBe(33);
});
