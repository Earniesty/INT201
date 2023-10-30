const msg = 'Today is a present'
console.log(msg.includes('Re')); //false
console.log(msg.includes('re')); //true
console.log(msg.includes('day')); //true
console.log(msg.includes('present')); //true  //เพราะเป็น string

const newMsg = msg.split(' ') //ตัดคำที่มีช่องว่าง
console.log(newMsg); //[ 'Today', 'is', 'a', 'present' ]
console.log(newMsg.includes('re'));
console.log(newMsg.includes('day'));
console.log(newMsg.includes('today'));
console.log(newMsg.includes('Today')); //เอาทั้งคำ เพระาเป็น array