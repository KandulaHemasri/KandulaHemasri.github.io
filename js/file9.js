//Arrays and methods

// const points = [2,5,3,2,1,8];
// points.forEach((value,index) => {
//     // console.log(c[b]);
//     console.log(index);
// });

// const newArr = points.map((value,index) => {
//     // console.log(c[b]);
//     // console.log(a);
//     console.log(index);
// });

// const point = [2,5,3,1,8];
// const newHema = point.map((value,index) => (value+=5));
// console.log(newHema);

//Map : values will be stored in new array


// const point = [2,5,3,1,8];
// const newHema = point.filter((value,index) => (value>2));
// console.log(newHema);

//find : it will not store in array .It is single value
// const point = [2,3,5,1,8];
// const Hema = point.find((value) => (value>2));
// console.log(Hema);  

// const point = [2,3,5,2,1,8];
// const Hema = point.reduce((sum,value) =>
//     {
//         return sum+value;
//     },0); 
// console.log(Hema);

const point = [2,5,3,1,8];
const newHema = point.map(value =>(value===5));
console.log(newHema);


