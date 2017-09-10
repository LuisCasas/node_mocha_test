const expect = require('expect');

describe('App', () => {
    it('should call  the spy', () => {
        var spy = expect.createSpy;
        spy();
        expect(spy).toHaveBeenCalled();
    });
});