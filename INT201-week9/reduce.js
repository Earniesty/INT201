const array1 = [1,2,3,4]
const reducer = (total, currentValue) => total + currentValue
console.log(`array1.reduce(reducer) : ${array1.reduce(reducer)}`);

const nums = [5, 2, 3, 4, 7]
const total = nums.reduce((sum,num) => sum + num, 0) //0 ๕ือค่า innitialไรซักอย่าง จะได้เริ่มที่0
console.log(total);

//ขอstring 1 ค่า ที่มาจากตัวต้น
//sol1
const names = ['Alice', 'Bob', 'Ann', 'Cath'] //'ABAC'
console.log(names.reduce((concat, str) => concat + str.charAt(0), '' )); 
//sol2
const name = ['Alice', 'Bob', 'Ann', 'Cath'];
const firstLetters = names.reduce((acc, name) => {
  return acc + name[0];
}, '');

console.log(firstLetters);

const buyProducts = [{price: 50, quanlity: 2}, {price: 299, quanlity: 10}, {price: 15, quanlity: 5}]
const priceProducts = buyProducts.reduce(
    (now, next) => now + (next.price * next.quanlity) //ผลคูณเริ่มด้วย1 ผลรวมเริ่มด้วย0
)
console.log(priceProducts);





