//Lucien's playing
var user = 'lucieneth';
var key = '5b8702cde99be66b09009af1b4730a28';
var nowplayingsp = document.getElementById('nowplaying');
var artistsp = document.getElementById('artist');
var albumsp = document.getElementById('album');
var songcover = document.getElementById('albumcover');
var leftbackground = document.getElementById('blur');
var usersp = document.getElementById('user');
var lastplayingsp = document.getElementById('lastplaying');
var lastartistsp = document.getElementById('lastartist');

function getPlaying() {
    $.ajax({
      url: "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lucieneth&api_key=5b8702cde99be66b09009af1b4730a28&format=json&limit=1",
      success: function (playing) {
        recenttracks = playing.recenttracks;
        currentsong = playing.recenttracks.track[0].name;
        currentartist = playing.recenttracks.track[0].artist["#text"];
        currentalbum = playing.recenttracks.track[0].album["#text"];
        currentcover = playing.recenttracks.track[0].image[2]["#text"];
        coverbackground = playing.recenttracks.track[0].image[3]["#text"];
        lastsong = playing.recenttracks.track[1].name;
        lastartist = playing.recenttracks.track[1].artist["#text"];
        ismemalario = playing.recenttracks["@attr"].user;
        //lastsong = playing.recenttracks.track[1].name;
        console.log("Current song: " + currentsong);
        //console.log("Last song: " + lastsong);
        console.log(recenttracks);
        nowplayingsp.innerHTML = currentsong;
        artistsp.innerHTML = currentartist;
        albumsp.innerHTML = currentalbum;
        usersp.innerHTML = ismemalario;
        songcover.src = currentcover; 
        leftbackground.style.backgroundImage = "url("+coverbackground+")";
        leftbackground.style.backgroundPosition = "center";
        leftbackground.style.backgroundRepeat = "no-repeat";
        leftbackground.style.backgroundSize = "cover";
        lastplayingsp.innerHTML = lastsong;
        lastartistsp.innerHTML = lastartist;
      },
    });
    setTimeout(getPlaying, 5000);
  }

getPlaying();


//YOUR CURRENTLY PLAYING

var mainContainer = document.getElementById('js-main-container'),
    loginContainer = document.getElementById('js-login-container'),
    loginButton = document.getElementById('js-btn-login'),
    background = document.getElementById('js-background');
    
var maindiv = document.getElementById('yournowplaying');

var spotifyPlayer = new SpotifyPlayer();

var template = function (data) {
  return `
    <div class="main-wrapper">
      <div class="now-playing__img">
        <img src="${data.item.album.images[0].url}">
      </div>
      <div class="now-playing__side">
        <div class="now-playing__name">${data.item.name}</div>
        <div class="now-playing__artist">${data.item.artists[0].name}</div>
        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
        </div>
      </div>
    </div>
  `;
};

spotifyPlayer.on('update', response => {
  mainContainer.innerHTML = template(response);
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    loginContainer.style.display = 'block';
    mainContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
  }
});

loginButton.addEventListener('click', () => {
    spotifyPlayer.login();
});

spotifyPlayer.init();
