const rowOne = "qwertyuiop";
const rowTwo = "asdfghjkl";
const rowThree = "zxcvbnm";
((words) => {
  let response = [];
  let position;
  for (let word of words) {
    // one
    for (let char of word.toLowerCase()) {
      position = rowOne.indexOf(char);
      if (position < 0) break;
    }
    if (position >= 0) {
      response.push(word);
      continue;
    }
    // two
    for (let char of word.toLowerCase()) {
      position = rowTwo.indexOf(char);
      if (position < 0) break;
    }
    if (position >= 0) {
      response.push(word);
      continue;
    }
    // three
    for (let char of word.toLowerCase()) {
      position = rowThree.indexOf(char);
      if (position < 0) break;
    }
    if (position >= 0) {
      response.push(word);
      continue;
    }
  }
  return response;
})(["adsdf","sfd"]);
// ["Hello","Alaska","Dad","Peace"]
// ["omk"]
// ["adsdf","sfd"]
["qwertyuiop", "asdfghjkl", "zxcvbnm"];
