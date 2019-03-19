# Ping

### The problem

Heroku free tier apps are on dynos that sleep after 30 minutes of inactivity. Pinging them at intervals of less than 30 minutes will keep them 'awake', _but_ the free tier only allows for 1000 free dyno hours / month. A month is up to 744 hours, meaning a total of 1.25 'always-awake' dynos for free. I have 4 Heroku apps linked via [my portfolio](https://simontharby.com/), and will be adding more. Since each app uses one free dyno, I will incur (quite significant) costs if I simply ping them all to keep them all constantly active.

### The (partial) solution

Use ['Ping' utility](http://github.com/alfg/ping.js), by Alfred Gutierrez, to wake my Heroku app(s), by pinging them when my portfolio web-page is loaded / refreshed and show a 'server initializing' message for each Heroku app linked in the portfolio.

Also, monitor the portfolio page for events (clicks and mouse-overs), and check the time since last pinging the Heroku apps on each event occurrence. If this time is > 15 mins and < 30 mins, then silently ping the apps again to keep their dynos active. If this time is >= 30 minutes, then ping the apps and show the 'server initializing' message for each Heroku app linked in the portfolio.

Thus, visits to my portfolio page will trigger pings to my Heroku apps, and continued / renewed activity on that page will keep their dynos 'awake' / 'reawaken' them. This should allow my Heroku dynos plenty of opportunities to 'sleep' in the meantime, hopefully avoiding / minimizing dyno fees.

The user experience will often not be ideal, but will at least include clear messages to explain what is (and is not) happening and, in some cases, will avoid any issues for the user (e.g. if a user takes 30 seconds to read my profile before choosing to visit a Heroku app).

The code here is the functional proof-of-concept, with a simplified 'server initializing' message which I have styled accordingly in my portfolio web-page.
