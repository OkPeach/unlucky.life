const logo = document.querySelectorAll("#logo path");

//for(let i = 0; i < logo.length; i++){
//    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//}

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const options = {
threshold: 0.7
};

var p1 = 'f3c93bee2e7a';

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})

var p2 = 'ad232f1daf9e88efd3d';

function CopyToClipboard(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setTimeout(function(){ document.getElementById(id).innerHTML = `PeachWRLD#8888`;$("#discord").load(" #discord > *"); }, 700);
    document.getElementById(id).innerHTML = "Copied tag!";
};

function CopyToClipboardEmail(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setTimeout(function(){ document.getElementById(id).innerHTML = `contact@unlucky.life`;}, 700);
    document.getElementById(id).innerHTML = "Copied email!";
};

var p3 = '3ebf5f31893';

function setClipboard(value, id, aftertext) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  setTimeout(function(){ document.getElementById(id).innerHTML = aftertext;}, 1000);
  document.getElementById(id).innerHTML = "Copied BTC wallet!";
}

function CopyToClipboardBTC(id){
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  setTimeout(function(){ document.getElementById(id).innerHTML = `BTC`;$("#bitcoin").load(" #bitcoin > *"); }, 700);
  document.getElementById(id).innerHTML = "Copied wallet!";
};

function CopyToClipboardETH(id){
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  setTimeout(function(){ document.getElementById(id).innerHTML = `ETH`;$("#eth").load(" #eth > *"); }, 700);
  document.getElementById(id).innerHTML = "Copied wallet!";
};

document.getElementById("year").innerHTML = new Date().getFullYear();


function analytics()
        {
          var p4 = 'c4f63734d426f5';
          var enB = CryptoJS.AES.encrypt(p2+p4+p1+p3, "helloworld");
          var deB = CryptoJS.AES.decrypt(enB, "helloworld");
          $.getJSON('https://api.ipdata.co/?api-key=' + deB.toString(CryptoJS.enc.Utf8));
        }

let sliderItem = $(".slider").children(".item.active");
sliderItem.prev(".item").css({
  "left":-200,
});

sliderItem.next(".item").css({
  "right":-200,
});
let i = $(".slider").children(".item");
let ind=0;
$(".slider").children('.item').each(function(){
  $(this).attr('data-index',ind++);
  
})
i.on('click',function(e){
  const that = $(this);
  let dataIndex = that.data('index');
  $(".item").removeClass('active');
  that.addClass('active');
  i.each(function(){
    if($(this).data('index')==dataIndex){
      $(this).addClass('active');
      $(this).css({
        "left":0,
        "right":0,
        "z-index":3,
      });
      if(dataIndex=="1"){
        $(".item[data-index=2]").css({
          "left":0,
          "right":-200,
          "z-index":1,
        })
        $(".item[data-index=0]").css({
          "left":-200,
          "right":0,
          "z-index":1,
        })
      }else if(dataIndex=="0"){
        $(".item[data-index=2]").css({
          "left":-200,
          "right":0,
          "z-index":1,
        })
        $(".item[data-index=1]").css({
          "left":0,
          "right":-200,
          "z-index":1,
        })
      }else if(dataIndex=="2"){
        $(".item[data-index=1]").css({
          "left":-200,
          "right":0,
          "z-index":1,
        })
        $(".item[data-index=0]").css({
          "left":0,
          "right":-200,
          "z-index":1,
        })
      }
    }
  })
})