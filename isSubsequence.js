((s, t) => {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  if (t.length === s.length) return s === t ? true : false;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < t.length; j++) {
      if (s[i] === t[j]) break;
      t = t.slice(0, i) + t.slice(i + 1);
      j--;
    }
  }
  if (s.length != t.length) t = t.slice(0, s.length)
  return s === t ? true : false;
})("b", "abc");
