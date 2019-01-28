# ping

Using ['Ping' utility](http://github.com/alfg/ping.js), by Alfred Gutierrez, to wake my Heroku app(s), by pinging it / them when a static page is loaded / refreshed. This neatly sidesteps the overkill approach of using scheduled pings to keep the apps awake at all times (hardly fair, since I am using the free tier of Heroku, which is why the dynos sleep after inactivity in the first place).

Note: 'dist' folder included just to hold ping.min.js, though this file is not used by this index.html implementation.

Plan: ping Heroku apps in background from front page of my portfolio, possibly with console.log outputs to confirm / explain pings.
