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
var div, div1, div2, div3, div4, div5, div6;
var h1;

function titlar(obj) {
  div = document.querySelector('.container')
  div1 = document.querySelector('.nyleg')
  div4 = document.createElement('kennslu');
  div3 = document.querySelector('.skemmti')
  for(i=0; i<json.categories.length; i++) {
    div2 = document.createElement('div')                                                                    
                                          h1 = document.createElement('h1');
    div2.appendChild(h1);
    div4.appendChild(div2);
    div
    h1.appendChild(document.createTextNode(json.categories[i].title));

}}
  /*  div0.appendChild(div1);
    div1.setAttribute('class', 'row kafli');
    div2.setAttribute('class', 'col');
    div5.setAttribute('class', 'row');

    for(i=0; i<obj.categories[j].videos.length; i++) {

      div3 = document.createElement('div');
      div4 = document.createElement('div');
      link = document.createElement('a');
      mynd = document.createElement('img');
      h2 = document.createElement('h2');
      p1 = document.createElement('p');
      timinn = document.createElement('div');
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
