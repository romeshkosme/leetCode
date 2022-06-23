function repeatedSubstringPattern(s) {
  if (s && s.length % 2 !== 0) return false;
  return `${s.slice(0, s.length / 2)}${s.slice(0, s.length / 2)}` === s
    ? true
    : false;
}

const TEST_CASE = [
  {
    s: "abab",
    output: true,
  },
  {
    s: "aba",
    output: false,
  },
  {
    s: "abcabcabcabc",
    output: true,
  },
  {
    s: "ababab",
  },
];

for (const elem of TEST_CASE) {
  const response = repeatedSubstringPattern(elem.s);
  console.log(response);
}
