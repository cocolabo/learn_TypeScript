// 関数
// 返り値がない関数
// function() :void
// function add(a: number ,b?: number = 10): number {
function add(a: number ,b: number = 10): number {
    return a + b;

}
console.log(add(5))
console.log(add(5, 3));

/*
var add2 = function(a: number ,b: number = 10): number {
    return a + b;
}
*/
// var add2 = (a: number ,b: number = 10): number => {
//     return a + b;
// }
var add2 = (a: number ,b: number = 10): number => a + b;

console.log(add2(5, 4));

// 関数のオーバーロード
// 引数や戻り値が異なる、同じ名前の関数を宣言することができる
// この組み合わせをシグネチャとよぶ
function add3(a: number, b:number): number;
function add3(a: string, b:string): string;
function add3(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}

console.log(add3(6, 7));
console.log(add3("hello", "world"));
// console.log(add3("hello", 3)); // error
