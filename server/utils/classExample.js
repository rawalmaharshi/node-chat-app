class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getUserDescripton () {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

var me = new Person('Maharshi', 12);
// console.log('this.name', me.name);
// console.log('this.age', me.age);

var desc = me.getUserDescripton();
console.log(desc);
