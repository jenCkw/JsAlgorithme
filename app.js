//on pointe sur l'element de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'element du boutton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de chmaps de saisie
const ageInput = document.getElementById("age");
//On pointe sur l'élément de checkbox de controle
const parentalInput = document.getElementById("parental");

let age;
let isControlParentalActive;
let ageMajorite = 18;

//Cette fonction affichera un message de validation
function valider() {
  espaceMessage.innerHTML = "Vous etes autorisé à entrer";
}

//Cette fonction affichera un message d'ereur
function refuser() {
  alert("cette espace est interdit aux personnes mineurs");
}

function onConfirm() {
  //On récupère la saisie de l"age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //si la saisie n'est pas un nombre, on affiche un message d'erreur
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(age)) {
    alert("ceci n'est pas un nombre");
    return;
  }

  //On recupere la valeur du chkekboc de control parental. "true" si coché ou "false" si décoché
  isControlParentalActive = parentalInput.ariaChecked;

  //=====Code corrigé=====
  if (age < ageMajorite && isControlParentalActive) {
    refuser();
  } else {
    valider();
  }
}
