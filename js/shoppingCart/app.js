//Shopping Cart

let cart = {};
const products = [
    {id:1,name:"Laptop",price:25000},
    {id:2,name:"Mobile", price:20000},
    {id:3,name:"Headphone",price:10000},
];

const showProducts = () => {
    let str = "";
    products.map((value) => {
        return str += `${value.id}-${value.name}-${value.price}\n`;
    });
};
showProducts()



const addToCart=(id) => {
    cart = {...cart,[id]:2};
}


const showCart = () => {
       products.map(value=>{
    cart[value.id] && console.log(`${value.name}-$${value.price}-${cart[value.id]}-$${value.price*cart[value.id]}`)
})
};


const increment = (id) => {
    cart = {...cart,[id] : cart[id]+1};
}


const decrement = (id) => {
    cart = {...cart,[id] : cart[id]-1};
}


const total = products.reduce((sum,value) => {
    return sum + value.price * (cart[value.id]??0);
},0);
