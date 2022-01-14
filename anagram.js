((s, t) => {
  if (s.length != t.length) return false;
  let sMap = new Map();
  let tMap = new Map();
  let i = 0;
  let response;
  while (i < s.length && i < t.length) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    if (!sMap.has(s[i])) sMap.set(s[i], 1);
    if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i]) + 1);
    if (!tMap.has(t[i])) tMap.set(t[i], 1);
    i++;
  }
  for (let [key, value] of sMap) {
    if (tMap.has(key) && tMap.get(key) === sMap.get(key)) {
      response = true;
    } else {
      response = false;
      break;
    }
  }
  return response;
})("rat", "car");
