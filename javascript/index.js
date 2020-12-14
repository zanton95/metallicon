let bdy = document.getElementById(".indexalert");
let bdyy = document.getElementById(".songsalert");

window.onload=function(){
    myFunction('indexpage');
    };


    if ('indexpage') {
        alert("mainpage");
    }
    
    window.onload=function(){
        myFunction2('songspage');
        };

    if ('songspage') {
        alert("Hello! I am an alert box!!");
    }

bdy.addEventListener("load", myFunction);
bdyy.addEventListener("load", myFunction2);

