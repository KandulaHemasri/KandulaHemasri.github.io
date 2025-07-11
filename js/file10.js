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
    console.log("***Products List***");
    console.log(str);
};
showProducts()


const addToCart=(id) => {
    cart = {...cart,[id]:2};
}
addToCart(1);
console.log("Added 1 product to cart");
console.log(cart);
addToCart(2);
console.log("Added 2 product to cart");
console.log(cart);
addToCart(3);
console.log("Added 3 product to cart");
console.log(cart);

const showCart = () => {
       products.map(value=>{
    cart[value.id] && console.log(`${value.name}-$${value.price}-${cart[value.id]}-$${value.price*cart[value.id]}`)
})
};
console.log("My Cart");
showCart()

const increment = (id) => {
    cart = {...cart,[id] : cart[id]+1};
}
 console.log("my cart after Increment");
increment(1);
increment(3);
showCart()

const decrement = (id) => {
    cart = {...cart,[id] : cart[id]-1};
}
console.log("my cart after decrement");
decrement(1);
showCart()

const total = products.reduce((sum,value) => {
    return sum + value.price * (cart[value.id]??0);
},0);
console.log(`order value: ${total}`);