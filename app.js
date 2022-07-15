let age;
let ageMajorite = 18;

//cette fonction affichera le message de validation
function valider() {
  espaceMessage.innerHTML = "Vous etes majeure";
}

//cette fonction affichera un message d'erreur
function refuser() {
  alert("Vous n'etes pas majeure");
}

function confirm() {
  //On recupere la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);

  // si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(age)) {
    alert("ceci n'est pas un nombre");
    return;
  }

  //======Code corrigé========

  if (age < ageMajorite) {
    refuser();
  } else {
    valider();
  }

  //code corrigé

  //On vide le champs de saisie
  ageInput.value = "";
}

bouton.addEventLister("click", onConfirm);
