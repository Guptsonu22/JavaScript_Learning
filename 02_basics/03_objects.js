// singleton
// object.create

// objects literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Sonu",
    "full name" : "Sonu kumar",
    [mySym] : "mykey1",
    age : 22,
    location : "gaya",
    email : "sonugupta41109@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser.age)
// console.log(JsUser.location)
// console.log(JsUser.email)
// console.log(JsUser.isLoggedIn)
// console.log(JsUser.lastLoginDays)

JsUser.email = "sonu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sonu@microsoft.com"
// console.log (JSUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());