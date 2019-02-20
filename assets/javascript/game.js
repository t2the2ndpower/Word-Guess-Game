// My cool crafty guess game.

//Ask users if they want to play the game

confirm ("Do you want to play, 'Guess the Technique'?");



alert ("Press any key to get started.");

var wins = 0;  // the number of times the user guesses correctly
var loses = 0;  // the number of times the user guesses incorrectly

var gameWords = [
    {
        pctname: 'Mica Shift',
        pctpic: '#',
        pctdesc:'This is a description of MicaShift'
    },
    {
        pctname: 'Skinner Blend',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
    {
        pctname: 'Cane',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
    {
        pctname: 'Mokume Gane',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
    {
        pctname: 'Sutton Slice',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
    {
        pctname: 'Image Transfer',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
    {
        pctname: 'Marbling',
        pctpic: '#',
        pctdesc:'This is a description for casey'
    },
];

var keyPress = '';
var userKeyPress = '';
var isTired = True;

var pctname = gameWords[0].pctname;
var pctpic = gameWords[0].pctpic;


var userKeyPress = [];


var name = 'JJ Harry';

// pre es6 concatenation
console.log('The best person ever is '+ name);

// es6 template literals
console.log(`The best person ever is ${name}`);


var compIndexItem = Math.floor(Math.random()*4);

var randomGameWords = gameWords[compIndexItem].pctname;