
let container;
let flokkur;
let vidbox;
let div1;
let div2;
let div3;
let vid;
let video;
let a;
let p;
let img;
let h1;
let h2;
let sida2 = 'video.html?id='

function likami() {

  const request = new XMLHttpRequest();
  request.open('GET', './videos.json', false);
  request.send(null)
  const json= JSON.parse(request.response);

  container = document.querySelector('.container');

  for(i = 0; i < json.categories.length; i+=1) {

    div1 = document.createElement('div');
    div2 = document.createElement('div');
    h1 = document.createElement('h1');
    div1.appendChild(h1);
    div1.appendChild(div2);
    container.appendChild(div1);
    h1.appendChild(document.createTextNode(json.categories[i].title));
    div1.setAttribute('class', 'col-12 flokkur');
    div2.setAttribute('class','col-12 vidbox');

    for(j = 0; j < json.categories[i].videos.length; j+=1){

      const queryS = '?id='+json.videos[json.categories[i].videos[j] - 1].id;

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

      vidiv.setAttribute('class', 'col-6 myndband')
      img.src = json.videos[json.categories[i].videos[j] -1].poster;
      a.setAttribute('href', 'videos.html'+queryS);
    }

 }
}

function created(millisekundur){

  const dags= new Date();
  const created = dags-millisekundur;

  if((Math.floor(created/1000/60/60/24/365)>0)){
    createdEining = 'Fyrir '+(Math.floor(created/1000/60/60/24/365))+' árum síðan';
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24/30)>1)){
    createdEining = 'Fyrir '+(Math.floor(created/1000/60/60/24/30))+' mánuðum síðan';
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24/7)>1)){
    createdEining = 'Fyrir '+(Math.floor(created/1000/60/60/24/7))+' vikum síðan';
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60/24)>1)){
    createdEining = 'Fyrir '+(Math.floor(created/1000/60/60/24))+' dögum síðan';
    return createdEining;
  }
  else if((Math.floor(created/1000/60/60)>1)){
    createdEining = 'Fyrir '+(Math.floor(created/1000/60/60/24))+' klukkustundum síðan';
    return createdEining;
  }
}

function lengdMyndb(sekundur) {

  let min = Math.floor(sekundur/60);
  let sek = Math.floor(sekundur%60);
  let timi;

  if(sek<10){
    sek = '0'+sek;
  }
  if(min<10){
    min = min;
  }
  timi = min+':'+sek;
  return timi;
}


document.addEventListener('DOMContentLoaded', likami);
