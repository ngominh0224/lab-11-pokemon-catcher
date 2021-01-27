# lab-11-pokemon-catcher

1. HTML setup
    -Instructions
    -Three unique clickable pokemon images

2. Results page:
    -Generate caughts and encounters for each pokemon

Plan
1.  When a user clicks on a pokemon image...
    -Track which pokemon the user clicked on
    -Three new pokemon appear
        -Check thtat they're unique (none of ids are the same)
        -If not . . . generate 3 more, and repeat until they are unique.
    -Increment the seen property for all 3 new pokemon
        -For each of these 3 pokemon,
            -If they've seen this pokemon
                -Grab that particular object from cart and increment its seen property.
            -If they've NOT seen this pokemon before
                -Initialize a new "Cart" with a seen: 1 and caught: 0.

        -On click, 
            -Increment the 'caught' property of the clicked pokemon.
            -If the user has done this 10 times, redirect to the results page.
            -Otherwise, load 3 more pokemon and repeat.
