const student = {id: 65130500025, firstname: 'Thanachanok', lastname: 'Banjongjinda'}
console.log(student);
console.log(typeof student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

const lecturer = {id: 1001, firstname: 'Ann', lastname: 'Boon'}
console.log(lecturer); 
console.log(Object.prototype.isPrototypeOf(lecturer));

//dynamic properties
const someoneId = student.id //object.key
const someoneFirstName = student['firstname'] //object['']
console.log(someoneId);
console.log(someoneFirstName);

//way to assign property value
student.id = 65130500030
student['firstname'] = 'Earn'
console.log(student.id);
console.log(student['firstname']);

//dynamic properties
//add new property
student.email = 'earnthanachaok@gmail.com'
//or student['email'] = 'asdfghjkl@xcvbnm'
student['address'] = 'Bangkok, Thailand'
console.log(student);

// How to delete existing property
delete student.address
console.log(student);

//nested object
student.advisor = lecturer
console.log(student);

console.log(student.advisor.firstname);
console.log(student['advisor']['firstname']);

console.log('\n');
//object เก็บ function

student.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
console.log(student.getFullName()); //execute function getFullName()
console.log(student.getFullName); //get property value of getFullName
console.log(student);

const student2 = {id: 6666, firstname: 'Somooh', lastname: 'Chaiyo'}
student2.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
console.log(student2.getFullName());

//2 create obj with constructor function
function Person(id, firstname, lastname) {
    this.id = id
    this.fullname = `${firstname} ${lastname}`
}

const p1 = new Person(111, 'Mary', 'Jo')
const p2 = new Person(112, 'Mee', 'Jee')
const p3 = new Person(113, 'Maeo', 'Joh')
console.log(p1);
console.log(p2);
console.log(p3);
console.log(Object.prototype.isPrototypeOf(p1));
console.log(Person.prototype.isPrototypeOf(p2));
console.log(Date.prototype.isPrototypeOf(p3));

console.log('\n');

//3 create class obj with class
class Student {
    constructor(id, fn, ln) {
        this.id = id
        this.firstname = fn
        this.lastname = ln
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}
//st1 -> Student prototype -> Object prototype(Ancestor)
const st1 = new Student(1, 'Peter', 'Hunter')
const st2 = new Student(2, 'Tew', 'Teeratorn')
console.log(st1);
console.log(st2);
console.log(st1.getFullName());
console.log(st2.getFullName());
console.log(Object.prototype.isPrototypeOf(st1));  //true
console.log(Student.prototype.isPrototypeOf(st1)); //true

//undergratSt1 obj -> Student prototype -> Object prototype(Ancestor)

const undergratSt1 = Object.create(st1)
console.log(undergratSt1);
console.log(undergratSt1.id);
console.log(undergratSt1.firstname);
console.log(undergratSt1.lastname);
console.log(Object.prototype.isPrototypeOf(undergratSt1));  //true
console.log(Student.prototype.isPrototypeOf(undergratSt1));  //true
undergratSt1.project = 'Web Application'
console.log(undergratSt1);
