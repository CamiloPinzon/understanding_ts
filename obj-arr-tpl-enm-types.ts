//  ----- enum -----  //
enum Role {
  ADMIN = "ADMINISTRATOR",
  READ_ONLY = "READ ONLY USER",
  AUTHOR = "AUTHOR",
}

//  ----- objects -----  //
const person: {
  name: string;
  age: number;
  hobbies: string[]; //array
  role: [number, Role /*enum*/]; //tuple
} = {
  name: "Camilo",
  age: 38,
  hobbies: ["sports", "Cooking"], //array
  role: [2, Role.AUTHOR], //tuple
};

//  ----- arrays -----  //
let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobie of person.hobbies) {
  console.log(hobie.toUpperCase());
}
