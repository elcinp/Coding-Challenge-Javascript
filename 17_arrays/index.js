// Arraydeki tekrar eden sayıların sayısının en büyüğünü yazdırma
// Mesela: [1,1,2,3,4,5]
// Output:2
// Mesela: [1,2,3,4]
// Output:0

// tekrar eden sayılardan set oluşturma
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// const unique = Array.from(new Set(numbers));
// console.log(unique);
// [ 1, 2, 3, 4, 5, 6 ]

// The Array.from() method, we used above, converts the Set back to an array. This is required because a Set is not an array. You could also use spread operator if you want for conversion:

function repeatedNums(arr) {
  const count = {};

  arr.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });

  let result = Object.values(count);
  result.sort((a, b) => {
    return b - a;
  });
  return result[0];
}
console.log(repeatedNums([1, 1, 2, 3, 4, 4, 4, , 4, 5]));
