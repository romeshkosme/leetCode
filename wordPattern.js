function wordPattern(pattern, s) {
  const data = {};
  let startIndex = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (startIndex === false) return false;
    const { word, nextStart } = getWord(startIndex, s);
    if (!word) return false; // if word is blank
    if (!verifyData(word, data, pattern[i])) return false;
    if (data[pattern[i]] && data[pattern[i]] !== word) {
      return false;
    } else {
      data[pattern[i]] = word;
    }
    if (nextStart && !pattern[i+1]) return false;
    startIndex = nextStart;
  }
  return true;
}
function verifyData(word, data, skipAlpha) {
  for (const alpha in data) {
    if (skipAlpha === alpha) continue;
    if (word === data[alpha]) return false;
  }
  return true;
}
function getWord(startIndex, s) {
  let word = "";
  let index = startIndex;
  while (s[index] && s[index] != " ") {
    word += s[index];
    index++;
  }
  return { word, nextStart: s[index + 1] ? index + 1 : false };
}
const TEST_CASE = [
  {
    pattern: "abba",
    s: "dog cat cat dog",
    answer: true,
  },
  {
    pattern: "abba",
    s: "dog cat cat fish",
    answer: false,
  },
  {
    pattern: "aaaa",
    s: "dog cat cat dog",
    answer: false,
  },
  {
    pattern: "abba",
    s: "dog dog dog dog",
    answer: false,
  },
  {
    pattern: "abcde",
    s: "a b c d e",
    answer: true,
  },
  {
    pattern: "aaa",
    s: "aa aa aa aa",
    answer: false,
  },
];
for (const elem of TEST_CASE) {
  const response = wordPattern(elem.pattern, elem.s);
  console.log(response === elem.answer);
}
// console.log(wordPattern("aaa", "aa aa aa aa"))
