const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    if (productList) {
        products.forEach(product => {
            const div = document.createElement("div");
            div.innerHTML = `${product.name} - $${product.price} <button onclick='addToCart(${product.id})'>+</button>`;
            productList.appendChild(div);
        });
    }

    const cartItems = document.getElementById("cart-items");
    if (cartItems) {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
    }
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
}

function checkout() {
    window.location.href = "checkout.html";
}

function completeOrder() {
    alert("Order Completed!");
    cart = [];
    window.location.href = "index.html";
}
