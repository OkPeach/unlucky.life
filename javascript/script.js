const logo = document.querySelectorAll("#logo path");


var stored = localStorage.getItem('last-css') || 'styles/style.css';
var cookies = localStorage.getItem('cookies-closed') || 'false';

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const options = {
  threshold: 0.7,
};

var p1 = "f3c93bee2e7a";

//BTC BALLANCE
//var btcAddress = "bc1qydz4rlm9sgdg6hyt8a704ugvj8uczmkh3dpzc9";

//console.log("fetching blockchain...");
//fetch("https://blockchain.info/q/addressbalance/" + btcAddress)
//  .then(function (response) {
//    console.log("...got response from blockchain...");
 //   return response.json();
 // })
 // .then(function (json) {
 //   var btcBalance = parseInt(json, 10);
    //document.getElementById("btc-address").innerHTML = btcAddress;
  //  document.getElementById("btc-balance").innerHTML = btcBalance / 100000000;
 //   console.log("balance set!");
 // });
//BTC BALLANCE

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

var p2 = "ad232f1daf9e88efd3d";

function CopyToClipboard(id) {
  setTimeout(function () {
    navigator.clipboard.writeText("PeachWRLD#8888");
    $("#discord").load(" #discord > *");
  }, 700);
  document.getElementById(id).innerHTML = "Copied tag!";
}

function CopyToClipboardEmail(id) {
  setTimeout(function () {
    document.getElementById(id).innerHTML = `lucien@unlucky.life`;
    navigator.clipboard.writeText("lucien@unlucky.life");
  }, 700);
  document.getElementById(id).innerHTML = "Copied email!";
}

var p3 = "3ebf5f31893";

function setClipboard(value, id, aftertext) {
  setTimeout(function () {
    document.getElementById(id).innerHTML = aftertext;
    navigator.clipboard.writeText(value);
  }, 1000);
  document.getElementById(id).innerHTML = "Copied BTC wallet!";
}

function CopyToClipboardBTC(value, id) {
  setTimeout(function () {
    navigator.clipboard.writeText(value);
    document.getElementById(id).innerHTML = `BTC`;
    $("#bitcoin").load(" #bitcoin > *");
  }, 700);
  document.getElementById(id).innerHTML = "Copied wallet!";
}

function CopyToClipboardETH(value, id) {
  setTimeout(function () {
    navigator.clipboard.writeText(value);
    document.getElementById(id).innerHTML = `ETH`;
    $("#eth").load(" #eth > *");
  }, 700);
  document.getElementById(id).innerHTML = "Copied wallet!";
}

//credit: DenverCoder1 edited by me
function getAge(dateString) {
  var ageInMilliseconds = new Date() - new Date(dateString);
  var years = Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
  return years + ' years old'
}
//console.log(getAge('2002-06-24'));

function analytics() {
  var swcss = document.getElementById("switch-css");

  var result = stored.replaceAll("\"", "");

  if(result == "styles/style.css") {
    swcss.setAttribute("checked", "true");
  }

  var link = document.getElementById("maincss");
  link.setAttribute("href", result);

  document.getElementById("age").innerHTML = getAge('2002-06-24');
  document.getElementById("year").innerHTML = new Date().getFullYear();
  var p4 = "c4f63734d426f5";
  var enB = CryptoJS.AES.encrypt(p2 + p4 + p1 + p3, "helloworld");
  var deB = CryptoJS.AES.decrypt(enB, "helloworld");
  $.getJSON(
    "https://api.ipdata.co/?api-key=" + deB.toString(CryptoJS.enc.Utf8),
    function( json ) {
      document.getElementById("visits").innerHTML = 'Visits (today): ' + json.count;
    }
  );
}

function getIP() {
  var p4 = "c4f63734d426f5";
  var enB = CryptoJS.AES.encrypt(p2 + p4 + p1 + p3, "helloworld");
  var deB = CryptoJS.AES.decrypt(enB, "helloworld");

  $.getJSON(
    "https://api.ipdata.co/?api-key=" + deB.toString(CryptoJS.enc.Utf8), 
    function( json ) {
      console.log( json );
      document.getElementById("IP").innerHTML = json.ip;
      document.getElementById("IPlocation").innerHTML = json.city + ', ' + json.country_name;
      document.getElementById("ASN").innerHTML = json.asn.name + ', ' + json.asn.asn + ', ' + json.asn.domain + ', ' + json.asn.type;
      document.getElementById("TZ").innerHTML = json.time_zone.name + ', ' + json.time_zone.abbr + ' - offset ' + json.time_zone.offset;
      document.getElementById("other").innerHTML = 'is tor? ' + json.threat.is_tor + " | is proxy? " + json.threat.is_proxy + " | is anonymous? " + json.threat.is_anonymous + " | is attacker? " + json.threat.is_known_attacker + " | is abuser? " + json.threat.is_known_abuser + " | is threat? " + json.threat.is_threat + " | is bogon? " + json.threat.is_bogon;
     }
  );
}

