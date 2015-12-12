function where(arr, num) {
  // Find my place in this sorted array.

  // Grab the number and push it into the array
  arr.push(num);
  console.log(arr);

  // Sort numbers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  arr.sort(function(a, b) {
    return a - b;
  });


  num = arr.indexOf(num);

  return num;
}

where([3, 10, 5], 3);
