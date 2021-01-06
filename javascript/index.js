
document.addEventListener("DOMContentLoaded", nameAndLyrics);
document.getElementsByClassName("songs-titles").placeholder="The Unforgiven II";

var songs = [
    {title:"Nothing Else Matters", lyrics:"So close, no matter how far \r Couldn't be much more from the heart \r Forever trusting who we are \r And nothing else matters \r \r Never opened myself this way \r Life is ours, we live it our way \r All these words I don't just say \r And nothing else matters \r \r Trust I seek and I find in you \r Every day for us something new \r Open mind for a different view \r And nothing else matters \r \r Never cared for what they do \r Never cared for what they know \r But I know \r \r So close, no matter how far \r Couldn't be much more from the heart \r Forever trusting who we are \r And nothing else matters \r \r Never cared for what they do \r Never cared for what they know \r But I know \r \r I never opened myself this way \r Life is ours, we live it our way \r All these words I don't just say \r And nothing else matters \r \r Trust I seek and I find in you \r Every day for us, something new \r Open mind for a different view \r And nothing else matters \r \r Never cared for what they say \r Never cared for games they play \r Never cared for what they do \r Never cared for what they know \r And I know, yeah! \r \r So close, no matter how far \r Couldn't be much more from the heart \r Forever trusting who we are \r No, nothing else matters \r" },
    {title:"Enter Sandman", lyrics:"Say your prayers little one \r Don't forget, my son \r To include everyone \r Tuck you in, warm within \r Keep you free from sin \r 'Till the sandman he comes \r Sleep with one eye open \r Gripping your pillow tight \r \r Exit, light \r Enter, night \r Take my hand \r We're off to never-never land \r \r Somethings wrong, shut the light \r Heavy thoughts tonight \r And they aren't of Snow White \r Dreams of war, dreams of liars \r Dreams of dragon's fire \r And of things that will bite \r Sleep with one eye open \r Gripping your pillow tight \r \r Exit, light \r Enter, night \r Take my hand \r We're off to never-never land \r \r Now I lay me down to sleep \r Now I lay me down to sleep \r I pray the Lord my soul to keep \r I pray the Lord my soul to keep \r If I die before I wake \r If I die before I wake \r I pray the lord my soul to take \r I pray the lord my soul to take \r \r Hush little baby, don't say a word \r And never mind that noise you heard \r It's just the beasts under your bed \r In your closet, in your head \r \r Exit, light \r Enter, night \r Grain of sand \r \r Exit, light \r Enter, night \r Take my hand \r We're off to never-never land \r \r Yeah! \r \r We're off to never-never land \r Take my hand \r We're off to never-never land \r Take my hand"}, 
    {title:"The Unforgiven II", lyrics:"Lay beside me and tell me what they've done \r And speak the words I wanna hear to make my demons run \r The door is locked now but it's open if you're true \r If you can understand the me then I can understand the you \r \r Lay beside me, under wicked sky \r Through black of day, dark of night, we share this, paralyzed \r The door cracks open but there's no sun shining through \r Black heart scarring darker still but there's no sun shining through \r No there's no sun shining through, no there's no sun shining \r \r What I've felt, what I've known \r Turn the pages, turn the stone \r Behind the door, should I open it for you? \r \r Yeah, what I've felt, what I've known \r Sick and tired, I stand alone \r Could you be there \r 'Cause I'm the one who waits for you \r Or are you unforgiven too? \r \r Come lay beside me, this won't hurt I swear \r She loves me not, she loves me still but she'll never love again \r She lay beside me but she'll be there when I'm gone \r Black hearts scarring darker still, yes she'll be there when I'm gone \r Yes she'll be there when I'm gone, dead sure she'll be there? \r \r What I've felt, what I've known \r Turn the pages, turn the stone \r Behind the door, should I open it for you? \r \r Yeah, what I've felt, what I've known \r Sick and tired, I stand alone \r Could you be there \r 'Cause I'm the one who waits for you \r Or are you unforgiven too? \r \r Lay beside me, tell me what I've done \r The door is closed so are your eyes \r But now I see the sun, now I see the sun \r \r Yes now I see it \r What I've felt, what I've known \r Turn the pages, turn the stone \r Behind the door, should I open it for you \r \r Yeah, what I've felt, what I've known \r So sick and tired, I stand alone \r Could you be there \r 'Cause I'm the one who waits \r The one who waits for you \r \r Oh, what I've felt, what I've known \r Turn the pages, turn the stone \r Behind the door, should I open it for you? (so I dub thee unforgiven) \r \r Oh, what I've felt \r Oh, what I've known \r I'll take this key and I'll bury it in you \r Because you're unforgiven too \r \r Never free, never me \r 'Cause you're unforgiven too, oh oh" },
]
 

function nameAndLyrics (){
    var url = document.URL;
    if (url === "file:///C:/code/metallicon/index.html"){
        alert("Main Page");
    }
    else if (url === "file:///C:/code/metallicon/songs.html"){
        alert("Songs Page");
    }
    else if (url === "file:///C:/code/metallicon/nothingelse.html"){
        alert(songs[0].lyrics);
    }
    else if (url === "file:///C:/code/metallicon/entersandman.html"){
        alert(songs[1].lyrics);
    }
    else if (url === "file:///C:/code/metallicon/unforgiven.html"){
        alert(songs[2].lyrics);
    }
}










// function myFunctionIndex(){ alert (songs[0].lyrics)};

// function myFunctionSongs(){
//     alert ("Page name: <Songs>");
// };
// function myFunctionSandman(){
//     alert ("Page name: <Enter Sandman>");
// };
// function myFunctionNothingElse(){
//     alert ("Page name: <Nothing Else Matters>");
// };
// function myFunctionUnforgiven(){
//     alert ("Page name: <The Unforgiven II>");
// };


// var greeting = "hello" + " " + person.FirstName + " " + person.LastName + "!";
// var easierGreeting = `Hello ${person.FirstName} ${person.LastName}!`
