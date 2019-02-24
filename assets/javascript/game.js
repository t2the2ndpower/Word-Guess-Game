// My cool crafty guess game.

// Game Variables (wip)

        var wins = 0;  // the number of times the user guesses correctly

        var loses = 0;  // the number of times the user guesses incorrectly

        var initKeyPress = Math.floor(Math.random()*4); // the inital key press to get the game started

        var playerKeyPress; // all of the keypresses the player presses during a single guess. This needs to be cleared out after a successfull guess or player has run out of attempts.

        var gameRound; // may not be needed, but, this variable will hold the current game round index (is this round 1, 2, 3 ,4 etc)

        //var pctname = gameAnswer0.pctname;

        //var pctpic = gameAnswers[0].pctpic;

        //initKeyPress = var randomGameAnswers = gameAnswers[compIndexItem].pctname;

        //var randomGameAnswers = gameAnswers[compIndexItem].pctname;


/*            
**************************************

the answers that should be randomly selected by index by the game, this version tries to create and array with objects in it, didn't seem to work so I created a series of individual objects that were named x1, x2, x3 etc.  It was painful. so glad I don't have to use that idea. 

MY IDEA ABOUT OBJECTS IN AN ARRAY WAS ACTUALLY VALID!  WOOOOHOOO, WON'T HE DO IT! THANKS STERLING!  

I was using a () instead of a [] when referencing each index item. smh. 
I also had a mix of lower and upper case object properties from copying and pasting the wrong thing.

*/

        var gameAnswers = [
        {
            pctName: 'Mica Shift',
            pctPic:  "assets/images/mica.jpg",
            pctDesc:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            pctTease: "Are you ready to give up yet?"
        },
        {
            pctName: 'Skinner Blend',
            pctPic: "assets/images/skinner.jpg",
            pctDesc:"Color gradients are great for giving depth and visual interest to any art piece. Judith Skinner is a hero to literally countless of clayers for her incredible discovery - how to use the pasta machine to easily create ramped color gradients. That's what a Skinner Blend is - using the pasta machine to produce a ramped or smooth color transition gradient. In the illustration to the right, that first drawing with the blue and white triangles may help you understand why the Skinner blend technique works the way it does. The ratio of the two colors as you go from left to right changes.",
            pctTease: "This one is a classic.  If you don't know this you can quit now. ijs."
        },
        {
            pctName: 'Cane',
            pctPic: "assets/images/cane.jpg",
            pctDesc: "A cane is the end picture you create with solid colors of. polymer clay in a long tube that can be sliced off and used on various projects. The making of a cane is the Millefiori style used with glass.",
            pctTease: "Are you ready to give up NOW?!?!?"
        },
        {
            pctName: 'Mokume Gane',
            pctPic: "assets/images/mokume.jpg",
            pctDesc: "Mokume Gane is a traditional Japanese method for laminating various colors of metals together and manipulated them to create patterns that resemble wood patterns. Polymer clay lends itself perfectly to creating patterns from layers of oven-bake clay, manipulating them and removing slices. Layers of clay are manipulated with rubber stamps, texture sheets, needle tools, balls of clay strategically placed under the stack and found objects. Gold, silver or copper leaf may be added between the layers of clay for some very interesting results.",
            pctTease: "What, You don't speak Japanese?  Slacker."
        },
        {
            pctName: 'Sutton Slice',
            pctPic: "assets/images/sutton.jpg",
            pctDesc: "This 3 dimensional polymer clay technique was developed around 20 years ago by polymer clay artist Pete Sutton. The first time I saw it done, was around 10 years ago by well known polymer clay artist Lisa Pavelka. It is one of those techniques that is in-the-commons and is done and taught by many people in our niche. The Sutton Slice is one of those techniques that is simple in theory, but can be tricky to do well. ",
            pctTease: "You're probably gonna hafta Google this one, LOL!"
        },
        {
            pctName: 'Image Transfer',
            pctPic:"assets/images/image_transfer.jpg",
            pctDesc: "Polymer clay image transfer is a technique for taking pictures printed on a laser printer or photocopier and fusing that image to the surface of clay. Whether you're transferring a delicate floral pattern or your favorite cartoon character, this is an exciting, easy method that opens up endless possibilities for making jewelry and other decorative crafts.",
            pctTease: "This one is sooooooo very basic."
        },
        {
            pctName: 'Marbling',
            pctPic: "assets/images/marbling.jpg",
            pctDesc: "Marbling clay is an easy and very satisfying technique. Marble colours together, black with white, white with black (there is a difference) and white with tonal variations of one colour for different outcomes. There’s so much you can do once you have this skill perfected – which won’t take you long. The most important thing to remember when you’re marbling clay is not to over mix the colours. You don’t want to mix it into one colour! You do need a little mixing to create the streaks and gradients though so there’s a bit of trial and error at play here. Best thing to do? Pick up your clay and start experimenting!",
            pctTease: "Hint, you have this in your kitchen.  IF you have nice kitchen counters."
        }
        ];

    console.log(gameAnswers[0].pctName);     


// WORKING: Randomly generate a number to pass into the  randomGameAnswers var     

        var compIdxItem = Math.floor((Math.random() * gameAnswers.length));
    console.log("randomly generated index number is " + compIdxItem);



