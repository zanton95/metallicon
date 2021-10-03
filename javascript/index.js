
document.addEventListener("DOMContentLoaded", initialize );
document.addEventListener('keypress', checkIfEnterKeyPressed );

function initialize() {
    songDisplayedWithQueryString();
    pushCssIntoHtmlToViewPage();
    testingIfSongSearched ()
    addsHtmlToSongsPageAndSearchedSong()
    
};



var songs = [
    {title:"Nothing Else Matters", lyrics:"So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> And nothing else matters <br> <br> Never opened myself this way <br> Life is ours, we live it our way <br> All these words I don't just say <br> And nothing else matters <br> <br> Trust I seek and I find in you <br> Every day for us something new <br> Open mind for a different view <br> And nothing else matters <br> <br> Never cared for what they do <br> Never cared for what they know <br> But I know <br> <br> So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> And nothing else matters <br> <br> Never cared for what they do <br> Never cared for what they know <br> But I know <br> <br> I never opened myself this way <br> Life is ours, we live it our way <br> All these words I don't just say <br> And nothing else matters <br> <br> Trust I seek and I find in you <br> Every day for us, something new <br> Open mind for a different view <br> And nothing else matters <br> <br> Never cared for what they say <br> Never cared for games they play <br> Never cared for what they do <br> Never cared for what they know <br> And I know, yeah! <br> <br> So close, no matter how far <br> Couldn't be much more from the heart <br> Forever trusting who we are <br> No, nothing else matters <br>", Url: "index.html?view=single-song?name=Nothing Else Matters", StringInsideUrl: "Nothing%20Else%20Matters"},
    {title:"Enter Sandman", lyrics:"Say your prayers little one <br> Don't forget, my son <br> To include everyone <br> Tuck you in, warm within <br> Keep you free from sin <br> 'Till the sandman he comes <br> Sleep with one eye open <br> Gripping your pillow tight <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Somethings wrong, shut the light <br> Heavy thoughts tonight <br> And they aren't of Snow White <br> Dreams of war, dreams of liars <br> Dreams of dragon's fire <br> And of things that will bite <br> Sleep with one eye open <br> Gripping your pillow tight <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Now I lay me down to sleep <br> Now I lay me down to sleep <br> I pray the Lord my soul to keep <br> I pray the Lord my soul to keep <br> If I die before I wake <br> If I die before I wake <br> I pray the lord my soul to take <br> I pray the lord my soul to take <br> <br> Hush little baby, don't say a word <br> And never mind that noise you heard <br> It's just the beasts under your bed <br> In your closet, in your head <br> <br> Exit, light <br> Enter, night <br> Grain of sand <br> <br> Exit, light <br> Enter, night <br> Take my hand <br> We're off to never-never land <br> <br> Yeah! <br> <br> We're off to never-never land <br> Take my hand <br> We're off to never-never land <br> Take my hand", Url: "index.html?view=single-song?name=Enter Sandman", StringInsideUrl: "Nothing%20Else%20Matters"}, 
    {title:"The Unforgiven II", lyrics:"Lay beside me and tell me what they've done <br> And speak the words I wanna hear to make my demons run <br> The door is locked now but it's open if you're true <br> If you can understand the me then I can understand the you <br> <br> Lay beside me, under wicked sky <br> Through black of day, dark of night, we share this, paralyzed <br> The door cracks open but there's no sun shining through <br> Black heart scarring darker still but there's no sun shining through <br> No there's no sun shining through, no there's no sun shining <br> <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? <br> <br> Yeah, what I've felt, what I've known <br> Sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits for you <br> Or are you unforgiven too? <br> <br> Come lay beside me, this won't hurt I swear <br> She loves me not, she loves me still but she'll never love again <br> She lay beside me but she'll be there when I'm gone <br> Black hearts scarring darker still, yes she'll be there when I'm gone <br> Yes she'll be there when I'm gone, dead sure she'll be there? <br> <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? <br> <br> Yeah, what I've felt, what I've known <br> Sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits for you <br> Or are you unforgiven too? <br> <br> Lay beside me, tell me what I've done <br> The door is closed so are your eyes <br> But now I see the sun, now I see the sun <br> <br> Yes now I see it <br> What I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you <br> <br> Yeah, what I've felt, what I've known <br> So sick and tired, I stand alone <br> Could you be there <br> 'Cause I'm the one who waits <br> The one who waits for you <br> <br> Oh, what I've felt, what I've known <br> Turn the pages, turn the stone <br> Behind the door, should I open it for you? (so I dub thee unforgiven) <br> <br> Oh, what I've felt <br> Oh, what I've known <br> I'll take this key and I'll bury it in you <br> Because you're unforgiven too <br> <br> Never free, never me <br> 'Cause you're unforgiven too, oh oh", Url: "index.html?view=single-song?name=The Unforgiven II", StringInsideUrl: "Nothing%20Else%20Matters"},
];

/**
 * Lev:
 * Please change name of funciton to reflect what you're explaining :)
 */
