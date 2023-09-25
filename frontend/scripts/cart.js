// Load cart from LocalStorage
cart = JSON.parse(localStorage.getItem('cart')) || [];
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsTbody = document.getElementById('cartItems');
    let totalPrice = 0; // Initialize the total price to 0

    cart.forEach(product => {
        const row = `
                <tr>
                    <td>${product.name}</td>
                    <td>$${product.price}</td>
                </tr>
            `;
            cartItemsTbody.innerHTML += row;
            totalPrice += parseFloat(product.price);
    });

    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
});

document.getElementById('checkoutButton').addEventListener('click', function() {
    // For simplicity, just redirecting to a checkout page
    // You can modify this to suit your actual checkout flow
    window.location.href = "/views/checkout.html";
});
// Add more cart-specific functions as needed.
