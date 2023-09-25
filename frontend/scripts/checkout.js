document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Gather form data
        const formData = new FormData(checkoutForm);
        
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const result = await submitCheckout(data);
            if (result.success) {
                alert("Order successfully placed!");
                localStorage.clear();
                window.location.href = "/index.html";  // Redirect to the first page
            } else {
                alert("Error placing order. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting checkout:", error);
            alert("Failed to submit checkout. Please try again.");
        }
    });
});