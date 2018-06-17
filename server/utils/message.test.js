var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Rishi', text = 'Yaar kya karu kuch samajh nhi aa rha!';
        var response = generateMessage(from, text);

        expect(response.from).toBe(from);
        expect(response.text).toBe(text);
        expect(response.createdAt).toBeA('number');
    });
});
