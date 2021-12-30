((s) => {
  let words = [];
  let word = "";
  let index = 0;
  for (const char of s) {
    index++;
    if (char != " ") {
      word += char;
    }
    if (word && word.length > 0 && (char == " " || index == s.length)) {
      words.push(word);
      word = "";
    }
  }
  return words[words.length - 1].length;
})("Hello World");
