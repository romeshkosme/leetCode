const main = () => {
  romanToInteger("MCMXCIV");
};

const romanToInteger = (x) => {
  const roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  const xLen = x.length
  if (xLen === 1) {
    return roman[x];
  } else {
    let answer = 0
    for (let i = 0; i < x.length; i++) {
      if (i > 0 && roman[x[i]] > roman[x[i-1]]) {
        answer -= roman[x[i-1]]
        answer += roman[x[i]] - roman[x[i-1]]
      } else {
        answer += roman[x[i]]
      }
    }
    return answer;
  }
};

main();
