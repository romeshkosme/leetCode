((ransomNote, magazine) => {
  if (ransomNote.length === 1 && magazine.length === 1)
    return ransomNote === magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      let char = ransomNote[i];
      ransomNote = ransomNote.replace(char, "");
      magazine = magazine.replace(char, "");
      i--;
    }
    if (!ransomNote) break;
  }
  if (!ransomNote) return true;
  return false;
})("aba", "aaba");
