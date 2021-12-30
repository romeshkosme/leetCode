const main = () => {
  longestCommonPrefix(["f", "fl"]);
}

const longestCommonPrefix = (strs) => {
  // IF ARRAY HAS ONLY 1 ELEMENT
  if (strs.length === 1) return strs[0]; //console.log(strs[0])

  // IF ANY ARRAY ELEMENT IS OF LENGTH 0
  if (strs.findIndex(elem => elem == "") >= 0) return ""; // console.log("found blank string")

  let commonStr = strs[0];
  strs.forEach(element => {
    commonStr = commonStr.length < element.length ? commonStr : element;
  });
  // find prefix
  for (let i = 0; i < strs.length; i++) {
    let tempPrefix = ""
    for (let j = 0; j < commonStr.length; j++) {
      if (strs[i][j] == commonStr[j]) {
        tempPrefix += strs[i][j]
        continue;
      };
      break;
    }
    if (tempPrefix!= commonStr) commonStr = tempPrefix
  }
  return commonStr; // console.log("commonStr - -", commonStr)
}

main()
