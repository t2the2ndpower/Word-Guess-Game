// My cool crafty guess game.

//Ask users if they want to play the game

confirm ("Do you want to play, 'Guess the Technique'?");//the index page should just be graphics, once player confirms go to the game play page



alert ("Press any key to get started.");//this should happen on the game play page

var wins = 0;  // the number of times the user guesses correctly
var loses = 0;  // the number of times the user guesses incorrectly

var gameAnswers = [
    {
        pctname: 'Mica Shift',
        pctpic: Image.src = "assets/images/mica.jpg",
        pctdesc:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch."
    },
    {
        pctname: 'Skinner Blend',
        pctpic: Image.src = "assets/images/skinner.jpg",
        pctdesc:"Color gradients are great for giving depth and visual interest to any art piece. Judith Skinner is a hero to literally countless of clayers for her incredible discovery - how to use the pasta machine to easily create ramped color gradients. That's what a Skinner Blend is - using the pasta machine to produce a ramped or smooth color transition gradient. In the illustration to the right, that first drawing with the blue and white triangles may help you understand why the Skinner blend technique works the way it does. The ratio of the two colors as you go from left to right changes."
    },
    {
        pctname: 'Cane',
        pctpic: Image.src = "assets/images/cane.jpg",
        pctdesc: "A cane is the end picture you create with solid colors of. polymer clay in a long tube that can be sliced off and used on various projects. The making of a cane is the Millefiori style used with glass."
    },
    {
        pctname: 'Mokume Gane',
        pctpic: Image.src = "assets/images/mokume.jpg",
        pctdesc: "Mokume Gane is a traditional Japanese method for laminating various colors of metals together and manipulated them to create patterns that resemble wood patterns. Polymer clay lends itself perfectly to creating patterns from layers of oven-bake clay, manipulating them and removing slices. Layers of clay are manipulated with rubber stamps, texture sheets, needle tools, balls of clay strategically placed under the stack and found objects. Gold, silver or copper leaf may be added between the layers of clay for some very interesting results."
    },
    {
        pctname: 'Sutton Slice',
        pctpic: Image.src = "assets/images/sutton.jpg",
        pctdesc: "This 3 dimensional polymer clay technique was developed around 20 years ago by polymer clay artist Pete Sutton. The first time I saw it done, was around 10 years ago by well known polymer clay artist Lisa Pavelka. It is one of those techniques that is in-the-commons and is done and taught by many people in our niche. The Sutton Slice is one of those techniques that is simple in theory, but can be tricky to do well. "
    },
    {
        pctname: 'Image Transfer',
        pctpic: Image.src = "assets/images/image_transfer.jpg",
        pctdesc: "Polymer clay image transfer is a technique for taking pictures printed on a laser printer or photocopier and fusing that image to the surface of clay. Whether you're transferring a delicate floral pattern or your favorite cartoon character, this is an exciting, easy method that opens up endless possibilities for making jewelry and other decorative crafts."
    },
    {
        pctname: 'Marbling',
        pctpic: Image.src = "assets/images/marbling.jpg",
        pctdesc: "Marbling clay is an easy and very satisfying technique. Marble colours together, black with white, white with black (there is a difference) and white with tonal variations of one colour for different outcomes. There’s so much you can do once you have this skill perfected – which won’t take you long. The most important thing to remember when you’re marbling clay is not to over mix the colours. You don’t want to mix it into one colour! You do need a little mixing to create the streaks and gradients though so there’s a bit of trial and error at play here. Best thing to do? Pick up your clay and start experimenting!"
    }
];

var keyPress = '';
var userKeyPress = '';
var isTired = True;

var pctname = gameAnswers[0].pctname;
var pctpic = gameAnswers[0].pctpic;


var userKeyPress = [];


var name = 'JJ Harry';

// pre es6 concatenation
console.log('The best person ever is '+ name);

// es6 template literals
console.log(`The best person ever is ${name}`);


var compIndexItem = Math.floor(Math.random()*4);

var randomGameAnswers = gameAnswers[compIndexItem].pctname;


