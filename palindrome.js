// palindrome romanNumber
// Input: integer (positive ans negative)
// output: boolean

const main = () => {
  console.log(isPalindrome(10))
}

const isPalindrome = (x) => {
  if (x < 0) {
    return false
  }
  let number = "" + x
  let reverseNumber = "";
  for (let i = number.length; i > 0; i--) {
    reverseNumber += number[i-1]
  }
  if(+reverseNumber === +number) {
    return true
  } else {
    return false
  }
}

main()
