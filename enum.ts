// 列挙型
// Signal

enum Signal {
    Red = 0,
    Blue = 1,
    Yellow = 2
}
enum Signal {
    Green = 5
}

var result : Signal;

// if (result == Signal.Yellow) { ... }

console.log(Signal.Yellow); //Yellow
console.log(Signal[2]); //Yellow
console.log(Signal.Green); //5
console.log(Signal[5]); //Green