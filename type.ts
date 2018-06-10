// TypeScriptは静的型付け
/*
 - number
 - string
 - boolean
 - any
 */
// var i: number = 10;
var i = 10; // i: number => 型推論
console.log(i);

var x // var x: any
x = 10;
console.log(x);
x = "hello";
console.log(x);

var results: number[];
results = [10, 5, 3];

console.log(results);