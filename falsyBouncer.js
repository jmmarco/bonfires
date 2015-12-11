function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  function isFalsy(value) {
    if (value === false)
      return false;
    else if (value === null)
      return false;
    else if (value === 0)
      return false;
    else if (value === "")
      return false;
    else if (value === undefined)
      return false;
    else if (isNaN(value) === true && typeof(value) !== 'string')
      return false;
    else
      return true;
  }

  arr = arr.filter(isFalsy);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
