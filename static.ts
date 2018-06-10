class User {
    name: string;
    static count: number = 0;

    constructor(name: string) {
        this.name = name;
        User.count++;
    }

    sayHi(): void {
        console.log("hi i am" + this.name);
    }

    static showDescription(): void {
        console.log("this class is about users");
    }

}

var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();



