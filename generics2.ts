// Generics

interface Result {
    a: number;
    b: number;
}

interface FinalResult {
    a: number;
    b: number;
    c: string;
}

class MyData<T extends Result>{
    constructor(public value: T){}

    getArray(): T[] {
        return[this.value,this.value,this.value];
    }
}

var v1 = new MyData<FinalResult>({a: 32, b: 16, c:"hello"});
console.log(v1.getArray());
