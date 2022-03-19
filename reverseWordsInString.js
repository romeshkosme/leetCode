((s) => {
  let reverse = "";
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " || i === s.length - 1) {
      let start = i === s.length - 1 ? i : i - 1;
      end = i === s.length - 1 && s.includes(" ") ? end + 1 : end
      while (start >= end) {
        reverse += s[start];
        start--;
      }
      if (end === 0 && s.includes(" ")) reverse += " ";
      end = i;
    }
  }
  return reverse;
})("a b c d");
