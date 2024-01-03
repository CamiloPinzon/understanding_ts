"use strict";
//  ----- enum -----  //
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMINISTRATOR";
    Role["READ_ONLY"] = "READ ONLY USER";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
//  ----- objects -----  //
const person = {
    name: "Camilo",
    age: 38,
    hobbies: ["sports", "Cooking"],
    role: [2, Role.AUTHOR], //tuple
};
//  ----- arrays -----  //
let favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (const hobie of person.hobbies) {
    console.log(hobie.toUpperCase());
}
//# sourceMappingURL=obj-arr-tpl-enm-types.js.map