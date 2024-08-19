function filterProducts() {
        // Get the selected category from the dropdown
        const selectedCategory = document.getElementById("category").value;
        
        // Get all the product elements
        const products = document.querySelectorAll(".product");

        // Loop through each product
        products.forEach(product => {
            // Get the category of the product
            const productCategory = product.getAttribute("data-category");
            
            // Check if the product matches the selected category or if no category is selected
            if (selectedCategory === "" || selectedCategory === productCategory) {
                // Show the product if it matches the selected category
                product.style.display = "block";
            } else {
                // Hide the product if it does not match
                product.style.display = "none";
            }
        });
    }






     let cart = [];

    function updateCartDisplay() {
        const cartItemsDiv = document.getElementById("cart-items");
        const cartTotalDiv = document.getElementById("cart-total");
        const payButton = document.getElementById("pay-button");

        // Clear the cart display
        cartItemsDiv.innerHTML = "";

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
            cartTotalDiv.querySelector("h3").textContent = "Total: GH₵0.00";
            payButton.disabled = true; // Disable the pay button if the cart is empty
            return;
        }

        // Display each item in the cart
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>Price: GH₵${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });

        // Update the total price
        cartTotalDiv.querySelector("h3").textContent = `Total: GH₵${total.toFixed(2)}`;
        payButton.disabled = false; // Enable the pay button if there are items in the cart
    }

    function addToCart(productName, productPrice) {
        // Add the product to the cart array
        cart.push({
            name: productName,
            price: parseFloat(productPrice)
        });

        // Update the cart display
        updateCartDisplay();
    }

    function removeFromCart(index) {
        // Remove the item from the cart array
        cart.splice(index, 1);

        // Update the cart display
        updateCartDisplay();
    }

    function processPayment() {
        if (cart.length === 0) return; // If the cart is empty, do nothing

        // For demonstration, we'll simply show an alert
        // You can integrate actual payment gateways here (like PayPal, Stripe, etc.)
        let totalAmount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        console.log(`You are paying GH₵${totalAmount}. Payment processed successfully!`);

        // Clear the cart after payment
        cart = [];
        updateCartDisplay();
    }

    // Attach click event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".product button").forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = productElement.querySelector(".price").textContent.replace("GH₵", "").replace(",", "");
            addToCart(productName, productPrice);
        });
    });