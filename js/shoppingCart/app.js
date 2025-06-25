// //Shopping Cart

// let cart = {};
// const products = [
//     {id:1,name:"Laptop",price:25000},
//     {id:2,name:"Mobile", price:20000},
//     {id:3,name:"Headphone",price:10000},
// ];

// const showProducts = () => {
//     let str = "";
//     products.map((value) => {
//         return str += `${value.id}-${value.name}-${value.price}\n`;
//     });
// };
// showProducts()



// const addToCart=(id) => {
//     cart = {...cart,[id]:2};
// }


// const showCart = () => {
//        products.map(value=>{
//     cart[value.id] && console.log(`${value.name}-$${value.price}-${cart[value.id]}-$${value.price*cart[value.id]}`)
// })
// };


// const increment = (id) => {
//     cart = {...cart,[id] : cart[id]+1};
// }


// const decrement = (id) => {
//     cart = {...cart,[id] : cart[id]-1};
// }


// const total = products.reduce((sum,value) => {
//     return sum + value.price * (cart[value.id]??0);
// },0);




const products = [
{ id: 1, name: "Laptop", price: 25000 },
{ id: 2, name: "Mobile", price: 20000 },
{ id: 3, name: "Headphone", price: 10000 },
];

let cart = {};

function addToCart(id) {
cart[id] = (cart[id] || 0) + 1;
updateCartUI();
}

// func: increment
function increment(id) {
cart[id]++;
updateCartUI();
}

// func: decrement
function decrement(id) {
if (cart[id] > 1) {
cart[id]--;
} else {
deleteFromCart(id);
return;
}
updateCartUI();
}

// func: deleteFromCart
function deleteFromCart(id) {
delete cart[id];
updateCartUI();
}

// func: renderPage
function renderPage() {
 showProducts();
 updateCartUI();
}

// func: showProducts
function showProducts() {
const productList = document.getElementById("productList");
productList.innerHTML = "";
products.forEach((product) => {
 productList.innerHTML += `
<div class="product">
 <div>${product.name} - ₹${product.price}</div>
 <button onclick="addToCart(${product.id})">Add to Cart</button>
 </div>
 `;
 });
}

// func: updateCartUI
function updateCartUI() {
const cartList = document.getElementById("cartList");
 const totalAmount = document.getElementById("totalAmount");
 cartList.innerHTML = "";
 let total = 0;

 products.forEach((product) => {
 const qty = cart[product.id];
 if (qty) {
 const subtotal = qty * product.price;
 total += subtotal;
 cartList.innerHTML += `
 <div class="cart-item">
 <div>${product.name} - ₹${product.price} x ${qty} = ₹${subtotal}</div>
 <div>
 <button onclick="increment(${product.id})">+</button>
 <button onclick="decrement(${product.id})">-</button>
 <button onclick="deleteFromCart(${product.id})">Delete</button>
 </div>
 </div>
 `;
 }
 });

 totalAmount.textContent = total;
}

// initialize page
renderPage();