// function below decides which song is displayed by using query strings
function songDisplayedWithQueryString () {
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

       
        
/**
 * Lev:
 * Please change name of funciton to reflect what you're explaining :)
 */
// function below incerts css into a hidden html element via query strings and decides which page is visible   
function pushCssIntoHtmlToViewPage () {
    if (document.URL.split("=")[1] === "home") {
        var viewHome =  document.getElementById("viewHome")
        viewHome.classList.add("VisibleHtmlElement");
    } else if (document.URL.split("=")[1] === "songs") {
            var viewSongs = document.getElementById("viewSongs")
            viewSongs.classList.add("VisibleHtmlElement")
            var ul = document.getElementById("songs-list");
            if (document.URL.split("=")[1] === "songs"){
                 /**
           
             * 
             *  - [Optional] I think that working with song names that have whitespaces that you always have to replace and may have other characters that can cause issues is a lot of work.
             *    One suggestion I have that may help: your songs array is an array of objects. Right now each song has a title and lyrics. What if each song would also have another field,
             *    let's call it 'name' or w/e sounds good to you. That var can hold a kebab-cased (this-is-how-we-call-this-kind-of-writing) name for each song?
             *    This way a linkg to each song would be simpler: index.html?view=single-song?name=nothing-else-matters and your function nameAndLyrics() wouldn't need to replace anything.
             *    If you think this is a useful change - it's ok if you take time to solve this. It's also fine if you prefer to go on as is.
             */

                
                for(i = 0; i < songs.length; i++) {
                    var hr = document.createElement("hr");
                    var songListItem = document.createElement("li");
                    var songLink = document.createElement("a");
                    var songLinkName = document.createTextNode(' \u00A0' + songs[i].title);
                    songLink.appendChild(songLinkName); 
                    ul.appendChild(songListItem);
                    // songListItem.appendChild(hr);
                    songListItem.appendChild(songLink);
                    songLink.href = songs[i].Url;
                    songLink.classList.add("song-link");
                       
                   } 
                    
                    
                } 
                // else if (document.URL.split("=")[2] === songs[i].StringInsideUrl){
                //     var viewSongs =  $("#viewSongs")[0].hide();
                    
                // }
    } else if (document.URL.split("=")[1] === "single-song?name") {
    var singleSong = document.getElementById("viewSingleSong")
    singleSong.classList.add("VisibleHtmlElement")
    } else if (document.URL.split("=")[1] === "search-results?p") {
       

     } else {
        var viewHome =  $("#viewHome")[0];
        viewHome.classList.add("VisibleHtmlElement");
    }
}

 
    var testToOperateAfterEnterKey = false;
function checkIfEnterKeyPressed(e){
    var keyCode = (window.event) ? e.which : e.keyCode;
    var searchBarInputBox = document.getElementById("search-bar-press"); 
    var searchContent = searchBarInputBox.value.trim();
    
    if (keyCode === 13 && searchContent) {
        window.location.href = 'index.html?view=search-results?p=' + searchContent;
        var testToOperateAfterEnterKey = true;
    } 
    
}

function testingIfSongSearched () {
    if (functionTest = true) {
        takingQueryFromUrl()
    }

}





 
            






// function below decides which song link is displayed when a song name is written in the search-bar
var searchResults = [];
function takingQueryFromUrl(checkIfEnterKeyPressed) {
    var queryLocationInUrl = window.location.href.split("=").pop();
    var songNameUrlString = queryLocationInUrl.replaceAll("%20", " ")
    var makeLowerCase = songNameUrlString.toLowerCase()
    var checkIfSongIsFound = false;
    for(var i = 0; i < songs.length; i++){
        var titleToLowerCase = songs[i].title.toLowerCase();
        if (makeLowerCase === songs[i].title.toLowerCase() || titleToLowerCase.includes(makeLowerCase)) {
            searchResults.push(songs[i]);
            checkIfSongIsFound = true;
            var ul = document.getElementById("songs-list");
            var viewSongs =  $("#viewSongs")[0];
            var searchedSong = document.createElement("a");
            var songLinkName = document.createTextNode(' \u00A0' + songs[i].title);
            
            searchedSong.appendChild(songLinkName); 
            ul.appendChild(searchedSong);
            searchedSong.href = songs[i].Url;
            searchedSong.classList.add("song-link");
            console.log(songs[i].Url)
        } 
    } 
    if (!checkIfSongIsFound) {
        console.log("No Results");
    }
}
        function addsHtmlToSongsPageAndSearchedSong(){
            if (document.URL.split("=")[1] === "songs" || document.URL.split("=")[1] === "search-results?p"){
                viewSongs.classList.add("VisibleHtmlElement");
            }

         }
            

            
            
      










 /**
          * Side quest:
          *  - Look at each of the ifs in this function.
          *  - For each of them you're getting an element by id, then adding a class.
          *  - Can we create a function that would do this? It can take the name of the elemnt to find as
          *    a parameter and than it will add the class.
          *  - Don't forget that we have examples on 'js-practice' branch
          */






//  } if (listOfLinksInTable[i] === "\xa0 Nothing Else Matters") {
//     searchedSong.href = "index.html?view=single-song?name=Nothing Else Matters";
//     searchedSong.classList.add("song-link");


// }




//   var viewSongs =  $("#viewSongs")[0];
//   viewSongs.classList.add("VisibleHtmlElement");
//   var wholeSongListContainer = $("ul li").hide();
//   var singleLinkOfSong =  $("li");           
//   singleLinkOfSong[i].style.display = "block";

//   if(document.URL.split("=")[1] === "single-song?name"){
//       var songsTable = $("ul").hide();
//       var songTitleContainer = $(".songs-title-container").hide();
//   }









































