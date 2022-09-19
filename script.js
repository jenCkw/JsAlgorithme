function isEquivalent (a,b) {

  //arry of proparty names

  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b)

  // if their property lengths are different, they're different objects

  if(aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    //if the values of the property are different, not equal
    if(a[propName != b[propName]]){
      return false;
    }

  }
  return true;
}

  // return true

console.log(isEquivalent({ hi: 13 }, { hi: 12 }));