//  WORKING: Randomly generated number successfully passes through to  randomGameAnsers var and returns a random item from the gameAnswers array of objects

        var randomGameAnswers = gameAnswers[compIdxItem].pctName;
    console.log(randomGameAnswers);



// WORKING: count the number of characters in a pctName

        var pctNameChars = gameAnswers[0].pctName.length;
    console.log(pctNameChars);



// WORKING: create a sting of underscores based on the number kept pctNameChars that represents the number of characters to be guessed

        var pctNameBlanks = "";
        var i;
            
            for (i = 1; i < pctNameChars+1; i++) {
            pctNameBlanks += " ____  " + i;
        }

    console.log(pctNameBlanks)

// WORKING: show the underscores in the html

        var agpUpdate = document.getElementById("activeGamePlay");
            agpUpdate.innerHTML = pctNameBlanks;

    console.log(agpUpdate);


// change the underscores to correctly guessed letters




// WORKING: show the gameplayers keystrokes 

        document.onkeypress = function (k){

        var playerKeyPress = k.key;
    console.log(playerKeyPress);
        }



//NOT WORKING:  put the playerKeyPress letters in the proper div

        /*

        //var w = document.getElementById("userGuessChar");

        //= function (w) {

        //var h = playerKeyPress.insertAdjacentText;
        // h.insertAdjacentText(playerKeyPress + " My inserted text");
        //}

        //console.log(myFunction);

        document.getElementById("userGuessChar").innerHTML += playerKeyPress;

        var ugcUpdate = document.getElementById("userGuessChar");
            ugcUpdate.innerText += playerKeyPress;

            console.log(ugcUpdate);


*/

// WORKING: calculate the number of guesses given per round.  It should be 2.5x the number of characters to be guessed 

        var pctGuesAvail = pctNameChars * 2.5;

    console.log(pctGuesAvail);

// WORKING: show pctGuessAvail in html

        var keyStrokeUpdate = document.getElementById("remainingKeystrokes");
            keyStrokeUpdate.innerHTML = pctGuesAvail;

    console.log(keyStrokeUpdate);



// has game player guessed it correctly within the given guess allotment? (this is just some copy pasted code for a while loop)

        while (i < 10) {
            text += "The number is " + i;
            i++;
        }

// WORKING: display wins variable in the html page

        var winsUpdate = document.getElementById("wins")
            winsUpdate.innerHTML = wins;

// WORKING: display losses variable in the html page

        var lossesUpdate = document.getElementById("losses")
            lossesUpdate.innerHTML = loses;


// WORKING: Display obj infor in the html page

        var pctTitleUpdate = document.getElementById("mstTitle");
            pctTitleUpdate.innerHTML = gameAnswers[0].pctName;

    console.log(pctTitleUpdate);

        var pctDescUpdate = document.getElementById("mstDesc");
            pctDescUpdate.innerHTML = gameAnswers[0].pctDesc;

    console.log(pctDescUpdate);

        var pctPicUpdate = document.getElementById("mstPic");
            pctPicUpdate.src = gameAnswers[0].pctPic;

    console.log(pctPicUpdate);

        var pctTeaseUpdate = document.getElementById("questionTease");
            pctTeaseUpdate.innerHTML = gameAnswers[0].pctTease;
            
    console.log(pctTeaseUpdate);

// WORKING: Hide 'Thanks for Playing' message till game is over    

        var hideUpdate = document.getElementById("thanks");
            hideUpdate.innerHTML = "";    


// Hide congrats message







// Begin Psudo Code **********************************
       

// on first key press generate a random index number and hold it in a variable to use as the first index item to guess

// present the related Object properties associated with the previously randomly generated index number

// create a line of underscores that match the number of characters of the name randomly guessed technique value.

// on subsequent key presses log them in an array variable, 

// present the array of charicters generated by the player's keypress on the screen to the player

// also present, from the same array, values from the array that match the winning technique name as a replacement for the underscores.

// create a variable to hold the winning guesses

// create a variable to hold the loosing guesses

// create a variable to hold the total number of guesses allowed per guess

// after the alotted number of allowed guesses has been reached AND there are still remaining un solved letters, add 1 point to the loosing variable

// if the technique had been successfully guessed before the alloted number of guseese have been used, add 1 point to the winning variable and present an alert or button moving on to the next technique,

// once all the techniques have been guessed, Display the wins and losses and end the game. 




/* Code Notes and snippets

*************************


-------------------

var name = 'JJ Harry';

            // pre es6 concatenation
            console.log('The best person ever is '+ name);

            // es6 template literals
            console.log(`The best person ever is ${name}`);



-------------------

pre-defined html id's

<p id="userGuessChar">Letters that the game player has already used go here.</p>
<p id="remainingKeystrokes">Number of keystrokes left before the game player looses the game</p>
<p id="activeGamePlay">Underscores to be turned into correct letters as the game player presses down on keys</p>
<p id="wins">number of winning guesses</p>
<p id="losses">number of loosing guesses</p>
<p id="congrats">congratulatory messages go here.</p>

--------------------




*************************

End Code Notes  */

