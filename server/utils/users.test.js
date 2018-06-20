const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Ninjas'
        },{
            id: '2',
            name: 'Jen',
            room: 'Ninjas 2'
        },{
            id: '3',
            name: 'Jules',
            room: 'Ninjas'
        }];
    });

    it('should add new user', () => {
        var new_users = new Users();
        var user = {
            id: '123',
            name: 'Maharshi',
            room: 'Ninjas'
        };
        var resUser = new_users.addUser(user.id, user.name, user.room);

        expect(new_users.users).toEqual([user]);
    });

    it('should return names for room Ninjas', () => {
        var userList = users.getUserList('Ninjas');

        expect(userList).toEqual(['Mike', 'Jules']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '132';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });
});
