const fruits = ['apple', 'watermelon', 'orange']
fruits.forEach(fruit => console.log(fruit.charAt(0)));
let allFruits = ''
fruits.forEach(fruit => allFruits += fruit + ' ');
console.log(allFruits);

console.log('\n');

const array1 = [1,2,3,4,5]
const map1 = array1.map(x => x * 2)
console.log(map1);

const array2 = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'}
]
const map2 = array2.map((array2) => array2.name)
console.log(map2);

//filter
const students = [
    {id: 1, name: 'A', lastname: 'AAA'},
    {id: 2, name: 'Bobby', lastname: 'BOBB'},
    {id: 3, name: 'C', lastname: 'Cob'}
]

const Astudents = students.filter((students) => students.lastname.toLowerCase().startsWith('aaa'))
console.log(Astudents);

const Bobbystudents = students.filter((students) => 
students.name.toLowerCase().includes('ob') ||
students.lastname.toLowerCase().includes('ob'));
console.log(Bobbystudents);

//map
const ids = students.map((students) => students.id)
console.log(ids);

const fullname = students.map(
    (students) => `${students.lastname}, ${students.name}`
)
console.log(fullname);

//return all student ids in the format 'entry year' follows with student id, for example,
//{id: 1, firatname: 'Somsak', lastname: 'Jaidee'} => 20231 (current year + id)

const newIDs = students.map(
    (student) => {
        const currentYear = new Date(Date.now()).getFullYear()
        return currentYear + '' + student.id
    }
)
console.log(newIDs);

//find() + findIndex()
const oStudents = students.find((students) => 
    students.lastname.toLowerCase().includes('o')
)
console.log(oStudents);

// const nameOfOStudents = students.find((students) => 
//     students.lastname.toLowerCase().startsWith('b')
// )

//every()
const bStudents = students.findIndex((students) => 
    students.lastname.toLowerCase().startsWith('b')
)
console.log(bStudents);

const idMorethan0 = students.every((students) =>
    students.id > 0
)
console.log(idMorethan0);

//some()
const fnameIsC = students.some((students) => 
    students.name.toLowerCase().startsWith('a')
)
console.log(fnameIsC);
