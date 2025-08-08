const class_friends = ["sonu","pal","yash"]
const fav_teacher = ["nehamam", "harjindermam","kushboomam"]

// class_friends.push(fav_teacher)

// console.log(class_friends);
// console.log(class_friends[3][1]);

// const allteacher = class_friends.concat(fav_teacher)
// console.log(allteacher);

// const all_new_teacher = [...class_friends, ...fav_teacher]

// console.log(all_new_teacher);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array  = another_array .flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Sonu"))
console.log(Array.from("Sonu"))
console.log(Array.from({name: "sonu"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

