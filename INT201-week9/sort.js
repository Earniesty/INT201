//join
const nums = [-5, -6, 7, 77, 8, 9, -1, 0]
const numString = nums.join('*')
console.log(numString);

console.log(nums.sort()); //[-1, -5, -6, 0, 7, 77,  8, 9]

//ฯ้อยไปมาก ascending sorting
nums.sort( (num1, num2) => num1 - num2 )
console.log(nums);

//descending sort
nums.sort( (num1, num2) => num2 - num1 )
console.log(nums);