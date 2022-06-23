function minDistance(word1, word2) {
    if (word1 === word2) return 0;
    let steps = 0;
    let delWord1 = false;
    // let delWord2 = false;
    for (let i = 0; i < word1.length; i++) {
        delWord1 = false;
        // delWord2 = false;
        for (let j = 0; j < word2.length; j++) {
            delWord1 = word1[i] === word2[j] ? false : true;
            if (delWord1) break;
        }
        console.log(delWord1, word1)
        if (delWord1) {
            word1 = word1.slice(0, i) + word1.slice(i+1)
            i--;
        }
        // delete from word 1
        // delete from word 2
        // increase steps
    }
    console.log(word1)
}

const TEST_CASE = [
//   {
//     word1: "sea",
//     word2: "eat",
//     output: 2,
//   },
  {
    word1: "leetcode",
    word2: "etco",
    output: 4,
  },
];

for (const elem of TEST_CASE) {
  const response = minDistance(elem.word1, elem.word2);
  console.log(response);
}
