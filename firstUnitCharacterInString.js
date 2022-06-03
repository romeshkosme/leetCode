((s) => {
  if (s.length === 1) return 0;
  let index = 0;
  let unique = true;
  for (let i = 0; i < s.length; i++) {
    unique = true;
    for (let j = 0; j < s.length; j++) {
      if (j === i) {
        continue;
      }
      if (s[i] !== s[j]) {
        index = i;
      } else {
        unique = false;
        break;
      }
    }
    if (unique) {
        break
    } else {
        unique = false;
        index = -1
    }
  }
//   console.log(index);
  return index;
})("loveleetcode");
