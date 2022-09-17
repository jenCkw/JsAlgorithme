function sym(...args){
  let result = [];
  for(let i = 0; i < args.length; i++){

    //pour  parcourrir le args
    const arr = args[i];
    result = [...result, ...arr].filter(x => !(result.includes(x) && arr.includes(x)) )

  }
  
  //ceci empeche la diplication de set

  let set = new Set(result)
  return [...set]
}

let res = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(res)