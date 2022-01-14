// reverseString with input as ["r", "o", "m", "e", "s", "h"]

((s) => {
    if (s.length === 1) return s;
    let i = 0;
    while(i < Math.floor(s.length/2)) {
        let temp = s[i]
        s[i] = s[(s.length-1)-i]
        s[(s.length-1)-i] = temp
        i++
    }
    return s;
})(["r", "o", "m", "e", "s", "h", "3"])