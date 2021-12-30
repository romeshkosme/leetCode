// validate palindrome for alphanumeric characters
// remove space and special characters
((s) => {
  let parseString = "";
  let reverseString = "";
  for (char of s) {
    let code = char.charCodeAt(0);
    if ((code >= 65 && code <= 90)) {
        parseString += String.fromCharCode(code+32);
    }
    if (
      (code >= 48 && code <= 57) ||
      (code >= 97 && code <= 122)
    ) {
      parseString += char;
    }
  }
  if (parseString === "") return true;
  for (char of parseString) {
    reverseString = char + reverseString;
  }
  if (parseString === reverseString) {
    return true;
  } else {
    return false;
  }
})("ROmesh Kosme $%^& 3005          ");
