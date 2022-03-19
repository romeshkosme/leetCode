((s) => {
  if (s.length === 1) return 0;
  function findIndex(s) {
    let elem = new Map();
    for (let i = 1; i < s.length; i++) {
      if (elem.has(s[i])) {
        elem.set(s[i], elem.get(s[i]) + 1);
        continue;
      }
      elem.set(s[i], 1);
    }
    console.log(elem);
  }
  findIndex(s);
})("aaa");
