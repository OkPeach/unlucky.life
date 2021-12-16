const logo = document.querySelectorAll("#logo path");

//for(let i = 0; i < logo.length; i++){
//    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//}

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const options = {
threshold: 0.7
};

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


function CopyToClipboard(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setTimeout(function(){ document.getElementById(id).innerHTML = `PeachWRLD#8888`;$("#discord").load(" #discord > *"); }, 400);
    document.getElementById(id).innerHTML = "Copied! :)";
};

function CopyToClipboardEmail(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setTimeout(function(){ document.getElementById(id).innerHTML = `contact@unlucky.life`;}, 400);
    document.getElementById(id).innerHTML = "Copied! :)";
};

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