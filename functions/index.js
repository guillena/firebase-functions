const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    
    response.send("Hello only!");

});

exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    
    response.send("Hello 2!");

});

exports.helloWorldThird = functions.https.onRequest((request, response) => {
    
    response.send("Hello 3!");

});

exports.helloCoti = functions.https.onRequest((request, response) => {
    
    response.send({
        fulfillment_text: "hello Coti, como estas?"
    });

});

