const add = (num1, num2) => num1+ num2
const subtract = (num1, num2) => num1 - num2
function doSomething1(num1, num2, op) {
    return op(num1, num2)
}

function doSomething2(op) {
    return op
}

const result1 = doSomething1(10, 5, add) //15
console.log(result1);
const result2 = doSomething2(add) //function: add
console.log(result2);
console.log(typeof result2); //function
const result3 = doSomething2(subtract)
console.log(result3); ////function: subtract
const result4 = doSomething2(1)
console.log(typeof result4); //number
console.log(result4); //1
const result5 = doSomething2('add')
console.log(typeof result5); //string 
console.log(result5); //add
