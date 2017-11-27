

var container, myndband, h1, a, header, audkenni, div, play, pause, forw, back, mute, unmute, fullscr, footer;
var url = window.location;
var lastChar;

document.addEventListener('DOMContentLoaded', likami);

function likami(){
  var request = new XMLHttpRequest();
  request.open("GET", "./videos.json", false);
  request.send(null)
  var json= JSON.parse(request.response);

  container = document.querySelector('.container');
  header = document.querySelector('header');
  audkenni =url.search.substring(4, 5);
  lastChar = url[url.length-1];
  footer = document.querySelector('footer');
  myndband = document.createElement('video');

  for(var i = 0; i<json.videos.length; i+=1){
    if(audkenni==json.videos[i].id){
      div = document.createElement('div');
      h1 = document.createElement('h1');
      a = document.createElement('a');
      takkadiv = document.createElement('div');
      play = document.createElement('img');
      play.setAttribute('class', 'play');
      pause = document.createElement('img');
      pause.setAttribute('class', 'pause');
      forw = document.createElement('img');
      forw.setAttribute('class', 'forw');
      back = document.createElement('img');
      mute = document.createElement('img');
      fullscr = document.createElement('img');

      container.appendChild(div);
      header.appendChild(h1);
      h1.appendChild(document.createTextNode(json.videos[i].title));
      div.appendChild(myndband);
      container.appendChild(takkadiv);

      takkadiv.appendChild(play);
      takkadiv.appendChild(forw);
      takkadiv.appendChild(back);
      takkadiv.appendChild(mute);
      takkadiv.appendChild(fullscr);
      play.src ='/img/play.svg';
      pause.src ='/img/pause.svg';
      forw.src ='/img/next.svg';
      back.src ='/img/back.svg';
      mute.src ='/img/mute.svg';
      fullscr.src ='/img/fullscreen.svg';

      footer.appendChild(a);
      a.appendChild(document.createTextNode('Til baka'));

      div.setAttribute('class', 'myndbandaDiv');
      myndband.src = json.videos[i].video;
      myndband.setAttribute('type', 'video/mp4');
      myndband.setAttribute('class', 'myndbandid');
      a.setAttribute('href', 'index.html');


      }

          function playpause(){

            document.addEventListener('click', function(){
              if(myndband.paused==true){

                document.querySelector('.play').onclick = function (){
                   myndband.play();
                   play.src='/img/pause.svg';
                      }
                    }
              else{
                document.querySelector('.play').onclick = function (){
                   myndband.pause();
                   play.src='/img/play.svg';
                           }
                          }
                       });
                    }

           function muteUnmute(){

              document.addEventListener('click', function(){
                if(myndband.muted){
                  mute.onclick = function(){
                  myndband.muted = false;
                  mute.src='/img/mute.svg';
                }}
                else{
                  mute.onclick = function(){
                  myndband.muted = true;
                  mute.src='/img/unmute.svg';
            }}
            });
          }

          function forwardRewind(millisek){

             document.addEventListener('click', function(){
                forw.onclick = function(){
                    myndband.currentTime +=millisek;
                    }
                back.onclick = function() {
                    myndband.currentTime -= millisek;
                    }
                });
              }

      }
      playpause();
      muteUnmute();
      forwardRewind(3);
      //forwardRewind(3000);
      }
