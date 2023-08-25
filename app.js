var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result: ".concat(num));
};
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
