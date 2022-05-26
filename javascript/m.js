//credit: DenverCoder1 edited by me
function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    var years = Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
    return ' ' + years + ' years old'
  }
  //console.log(getAge('2002-06-24'));

  $(window).on('load', function () {
  document.getElementById("age").innerHTML = getAge('2002-06-24');
  });

function onload(){
    document.getElementById("line").classList.add("lineanimation");
    document.getElementById("line2").classList.add("lineanimation");

    document.getElementById("line3").classList.add("lineanimation");
    document.getElementById("line4").classList.add("lineanimation");

    document.getElementById("about").classList.add("aboutanimation");
    document.getElementById("hobbies").classList.add("hobbiesanimation");

    document.getElementById("name").classList.add("nameanimation");

    document.getElementById("header").classList.add("headeranim");
    document.getElementById("menuToggle").classList.add("menutoggleanimation");

    document.getElementById("year").innerHTML = new Date().getFullYear();
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

//planet animation
/* 
//some code from https://codepen.io/Mamboleoo/pen/NWaogXW
const svg = document.querySelector('svg');
const fuse = svg.querySelector('.st1');

const val = { distance: 0 };
gsap.to(val, {
  distance: fuse.getTotalLength(),
  repeat: -1,
  repeatDelay: 0.1,
  duration: 6,
  ease: Power0.easeNone,
  onUpdate: () => {
    const point = fuse.getPointAtLength(val.distance);
  }
});

fuse.setAttribute('stroke-dasharray', fuse.getTotalLength());
fuse.setAttribute('stroke-dashoffset', fuse.getTotalLength() * -1);
gsap.to(fuse, {
  strokeDashoffset: fuse.getTotalLength(),
  duration: 6,
  repeat: -1,
  repeatDelay: 0.1,
  ease: Power0.easeNone,
}); */