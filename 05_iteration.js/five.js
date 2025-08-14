const coding = ["js", "rb", "py", "java" , "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     consloe.log(item);
// })

function printMe(item) {
    console.log(item);
} 

// coding.forEach(printMe)

// coding.forEach( (item, index,arr) => {
//     console.log(item,index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
     {
        languageName: "Cpp",
        languageFileName: "c++"
    },
     {
        languageName: "Java",
        languageFileName: "J"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})