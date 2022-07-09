// generer un nombre aleatoire .

// let randomNumber = Math.floor(Math.random() * 100) + 1; //reçoit le nombre aléatoire entre 1 et 100, calculé en utilisant un algorithme mathématique.

// let guesses = document.querySelector('.guesses');
// let lastResult = document.querySelector('.lastResult');
// let lowOrHi = document.querySelector('.lowOrHi');

// let guessSubmit = document.querySelector('.guessSubmit');
// let guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess(){
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//       guesses.textContent = 'Propositions précédentes&nbsp;: ';
//     }
//     guesses.textContent += userGuess + ' ';

//     if (userGuess === randomNumber) {
//       lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
//       lastResult.style.backgroundColor = 'green';
//       lowOrHi.textContent = '';
//       setGameOver();
//     } else if (guessCount === 10) {
//        lastResult.textContent = '!!! PERDU&nbsp;!!!';
//        setGameOver();
//     } else {
//        lastResult.textContent = 'Faux&nbsp;!';
//        lastResult.style.backgroundColor = 'red';
//        if (userGuess < randomNumber) {
//         lowOrHi.textContent = 'Le nombre saisi est trop petit !';
//        } else if (userGuess > randomNumber) {
//         lowOrHi.textContent = 'Le nombre saisi est trop grand !';
//        }
//     }

//     guessCount++;
//     guessField.value = '';
//     guessField.focus();
//   }

//produit de deux nombres
// function myFunction(a, b) {
//   return a * b;
// }

// let x = myFunction(4, 5);
// console.log(x);

//Convert Fahrenheit to Celsius:

// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);

// let x = function toCelsius(a) {
//   let text = "The temperature is " + x + " Celsius";
//   return text;
// };
// toCelsius(7);
// console.log(text);

//object

const car = {
  type: "fiat",
  model: "500",
  color: "blue",
};

console.log(car.type);
