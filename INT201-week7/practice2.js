//1. create object with object literalsconst
st1 = { studentId: 651000101, firstname: "Somchai", lastname: "Sookjai" };
console.log(typeof st1);
console.log(st1);
const st2 = {}; //empty
objectconsole.log(typeof st2);
console.log(Object.keys(st1));
//array of property
keyconsole.log(Object.values(st1));
//array of property valueconst
st3 = { firstname: "Suda", lastname: "Jaidee", studentId: 651000102 };
console.log(st3);
//composite object : address object is nested in st4 objectconst
st4 = {
  firstname: "Pornchai",
  lastname: "Jaidee",
  studentId: 651000103,
  address: { province: "Bangkok", country: "Thailand" },
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
console.log(st4.getFullname()); //Pornchai Jaidee

//property value can store functionconst
st5 = {
  firstname: "Porntip",
  lastname: "Dee",
  studentId: 651000105,
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
console.log(st5.getFullname()); //Porntip Dee
