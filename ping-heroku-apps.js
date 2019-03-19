/* Pings Heroku apps when page opened or refreshed, or on any mouseover or click
   if apps not pinged in last 15 minutes. Shows notice that Heroku app servers
   may be initializing when when page opened or refreshed, or on any mouseover
   or click if apps not pinged in last 30 minutes.*/

document.body.addEventListener('click', function() {
  pingIfDue();
});

document.body.addEventListener('mouseover', function() {
  pingIfDue();
});

let last_run = new Date;
let apps = {'Dream Flights': 'https://dream-flights-simontharby.herokuapp.com/',
            'Social Light': 'https://social-light-simontharby.herokuapp.com/',
            'Members Only': 'https://members-only-simontharby.herokuapp.com/',
            'Blogger': 'https://blogger-simontharby.herokuapp.com/'};
const FRAME_DURATION = 1000;
const getTime = typeof performance === 'function' ? performance.now : Date.now;
let noticeTime = 31;
let lastUpdate = getTime();
let notice = document.getElementById('notice')

notice.style.display = 'none';
showNotice();
pingApps();

function pingIfDue() {
  if ((new Date - last_run) / 1000 > 10) { // > 899 secs = 15 mins or more
    if ((new Date - last_run) / 1000 > 20) { // > 1799 secs = 30 mins or more
      showNotice();
    }
    last_run = new Date;
    pingApps();
  }
}

function pingApp(index) {
  var p = new Ping();
  p.ping(apps[index], function(err, data) {
    console.log(`pinged ${index} in ${data} ms`);
  });
}

function pingApps() {
  let test = new Date;

  for (var index in apps) {
    pingApp(`${index}`);
  }
}

function animateNotice() {
  const now = getTime();
  const delta = (now - lastUpdate) / FRAME_DURATION;
  noticeTime -= Math.round(delta);
  notice.style.color = 'blue';
  lastUpdate = now;
  if (noticeTime < -5) {
    notice.style.display = 'none';
    clearInterval(noticeAnim);
  } else if (noticeTime <= 0) {
    notice.style.color = 'green';
    notice.innerHTML = `Application server ACTIVE.`;
  } else {
    notice.innerHTML = `NOTE: This app's server is initializing and may be unresponsive for up to ${noticeTime} seconds.`;
    notice.style.display = 'inline-block';
  }
}

function showNotice() {
  noticeTime = 31;
  lastUpdate = getTime();
  noticeAnim = setInterval(function(){ animateNotice() }, 1000);
}
