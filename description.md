# catch_me
catch me if you can game

   Concept of the game: Click the rotating bar before it jumps away. Get the most amount of
points before the clock runs out.
Point calculation: Each click gives you ten points times the level number. (Level 1 gives you ten
points per click, level 2 gives you twenty, etc.)
Clicking anywhere but the rotating bar removes the level number of points. (You loose one
point in level 1, two points in level 2, etc.)
The clock: You start off with 60 seconds on the clock. Every level you pass adds another ten
seconds to the clock.
Winning the game: Complete five levels of ten clicks per level.
level:  At the start of the game, the bar rotates 360 degrees in 2 seconds. Every level
speeds it up by 0.25 seconds (2 seconds in the first level. 1.75 in the second level, etc.) At the
start of the game, hovering over the bar triggers the escape after 300 microseconds. After
every level, that amount decreases by 50 microseconds.
