async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3002/products');
        const products = await response.json();
        
        return products;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        // Handle error (maybe display an error message to the user)
    }
}

async function submitCheckout(data) {
    const cartItems = JSON.parse(localStorage.getItem('cart') || "[]");
    data['cart']= cartItems
    const response = await fetch('http://localhost:3002/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}