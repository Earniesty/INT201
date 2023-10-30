// replace negative numbers to zero
const nums = [-5, -6, 7, 8, 9, -1, 0]
const newNums = nums.map((num) => {
    return num < 0 ? 0 : num //short hand if else หลัง? => true , หลัง : => false
}) 
console.log(newNums);

const num1 = [1, 2, 3, 4]
console.log(`num1.fill(0,3,3) : ${num1.fill(0,1,3)}`);
