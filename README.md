# Ping

### The problem

Heroku free tier apps are on dynos that sleep after 30 minutes of inactivity. Pinging them at intervals of less than 30 minutes will keep them 'awake', BUT the free tier only allows for 1000 free dyno hours / month. A month is up to 744 hours, meaning a total of 1.25 'always-awake' dynos for free. I have 4 apps I wish to link via my portfolio, and will be adding more. Since each app uses one free dyno, I will incur (quite significant) costs if I simply ping them all to keep them all constantly active.

### The (partial) solution

Use ['Ping' utility](http://github.com/alfg/ping.js), by Alfred Gutierrez, to wake my Heroku app(s), by pinging them when (my portfolio) is loaded / refreshed and and show a 'server initializing' message for each app linked in the portfolio.

Also, monitor the portfolio page for events (clicks and mouse-overs), and check the time since last pinging the Heroku apps on each event occurrence. If this time is > 15 mins and < 30 mins, then silently ping the apps again to keep their dynos active. If this time is > 30 minutes then ping the apps and show the 'server initializing' message for each app linked in the portfolio.

The code here is the functional proof-of-concept, with a simplified 'server initializing' message which I have styled accordingly in my portfolio web-page.
