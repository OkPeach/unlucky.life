const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

const progressbar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  document.getElementById("progress-bar").style.width = scrolled + "%";

  //console.log(scrolled + '%')
};

window.onscroll = function () {
  progressbar();
};
