const main = () => {
  const response = validParenthese("(]");
};

const validParenthese = (s) => {
    let response;
    if (s.length % 2 != 0) {
      return false;
    }
    for (const char of s) {
      s = s.replace("{}", "");
      s = s.replace("[]", "");
      s = s.replace("()", "");
      if (s.length === 0) {
        response = true;
        break;
      } else if (s.includes("[]") || s.includes("{}") || s.includes("()")) {
        continue;
      } else if (s.length > 0) {
        response = false;
        break;
      }
    }

    if (s.length === 0) response = true;
    return response;
};

main();
