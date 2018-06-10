// Interface
interface Result {
    a: number,
    b: number
}

function getTotal(result: Result) {
    return result.a + result.b;
}

var result = {
    a: 32,
    b: 58,
    c: "hello" //// 構造的部分型で無視される
};

console.log(getTotal(result));