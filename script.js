var request = new XMLHttpRequest();
request.open("GET", "./videos.json", false);
request.send(null)
var json= JSON.parse(request.responseText);

var container, flokkur, vidbox, div1, div2, div3, vid, video, a, img;
var h1, h2;
var sida2 = 'video.html?id='

function titlar(obj) {

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

      vidiv = document.createElement('div');
      div3 = document.createElement('div');
      a = document.createElement('a');
      img = document.createElement('img');
      h2 = document.createElement('h2');
      div2.appendChild(vidiv);
      vidiv.appendChild(div3);
      div3.appendChild(a);
      a.appendChild(img);
      h2.appendChild(document.createTextNode(json.videos[json.categories[i].videos[j] - 1].title));
      a.appendChild(h2);

      vidiv.setAttribute('class', 'myndband')
      img.src = json.videos[json.categories[i].videos[j] -1].poster;
      a.setAttribute('href', 'videos.html'+'?id='+json.videos[json.categories[i].videos[j] - 1].id);
    }

 }
}

function created(millisekundur){

  var dags= new Date();
  var created= dags-millisekundur;

}



  /*

    for(i=0; i<obj.categories[j].videos.length; i++) {


      div3.appendChild(div4);
      div4.appendChild(link);
      link.appendChild(mynd);
      div4.appendChild(timinn);
      div4.appendChild(h2);
      div4.appendChild(p1);

      div3.setAttribute('class', 'col col-12 col-m-6 col-l-4');
      link.setAttribute('href', videoSida + obj.videos[obj.categories[j].videos[i]-1].id)
      div4.setAttribute('class', 'container');
      mynd.src = obj.videos[obj.categories[j].videos[i]-1].poster;
      mynd.setAttribute('class', 'mynd');
      timinn.setAttribute('class', 'timinn');
      mynd.setAttribute('id', obj.videos[obj.categories[j].videos[i]-1].id);
      p1.appendChild(document.createTextNode(timiSidan(obj.videos[obj.categories[j].videos[i]-1].created)));
      h2.appendChild(document.createTextNode(obj.videos[obj.categories[j].videos[i]-1].title));
      timinn.appendChild(document.createTextNode(lengdMyndbands(obj.videos[obj.categories[j].videos[i]-1].duration)));
      div5.appendChild(div3);
    }
    div0.appendChild(div5);

  }
  results.appendChild(div0);
}
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
window.addEventListener('load', titlar);
