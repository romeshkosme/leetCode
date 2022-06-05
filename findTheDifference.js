((s, t) => {
  if (t.length === 1) return t;
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (t[i] === s[j]) {
        s = s.slice(0, j) + s.slice(j + 1);
        t = t.slice(0, i) + t.slice(i + 1);
        i--;
        break;
      }
    }
  }
  return t;
})("abdc", "abcde");
