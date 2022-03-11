function reportWindowSize() {
    document.getElementById("winRes").innerHTML = 'Window resolution: ' + $(window).width() + 'px × ' + $(window).height() + 'px';
}

window.onresize = reportWindowSize;