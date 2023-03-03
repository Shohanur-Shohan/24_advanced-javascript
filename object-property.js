const student = [
    {id:1, name: "Shohan", age: 20},
    {id:2, name: "tuhin", age: 22},
    {id:3, name: "limon", age: 23},
    {id:4, name: "Jahid", age: 24}
];

const names = student.map( n => n.name );
const ids = student.map( i => i.id );
console.log(names);
console.log(ids);


const bigger = student.filter( b => b.age<23 );
console.log(bigger);

const biggerONE = student.find( b => b.age<23 );
console.log(biggerONE);