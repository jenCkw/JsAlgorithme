//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const anneeInput = document.getElementById("annee");

let params = [];
for (let i = 20; i > 0; i--) {
  params.push(i);
}

//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let annee;

function onConvert() {
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  annee = parseInt(anneeInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(annee)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  const mois = annee * params[12];

  // ANALYSER ICI AVEC CONSOLE LOG
  // Analyser la variable annee
  // Analyser la variable params
  // Analyser la variable mois
  // FIN ANALYSE

  espaceMessage.innerHTML = annee + " années font " + mois + "mois ";
}

//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener("click", onConvert);
