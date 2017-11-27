var request = new XMLHttpRequest();
request.open("GET", "./videos.json", false);
request.send(null)
var json= JSON.parse(request.response);

var container, flokkur, vidbox, div1, div2, div3, vid, video, a, p, img;
var h1, h2;
var sida2 = 'video.html?id='

function likami() {

  var request = new XMLHttpRequest();
  request.open("GET", "./videos.json", false);
  request.send(null)
  var json= JSON.parse(request.response);

  container = document.querySelector('.container');

  for(i=0; i<json.categories.length; i+=1) {

    div1 = document.createElement('div');
    div2 = document.createElement('div');
    h1 = document.createElement('h1');
    div1.appendChild(h1);
    div1.appendChild(div2);
    container.appendChild(div1);
    h1.appendChild(document.createTextNode(json.categories[i].title));
    div1.setAttribute('class', 'flokkur');
    div2.setAttribute('class','vidbox');

    for(j=0; j<json.categories[i].videos.length; j+=1){

      var queryS = '?id='+json.videos[json.categories[i].videos[j] - 1].id;

      vidiv = document.createElement('div');
      div3 = document.createElement('div');
      a = document.createElement('a');
      img = document.createElement('img');
      h2 = document.createElement('h2');
      p = document.createElement('p');
      div2.appendChild(vidiv);
      vidiv.appendChild(div3);
      div3.appendChild(a);
      div3.appendChild(p);
      div3.appendChild(document.createTextNode(lengdMyndb(json.videos[json.categories[i].videos[j] - 1].duration)));
      a.appendChild(img);
      p.appendChild(document.createTextNode(created(json.videos[json.categories[i].videos[j] - 1].created)));
      h2.appendChild(document.createTextNode(json.videos[json.categories[i].videos[j] - 1].title));
      a.appendChild(h2);

      vidiv.setAttribute('class', 'myndband')
      img.src = json.videos[json.categories[i].videos[j] -1].poster;
      a.setAttribute('href', 'videos.html'+queryS);
    }

 }
}

function created(millisekundur){

  var dags= new Date();
  var created = dags-millisekundur;

  if((Math.floor(created/1000/60/60/24/365)>0)){
    createdEining = "Fyrir "+(Math.floor(created/1000/60/60/24/365))+" árum síðan";
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24/30)>1)){
    createdEining = "Fyrir "+(Math.floor(created/1000/60/60/24/30))+" mánuðum síðan";
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24/7)>1)){
    createdEining = "Fyrir "+(Math.floor(created/1000/60/60/24/7))+" vikum síðan";
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24)>1)){
    createdEining = "Fyrir "+(Math.floor(created/1000/60/60/24))+" dögum síðan";
    return createdEining;
  }
}

function lengdMyndb(sekundur) {

  var min = Math.floor(sekundur/60);
  var sek = Math.floor(sekundur%60);
  var timi;

  if(sek<10){
    sek = '0'+sek;
  }
  if(min<10){
    min = min;
  }
  timi = min+':'+sek;
  return timi;
}


  /*


möguleg lausn playpause

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;

*/
document.addEventListener('DOMContentLoaded', likami);
