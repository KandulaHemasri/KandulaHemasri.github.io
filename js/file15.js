//JSON(Javascript object Notation)
// const student = {
//     name:"Hemasri",
//     age: 19,
// };

// console.log(JSON.stringify(student));


const student = '{"name":"Hemasri","age": 19}';
const newstu = JSON.parse(student);
console.log(newstu)
console.log(newstu.name)