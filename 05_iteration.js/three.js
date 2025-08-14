// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello world"
 for( const greet of greeting) {
    // console.log(`Each char is ${greet}`)
 }

 //Maps

 const map = new Map()
 map.set('IN',"India")
 map.set('USA',"United States of America")
 map.set('FR',"France")
 map.set('IN',"India")

 console.log(map);

 for (const [key, value] of map) {    //keys lene pe value alag alag hojayge .
    console.log(key, ':-',value);
 }

 const myObject = {
    'game1' : 'NSF',
    'game2' : 'Spiderman'
 }


//  for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
//  }



 