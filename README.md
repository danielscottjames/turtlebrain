# turtlebrain

Run from this directory (after running `npm install`)

`node index.js <PORT> <DEV_MODE>`
 
This is a pretty vanilla express.js web server using handlebars as the templating engine.


There are multiple levels, and each level can have multiple specific problems.
After completing a problem, you are redirected to a random problem from the next level up. 
The intention here is to add a little friction to cheating, not make it impossible to cheat.

if `DEV_MODE` is true, then `/solution/<ID>` is my animated solution to the sample for level `<ID>` used to render GIFs