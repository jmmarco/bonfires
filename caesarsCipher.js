function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log("The length of the Alphabet is: ", alphabet.length);

  console.log("Encode string is: ", codeArr);


  codeArr.forEach(function(item, index) {
    console.log("Item is: ", item);
    //console.log("Index is: ", index);

    var letter = "";
    for (var i = 0; i < alphabet.length; i++) {
      if (item === alphabet[i]) {
        if (i >= 13) {
          letter = alphabet[i - 13];
          decodedArr.push(letter);
        }
        else {
          letter = alphabet[i + 13];
          decodedArr.push(letter);
        }
      }
    }
    if (item === " ")
      decodedArr.push(" ");
    else if (item === "?")
      decodedArr.push("?");
    else if (item === "!")
      decodedArr.push("!");
    else if (item === ".")
      decodedArr.push(".");
  });

  // TODO: Use indexOf instead of a multiple conditional See: http://stackoverflow.com/questions/17616624/detect-if-string-contains-any-spaces

  console.log("Decoded string is: ", decodedArr);


  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR YBIR?");
