"use strict";
function addFn(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${phrase} ${result}`);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResultFn = true;
const resultPhrase = "Result is:";
addFn(number1, number2, printResultFn, resultPhrase);
//# sourceMappingURL=types.basics.js.map