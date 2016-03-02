import parser from '../src/parser';

var chai = require('chai');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

describe('parser', () => {
    describe('111', () => {
        it('test', () => {
            parser.parse('1+2').should.equal(3);
        });
    });
});