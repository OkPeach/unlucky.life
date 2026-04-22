var visited = localStorage.getItem('first-visit') || 'false';
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H, cols, rows, chars, colColors;
const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';

$(window).on('load', function () {
  const target = document.getElementById("loading");
  target.style.opacity = '0';
  target.addEventListener('transitionend', () => target.remove());
});

function init() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  cols = Math.floor(W / 18);
  rows = Math.floor(H / 20);
  chars = Array.from({length: cols * rows}, () => ({
    c: CHARS[Math.floor(Math.random() * CHARS.length)],
    opacity: Math.random() * 0.8,
    speed: 0.002 + Math.random() * 0.008
  }));
  colColors = Array.from({length: cols}, (_, col) => {
    const t = (col * 18) / W;
    const r = Math.round(168 + (96 - 168) * t);
    const g = Math.round(85 + (165 - 85) * t);
    const b = Math.round(247 + (250 - 247) * t);
    return `rgb(${r},${g},${b})`;
  });
  ctx.font = '13px monospace';
}

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

function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
  }

function draw() {
  ctx.clearRect(0, 0, W, H);
  chars.forEach((ch, i) => {
    const col = i % cols;
    const x = col * 18;
    const y = Math.floor(i / cols) * 20;
    ch.opacity += ch.speed;
    if (ch.opacity > 1) { ch.opacity = 0; ch.c = CHARS[Math.floor(Math.random() * CHARS.length)]; }
    ctx.fillStyle = colColors[col];
    ctx.globalAlpha = Math.sin(ch.opacity * Math.PI) * 0.6;
    ctx.fillText(ch.c, x, y);
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(init, 150);
});

init();
draw();

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'good morning';
  if (h >= 12 && h < 17) return 'good afternoon';
  if (h >= 17 && h < 21) return 'good evening';
  return 'good night';
}

function updateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const isBeforeBirthday =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (isBeforeBirthday) age--;
  document.getElementById('age').textContent = age;
}

function sendMessage(webhook, visited, ip, city, region, rcode, flag, cname, ccode, asn, type) {
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const Embed = {
    title: visited + " visitor from " + cname + " (" + ccode + ")",
    description: "**" + city + ", " + region + ", " + rcode + "**\nIP: ||**" + ip + "**|| provided by **" + asn + "**\nIP type: **" + type + "**",
    thumbnail: { url: flag },
    footer: {
      text: `Unlucky.life | Developed by PeachWRLD#8888`,
      icon_url: "https://unlucky.life/images/favicon/favicon-32x32.webp"
    },
    timestamp: new Date(),
    color: hexToDecimal("#737DFE")
  };
  request.send(JSON.stringify({
    username: "𝖜𝖊𝖇𝖘𝖎𝖙𝖊 𝖓𝖔𝖙𝖎𝖋𝖎𝖈𝖆𝖙𝖎𝖔𝖓",
    embeds: [Embed]
  }));
}

const oldWH = decodeURIComponent(atob("aHR0cHMlM0ElMkYlMkZkaXNjb3JkLmNvbSUyRmFwaSUyRndlYmhvb2tzJTJGOTk4OTQ1NTAyMzg3MjQ5MjkzJTJGX25XYTQ4THVHRTVJRUhvSDhUUU5IM0FzUHBLOVlLbWFYSy1uM3FNdkgwVnFXTFg5UkotYnlUekRkMzdDT3gzdUQ2NTE="));
const newWH = decodeURIComponent(atob("aHR0cHMlM0ElMkYlMkZkaXNjb3JkLmNvbSUyRmFwaSUyRndlYmhvb2tzJTJGOTk4OTMwODM4Mzc0ODQ2NTE0JTJGT2xqZGFDclhxcXByM1R0dlVpMzJtOEFzcnNmdnpjNDFUTlROblJWeThCbThzM2J4T1BSZWZSbExjdVRVUlJqaE93czA="));

async function fetchUserData() {
  try {
    const res = await fetch(`https://api.ipdata.co?api-key=${atob('YWQyMzJmMWRhZjllODhlZmQzZGM0ZjYzNzM0ZDQyNmY1ZjNjOTNiZWUyZTdhM2ViZjVmMzE4OTM=')}`);
    const data = await res.json();

    document.getElementById('ip-el').textContent = data.ip || '';
    document.getElementById('greet-el').textContent = getGreeting();
    document.getElementById('views-el').textContent = (data.count || 0) + ' views';

    const visit = visited.replaceAll('"', '');
    const wh = visit === 'false' ? newWH : oldWH;
    sendMessage(wh, visit === 'false' ? 'new' : 'old', data.ip, data.city, data.region, data.region_code, data.flag, data.country_name, data.country_code, data.asn.name, data.asn.type);
    localStorage['first-visit'] = JSON.stringify("true");
  } catch(e) {
    console.log(e);
    document.getElementById('greet-el').textContent = getGreeting();
    document.getElementById('views-el').textContent = '— views';
  }
}

function updateClock() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('date').textContent = `${dd}. ${mm}. ${yyyy}`;
  document.getElementById('time').textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);

updateAge('2002-6-24');
fetchUserData();
