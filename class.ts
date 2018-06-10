// クラス
// アクセス修飾子
// public protected private
class User {
    // name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    // 上と同じ意味
    constructor(private _name: string) {
    }

    sayHi(): void {
        console.log("hi i am" + this._name);
    }

    get name(){
        return this._name;
    }

    set name(newValue: string){
        this._name = newValue;
    }


}

var tom = new User("Tom");

//./node_modules/.bin/tsc class.ts -t es5
console.log(tom.name);
tom.name = "Tom"
console.log(tom.name);
tom.sayHi();




