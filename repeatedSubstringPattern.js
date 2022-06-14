function repeatedSubstringPattern(s) {}

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
];

for (const elem of TEST_CASE) {
    const response = repeatedSubstringPattern(elem.s)
    console.log(response);
}