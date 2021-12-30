// Implement strStr
const strStr = (haystack, needle) => {
  if (needle == "" || needle.length === 0) return 0;
  const needleLen = needle.length;
  let res;
  if (haystack.length === needle.length && haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;
  if (haystack != "" || haystack.length > 0) {
    let arr = Array(haystack.length - needleLen + 1)
      .fill()
      .map((_, index) => index);
    for (let i of arr) {
      let tempStr = haystack[i];
      for (let j = 1; j < needleLen; j++) {
        tempStr += haystack[i + j];
      }
      if (tempStr === needle) {
        console.log("c", i)
        res = i;
        break;
      }
    }
    return res === false || res === undefined ? -1 : res;
  } else {
    return -1
  }
};

const response = strStr("aaaaa", "bba");
console.log(response);