let sliderItem = $(".slider").children(".item.active");
sliderItem.prev(".item").css({
  left: -200,
});

sliderItem.next(".item").css({
  right: -200,
});
let i = $(".slider").children(".item");
let ind = 0;
$(".slider")
  .children(".item")
  .each(function () {
    $(this).attr("data-index", ind++);
  });
i.on("click", function (e) {
  const that = $(this);
  let dataIndex = that.data("index");
  $(".item").removeClass("active");
  that.addClass("active");
  i.each(function () {
    if ($(this).data("index") == dataIndex) {
      $(this).addClass("active");
      $(this).css({
        left: 0,
        right: 0,
        "z-index": 3,
      });
      if (dataIndex == "1") {
        $(".item[data-index=2]").css({
          left: 0,
          right: -200,
          "z-index": 1,
        });
        $(".item[data-index=0]").css({
          left: -200,
          right: 0,
          "z-index": 1,
        });
      } else if (dataIndex == "0") {
        $(".item[data-index=2]").css({
          left: -200,
          right: 0,
          "z-index": 1,
        });
        $(".item[data-index=1]").css({
          left: 0,
          right: -200,
          "z-index": 1,
        });
      } else if (dataIndex == "2") {
        $(".item[data-index=1]").css({
          left: -200,
          right: 0,
          "z-index": 1,
        });
        $(".item[data-index=0]").css({
          left: 0,
          right: -200,
          "z-index": 1,
        });
      }
    }
  });
});

const backgroundArray = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp'
]

const setBackgroundColor = () => {
  indexedArray = '../images/bc/' + backgroundArray[Math.floor(Math.random()*backgroundArray.length)];
  const bcgrd = "url('" + indexedArray + "')"
  document.getElementById("projects").style.backgroundImage = bcgrd;
}

function fadeOutEffect() {
  var fadeTarget = document.getElementById("loading");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 200);
}

$(window).on('load', function () {
  setTimeout(function () {
    //locate "target" aka the preload screen and slowly transition to 0 opacity and after transition deletes the whole element
    const target = document.getElementById("loading");
    target.style.opacity = '0'
    target.addEventListener('transitionend', () => target.remove());

    bubble.style.setProperty("left", `1137.5px`);
    bubble.style.setProperty("top", `-30.34375px`);
    bubble.style.setProperty("width", `71.171875px`);
    bubble.style.setProperty("height", `33px`);

    console.log('Last theme: ' + stored)
    console.log('Are cookies accepted? ' + cookies)

    //adds animation after load
    $("#logo").addClass("logoAnim");
    $("#infoCard").addClass("cardAnim");

    $("#mainNav").addClass("headeranim");
    $("#header").addClass("headeranim");

    $(".bubble").addClass("bubbleanim");

    var isaccepted = cookies.replaceAll("\"", "");
  
    if(isaccepted=="false") {
      $("#cookies").addClass("cookieAnim");
    }
    else{
      $('#cookies').remove();

      var defaultcookie = "true";
      localStorage['cookies-closed'] = JSON.stringify(defaultcookie);
    }

  }, 1250);

  console.log('Loaded, welcome!')
}) 

$(function(){
  $.titleEffect({
    effect: 'replace',
    delay: 750,
    titles: [
      'home@unlucky.life ~ $',
      'home@unlucky.life ~ $ _'
    ]
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("switch-css");


  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      var link = document.getElementById("maincss");
      link.setAttribute("href", "styles/style.css");
      var newstyle = "styles/style.css";
      localStorage['last-css'] = JSON.stringify(newstyle);
    } 
    else {
      var link = document.getElementById("maincss");
      link.setAttribute("href", "styles/old.min.css");
      var oldstyle = "styles/old.min.css";
      localStorage['last-css'] = JSON.stringify(oldstyle);
    }
  });
});


function deleteCookie() {
  $('#cookies').remove();

  var cookiesask = "true";
  localStorage['cookies-closed'] = JSON.stringify(cookiesask);
}

//animate when in viewport (https://stackoverflow.com/questions/27462306/css3-animate-elements-if-visible-in-viewport-page-scroll)
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});