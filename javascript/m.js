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

    document.getElementById("about").classList.add("aboutanimation");
    document.getElementById("hobbies").classList.add("hobbiesanimation");

    document.getElementById("name").classList.add("nameanimation");

    document.getElementById("header").classList.add("headeranim");
    document.getElementById("menuToggle").classList.add("menutoggleanimation");
}