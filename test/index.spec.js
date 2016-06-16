const chai = require('chai');
const path = require('path');

const expect = chai.expect;

const parser = require(path.join(__dirname, '../src', 'parser'));

describe('Parser', () => {

    describe('#test', () => {
        it('returns right result', () => {
            const ret = parser.test();
            expect(ret).to.equal(1);
        });
    });
});