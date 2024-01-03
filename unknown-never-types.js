"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message, code };
};
generateError("An error has occured!", 205);
//# sourceMappingURL=unknown-never-types.js.map