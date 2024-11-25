// Immediate Invoked Function Expression (IIFE)


( function cross() {
    //Named IIFE
    console.log(`DB CONNECTED`)
    
}) ();

( (name) => {
    console.log(`DB CONNECTED , ${name}`)
    
})("Bhuvi");

