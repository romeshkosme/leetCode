function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(3))
//  1        2        3        4        5        6
// 0 + 1 || 1 + 1 || 1 + 2 || 2 + 3 || 3 + 5 || 5 + 8
//   1        2        3        5        8        13
//
// a + b
// 0,1,1,2,3,5,8,13
// 0,1,2,3,4,5,6
