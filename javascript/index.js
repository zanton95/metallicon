

var songs = [
    {title:"Enter Sandman", lyrics:"Say your prayers little one Don't forget, my son To include everyone Tuck you in, warm within Keep you free from sin 'Till the sandman he comes Sleep with one eye open Gripping your pillow tight Exit, light Enter, night Take my hand We're off to never-never land"}, 
    2,
]
 
var indexTest = document.getElementById("index-page");

console.log(20);

function myFunctionIndex(){ alert (songs[0].lyrics)};

function myFunctionSongs(){
    alert ("Page name: <Songs>");
};
function myFunctionSandman(){
    alert ("Page name: <Enter Sandman>");
};
function myFunctionNothingElse(){
    alert ("Page name: <Nothing Else Matters>");
};
function myFunctionUnforgiven(){
    alert ("Page name: <The Unforgiven II>");
};
console.log(21);

indexTest.addEventListener("load", function myFunctionIndex(){ alert (songs[0].lyrics)});

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

console.log(22);


// var person = {
// FirstName: `Anton`,
// LastName: `Zimin`,
// };

// var greeting = "hello" + " " + person.FirstName + " " + person.LastName + "!";
// var easierGreeting = `Hello ${person.FirstName} ${person.LastName}!`
// sadasdsd