const expect = require('expect');
const utils = require('../src/utils');

it('should add two numbers I', () => {
    let rlt = utils.add(11, 22);
    expect(rlt).toBe(33);
});

it('should add two numbers II', () => {
    let rlt = utils.add(101, 0);
    expect(rlt).toBe(101);
});

it('should add two numbers III (failed case)', () => {
    let rlt = utils.add(1, 0);
    expect(rlt).toBe(10);
});