// import products from "../data/products";

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: "cooking oil",
        price: 10.5,
        type: "grocery",
        offer: {
            number: 3,
            percent: 20,
        },
    },
    {
        id: 2,
        name: "Pasta",
        price: 6.25,
        type: "grocery",
    },
    {
        id: 3,
        name: "Instant cupcake mixture",
        price: 5,
        type: "grocery",
        offer: {
            number: 10,
            percent: 30,
        },
    },
    {
        id: 4,
        name: "All-in-one",
        price: 260,
        type: "beauty",
    },
    {
        id: 5,
        name: "Zero Make-up Kit",
        price: 20.5,
        type: "beauty",
    },
    {
        id: 6,
        name: "Lip Tints",
        price: 12.75,
        type: "beauty",
    },
    {
        id: 7,
        name: "Lawn Dress",
        price: 15,
        type: "clothes",
    },
    {
        id: 8,
        name: "Lawn-Chiffon Combo",
        price: 19.99,
        type: "clothes",
    },
    {
        id: 9,
        name: "Toddler Frock",
        price: 9.99,
        type: "clothes",
    },
];


// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

let cartItems = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            cartList.push(products[i]);
        }
    }
    calculateTotal();
    document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
    cartItems = 0;
    printCart();
    document.getElementById("count_product").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    console.log("El total es: " + total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    for (let i = 0; i < cartList.length; i++) {
        if (cart.includes(cartList[i])) {
            const product = cart.find((product) => product.id === cartList[i].id);
            product.quantity += 1;
            product.subtotal = product.quantity * product.price;
        } else {
            cart.push(cartList[i]);
            const product = cart.find((product) => product.id === cartList[i].id);
            product.quantity = 1;
            product.subtotal = product.price;
        }
    }
    applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i in cart) {
        if (cart[i].id === 1) {
            if (cart[i].quantity > 2) {
                cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            } else {
                delete cart[i].subtotalWithDiscount;
            }
        }
        if (cart[i].id === 3) {
            if (cart[i].quantity > 9) {
                cart[i].subtotalWithDiscount = (cart[i].subtotal * 2) / 3;
            } else {
                delete cart[i].subtotalWithDiscount;
            }
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let total = 0;
    let table = document.getElementById("cart_list");
    table.innerHTML = "";
    for (let i in cart) {
        table.innerHTML += `<tr>
            <th scope="row">${cart[i].name.charAt(0).toUpperCase() +
            cart[i].name.slice(1).toLowerCase()
            }</th>
            <td>$${cart[i].price}</td>
            <td><div class="d-inline-flex">${cart[i].quantity} <button class="btn btn-success btn-sm" onclick="addToCart(${cart[i].id
            })">+</button> <button class="btn btn-danger btn-sm" onclick="removeFromCart(${cart[i].id
            })">-</button></div></td>
            <td>$${cart[i].subtotalWithDiscount
                ? cart[i].subtotalWithDiscount.toFixed(2)
                : cart[i].subtotal
            }</td>
        </tr>`;
        if (cart[i].subtotalWithDiscount) total += cart[i].subtotalWithDiscount;
        else total += cart[i].subtotal;
    }

    document.getElementById("total_price").innerHTML =
        parseFloat(total).toFixed(2);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i in products) {
        if (id === products[i].id) {
            if (cart.includes(products[i])) {
                const product = cart.find((product) => product.id === products[i].id);
                product.quantity += 1;
                product.subtotal = product.quantity * product.price;
            } else {
                cart.push(products[i]);
                const product = cart.find((product) => product.id === products[i].id);
                product.quantity = 1;
                product.subtotal = product.price;
            }
            cartItems++;
        }
    }
    document.getElementById("count_product").innerHTML = cartItems;
    applyPromotionsCart();
    printCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove from cart
    // 2. Add found product to the cartList array
    const product = cart.find((product) => product.id === id);
    if (product.quantity === 1) {
        const indexToDelete = cart.indexOf(product);
        cart.splice(indexToDelete, 1);
    } else {
        product.quantity--;
        product.subtotal = product.quantity * product.price;
        applyPromotionsCart();
        
    }
    cartItems--;
    document.getElementById("count_product").innerHTML = cartItems;
    printCart();
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
