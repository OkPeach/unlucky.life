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
    })
})

   const itemsContainer = document.getElementById('bucket-items');
    let items = JSON.parse(localStorage.getItem('bucketItems')) || [
      { text: "Climb a mountain", completed: false },
      { text: "Visit Japan", completed: true }
    ];

    function renderItems() {
      itemsContainer.innerHTML = '';
      items.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'bucket-item' + (item.completed ? ' completed' : '');
        el.textContent = `${item.completed ? '[x]' : '[ ]'} ${item.text}`;
        el.onclick = () => {
          items[index].completed = !items[index].completed;
          renderItems();
        };
        el.ondblclick = () => {
          items.splice(index, 1);
          renderItems();
        };
        itemsContainer.appendChild(el);
      });
      localStorage.setItem('bucketItems', JSON.stringify(items));
    }

    function addItem() {
      const text = prompt("Enter a new bucket list item:");
      if (text) {
        items.push({ text, completed: false });
        renderItems();
      }
    }

    renderItems();
    