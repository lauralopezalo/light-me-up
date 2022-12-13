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
        if (cart[i].offer) {
            if (cart[i].quantity >= cart[i].offer.number) {
                let discount = cart[i].quantity * (cart[i].price * (1 - (cart[i].offer.percent / 100)));
                cart[i].subtotalWithDiscount = discount
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
            <td><div id="cart-buttons" class="d-inline-flex">${cart[i].quantity
            } <div><a onclick="addToCart(${cart[i].id
            })"><i class="fa-solid fa-square-plus"></i></a> <a onclick="removeFromCart(${cart[i].id
            })"><i class="fa-solid fa-square-minus"></i></a></div></td>
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
                product.subtotal = Math.round(product.quantity * product.price * 100) / 100;
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Loop for the array of products to fill in the cards
function fillCards() {
    let whatsNewContainer = document.getElementById("whatsnew-cards-container");
    let discoverContainer = document.getElementById("discover-container");
    let salesContainer = document.getElementById("sales-container");
    whatsNewContainer.innerHTML = "";
    discoverContainer.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        whatsNewContainer.innerHTML += `
<div class="col mb-5 d-flex justify-content-center ">
					<div id="card">
					<div id="product-image"><img class="card-img-top" src="./images/lamps/lamp${[i]}.jpeg" alt="lamp image" /></div>	
						<div class="d-flex justify-content-between align-items-end">
							<div id="product-info">
								<p id="product-brand">By ${products[i].brand}</p>
								<p id="product-name">${products[i].name}</p>
								<div class="d-flex justify-content-between">
									<p id="product-price">$${products[i].price}</p>
									<i onclick="addToCart(${[i]})" id="shop-icon"
												class="fa-solid fa-bag-shopping"></i>
								</div>
							</div>
						</div>
					</div></div>`;
    }
    for (let i = 5; i < 9; i++) {
        discoverContainer.innerHTML += `
<div class="col mb-5 d-flex justify-content-center ">
					<div id="card">
					<div id="product-image"><img class="card-img-top" src="./images/lamps/lamp${[i]}.jpeg" alt="lamp image" /></div>	
						<div class="d-flex justify-content-between align-items-end">
							<div id="product-info">
								<p id="product-category">${products[i].type}</p>
							</div>
						</div>
					</div></div>`;
    }
    for (let i = 9; i < products.length; i++) {
        salesContainer.innerHTML += `
<div class="col mb-5 d-flex justify-content-center ">
					<div id="card">
					<div id="product-image"><img class="card-img-top" src="./images/lamps/lamp${[i]}.jpeg" alt="lamp image" /></div>	
						<div class="d-flex justify-content-between align-items-end">
							<div id="product-info">
								<p id="product-brand">By ${products[i].brand}</p>
								<p id="product-name">${products[i].name}</p>
								<div class="d-flex justify-content-between">
									<p id="product-price">$${products[i].price} >> <span id="product-offer"> ${products[i].offer.percent}% off buying ${products[i].offer.number}u.</span></p>
									<i onclick="addToCart(${[i]})" id="shop-icon" class="fa-solid fa-bag-shopping"></i>
								</div>
							</div>
						</div>
					</div></div>`;
    }
}

fillCards()




