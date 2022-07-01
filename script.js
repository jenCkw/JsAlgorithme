// generer un nombre aleatoire .
let randomNumber = Math.floor(Math.random() * 100) + 1; //reçoit le nombre aléatoire entre 1 et 100, calculé en utilisant un algorithme mathématique.

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// function checkGuess() {
//     alert('je suis un espace réservé')
// }