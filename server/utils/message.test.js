var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Rishi', text = 'Yaar kya karu kuch samajh nhi aa rha!';
        var response = generateMessage(from, text);

        expect(response.from).toBe(from);
        expect(response.text).toBe(text);
        expect(response.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Maharshi';
        var latitude = 1, longitude = 1;

        var res = generateLocationMessage(from, latitude, longitude);

        expect(res.from).toBe(from);
        expect(res.url).toEqual('https://www.google.com/maps?q=1,1');
    });
});
