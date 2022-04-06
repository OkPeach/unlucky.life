$(window).on('load', function () {
    setTimeout(function () {
      //locate "target" aka the preload screen and slowly transition to 0 opacity and after transition deletes the whole element
      const target = document.getElementById("loading");
      target.style.opacity = '0'
      target.addEventListener('transitionend', () => target.remove());  
    }, 1250);
  
    console.log('Loaded, welcome!')
  }) 