# ping

Using ['Ping' utility](http://github.com/alfg/ping.js), by Alfred Gutierrez, to wake my Heroku app(s), by pinging it / them when a static page is loaded / refreshed. This neatly sidesteps the overkill approach of using scheduled pings to keep the apps awake at all times (hardly fair, since I am using the free tier of Heroku, which is why the dynos sleep after inactivity in the first place).

Note: 'dist' folder included just to hold ping.min.js, though this file is not used by this index.html implementation.

Plan: ping Heroku apps in background from front page of my portfolio, possibly with console.log outputs to confirm / explain pings.

Might also be a good idea to invoke this method when any action on portfolio page, to cover case where page left open on browser for long enough for Heroku apps to sleep, then page returned to later (without refreshing).
