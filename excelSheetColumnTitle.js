((columnNumber) => {
  if (columnNumber <= 26) return String.fromCharCode(64 + columnNumber);
  let response = "";
  let column = columnNumber;
  while (column > 26) {
    if (column % 26 === 0) {
      response += "Z";
      column = column / 26 - 1;
      response += String.fromCharCode(64 + column);
    } else {
      response += String.fromCharCode(64 + (column % 26));
      column = column - (column % 26);
      column = column / 26;
      if (column > 26) continue;
      response += String.fromCharCode(64 + column);
    }
  }
  return response.split("").reverse().join("");
})(702);
//
