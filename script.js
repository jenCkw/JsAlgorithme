let age;
let ageMajorite = 18;

//Cette fonction affichera le message de validation
function valider() {
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
function refuser() {
  alert("Cette espace est interdit aux personnes mineurs");
}

function onConfirm() {
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(age)) {
    alert("Ceci n'est pas un nombre");
    return;
  }

  //=======Code corrigé======
  if (age < ageMajorite) {
    refuser();
  } else {
    valider();
  }
  //=======/Code corrigé======

  //On vide le champ de saisie
  ageInput.value = "";
}

//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener("click", onConfirm);
