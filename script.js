var json = {
  "videos": [
    {
      "id": 1,
      "title": "Lego!",
      "created": 1509804047011,
      "duration": 5,
      "poster": "./videos/small.png",
      "video": "./videos/small.mp4"
    },
    {
      "id": 2,
      "title": "Big Bunny",
      "created": 1507804047011,
      "duration": 62,
      "poster": "./videos/bunny.png",
      "video": "./videos/bunny.mp4"
    },
    {
      "id": 3,
      "title": "Prufu myndband",
      "created": 1505904047011,
      "duration": 3600,
      "poster": "./videos/16-9.png",
      "video": "./videos/bunny.mp4"
    },
    {
      "id": 4,
      "title": "Prufu myndband með löngum texta sem fer í tvær línur",
      "created": 1504904047011,
      "duration": 220,
      "poster": "./videos/16-9.png",
      "video": "./videos/bunny.mp4"
    }
  ],
  "categories": [
    {
      "title": "Nýleg myndbönd",
      "videos": [1, 2]
    },
    {
      "title": "Kennslumyndbönd",
      "videos": [1, 3, 4]
    },
    {
      "title": "Skemmtimyndbönd",
      "videos": [2, 3, 4]
    }
  ]
}
var container, flokkur, vidbox, div1, div2, vid, video, a, img;
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
      a = document.createElement('a');
      img = document.createElement('img');
      h2 = document.createElement('p');
      div2.appendChild(vidiv);
      vidiv.appendChild(a);
      a.appendChild(img);
      a.appendChild(h2.appendChild(document.createTextNode(json.videos[i].title)));
      img.setAttribute('src', json.videos[j].poster);
      a.setAttribute('href', 'videos.html?id='+json.categories[j].videos[j].id);
    }

 }
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

*/
window.addEventListener('load', titlar);
