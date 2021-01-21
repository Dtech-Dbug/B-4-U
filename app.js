const searchQuery = document.getElementById('searchInput');
const btn1 = document.getElementById('btn')
 const list = document.getElementById('playList')
 const listItems = list.querySelectorAll('article')
 console.log(listItems)
var url =' https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyAjBM52Szy3TWZi-WoN48I8N5ZgZjn-1ng&q='
//var testUrl ='https://www.youtube.com/results?search_query='
function getUrl(input){
  return url + input
}

function clickHandler (){
  console.log('hello')
  var q = searchQuery.value;
  console.log(q)
  var options = {
      maxResults : 5,
      query : q
      
  }
  

  fetch(getUrl(q))
  .then(response => response.json())
  .then(json => {
    console.log(getUrl(q))
      var data = json
      console.log(data)
      console.log(data.items)
      vId = json.items[0].id.videoId
      var thumb = json.items[1].snippet.thumbnails.medium.url
      console.log(vId)
      //console.log(thumb)
     /* var newUrl = "https://youtube.com/embed/"+vId
      var el = document.getElementById('ifrm')
      el.src= newUrl;
      console.log("changed attr: " +el.src);*/
      playVideo(data)

      resultLoop(data);
     

    })
   

  
}
function playVideo(json){
    console.log('hello')
    //var itemsList = data.items
    vId = json.items[0].id.videoId
   
    console.log(vId)
    //console.log(thumb)
    var newUrl = "https://youtube.com/embed/"+vId
    var el = document.getElementById('ifrm')
    el.src= newUrl;
    console.log("changed attr: " +el.src);
    console.log('function : ' + vId)
}


function resultLoop(data){
 
 
  //var itemListArray = Array.from(itemsList)
  //console.log('data array : ' + itemListArray)
 Array.from(data.items).forEach((item ) => {


    // looping thru the items list obtained after a succesfull fetch call
    var thumb = item.snippet.thumbnails.medium.url
     var title = item.snippet.title
     var desc = item.snippet.description.substring(0,80)
  var vIdTest = item.id.videoId
 console.log(vIdTest)
    // console.log('thumb:' + thumb)
//console.log('hello testing')

// appending the result list
list.insertAdjacentHTML('afterbegin' , `<article>
        <img src="${thumb}" id="thumbnail" style="width:100px; height:100px;" alt="" class="thumb">
      <div class="details" >
          <h3>${title}</h3>
          <p>${desc}</p>
          <p> ${vIdTest} </p>
      </div>
    
     </article>`)
     

 })
 const listItems = list.querySelectorAll('article')

/* var thumb = data.items[1].snippet.thumbnails.medium.url
console.log('thumb:' + thumb)
console.log('hello')*/

/* to dynamically change the src attribute of the images of the list usinf the .src methid
var target = document.getElementById('thumbnail')
 target.src = thumb
 console.log()  */

 
   

 
};




// 2. This code loads the IFrame Player API code asynchronously.
/* var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
console.log(firstScriptTag)
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  
player = new YT.Player('player', {
  height: '390',
  width: '640',
  
  videoId: '_A0N3DE5y8U' ,
  //relatedToVideoId : videoId,
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
  setTimeout(stopVideo);
  done = true;
}
}
function stopVideo() {
player.stopVideo();
}*/

btn1.addEventListener('click' , clickHandler)   
list.addEventListener('click' , playVideo())