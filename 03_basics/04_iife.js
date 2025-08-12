// Immediatly Invoked Function Expression (IIFE)

(function chai() {
    //name IIFE
    console.log(`DB CONNECTED`);
})(); // TWO IIFE AKE SATH LIKHEGE TAB LAST ; YAHI LINE PE 

( (name) => { //PARAMETER PASS
    //UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
 } )('sonu')