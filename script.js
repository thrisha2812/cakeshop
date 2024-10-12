// JavaScript for handling cart functionality

let cart = [];
let totalPrice = 0;

function addToCart(cake, price) {
    cart.push({ cake, price });
    totalPrice += price;
    alert(`${cake} added to cart!`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.cake} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
    totalElement.innerText = totalPrice;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    totalPrice = 0;
    updateCart();
    closeCart();
}

function openCart() {
    document.getElementById('cart-modal').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('active');
}

// Testimonials Form
document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML += `<p><strong>${name}:</strong> ${review}</p>`;
    document.getElementById('testimonial-form').reset();
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
