((n) => {
  let count = 1;
  let result = n;
  let until = n;
  while (count <= until) {
    switch (count) {
      case 1:
        result = result * (n - 1);
        break;
      case 2:
        result = Math.floor(result / (n - 1));
        break;
      case 3:
        result = result + (n - 1);
        break;
      case 4:
        result = result - (n - 1);
        break;
    }
    n--;
    count++;
    if (count > 4) count = 1;
    console.log("ocunt -- ", count)
    // console.log("result = ", result)
  }
  return result
})(10);

// ((n) => {
//   let count = 1;
//   let result;
//   function factorial(n) {
//     if (n === 1) return 1;
//     // console.log(n, count);
//     switch (count) {
//       case 1:
//         count++;
//         result = n * factorial(n - 1);
//         console.log("case 1", result);
//         return result;
//       case 2:
//         count++;
//         result = n / factorial(n - 1);
//         console.log("case 2", result);
//         return result;
//       case 3:
//         count++;
//         result = n + factorial(n - 1);
//         console.log("case 3", result);
//         return result;
//       case 4:
//         count = 1;
//         result = n - factorial(n - 1);
//         console.log("case 4", result);
//         return result;
//     }
//   }
//   console.log(factorial(n));
// })(4);
