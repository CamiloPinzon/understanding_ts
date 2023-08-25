//  ----- enum -----  //
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMINISTRATOR";
    Role["READ_ONLY"] = "READ ONLY USER";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
//  ----- objects -----  //
var person = {
    name: "Camilo",
    age: 38,
    hobbies: ["sports", "Cooking"],
    role: [2, Role.AUTHOR]
};
//  ----- arrays -----  //
var favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobie = _a[_i];
    console.log(hobie.toUpperCase());
}
