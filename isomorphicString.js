((s, t) => {
    if (s.length != t.length) return false;
    let sMap = new Map()
    let tMap = new Map()
    let i = 0
    let sString = "";
    let tString = ""
    while(s.length > i && t.length > i) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], t[i])
        }
        if (!tMap.has(t[i])) {
            tMap.set(t[i], s[i])
        }
        i++;
    }
    for (const char of s) {
        sString += sMap.get(char)
    }
    for (const char of t) {
        tString += tMap.get(char)
    }
    return t === sString && s === tString ? true : false;
})("babc", "baba")