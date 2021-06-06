
/**
 * Lev general notes:
 *  - Put all the event listener registrations together so it's more clear what events you're listening too (all at the start of the code)
 *  - Do not add two different event listeners for the same event. You currently have two for the DOMContentLoaded. It's better that you control
 *    exactly the order of what happens when an event occurs rather than add more and more listeners. You can have one function that calls the others if need be.
 */

document.addEventListener("DOMContentLoaded", nameAndLyrics);
document.addEventListener("DOMContentLoaded", pageLoaded);
document.addEventListener('keypress', pressEnter );

var songs = [
    {title:"Nothing Else Matters", lyrics:"So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> And nothing else matters <br> <br> Never opened myself this way <br> Life is ours, we live it our way <br> All these words I don't just say <br> And nothing else matters <br> <br> Trust I seek and I find in you <br> Every day for us something new <br> Open mind for a different view <br> And nothing else matters <br> <br> Never cared for what they do <br> Never cared for what they know <br> But I know <br> <br> So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> And nothing else matters <br> <br> Never cared for what they do <br> Never cared for what they know <br> But I know <br> <br> I never opened myself this way <br> Life is ours, we live it our way <br> All these words I don't just say <br> And nothing else matters <br> <br> Trust I seek and I find in you <br> Every day for us, something new <br> Open mind for a different view <br> And nothing else matters <br> <br> Never cared for what they say <br> Never cared for games they play <br> Never cared for what they do <br> Never cared for what they know <br> And I know, yeah! <br> <br> So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> No, nothing else matters <br>" },
    {title:"Enter Sandman", lyrics:"Say your prayers little one <br> Don't forget, my son <br> To include everyone <br> Tuck you in, warm within <br> Keep you free from sin <br> 'Till the sandman he comes <br> Sleep with one eye open <br> Gripping your pillow tight <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Somethings wrong, shut the light <br> Heavy thoughts tonight <br> And they aren't of Snow White <br> Dreams of war, dreams of liars <br> Dreams of dragon's fire <br> And of things that will bite <br> Sleep with one eye open <br> Gripping your pillow tight <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Now I lay me down to sleep <br> Now I lay me down to sleep <br> I pray the Lord my soul to keep <br> I pray the Lord my soul to keep <br> If I die before I wake <br> If I die before I wake <br> I pray the lord my soul to take <br> I pray the lord my soul to take <br> <br> Hush little baby, don't say a word <br> And never mind that noise you heard <br> It's just the beasts under your bed <br> In your closet, in your head <br> <br> Exit, light <br> Enter, night <br> Grain of sand <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Yeah! <br> <br> We're off to never-never land <br> Take my hand <br> We're off to never-never land <br> Take my hand"}, 
    {title:"The Unforgiven II", lyrics:"Lay beside me and tell me what they've done <br> And speak the words I wanna hear to make my demons run <br> The door is locked now but it's open if you're true <br> If you can understand the me then I can understand the you <br> <br> Lay beside me, under wicked sky <br> Through black of day, dark of night, we share this, paralyzed <br> The door cracks open but there's no sun shining through <br> Black heart scarring darker still but there's no sun shining through <br> No there's no sun shining through, no there's no sun shining <br> <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? <br> <br> Yeah, what I've felt, what I've known <br> Sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits for you <br> Or are you unforgiven too? <br> <br> Come lay beside me, this won't hurt I swear <br> She loves me not, she loves me still but she'll never love again <br> She lay beside me but she'll be there when I'm gone <br> Black hearts scarring darker still, yes she'll be there when I'm gone <br> Yes she'll be there when I'm gone, dead sure she'll be there? <br> <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? <br> <br> Yeah, what I've felt, what I've known <br> Sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits for you <br> Or are you unforgiven too? <br> <br> Lay beside me, tell me what I've done <br> The door is closed so are your eyes <br> But now I see the sun, now I see the sun <br> <br> Yes now I see it <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you <br> <br> Yeah, what I've felt, what I've known <br> So sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits <br> The one who waits for you <br> <br> Oh, what I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? (so I dub thee unforgiven) <br> <br> Oh, what I've felt <br> Oh, what I've known <br> I'll take this key and I'll bury it in you <br> Because you're unforgiven too <br> <br> Never free, never me <br> 'Cause you're unforgiven too, oh oh" },
];

function getFileName (url) {
    return url.split("/").pop();
}

function nameAndLyrics () {
        var url = document.URL;
        var arrayLength = songs.length;
    if (document.URL.split("=")[1] === "single-song?name"){
        var queryParam = url.split("?")[2];
        var songNameFromUrl = queryParam.split("=")[1];
        var songNameUrlString = songNameFromUrl.replaceAll("%20", " ");
    }
    var lyricsFromArray = null;
    for (var i = 0; i < arrayLength; i++) {
        if (songs[i].title === songNameUrlString){
            lyricsFromArray = songs[i].lyrics;
    }
    document.getElementById("songs-titles").innerHTML = songNameUrlString;
    document.getElementById("lyrics").innerHTML = lyricsFromArray;
    }
}

       
        

      
function pageLoaded () {
    if (document.URL.split("=")[1] === "home") {
        var viewHome =  document.getElementById("viewHome")
        viewHome.classList.add("VisibleHtmlElement");
    } else if (document.URL.split("=")[1] === "songs") {
            var viewSongs = document.getElementById("viewSongs")
            viewSongs.classList.add("VisibleHtmlElement")
    } else if (document.URL.split("=")[1] === "single-song?name") {
    var singleSong = document.getElementById("viewSingleSong")
    singleSong.classList.add("VisibleHtmlElement")
    } else {
        var viewHome =  document.getElementById("viewHome")
        viewHome.classList.add("VisibleHtmlElement");
    }
}

  

  
function pressEnter(e){
       var searchBarInputBox = document.getElementById("search-bar-press"); 
        var keyCode = (window.event) ? e.which : e.keyCode;
    if (searchBarInputBox.value && keyCode == 13 && searchBarInputBox.value.trim()){
        alert(searchBarInputBox.value)
   } 

} 