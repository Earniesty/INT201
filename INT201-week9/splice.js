const nums = [10, 3, 75, 1, 30, 100] 
//remove 75,1,30
//return array of deleted element
const removeNums = nums.splice(2,3)
console.log(removeNums);
console.log(nums); //[ 10, 3, 100 ]

//2 splice to add new element
const addEle = nums.splice(2, 0, 111, 555, 888)
console.log(addEle);
console.log(nums); //[ 10, 3, 111, 555, 888, 100 ] แทรก

//3 splice to replace at index1 with 200, 400
const replaceEle = nums.splice(1, 2, 200, 400)
console.log(replaceEle);
console.log(nums); //[ 10, 200, 400, 555, 888, 100 ]