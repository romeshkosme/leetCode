((pattern, s) => {
  let patternMap = new Map();
  let sMap = new Map();
  let i = 0;
  let word = "";
  for (let char of pattern) {
    if (!patternMap.get(char)) {
      word = "";
      while (s.length > i) {
        if (s[i] != " ") {
          word += s[i];
          i++;
        } else if (s[i] == " ") {
          i++;
          break;
        }
      }
      patternMap.set(char, word);
    } else {
      while (s.length > i) {
        i++;
        if (s[i] === " ") {
          break;
        }
      }
    }
  }
  console.log(patternMap);
  // i = 0;
  // let j = 0;
  // word = "";
  // while (s.length > i) {
  //   if (s[i] != " ") {
  //     word += s[i];
  //     i++;
  //   } else if (s[i] == " ") {
  //     i++;
  //     word = ""
  //   }
  //   if (!sMap.get(word)) {
  //     sMap.set(word, pattern[j])
  //   }
  //   j++
  //   console.log(word, word.length)
  // }
  // console.log(sMap)
  // return sentence === s ? true : false;
})("deadbeef", "d e a d b e e f");
//              0 2 4 6 8 10