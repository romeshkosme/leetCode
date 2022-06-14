function countSegments(s) {
  if (!s || s === "") return false;
  const words = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " || s.length - 1 === i) {
      if (s.length - 1 === i && s[i] !== " ") word += s[i];
      if (word) words.push(word);
      word = "";
      continue;
    }
    word += s[i];
  }
  return words.length;
}

const test = [
  {
    s: "Hello, my name is John",
    output: 5,
  },
  {
    s: "Hello",
    output: 1,
  },
  {
    s: "!, # $ $",
    output: 4,
  },
  {
    s: "                ",
    output: 16,
  },
];
for (const elem of test) {
  const response = countSegments(elem.s);
  console.log("response - - ", response);
}

//  0 <= s <= 300
