function mutation(arr) {

  // Assign the each element of the array to a variable
  // Make them lowercase
  // Note: We're assuming the array has two entries only
  string0 = arr[0].toLowerCase();
  string1 = arr[1].toLowerCase();
  var count = 0;

  // Iterate through the second string
  for (var i = 0; i < string1.length; i++) {

    if ( string0.indexOf(string1[i]) !== -1)
      count++;
  }

  // Sanity Check
  if (count === string1.length) {
    return true;
  } else {
    return false;
  }

}

mutation(["hello", "hey"]);
