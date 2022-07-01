//Les methodes
//1.indexof
//let nom = 'jenny';
//console.log(nom.indexOf('y'));

//Les varaibles
// let nom = "jenny";
// let postnom = "Chikwanine"
// console.log(nom, postnom);

// let nom_complet = nom + " " + postnom;

// console.log(nom_complet, postnom);

//---------------toUppercase----------
// let lgr = nom.length;
// console.log(lgr);
// console.log(nom.toUpperCase());
// console.log(nom.toLowerCase());


//Les methodes en js
//-----indexof

// let nom = 'jenny';
// console.log(nom.indexOf('y'));

//-----slice

// let nom = jenny;
// console.log(nom.slice(3,5));

//Exercice1


//----methode substr

// let nom = 'jenny';
// console.log(nom.substr(0, 4));

// console.log(nom.typeof);

// Fonctions

// const myTExt = 'i am jenny';
// const newString = myTExt.replace('jenny', 'chikwanine')
// console.log(myTExt);
// console.log(newString);

// let nom = 'Dorcas muhindo';
// nom = 'jenny chikwnine';
// console.log(nom);

// let name = 'je suis fort moi';
// let name2 = name.replace('je suis', 'nous sommes');
// console.log(name, name2);

// // fonction join

// const myArray = ['I', 'love', 'chocolate'];

// const madeAString = myArray.join(' ');
// console.log(madeAString);


// const jenny = ['I', 'love', 'chocolate'];

// const chik = jenny.join(' ');
// console.log(chik);

//la methode random
//const myNumber = Math.random()
//console.log(myNumber);

//comportement dynalique avec js
// let para = document.querySelector('p')

// para.addEventListener('click', updateName);
// para.addEventListener('click', deletename);

// function updateName() {
//     let name = prompt('enter a new name');
//     para.textContent = 'player 1:' + name;
//     para.textContent = 'player 2:' + name;

// }

// function deletename(){
//     let name2 =  prompt('delete name')
//     para.textContent =  'delete 2:'+ name2;
// }

//function 2
//  let para = document.querySelector('p');
//  para.addEventListener('click', updateName);

//  function updateName() {
//      let name = prompt('Enter a new name');
//      para.textContent = 'player 1:' +name;
//  }

function createParagraphe() {
    let para =  document.createElement('p');
    para.textContent = 'Vous avez cliqué';
    document.body.appendChild(para)
}

let buttons = document.querySelectorAll('button');

for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', createParagraph);
}