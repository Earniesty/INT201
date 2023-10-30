let a = 1
let b = 10

function doSomething() {
    let b = 5
    let result = a + b
    console.log(result); //6
    function doIt() {
        let c = 100
        console.log(c); //100
        result += c 
        console.log(result); //106
    }
    return doIt
    // doIt()
    // console.log(c); //not defined
}
// doIt() //error ไม่มีสิทธิ์เข้าถึง
// doSomething()
// a = 100
// console.log(a);
// console.log(b);

const fn = doSomething()
console.log(typeof fn);
fn()