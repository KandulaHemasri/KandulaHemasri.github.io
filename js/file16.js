//promise


// const f1 =() => {
//    setTimeout(() => {
//     return 5;
//    },5000) 
// };

// const f2 = (x) => {
//     console.log(x+6);
// };

// const n = f1()
// f2(n)

// const f1 =() => {
//  return new Promise((resolve,reject) => {
//     resolve(5);
//  });
// };

// const f2 = (x) => {
//     console.log(x+6);
// };

// const n = f1()
// f2(n)

// const f1 =() => {
//     return 5;
// };

// const f2 = (x) => {
//     console.log(x+6);
// };

// const n = f1()
// f2(n)


// const f1 =() => {
//  return new Promise((resolve,reject) => {
//     resolve(5);
//  });
// };

// const f2 = (x) => {
//     console.log(x+6);
// };
// f1().then((n)=> f2(n));

// const f1=()=>{
//     return new Promise((resolve,reject) => {
//         resolve(5);
//         reject("Something went wrong");
//     });
// };

// const f2=(x)=>{
//     console.log(x+6);
// };

// f1()
// .then((n)=>f2(n))
// .catch((err)=> console.log(err))

// const f1=(a)=>{
//     return new Promise((resolve,reject) =>
//     {
//         if(a<0) reject("Invalid number");
//         else resolve(a);
//     });
// };

// const f2=(x)=> {
//     console.log(x+6);
// };

// f1(-7)
// .then((n)=>f2(n))
// .catch((err)=>console.log(err))


// fetch("https://jsonplaceholder.typicode.com/users1")
// .then(res=>res.json())
// .then(data =>{
//     data.forEach((value)=>{
//         console.log(value.name)
//         console.log(value.email);
//     });
// })
// .catch((err) =>console.log("Something went wrong"));


const fetchData = async() => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await res.json();
    data.forEach((value) => {
        console.log(value.id,value.name);
    });
};
fetchData();
