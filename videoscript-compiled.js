'use strict';

var container = void 0;
var myndband = void 0;
var h1 = void 0;
var a = void 0;
var header = void 0;
var audkenni = void 0;
var div = void 0;
var play = void 0;
var pause = void 0;
var forw = void 0;
var back = void 0;
var mute = void 0;
var unmute = void 0;
var fullscr = void 0;
var footer = void 0;
var url = window.location;
var lastChar = void 0;

document.addEventListener('DOMContentLoaded', likami);

function likami() {
  var request = new XMLHttpRequest();
  request.open('GET', './videos.json', false);
  request.send(null);
  var json = JSON.parse(request.response);

  container = document.querySelector('.container');
  header = document.querySelector('header');
  audkenni = url.search.substring(4, 5);
  lastChar = url[url.length - 1];
  footer = document.querySelector('footer');
  myndband = document.createElement('video');

  var _loop = function _loop() {
    if (audkenni == json.videos[i].id) {
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
      back.setAttribute('class', 'back');
      mute = document.createElement('img');
      mute.setAttribute('class', 'mute');
      fullscr = document.createElement('img');
      fullscr.setAttribute('class', 'fullscr');

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
      play.src = '/img/play.svg';
      pause.src = '/img/pause.svg';
      forw.src = '/img/next.svg';
      back.src = '/img/back.svg';
      mute.src = '/img/mute.svg';
      fullscr.src = '/img/fullscreen.svg';

      footer.appendChild(a);
      a.appendChild(document.createTextNode('Til baka'));

      div.setAttribute('class', 'myndbandaDiv');
      myndband.src = json.videos[i].video;
      myndband.setAttribute('type', 'video/mp4');
      myndband.setAttribute('class', 'myndbandid');
      a.setAttribute('href', 'index.html');
    }
    //Föll fyrir takka

    function playpause() {
      document.addEventListener('click', function () {
        if (myndband.paused == true) {
          document.querySelector('.play').onclick = function () {
            myndband.play();
            play.src = '/img/pause.svg';
          };
        } else {
          document.querySelector('.play').onclick = function () {
            myndband.pause();
            play.src = '/img/play.svg';
          };
        }
      });
    }

    function muteUnmute() {

      document.addEventListener('click', function () {
        if (myndband.muted) {
          mute.onclick = function () {
            myndband.muted = false;
            mute.src = '/img/mute.svg';
          };
        } else {
          mute.onclick = function () {
            myndband.muted = true;
            mute.src = '/img/unmute.svg';
          };
        }
      });
    }

    function forwardRewind(millisek) {

      document.addEventListener('click', function () {
        forw.onclick = function () {
          myndband.currentTime += millisek;
        };
        back.onclick = function () {
          myndband.currentTime -= millisek;
        };
      });
    }

    function isFullScreen() {
      return document.fullScreenElement && document.fullScreenElement !== null;
      document.mozFullScreen;
      document.webkitIsFullScreen;
    }

    function requestFullScreen(element) {
      if (myndband.requestFullscreen) myndband.requestFullscreen();else if (myndband.msRequestFullscreen) myndband.msRequestFullscreen();else if (myndband.mozRequestFullScreen) myndband.mozRequestFullScreen();else if (myndband.webkitRequestFullscreen) myndband.webkitRequestFullscreen();
    }

    function exitFullScreen() {
      if (document.exitFullscreen) document.exitFullscreen();else if (document.msExitFullscreen) document.msExitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }

    function toggleFullScreen(element) {
      if (isFullScreen()) exitFullScreen();else requestFullScreen(element || document.documentElement);
    }
  };

  for (i = 0; i < json.videos.length; i += 1) {
    _loop();
  }

  //Takkar föll virkjuð
  playpause();
  muteUnmute();
  forwardRewind(3);
  fullscr.onclick = function () {
    toggleFullScreen(fullscr);
  };
}

//# sourceMappingURL=videoscript-compiled.js.map