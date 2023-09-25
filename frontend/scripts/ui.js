// Assume this function gets called when the page loads or when some event triggers
function loadProducts() {
    fetchProducts().then(products => {
        const productListContainer = document.getElementById('product-list');

        products.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-4'); // Adjust as needed for grid layout
            productDiv.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.brand.name}</h6>
                        <p class="card-text">Price: $${product.price}</p>
                        <!-- Add other product details here -->
                        <button onclick="addToCart(${product.id},'${product.name}',${product.price},'${product.brand.name}')" class="btn btn-primary">BUY</button>
                    </div>
                </div>
            `;

            productListContainer.appendChild(productDiv);
        });
    });
}

let cart = [];

function addToCart(id, name, price, brand) {
    cart.push({id, name, price, brand});
     // Store the cart data in LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}


