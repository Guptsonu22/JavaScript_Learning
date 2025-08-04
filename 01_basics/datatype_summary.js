const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId);

//  const bigNumber = 23543568756122n

 const heros = ["shaktiman","naagraj", "doga"]
  const user = {
    name: "Sonu",
    age: 22,
 }

 const myfunction = function() {
    console.log("Hello world");
 }

 console.log(typeof bigNumber);
 console.log(typeof outsideTemp);


 //**********************************//

 //STACK AND HEAP MEMORY

 //Stack, (Primitive), Heap(Non-Primitive)

 let myYoutubename = "sonukumardotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "sonu@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);

 