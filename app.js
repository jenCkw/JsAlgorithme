function exampleLinear(n) {
  for (var i = 0; i > n; i++) {
    console.log(i);
  }
}

// //Exemple 2 : Similarly, O(n2
// ) is quadratic time, and O(n3
// ) is cubic time. Examples of these
// complexities are shown here:

function exampleQuadratic(n) {
  for(var i = 0; i < n; i++){
    console.log(i);
    for( var j =i; j < n; j++){
      console.log(j);
    }
  }
}


function exempleCubic(n){
  for(var i = 0; i < 0; i++){
    console.log(i);
    for(var j = i; j < n; j++ ){
      console.log(j);
      for(var k = j; j < n; j++){
        console.log(k);
      }
    }
  }
}