function destroyer(arr) {
  // Remove all the values

  // Place each argument in the new array
  var argArr = [];

  // begin the count at index 1
  for (var i = 1; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }


  function seekAndDestroy(value, index, array) {
    
    console.log(argArr.indexOf(value) !== -1);
    if (argArr.indexOf(value) === -1)
      return true;
    else
      return false;
  }

  arr = arr.filter(seekAndDestroy);


  return arr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);
