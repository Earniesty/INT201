const names = ['alice', 'Jonh', 'Bob', 'Ann']
//some name start with A or a 
const isStartWithALetter = names.some((name) =>
name.toLowerCase().startsWith('a') //กลับ a เล็ก ให้เป็นใหญ่ก่อนเช็ค
)
//every name start with A or a 
const isEveryStartWithALetter = names.every((name) =>
name.startsWith('a') || name.startsWith('A')
)

console.log(isStartWithALetter); //true
console.log(isEveryStartWithALetter); //false