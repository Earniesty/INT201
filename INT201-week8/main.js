let a, b, rest;
[a, b] = [5, 10];
console.log(a);
console.log(b);

[a, b, ...rest] = [5, 10, 15, 20, 25];
console.log(rest);

const book = {
  isbn: "123456789",
  title: "Introduction to JavaScript",
  author: { firstname: "Adam", lastname: "Lee" },
  publisher: { name: "Harpercollins", location: {name: 'Silicon', country: 'USA'} },
};

const { title } = book; //equally to const title=book.title
console.log(title);
//store property to new variable name เปลี่ยนชื่อ
const { publisher: publisherName, isbn: isbn_book } = book;
console.log(publisherName);
console.log(isbn_book);

const {
  publisher: { location : {country} }
} = book;
console.log(country);
