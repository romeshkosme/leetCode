// integer to roman
const main = () => {
  romanToInt("490")
}

const romanToInt = function(s) {
    let romanNumber = "";
    const digits = s.split("")
    let index = 0
    let answer = ""
    for (const element of digits) {
      index++;
      answer += calculateRoman(element, (digits.length - index))
    }
    console.log(answer)
};

const calculateRoman = (digit, place) => {
  if (digit == 0) {
    return ""
  }
  const roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  let answer = ""
  const number = digit*Math.pow(10, place)
  if (number >= 1 && number < 5) {
    let a = 0;
    while (a < number && a < 3) {
      answer += roman[1]
      a++;
    }
    answer = number > 3 ? roman[1] + roman[5] : answer
  } else if( number >= 5 && number < 10) {
    answer = roman[5]
    let a = 5;
    while (a < number && a < 8) {
      answer += roman[1]
      a++;
    }
    answer = number > 8 ? roman[1] + roman[10] : answer
  } else if (number >= 10 && number < 50) {
    answer = roman[10]
    let a = 10
    while (a < number && a < 30) {
      answer += roman[10]
      a+=10
    }
    answer = number > 30 ? roman[10] + roman[50] : answer
  } else if (number >= 50 && number < 100) {
    answer = roman[50]
    let a = 50
    while (a < number && a < 80) {
      answer += roman[10]
      a+=10
    }
    answer = number > 80 ? roman[10] + roman[100] : answer
  } else if (number >= 100 && number < 500) {
    answer = roman[100]
    let a = 100;
    while(a < number && a < 300) {
      answer += roman[100]
      a+=100
    }
    answer = number > 300 ? roman[100] + roman[500] : answer
  } else if (number >= 500 && number < 1000) {
    answer = roman[500]
    let a = 500
    while (a < number && a < 800) {
      answer += roman[100]
      a+=100
    }
    answer = number > 900 ? roman[100] + roman[1000] : answer
  } else if (number >= 1000) {
    answer = roman[1000]
    let a = 1000
    while (a < number && a < 3000) {
      answer += roman[1000]
      a+=1000
    }
  }
  return answer
}

main()
