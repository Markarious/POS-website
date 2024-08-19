 function processPayment(event) {
            event.preventDefault(); // Prevent the form from submitting the default way

            // Get the selected payment method
            const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

            // Show a message with the selected payment method (for demo purposes)
            alert(`You selected ${selectedMethod} as your payment method. Processing payment...`);

            // Redirect to a confirmation page or process the payment accordingly
            // Example: window.location.href = "/payment-confirmation.html";
        }