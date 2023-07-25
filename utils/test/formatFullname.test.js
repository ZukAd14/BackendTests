const { describe } = require('mocha');
const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');

describe('FormatFullname', () => {
    it('should return an error if "fullname" is empty', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return an error if "fullname" is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });
    it('should return an error if "fullname" contain more or less than two words', () => {
        expect(formatFullname('John doe max')).to.equal('Error');
        expect(formatFullname('Marco')).to.equal('Error');
    })
});